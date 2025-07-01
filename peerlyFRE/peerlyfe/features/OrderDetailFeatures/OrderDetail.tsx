import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { ArrowLeft, Package, Clock, CheckCircle, XCircle, Truck, MapPin, Calendar, DollarSign, User, MessageSquare, Star } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { toast } from "sonner";

interface OrderDetailProps {
  orderId: string;
  onBack: () => void;
}

// Mock order data - in a real app this would come from an API
const mockOrderData = {
  "ORD-001": {
    id: "ORD-001",
    productName: "Jordan 4 Retro White Cement (2025)",
    productImage: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=400",
    price: 120,
    quantity: 1,
    vendor: "SneakerWorld",
    vendorEmail: "support@sneakerworld.com",
    orderDate: "2024-01-15",
    status: "shipped" as const,
    estimatedDelivery: "2024-01-20",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States"
    },
    paymentMethod: "Credit Card ending in 4242",
    subtotal: 120,
    shipping: 10,
    tax: 12,
    total: 142,
    orderHistory: [
      { date: "2024-01-15T10:00:00Z", status: "Order Placed", description: "Your order has been confirmed" },
      { date: "2024-01-16T14:30:00Z", status: "Processing", description: "Your order is being prepared" },
      { date: "2024-01-17T09:15:00Z", status: "Shipped", description: "Your order has been shipped" },
    ]
  },
  "ORD-002": {
    id: "ORD-002",
    productName: "Nike Air Max 97 OG Silver Bullet (2023)",
    productImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400",
    price: 200,
    quantity: 2,
    vendor: "SneakerWorld",
    vendorEmail: "support@sneakerworld.com",
    orderDate: "2024-01-10",
    status: "delivered" as const,
    deliveryDate: "2024-01-15",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States"
    },
    paymentMethod: "Credit Card ending in 4242",
    subtotal: 400,
    shipping: 15,
    tax: 42,
    total: 457,
    orderHistory: [
      { date: "2024-01-10T11:00:00Z", status: "Order Placed", description: "Your order has been confirmed" },
      { date: "2024-01-11T13:20:00Z", status: "Processing", description: "Your order is being prepared" },
      { date: "2024-01-12T08:45:00Z", status: "Shipped", description: "Your order has been shipped" },
      { date: "2024-01-15T16:30:00Z", status: "Delivered", description: "Your order has been delivered" },
    ]
  },
  "ORD-003": {
    id: "ORD-003",
    productName: "Adidas Yeezy Boost 350 V2 Zebra (2022)",
    productImage: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=400",
    price: 250,
    quantity: 1,
    vendor: "SneakerWorld",
    vendorEmail: "support@sneakerworld.com",
    orderDate: "2024-01-18",
    status: "processing" as const,
    estimatedDelivery: "2024-01-25",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States"
    },
    paymentMethod: "Credit Card ending in 4242",
    subtotal: 250,
    shipping: 12,
    tax: 25,
    total: 287,
    orderHistory: [
      { date: "2024-01-18T12:00:00Z", status: "Order Placed", description: "Your order has been confirmed" },
      { date: "2024-01-18T14:30:00Z", status: "Processing", description: "Your order is being prepared by the vendor" },
    ]
  },
  "ORD-004": {
    id: "ORD-004",
    productName: "Apple iPhone 15 Pro Max",
    productImage: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=400",
    price: 1199,
    quantity: 1,
    vendor: "TechHaven",
    vendorEmail: "support@techhaven.com",
    orderDate: "2024-01-12",
    status: "cancelled" as const,
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States"
    },
    paymentMethod: "Credit Card ending in 4242",
    subtotal: 1199,
    shipping: 15,
    tax: 85,
    total: 1299,
    orderHistory: [
      { date: "2024-01-12T09:00:00Z", status: "Order Placed", description: "Your order has been confirmed" },
      { date: "2024-01-12T10:15:00Z", status: "Cancelled", description: "Order was cancelled at customer request" },
    ]
  },
  "ORD-005": {
    id: "ORD-005",
    productName: "Sony WH-1000XM5 Wireless Headphones",
    productImage: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400",
    price: 299,
    quantity: 1,
    vendor: "TechHaven",
    vendorEmail: "support@techhaven.com",
    orderDate: "2024-01-20",
    status: "pending" as const,
    estimatedDelivery: "2024-01-27",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States"
    },
    paymentMethod: "Credit Card ending in 4242",
    subtotal: 299,
    shipping: 10,
    tax: 30,
    total: 339,
    orderHistory: [
      { date: "2024-01-20T15:30:00Z", status: "Order Placed", description: "Your order has been confirmed and payment is being processed" },
    ]
  },
  "ORD-006": {
    id: "ORD-006",
    productName: "Modern Coffee Table - Oak Finish",
    productImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400",
    price: 449,
    quantity: 1,
    vendor: "Home & Beyond",
    vendorEmail: "support@homeandbeyond.com",
    orderDate: "2024-01-14",
    status: "delivered" as const,
    deliveryDate: "2024-01-19",
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States"
    },
    paymentMethod: "Credit Card ending in 4242",
    subtotal: 449,
    shipping: 25,
    tax: 45,
    total: 519,
    orderHistory: [
      { date: "2024-01-14T11:00:00Z", status: "Order Placed", description: "Your order has been confirmed" },
      { date: "2024-01-14T16:30:00Z", status: "Processing", description: "Your order is being prepared" },
      { date: "2024-01-15T09:45:00Z", status: "Shipped", description: "Your order has been shipped with white glove delivery" },
      { date: "2024-01-19T14:20:00Z", status: "Delivered", description: "Your order has been delivered and assembled" },
    ]
  }
};

const getStatusColor = (status: string) => {
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

const getStatusIcon = (status: string) => {
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

const formatStatus = (status: string) => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const formatDateTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export function OrderDetail({ orderId, onBack }: OrderDetailProps) {
  const order = mockOrderData[orderId as keyof typeof mockOrderData];

  if (!order) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
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
          </div>
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Package className="w-12 h-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Order not found</h3>
              <p className="text-gray-600">The order you're looking for doesn't exist.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
            Back to Orders
          </Button>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Order Details</h1>
            <p className="text-gray-600">Order #{order.id}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Product Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <ImageWithFallback
                      src={order.productImage}
                      alt={order.productName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-2">{order.productName}</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Sold by {order.vendor}</p>
                      <p>Quantity: {order.quantity}</p>
                      <p>Price: ${order.price} each</p>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Badge 
                        variant="outline" 
                        className={`flex items-center gap-1 ${getStatusColor(order.status)}`}
                      >
                        {getStatusIcon(order.status)}
                        {formatStatus(order.status)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Delivery Address</h4>
                  <div className="text-sm text-gray-600">
                    <p>{order.shippingAddress.name}</p>
                    <p>{order.shippingAddress.street}</p>
                    <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                    <p>{order.shippingAddress.country}</p>
                  </div>
                </div>
{/* 
                {order.estimatedDelivery && order.status !== "delivered" && order.status !== "cancelled" && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Estimated Delivery</h4>
                    <p className="text-sm text-gray-600">{formatDate(order.estimatedDelivery)}</p>
                  </div>
                )} */}
{/* 
                {order.deliveryDate && order.status === "delivered" && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Delivered On</h4>
                    <p className="text-sm text-gray-600">{formatDate(order.deliveryDate)}</p>
                  </div>
                )} */}
              </CardContent>
            </Card>

            {/* Order Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Order Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.orderHistory.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        {getStatusIcon(event.status.toLowerCase())}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium text-gray-900">{event.status}</h4>
                          <span className="text-sm text-gray-500">{formatDateTime(event.date)}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${order.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span>${order.shipping}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span>${order.tax}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${order.total}</span>
                </div>
                <Separator />
                <div className="text-sm text-gray-600">
                  <p>Payment Method: {order.paymentMethod}</p>
                  <p>Order Date: {formatDate(order.orderDate)}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}