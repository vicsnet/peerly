import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../../components/ui/dialog";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { ArrowLeft, Package, Clock, CheckCircle, XCircle, Truck, Star } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { toast } from "sonner";

interface OrderItem {
  id: string;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  vendor: string;
  orderDate: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  estimatedDelivery?: string;
}

interface OrdersProps {
  onBack: () => void;
  onViewOrderDetails: (orderId: string) => void;
}

// Mock orders data
const mockOrders: OrderItem[] = [
  {
    id: "ORD-001",
    productName: "Jordan 4 Retro White Cement (2025)",
    productImage: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=400",
    price: 120,
    quantity: 1,
    vendor: "SneakerWorld",
    orderDate: "2024-01-15",
    status: "shipped",
    estimatedDelivery: "2024-01-20"
  },
  {
    id: "ORD-002", 
    productName: "Nike Air Max 97 OG Silver Bullet (2023)",
    productImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
    price: 200,
    quantity: 2,
    vendor: "SneakerWorld",
    orderDate: "2024-01-10",
    status: "delivered"
  },
  {
    id: "ORD-003",
    productName: "Adidas Yeezy Boost 350 V2 Zebra (2022)",
    productImage: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=400",
    price: 250,
    quantity: 1,
    vendor: "SneakerWorld",
    orderDate: "2024-01-18",
    status: "processing",
    estimatedDelivery: "2024-01-25"
  },
  {
    id: "ORD-004",
    productName: "Apple iPhone 15 Pro Max",
    productImage: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400",
    price: 1199,
    quantity: 1,
    vendor: "TechHaven",
    orderDate: "2024-01-12",
    status: "cancelled",
  },
  {
    id: "ORD-005",
    productName: "Sony WH-1000XM5 Wireless Headphones",
    productImage: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400",
    price: 299,
    quantity: 1,
    vendor: "TechHaven", 
    orderDate: "2024-01-20",
    status: "pending",
    estimatedDelivery: "2024-01-27"
  },
  {
    id: "ORD-006",
    productName: "Modern Coffee Table - Oak Finish",
    productImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400",
    price: 449,
    quantity: 1,
    vendor: "Home & Beyond",
    orderDate: "2024-01-14",
    status: "delivered"
  }
];

const getStatusColor = (status: OrderItem["status"]) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "processing":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "shipped":
      return "bg-purple-100 text-purple-800 border-purple-200";
    case "delivered":
      return "bg-green-100 text-green-800 border-green-200";
    case "cancelled":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusIcon = (status: OrderItem["status"]) => {
  switch (status) {
    case "pending":
      return <Clock className="w-4 h-4" />;
    case "processing":
      return <Package className="w-4 h-4" />;
    case "shipped":
      return <Truck className="w-4 h-4" />;
    case "delivered":
      return <CheckCircle className="w-4 h-4" />;
    case "cancelled":
      return <XCircle className="w-4 h-4" />;
    default:
      return <Package className="w-4 h-4" />;
  }
};

const formatStatus = (status: OrderItem["status"]) => {
  switch (status) {
    case "pending":
      return "Pending";
    case "processing":
      return "Processing";
    case "shipped":
      return "Shipped";
    case "delivered":
      return "Delivered";
    case "cancelled":
      return "Cancelled";
    default:
      return status;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export function Orders({ onBack, onViewOrderDetails }: OrdersProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<string>("");
  const [cancelReason, setCancelReason] = useState("");
  const [customCancelReason, setCustomCancelReason] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const filterOrdersByStatus = (status: string) => {
    if (status === "all") return mockOrders;
    return mockOrders.filter(order => order.status === status);
  };

  const getOrderCounts = () => {
    return {
      all: mockOrders.length,
      pending: mockOrders.filter(o => o.status === "pending").length,
      processing: mockOrders.filter(o => o.status === "processing").length,
      shipped: mockOrders.filter(o => o.status === "shipped").length,
      delivered: mockOrders.filter(o => o.status === "delivered").length,
      cancelled: mockOrders.filter(o => o.status === "cancelled").length,
    };
  };

  const counts = getOrderCounts();
  const filteredOrders = filterOrdersByStatus(activeTab);

  const handleCancelOrder = () => {
    if (!cancelReason && !customCancelReason.trim()) {
      toast.error("Please select or enter a cancellation reason");
      return;
    }
    
    // In a real app, this would make an API call to cancel the order
    toast.success("Order cancellation request submitted");
    setCancelReason("");
    setCustomCancelReason("");
    setSelectedOrderId("");
    setIsCancelModalOpen(false);
  };

  const handleSubmitReview = () => {
    if (reviewRating === 0) {
      toast.error("Please select a rating");
      return;
    }
    
    if (!reviewText.trim()) {
      toast.error("Please write a review");
      return;
    }
    
    // In a real app, this would submit the review
    toast.success("Review submitted successfully");
    setReviewRating(0);
    setReviewText("");
    setSelectedOrderId("");
    setIsReviewModalOpen(false);
  };

  const openCancelModal = (orderId: string) => {
    setSelectedOrderId(orderId);
    setIsCancelModalOpen(true);
  };

  const openReviewModal = (orderId: string) => {
    setSelectedOrderId(orderId);
    setIsReviewModalOpen(true);
  };

  const StarRating = ({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className={`p-1 rounded ${
              star <= rating 
                ? "text-yellow-400 hover:text-yellow-500" 
                : "text-gray-300 hover:text-gray-400"
            }`}
          >
            <Star className={`w-6 h-6 ${star <= rating ? "fill-current" : ""}`} />
          </button>
        ))}
      </div>
    );
  };

  const selectedOrder = mockOrders.find(order => order.id === selectedOrderId);

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
            <p className="text-gray-600">Track and manage your orders</p>
          </div>
        </div>

        {/* Order Status Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all" className="relative">
              All
              {counts.all > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {counts.all}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="pending" className="relative">
              Pending
              {counts.pending > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {counts.pending}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="processing" className="relative">
              Processing
              {counts.processing > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {counts.processing}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="shipped" className="relative">
              Shipped
              {counts.shipped > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {counts.shipped}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="delivered" className="relative">
              Delivered
              {counts.delivered > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {counts.delivered}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="cancelled" className="relative">
              Cancelled
              {counts.cancelled > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {counts.cancelled}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Orders Content */}
          <TabsContent value={activeTab} className="space-y-4">
            {filteredOrders.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Package className="w-12 h-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No orders found
                  </h3>
                  <p className="text-gray-600 text-center">
                    {activeTab === "all" 
                      ? "You haven't placed any orders yet. Start shopping to see your orders here."
                      : `No ${activeTab} orders found.`
                    }
                  </p>
                </CardContent>
              </Card>
            ) : (
              filteredOrders.map((order) => (
                <Card key={order.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
                          <ImageWithFallback
                            src={order.productImage}
                            alt={order.productName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Order Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 line-clamp-2 mb-1">
                              {order.productName}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                              Sold by {order.vendor}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>${order.price}</span>
                              <span>Qty: {order.quantity}</span>
                              <span>Ordered {formatDate(order.orderDate)}</span>
                            </div>
                            
                            {/* Order Status */}
                            <div className="flex items-center gap-2 mt-3">
                              <Badge 
                                variant="outline" 
                                className={`flex items-center gap-1 ${getStatusColor(order.status)}`}
                              >
                                {getStatusIcon(order.status)}
                                {formatStatus(order.status)}
                              </Badge>
                            </div>

                            {/* Additional Order Info */}
                            {order.estimatedDelivery && order.status !== "delivered" && order.status !== "cancelled" && (
                              <p className="text-sm text-gray-600 mt-2">
                                Estimated delivery: {formatDate(order.estimatedDelivery)}
                              </p>
                            )}
                          </div>

                          {/* Actions */}
                          <div className="flex flex-col gap-2 sm:items-end">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => onViewOrderDetails(order.id)}
                            >
                              View Details
                            </Button>
                            
                            {order.status === "delivered" && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-green-600 hover:text-green-700 hover:bg-green-50"
                                onClick={() => openReviewModal(order.id)}
                              >
                                Leave Review
                              </Button>
                            )}
                            
                            {(order.status === "pending" || order.status === "processing") && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                onClick={() => openCancelModal(order.id)}
                              >
                                Cancel Order
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>

        {/* Cancel Order Modal */}
        <Dialog open={isCancelModalOpen} onOpenChange={setIsCancelModalOpen}>
          <DialogContent className="z-[9999]">
            <DialogHeader>
              <DialogTitle>Cancel Order</DialogTitle>
              <DialogDescription>
                Are you sure you want to cancel order #{selectedOrderId}? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Reason for Cancellation</Label>
                <Select value={cancelReason} onValueChange={setCancelReason}>
                  <SelectTrigger className="mt-2 w-full">
                    <SelectValue placeholder="Select a reason" />
                  </SelectTrigger>
                  <SelectContent className="z-[10000]">
                    <SelectItem value="changed-mind">Changed my mind</SelectItem>
                    <SelectItem value="found-better-price">Found a better price</SelectItem>
                    <SelectItem value="no-longer-needed">No longer needed</SelectItem>
                    <SelectItem value="delivery-too-slow">Delivery taking too long</SelectItem>
                    <SelectItem value="payment-issues">Payment issues</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {cancelReason === "other" && (
                <div>
                  <Label htmlFor="custom-reason" className="text-sm font-medium">
                    Please specify
                  </Label>
                  <Textarea
                    id="custom-reason"
                    placeholder="Please provide more details..."
                    value={customCancelReason}
                    onChange={(e) => setCustomCancelReason(e.target.value)}
                    rows={3}
                    className="mt-2"
                  />
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCancelModalOpen(false)}>
                Keep Order
              </Button>
              <Button variant="destructive" onClick={handleCancelOrder}>
                Cancel Order
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Leave Review Modal */}
        <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Leave a Review</DialogTitle>
              <DialogDescription>
                Share your experience with {selectedOrder?.productName}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Rating</Label>
                <div className="mt-2">
                  <StarRating rating={reviewRating} onRatingChange={setReviewRating} />
                </div>
              </div>
              <div>
                <Label htmlFor="review-text" className="text-sm font-medium">
                  Your Review
                </Label>
                <Textarea
                  id="review-text"
                  placeholder="Tell others about your experience with this product..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={4}
                  className="mt-2"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsReviewModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSubmitReview}>
                Submit Review
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}