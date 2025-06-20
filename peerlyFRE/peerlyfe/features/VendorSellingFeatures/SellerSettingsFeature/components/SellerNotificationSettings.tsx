import React, { useState } from "react";
import { Switch } from "../../../../components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Badge } from "../../../../components/ui/badge";
import { CheckCircle, Mail, Bell, Info, ShoppingCart, CreditCard, AlertTriangle, Megaphone } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../../../../components/ui/radio-group";
import { Label } from "../../../../components/ui/label";
import { toast } from "sonner";

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
  deliveryMethod: "email" | "push" | "both";
  category: "orders" | "payments" | "system" | "marketing";
  icon: React.ReactNode;
}

export function SellerNotificationSettings() {
  // All notifications master toggle
  const [allNotificationsEnabled, setAllNotificationsEnabled] = useState(true);
  
  // State for notification settings
  const [notificationSettings, setNotificationSettings] = useState<NotificationSetting[]>([
    {
      id: "item-sold",
      title: "Item Sold",
      description: "When someone purchases one of your items",
      enabled: true,
      deliveryMethod: "both",
      category: "orders",
      icon: <ShoppingCart className="h-5 w-5 text-green-600" />
    },
    {
      id: "order-status",
      title: "Order Status Updates",
      description: "When the status of your orders changes",
      enabled: true,
      deliveryMethod: "both",
      category: "orders",
      icon: <CheckCircle className="h-5 w-5 text-blue-600" />
    },
    {
      id: "escrow-funds",
      title: "Escrow Updates",
      description: "When funds move in or out of escrow",
      enabled: true,
      deliveryMethod: "both",
      category: "payments",
      icon: <CreditCard className="h-5 w-5 text-orange-600" />
    },
    {
      id: "payment-received",
      title: "Payment Received",
      description: "When you receive a payment for your products",
      enabled: true,
      deliveryMethod: "both",
      category: "payments",
      icon: <CreditCard className="h-5 w-5 text-green-600" />
    },
    {
      id: "withdrawal-status",
      title: "Withdrawal Status",
      description: "Updates on the status of your withdrawal requests",
      enabled: true,
      deliveryMethod: "email",
      category: "payments",
      icon: <CreditCard className="h-5 w-5 text-blue-600" />
    },
    {
      id: "system-updates",
      title: "System Updates",
      description: "Important updates about the platform",
      enabled: true,
      deliveryMethod: "email",
      category: "system",
      icon: <Info className="h-5 w-5 text-slate-600" />
    },
    {
      id: "security-alerts",
      title: "Security Alerts",
      description: "Notifications about security concerns or login attempts",
      enabled: true,
      deliveryMethod: "both",
      category: "system",
      icon: <AlertTriangle className="h-5 w-5 text-red-600" />
    },
    {
      id: "promotions",
      title: "Marketing Opportunities",
      description: "Promotional opportunities for your products",
      enabled: false,
      deliveryMethod: "email",
      category: "marketing",
      icon: <Megaphone className="h-5 w-5 text-purple-600" />
    }
  ]);

  // Handler for toggling all notifications
  const handleToggleAllNotifications = (enabled: boolean) => {
    setAllNotificationsEnabled(enabled);
    
    // If turning off all notifications
    if (!enabled) {
      // Update all notification settings to be disabled
      setNotificationSettings(prevSettings => 
        prevSettings.map(setting => ({
          ...setting,
          enabled: false
        }))
      );
      
      toast.info("All notifications have been disabled");
    } else {
      // Update all notification settings to be enabled
      setNotificationSettings(prevSettings => 
        prevSettings.map(setting => ({
          ...setting,
          enabled: true
        }))
      );
      
      toast.success("All notifications have been enabled");
    }
  };

  // Handler for toggling individual notification
  const handleToggleNotification = (id: string, enabled: boolean) => {
    setNotificationSettings(prevSettings => 
      prevSettings.map(setting => 
        setting.id === id ? { ...setting, enabled } : setting
      )
    );
    
    // Check if all notifications are now disabled
    const updatedSettings = notificationSettings.map(setting => 
      setting.id === id ? { ...setting, enabled } : setting
    );
    
    const allDisabled = updatedSettings.every(setting => !setting.enabled);
    if (allDisabled) {
      setAllNotificationsEnabled(false);
    } else if (!allNotificationsEnabled) {
      setAllNotificationsEnabled(true);
    }
    
    toast.success(`${enabled ? "Enabled" : "Disabled"} ${notificationSettings.find(s => s.id === id)?.title} notifications`);
  };

  // Handler for changing delivery method
  const handleChangeDeliveryMethod = (id: string, deliveryMethod: "email" | "push" | "both") => {
    setNotificationSettings(prevSettings => 
      prevSettings.map(setting => 
        setting.id === id ? { ...setting, deliveryMethod } : setting
      )
    );
    
    toast.success(`Updated delivery method for ${notificationSettings.find(s => s.id === id)?.title}`);
  };

  // Group notifications by category
  const orderNotifications = notificationSettings.filter(setting => setting.category === "orders");
  const paymentNotifications = notificationSettings.filter(setting => setting.category === "payments");
  const systemNotifications = notificationSettings.filter(setting => setting.category === "system");
  const marketingNotifications = notificationSettings.filter(setting => setting.category === "marketing");

  // Render a notification setting
  const renderNotificationSetting = (setting: NotificationSetting) => (
    <div key={setting.id} className="py-4 border-b border-slate-100 last:border-none">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className="mt-0.5">{setting.icon}</div>
          <div>
            <div className="font-medium mb-1">{setting.title}</div>
            <p className="text-slate-500 text-sm">{setting.description}</p>
            
            <div className="mt-3">
              <RadioGroup 
                value={setting.deliveryMethod} 
                onValueChange={(value) => handleChangeDeliveryMethod(setting.id, value as "email" | "push" | "both")}
                className="flex items-center space-x-4"
                disabled={!setting.enabled}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id={`${setting.id}-email`} />
                  <Label htmlFor={`${setting.id}-email`} className={!setting.enabled ? "text-slate-400" : ""}>
                    <div className="flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      Email
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="push" id={`${setting.id}-push`} />
                  <Label htmlFor={`${setting.id}-push`} className={!setting.enabled ? "text-slate-400" : ""}>
                    <div className="flex items-center">
                      <Bell className="h-3 w-3 mr-1" />
                      Push
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id={`${setting.id}-both`} />
                  <Label htmlFor={`${setting.id}-both`} className={!setting.enabled ? "text-slate-400" : ""}>Both</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <Switch 
          checked={setting.enabled} 
          onCheckedChange={(checked) => handleToggleNotification(setting.id, checked)}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Master switch card */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Notification Preferences</CardTitle>
            <Switch 
              checked={allNotificationsEnabled} 
              onCheckedChange={handleToggleAllNotifications}
            />
          </div>
          <CardDescription>
            Control which notifications you receive and how they are delivered
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="py-1.5 px-3 bg-blue-50 text-blue-700 border-blue-200">
              <Mail className="h-3.5 w-3.5 mr-1" />
              Email
            </Badge>
            <Badge variant="outline" className="py-1.5 px-3 bg-indigo-50 text-indigo-700 border-indigo-200">
              <Bell className="h-3.5 w-3.5 mr-1" />
              Push
            </Badge>
            <p className="text-sm text-slate-500">
              Select how you want to receive each type of notification below
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Order Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Order Notifications</CardTitle>
          <CardDescription>
            Notifications related to orders, purchases, and customer interactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          {orderNotifications.map(renderNotificationSetting)}
        </CardContent>
      </Card>
      
      {/* Payment Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Notifications</CardTitle>
          <CardDescription>
            Notifications related to payments, withdrawals, and escrow
          </CardDescription>
        </CardHeader>
        <CardContent>
          {paymentNotifications.map(renderNotificationSetting)}
        </CardContent>
      </Card>
      
      {/* System Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>System Notifications</CardTitle>
          <CardDescription>
            Important updates and security alerts about your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {systemNotifications.map(renderNotificationSetting)}
        </CardContent>
      </Card>
      
      {/* Marketing Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Marketing Notifications</CardTitle>
          <CardDescription>
            Promotional opportunities and marketing-related communications
          </CardDescription>
        </CardHeader>
        <CardContent>
          {marketingNotifications.map(renderNotificationSetting)}
        </CardContent>
      </Card>
    </div>
  );
}