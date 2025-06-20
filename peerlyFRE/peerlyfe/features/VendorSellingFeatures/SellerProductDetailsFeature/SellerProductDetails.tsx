import React, { useState } from "react";
import { ArrowLeft, Minus, Plus, MoreVertical } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { formatDate } from "../../../components/utils";
import { EditProductModal } from "./components/EditProductModal";
import { DeleteProductModal } from "./components/DeleteProductModal";
import { toast } from "sonner";
import { Product } from "../../../contexts/ProductContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";

interface SellerProductDetailsProps {
  product: Product;
  onBack: () => void;
  onEdit: (product: Product) => void;
  onDelete: (productId: number) => void;
  onToggleStatus: (productId: number, isActive: boolean) => void;
}

export function SellerProductDetails({ 
  product, 
  onBack, 
  onEdit, 
  onDelete,
  onToggleStatus 
}: SellerProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  // Use the images array from the product, fallback to featuredImage if no images array
  const images = product.images?.length 
    ? product.images 
    : product.featuredImage 
    ? [product.featuredImage]
    : ["https://images.unsplash.com/photo-1441986300917-64674bd600d8"];

  // Determine if product is active/published based on either the active flag or inventory
  const isProductActive = product.active || product.inventory > 0;

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < (product.stock || product.inventory)) {
      setQuantity(quantity + 1);
    }
  };

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    onDelete(product.id);
    handleCloseDeleteModal();
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    onEdit(updatedProduct);
    setIsEditModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 p-6 h-full overflow-auto">
      {/* Header with Action */}
      <div className="relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-md p-3"
            onClick={onBack}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
              <div className="relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
                  <div className="text-[20px] font-semibold leading-[28px] tracking-[-0.1px] text-gray-900 overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap">
                    <p className="text-ellipsis block leading-[28px] overflow-inherit whitespace-pre">
                      {product.name}
                    </p>
                  </div>
                  <div className="bg-green-100 relative rounded-md shrink-0">
                    <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-1.5 relative">
                      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                        <div className="[grid-area:1_/_1] ml-0 mt-0 relative">
                          <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
                            <div className="text-[14px] font-medium leading-[14px] text-green-900 relative shrink-0 text-nowrap">
                              <p className="block leading-[14px] whitespace-pre">
                                {isProductActive ? "Published" : "Draft"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative shrink-0">
            <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative">
              <Button 
                variant="outline" 
                className="rounded-md"
                onClick={handleOpenEditModal}
              >
                <div className="text-[14px] font-medium leading-[24px] text-slate-900">
                  <p className="block leading-[24px] whitespace-pre">Edit Product</p>
                </div>
              </Button>
              <Button 
                className="bg-red-500 rounded-md hover:bg-red-600"
                onClick={handleOpenDeleteModal}
              >
                <div className="text-[14px] font-medium leading-[24px] text-[#ffffff]">
                  <p className="block leading-[24px] whitespace-pre">Delete</p>
                </div>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-md p-4"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={() => toast.info(`Sharing product: ${product.name}`)} className="cursor-pointer">
                    Share Product
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onToggleStatus(product.id, !isProductActive)} className="cursor-pointer">
                    {isProductActive ? "Unpublish Product" : "Publish Product"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative w-full">
          
          {/* Images Container */}
          <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0">
            <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative size-full">
              <div className="relative shrink-0 w-full">
                <div className="flex-wrap box-border content-start flex gap-2 items-start justify-start p-0 relative w-full">
                  {images.map((image, index) => (
                    <div 
                      key={index}
                      className="bg-cover bg-center bg-no-repeat rounded-lg shrink-0 size-60"
                    >
                      <ImageWithFallback 
                        src={image} 
                        alt={`Product image ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Information Panel */}
          <div className="bg-[#ffffff] h-[808px] relative rounded-xl shrink-0 w-[540px]">
            <div className="box-border content-stretch flex flex-col h-[808px] items-start justify-start overflow-clip p-0 relative w-[540px]">
              <div className="relative shrink-0 w-full">
                <div className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-6 py-4 relative w-full">
                    <div className="text-[18px] font-semibold leading-[28px] text-gray-900 overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap">
                      <p className="text-ellipsis block leading-[28px] overflow-inherit whitespace-pre">
                        Information
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start px-6 py-4 relative w-full">
                  {/* Quantity Selector */}
                  <div className="bg-slate-50 relative rounded-xl shrink-0 w-full">
                    <div className="flex flex-row items-center relative size-full">
                      <div className="box-border content-stretch flex flex-row items-center justify-between p-[12px] relative w-full">
                        <div className="text-[14px] font-semibold leading-[20px] text-gray-900 overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap">
                          <p className="text-ellipsis block leading-[20px] overflow-inherit whitespace-pre">
                            Quantity
                          </p>
                        </div>
                        <div className="relative shrink-0">
                          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-md p-2"
                              onClick={handleDecreaseQuantity}
                              disabled={quantity <= 1}
                            >
                              <Minus className="h-4 w-4" strokeWidth={0.9} />
                            </Button>
                            <div className="text-[20px] font-semibold leading-[28px] tracking-[-0.1px] text-gray-900">
                              <p className="text-ellipsis block leading-[28px] overflow-inherit whitespace-pre">
                                {quantity}
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-md p-2"
                              onClick={handleIncreaseQuantity}
                              disabled={quantity >= (product.stock || product.inventory)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Description */}
                  <div className="text-[20px] font-normal leading-[28px] text-gray-900 relative shrink-0 w-full">
                    <p className="block mb-4">{product.description}</p>
                    {product.specifications && (
                      <p className="block">{product.specifications}</p>
                    )}
                  </div>
                  
                  {/* Product Options */}
                  <div className="relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
                      {/* Product Price */}
                      <div className="relative shrink-0 w-full">
                        <div className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center relative size-full">
                          <div className="box-border content-stretch flex flex-row items-center justify-between leading-[0] not-italic px-0 py-3 relative text-[#000000] text-[14px] text-left text-nowrap w-full">
                            <div className="font-normal relative shrink-0">
                              <p className="block leading-[20px] text-nowrap whitespace-pre">Product Price</p>
                            </div>
                            <div className="font-medium relative shrink-0">
                              <p className="block leading-[20px] text-nowrap whitespace-pre">${product.price.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Date Added */}
                      <div className="relative shrink-0 w-full">
                        <div className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center relative size-full">
                          <div className="box-border content-stretch flex flex-row items-center justify-between leading-[0] not-italic px-0 py-3 relative text-[#000000] text-[14px] text-left text-nowrap w-full">
                            <div className="font-normal relative shrink-0">
                              <p className="block leading-[20px] text-nowrap whitespace-pre">Date Added</p>
                            </div>
                            <div className="font-medium relative shrink-0">
                              <p className="block leading-[20px] text-nowrap whitespace-pre">
                                {product.createdAt ? formatDate(new Date(product.createdAt)) : formatDate(new Date())}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Stock Quantity */}
                      <div className="relative shrink-0 w-full">
                        <div className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center relative size-full">
                          <div className="box-border content-stretch flex flex-row items-center justify-between leading-[0] not-italic px-0 py-3 relative text-[#000000] text-[14px] text-left text-nowrap w-full">
                            <div className="font-normal relative shrink-0">
                              <p className="block leading-[20px] text-nowrap whitespace-pre">Stock Quantity</p>
                            </div>
                            <div className="font-medium relative shrink-0">
                              <p className="block leading-[20px] text-nowrap whitespace-pre">{product.inventory || product.stock}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Product Status */}
                      <div className="relative shrink-0 w-full">
                        <div className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
                        <div className="flex flex-row items-center relative size-full">
                          <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-3 relative w-full">
                            <div className="font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
                              <p className="block leading-[20px] whitespace-pre">Product Status</p>
                            </div>
                            <div className={`${isProductActive ? 'bg-green-100' : 'bg-amber-100'} relative rounded-md shrink-0`}>
                              <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-1.5 relative">
                                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                                  <div className="[grid-area:1_/_1] ml-0 mt-0 relative">
                                    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
                                      <div className={`text-[14px] font-medium leading-[14px] ${isProductActive ? 'text-green-900' : 'text-amber-900'} relative shrink-0 text-nowrap`}>
                                        <p className="block leading-[14px] whitespace-pre">
                                          {isProductActive ? "Published" : "Draft"}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
          </div>
        </div>
      </div>

      {/* Edit Product Modal */}
      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        onUpdateProduct={handleUpdateProduct}
        product={product}
      />

      {/* Delete Confirmation Modal */}
      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onDelete={handleConfirmDelete}
        productName={product.name}
      />
    </div>
  );
}