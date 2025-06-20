import { ProductPageNew } from '@/features/ProductFeature/ProductPageNew'
import React, { useState } from 'react'
import {usePagesState} from "@/contexts/zustand/ZustandState"

export default function Index() {
  const {setCurrentPage, currentPage} = usePagesState();
    const [selectedVendor, setSelectedVendor] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [activeEscrowId, setActiveEscrowId] = useState<string>("");
  const [isSellerFlow, setIsSellerFlow] = useState(false);
  const [businessName, setBusinessName] = useState<string>("Business name");

  const [isMultiCheckoutOpen, setIsMultiCheckoutOpen] = useState(false);

  const handleLoginClick = () => {
    // Regular login for buyers
    setIsSellerFlow(false);
    // connect();
    console.log('clicked')

    setCurrentPage("signin");

  };


    
      const handleProductSelect = (productId: number) => {
        setSelectedProduct(productId);
        setCurrentPage("product-detail");
      };
    
      const handleBackToVendors = () => {
        setCurrentPage("vendors");
        // Reset seller flow when returning to vendors page
        setIsSellerFlow(false);
      };

   // Handler for "Start Selling" button - redirect to sign in page for sellers
   const handleStartSellingClick = () => {
    setIsSellerFlow(true);
    setCurrentPage("signin");
  };
    
      const handleBackToProducts = () => {
        setCurrentPage("products");
      };
    
      const handleBackToOrders = () => {
        setCurrentPage("orders");
      };
    
      const handleBackToTransactions = () => {
        setCurrentPage("transactions");
      };
    

      const handleSignUpClick = () => {
        setCurrentPage("signup");
      };
    
      const handleSignInClick = () => {
        setCurrentPage("signin");
      };
    
      // Handle signin success differently from signup success
  
    
      // Handle signup success - only after this we go to business registration
  
    
   
    
      // Business registration handlers
      const handleBusinessRegBack = () => {
        // Go back to the sign up page
        setCurrentPage("signup");
      };
    
      const handleBusinessRegNext = (name?: string) => {
        // Store business name if provided
        if (name) {
          setBusinessName(name);
        }
    
        // Go to the next step in business registration - images
        setCurrentPage("business-images");
      };

   
    
      const handleBusinessImagesComplete = () => {
        // Complete the business registration flow and go to seller dashboard
        if (currentUser) {
          setCurrentUser({ ...currentUser, isSeller: true });
        }
        setCurrentPage("seller-dashboard");
        setDashboardPage("home");
      };
    
      const handleBusinessImagesSkip = () => {
        // Skip the images step and go to seller dashboard
        if (currentUser) {
          setCurrentUser({ ...currentUser, isSeller: true });
        }
        setCurrentPage("seller-dashboard");
        setDashboardPage("home");
      };
    
      // Navigation to specific seller dashboard page
      const handleSellerDashboardNav = (page: DashboardPage) => {
        setDashboardPage(page);
      };
    
      // Handler for navigating to the escrow portal
      const handleViewEscrowPortal = (escrowId: string) => {
        setActiveEscrowId(escrowId);
        setCurrentPage("escrow-portal");
      };
    
      // Handler for going back from escrow portal to appropriate page
      const handleBackFromEscrowPortal = () => {
        // Check if user is a seller or came from transactions page
        if (currentUser?.isSeller) {
          setCurrentPage("seller-dashboard");
          setDashboardPage("transactions");
        } else {
          setCurrentPage("transactions");
        }
        setActiveEscrowId("");
      };
    
      // Handler for cart icon click - navigate to multi-item checkout
      const handleCartClick = () => {
        setIsMultiCheckoutOpen(true);
      };

      const renderPage=()=>{
        switch(currentPage){
          case "products":
            return(
              <ProductPageNew 
              // vendorId={selectedVendor}
              // onLoginClick={handleLoginClick}
              onProductSelect={handleProductSelect}
              // vendor={vendor}
              onStartSellingClick={handleStartSellingClick}
              onCartClick={handleCartClick}
              // user={currentUser}
              // onSignOut={handleSignOut}
              // onProfileClick={handleProfileClick}
              // onOrdersClick={handleOrdersClick}
              // onTransactionsClick={handleTransactionsClick} 
              />
            )
            case "product-detail":
              return(
                <>
                </>
              )
        }

      }
  return (
    <main>
     {/* { renderPage()} */}
        <ProductPageNew 
            // vendorId={selectedVendor}
            // onLoginClick={handleLoginClick}
            // onProductSelect={handleProductSelect}
            // vendor={vendor}
            // onStartSellingClick={handleStartSellingClick}
            // onCartClick={handleCartClick}
            // user={currentUser}
            // onSignOut={handleSignOut}
            // onProfileClick={handleProfileClick}
            // onOrdersClick={handleOrdersClick}
            // onTransactionsClick={handleTransactionsClick} 
            />
    </main>
  )
}
