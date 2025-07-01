// import React, { useState, useEffect } from "react";
// import { BackButton } from "../../components/BackButton";
// import { ProductCard } from "./components/ProductCard";
// import { CategorySidebar } from "../../components/CategorySidebar";
// import { NavBar } from "../../components/NavBar";
// import { VendorHeader } from "../../components/VendorHeader";
// import { useProducts } from "../../contexts/ProductContext";

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   avatar: string;
//   isSeller?: boolean;
// }

// interface ProductsPageProps {
//   onBackClick: () => void;
//   onLoginClick: () => void;
//   onProductSelect: (productId: number) => void;
//   onStartSellingClick: () => void;
//   onCartClick: () => void;
//   vendorId: number | null;
// onCartClick: () => void;
//   vendorId: number | null;
//   vendor: {
//     id: number;
//     name: string;
//     description: string;
//     logoUrl: string;
//     coverImageUrl: string;
//     rating: number;
//     reviewCount: number;
//     location: string;
//   } | null;
//   user?: User | null;
//   onSignOut?: () => void;
//   onProfileClick?: () => void;
//   onOrdersClick?: () => void;
//   onTransactionsClick?: () => void;
// }

// export function ProductsPage({
//   onBackClick,
//   onLoginClick,
//   onProductSelect,
//   onStartSellingClick,
//   onCartClick,
//   vendorId,
//   vendor,
//   user,
//   onSignOut,
//   onProfileClick,
//   onOrdersClick,
//   onTransactionsClick
// }: ProductsPageProps) {
//   const { getProductsByVendor } = useProducts();
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [products, setProducts] = useState<any[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);
  
//   // Load products and extract categories when vendor changes
//   useEffect(() => {
//     if (vendorId) {
//       // Get products for this vendor from the ProductContext
//       const vendorProducts = getProductsByVendor(vendorId);
//       setProducts(vendorProducts);
      
//       // Extract unique categories from products
//       const uniqueCategories = Array.from(
//         new Set(vendorProducts.map(product => product.category))
//       );
//       setCategories(uniqueCategories);
//     }
//   }, [vendorId, getProductsByVendor]);
  
//   // Filter products by selected category
//   const filteredProducts = selectedCategory
//     ? products.filter(product => product.category === selectedCategory)
//     : products;

//   if (!vendor) {
//     return <div>Vendor not found</div>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-slate-50">
//       {/* Navigation */}
//       <div className="px-4 md:px-8 pt-6 max-w-[1440px] mx-auto w-full">
//         <NavBar 
//           onLoginClick={onLoginClick} 
//           onStartSellingClick={onStartSellingClick} 
//           onCartClick={onCartClick}
//           user={user}
//           onSignOut={onSignOut}
//           onProfileClick={onProfileClick}
//           onOrdersClick={onOrdersClick}
//           onTransactionsClick={onTransactionsClick}
//         />
//       </div>
      
//       {/* Vendor Header */}
//       <div className="mt-6">
//         <VendorHeader 
//           vendorName={vendor.name}
//           description={vendor.description}
//           coverImage={vendor.coverImageUrl}
//           logoUrl={vendor.logoUrl}
//           rating={vendor.rating}
//           reviewCount={vendor.reviewCount}
//           location={vendor.location}
//         />
//       </div>
      
//       {/* Main Content */}
//       <div className="flex-1 px-4 md:px-8 max-w-[1440px] mx-auto w-full">
//         {/* Back Button */}
//         <div className="my-8">
//           <BackButton onClick={onBackClick} label="Back to Vendors" />
//         </div>
        
//         {/* Products Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 pb-16">
//           {/* Category sidebar */}
//           <div className="lg:sticky lg:top-4 lg:self-start">
//             <CategorySidebar 
//               categories={categories}
//               selectedCategory={selectedCategory}
//               onCategorySelect={setSelectedCategory}
//             />
//           </div>
          
//           {/* Products grid */}
//           <div>
//             {/* vendors products length */}
//             <h2 className="text-xl font-semibold mb-6 text-gray-900">
//               {selectedCategory ? `${selectedCategory}` : 'All Products'}
//               <span className="text-slate-500 ml-2 font-normal">({filteredProducts.length})</span>
//             </h2>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map(product => (
//                   <ProductCard 
//                     key={product.id}
//                     id={product.id}
//                     name={product.name}
//                     price={product.price}
//                     imageUrl={product.imageUrl}
//                     vendorId={product.vendorId}
//                     vendorName={vendor.name}
//                     description={product.description}
//                     discount={product.discount}
//                     inStock={product.inStock}
//                     onClick={() => onProductSelect(product.id)}
//                   />
//                 ))
//               ) : (
//                 <div className="col-span-full py-16 text-center">
//                   <div className="max-w-md mx-auto">
//                     <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
//                       <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 009.586 13H7"/>
//                       </svg>
//                     </div>
//                     <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
//                     <p className="text-slate-500">
//                       {selectedCategory 
//                         ? `No products available in the "${selectedCategory}" category.`
//                         : "This vendor hasn't added any products yet."
//                       }
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }