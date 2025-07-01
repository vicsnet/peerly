import React, { useEffect, useState } from "react";
import { SellerProducts } from "../SellerProductFeatures/SellerProducts";
// import { SellerProductDetails } from "../SellerProductDetailsFeature/SellerProductDetails";
import { SellerOrders } from "../SellerOrderFeature/SellerOrders";
import { SellerTeams } from "../SellerTeamsFeature/SellerTeams";
import { SellerTransactions } from "../SellerTransactionFeature/SellerTransactions";
import { SellerSettings } from "../SellerSettingsFeature/SellerSettings";
import { Home, Package2, Box, Users, Settings, Wallet } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import { NotificationIcon } from "../../../components/NotificationIcon";
import { useReadContract } from "thirdweb/react";
import useReadGetContract from "@/hooks/useReadGetContract";
import { useDashboardPageState, useDashboardTab, useShop, useUser } from "@/contexts/zustand/ZustandState";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { ethers } from "ethers";
import { liskTestnetProvider } from "@/constants/provider";
import { peerlyShopABI } from "@/constants/ABI/peerlyShop";
import {peerlyTrust} from "@/constants/contract"
import {peerlyTrustABI} from "@/constants/ABI/peerlyTrustABI"
import { SellerProductDetailsNew } from "../SellerProductDetailsFeature/SellerProductDetailsNew";
// import { useProducts } from "../../../contexts/ProductContext";

// Define dashboard pages
type DashboardPage = "home" | "products" | "product-details" | "orders" | "teams" | "transactions" | "settings";

export type SettingsTab = "profile" | "business" | "wallet" | "notifications";

interface SellerDashboardProps {
  businessName: string;
  initialPage?: string;
}

export function SellerDashboardNew({ businessName, initialPage = "home" }: SellerDashboardProps) {

    const router = useRouter();
//   const { getProductsByVendor, updateProduct } = useProducts();
const {currentUser} = useUser(); 
const {setShopAddress} = useShop()
const {currentPage, setCurrentPage}= useDashboardPageState()

  // const [currentPage, setCurrentPage] = useState<DashboardPage>(initialPage as DashboardPage);

  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const {activeSettingsTab, setActiveSettingsTab} = useDashboardTab();
  
  // Mock unread notifications count
  const [unreadNotifications, setUnreadNotifications] = useState(3);

  const {PeerlyPondContract} = useReadGetContract()

  
  
  // Mock vendor ID for this seller
  const vendorId = 1; // Using 1 as default vendor ID

  // Mock seller info - in a real app, this would come from authentication context or API
  const mockSellerInfo = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
  };

  // Handler for sidebar navigation
  const handleNavigation = (page: DashboardPage, settingsTab?: SettingsTab) => {
    setCurrentPage(page);
    
    // If we're navigating to settings and a specific tab is specified
    if (page === "settings" && settingsTab) {
      setActiveSettingsTab(settingsTab);
    }
    
    // Reset selected product when navigating away from product details
    if (page !== "product-details") {
      setSelectedProductId(null);
    }
  };
  
  // Handler for clicking the business profile in sidebar
  const handleBusinessProfileClick = () => {
    setCurrentPage("settings");
    setActiveSettingsTab("business");
  };
  
  // Handler for product selection
  const handleProductSelect = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentPage("product-details");
  };

  // Handler for toggling product active status
  const handleToggleProductStatus = (productId: number, isActive: boolean) => {
    // const product = getProductsByVendor(vendorId).find(p => p.id === productId);
    
    // if (product) {
    //   updateProduct({
    //     ...product,
    //     inventory: isActive ? (product.inventory > 0 ? product.inventory : 10) : 0,
    //     active: isActive // Explicitly set the active flag
    //   });
      
      // Show appropriate toast notification
      if (isActive) {
        // toast.success(`${product.name} has been published`);
      } else {
        // toast.info(`${product.name} has been unpublished`);
      }
    }
  

  // Handler for editing a product
  const handleEditProduct = (
    // updatedProduct
  ) => {
    // updateProduct(updatedProduct);
    // toast.success(`${updatedProduct.name} has been updated`);
  };

  // Handler for deleting a product
  const handleDeleteProduct = (
    // productId

  ) => {
    // Delete the product and navigate back to products page
    // const product = getProductsByVendor(vendorId).find(p => p.id === productId);
    // if (product) {
    //   updateProduct({
    //     ...product,
    //     deleted: true
    //   });
    //   toast.success(`${product.name} has been deleted`);
    //   handleNavigation("products");
    // }
  };



  // Render the top bar with notification icon
  const renderTopBar = (title: string) => (
    <div className="bg-white h-20 border-b border-slate-100">
      <div className="h-full flex items-center justify-between px-4 py-2.5">
        <div className="text-[18px] font-semibold text-black">{title}</div>
        <NotificationIcon unreadCount={unreadNotifications} />
      </div>
    </div>
  );
  const { data: shop, isLoading: shop_loading } = useReadContract({
    contract: PeerlyPondContract,
    method: "getShop",
    params: [currentUser?.address ?? ""],
  });

  console.log('shop addresss', shop);
  

  useEffect(()=>{
    // Define address0 as the zero address for comparison
    const address0 = "0x0000000000000000000000000000000000000000";
    if (
      !currentUser ||
      !currentUser.address ||
      currentUser.address === "" ||
      currentUser.address === address0 ||
      currentUser.isSeller === false
    ) {
      router.push("/");
    }
    if(shop){
      setShopAddress(shop)
    }
  }, [currentUser, shop])

  const {data: vendorProduct = []} = useQuery({
    queryKey:['vendorProductData', shop],
    queryFn: async()=>{
      const productsMap = new Map();
  
      const provider = new ethers.JsonRpcProvider(liskTestnetProvider);
      const shopContract = new ethers.Contract(shop as string, peerlyShopABI, provider);
  
      const productAddedEvents = await shopContract.queryFilter(
        shopContract.filters.productAdded()
      );
  
  
      const productUpdatedEvents = await shopContract.queryFilter(
        shopContract.filters.productUpdated()
      );
  
      const productRemovedEvents = await shopContract.queryFilter(
        shopContract.filters.ProductRemoved()
      );
  
      productAddedEvents.forEach((event) => {
        if ('args' in event) {
          const { args } = event;
          productsMap.set(args[0].toString(), {
            productId: args[0].toString(),
            productName: args[1],
            productDescription: args[2],
            productImage: args[3],
            price: args[4].toString(),
            totalStock: args[5].toString(),
            sold: args[6].toString(),
            specification:args[7].toString()
          });
        }
      });
    
      // Update products from ProductUpdated
      productUpdatedEvents.forEach((event) => {
        if ('args' in event) {
          const { args } = event;
          productsMap.set(args[0].toString(), {
            productId: args[0].toString(),
            productName: args[1],
            productDescription: args[2],
            productImage: args[3],
            price: args[4].toString(),
            totalStock: args[5].toString(),
            sold: args[6].toString(),

          });
        }
      });
    
      // Remove products from ProductRemoved
      productRemovedEvents.forEach((event) => {
        if ('args' in event) {
          const { args } = event;
          const productId = args[0].toString();
  
          productsMap.delete(productId);
        }
      });
  
      return Array.from(productsMap.values());
    },
    enabled: !!shop,
  })

  console.log('product', vendorProduct);



  const {data: productOrder = []} = useQuery({
    queryKey:['vendorProductOrderData', shop],
    queryFn: async()=>{
      const productsMap = new Map();
  
      const provider = new ethers.JsonRpcProvider(liskTestnetProvider);

      const shopContract = new ethers.Contract(shop as string, peerlyShopABI, provider);
  
  
      const productPurchasedEvents = await shopContract.queryFilter(
        shopContract.filters.ProductPurchased()
      );
  
      productPurchasedEvents.forEach((event) => {
        if ('args' in event) {
          const { args } = event;
          productsMap.set(args[0].toString(), {
            productId: args[0].toString(),
            // productName: args[1],
            // productDescription: args[2],
            // productImage: args[3],
            // price: args[4].toString(),
            // totalStock: args[5].toString(),
            // sold: args[6].toString(),
          });
        }
      });
    
  
  
      return Array.from(productsMap.values());
    },
    enabled: !!shop,
  })

console.log('productOrder',productOrder);


const {data: getRevenue} = useQuery({
    queryKey:['vendorRevenue', peerlyTrust],
    queryFn: async()=>{
  
      const provider = new ethers.JsonRpcProvider(liskTestnetProvider);

      const peerlyTrustContract = new ethers.Contract(peerlyTrust as string, peerlyTrustABI, provider);
  
  const revenue = await peerlyTrustContract.getReceived(shop)
    // 
  
    
  
  
      return revenue;
    },
    enabled: !!peerlyTrust,
  })


  console.log('getRevenue', getRevenue);

    /**
     * Finds the currently selected product from the vendor's product list.
     * 
     * - If `selectedProductId` is defined, it searches through `vendorProduct` (an array of products)
     *   to find the product whose `productId` matches `selectedProductId`.
     * - Handles cases where `productId` might be a string or a number by converting both
     *   `productId` and `selectedProductId` to strings before comparing.
     * - If no product is selected (`selectedProductId` is falsy), returns null.
     */
    const selectedProduct = selectedProductId
      ? vendorProduct.find((p: any) => {
          // Ensure both IDs are compared as strings for robustness
          return (
            (typeof p.productId === "string"
              ? p.productId
              : p.productId?.toString?.()) === selectedProductId.toString()
          );
        })
      : null;

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="w-[220px] bg-white h-full border-r border-slate-100 flex flex-col">
        {/* Logo */}
        <div className="px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="bg-black rounded-[4.67px] h-7 w-7 relative overflow-hidden">
              <div className="absolute left-[5.25px] top-[5.25px] h-[17.5px] w-[17.5px] overflow-clip">
                
                {/* Peerly logo would be here */}
              </div>
            </div>
            <div className="text-[32px] font-['Acme'] leading-8 whitespace-pre">Peerly</div>
          </div>
          <button className="text-slate-700">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 2.5V17.5" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.3333 12.5L10.8333 10L13.3333 7.5" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Navigation menu */}
        <div className="mt-8 flex flex-col gap-1 px-4">
          {/* Home */}
          <button 
            className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${currentPage === 'home' ? 'bg-slate-100' : 'bg-white'}`}
            onClick={() => handleNavigation('home')}
          >
            <Home className="h-4 w-4 text-slate-700" />
            <span className="text-[14px] font-medium text-slate-700">Home</span>
          </button>
          
          {/* Products */}
          <button 
            className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${ 
              currentPage === 'products' || currentPage === 'product-details' ? 'bg-slate-100' : 'bg-white'
            }`}
            onClick={() => handleNavigation('products')}
          >
            <Package2 className="h-4 w-4 text-slate-700" />
            <span className="text-[14px] font-medium text-slate-700">Products</span>
          </button>
          
          {/* Orders */}
          <button 
            className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${currentPage === 'orders' ? 'bg-slate-100' : 'bg-white'}`}
            onClick={() => handleNavigation('orders')}
          >
            <Box className="h-4 w-4 text-slate-700" />
            <span className="text-[14px] font-medium text-slate-700">Orders</span>
          </button>
          
          {/* Teams */}
          <button 
            className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${currentPage === 'teams' ? 'bg-slate-100' : 'bg-white'}`}
            onClick={() => handleNavigation('teams')}
          >
            <Users className="h-4 w-4 text-slate-700" />
            <span className="text-[14px] font-medium text-slate-700">Teams</span>
          </button>
          
          {/* Transactions */}
          <button 
            className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${currentPage === 'transactions' ? 'bg-slate-100' : 'bg-white'}`}
            onClick={() => handleNavigation('transactions')}
          >
            <Wallet className="h-4 w-4 text-slate-700" />
            <span className="text-[14px] font-medium text-slate-700">Transactions</span>
          </button>
          
          {/* Settings */}
          <button 
            className={`flex items-center gap-2 px-2 py-1.5 rounded-md ${currentPage === 'settings' ? 'bg-slate-100' : 'bg-white'}`}
            onClick={() => handleNavigation('settings')}
          >
            <Settings className="h-4 w-4 text-slate-700" />
            <span className="text-[14px] font-medium text-slate-700">Settings</span>
          </button>
        </div>
        
        {/* User profile at bottom - now clickable */}
        <button 
          className="mt-auto border-t border-slate-100 p-4 flex items-center gap-2 hover:bg-slate-50 w-full transition-colors"
          onClick={handleBusinessProfileClick}
        >
          <div className="h-8 w-8 rounded-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="User avatar" 
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-[14px] font-medium text-slate-700 flex-1 text-left">{businessName}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="#334155" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-hidden">
        {currentPage === "products" && (
          <div className="flex flex-col h-full">
            {renderTopBar("Products")}
            <div className="p-6 overflow-auto h-full">
              <div className="bg-white rounded-xl border border-slate-100 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] overflow-hidden">
                <SellerProducts vendorProduct={vendorProduct} vendorId={shop ?? ""} onProductSelect={handleProductSelect}/>
                   
                  {/* vendorId={vendorId}
                  onProductSelect={handleProductSelect}
                  onToggleStatus={handleToggleProductStatus}
                /> */}
              </div>
            </div>
          </div>
        )}
        
        {currentPage === "product-details" && selectedProduct && (
          <div className="flex flex-col h-full">
            {renderTopBar("Product Details")}
            <div className="overflow-auto h-full">
              <SellerProductDetailsNew 
                product={selectedProduct}
                onBack={() => handleNavigation("products")}
                onToggleStatus={handleToggleProductStatus}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
              />
            </div>
          </div>
        )}
        
        {currentPage === "home" && (
          <div className="flex flex-col h-full">
            {renderTopBar("Home")}
            
            {/* Dashboard Content */}
            <div className="flex-1 p-6 overflow-auto">
              <div className="flex flex-col gap-4 basis-0 grow min-h-px min-w-px">
                {/* Welcome section */}
                <div className="relative">
                  <div className="flex flex-col items-start justify-center">
                    <h1 className="text-[24px] font-semibold tracking-[-0.225px] text-gray-900 overflow-ellipsis overflow-hidden">
                      Welcome to Peerly!
                    </h1>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-[14px] text-gray-900">
                        You're all set up! Here's how your store is performing.
                      </p>
                      <div className="bg-green-100 px-3 py-1.5 rounded-md">
                        <p className="text-[14px] font-medium text-green-900 leading-[14px]">Setup Complete</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Analytics Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                  {/* Total Products */}
                  <div className="bg-white border border-slate-100 rounded-xl p-6">
                    <p className="text-[14px] text-gray-900">Total Products</p>
                    <h3 className="text-[18px] font-semibold">{vendorProduct.length}</h3>
                  </div>
                  
                  {/* Total Orders */}
                  <div className="bg-white border border-slate-100 rounded-xl p-6">
                    <p className="text-[14px] text-gray-900">Total Orders</p>
                    <h3 className="text-[18px] font-semibold">{productOrder.length}</h3>
                  </div>
                  
                  {/* Total Revenue */}
                  {/* convert to normal currency */}
                  <div className="bg-white border border-slate-100 rounded-xl p-6">
                    <p className="text-[14px] text-gray-900">Total Revenue</p>
                    <h3 className="text-[18px] font-semibold">$ 12,450 {Number(getRevenue)}</h3>
                  </div>
                  
                  {/* Store Views */}
                  {/* <div className="bg-white border border-slate-100 rounded-xl p-6">
                    <p className="text-[14px] text-gray-900">Store Views</p>
                    <h3 className="text-[18px] font-semibold">1,474</h3>
                  </div> */}
                </div>
                
                {/* Quick actions section */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] overflow-hidden">
                  <div className="flex flex-col gap-4 p-6">
                    <h2 className="text-[18px] font-semibold">Quick actions</h2>
                    
                    {/* Add Product Card */}
                    <div className="bg-white border border-slate-100 rounded-xl w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start p-6">
                        <div className="basis-0 grow min-h-px min-w-px">
                          <div className="flex flex-col items-start justify-center">
                            <h3 className="text-[16px] font-semibold text-gray-900">
                              Add new products
                            </h3>
                            <p className="text-[14px] text-gray-900">
                              List another item in your store
                            </p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          className="rounded-md border-slate-200"
                          onClick={() => handleNavigation('products')}
                        >
                          Add Product
                        </Button>
                      </div>
                    </div>
                    
                    {/* Preview Store Card */}
                    <div className="bg-white border border-slate-100 rounded-xl w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start p-6">
                        <div className="basis-0 grow min-h-px min-w-px">
                          <div className="flex flex-col items-start justify-center">
                            <h3 className="text-[16px] font-semibold text-gray-900">
                              Preview your storefront
                            </h3>
                            <p className="text-[14px] text-gray-900">
                              View your shop as customers would see it and make final tweaks.
                            </p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          className="rounded-md border-slate-200"
                        >
                          Preview Store
                        </Button>
                      </div>
                    </div>
                    
                    {/* Share Store Card */}
                    <div className="bg-white border border-slate-100 rounded-xl w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start p-6">
                        <div className="basis-0 grow min-h-px min-w-px">
                          <div className="flex flex-col items-start justify-center">
                            <h3 className="text-[16px] font-semibold text-gray-900">
                              Share store
                            </h3>
                            <p className="text-[14px] text-gray-900">
                              Get your store link to share
                            </p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          className="rounded-md border-slate-200"
                        >
                          Share Store
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Growth tips section */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] overflow-hidden">
                  <div className="flex flex-col gap-4 p-6">
                    <h2 className="text-[18px] font-semibold">Growth tips</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      {/* Boost sales tip */}
                      <div className="bg-sky-50 border border-sky-200 rounded-xl p-6">
                        <div className="flex flex-col items-start justify-center">
                          <h3 className="text-[16px] font-semibold text-sky-700">
                            📊 Boost sales
                          </h3>
                          <p className="text-[14px] text-sky-700">
                            Add product bundles to increase average order value
                          </p>
                        </div>
                      </div>
                      
                      {/* Marketing tip */}
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                        <div className="flex flex-col items-start justify-center">
                          <h3 className="text-[16px] font-semibold text-emerald-700">
                            📈 Marketing
                          </h3>
                          <p className="text-[14px] text-emerald-700">
                            Share your store on social media to reach more customers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {currentPage === "orders" && (
          <>
            {renderTopBar("Orders")}
            <div className="p-6 overflow-auto">
              <SellerOrders />
            </div>
          </>
        )}
        
        {currentPage === "teams" && (
          <>
            {renderTopBar("Teams")}
            <div className="p-6 overflow-auto">
              <SellerTeams />
            </div>
          </>
        )}
        
        {currentPage === "transactions" && (
          <>
            {renderTopBar("Transactions")}
            <div className="p-6 overflow-auto">
              <SellerTransactions />
            </div>
          </>
        )}
        
        {currentPage === "settings" && (
          <SellerSettings 
            onNavigateToPage={(page: string) => handleNavigation(page as DashboardPage)}
            businessName={businessName}
            sellerInfo={mockSellerInfo}
            activeTab={activeSettingsTab}
          />
        )}
      </div>
    </div>
  );
}