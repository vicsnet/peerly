"use client"

import React, { createContext, useContext, useState } from 'react';

// Define the cart item type with vendor information
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  vendorId: number; // Added vendorId to track which vendor the item belongs to
  vendorName?: string; // Optional vendor name for display purposes
}

// Define the cart context type
interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getUniqueVendorIds: () => number[]; // New method to get unique vendor IDs
  getItemsByVendorId: (vendorId: number) => CartItem[]; // New method to get items by vendor ID
  hasMultipleVendors: () => boolean; // New method to check if cart has items from different vendors
}

// Create the cart context with default values
const CartContext = createContext<CartContextType>({
  items: [],
  totalItems: 0,
  totalPrice: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getUniqueVendorIds: () => [],
  getItemsByVendorId: () => [],
  hasMultipleVendors: () => false,
});

// Create a provider component for the cart context
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Calculate total items and total price
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Add an item to the cart
  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prevItems => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex >= 0) {
        // If item exists, increase its quantity
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove an item from the cart
  const removeFromCart = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Clear the cart
  const clearCart = () => {
    setItems([]);
  };

  // Get unique vendor IDs from cart items
  const getUniqueVendorIds = () => {
    return [...new Set(items.map(item => item.vendorId))];
  };

  // Get items by vendor ID
  const getItemsByVendorId = (vendorId: number) => {
    return items.filter(item => item.vendorId === vendorId);
  };

  // Check if cart has items from different vendors
  const hasMultipleVendors = () => {
    const vendorIds = getUniqueVendorIds();
    return vendorIds.length > 1;
  };

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        totalItems, 
        totalPrice, 
        addToCart, 
        removeFromCart, 
        clearCart,
        getUniqueVendorIds,
        getItemsByVendorId,
        hasMultipleVendors
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook for using the cart context
export const useCart = () => useContext(CartContext);