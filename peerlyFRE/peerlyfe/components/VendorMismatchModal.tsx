import React from "react";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "./ui/alert-dialog";
import { toast } from "sonner";

interface VendorMismatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClearCart: () => void;
  onClearCartAndBuyNow?: () => void;
  currentVendorName: string;
onClearCartAndBuyNow?: () => void;
  currentVendorName: string;
}

export function VendorMismatchModal({ 
  isOpen, 
  onClose, 
  onClearCart,
  onClearCartAndBuyNow,
  currentVendorName
}: VendorMismatchModalProps) {
  // Handle clearing cart and adding new product
  const handleClearCart = () => {
    onClearCart();
    toast.success("Cart cleared and new product added");
  };

  // Handle clearing cart and proceeding to buy now
  const handleClearCartAndBuyNow = () => {
    if (onClearCartAndBuyNow) {
      onClearCartAndBuyNow();
      toast.success("Cart cleared, proceeding to checkout");
    } else {
      handleClearCart();
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Items from Different Vendors</AlertDialogTitle>
          <AlertDialogDescription>
            Your cart contains items from a different vendor. You can only purchase from one vendor at a time.
            Would you like to clear your cart and add this item from {currentVendorName} instead?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep Current Cart</AlertDialogCancel>
          {onClearCartAndBuyNow ? (
            <AlertDialogAction onClick={handleClearCartAndBuyNow}>
              Clear Cart & Buy Now
            </AlertDialogAction>
          ) : (
            <AlertDialogAction onClick={handleClearCart}>
              Clear Cart & Add New Item
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}