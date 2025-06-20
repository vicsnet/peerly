import React, { useState, useRef, useEffect } from "react";
import { 
  ArrowLeft, 
  Calendar, 
  CheckCircle, 
  Clock, 
  FileText, 
  MessageSquare, 
  Package, 
  Send, 
  Shield, 
  Truck, 
  User,
  MessageSquareText,
  ImagePlus,
  X,
  Upload
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Textarea } from "../../components/ui/textarea";
import { toast } from "sonner";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";
import { Label } from "../../components/ui/label";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ReportIssueModal, UploadedImage } from "./components/ReportIssueModal";

export interface EscrowDetails {
  id: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  productName: string;
  productPrice: number;
  quantity: number;
  totalAmount: number;
  paymentMethod: string;
  status: "awaiting_shipping" | "in_transit" | "delivered" | "disputed" | "completed";
  statusDescription: string;
  createdAt: string;
  escrowReleaseDue?: string;
  timeline: {
    orderPlaced: string;
    paymentReceived: string;
    productShipped?: string;
    deliveryConfirmed?: string;
    escrowReleased?: string;
  };
  messages: {
    id: string;
    sender: "buyer" | "seller" | "system";
    message: string;
    timestamp: string;
  }[];
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isSeller?: boolean;
}

interface EscrowPortalProps {
  escrowId: string;
  onBack: () => void;
  user?: User | null;
}

// Mock data for a single escrow transaction
const mockEscrowData: EscrowDetails = {
  id: "#894904489",
  orderId: "#8489",
  customerName: "Sophia Martinez",
  customerEmail: "sophia.martinez@example.com",
  productName: "Hooded Splash Shirt",
  productPrice: 45,
  quantity: 3,
  totalAmount: 135,
  paymentMethod: "Credit Card",
  status: "delivered",
  statusDescription: "The buyer has confirmed delivery. Funds will be released from escrow soon.",
  createdAt: "19 May 2025, 9:10 AM",
  escrowReleaseDue: "28 May 2025",
  timeline: {
    orderPlaced: "19 May 2025, 9:10 AM",
    paymentReceived: "19 May 2025, 9:12 AM",
    productShipped: "20 May 2025, 11:30 AM",
    deliveryConfirmed: "23 May 2025, 2:45 PM"
  },
  messages: [
    {
      id: "1",
      sender: "system",
      message: "Escrow has been initiated. Payment has been received and is being held in escrow.",
      timestamp: "19 May 2025, 9:12 AM"
    },
    {
      id: "2",
      sender: "seller",
      message: "Thank you for your order! I'll be shipping your Hooded Splash Shirts tomorrow.",
      timestamp: "19 May 2025, 10:30 AM"
    },
    {
      id: "3",
      sender: "buyer",
      message: "Great! Looking forward to receiving them.",
      timestamp: "19 May 2025, 11:45 AM"
    },
    {
      id: "4",
      sender: "seller",
      message: "Your order has been shipped. You should receive it within 3-5 business days.",
      timestamp: "20 May 2025, 11:35 AM"
    },
    {
      id: "5",
      sender: "system",
      message: "Tracking information has been updated: ABC123456789",
      timestamp: "20 May 2025, 11:36 AM"
    },
    {
      id: "6",
      sender: "buyer",
      message: "Just received the package. The shirts look great! Thank you.",
      timestamp: "23 May 2025, 2:40 PM"
    },
    {
      id: "7",
      sender: "system",
      message: "Buyer has confirmed delivery. Funds will be released from escrow in 5 days unless a dispute is raised.",
      timestamp: "23 May 2025, 2:45 PM"
    }
  ]
};

export function EscrowPortal({ escrowId, onBack, user }: EscrowPortalProps) {
  const [escrowData, setEscrowData] = useState<EscrowDetails>(mockEscrowData);
  const [messageText, setMessageText] = useState("");
  const [isConfirmReleaseDialogOpen, setIsConfirmReleaseDialogOpen] = useState(false);
  const [isReportIssueDialogOpen, setIsReportIssueDialogOpen] = useState(false);
  const messageListRef = useRef<HTMLDivElement>(null);
  
  // Determine if current user is a seller
  const isSeller = user?.isSeller || false;
  
  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [escrowData.messages]);
  
  // Handle sending a new message
  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    const newMessage = {
      id: `msg-${Date.now()}`,
      sender: isSeller ? "seller" as const : "buyer" as const,
      message: messageText.trim(),
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    };
    
    setEscrowData(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
    
    setMessageText("");
    toast.success("Message sent");
  };
  
  // Handle requesting early release (seller only)
  const handleRequestEarlyRelease = () => {
    setIsConfirmReleaseDialogOpen(false);
    
    // Add a system message about the request
    const newMessage = {
      id: `msg-${Date.now()}`,
      sender: "system" as const,
      message: "Seller has requested early release of funds. Waiting for buyer approval.",
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    };
    
    setEscrowData(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
    
    toast.success("Early release request sent to buyer");
  };

  // Handle reporting an issue
  const handleReportIssueSubmit = (description: string, images: UploadedImage[]) => {
    // Format message with image count if any were uploaded
    const issueMessage = images.length > 0
      ? `${isSeller ? 'Seller' : 'Buyer'} has reported an issue with this transaction and provided ${images.length} image${images.length > 1 ? 's' : ''} as evidence: "${description}". Our support team will review it within 24 hours.`
      : `${isSeller ? 'Seller' : 'Buyer'} has reported an issue with this transaction: "${description}". Our support team will review it within 24 hours.`;
    
    // Add a system message about the issue report
    const newMessage = {
      id: `msg-${Date.now()}`,
      sender: "system" as const,
      message: issueMessage,
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    };
    
    setEscrowData(prev => ({
      ...prev,
      status: "disputed" as const,
      statusDescription: "This transaction is under review by our support team.",
      messages: [...prev.messages, newMessage]
    }));
    
    setIsReportIssueDialogOpen(false);
    toast.success("Issue reported with evidence. Our team will contact you shortly.");
  };
  
  // Determine the status color and icon
  const getStatusInfo = () => {
    switch (escrowData.status) {
      case "awaiting_shipping":
        return { 
          color: "bg-blue-50 text-blue-700 border-blue-200", 
          icon: <Package className="h-5 w-5 text-blue-500" />,
          progressPercent: 25
        };
      case "in_transit":
        return { 
          color: "bg-orange-50 text-orange-700 border-orange-200", 
          icon: <Truck className="h-5 w-5 text-orange-500" />,
          progressPercent: 50
        };
      case "delivered":
        return { 
          color: "bg-green-50 text-green-700 border-green-200", 
          icon: <CheckCircle className="h-5 w-5 text-green-500" />,
          progressPercent: 75
        };
      case "disputed":
        return { 
          color: "bg-red-50 text-red-700 border-red-200", 
          icon: <Shield className="h-5 w-5 text-red-500" />,
          progressPercent: 50
        };
      case "completed":
        return { 
          color: "bg-emerald-50 text-emerald-700 border-emerald-200", 
          icon: <CheckCircle className="h-5 w-5 text-emerald-500" />,
          progressPercent: 100
        };
      default:
        return { 
          color: "bg-gray-50 text-gray-700 border-gray-200", 
          icon: <Clock className="h-5 w-5 text-gray-500" />,
          progressPercent: 0
        };
    }
  };
  
  const statusInfo = getStatusInfo();
  
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <div className="flex-1 p-6 overflow-auto">
        <div className="mb-4 flex items-center justify-between">
          <Button variant="outline" onClick={onBack} className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to {isSeller ? 'Dashboard' : 'Transactions'}
          </Button>
          
          <Badge variant="outline" className={`${statusInfo.color} border-0`}>
            {escrowData.status === "awaiting_shipping" && "Awaiting Shipping"}
            {escrowData.status === "in_transit" && "In Transit"}
            {escrowData.status === "delivered" && "Delivered"}
            {escrowData.status === "disputed" && "Dispute in Progress"}
            {escrowData.status === "completed" && "Completed"}
          </Badge>
        </div>
        
        {/* Escrow Portal heading */}
        <div className="mb-4">
          <h2 className="text-[18px] font-semibold">Escrow Portal</h2>
          <p className="text-[14px] text-slate-500">Transaction {escrowData.id} | Order {escrowData.orderId}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Transaction details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status card */}
            <Card className={`border ${statusInfo.color}`}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full p-2 bg-white border border-current">
                    {statusInfo.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">
                      {escrowData.status === "awaiting_shipping" && "Awaiting Shipping"}
                      {escrowData.status === "in_transit" && "In Transit"}
                      {escrowData.status === "delivered" && "Delivered"}
                      {escrowData.status === "disputed" && "Dispute in Progress"}
                      {escrowData.status === "completed" && "Completed"}
                    </h3>
                    <p className="text-sm mt-1">{escrowData.statusDescription}</p>
                    
                    {/* Progress bar */}
                    <div className="w-full h-2 bg-slate-100 rounded-full mt-4">
                      <div 
                        className="h-2 bg-current rounded-full" 
                        style={{ width: `${statusInfo.progressPercent}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between mt-2 text-xs">
                      <span>Payment Received</span>
                      <span>Product Shipped</span>
                      <span>Delivered</span>
                      <span>Completed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Tabs for Order Details and Communication */}
            <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <Tabs defaultValue="communication" className="w-full">
                <TabsList className="grid w-full grid-cols-2 p-0 h-auto">
                  <TabsTrigger value="details" className="py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:rounded-none data-[state=active]:shadow-none">
                    Order Details
                  </TabsTrigger>
                  <TabsTrigger value="communication" className="py-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:rounded-none data-[state=active]:shadow-none">
                    Communication
                  </TabsTrigger>
                </TabsList>
                
                {/* Order Details Tab */}
                <TabsContent value="details" className="m-0 p-0">
                  <div className="p-6 max-h-[45vh] overflow-y-auto">
                    <h3 className="font-semibold mb-4">Transaction Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-slate-500">Transaction ID</p>
                        <p className="font-medium">{escrowData.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Order ID</p>
                        <p className="font-medium">{escrowData.orderId}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Created Date</p>
                        <p className="font-medium">{escrowData.createdAt}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Payment Method</p>
                        <p className="font-medium">{escrowData.paymentMethod}</p>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <h3 className="font-semibold mb-4">
                      {isSeller ? 'Customer Information' : 'Seller Information'}
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-slate-500">
                          {isSeller ? 'Customer Name' : 'Seller Name'}
                        </p>
                        <p className="font-medium">
                          {isSeller ? escrowData.customerName : 'SneakerWorld Store'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">
                          {isSeller ? 'Customer Email' : 'Seller Email'}
                        </p>
                        <p className="font-medium">
                          {isSeller ? escrowData.customerEmail : 'support@sneakerworld.com'}
                        </p>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <h3 className="font-semibold mb-4">Product Information</h3>
                    
                    <div className="bg-slate-50 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{escrowData.productName}</h4>
                          <p className="text-sm text-slate-500">Quantity: {escrowData.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${escrowData.productPrice.toFixed(2)}</p>
                          <p className="text-xs text-slate-500">per unit</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between border-t border-slate-100 pt-4">
                      <span className="font-semibold">Total Amount:</span>
                      <span className="font-semibold">${escrowData.totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Communication Tab */}
                <TabsContent value="communication" className="m-0 p-0">
                  <div className="flex flex-col" style={{ height: 'calc(45vh)' }}>
                    {/* Message list - scrollable */}
                    <div 
                      ref={messageListRef}
                      className="flex-1 overflow-y-auto p-6"
                    >
                      {escrowData.messages.length > 0 ? (
                        escrowData.messages.map((message) => (
                          <div 
                            key={message.id} 
                            className={`mb-4 flex ${
                              message.sender === (isSeller ? 'seller' : 'buyer') 
                                ? 'justify-end' 
                                : 'justify-start'
                            }`}
                          >
                            {message.sender === 'system' ? (
                              <div className="bg-slate-100 rounded-lg p-3 max-w-[80%] text-center mx-auto">
                                <p className="text-sm text-slate-600">{message.message}</p>
                                <span className="text-xs text-slate-500 mt-1 block">{message.timestamp}</span>
                              </div>
                            ) : (
                              <div 
                                className={`p-3 rounded-lg max-w-[80%] ${
                                  message.sender === (isSeller ? 'seller' : 'buyer')
                                    ? 'bg-blue-100 text-blue-900' 
                                    : 'bg-slate-100 text-slate-900'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  {message.sender !== (isSeller ? 'seller' : 'buyer') && (
                                    <div className="bg-slate-200 rounded-full p-1">
                                      <User className="h-3 w-3" />
                                    </div>
                                  )}
                                  <span className="text-xs font-medium">
                                    {message.sender === (isSeller ? 'seller' : 'buyer') 
                                      ? 'You' 
                                      : isSeller ? 'Buyer' : 'Seller'
                                    }
                                  </span>
                                </div>
                                <p className="text-sm">{message.message}</p>
                                <span className="text-xs opacity-70 mt-1 block">{message.timestamp}</span>
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="h-full flex flex-col items-center justify-center text-center">
                          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
                            <MessageSquareText className="h-6 w-6 text-slate-400" />
                          </div>
                          <h3 className="text-lg font-medium text-slate-900 mb-1">No messages yet</h3>
                          <p className="text-sm text-slate-500 max-w-md">
                            Start the conversation with the {isSeller ? 'buyer' : 'seller'} about this transaction. Messages are saved and visible to both parties.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {/* Message input - fixed at bottom */}
                    <div className="p-4 border-t border-slate-100 bg-white">
                      <div className="flex gap-2">
                        <Textarea 
                          placeholder="Type a message..." 
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          className="resize-none h-[45px] min-h-[45px]"
                        />
                        <Button 
                          size="icon" 
                          onClick={handleSendMessage}
                          disabled={!messageText.trim()}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Right column - Timeline and Actions */}
          <div className="space-y-6 max-h-[90vh]">
            {/* Timeline card */}
            <Card className="overflow-auto max-h-[40vh]">
              <CardHeader className="pb-2 sticky top-0 bg-white z-10">
                <CardTitle className="text-lg">Transaction Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-medium">Order Placed</h4>
                      <p className="text-[12px] text-slate-500">{escrowData.timeline.orderPlaced}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                    </div>
                    <div>
                      <h4 className="text-[14px] font-medium">Payment in Escrow</h4>
                      <p className="text-[12px] text-slate-500">{escrowData.timeline.paymentReceived}</p>
                    </div>
                  </div>
                  
                  {escrowData.timeline.productShipped && (
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <Truck className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                      </div>
                      <div>
                        <h4 className="text-[14px] font-medium">Product Shipped</h4>
                        <p className="text-[12px] text-slate-500">{escrowData.timeline.productShipped}</p>
                      </div>
                    </div>
                  )}
                  
                  {escrowData.timeline.deliveryConfirmed && (
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        {!escrowData.timeline.escrowReleased && (
                          <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-[14px] font-medium">Delivery Confirmed</h4>
                        <p className="text-[12px] text-slate-500">{escrowData.timeline.deliveryConfirmed}</p>
                      </div>
                    </div>
                  )}
                  
                  {escrowData.timeline.escrowReleased ? (
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[14px] font-medium">Escrow Released</h4>
                        <p className="text-[12px] text-slate-500">{escrowData.timeline.escrowReleased}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                          <Clock className="h-4 w-4 text-slate-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[14px] font-medium">Awaiting Escrow Release</h4>
                        {escrowData.escrowReleaseDue && (
                          <p className="text-[12px] text-slate-500">
                            Expected by {escrowData.escrowReleaseDue}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            {/* Actions card - Show different actions based on user type */}
            <Card className="max-h-[30vh]">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Seller-specific actions */}
                {isSeller && escrowData.status === "delivered" && (
                  <Button 
                    variant="default" 
                    className="w-full" 
                    onClick={() => setIsConfirmReleaseDialogOpen(true)}
                  >
                    Request Early Release
                  </Button>
                )}
                
                {/* Report issue button for both seller and buyer */}
                {(escrowData.status === "delivered" || escrowData.status === "in_transit") && (
                  <Button 
                    variant="outline" 
                    className="w-full text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => setIsReportIssueDialogOpen(true)}
                  >
                    Report an Issue
                  </Button>
                )}
                
                {/* Download receipt available for all users */}
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Receipt
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Confirm Early Release Dialog - Only shown for sellers */}
      {isSeller && (
        <AlertDialog open={isConfirmReleaseDialogOpen} onOpenChange={setIsConfirmReleaseDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Request Early Release of Funds</AlertDialogTitle>
              <AlertDialogDescription>
                Requesting early release will notify the buyer to release the funds before the automatic release date. This is usually done when both parties are satisfied with the transaction.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleRequestEarlyRelease}>
                Request Early Release
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
      
      {/* Report Issue Modal - Available for both sellers and buyers */}
      <ReportIssueModal
        isOpen={isReportIssueDialogOpen}
        onClose={() => setIsReportIssueDialogOpen(false)}
        onSubmit={handleReportIssueSubmit}
        title={`Report an Issue with Transaction ${escrowData.id}`}
        description="Describe the issue you're experiencing with this transaction. Our support team will review your report and contact you within 24 hours."
      />
    </div>
  );
}