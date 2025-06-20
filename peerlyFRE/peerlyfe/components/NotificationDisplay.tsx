import React from "react";
import { SellerDashboard } from "../features/VendorSellingFeatures/SellerDashboardFeature/SellerDashboard";
import { NotificationsDropdown } from "./NotificationsDropdown";
import { Bell } from "lucide-react";
import { Badge } from "./ui/badge";

export function NotificationDisplay() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-2xl font-semibold">Notification System Demo</h1>
        
        <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-4">
          <h2 className="font-medium text-lg">Notification Dropdown</h2>
          <p className="text-slate-500">
            The notification dropdown appears when a user clicks on the bell icon in the dashboard header.
            It displays recent notifications and allows users to mark them as read.
          </p>
          
          <div className="relative mt-12 border border-dashed border-slate-200 p-4 rounded-lg">
            <div className="absolute right-4 top-0">
              <NotificationsDropdown onClose={() => {}} />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-4">
          <h2 className="font-medium text-lg">Empty State</h2>
          <p className="text-slate-500">
            When there are no notifications, the dropdown displays an empty state with a message.
          </p>
          
          <div className="w-[400px] mx-auto border border-dashed border-slate-200 p-4 rounded-lg">
            <div className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-3">
                <Bell className="h-6 w-6 text-slate-400" />
              </div>
              <h3 className="font-medium text-slate-900">No notifications</h3>
              <p className="text-sm text-slate-500 max-w-[250px] mx-auto mt-1">
                You don't have any notifications yet.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-100 p-6 space-y-4">
          <h2 className="font-medium text-lg">Integration</h2>
          <p className="text-slate-500">
            The notification system is integrated into the seller dashboard header across all pages.
            It includes a badge to show unread notification count.
          </p>
          
          <div className="border border-dashed border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-white h-16 border-b border-slate-100 px-4 flex items-center justify-between">
              <h3 className="font-semibold">Dashboard Header</h3>
              <div className="relative">
                <button className="relative rounded-full h-9 w-9 flex items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors">
                  <Bell className="h-5 w-5" />
                  <Badge 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white border-none" 
                    variant="destructive"
                  >
                    3
                  </Badge>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}