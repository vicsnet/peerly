import { useState } from "react";
import { VendorCard } from "./components/VendorCard";
import { Button } from "../../components/ui/button";
import { NavBar } from "../../components/NavBar";
import { HeroBanner } from "../HomeFeature/components/HeroBanner";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { User } from "@/types/user";
import { useReadContract } from "thirdweb/react";
import useReadGetContract from "@/hooks/useReadGetContract";
import { peerlyShopABI } from "@/constants/ABI/peerlyShop";
import { defineChain, getContract } from "thirdweb";
import { client } from "@/lib/configThirdweb";
import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import { liskTestnetProvider } from "@/constants/provider";
import { useRouter } from "next/navigation";

interface Vendor {
  id: number;
  name: string;
  description: string;
  category: string;
  logoUrl: string;
  coverImageUrl: string;
  rating: number;
  reviewCount: number;
  location: string;
}

interface VendorShowcaseProps {
  onVendorSelect?: (id: number) => void;
  onLoginClick?: () => void;
  onStartSellingClick?: () => void;
  onCartClick?: () => void;
  vendors?: Vendor[];
  categories?: string[];
  user?: User | null;
  onSignOut?: () => void;
  onProfileClick?: () => void;
  onOrdersClick?: () => void;
  onTransactionsClick?: () => void;
}

export function VendorShowcase({
  onVendorSelect,
  onLoginClick,
  onStartSellingClick,
  onCartClick,
  vendors = [],
  categories = ["All"],
  user,
  onSignOut,
  onProfileClick,
  onOrdersClick,
  onTransactionsClick
}: VendorShowcaseProps) {
  const { PeerlyPondContract } = useReadGetContract();

  
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const { data: allvendors, isLoading: allvendors_loading } = useReadContract({
    contract: PeerlyPondContract,
    method: "getAllShops",
    params: [],
  });

  const { data: vendorsData } = useQuery({
    queryKey: ['allVendorsData', allvendors],
    queryFn: async () => {
      if (!allvendors) return {};
      const provider = new ethers.JsonRpcProvider(liskTestnetProvider);
      const results = await Promise.all(
        allvendors.map(async (vendor) => {
          const shopContract = new ethers.Contract(vendor, peerlyShopABI, provider);

          const vendorUrl = await shopContract.getShopData();

          const res = await fetch(vendorUrl);
          return [vendor, await res.json()];
        })
      );
      return Object.fromEntries(results);
    },
    enabled: !!allvendors,
  });



  // Filter vendors by selected category
  const filteredVendors = selectedCategory === "All"
    ? vendors
    : vendors.filter(vendor => vendor.category === selectedCategory);

  return (
    <>
      <NavBar
        // onLoginClick={onLoginClick} 
        // onStartSellingClick={onStartSellingClick}
        // onCartClick={onCartClick}
        // user={user}
        // onSignOut={onSignOut}
        // onProfileClick={onProfileClick}
        // onOrdersClick={onOrdersClick}
        // onTransactionsClick={onTransactionsClick}
      />
      <HeroBanner onStartSellingClick={()=>router.push("/selling")} />
      <div className="w-full">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
          {/* filter button is in ui */}
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "text-slate-700 hover:text-slate-900"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Header with title and View All button */}
        <div className="flex flex-row items-start justify-between w-full mb-6">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-[30px] text-black tracking-[-0.225px] leading-[36px]">
            {selectedCategory === "All" ? "Featured Vendors" : `${selectedCategory} Vendors`}
          </h2>
          <Button
            variant="secondary"
            className="bg-slate-100 rounded-md text-[14px] font-medium text-slate-900 leading-[20px]"
          >
            View All
          </Button>
        </div>

        {/* Vendor grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {allvendors?.map((vendor, index) => (
            <div
              key={index}
              onClick={() => router.push(`/products/${vendor}`)}
              className="cursor-pointer"
            >
              <VendorCard
                address={vendor}
                name={vendorsData?.[vendor]?.name}
                description={vendorsData?.[vendor]?.description}
                image={vendorsData?.[vendor]?.image}
                logo={vendorsData?.[vendor]?.image}
                // products={Number(vendor)}
                location={"Akure"}
              />
            </div>
          ))}

          {/* Show message if no vendors in selected category */}
          {allvendors?.length === 0 && (
            <div className="col-span-full py-8 text-center">
              <p className="text-gray-500">No vendors found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}