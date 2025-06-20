import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../components/ui/table";
import { Badge } from "../../../../components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../../../../components/ui/alert-dialog";
import { CreditCard, Plus, DollarSign, Clock, MoreHorizontal, Download, Building, Wallet, ArrowUpCircle, AlertCircle, CheckCircle, Info, ExternalLink } from "lucide-react";
import { Separator } from "../../../../components/ui/separator";
import { toast } from "sonner";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../../../components/ui/dropdown-menu";

// Mock data for the wallet
const mockWalletData = {
  totalBalance: 5240.75,
  availableBalance: 4240.75,
  inEscrow: 1000.00,
  pendingWithdrawals: 0,
  paymentMethods: [
    {
      id: "bank-1",
      type: "bank",
      name: "Chase Bank",
      accountNumber: "****6789",
      isDefault: true,
    },
    {
      id: "paypal-1",
      type: "paypal",
      name: "PayPal",
      email: "business@example.com",
      isDefault: false,
    }
  ],
  transactionHistory: [
    {
      id: "txn-2",
      type: "escrow",
      amount: 1000.00,
      date: "2025-05-25",
      status: "pending",
      description: "Order #9045 in escrow",
    },
    {
      id: "txn-3",
      type: "withdrawal",
      amount: 2000.00,
      date: "2025-05-20",
      status: "completed",
      description: "Withdrawal to Chase Bank",
    },
    {
      id: "txn-5",
      type: "withdrawal",
      amount: 1200.00,
      date: "2025-05-10",
      status: "completed",
      description: "Withdrawal to PayPal",
    },
    {
      id: "txn-6",
      type: "escrow",
      amount: 1500.00,
      date: "2025-05-05",
      status: "completed",
      description: "Order #8774 released from escrow",
    },
    {
      id: "txn-7",
      type: "withdrawal",
      amount: 3000.00,
      date: "2025-04-28",
      status: "completed",
      description: "Withdrawal to Chase Bank",
    }
  ]
};

export function SellerWalletSettings() {
  // State for withdrawal form
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(mockWalletData.paymentMethods[0].id);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [transactionFilter, setTransactionFilter] = useState("all");
  
  // Handle withdrawal request
  const handleWithdrawalRequest = () => {
    // Basic validation
    if (!withdrawalAmount || isNaN(parseFloat(withdrawalAmount))) {
      toast.error("Please enter a valid amount");
      return;
    }
    
    const amount = parseFloat(withdrawalAmount);
    
    // Check if amount is greater than available balance
    if (amount > mockWalletData.availableBalance) {
      toast.error("Withdrawal amount exceeds available balance");
      return;
    }
    
    // Check if amount is greater than minimum withdrawal
    if (amount < 50) {
      toast.error("Minimum withdrawal amount is $50");
      return;
    }
    
    // Open confirmation dialog
    setIsConfirmDialogOpen(true);
  };
  
  // Handle withdrawal confirmation
  const handleConfirmWithdrawal = () => {
    // Close dialog
    setIsConfirmDialogOpen(false);
    
    // Show success message
    toast.success(`Withdrawal of $${withdrawalAmount} initiated`);
    
    // Reset form
    setWithdrawalAmount("");
  };
  
  // Handle redirect to add payment method
  const handleAddPaymentMethod = () => {
    // In a real app, this would redirect to a third-party payment processor
    toast.info("Redirecting to payment processor to set up payment method...");
    
    // Mock redirect - in a real app this would navigate to an external URL
    setTimeout(() => {
      toast.success("For this demo, we're simulating a successful return from the payment processor");
    }, 2000);
  };
  
  // Filter transactions based on selected filter
  const filteredTransactions = transactionFilter === "all" 
    ? mockWalletData.transactionHistory
    : mockWalletData.transactionHistory.filter(txn => txn.type === transactionFilter);
  
  return (
    <div className="space-y-6">
      {/* Wallet Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <DollarSign className="h-5 w-5 text-slate-700 mr-1" />
              Total Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockWalletData.totalBalance.toFixed(2)}</div>
            <p className="text-sm text-slate-500 mt-1">Total funds in your account</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Wallet className="h-5 w-5 text-green-600 mr-1" />
              Available
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockWalletData.availableBalance.toFixed(2)}</div>
            <p className="text-sm text-slate-500 mt-1">Available for withdrawal</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Clock className="h-5 w-5 text-orange-600 mr-1" />
              In Escrow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${mockWalletData.inEscrow.toFixed(2)}</div>
            <p className="text-sm text-slate-500 mt-1">Pending completion</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Content Tabs */}
      <Tabs defaultValue="withdraw" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="withdraw">Withdraw Funds</TabsTrigger>
          <TabsTrigger value="transactions">Transaction History</TabsTrigger>
        </TabsList>
        
        {/* Withdraw Tab */}
        <TabsContent value="withdraw">
          <Card>
            <CardHeader>
              <CardTitle>Withdraw Funds</CardTitle>
              <CardDescription>
                Transfer funds from your balance to your bank account or PayPal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="withdrawAmount">Amount to withdraw</Label>
                <div className="relative mt-1.5">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">$</span>
                  <Input
                    id="withdrawAmount"
                    type="number"
                    value={withdrawalAmount}
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                    placeholder="0.00"
                    className="pl-7"
                  />
                </div>
                <p className="text-sm text-slate-500 mt-1">Minimum withdrawal: $50.00</p>
              </div>
              
              <div>
                <Label htmlFor="paymentMethod">Withdraw to</Label>
                <Select value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod}>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockWalletData.paymentMethods.map((method) => (
                      <SelectItem key={method.id} value={method.id}>
                        {method.type === "bank" ? (
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-2" />
                            {method.name} ({method.accountNumber})
                            {method.isDefault && <span className="ml-2 text-xs text-green-600">Default</span>}
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <CreditCard className="h-4 w-4 mr-2" />
                            {method.name} ({method.email})
                            {method.isDefault && <span className="ml-2 text-xs text-green-600">Default</span>}
                          </div>
                        )}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="bg-slate-50 rounded-md p-4 mt-4">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-slate-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Payment Methods</h4>
                    <p className="text-sm text-slate-600 mt-1">You can add or manage your payment methods for withdrawals.</p>
                    <Button 
                      variant="outline" 
                      className="mt-3 flex items-center gap-1"
                      onClick={handleAddPaymentMethod}
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add Payment Method</span>
                      <ExternalLink className="h-4 w-4 ml-1 text-slate-500" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleWithdrawalRequest}
                disabled={!withdrawalAmount || isNaN(parseFloat(withdrawalAmount)) || parseFloat(withdrawalAmount) <= 0}
                className="w-full"
              >
                Request Withdrawal
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Transaction History Tab */}
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>
                View your recent transactions and withdrawal history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button 
                    variant={transactionFilter === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTransactionFilter("all")}
                  >
                    All
                  </Button>
                  <Button 
                    variant={transactionFilter === "withdrawal" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTransactionFilter("withdrawal")}
                  >
                    Withdrawals
                  </Button>
                  <Button 
                    variant={transactionFilter === "escrow" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTransactionFilter("escrow")}
                  >
                    Escrow
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <div className="flex items-center">
                          {transaction.type === "withdrawal" && (
                            <div className="bg-blue-100 p-1 rounded-full mr-2">
                              <ArrowUpCircle className="h-4 w-4 text-blue-600" />
                            </div>
                          )}
                          {transaction.type === "escrow" && (
                            <div className="bg-orange-100 p-1 rounded-full mr-2">
                              <Clock className="h-4 w-4 text-orange-600" />
                            </div>
                          )}
                          <span className="capitalize">{transaction.type}</span>
                        </div>
                      </TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                      <TableCell className={transaction.type === "withdrawal" ? "text-blue-600" : "text-green-600"}>
                        {transaction.type === "withdrawal" ? "-" : "+"}${transaction.amount.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        {transaction.status === "completed" && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <CheckCircle className="h-3 w-3 mr-1" /> Completed
                          </Badge>
                        )}
                        {transaction.status === "pending" && (
                          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                            <Clock className="h-3 w-3 mr-1" /> Pending
                          </Badge>
                        )}
                        {transaction.status === "failed" && (
                          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                            <AlertCircle className="h-3 w-3 mr-1" /> Failed
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              {filteredTransactions.length === 0 && (
                <div className="text-center py-8">
                  <Info className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                  <h3 className="text-lg font-medium text-slate-900">No transactions found</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto mt-1">
                    There are no transactions matching your current filter. Try changing the filter or check back later.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Confirmation Dialog */}
      <AlertDialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Withdrawal</AlertDialogTitle>
            <AlertDialogDescription>
              You are about to withdraw ${withdrawalAmount} to your selected payment method.
              This process typically takes 3-5 business days to complete.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmWithdrawal}>Confirm Withdrawal</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}