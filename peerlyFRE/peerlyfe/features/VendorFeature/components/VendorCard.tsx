import { Card, CardContent } from "../../../components/ui/card";
import { Star, MapPin } from "lucide-react";
import { Avatar, AvatarImage } from "../../../components/ui/avatar";
import { useReadContract } from "thirdweb/react";
import { defineChain, getContract } from "thirdweb";
import { client } from "@/lib/configThirdweb";
import { peerlyShopABI } from "@/constants/ABI/peerlyShop";
import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import { liskTestnetProvider } from "@/constants/provider";

interface VendorCardProps {
  address:string
  name: string;
  description: string;
  image: string;
  logo?: string;
  rating?: number;
  products?: number;
  location?: string;
}

export function VendorCard({ 
  address,
  name, 
  description, 
  image, 
  logo, 
  rating = 4.5, 
  products = 10,
  location
}: VendorCardProps) {



  return (
    <Card className="bg-white rounded-xl overflow-hidden relative shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-slate-50 flex-grow hover:shadow-md transition-shadow duration-200">
      <div className="w-full">
        {/* Cover Image */}
        <div 
          className="bg-cover bg-center bg-no-repeat h-[180px] w-full"
          style={{ backgroundImage: `url('${image}')` }}
        />
        
        {/* Logo (if available) */}
        {/* initially logo */}
        {logo&& (
          <div className="absolute top-[160px] left-4">
            <Avatar className="size-14 border-2 border-white shadow-sm">
              <AvatarImage src={image} alt={name} />
            </Avatar>
          </div>
        )}
        
        {/* Content */}
        {/* from ui */}
        {/* initially logo */}
        <CardContent className={`pt-${image ? '6' : '2'} pb-2.5 px-3`}>
          <h3 className="font-semibold text-[20px] text-gray-900 leading-[28px]">
            {name}
          </h3>
          <p className="font-normal text-[16px] text-gray-600 leading-[24px] overflow-hidden line-clamp-2 h-12">
            {description}
          </p>
          
          {/* Rating and Location */}
          <div className="flex flex-row justify-between w-full mt-1 text-[12px] font-medium">
            <div className="flex items-center">
              <Star className="size-3.5 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{rating} ({products})</span>
            </div>
            {location && (
              <div className="flex items-center">
                <MapPin className="size-3.5 text-gray-500 mr-1" />
                <span className="text-gray-500">{location}</span>
              </div>
            )}
          </div>
        </CardContent>
      </div>
    </Card>

  
  );
}