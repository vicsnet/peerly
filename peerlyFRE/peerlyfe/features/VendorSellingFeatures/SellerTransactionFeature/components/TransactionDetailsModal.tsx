import React, { useState } from "react";
import { X, AlertTriangle, Package, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter 
} from "../../../../components/ui/dialog";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Separator } from "../../../../components/ui/separator";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../../../components/ui/alert-dialog";
import { toast } from "sonner";

export type TransactionStatus = "completed" | "in-escrow";

export interface TransactionDetail {
  id: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  productName: string;
  productPrice: number;
  quantity: number;
  totalAmount: number;
  status: TransactionStatus;
  date: string;
  paymentMethod: string;
  escrowReleaseDue?: string;
  timeline: {
    orderPlaced: string;
    paymentReceived: string;
    productShipped?: string;
    deliveryConfirmed?: string;
    escrowReleased?: string;
  }
}

interface TransactionDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  transaction: TransactionDetail | null;
  onViewEscrowPortal: (transactionId: string) => void;
}

export function TransactionDetailsModal({
  isOpen,
  onClose,
  transaction,
  onViewEscrowPortal
}: TransactionDetailsModalProps) {
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  
  if (!transaction) return null;

  // Get appropriate status badge
  const getStatusBadge = (status: TransactionStatus) => {
    switch (status) {
      case "in-escrow":
        return <Badge variant="outline" className="bg-sky-100 text-blue-900 border-0 text-xs font-medium">In-Escrow</Badge>;
      case "completed":
        return <Badge variant="outline" className="bg-green-100 text-green-900 border-0 text-xs font-medium">Completed</Badge>;
      default:
        return null;
    }
  };

  // Handle report submission
  const handleReportIssue = () => {
    // Close the report dialog
    setIsReportDialogOpen(false);
    
    // Show success toast
    toast.success("Your report has been submitted. Our team will review it within 24 hours.");
  };

  // Handle viewing escrow portal
  const handleViewEscrowPortal = () => {
    onClose();
    onViewEscrowPortal(transaction.id);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="sm:max-w-[800px] rounded-xl overflow-hidden">
          <div className="flex flex-col max-h-[80vh]">
            <div className="sticky top-0 z-10 bg-white border-b border-slate-100">
              <DialogHeader className="px-6 py-4 flex flex-row items-center justify-between">
                <div className="flex flex-col gap-1">
                  <DialogTitle className="text-[18px] font-semibold">Transaction Details</DialogTitle>
                  <DialogDescription className="text-[14px] text-slate-500">
                    View information about this transaction
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
              {/* Transaction header with ID and status */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col">
                  <h3 className="text-[18px] font-semibold text-slate-900">{transaction.id}</h3>
                  <p className="text-[14px] text-slate-500">Transaction date: {transaction.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(transaction.status)}
                </div>
              </div>

              {/* Transaction info cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl border border-slate-100 p-4">
                  <h4 className="text-[14px] font-medium text-slate-500 mb-1">Order ID</h4>
                  <p className="text-[14px] font-medium">{transaction.orderId}</p>
                </div>

                <div className="bg-white rounded-xl border border-slate-100 p-4">
                  <h4 className="text-[14px] font-medium text-slate-500 mb-1">Payment Method</h4>
                  <p className="text-[14px] font-medium">{transaction.paymentMethod}</p>
                </div>

                <div className="bg-white rounded-xl border border-slate-100 p-4">
                  <h4 className="text-[14px] font-medium text-slate-500 mb-1">Total Amount</h4>
                  <p className="text-[14px] font-medium">${transaction.totalAmount.toFixed(2)}</p>
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
                      <p className="text-[14px] font-medium">{transaction.customerName}</p>
                      <p className="text-[14px]">{transaction.customerEmail}</p>
                    </div>
                  </div>
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
                      <div className="w-full h-full flex items-center justify-center text-slate-400">
                        <Package className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[16px] font-medium">{transaction.productName}</h4>
                      <p className="text-[14px] text-slate-500">Quantity: {transaction.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[16px] font-medium">${transaction.productPrice.toFixed(2)}</p>
                      <p className="text-[12px] text-slate-500">Per unit</p>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between items-center">
                    <span className="text-[14px] font-medium">Subtotal</span>
                    <span className="text-[14px]">${(transaction.productPrice * transaction.quantity).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[14px] font-medium">Platform Fee</span>
                    <span className="text-[14px]">$5.00</span>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between items-center">
                    <span className="text-[16px] font-semibold">Total</span>
                    <span className="text-[16px] font-semibold">${transaction.totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-xl border border-slate-100 mb-6 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100">
                  <h3 className="text-[16px] font-semibold">Transaction Timeline</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                      </div>
                      <div>
                        <h4 className="text-[14px] font-medium">Order Placed</h4>
                        <p className="text-[12px] text-slate-500">{transaction.timeline.orderPlaced}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                      </div>
                      <div>
                        <h4 className="text-[14px] font-medium">Payment Received (In Escrow)</h4>
                        <p className="text-[12px] text-slate-500">{transaction.timeline.paymentReceived}</p>
                      </div>
                    </div>
                    
                    {transaction.timeline.productShipped && (
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                          <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                        </div>
                        <div>
                          <h4 className="text-[14px] font-medium">Product Shipped</h4>
                          <p className="text-[12px] text-slate-500">{transaction.timeline.productShipped}</p>
                        </div>
                      </div>
                    )}
                    
                    {transaction.timeline.deliveryConfirmed && (
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                          <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                        </div>
                        <div>
                          <h4 className="text-[14px] font-medium">Delivery Confirmed</h4>
                          <p className="text-[12px] text-slate-500">{transaction.timeline.deliveryConfirmed}</p>
                        </div>
                      </div>
                    )}
                    
                    {transaction.status === "completed" && transaction.timeline.escrowReleased ? (
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[14px] font-medium">Escrow Released</h4>
                          <p className="text-[12px] text-slate-500">{transaction.timeline.escrowReleased}</p>
                        </div>
                      </div>
                    ) : transaction.status === "in-escrow" ? (
                      <div className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                            <Clock className="h-4 w-4 text-slate-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[14px] font-medium">Awaiting Escrow Release</h4>
                          {transaction.escrowReleaseDue && (
                            <p className="text-[12px] text-slate-500">
                              Expected by {transaction.escrowReleaseDue}
                            </p>
                          )}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Issue reporting section - only show for in-escrow transactions */}
              {transaction.status === "in-escrow" && transaction.timeline.deliveryConfirmed && (
                <div className="bg-amber-50 rounded-xl border border-amber-100 p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-medium text-amber-900">Has the buyer received the goods?</h4>
                      <p className="text-[14px] text-amber-700 mb-4">
                        If the buyer has confirmed delivery but hasn't released the funds from escrow, you can report this issue.
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-amber-200 bg-amber-100 text-amber-900 hover:bg-amber-200"
                        onClick={() => setIsReportDialogOpen(true)}
                      >
                        Report Issue
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <DialogFooter className="px-6 py-4 border-t border-slate-100">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              {transaction.status === "in-escrow" && (
                <Button 
                  className="flex items-center gap-1"
                  onClick={handleViewEscrowPortal}
                >
                  View in Escrow Portal <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      {/* Report Issue Alert Dialog */}
      <AlertDialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
        <AlertDialogContent className="max-w-[500px]">
          <AlertDialogHeader>
            <AlertDialogTitle>Report Escrow Release Issue</AlertDialogTitle>
            <AlertDialogDescription>
              By submitting this report, our team will review the transaction and may contact the buyer. 
              If the buyer has received the goods but hasn't released the escrow funds, we may initiate 
              a dispute resolution process.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="bg-slate-50 p-4 rounded-md my-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-[14px] text-slate-600">Transaction ID:</span>
                <span className="text-[14px] font-medium">{transaction?.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[14px] text-slate-600">Order ID:</span>
                <span className="text-[14px] font-medium">{transaction?.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[14px] text-slate-600">Amount:</span>
                <span className="text-[14px] font-medium">${transaction?.totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[14px] text-slate-600">Customer:</span>
                <span className="text-[14px] font-medium">{transaction?.customerName}</span>
              </div>
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleReportIssue}>Submit Report</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}