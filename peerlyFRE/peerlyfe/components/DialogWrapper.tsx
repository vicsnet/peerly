import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription
} from "./ui/dialog";

interface DialogWrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  description?: string;
  className?: string;
}

/**
 * A wrapper for Dialog components that ensures proper accessibility attributes
 * by always including a DialogDescription (either visible or hidden)
 */
export function DialogWrapper({
  children,
  isOpen,
  onOpenChange,
  description = "Dialog content",
  className
}: DialogWrapperProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className={className}>
        <DialogDescription className="sr-only">
          {description}
        </DialogDescription>
        {children}
      </DialogContent>
    </Dialog>
  );
}