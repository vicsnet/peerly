import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { SellerProfileSettings } from "./components/SellerProfileSettings";
import { SellerBusinessSettings } from "./components/SellerBusinessSettings";
import { SellerWalletSettings } from "./components/SellerWalletSettings";
import { SellerNotificationSettings } from "./components/SellerNotificationSettings";

export type SettingsTab = "profile" | "business" | "wallet" | "notifications";

interface SellerSettingsProps {
  onNavigateToPage: (page: string) => void;
  businessName: string;
  sellerInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
  activeTab?: SettingsTab;
}

export function SellerSettings({ 
  onNavigateToPage, 
  businessName,
  sellerInfo,
  activeTab = "profile"
}: SellerSettingsProps) {
  const [currentTab, setCurrentTab] = useState<SettingsTab>(activeTab);

  const handleTabChange = (value: string) => {
    setCurrentTab(value as SettingsTab);
  };

  // Mock business information - in a real app, this would come from an API
  const mockBusinessInfo = {
    businessName: businessName,
    businessEmail: `${businessName.toLowerCase().replace(/\s+/g, ".")}@example.com`,
    country: "United States",
    businessAddress: "123 Business Street, Suite 100, New York, NY 10001",
    businessDescription: "We provide high-quality products to our customers.",
    coverImage: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    profileImage: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
  };

  return (
    <div className="flex flex-col h-full">
      {/* Topbar */}
      <div className="bg-white h-20 w-full border-b border-slate-100">
        <div className="h-full flex items-center px-4 py-2.5">
          <div className="text-[18px] font-semibold">Settings</div>
        </div>
      </div>
      
      {/* Tabs Bar */}
      <div className="bg-white w-full border-b border-slate-100">
        <div className="px-4 py-3">
          <Tabs 
            defaultValue={currentTab} 
            value={currentTab} 
            onValueChange={handleTabChange} 
            className="w-full"
          >
            <TabsList className="bg-slate-100 p-1">
              <TabsTrigger value="profile" className="rounded-md data-[state=active]:bg-white">
                Profile
              </TabsTrigger>
              <TabsTrigger value="business" className="rounded-md data-[state=active]:bg-white">
                Business
              </TabsTrigger>
              <TabsTrigger value="wallet" className="rounded-md data-[state=active]:bg-white">
                Wallet
              </TabsTrigger>
              <TabsTrigger value="notifications" className="rounded-md data-[state=active]:bg-white">
                Notifications
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="mx-auto max-w-4xl">
          {/* Settings Content */}
          {currentTab === "profile" && (
            <SellerProfileSettings sellerInfo={sellerInfo} />
          )}
          {currentTab === "business" && (
            <SellerBusinessSettings businessInfo={mockBusinessInfo} />
          )}
          {currentTab === "wallet" && (
            <SellerWalletSettings />
          )}
          {currentTab === "notifications" && (
            <SellerNotificationSettings />
          )}
        </div>
      </div>
    </div>
  );
}