import { Button } from "../../../components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../../contexts/CartContext";
import { useState } from "react";
import { useUser, useCartState } from "@/contexts/zustand/ZustandState";
import { useEffect } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  onClick?: () => void;
  vendorId?: string;
  vendorName?: string;
  description?: string;
  discount?: number;
  inStock?: boolean;
}

export function ProductCard({ 
  id, 
  name, 
  price, 
  imageUrl, 
  onClick,
  vendorId,
  vendorName,
  description,
  discount,
  inStock = true
}: ProductCardProps) {
  // const { addToCart } = useCart();
  const {addToCart, items} = useCartState()
  
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click
    
    // Add to cart with vendor information
    addToCart({
      id,
      name,
      price,
      image: imageUrl,
      vendorId: vendorId ?? "",
      vendorName: vendorName ?? ""
    });
    
    // Show added confirmation
    // Check if item is already in cart on mount
    // and update addedToCart accordingly

  
    setAddedToCart(true);
  
    
    // Reset after 2 seconds
    // setTimeout(() => {
    //   setAddedToCart(false);
    // }, 2000);
  };

  // Safe price formatting
  const formatPrice = (priceValue: number | undefined | null): string => {
    if (priceValue === undefined || priceValue === null || isNaN(priceValue)) {
      return "$0.00";
    }
    return Number.isInteger(priceValue) ? `$${priceValue}` : `$${priceValue.toFixed(2)}`;
  };

  useEffect(() => {
    const found = items.some((item) => item.id === id);
    if (found) {
      setAddedToCart(true);
    }
  }, [items, id]);

 


  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-60 object-cover"
        />
        {/* Add to Cart Button */}
        <Button
          variant="secondary" 
          size="icon"
          className={`absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 ${
            addedToCart ? 'bg-green-50 text-green-600' : ''
          }`}
          onClick={handleAddToCart}
          disabled={addedToCart}
        >
          {addedToCart ? (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <ShoppingCart className="w-5 h-5" />
          )}
        </Button>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-medium line-clamp-2 text-gray-900">{name}</h3>
        
        {/* Product Description with no gap */}
        {description && (
          <p className="text-sm text-gray-500 line-clamp-2 -mt-1">{description}</p>
        )}
        
        <div className="flex justify-between items-center mt-auto pt-2">
          <p className="font-semibold text-gray-900">
            {formatPrice(price)}
          </p>
          
          {vendorName && (
            <p className="text-xs text-gray-500">
              {vendorName}
            </p>
          )}
        </div>
        
        {/* Stock Status */}
        {!inStock && (
          <p className="text-xs text-red-500 mt-1">Out of stock</p>
        )}
      </div>
    </div>
  );
}