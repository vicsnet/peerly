import React, { useState, useEffect, useRef } from "react";
import { X, Upload, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "../../../../components/ui/dialog";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { ImageWithFallback } from "../../../../components/figma/ImageWithFallback";
// import { useProducts,  } from "../../../../contexts/ProductContext";
import { toast } from "sonner";
import { defineChain, getContract, prepareContractCall,  } from "thirdweb";
import { client } from "@/lib/configThirdweb";
import { peerlyShopABI } from "@/constants/ABI/peerlyShop";
import { useSendTransaction } from "thirdweb/react";



type Product = {
  productId: string;
  productName: string;
  productDescription: string;
  productImage: string;
  price: string,
  totalStock: string,
  sold: string,
}

interface EditProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId?: number;
  // onUpdateProduct?: (product: Product) => void;
  product?: Product;
  vendorId: string;
}

export function EditProductModalNew({
  isOpen,
  onClose,
  productId,
  // onUpdateProduct,
  product: externalProduct,
  vendorId
}: EditProductModalProps) {
  const { mutate: sendTransaction,  isPending,isSuccess, isError, error, data:transaction_receipt } = useSendTransaction();
  //   const { getProductById, updateProduct } = useProducts();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productInventory, setProductInventory] = useState("");
  const [productSpecifications, setProductSpecifications] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [productLoaded, setProductLoaded] = useState(false);
  const [showTopShadow, setShowTopShadow] = useState(false);
  const [sizes, setSizes] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<string[]>([]);

  // Ref for the scrollable content area
  const contentRef = useRef<HTMLDivElement>(null);

  // Maximum number of product images allowed
  const MAX_IMAGES = 5;

  // Product categories - updated to match requested categories
  // const categories = [
  //   "Clothing",
  //   "Gadget",
  //   "Books",
  //   "Electronics",
  //   "Others"
  // ];

  // Load product data when modal opens
  useEffect(() => {
    if (isOpen) {


      //   First try to use the external product passed as prop
      if (externalProduct) {
        console.log('externalProduct?.productName', externalProduct?.productName);

        setProductName(externalProduct?.productName);
        setProductDescription(externalProduct?.productDescription);
        setProductPrice(externalProduct.price.toString());
        setProductInventory(externalProduct?.totalStock);
        setProductLoaded(true);

        // Map old categories to new ones if needed
        // let category = externalProduct?.category;
        // if (!categories.includes(category) && category !== "Others") {
        //   // Map to closest category or "Others"
        //   if (["Footwear", "Accessories"].includes(category)) {
        //     category = "Clothing";
        //   } else if (["Home", "Grocery", "Beauty", "Sports", "Art & Crafts", "Health"].includes(category)) {
        //     category = "Others";
        //   }
        // }

        // setProductCategory(category);

        // setDiscountPrice(externalProduct?.discountPrice ? externalProduct?.discountPrice.toString() : "");
        // Limit to maximum 5 images
        // setUploadedImages(externalProduct?.images.slice(0, MAX_IMAGES));
        // setProductSpecifications(externalProduct?.specifications || "");
        // setProductLoaded(true);
      }
      if(isError){
        toast.error(`Error occur ${error}`)
        
        
      }
      if(isSuccess){
        toast.success(`Product Updated ${transaction_receipt.transactionHash}`)
        // console.log(transaction_receipt);
        onClose()
        
      }
      //   If no external product, try to get it by ID
      else if (productId) {
        // const product = getProductById(productId);
        // if (product) {
        //   setProductName(product.name);
        //   setProductDescription(product.description);
        //   setProductPrice(product.price.toString());

        //   // Map old categories to new ones if needed
        //   let category = product.category;
        //   if (!categories.includes(category) && category !== "Others") {
        //     // Map to closest category or "Others"
        //     if (["Footwear", "Accessories"].includes(category)) {
        //       category = "Clothing";
        //     } else if (["Home", "Grocery", "Beauty", "Sports", "Art & Crafts", "Health"].includes(category)) {
        //       category = "Others";
        //     }
        //   }

        //   setProductCategory(category);
        //   setProductInventory(product.inventory.toString());
        //   setDiscountPrice(product.discountPrice ? product.discountPrice.toString() : "");
        //   // Limit to maximum 5 images
        //   setUploadedImages(product.images.slice(0, MAX_IMAGES));
        //   setProductSpecifications(product.specifications || "");
        //   setProductLoaded(true);
      }
      else {
        //   toast.error("Product not found");
        //   onClose();
      }
    } else {
      toast.error("Product data unavailable");
      onClose();
    }
  }
    , [isOpen, externalProduct]);
  //   isOpen, productId, externalProduct, getProductById

  // Handle scroll event to show/hide the top shadow
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const handleScroll = () => {
      if (content.scrollTop > 10) {
        setShowTopShadow(true);
      } else {
        setShowTopShadow(false);
      }
    };

    content.addEventListener('scroll', handleScroll);
    return () => {
      content.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const liskSepolia = defineChain(4202)

  const PeerlyShopContract = getContract({
    client,
    address: vendorId ?? '',
    abi: peerlyShopABI,
    chain: liskSepolia,
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    if ((externalProduct && productPrice > externalProduct?.price) || (externalProduct && productPrice < externalProduct?.price) || (Number(externalProduct?.totalStock) < Number(productInventory)) || (Number(externalProduct?.totalStock) > Number(productInventory))) {
      if (externalProduct?.productId !== undefined) {


        const transaction = prepareContractCall({
          contract: PeerlyShopContract,
          method: "updateProduct",
          params: [BigInt(externalProduct?.productId), BigInt(productPrice), BigInt(productInventory), sizes, quantities.map(q => BigInt(q))], // type safe params
        });
        sendTransaction(transaction as any);
      }
    }
    else {
      toast.error('Price or total stock needs to be updated')

    }




    // if (!productName || !productDescription || !productPrice || !productCategory || !productInventory) {
    //   toast.error("Please fill in all required fields");
    //   return;
    // }

    // if (uploadedImages.length === 0) {
    //   toast.error("Please upload at least one product image");
    //   return;
    // }

    // setIsSubmitting(true);

    // try {
    //   const productData = {
    //     id: externalProduct?.id || productId,
    //     vendorId: externalProduct?.vendorId || 0,
    //     name: productName,
    //     description: productDescription,
    //     price: parseFloat(productPrice),
    //     discountPrice: discountPrice ? parseFloat(discountPrice) : undefined,
    //     images: uploadedImages,
    //     category: productCategory,
    //     inventory: parseInt(productInventory, 10),
    //     featuredImage: uploadedImages[0],
    //     specifications: productSpecifications,
    //     active: externalProduct?.active || (parseInt(productInventory, 10) > 0)
    //   } as Product;

    //   // If onUpdateProduct callback is provided, use it
    //   if (onUpdateProduct) {
    //     onUpdateProduct(productData);
    //   } 
    //   // Otherwise use the context method
    //   else {
    //     updateProduct(productData);
    //     toast.success("Product updated successfully");
    //   }

    //   // Close the modal
    //   onClose();
    // } catch (error) {
    //   toast.error("Failed to update product");
    //   console.error("Failed to update product:", error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

 
  // Handle image upload - in a real app, this would interact with a storage service
  const handleImageUpload = () => {
    // Check if maximum image limit reached
    // if (uploadedImages.length >= MAX_IMAGES) {
    //   toast.error(`Maximum of ${MAX_IMAGES} images allowed`);
    //   return;
    // }

    // // Simulate image upload with random Unsplash images
    // const imageCategories = [
    //   "product", "fashion", "shoes", "electronics", "book", "gadget", "clothing"
    // ];
    // const randomCategory = imageCategories[Math.floor(Math.random() * imageCategories.length)];
    // const imageUrl = `https://source.unsplash.com/random/800x800/?${randomCategory}&${Date.now()}`;

    // setUploadedImages(prev => [...prev, imageUrl]);
    // toast.success("Image uploaded successfully");
  }

  // Handle image removal
  const handleRemoveImage = (index: number) => {
    // setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  // If product is not loaded yet, show loading state

  if (!productLoaded && isOpen) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
        style={{ backdropFilter: "blur(2px)" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-product-title"
      >
        <div className="max-w-[720px] w-full bg-white rounded-2xl shadow-xl flex flex-col">
          <div className="px-6 py-4 border-b border-slate-200 rounded-t-2xl">
            <h2
              id="edit-product-title"
              className="text-2xl font-semibold tracking-tight text-gray-900"
            >
              Edit Product
            </h2>
            <p className="text-gray-500 mt-1">Loading product information...</p>
          </div>
          <div className="py-12 flex justify-center items-center">
            <p>Loading product information...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          style={{ backdropFilter: "blur(2px)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-product-title"
        >
          <div
            className="max-w-[720px] w-full bg-white p-0 rounded-2xl flex flex-col max-h-[90vh] shadow-xl relative"
          >
            {/* Fixed header section */}
            <div className="border-b border-slate-200 sticky top-0 bg-white z-10 rounded-t-2xl">
              <div className="flex items-center justify-between px-6 py-4">
                <h2
                  id="edit-product-title"
                  className="text-2xl font-semibold tracking-tight text-gray-900"
                >
                  Update Product
                </h2>
                <div className="flex items-center gap-3">
                  <Button
                    type="submit"
                    form="product-form"
                    disabled={isPending}
                    className="bg-slate-700 hover:bg-slate-800"
                  >
                    {isPending ? "Saving..." : "Update"}
                  </Button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="h-6 w-6 hover:bg-slate-100 rounded-md p-0 opacity-100 flex items-center justify-center"
                    aria-label="Close"
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Add a visible DialogDescription for better accessibility */}
            <div className="sr-only">
              <p>
                Edit your product information including Price and Total stock.
              </p>
            </div>

            {/* Shadow at the top when scrolling down */}
            <div
              className={`absolute inset-x-0 top-[62px] h-4 bg-gradient-to-b from-white to-transparent pointer-events-none z-10 transition-opacity duration-200 ${showTopShadow ? 'opacity-100' : 'opacity-0'
                }`}
            />

            {/* Scrollable content area */}
            <div ref={contentRef} className="flex-1 overflow-y-auto">
              <form id="product-form" onSubmit={handleSubmit} className="p-6">
                <div className="space-y-6">
                  {/* <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-base font-medium text-black">Product Images</h3>
                    <div className="text-xs text-slate-500">
                      {uploadedImages.length} of {MAX_IMAGES} images
                    </div>
                  </div>
                  <div className="border border-dashed border-slate-300 rounded-md p-6">
                    <div className="flex flex-col items-center gap-3 text-center">
                      <p className="text-slate-400">Choose image or drag and drop it here</p>
                      <p className="text-sm text-slate-400">JPG, JPEG, PNG. Max 10MB</p>
                      <button
                        type="button"
                        onClick={handleImageUpload}
                        disabled={uploadedImages.length >= MAX_IMAGES}
                        className={`mt-2 flex items-center gap-2 px-3 py-1 border border-slate-200 rounded-md text-xs font-medium ${
                          uploadedImages.length >= MAX_IMAGES ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        <Upload className="h-4 w-4" />
                        Upload
                      </button>
                      {uploadedImages.length >= MAX_IMAGES && (
                        <div className="flex items-center gap-1 text-amber-600 text-xs mt-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>Maximum {MAX_IMAGES} images allowed</span>
                        </div>
                      )}
                    </div>

                    {uploadedImages.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {uploadedImages.map((image, index) => (
                          <div key={index} className="relative w-20 h-20">
                            <ImageWithFallback
                              src={image}
                              alt={`Product image ${index + 1}`}
                              className="w-full h-full object-cover rounded-md"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveImage(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div> */}

                  <div>
                    <h3 className="text-base font-medium text-black mb-4">Product Details</h3>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="productName" className="text-sm font-medium text-slate-900">Product name</Label>
                        {/* <Input
                        id="productName"
                        value={productName}
                        // onChange={(e) => setProductName(e.target.value)}
                        placeholder="Enter product name"
                        required
                        className="mt-1.5 border-slate-300 rounded-md"
                      /> */}
                        <div className="mt-1.5 border-slate-300 rounded-md border-[1px] p-2">{productName}</div>
                      </div>

                      <div>
                        <Label htmlFor="productDescription" className="text-sm font-medium text-slate-900">Product description</Label>
                        {/* <Textarea
                        id="productDescription"
                        value={productDescription}
                        // onChange={(e) => setProductDescription(e.target.value)}
                        placeholder="Enter product description"
                        rows={4}
                        required
                        className="mt-1.5 border-slate-300 rounded-md"
                      /> */}
                        <div className="mt-1.5 border-slate-300 rounded-md border-[1px] h-18 p-2">{productDescription}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="productPrice" className="text-sm font-medium text-slate-900">Product price</Label>
                        <div className="relative mt-1.5">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-slate-900">$</span>
                        </div>
                          <Input
                          id="productPrice"
                          type="number"
                          min="0.01"
                          step="0.01"
                          value={productPrice}
                          onChange={(e) => setProductPrice(e.target.value)}
                          placeholder="Enter product price"
                          required
                          className="pl-7 border-slate-300 rounded-md"
                        />
                          
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="productInventory" className="text-sm font-medium text-slate-900">Stock quantity</Label>
                        <Input
                          id="productInventory"
                          type="number"
                          min="0"
                          step="1"
                          value={productInventory}
                          onChange={(e) => setProductInventory(e.target.value)}
                          placeholder="Enter quantity"
                          required
                          className="mt-1.5 border-slate-300 rounded-md"
                        />
                      </div>

                      {/* <div>
                      <Label htmlFor="productCategory" className="text-sm font-medium text-slate-900">Product category</Label>
                      <div className="relative z-20 mt-1.5">
                        <Select
                          value={productCategory}
                          onValueChange={setProductCategory}
                          required
                        >
                          <SelectTrigger id="productCategory" className="border-slate-300 rounded-md w-full">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent position="popper" className="z-[100]" sideOffset={5}>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div> */}

                      {/* <div>
                      <Label htmlFor="discountPrice" className="text-sm font-medium text-slate-900">Discount price (optional)</Label>
                      <div className="relative mt-1.5">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-slate-900">$</span>
                        </div>
                        <Input
                          id="discountPrice"
                          type="number"
                          min="0.01"
                          step="0.01"
                          value={discountPrice}
                          onChange={(e) => setDiscountPrice(e.target.value)}
                          placeholder="Enter discount price (if any)"
                          className="pl-7 border-slate-300 rounded-md"
                        />
                      </div>
                    </div> */}

                      {/* <div>
                      <Label htmlFor="productSpecifications" className="text-sm font-medium text-slate-900">Product specification</Label>
                      <Textarea
                        id="productSpecifications"
                        value={productSpecifications}
                        onChange={(e) => setProductSpecifications(e.target.value)}
                        placeholder="Enter the product specifications, sizes"
                        rows={4}
                        className="mt-1.5 border-slate-300 rounded-md"
                      />
                    </div> */}
                      <div>
                        <Label className="text-sm font-medium text-slate-900">
                          Sizes & Quantities
                        </Label>
                        <div className="flex flex-col gap-2 mt-2">
                          {sizes.length > 0 ? (
                            sizes.map((size, idx) => (
                              <div key={idx} className="flex gap-2 items-center">
                                <Input
                                  type="text"
                                  placeholder="Size (e.g. M, L, 36, 8)"
                                  value={size}
                                  onChange={e => {
                                    setSizes(prev => {
                                      const arr = [...prev];
                                      arr[idx] = e.target.value;
                                      return arr;
                                    });
                                  }}
                                  className="border-slate-300 rounded-md w-1/2"
                                  required
                                />
                                <Input
                                  type="number"
                                  min="0"
                                  step="1"
                                  placeholder="Quantity"
                                  value={quantities[idx] || ""}
                                  onChange={e => {
                                    setQuantities(prev => {
                                      const arr = [...prev];
                                      arr[idx] = e.target.value;
                                      return arr;
                                    });
                                  }}
                                  className="border-slate-300 rounded-md w-1/2"
                                  required
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => {
                                    setSizes(prev => prev.filter((_, i) => i !== idx));
                                    setQuantities(prev => prev.filter((_, i) => i !== idx));
                                  }}
                                  className="ml-1"
                                  aria-label="Remove size"
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            ))
                          ) : (
                            <div className="text-xs text-slate-400">Add available sizes and their quantities</div>
                          )}
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="mt-1 w-fit"
                            onClick={() => {
                              setSizes(prev => [...prev, ""]);
                              setQuantities(prev => [...prev, ""]);
                            }}
                          >
                            + Add Size
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}