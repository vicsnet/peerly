import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  DollarSign, 
  Calendar, 
  User, 
  Package,
  Clock,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Shield
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

interface Transaction {
  id: string;
  type: "purchase" | "refund" | "payment";
  amount: number;
  status: "completed" | "pending" | "processing" | "disputed" | "failed" | "refunded";
  date: string;
  description: string;
  vendor: {
    name: string;
    logo: string;
  };
  product?: {
    name: string;
    image: string;
  };
  orderId?: string;
  escrowId?: string;
  paymentMethod: string;
  transactionFee: number;
}

interface TransactionsProps {
  onBack: () => void;
  onViewEscrow: (escrowId: string) => void;
}

// Mock transactions data
const mockTransactions: Transaction[] = [
  {
    id: "TXN-2024-001",
    type: "purchase",
    amount: 142.00,
    status: "completed",
    date: "2024-01-15T14:30:00Z",
    description: "Purchase from SneakerWorld",
    vendor: {
      name: "SneakerWorld",
      logo: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=100"
    },
    product: {
      name: "Jordan 4 Retro White Cement (2025)",
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80&w=100"
    },
    orderId: "ORD-001",
    escrowId: "ESC-001",
    paymentMethod: "Credit Card ****4242",
    transactionFee: 4.26
  },
  {
    id: "TXN-2024-002",
    type: "purchase",
    amount: 457.00,
    status: "completed",
    date: "2024-01-10T11:20:00Z",
    description: "Purchase from SneakerWorld",
    vendor: {
      name: "SneakerWorld",
      logo: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=100"
    },
    product: {
      name: "Nike Air Max 97 OG Silver Bullet (2023)",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=100"
    },
    orderId: "ORD-002",
    escrowId: "ESC-002",
    paymentMethod: "Credit Card ****4242",
    transactionFee: 13.71
  },
  {
    id: "TXN-2024-003",
    type: "purchase",
    amount: 267.00,
    status: "processing",
    date: "2024-01-18T09:45:00Z",
    description: "Purchase from SneakerWorld",
    vendor: {
      name: "SneakerWorld",
      logo: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=100"
    },
    product: {
      name: "Adidas Yeezy Boost 350 V2 Zebra (2022)",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=100"
    },
    orderId: "ORD-003",
    escrowId: "ESC-003",
    paymentMethod: "Credit Card ****4242",
    transactionFee: 8.01
  },
  {
    id: "TXN-2024-004",
    type: "refund",
    amount: 1299.00,
    status: "completed",
    date: "2024-01-12T16:15:00Z",
    description: "Refund from TechHaven",
    vendor: {
      name: "TechHaven",
      logo: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=100"
    },
    product: {
      name: "Apple iPhone 15 Pro Max",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=100"
    },
    orderId: "ORD-004",
    paymentMethod: "Credit Card ****4242",
    transactionFee: 0
  },
  {
    id: "TXN-2024-005",
    type: "purchase",
    amount: 319.99,
    status: "pending",
    date: "2024-01-20T13:30:00Z",
    description: "Purchase from TechHaven",
    vendor: {
      name: "TechHaven",
      logo: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=100"
    },
    product: {
      name: "Sony WH-1000XM5 Wireless Headphones",
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=100"
    },
    orderId: "ORD-005",
    escrowId: "ESC-005",
    paymentMethod: "Credit Card ****4242",
    transactionFee: 9.60
  },
  {
    id: "TXN-2024-006",
    type: "purchase",
    amount: 479.00,
    status: "completed",
    date: "2024-01-14T10:20:00Z",
    description: "Purchase from Home & Beyond",
    vendor: {
      name: "Home & Beyond",
      logo: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&q=80&w=100"
    },
    product: {
      name: "Modern Coffee Table - Oak Finish",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=100"
    },
    orderId: "ORD-006",
    escrowId: "ESC-006",
    paymentMethod: "Credit Card ****4242",
    transactionFee: 14.37
  },
  {
    id: "TXN-2024-007",
    type: "purchase",
    amount: 89.99,
    status: "disputed",
    date: "2024-01-08T15:45:00Z",
    description: "Purchase from Artisan Crafts",
    vendor: {
      name: "Artisan Crafts",
      logo: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?auto=format&fit=crop&q=80&w=100"
    },
    product: {
      name: "Handcrafted Silver Necklace",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=100"
    },
    orderId: "ORD-007",
    escrowId: "ESC-007",
    paymentMethod: "Credit Card ****4242",
    transactionFee: 2.70
  },
  {
    id: "TXN-2024-008",
    type: "purchase",
    amount: 156.50,
    status: "failed",
    date: "2024-01-22T12:10:00Z",
    description: "Failed purchase from Wellness Hub",
    vendor: {
      name: "Wellness Hub",
      logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=100"
    },
    product: {
      name: "Organic Vitamin D3 Supplements",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=100"
    },
    paymentMethod: "Credit Card ****4242",
    transactionFee: 0
  }
];

const getStatusColor = (status: Transaction["status"]) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800 border-green-200";
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "processing":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "disputed":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "failed":
      return "bg-red-100 text-red-800 border-red-200";
    case "refunded":
      return "bg-purple-100 text-purple-800 border-purple-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusIcon = (status: Transaction["status"]) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="w-4 h-4" />;
    case "pending":
      return <Clock className="w-4 h-4" />;
    case "processing":
      return <Package className="w-4 h-4" />;
    case "disputed":
      return <AlertTriangle className="w-4 h-4" />;
    case "failed":
      return <XCircle className="w-4 h-4" />;
    case "refunded":
      return <DollarSign className="w-4 h-4" />;
    default:
      return <Package className="w-4 h-4" />;
  }
};

const getTypeIcon = (type: Transaction["type"]) => {
  switch (type) {
    case "purchase":
      return <Package className="w-5 h-5 text-blue-600" />;
    case "refund":
      return <DollarSign className="w-5 h-5 text-green-600" />;
    case "payment":
      return <DollarSign className="w-5 h-5 text-purple-600" />;
    default:
      return <Package className="w-5 h-5 text-gray-600" />;
  }
};

const formatStatus = (status: Transaction["status"]) => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export function Transactions({ onBack, onViewEscrow }: TransactionsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filterTransactionsByStatus = (status: string) => {
    if (status === "all") return mockTransactions;
    return mockTransactions.filter(transaction => transaction.status === status);
  };

  const filterTransactionsBySearch = (transactions: Transaction[]) => {
    if (!searchTerm) return transactions;
    return transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (transaction.product?.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const getTransactionCounts = () => {
    return {
      all: mockTransactions.length,
      completed: mockTransactions.filter(t => t.status === "completed").length,
      pending: mockTransactions.filter(t => t.status === "pending").length,
      processing: mockTransactions.filter(t => t.status === "processing").length,
      disputed: mockTransactions.filter(t => t.status === "disputed").length,
      failed: mockTransactions.filter(t => t.status === "failed").length,
      refunded: mockTransactions.filter(t => t.status === "refunded").length,
    };
  };

  const counts = getTransactionCounts();
  const filteredByStatus = filterTransactionsByStatus(activeTab);
  const finalTransactions = filterTransactionsBySearch(filteredByStatus);

  const getTotalAmount = () => {
    return finalTransactions
      .filter(t => t.status === "completed" && t.type === "purchase")
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const handleViewEscrow = (transaction: Transaction) => {
    if (transaction.escrowId) {
      onViewEscrow(transaction.escrowId);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
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
            <h1 className="text-2xl font-semibold text-gray-900">Transactions</h1>
            <p className="text-gray-600">View and manage your transaction history</p>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Spent</p>
                  <p className="text-xl font-semibold">{formatCurrency(getTotalAmount())}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Package className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Transactions</p>
                  <p className="text-xl font-semibold">{counts.all}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-xl font-semibold">{counts.pending + counts.processing}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Disputed</p>
                  <p className="text-xl font-semibold">{counts.disputed}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search transactions, vendors, or products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Status Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="all" className="relative">
              All
              {counts.all > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {counts.all}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="completed" className="relative">
              Completed
              {counts.completed > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {counts.completed}
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
            <TabsTrigger value="disputed" className="relative">
              Disputed
              {counts.disputed > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {counts.disputed}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="failed" className="relative">
              Failed
              {counts.failed > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {counts.failed}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="refunded" className="relative">
              Refunded
              {counts.refunded > 0 && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {counts.refunded}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          {/* Transactions Content */}
          <TabsContent value={activeTab} className="space-y-4">
            {finalTransactions.length === 0 ? (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <DollarSign className="w-12 h-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No transactions found
                  </h3>
                  <p className="text-gray-600 text-center">
                    {searchTerm 
                      ? "No transactions match your search criteria." 
                      : activeTab === "all" 
                        ? "You haven't made any transactions yet."
                        : `No ${activeTab} transactions found.`
                    }
                  </p>
                </CardContent>
              </Card>
            ) : (
              finalTransactions.map((transaction) => (
                <Card key={transaction.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                      {/* Transaction Icon and Type */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                          {getTypeIcon(transaction.type)}
                        </div>
                      </div>

                      {/* Transaction Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-2">
                              {/* Vendor/Product Info */}
                              <div className="flex-1">
                                <h3 className="font-medium text-gray-900 mb-1">
                                  {transaction.description}
                                </h3>
                                <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
                                  <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100">
                                      <ImageWithFallback
                                        src={transaction.vendor.logo}
                                        alt={transaction.vendor.name}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <span>{transaction.vendor.name}</span>
                                  </div>
                                  {transaction.product && (
                                    <>
                                      <span>•</span>
                                      <span>{transaction.product.name}</span>
                                    </>
                                  )}
                                </div>
                                
                                {/* Product Image */}
                                {transaction.product && (
                                  <div className="flex items-center gap-2 mb-3">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                                      <ImageWithFallback
                                        src={transaction.product.image}
                                        alt={transaction.product.name}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                  </div>
                                )}

                                {/* Transaction Meta */}
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{formatDate(transaction.date)}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    <span>{transaction.paymentMethod}</span>
                                  </div>
                                  <span>ID: {transaction.id}</span>
                                </div>
                              </div>
                            </div>

                            {/* Status and Amount */}
                            <div className="flex items-center justify-between">
                              <Badge 
                                variant="outline" 
                                className={`flex items-center gap-1 ${getStatusColor(transaction.status)}`}
                              >
                                {getStatusIcon(transaction.status)}
                                {formatStatus(transaction.status)}
                              </Badge>
                              
                              <div className="text-right">
                                <div className={`font-semibold ${
                                  transaction.type === "refund" ? "text-green-600" : "text-gray-900"
                                }`}>
                                  {transaction.type === "refund" ? "+" : ""}{formatCurrency(transaction.amount)}
                                </div>
                                {transaction.transactionFee > 0 && (
                                  <div className="text-sm text-gray-500">
                                    Fee: {formatCurrency(transaction.transactionFee)}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Actions - Only show View Escrow for non-completed transactions with escrowId */}
                          {transaction.escrowId && transaction.status !== "completed" && (
                            <div className="flex flex-col gap-2 lg:items-end">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleViewEscrow(transaction)}
                                className="flex items-center gap-2"
                              >
                                <Shield className="w-4 h-4" />
                                View Escrow
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}