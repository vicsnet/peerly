import React, { useState } from "react";
import { X, Info } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { toast } from "sonner";
import imgMetamask from "figma:asset/01971d9e3f08c00bf48fe47fac92bfaf1c19a0ad.png";
import imgPhantom from "figma:asset/2799d4a125449779453f25b39daa66c6de88d515.png";
import imgCoinbase from "figma:asset/c2ab0992ab80f1a96d7e985b4fc6533462550d4f.png";

interface BuyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productPrice: number;
  productImage: string;
  quantity: number;
  shippingCost?: number;
  taxCost?: number;
  serviceFee?: number;
}

export function BuyNowModal({
  isOpen,
  onClose,
  productName,
  productPrice,
  productImage,
  quantity,
  shippingCost = 16,
  taxCost = 2,
  serviceFee = 2
}: BuyNowModalProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");

  const subtotal = productPrice * quantity;
  const total = subtotal + shippingCost + taxCost + serviceFee;

  const paymentMethods = [
    { id: "metamask", name: "Metamask", icon: imgMetamask },
    { id: "phantom", name: "Phantom", icon: imgPhantom },
    { id: "coinbase", name: "Coinbase", icon: imgCoinbase }
  ];

  const handleCompletePurchase = () => {
    if (!selectedPaymentMethod) {
      toast.error("Please select a payment method");
      return;
    }
    
    toast.success("Purchase completed! Your order is being processed.");
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-xl w-full max-w-[480px] max-h-[90vh] overflow-hidden shadow-lg">
        {/* Header */}
        <div className="border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900 tracking-[-0.144px] leading-8">
              Order summary
            </h2>
            <button 
              onClick={onClose}
              className="text-black hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8 max-h-[calc(90vh-120px)] overflow-y-auto">
          {/* Product */}
          <div className="bg-slate-50 border border-slate-300 rounded-xl p-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={productImage}
                  alt={productName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-black leading-[14px] truncate">
                  {productName}
                </p>
              </div>
              <div className="text-base font-medium text-black leading-6">
                ${subtotal.toFixed(0)}
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-normal text-black leading-5">Shipping</span>
              <span className="font-medium text-black leading-5">${shippingCost}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-normal text-black leading-5">Estimated Taxes</span>
              <span className="font-medium text-black leading-5">${taxCost}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-normal text-black leading-5">Service Fees</span>
              <span className="font-medium text-black leading-5">${serviceFee}</span>
            </div>
            
            {/* Divider */}
            <div className="h-px bg-slate-200 my-2"></div>
            
            <div className="flex justify-between font-medium">
              <span className="text-sm text-black leading-5">Total</span>
              <span className="text-base text-black leading-6">${total.toFixed(0)}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 leading-7">Payment Methods</h3>
            
            {/* Wallet Options */}
            <div className="flex gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPaymentMethod(method.id)}
                  className={`flex-1 h-12 rounded-lg border flex items-center justify-center gap-3 px-3 py-4 transition-colors ${
                    selectedPaymentMethod === method.id
                      ? 'border-slate-900 bg-slate-50'
                      : 'border-slate-300 hover:border-slate-400'
                  }`}
                >
                  <div 
                    className="w-6 h-6 bg-contain bg-no-repeat rounded"
                    style={{ backgroundImage: `url('${method.icon}')` }}
                  />
                  <span className="text-sm font-medium text-black leading-[14px]">
                    {method.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Other Wallets Option */}
            <button
              onClick={() => setSelectedPaymentMethod("other")}
              className={`w-full h-12 rounded-lg border flex items-center justify-center px-3 py-4 transition-colors ${
                selectedPaymentMethod === "other"
                  ? 'border-slate-900 bg-slate-50'
                  : 'border-slate-300 hover:border-slate-400'
              }`}
            >
              <span className="text-sm font-medium text-black leading-[14px]">
                Other Wallets
              </span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white px-6 py-6 space-y-1.5 border-t border-slate-100">
          <Button 
            onClick={handleCompletePurchase}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white"
          >
            Complete Purchase
          </Button>
          
          {/* Escrow Info */}
          <div className="bg-slate-50 border border-slate-100 rounded px-2 py-1 flex items-center gap-1.5">
            <Info className="w-3 h-3 text-gray-700 flex-shrink-0" />
            <p className="text-xs font-normal text-gray-700 leading-[14px]">
              Payment will be held in escrow until you confirm the order has been received and meet your requirements
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}