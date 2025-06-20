import React, { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Checkbox } from "../../../components/ui/checkbox";
import { 
  MoreHorizontal, 
  PackageCheck, 
  Truck, 
  CheckCircle2, 
  X, 
  ArrowDown,
  ArrowUp
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../../../components/ui/dropdown-menu";
import { OrderDetailsModal, OrderDetail, OrderStatus } from "./components/OrderDetailsModal";

// Filter options for order status
const filterOptions = [
  { label: "All", value: "all" },
  { label: "Processing", value: "processing" },
  { label: "Awaiting Shipping", value: "awaiting_shipping" },
  { label: "Delivered", value: "delivered" },
  { label: "Returned", value: "returned" },
];

// Status update options
const statusUpdateOptions = [
  { label: "Processing", value: "processing", icon: <PackageCheck className="h-4 w-4 mr-2" /> },
  { label: "Awaiting Shipping", value: "awaiting_shipping", icon: <Truck className="h-4 w-4 mr-2" /> },
  { label: "Delivered", value: "delivered", icon: <CheckCircle2 className="h-4 w-4 mr-2" /> },
  { label: "Returned", value: "returned", icon: <X className="h-4 w-4 mr-2" /> },
];

// Mock data for orders with expanded details
const mockOrders: OrderDetail[] = [
  {
    id: "#1838",
    customerName: "Alex Johnson",
    customerEmail: "alex.johnson@example.com",
    customerPhone: "555-123-4567",
    customerAddress: "123 Main St\nApt 4B\nNew York, NY 10001",
    productName: "MacBook Pro 2023",
    productPrice: 1999.99,
    quantity: 1,
    status: "delivered",
    date: "23 May 2025",
    paymentMethod: "Credit Card",
    shippingMethod: "Express Shipping",
    trackingNumber: "TRK928374651",
    additionalNotes: "Please leave package at front door."
  },
  {
    id: "#3883",
    customerName: "Sarah Williams",
    customerEmail: "sarah.williams@example.com",
    customerPhone: "555-234-5678",
    customerAddress: "456 Oak Avenue\nBoston, MA 02108",
    productName: "iPhone 14",
    productPrice: 999.99,
    quantity: 2,
    status: "processing",
    date: "23 May 2025",
    paymentMethod: "PayPal",
    shippingMethod: "Standard Shipping"
  },
  {
    id: "#8489",
    customerName: "Michael Brown",
    customerEmail: "michael.brown@example.com",
    customerPhone: "555-345-6789",
    customerAddress: "789 Pine Street\nSan Francisco, CA 94103",
    productName: "Galaxy S23 Ultra",
    productPrice: 1199.99,
    quantity: 1,
    status: "awaiting_shipping",
    date: "23 May 2025",
    paymentMethod: "Debit Card",
    shippingMethod: "Next Day Delivery",
    trackingNumber: "TRK827364598"
  },
  {
    id: "#8483",
    customerName: "Emily Davis",
    customerEmail: "emily.davis@example.com",
    customerPhone: "555-456-7890",
    customerAddress: "321 Maple Road\nSeattle, WA 98101",
    productName: "Surface Laptop 5",
    productPrice: 1499.99,
    quantity: 1,
    status: "processing",
    date: "23 May 2025",
    paymentMethod: "Credit Card",
    shippingMethod: "Standard Shipping"
  },
  {
    id: "#7484",
    customerName: "David Wilson",
    customerEmail: "david.wilson@example.com",
    customerPhone: "555-567-8901",
    customerAddress: "654 Cedar Blvd\nAustin, TX 78701",
    productName: "PlayStation 5",
    productPrice: 499.99,
    quantity: 1,
    status: "returned",
    date: "23 May 2025",
    paymentMethod: "Credit Card",
    shippingMethod: "Standard Shipping",
    additionalNotes: "Item was damaged upon arrival."
  },
  {
    id: "#8494",
    customerName: "Jessica Miller",
    customerEmail: "jessica.miller@example.com",
    customerPhone: "555-678-9012",
    customerAddress: "987 Birch Lane\nChicago, IL 60601",
    productName: "Dell XPS 15",
    productPrice: 1799.99,
    quantity: 1,
    status: "processing",
    date: "23 May 2025",
    paymentMethod: "Apple Pay",
    shippingMethod: "Express Shipping",
    trackingNumber: "TRK193847562"
  },
];

export function SellerOrders() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [orders, setOrders] = useState<OrderDetail[]>(mockOrders);
  const [sortConfig, setSortConfig] = useState<{key: keyof OrderDetail, direction: 'asc' | 'desc'} | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<OrderDetail | null>(null);
  const [isOrderDetailsOpen, setIsOrderDetailsOpen] = useState(false);

  // Filter orders based on selected filter
  const filteredOrders = selectedFilter === "all"
    ? orders
    : orders.filter(order => order.status === selectedFilter);

  // Sort orders if sort config is set
  const sortedOrders = React.useMemo(() => {
    let sortableOrders = [...filteredOrders];
    if (sortConfig !== null) {
      sortableOrders.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableOrders;
  }, [filteredOrders, sortConfig]);

  // Handle sorting
  const requestSort = (key: keyof OrderDetail) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Handle checkbox selection
  const handleSelectOrder = (orderId: string) => {
    if (selectedOrders.includes(orderId)) {
      setSelectedOrders(selectedOrders.filter(id => id !== orderId));
    } else {
      setSelectedOrders([...selectedOrders, orderId]);
    }
  };

  // Handle select all orders
  const handleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map(order => order.id));
    }
  };

  // Update order status for selected orders
  const updateOrderStatus = (newStatus: OrderStatus) => {
    if (selectedOrders.length === 0) return;

    const updatedOrders = orders.map(order => {
      if (selectedOrders.includes(order.id)) {
        return { ...order, status: newStatus };
      }
      return order;
    });

    setOrders(updatedOrders);
    toast.success(`${selectedOrders.length} order${selectedOrders.length > 1 ? 's' : ''} updated to ${newStatus.replace('_', ' ')}`);
    
    // Clear selection after updating
    setSelectedOrders([]);
  };

  // Update single order status
  const updateSingleOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });

    setOrders(updatedOrders);
    
    // Also update the selected order if it's currently being viewed
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

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

  // Calculate total for selected orders
  const calculateTotal = () => {
    return orders
      .filter(order => selectedOrders.includes(order.id))
      .reduce((total, order) => total + (order.productPrice * order.quantity), 0)
      .toFixed(2);
  };

  // Get sort icon for table headers
  const getSortIcon = (key: keyof OrderDetail) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null;
    }
    return sortConfig.direction === 'asc' ? <ArrowUp className="h-3 w-3 ml-1" /> : <ArrowDown className="h-3 w-3 ml-1" />;
  };

  // Handle opening order details
  const handleOpenOrderDetails = (order: OrderDetail) => {
    setSelectedOrder(order);
    setIsOrderDetailsOpen(true);
  };

  // Handle closing order details
  const handleCloseOrderDetails = () => {
    setIsOrderDetailsOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Bulk action bar - visible when orders are selected */}
      {selectedOrders.length > 0 && (
        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-slate-900 font-medium">
              {selectedOrders.length} order{selectedOrders.length > 1 ? 's' : ''} selected
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-900">
              Total: ${calculateTotal()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setSelectedOrders([])}
            >
              Cancel
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="sm">
                  Update Status
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {statusUpdateOptions.map((option) => (
                  <DropdownMenuItem 
                    key={option.value}
                    onClick={() => updateOrderStatus(option.value as OrderStatus)}
                    className="cursor-pointer"
                  >
                    {option.icon}
                    <span>{option.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}

      {/* Main orders table */}
      <div className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm">
        {/* Filter tabs */}
        <div className="border-b border-slate-100">
          <div className="p-4">
            <div className="flex gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSelectedFilter(option.value)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    selectedFilter === option.value
                      ? "bg-slate-100 border border-slate-100"
                      : "bg-white border border-slate-100"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table container with horizontal scroll if needed */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] table-fixed">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="w-[56px] p-4 text-left">
                  <Checkbox 
                    checked={selectedOrders.length === filteredOrders.length && filteredOrders.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </th>
                <th 
                  className="w-[120px] p-4 text-left font-medium text-slate-900 cursor-pointer"
                  onClick={() => requestSort('id')}
                >
                  <div className="flex items-center">
                    Order ID
                    {getSortIcon('id')}
                  </div>
                </th>
                <th className="w-[160px] p-4 text-left font-medium text-slate-900">Customer</th>
                <th className="w-[240px] p-4 text-left font-medium text-slate-900">Product</th>
                <th 
                  className="w-[120px] p-4 text-left font-medium text-slate-900 cursor-pointer"
                  onClick={() => requestSort('productPrice')}
                >
                  <div className="flex items-center">
                    Price
                    {getSortIcon('productPrice')}
                  </div>
                </th>
                <th 
                  className="w-[80px] p-4 text-left font-medium text-slate-900 cursor-pointer"
                  onClick={() => requestSort('quantity')}
                >
                  <div className="flex items-center">
                    Qty
                    {getSortIcon('quantity')}
                  </div>
                </th>
                <th 
                  className="w-[160px] p-4 text-left font-medium text-slate-900 cursor-pointer"
                  onClick={() => requestSort('status')}
                >
                  <div className="flex items-center">
                    Status
                    {getSortIcon('status')}
                  </div>
                </th>
                <th 
                  className="w-[120px] p-4 text-left font-medium text-slate-900 cursor-pointer"
                  onClick={() => requestSort('date')}
                >
                  <div className="flex items-center">
                    Date
                    {getSortIcon('date')}
                  </div>
                </th>
                <th className="w-[64px] p-4 text-left font-medium text-slate-900"></th>
              </tr>
            </thead>
            <tbody>
              {sortedOrders.map((order) => (
                <tr 
                  key={order.id} 
                  className="border-b border-slate-100 hover:bg-slate-50 cursor-pointer"
                  onClick={() => handleOpenOrderDetails(order)}
                >
                  <td className="p-4" onClick={(e) => e.stopPropagation()}>
                    <Checkbox 
                      checked={selectedOrders.includes(order.id)}
                      onCheckedChange={() => handleSelectOrder(order.id)}
                    />
                  </td>
                  <td className="p-4 font-medium text-slate-900">{order.id}</td>
                  <td className="p-4 text-slate-900">{order.customerName}</td>
                  <td className="p-4 text-slate-900">{order.productName}</td>
                  <td className="p-4 text-slate-900">${order.productPrice.toFixed(2)}</td>
                  <td className="p-4 text-slate-900">{order.quantity}</td>
                  <td className="p-4">
                    {getStatusBadge(order.status)}
                  </td>
                  <td className="p-4 text-slate-900">{order.date}</td>
                  <td className="p-4" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="focus:outline-none">
                          <MoreHorizontal className="h-5 w-5 text-slate-700" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem 
                            className="cursor-pointer"
                            onClick={() => handleOpenOrderDetails(order)}
                          >
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-blue-600 cursor-pointer"
                            onClick={() => updateSingleOrderStatus(order.id, "processing")}
                          >
                            <PackageCheck className="h-4 w-4 mr-2" />
                            Set Processing
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-amber-600 cursor-pointer"
                            onClick={() => updateSingleOrderStatus(order.id, "awaiting_shipping")}
                          >
                            <Truck className="h-4 w-4 mr-2" />
                            Set Awaiting Shipping
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-green-600 cursor-pointer"
                            onClick={() => updateSingleOrderStatus(order.id, "delivered")}
                          >
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Set Delivered
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600 cursor-pointer"
                            onClick={() => updateSingleOrderStatus(order.id, "returned")}
                          >
                            <X className="h-4 w-4 mr-2" />
                            Set Returned
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty state */}
          {filteredOrders.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No orders found with the selected filter.
            </div>
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      <OrderDetailsModal
        isOpen={isOrderDetailsOpen}
        onClose={handleCloseOrderDetails}
        order={selectedOrder}
        onUpdateStatus={updateSingleOrderStatus}
      />
    </div>
  );
}