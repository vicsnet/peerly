import React, { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { Plus, Search } from "lucide-react";
import { AddProductModal } from "./components/AddProductModal";
// import { EditProductModal } from "../SellerProductDetailsFeature/components/EditProductModal";
// import { DeleteProductModal } from "../SellerProductDetailsFeature/components/DeleteProductModal";
// import { useProducts, Product } from "../../../contexts/ProductContext";
import { CustomToggle } from "../../../components/ui/custom-toggle";
import { EditProductModalNew } from "../SellerProductDetailsFeature/components/EditProductModalNew";
import { DeleteProductModalNew } from "../SellerProductDetailsFeature/components/DeleteProductModalNew";

// interface SellerProductsProps {
//   vendorId: number;
//   onProductSelect?: (productId: number) => void;
//   products?: Product[];
//   onToggleStatus?: (productId: number, isActive: boolean) => void;
//   onAddProduct?: (product: Omit<Product, "id" | "createdAt">) => void;
// }
// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   discountPrice?: number;
//   images: string[];
//   category: string;
//   description: string;
//   inventory: number;
//   vendorId: number;
//   vendorName: string;
//   rating?: number;
//   reviewCount?: number;
//   inStock: boolean;
//   discount?: number;

//   // Product specifications
//   sku?: string;
//   productLine?: string;
//   model?: string;
//   productionCountry?: string;
//   dimensions?: string; // L x W x H cm
//   weight?: string; // in kg
//   color?: string;
//   material?: string;

//   // Variants (size, color options, etc.)
//   variants?: {
//     name: string;
//     options: string[];
//   }[];
// }

type Product = {
  productId: string;
  productName: string;
  productDescription: string,
  productImage: string[];
  price: string;
  totalStock: string;
  sold: string;
  specification:string;
}


type StatusFilter = "all" | "active" | "inactive";
type StockFilter = "all" | "in-stock" | "low-stock" | "out-of-stock";

export function SellerProducts({ vendorProduct, vendorId, onProductSelect }: { vendorProduct: any; vendorId: string; onProductSelect?: (productId: number) => void }) {
  // const { getProductsByVendor, addProduct: contextAddProduct, updateProduct } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [stockFilter, setStockFilter] = useState<StockFilter>("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedProductName, setSelectedProductName] = useState("");
  const [products, setProducts] = useState<Product[]>(vendorProduct || []);

  // Sync products state with vendorProduct prop
  useEffect(() => {
    setProducts(vendorProduct || []);
  }, [vendorProduct]);

  // Filter products based on search query, status, and stock filters
  // Ensure products is always an array before calling filter to avoid TypeError
  const filteredProducts = Array.isArray(products)
    ? products.filter(product => {
        // Search filter
        const matchesSearch = searchQuery === "" ||
          (product.productName && product.productName.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (product.productDescription && product.productDescription.toLowerCase().includes(searchQuery.toLowerCase()));

        // Status filter - using inventory as a proxy for active status
        const isActive = Number(product.totalStock) > 0;
        const matchesStatus = statusFilter === "all" ||
          (statusFilter === "active" && isActive) ||
          (statusFilter === "inactive" && !isActive);

        // Stock filter
        const matchesStock = stockFilter === "all" ||
          (stockFilter === "in-stock" && Number(product.totalStock) > 10) ||
          (stockFilter === "low-stock" && Number(product.totalStock) > 0 && Number(product.totalStock) <= 10) ||
          (stockFilter === "out-of-stock" && Number(product.totalStock) === 0);

        return matchesSearch && matchesStatus && matchesStock;
      })
    : [];

  // Handle product active status toggle
  const handleToggleStatus = (productId: string, isActive: boolean) => {
    // if (onToggleStatus) {
    //   // Use the external handler if provided
    //   onToggleStatus(productId, isActive);
    // } else {
    //   // Otherwise handle it internally
    //   const product = products.find(p => p.id === productId);
    //   if (product) {
    //     updateProduct({
    //       ...product,
    //       inventory: isActive ? product.inventory : 0,
    //       active: isActive
    //     });
    //   }
    // }
  };

  // Handle opening the edit modal
  const handleEditClick = (productId: string) => {
    setSelectedProductId(productId);
    setIsEditModalOpen(true);
  };

  // Handle opening the delete modal
  const handleDeleteClick = (productId: string, productName: string) => {
    setSelectedProductId(productId);
    setSelectedProductName(productName);
    setIsDeleteModalOpen(true);
  };

  // Handle product select
  const handleProductClick = (productId: string) => {
    if (onProductSelect) {
      onProductSelect(Number(productId));
    }
  };

  // Create chunks of 3 products for the grid layout
  const productChunks = [];
  for (let i = 0; i < filteredProducts.length; i += 3) {
    productChunks.push(filteredProducts.slice(i, i + 3));
  }

  return (
    <div className="w-full">
      {/* Header with search and filters */}
      <div className="bg-white border-b border-slate-100">
        <div className="flex justify-between items-center px-6 py-4">
          {/* Search and filters */}
          <div className="flex items-center gap-2.5">
            {/* Search field with proper border - adjusted height to match filter selects */}
            <div className="relative w-60 bg-white rounded-md h-10">
              <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-md"></div>
              <div className="flex items-center px-3 h-full">
                <Search className="w-4 h-4 text-slate-900 opacity-50 mr-2" />
                <input
                  type="text"
                  placeholder="Type a product or search..."
                  className="bg-transparent border-0 text-slate-400 text-[14px] outline-none w-full h-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Status filter */}
            <div className="relative w-[120px] bg-white rounded-md">
              <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as StatusFilter)}>
                <SelectTrigger className="border-slate-300 rounded-md">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent position="popper" className="z-[100]" sideOffset={5}>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Stock filter */}
            <div className="relative w-[120px] bg-white rounded-md">
              <Select value={stockFilter} onValueChange={(value) => setStockFilter(value as StockFilter)}>
                <SelectTrigger className="border-slate-300 rounded-md">
                  <SelectValue placeholder="Stock" />
                </SelectTrigger>
                <SelectContent position="popper" className="z-[100]" sideOffset={5}>
                  <SelectItem value="all">All Stock</SelectItem>
                  <SelectItem value="in-stock">In Stock</SelectItem>
                  <SelectItem value="low-stock">Low Stock</SelectItem>
                  <SelectItem value="out-of-stock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Add Product button */}
          <Button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-slate-900 hover:bg-slate-800 flex items-center gap-2 px-4 py-3 rounded-md"
          >
            <Plus className="w-4 h-4" />
            <span className="text-white text-[14px] font-medium whitespace-nowrap">Add Product</span>
          </Button>
        </div>
      </div>

      {/* Products grid */}
      <div className="bg-white p-6">
        {filteredProducts.length > 0 ? (
          <div className="flex flex-col gap-4">
            {productChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="flex flex-row gap-4 w-full">
                {chunk.map(product => (
                  <div
                    key={String(product.productId)}
                    className="flex-1 basis-0 bg-white border border-slate-100 rounded-2xl overflow-hidden min-w-0 grow"
                  >
                    <div className="p-4">
                      <div className="flex flex-col gap-2">
                        {/* Top row with image and toggle */}
                        <div className="flex justify-between items-start w-full">
                          <div
                            className="h-12 w-12 bg-slate-100 rounded-lg overflow-hidden cursor-pointer"
                            onClick={() => handleProductClick(String(product.productId))}
                          >
                            <ImageWithFallback
                              src={Array.isArray(product.productImage) && product.productImage.length > 0 ? product.productImage[0] : ''}
                              alt={product.productName}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Custom toggle that matches the Figma design */}
                          <CustomToggle
                            checked={Number(product.totalStock) > 0}
                            onCheckedChange={(checked) => handleToggleStatus(String(product.productId), checked)}
                          />
                        </div>

                        {/* Product details */}
                        <div
                          className="cursor-pointer w-full"
                          onClick={() => handleProductClick(String(product.productId))}
                        >
                          <h3 className="font-semibold text-[18px] text-gray-900 line-clamp-1">{product.productName}</h3>
                          <p className="text-[14px] text-gray-900 line-clamp-1">{product.productDescription}</p>

                          <div className="flex justify-between items-center mt-2">
                            <span className="font-medium text-[16px] text-gray-900 whitespace-nowrap">
                              ${Number(product.price).toFixed(2)}
                            </span>
                            <span className="text-[12px] text-gray-900 whitespace-nowrap">
                              {product.totalStock} in stock
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add empty placeholder divs to maintain grid alignment when row isn't full */}
                {Array(3 - chunk.length).fill(0).map((_, i) => (
                  <div key={`empty-${i}`} className="flex-1 basis-0" />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-slate-500">
              {searchQuery || statusFilter !== "all" || stockFilter !== "all"
                ? "No products match your search criteria."
                : "You haven't added any products yet. Click 'Add Product' to get started."}
            </p>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        vendorId={vendorId}
      />

      {/* Edit Product Modal */}
      {selectedProductId && (
        <EditProductModalNew
          isOpen={isEditModalOpen}
          vendorId={vendorId}
          onClose={() => setIsEditModalOpen(false)}
          productId={Number(selectedProductId)}
        />
      )}

      {/* Delete Product Modal */}
      {selectedProductId && (
        <DeleteProductModalNew
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          productId={Number(selectedProductId)}
          productName={selectedProductName}
        />
      )}
    </div>
  );
}