import React, { useState } from "react";
import { Wallet } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../../../components/ui/dropdown-menu";
import { TransactionDetailsModal, TransactionDetail } from "./components/TransactionDetailsModal";
import { EscrowPortal } from "../../EscrowPortalFeature/EscrowPortal";

// Define transaction types
type TransactionStatus = "completed" | "in-escrow";

interface Transaction {
  id: string;
  orderId: string;
  customerName: string;
  customerEmail: string;
  productName: string;
  productPrice: number;
  quantity: number;
  amount: number;
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

// Sample transaction data
const sampleTransactions: Transaction[] = [
  {
    id: "#183878484",
    orderId: "#1838",
    customerName: "Emily Carter",
    customerEmail: "emily.carter@example.com",
    productName: "Premium Leather Wallet",
    productPrice: 65,
    quantity: 2,
    amount: 130,
    status: "completed",
    date: "23 May 2025",
    paymentMethod: "Credit Card",
    timeline: {
      orderPlaced: "15 May 2025, 10:23 AM",
      paymentReceived: "15 May 2025, 10:25 AM",
      productShipped: "16 May 2025, 2:00 PM",
      deliveryConfirmed: "20 May 2025, 11:30 AM",
      escrowReleased: "23 May 2025, 9:15 AM"
    }
  },
  {
    id: "#849494493",
    orderId: "#3883",
    customerName: "James Thompson",
    customerEmail: "james.thompson@example.com",
    productName: "Wireless Earbuds",
    productPrice: 129.99,
    quantity: 1,
    amount: 129.99,
    status: "completed",
    date: "23 May 2025",
    paymentMethod: "PayPal",
    timeline: {
      orderPlaced: "16 May 2025, 3:45 PM",
      paymentReceived: "16 May 2025, 3:47 PM",
      productShipped: "17 May 2025, 10:00 AM",
      deliveryConfirmed: "21 May 2025, 5:20 PM",
      escrowReleased: "23 May 2025, 10:05 AM"
    }
  },
  {
    id: "#894904489",
    orderId: "#8489",
    customerName: "Sophia Martinez",
    customerEmail: "sophia.martinez@example.com",
    productName: "Hooded Splash Shirt",
    productPrice: 45,
    quantity: 3,
    amount: 135,
    status: "in-escrow",
    date: "23 May 2025",
    paymentMethod: "Credit Card",
    escrowReleaseDue: "28 May 2025",
    timeline: {
      orderPlaced: "19 May 2025, 9:10 AM",
      paymentReceived: "19 May 2025, 9:12 AM",
      productShipped: "20 May 2025, 11:30 AM",
      deliveryConfirmed: "23 May 2025, 2:45 PM"
    }
  },
  {
    id: "#839338483",
    orderId: "#8483",
    customerName: "Liam Johnson",
    customerEmail: "liam.johnson@example.com",
    productName: "Premium Leather Wallet",
    productPrice: 65,
    quantity: 1,
    amount: 65,
    status: "in-escrow",
    date: "23 May 2025",
    paymentMethod: "PayPal",
    escrowReleaseDue: "29 May 2025",
    timeline: {
      orderPlaced: "20 May 2025, 4:30 PM",
      paymentReceived: "20 May 2025, 4:32 PM",
      productShipped: "21 May 2025, 11:00 AM"
    }
  },
  {
    id: "#744893984",
    orderId: "#7484",
    customerName: "Olivia Brown",
    customerEmail: "olivia.brown@example.com",
    productName: "Wireless Earbuds",
    productPrice: 129.99,
    quantity: 1,
    amount: 129.99,
    status: "completed",
    date: "23 May 2025",
    paymentMethod: "Credit Card",
    timeline: {
      orderPlaced: "14 May 2025, 1:15 PM",
      paymentReceived: "14 May 2025, 1:17 PM",
      productShipped: "15 May 2025, 10:30 AM",
      deliveryConfirmed: "19 May 2025, 3:45 PM",
      escrowReleased: "20 May 2025, 9:30 AM"
    }
  },
  {
    id: "#893933494",
    orderId: "#8494",
    customerName: "Ethan Davis",
    customerEmail: "ethan.davis@example.com",
    productName: "Hooded Splash Shirt",
    productPrice: 45,
    quantity: 2,
    amount: 90,
    status: "in-escrow",
    date: "23 May 2025",
    paymentMethod: "PayPal",
    escrowReleaseDue: "30 May 2025",
    timeline: {
      orderPlaced: "21 May 2025, 2:20 PM",
      paymentReceived: "21 May 2025, 2:22 PM",
      productShipped: "22 May 2025, 9:45 AM",
      deliveryConfirmed: "25 May 2025, 11:30 AM"
    }
  }
];

export function SellerTransactions() {
  const [filter, setFilter] = useState<"all" | "in-escrow" | "completed">("all");
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [showEscrowPortal, setShowEscrowPortal] = useState(false);
  const [activeEscrowId, setActiveEscrowId] = useState<string>("");

  // Filter transactions based on status
  const filteredTransactions = sampleTransactions.filter(transaction => {
    const matchesStatus = filter === "all" || transaction.status === filter;
    return matchesStatus;
  });

  // Calculate analytics data
  const totalRevenue = sampleTransactions.reduce((sum, t) => sum + t.amount, 0);
  const inEscrow = sampleTransactions
    .filter(t => t.status === "in-escrow")
    .reduce((sum, t) => sum + t.amount, 0);
  const completed = sampleTransactions
    .filter(t => t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);

  // Handle opening transaction details
  const handleViewDetails = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsDetailsModalOpen(true);
  };

  // Handle viewing escrow portal
  const handleViewEscrowPortal = (transactionId: string) => {
    setActiveEscrowId(transactionId);
    setShowEscrowPortal(true);
  };

  // Handle going back from escrow portal
  const handleBackFromEscrowPortal = () => {
    setShowEscrowPortal(false);
    setActiveEscrowId("");
  };

  // Convert Transaction to TransactionDetail format for the modal
  const getTransactionDetail = (transaction: Transaction): TransactionDetail => {
    return {
      ...transaction,
      totalAmount: transaction.amount
    };
  };

  // If showing escrow portal, render that instead
  if (showEscrowPortal) {
    return <EscrowPortal escrowId={activeEscrowId} onBack={handleBackFromEscrowPortal} />;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-100 p-6">
          <p className="text-slate-600 mb-1">Total Revenue</p>
          <h3 className="text-[18px] font-semibold">$ {totalRevenue.toLocaleString()}</h3>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-6">
          <p className="text-slate-600 mb-1">In-Escrow</p>
          <h3 className="text-[18px] font-semibold">$ {inEscrow.toLocaleString()}</h3>
        </div>
        <div className="bg-white rounded-xl border border-slate-100 p-6">
          <p className="text-slate-600 mb-1">Completed</p>
          <h3 className="text-[18px] font-semibold">$ {completed.toLocaleString()}</h3>
        </div>
      </div>
      
      {/* Transactions Table */}
      <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
        {/* Table Header */}
        <div className="p-4 border-b border-slate-100">
          <div className="flex flex-wrap gap-2 items-center">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              size="sm" 
              onClick={() => setFilter("all")}
              className="rounded-md"
            >
              All
            </Button>
            <Button 
              variant={filter === "in-escrow" ? "default" : "outline"}
              size="sm" 
              onClick={() => setFilter("in-escrow")}
              className="rounded-md"
            >
              In-Escrow
            </Button>
            <Button 
              variant={filter === "completed" ? "default" : "outline"}
              size="sm" 
              onClick={() => setFilter("completed")}
              className="rounded-md"
            >
              Completed
            </Button>
          </div>
        </div>
        
        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50">
                <th className="p-4 text-left font-medium text-slate-900">Transaction ID</th>
                <th className="p-4 text-left font-medium text-slate-900">Order ID</th>
                <th className="p-4 text-left font-medium text-slate-900">Customer name</th>
                <th className="p-4 text-left font-medium text-slate-900">Amount</th>
                <th className="p-4 text-left font-medium text-slate-900">Status</th>
                <th className="p-4 text-left font-medium text-slate-900">Date</th>
                <th className="p-4 text-left font-medium text-slate-900"></th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr 
                  key={transaction.id} 
                  className="border-b border-slate-100 hover:bg-slate-50 cursor-pointer"
                  onClick={() => handleViewDetails(transaction)}
                >
                  <td className="p-4 font-normal text-slate-900">{transaction.id}</td>
                  <td className="p-4 font-normal text-slate-900">{transaction.orderId}</td>
                  <td className="p-4 font-normal text-slate-900">{transaction.customerName}</td>
                  <td className="p-4 font-normal text-slate-900">${transaction.amount}</td>
                  <td className="p-4">
                    {transaction.status === "completed" ? (
                      <Badge variant="outline" className="bg-green-100 text-green-900 border-0">
                        Completed
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-sky-100 text-blue-900 border-0">
                        In-Escrow
                      </Badge>
                    )}
                  </td>
                  <td className="p-4 font-normal text-slate-900">{transaction.date}</td>
                  <td className="p-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33333 8 7.33333C7.63181 7.33333 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667Z" stroke="#334155" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
                            <path d="M8 4C8.36819 4 8.66667 3.70152 8.66667 3.33333C8.66667 2.96514 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.96514 7.33333 3.33333C7.33333 3.70152 7.63181 4 8 4Z" stroke="#334155" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
                            <path d="M8 13.3333C8.36819 13.3333 8.66667 13.0349 8.66667 12.6667C8.66667 12.2985 8.36819 12 8 12C7.63181 12 7.33333 12.2985 7.33333 12.6667C7.33333 13.0349 7.63181 13.3333 8 13.3333Z" stroke="#334155" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333"/>
                          </svg>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                        <DropdownMenuItem onClick={() => handleViewDetails(transaction)}>
                          View Details
                        </DropdownMenuItem>
                        {transaction.status === "in-escrow" && (
                          <DropdownMenuItem onClick={() => handleViewEscrowPortal(transaction.id)}>
                            View in Escrow Portal
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
              
              {filteredTransactions.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-500">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transaction Details Modal */}
      {selectedTransaction && (
        <TransactionDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
          transaction={getTransactionDetail(selectedTransaction)}
          onViewEscrowPortal={handleViewEscrowPortal}
        />
      )}
    </div>
  );
}