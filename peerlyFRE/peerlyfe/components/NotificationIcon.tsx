import React, { useState } from "react";
import { Bell } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { NotificationsDropdown } from "./NotificationsDropdown";

interface NotificationIconProps {
  unreadCount?: number;
}

export function NotificationIcon({ unreadCount = 0 }: NotificationIconProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative rounded-full h-9 w-9" 
        onClick={toggleNotifications}
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <Badge 
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500 text-white border-none" 
            variant="destructive"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </Badge>
        )}
      </Button>
      
      {isOpen && (
        <NotificationsDropdown onClose={handleClose} />
      )}
    </div>
  );
}