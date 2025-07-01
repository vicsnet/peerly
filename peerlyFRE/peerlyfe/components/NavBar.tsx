// import React, { useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
// import { CartIndicator } from "./CartIndicator";
import { UserDropdown } from "./UserDropdown";
import { toast } from "sonner";
import { client } from "@/lib/configThirdweb";
import { ConnectButton, useActiveWallet, useDisconnect } from "thirdweb/react";
// import { User } from "@/types/user";
import { useUser, usePagesState } from "@/contexts/zustand/ZustandState";
// import { inAppWallet } from "thirdweb/wallets";
// import { defineChain} from "thirdweb/chains"
import { useRouter }  from "next/router";

// interface NavBarProps {
//   // onLoginClick: () => void;
//   // onStartSellingClick?: () => void;
//   // onCartClick?: () => void;
//   // user?: User | null;
//   // onSignOut?: () => void;
//   // onProfileClick?: () => void;
//   // onOrdersClick?: () => void;
//   // onTransactionsClick?: () => void;
// }

export function NavBar(
//   {
//   // onLoginClick,
//   // onStartSellingClick,
//   // onCartClick,
//   // user,
//   // onSignOut,
//   // onProfileClick,
//   // onOrdersClick,
//   // onTransactionsClick,
// }: NavBarProps

) {
  const {currentUser: user, setCurrentUser} = useUser();
  // const myChain = defineChain(4202)

  const router = useRouter();
  console.log('user@', user);
  
  const {setCurrentPage} = usePagesState();

  const wallet = useActiveWallet();

  // const wallets = [
  //   inAppWallet({
  //     smartAccount: {
  //       chain: myChain,
  //       sponsorGas: true,
  //     },
  //   }),
  // ];
  const { disconnect } = useDisconnect();

  const handleSignOut = () => {

    if(wallet){
      disconnect(wallet)
    }

    setCurrentUser(null);
    setCurrentPage("vendors");


    // if (onSignOut) {
    //   onSignOut();
      toast.success("Signed out successfully");
    // }
  };

  const handleProfileClick = () => {

        // If user is a seller, navigate to seller profile settings
        if (user?.isSeller) {
          setCurrentPage("seller-dashboard");
          // setDashboardPage("settings");
        } else {
          console.log(`clicked2`);
          
          // For regular buyers, navigate to profile page
          setCurrentPage("profile");
        }
  //   if (onProfileClick) {

  //     onProfileClick();
  //   } else {
  //     toast.info("Profile feature coming soon!");
  //   }
  };

  const handleOrdersClick = () => {
    // if (onOrdersClick) {
    //   onOrdersClick();
    // } else {
    //   toast.info("Orders feature coming soon!");
    // }

    if (user?.isSeller) {
      setCurrentPage("seller-dashboard");
      // setDashboardPage("orders");
    } else {
      setCurrentPage("orders");
    }
  };

  const handleTransactionsClick = () => {
    // if (onTransactionsClick) {
    //   onTransactionsClick();
    // } else {
    //   toast.info("Transactions feature coming soon!");
    // }

    if (user?.isSeller) {
      setCurrentPage("seller-dashboard");
      // setDashboardPage("transactions");
    } else {
      setCurrentPage("transactions");
    }
  };

  return (
    <div className="bg-white h-24 rounded-[20px] border border-slate-50 shadow-sm">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border flex flex-row h-24 items-center justify-between px-10 py-6 relative w-full">
          {/* Logo */}
          <Logo />

          {/* Search Input */}
          <div className="flex-1 max-w-md mx-8">
            <div className="bg-white rounded-md border border-slate-300">
              <div className="flex flex-row items-center relative size-full">
                <div className="box-border flex flex-row gap-1 items-center justify-start pl-3 pr-14 py-2 relative w-full">
                  <div className="relative shrink-0 size-4">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 16 16"
                    >
                      <g id="icon/search">
                        <path
                          d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                          id="Vector"
                          stroke="#94A3B8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.33333"
                        />
                        <path
                          d="M14 14L11.1 11.1"
                          id="Vector_2"
                          stroke="#94A3B8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.33333"
                        />
                      </g>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search Vendor"
                    className="font-normal text-base text-slate-400 leading-6 outline-none bg-transparent flex-1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Section */}
          <div className="flex flex-row gap-2 items-center justify-end">
            {/* Cart */}
            {/* <CartIndicator 
            onClick={onCartClick || (() => {})} 
            /> */}

            {/* User Actions */}
            {user ? (
             
              <UserDropdown
                user={user}
                onProfileClick={handleProfileClick}
                onOrdersClick={handleOrdersClick}
                onTransactionsClick={handleTransactionsClick}
                onSignOut={handleSignOut}
              />
            ) : (
              <>
                {/* <Button
                  variant="outline"
                  onClick={onLoginClick}
                  // onClick={()=>connect()}
                  className="text-sm font-medium text-slate-900 border-slate-300 hover:bg-slate-50"
                >
                  Log In
                </Button> */}
                <ConnectButton client={client}  appMetadata={{
              name: "Example App",
              url: "https://example.com",
            }} 
            // wallets={wallets}
            />
               
              </>
            )} 
            {
              user?.isSeller  ? 
              <Button
              onClick={()=>router.push("shop/")}
              className="bg-slate-900 hover:bg-slate-800 text-white text-sm cursor-pointer"
            >
              Go to Shop
            </Button>
            :
             <Button
                  onClick={()=>router.push("/selling")}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-sm cursor-pointer"
                >
                  Start Selling
                </Button>

            }
          </div>
        </div>
      </div>
    </div>
  );
}