import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";

interface CartIndicatorProps {
  onClick: () => void;
}

export function CartIndicator({ onClick }: CartIndicatorProps) {
  const { 
    // items,
     totalItems
     } = useCart();
  const itemCount = totalItems;

  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="relative shrink-0 rounded-full flex items-center justify-center p-3 hover:bg-slate-50 transition-colors"
      >
        <ShoppingCart className="w-4 h-4 text-black" />
      </button>
      
      {itemCount > 0 && (
        <div className="absolute bg-red-500 -right-1 -top-1 rounded-full size-5 flex items-center justify-center">
          <span className="font-medium leading-[0] not-italic text-white text-xs">
            {itemCount > 9 ? '9+' : itemCount}
          </span>
        </div>
      )}
    </div>
  );
}