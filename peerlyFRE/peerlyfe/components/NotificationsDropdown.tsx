import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { X, Bell, ShoppingCart, CreditCard, Info, AlertTriangle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { toast } from "sonner";

interface NotificationsDropdownProps {
  onClose: () => void;
}

// Mock notification data
const mockNotifications = [
  {
    id: "notif-1",
    title: "New Order Received",
    description: "You have received a new order #8932 for $150.00",
    time: "10 minutes ago",
    read: false,
    type: "order",
    icon: <ShoppingCart className="h-4 w-4 text-green-600" />
  },
  {
    id: "notif-2",
    title: "Withdrawal Completed",
    description: "Your withdrawal of $2,000 has been processed successfully",
    time: "2 hours ago",
    read: true,
    type: "payment",
    icon: <CreditCard className="h-4 w-4 text-blue-600" />
  },
  {
    id: "notif-3",
    title: "System Maintenance",
    description: "The platform will undergo maintenance on June 5, 2025",
    time: "1 day ago",
    read: true,
    type: "system",
    icon: <Info className="h-4 w-4 text-slate-600" />
  },
  {
    id: "notif-4",
    title: "Security Alert",
    description: "A new login to your account was detected from a new device",
    time: "2 days ago",
    read: false,
    type: "system",
    icon: <AlertTriangle className="h-4 w-4 text-red-600" />
  }
];

export function NotificationsDropdown({ onClose }: NotificationsDropdownProps) {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  
  // Filtered notifications based on current filter
  const filteredNotifications = filter === "all" 
    ? notifications 
    : notifications.filter(notif => !notif.read);

  // Handle marking a notification as read
  const handleMarkAsRead = (id: string) => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Handle marking all notifications as read
  const handleMarkAllAsRead = () => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
    toast.success("All notifications marked as read");
  };

  // Count unread notifications
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Card className="absolute right-0 top-10 w-[350px] sm:w-[400px] shadow-lg z-50 overflow-hidden">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          <h3 className="font-medium">Notifications</h3>
          {unreadCount > 0 && (
            <Badge 
              variant="secondary" 
              className="bg-slate-100 text-slate-700 border-none"
            >
              {unreadCount} unread
            </Badge>
          )}
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-7 w-7">
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="border-b border-slate-100">
        <Tabs 
          defaultValue="all" 
          value={filter} 
          onValueChange={(value) => setFilter(value as "all" | "unread")}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 p-1 m-2 bg-slate-100">
            <TabsTrigger value="all" className="rounded-md data-[state=active]:bg-white">
              All
            </TabsTrigger>
            <TabsTrigger value="unread" className="rounded-md data-[state=active]:bg-white">
              Unread
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="max-h-[350px] overflow-y-auto">
        {filteredNotifications.length > 0 ? (
          <div>
            {filteredNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors ${!notification.read ? 'bg-blue-50/30' : ''}`}
                onClick={() => handleMarkAsRead(notification.id)}
              >
                <div className="flex gap-3">
                  <div className="mt-0.5">
                    {notification.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-900">{notification.title}</h4>
                    <p className="text-sm text-slate-600 mt-0.5">{notification.description}</p>
                    <div className="text-xs text-slate-500 mt-1">{notification.time}</div>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5" />
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-3">
              <Bell className="h-6 w-6 text-slate-400" />
            </div>
            <h3 className="font-medium text-slate-900">No notifications</h3>
            <p className="text-sm text-slate-500 max-w-[250px] mx-auto mt-1">
              {filter === "all" 
                ? "You don't have any notifications yet."
                : "You don't have any unread notifications."
              }
            </p>
          </div>
        )}
      </div>
      
      {notifications.some(n => !n.read) && (
        <div className="p-3 bg-slate-50 border-t border-slate-100">
          <Button 
            variant="outline" 
            className="w-full text-slate-700"
            onClick={handleMarkAllAsRead}
          >
            Mark all as read
          </Button>
        </div>
      )}
    </Card>
  );
}