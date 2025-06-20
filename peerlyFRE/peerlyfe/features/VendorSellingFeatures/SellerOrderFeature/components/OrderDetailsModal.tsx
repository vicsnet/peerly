import React, { useState } from "react";
import { X, CheckCircle2, ChevronDown, Truck, PackageCheck } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription 
} from "../../../../components/ui/dialog";
import { Badge } from "../../../../components/ui/badge";
import { Separator } from "../../../../components/ui/separator";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "../../../../components/ui/dropdown-menu";
import { toast } from "sonner";

// Define the order status types
export type OrderStatus = "processing" | "awaiting_shipping" | "delivered" | "returned";

// Define the order interface
export interface OrderDetail {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  productName: string;
  productPrice: number;
  quantity: number;
  status: OrderStatus;
  date: string;
  paymentMethod: string;
  shippingMethod: string;
  trackingNumber?: string;
  additionalNotes?: string;
}

interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: OrderDetail | null;
  onUpdateStatus: (orderId: string, status: OrderStatus) => void;
}

export function OrderDetailsModal({
  isOpen,
  onClose,
  order,
  onUpdateStatus
}: OrderDetailsModalProps) {
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  if (!order) return null;

  // Calculate total price
  const totalPrice = order.productPrice * order.quantity;

  // Get appropriate status badge
  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case "processing":
        return <Badge variant="outline" className="bg-sky-100 text-blue-900 border-0 text-xs font-medium">Processing</Badge>;
      case "awaiting_shipping":
        return <Badge variant="outline" className="bg-orange-100 text-orange-900 border-0 text-xs font-medium">Awaiting Shipping</Badge>;
      case "delivered":
        return <Badge variant="outline" className="bg-green-100 text-green-900 border-0 text-xs font-medium">Delivered</Badge>;
      case "returned":
        return <Badge variant="outline" className="bg-red-100 text-red-900 border-0 text-xs font-medium">Returned</Badge>;
      default:
        return null;
    }
  };

  // Handle status update
  const handleUpdateStatus = (newStatus: OrderStatus) => {
    setIsUpdatingStatus(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      onUpdateStatus(order.id, newStatus);
      setIsUpdatingStatus(false);
      toast.success(`Order ${order.id} status updated to ${newStatus.replace('_', ' ')}`);
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] rounded-xl overflow-hidden">
        <div className="flex flex-col max-h-[80vh]">
          <div className="sticky top-0 z-10 bg-white border-b border-slate-100">
            <DialogHeader className="px-6 py-4 flex flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                <DialogTitle className="text-[18px] font-semibold">Order Details</DialogTitle>
                <DialogDescription className="text-[14px] text-slate-500">
                  Manage and view order information
                </DialogDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 rounded-sm"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogHeader>
          </div>

          <div className="p-6 overflow-y-auto">
            {/* Order header with ID and actions */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col">
                <h3 className="text-[18px] font-semibold text-slate-900">{order.id}</h3>
                <p className="text-[14px] text-slate-500">Placed on {order.date}</p>
              </div>

              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" className="flex items-center gap-1.5" disabled={isUpdatingStatus}>
                      Update Status
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem 
                      onClick={() => handleUpdateStatus("processing")}
                      className="cursor-pointer"
                    >
                      <PackageCheck className="h-4 w-4 mr-2" />
                      <span>Processing</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleUpdateStatus("awaiting_shipping")}
                      className="cursor-pointer"
                    >
                      <Truck className="h-4 w-4 mr-2" />
                      <span>Awaiting Shipping</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleUpdateStatus("delivered")}
                      className="cursor-pointer"
                    >
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      <span>Delivered</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => handleUpdateStatus("returned")}
                      className="cursor-pointer text-destructive"
                    >
                      <X className="h-4 w-4 mr-2" />
                      <span>Returned</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Order info and status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl border border-slate-100 p-4">
                <h4 className="text-[14px] font-medium text-slate-500 mb-2">Order Status</h4>
                <div className="flex items-center gap-2">
                  {getStatusBadge(order.status)}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-100 p-4">
                <h4 className="text-[14px] font-medium text-slate-500 mb-2">Payment Method</h4>
                <p className="text-[14px] font-medium">{order.paymentMethod}</p>
              </div>

              <div className="bg-white rounded-xl border border-slate-100 p-4">
                <h4 className="text-[14px] font-medium text-slate-500 mb-2">Shipping Method</h4>
                <p className="text-[14px] font-medium">{order.shippingMethod}</p>
                {order.trackingNumber && (
                  <p className="text-[12px] text-slate-500 mt-1">Tracking: {order.trackingNumber}</p>
                )}
              </div>
            </div>

            {/* Product details */}
            <div className="bg-white rounded-xl border border-slate-100 mb-6 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100">
                <h3 className="text-[16px] font-semibold">Product Information</h3>
              </div>
              <div className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-md shrink-0 overflow-hidden">
                    {/* This would be a product image in a real app */}
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <PackageCheck className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[16px] font-medium">{order.productName}</h4>
                    <p className="text-[14px] text-slate-500">Quantity: {order.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[16px] font-medium">${order.productPrice.toFixed(2)}</p>
                    <p className="text-[12px] text-slate-500">Per unit</p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-medium">Subtotal</span>
                  <span className="text-[14px]">${order.productPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[14px] font-medium">Tax</span>
                  <span className="text-[14px]">${(totalPrice * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[14px] font-medium">Shipping</span>
                  <span className="text-[14px]">$5.00</span>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center">
                  <span className="text-[16px] font-semibold">Total</span>
                  <span className="text-[16px] font-semibold">${(totalPrice + (totalPrice * 0.1) + 5).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Customer information */}
            <div className="bg-white rounded-xl border border-slate-100 mb-6 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100">
                <h3 className="text-[16px] font-semibold">Customer Information</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-[14px] font-medium text-slate-500 mb-1">Customer Details</h4>
                    <p className="text-[14px] font-medium">{order.customerName}</p>
                    <p className="text-[14px]">{order.customerEmail}</p>
                    <p className="text-[14px]">{order.customerPhone}</p>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-medium text-slate-500 mb-1">Shipping Address</h4>
                    <p className="text-[14px] whitespace-pre-line">{order.customerAddress}</p>
                  </div>
                </div>

                {order.additionalNotes && (
                  <>
                    <Separator className="my-4" />
                    <div>
                      <h4 className="text-[14px] font-medium text-slate-500 mb-1">Additional Notes</h4>
                      <p className="text-[14px]">{order.additionalNotes}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}