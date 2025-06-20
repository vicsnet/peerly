import { useEffect, useMemo, useState } from "react";
import { VendorShowcase } from "@/features/VendorFeature/VendorShowcase";
import { ProductsPage } from "@/features/ProductFeature/ProductsPage";
import { ProductDetail } from "@/features/ProductDetailFeature/ProductDetail";
import { SignIn } from "@/components/SignIn";
import { SignUp } from "@/components/SignUp";
import { BusinessRegistration } from "@/components/BusinessRegistration";
import { BusinessImages } from "@/components/BusinessImages";
import { SellerDashboard } from "@/features/VendorSellingFeatures/SellerDashboardFeature/SellerDashboard";
import { EscrowPortal } from "@/features/EscrowPortalFeature/EscrowPortal";
import { MultiItemOrderSummaryModal } from "@/components/MultiItemOrderSummaryModal";
import { Profile } from "@/features/ProfileFeature/Profile";
import { Orders } from "@/features/OrdersFeature/Orders";
import { OrderDetail } from "@/features/OrderDetailFeatures/OrderDetail";
import { Transactions } from "@/features/TransactionsFeature/Transactions";
import { CartProvider } from "@/contexts/CartContext";
import { ProductProvider } from "@/contexts/ProductContext";
import { Toaster } from "sonner";
import { DialogProvider } from "@/contexts/DialogContext";
// import { useQueryClient } from "@tanstack/react-query";
// import { useWeb3AuthConnect } from "@web3auth/modal/react";
import { useActiveAccount, useProfiles, useDisconnect, useActiveWallet } from "thirdweb/react";
import { client } from "@/lib/configThirdweb";
import { User } from "@/types/user";
// import peerlyPondABI from "@/constants/ABI/peerlyPondABI"
import useReadGetContract from "@/hooks/useReadGetContract"
import {peerlyPond} from "@/constants/contract"

import { useReadContract } from "thirdweb/react";
import {useUser} from "@/contexts/zustand/ZustandState"

type AppPage =
  | "vendors"
  | "products"
  | "product-detail"
  | "signin"
  | "signup"
  | "business-reg"
  | "business-images"
  | "seller-dashboard"
  | "escrow-portal"
  | "profile"
  | "orders"
  | "order-detail"
  | "transactions";

type DashboardPage = "home" | "products" | "orders" | "teams" | "transactions" | "settings";

// Mock vendors data across different categories
const mockVendors = [
  {
    id: 1,
    name: "SneakerWorld",
    description: "Premium athletic footwear for every sport and style",
    category: "Fashion",
    logoUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1974",
    coverImageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=2064",
    rating: 4.8,
    reviewCount: 427,
    location: "New York, NY"
  },
  {
    id: 2,
    name: "Fresh Harvest",
    description: "Farm-to-table organic produce and artisanal foods",
    category: "Grocery",
    logoUrl: "https://images.unsplash.com/photo-1594761051656-9fd103fe30e1?auto=format&fit=crop&q=80&w=1974",
    coverImageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1974",
    rating: 4.9,
    reviewCount: 562,
    location: "Portland, OR"
  },
  {
    id: 3,
    name: "TechHaven",
    description: "Latest gadgets and tech accessories at competitive prices",
    category: "Electronics",
    logoUrl: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1977",
    coverImageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
    rating: 4.6,
    reviewCount: 318,
    location: "San Francisco, CA"
  },
  {
    id: 4,
    name: "Home & Beyond",
    description: "Modern furniture and home decor for every style",
    category: "Home",
    logoUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=2070",
    coverImageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1974",
    rating: 4.7,
    reviewCount: 253,
    location: "Chicago, IL"
  },
  {
    id: 5,
    name: "Artisan Crafts",
    description: "Handcrafted jewelry, pottery and unique gifts from local artists",
    category: "Art & Crafts",
    logoUrl: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?auto=format&fit=crop&q=80&w=2070",
    coverImageUrl: "https://images.unsplash.com/photo-1528396518501-b53b655eb9b3?auto=format&fit=crop&q=80&w=2070",
    rating: 4.9,
    reviewCount: 186,
    location: "Austin, TX"
  },
  {
    id: 6,
    name: "Wellness Hub",
    description: "Natural health products, supplements and personal care items",
    category: "Health",
    logoUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070",
    coverImageUrl: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=2070",
    rating: 4.5,
    reviewCount: 341,
    location: "Denver, CO"
  }
];

// We'll also create a categories array for filtering
const vendorCategories = [
  "All",
  "Fashion",
  "Grocery",
  "Electronics",
  "Home",
  "Art & Crafts",
  "Health"
];

export default function App() {
  const account = useActiveAccount();
  const { disconnect } = useDisconnect();
  const { PeerlyPondContract } = useReadGetContract();

  const {currentUser, setCurrentUser} = useUser();

  const { data: user } = useProfiles({
    client,
  });





  const { data: status, isLoading: status_loading } = useReadContract({
    contract: PeerlyPondContract,
    method: "getSeller",
    params: [account?.address], // default safe address
    // enabled: isReady,
  });

 

  
  // app page
  const [currentPage, setCurrentPage] = useState<AppPage>("vendors");

  const [selectedVendor, setSelectedVendor] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [activeEscrowId, setActiveEscrowId] = useState<string>("");
  const [isSellerFlow, setIsSellerFlow] = useState(false);
  const [businessName, setBusinessName] = useState<string>("Business name");

  // dashboard page
  const [dashboardPage, setDashboardPage] = useState<DashboardPage>("home");
  const [isMultiCheckoutOpen, setIsMultiCheckoutOpen] = useState(false);

  // User state - null means not logged in
  // const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleVendorSelect = (vendorId: number) => {
    setSelectedVendor(vendorId);
    setCurrentPage("products");
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

  const handleBackToProducts = () => {
    setCurrentPage("products");
  };

  const handleBackToOrders = () => {
    setCurrentPage("orders");
  };

  const handleBackToTransactions = () => {
    setCurrentPage("transactions");
  };

  const handleLoginClick = () => {
    // Regular login for buyers
    setIsSellerFlow(false);
    // connect();
    console.log('clicked')

    setCurrentPage("signin");

  };

  const handleSignUpClick = () => {
    setCurrentPage("signup");
  };

  const handleSignInClick = () => {
    setCurrentPage("signin");
  };

  // Handle signin success differently from signup success
  const handleSignInSuccess = () => {
    // Create a mock user for demonstration
    const mockUser: User = {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isSeller: isSellerFlow ? true : undefined
    };

    setCurrentUser(mockUser);

    // For sellers who sign in, go directly to seller dashboard
    if (isSellerFlow) {
      setCurrentPage("seller-dashboard");
      setDashboardPage("home");
    } else {
      // For regular buyers, go to vendors page (will show logged-in navbar)
      setCurrentPage("vendors");
    }
  };

  // Handle signup success - only after this we go to business registration
  const handleSignUpSuccess = () => {
    // Create a mock user for demonstration
    const mockUser: User = {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      isSeller: isSellerFlow ? true : undefined
    };

    setCurrentUser(mockUser);

    // If this is a seller flow, go to business registration
    if (isSellerFlow) {
      setCurrentPage("business-reg");
    } else {
      // Otherwise go back to vendors page (will show logged-in navbar)
      setCurrentPage("vendors");
    }
  };

  // Handler for "Start Selling" button - redirect to sign in page for sellers
  const handleStartSellingClick = () => {
    setIsSellerFlow(true);
    setCurrentPage("signin");
  };

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

  // Business images handlers
  const handleBusinessImagesBack = () => {
    // Go back to business registration
    setCurrentPage("business-reg");
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

  const wallet = useActiveWallet();
  // Handler for user sign out
  const handleSignOut = () => {
    if(wallet){
      disconnect(wallet)
    }

    setCurrentUser(null);
    setCurrentPage("vendors");
  };


  // Handler for profile click
  const handleProfileClick = () => {
    // If user is a seller, navigate to seller profile settings
    if (currentUser?.isSeller) {
      setCurrentPage("seller-dashboard");
      setDashboardPage("settings");
    } else {
      // For regular buyers, navigate to profile page
      setCurrentPage("profile");
    }
  };

  // Handler for orders click
  const handleOrdersClick = () => {
    // For buyers, navigate to orders page
    // For sellers, navigate to seller dashboard orders
    if (currentUser?.isSeller) {
      setCurrentPage("seller-dashboard");
      setDashboardPage("orders");
    } else {
      setCurrentPage("orders");
    }
  };

  // Handler for transactions click
  const handleTransactionsClick = () => {
    // For buyers, navigate to transactions page
    // For sellers, navigate to seller dashboard transactions
    if (currentUser?.isSeller) {
      setCurrentPage("seller-dashboard");
      setDashboardPage("transactions");
    } else {
      setCurrentPage("transactions");
    }
  };

  // Handler for order details view
  const handleViewOrderDetails = (orderId: string) => {
    setSelectedOrder(orderId);
    setCurrentPage("order-detail");
  };

  // Find the vendor information
  const vendor = selectedVendor
    ? mockVendors.find(v => v.id === selectedVendor)
    : null;

  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case "vendors":
        return (
          <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 md:p-[40px] max-w-[1440px] mx-auto">
            <VendorShowcase
              onVendorSelect={handleVendorSelect}
              // onLoginClick={handleLoginClick}
              vendors={mockVendors}
              categories={vendorCategories}
              onStartSellingClick={handleStartSellingClick}
              onCartClick={handleCartClick}
              user={currentUser && !currentUser.isSeller ? currentUser : null}
              onSignOut={handleSignOut}
              onProfileClick={handleProfileClick}
              onOrdersClick={handleOrdersClick}
              onTransactionsClick={handleTransactionsClick}
            />
          </div>
        );
      case "products":
        return (
          <ProductsPage
            onBackClick={handleBackToVendors}
            vendorId={selectedVendor}
            onLoginClick={handleLoginClick}
            onProductSelect={handleProductSelect}
            vendor={vendor}
            onStartSellingClick={handleStartSellingClick}
            onCartClick={handleCartClick}
            user={currentUser}
            onSignOut={handleSignOut}
            onProfileClick={handleProfileClick}
            onOrdersClick={handleOrdersClick}
            onTransactionsClick={handleTransactionsClick}
          />
        );
      case "product-detail":
        return (
          <ProductDetail
            productId={selectedProduct}
            onBackClick={handleBackToProducts}
            onLoginClick={handleLoginClick}
            onCartClick={handleCartClick}
            vendorId={selectedVendor}
            vendorName={vendor?.name}
            onStartSellingClick={handleStartSellingClick}
            user={currentUser}
            onSignOut={handleSignOut}
            onProfileClick={handleProfileClick}
            onOrdersClick={handleOrdersClick}
            onTransactionsClick={handleTransactionsClick}
          />
        );
      case "signin":
        return (
          <SignIn
            onSignUp={handleSignUpClick}
            onSignIn={handleSignInSuccess}
            onClose={handleBackToVendors}
            isSellerFlow={isSellerFlow}
          />
        );
      case "signup":
        return (
          <SignUp
            onSignIn={handleSignInClick}
            onSignUp={handleSignUpSuccess}
            onClose={handleBackToVendors}
            isSellerFlow={isSellerFlow}
          />
        );
      case "business-reg":
        return (
          <BusinessRegistration
            onBack={handleBusinessRegBack}
            onNext={(name) => handleBusinessRegNext(name)}
          />
        );
      case "business-images":
        return (
          <BusinessImages
            onBack={handleBusinessImagesBack}
            onComplete={handleBusinessImagesComplete}
            onSkip={handleBusinessImagesSkip}
          />
        );
      case "seller-dashboard":
        return (
          <SellerDashboard
            businessName={businessName}
            initialPage={dashboardPage}
          />
        );
      case "escrow-portal":
        return (
          <EscrowPortal
            escrowId={activeEscrowId}
            onBack={handleBackFromEscrowPortal}
            user={currentUser}
          />
        );
      case "profile":
        return (
          <Profile
            user={currentUser ? {
              ...currentUser,
              id: currentUser.id.toString(),
              picture: currentUser.picture || currentUser.avatar || "",
              isSeller: currentUser.isSeller ? true : undefined
            } : null}
            onBack={handleBackToVendors}
          />
        );
      case "orders":
        return (
          <Orders
            onBack={handleBackToVendors}
            onViewOrderDetails={handleViewOrderDetails}
          />
        );
      case "order-detail":
        return (
          <OrderDetail
            orderId={selectedOrder!}
            onBack={handleBackToOrders}
          />
        );
      case "transactions":
        return (
          <Transactions
            onBack={handleBackToVendors}
            onViewEscrow={handleViewEscrowPortal}
          />
        );
      default:
        return null;
    }
  };
  
  useEffect(() => {
    if (account && user) {
      // setCurrentUser(user[0]?.details)
      if (user[0]?.details) {
        console.log('user details:', user[0].details);
        const details = user[0].details;
        setCurrentUser({
          id: details?.id,
          name: details?.name,
          email: details?.email,
          picture: details?.picture,
          address: account.address,
          isSeller: status
        });
      }
      if(status !== undefined){
        setIsSellerFlow(status);
      }
      console.log('accounts',account.address)
    }
  },[account, user])
  return (
    <ProductProvider>
      <CartProvider>
        <DialogProvider>
          <Toaster position="top-right" closeButton richColors />
          <div className="bg-slate-50 min-h-screen w-full">
            {renderPage()}

            {/* Multi-item checkout modal */}
            <MultiItemOrderSummaryModal
              isOpen={isMultiCheckoutOpen}
              onClose={() => setIsMultiCheckoutOpen(false)}
            />
          </div>
        </DialogProvider>
      </CartProvider>
    </ProductProvider>
  );
}