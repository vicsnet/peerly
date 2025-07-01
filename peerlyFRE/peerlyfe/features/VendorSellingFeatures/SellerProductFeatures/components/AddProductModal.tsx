import React, { useState, useEffect, useRef } from "react";
import { X, Upload, AlertCircle } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription,
  DialogClose
} from "../../../../components/ui/dialog";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { ImageWithFallback } from "../../../../components/figma/ImageWithFallback";
// import { useProducts, Product } from "../../../../contexts/ProductContext";
import { toast } from "sonner";
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { client } from "@/lib/configThirdweb";
import { peerlyShopABI } from "@/constants/ABI/peerlyShop";
import { useSendTransaction } from "thirdweb/react";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  vendorId: string;
  // onAddProduct?: (product: Omit<Product, "id" | "createdAt">) => void;
}

export function AddProductModal({ isOpen, onClose, vendorId, }: AddProductModalProps) {
  const { mutate: sendTransaction,  isPending,isSuccess, isError, error, data:transaction_receipt } = useSendTransaction();

  // const { addProduct: contextAddProduct } = useProducts();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState<number>(0);
  // const [productCategory, setProductCategory] = useState("");
  const [productInventory, setProductInventory] = useState<number>(0);
  const [sizes, setSizes] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<string[]>([]);
  const [productSpecifications, setProductSpecifications] = useState<{
    product_type?: string;
    SKU?: string;
    Weight?: string;
    production_country?: string;
    additionalSpecs?: string[];
  }>({
    product_type: "",
    SKU: "",
    Weight: "",
    production_country: "",
    additionalSpecs: [""],
  });
  const [discountPrice, setDiscountPrice] = useState("");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTopShadow, setShowTopShadow] = useState(false);
  
  // Ref for the scrollable content area
  const contentRef = useRef<HTMLDivElement>(null);

  // Maximum number of product images allowed
  const MAX_IMAGES = 5;

  // Product categories
  // const categories = [
  //   "Clothing",
  //   "Gadget",
  //   "Books",
  //   "Electronics",
  //   "Others"
  // ];

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setProductName("");
      setProductDescription("");
      setProductPrice(0);
      // setProductCategory("");
      setProductInventory(0);
      setDiscountPrice("");
      setSizes([]);
      setQuantities([]);
      setProductSpecifications({
        SKU: "",
        Weight: "",
        production_country: "",
        additionalSpecs: [""]
      });
      setUploadedImages([]);
    }

    if(isSuccess){
     toast.success(`Product Added: ${transaction_receipt}`);
      
    }
    if(isError){
      toast.error(error.message)
    
    }
  }, [isOpen, isSuccess, isError]);

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
  // const abi = peerlyPondABI as const;
    const PeerlyShopContract  = getContract({
        client,
        address: vendorId,
        abi:peerlyShopABI,
        chain: liskSepolia,
      });


  const addProduct = async (e: React.FormEvent)=>{
    e.preventDefault()
    // string[] memory _productImage,
    //     string memory _productDescription,
    //     string memory _productName,
    //     uint256 _price,
    //     uint256 _totalStock,
    //     string[] memory _sizes,
    //     uint256[] memory _quantities,
    //     string memory _specification
    const images = await saveImagesToIPFS(imageFiles)
    const specification_ = await uploadSpecification();
    if(!specification_ && !productPrice){
      toast.error(`Error Occur try Again`);
      return;
    }
    else{
      const transaction =  prepareContractCall({
        contract: PeerlyShopContract,
        method: "addProduct",
        params: [images,productDescription, productName, BigInt(productPrice), BigInt(productInventory),sizes, quantities.map(q => BigInt(q)), specification_ ?? ""] , // type safe params
      });
     sendTransaction(transaction as any);

    }

  }

  


  const uploadSpecification = async ()=>{
    const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyYTBjNjg3MS04NGIxLTRlMDgtODg2ZC1iYmU5ODY5ZDQ4OWMiLCJlbWFpbCI6InZpbmNlLmFkZXNhbm1pMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZWQ2MGI4MzZiNGI3M2Q3OGU5NmYiLCJzY29wZWRLZXlTZWNyZXQiOiI2N2FjNWNmZTBhODIzYWEyYzA1ZDA5MDNhMDRiZWQ5YjM1MzllMDVkODkxZWMwNTRiYjM2OTBkMDUyMDdjN2NhIiwiZXhwIjoxNzcwMTEyODA3fQ.5zF5vDwlY_RHXz4lkckjovm1xbFxowIbqZvDf69QD0Y";
    try {
   

  let store_uri;
    
      const formData = new FormData();

      const jsonData = JSON.stringify(productSpecifications);
      const Myfile = new File([jsonData], `${productName}FullData.json`, { type: "application/json" });
      formData.append("file", Myfile);
  
      const request = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
          method: "POST",
          headers: {
  
              Authorization: `Bearer ${JWT}`,
          },
          body: formData,
  
      });
      const Dataresponse = await request.json();
      console.log('Dataresp...', Dataresponse.IpfsHash);
       store_uri = `https://emerald-big-beaver-890.mypinata.cloud/ipfs/${Dataresponse.IpfsHash}`
    
    
  if(store_uri === ""){
    toast.error("Error_occur");
    return;
  }
  
    console.log('store_uri');
    return(store_uri);
  }
    
    catch (error) {
      console.log(error)
    }
  }

  // Handle form submission
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   if (!productName || !productDescription || !productPrice || !productCategory || !productInventory) {
  //     toast.error("Please fill in all required fields");
  //     return;
  //   }
    
  //   if (uploadedImages.length === 0) {
  //     toast.error("Please upload at least one product image");
  //     return;
  //   }
    
  //   console.log('uploadedImages', uploadedImages);
    
  //   setIsSubmitting(true);
    
  //   try {
  //     // const productData = {
  //     //   vendorId,
  //     //   name: productName,
  //     //   description: productDescription,
  //     //   price: parseFloat(productPrice),
  //     //   discountPrice: discountPrice ? parseFloat(discountPrice) : undefined,
  //     //   images: uploadedImages,
  //     //   category: productCategory,
  //     //   inventory: parseInt(productInventory, 10),
  //     //   featuredImage: uploadedImages[0],
  //     //   specifications: productSpecifications,
  //     //   active: parseInt(productInventory, 10) > 0
  //     // };

  //     // Use external handler if provided, otherwise use context
  //     // if (onAddProduct) {
  //     //   onAddProduct(productData);
  //     // } else {
  //     //   contextAddProduct(productData);
  //     // }
      
  //     toast.success("Product added successfully");
  //     onClose();
  //   } catch (error) {
  //     toast.error("Failed to add product");
  //     console.error("Failed to add product:", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // Handle image upload - in a real app, this would interact with a storage service
  // const handleImageUpload = () => {
  //   // Check if maximum image limit reached
  //   if (uploadedImages.length >= MAX_IMAGES) {
  //     toast.error(`Maximum of ${MAX_IMAGES} images allowed`);
  //     return;
  //   }
  //   console.log('uploadedImages', uploadedImages);
    
  //   // Simulate image upload with random Unsplash images
  //   const imageCategories = [
  //     "product", "fashion", "shoes", "electronics", "book", "gadget", "clothing"
  //   ];
  //   const randomCategory = imageCategories[Math.floor(Math.random() * imageCategories.length)];
  //   const imageUrl = `https://source.unsplash.com/random/800x800/?${randomCategory}&${Date.now()}`;
    
  //   setUploadedImages(prev => [...prev, imageUrl]);
  //   toast.success("Image uploaded successfully");
  // };

  // Handle image removal
  const handleRemoveImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  // Function to save images to IPFS
  // Accepts an array of File objects, returns an array of IPFS URLs
  const saveImagesToIPFS = async (files: File[]): Promise<string[]> => {
    // Pinata JWT (should be stored securely in env vars in production)
    const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyYTBjNjg3MS04NGIxLTRlMDgtODg2ZC1iYmU5ODY5ZDQ4OWMiLCJlbWFpbCI6InZpbmNlLmFkZXNhbm1pMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZWQ2MGI4MzZiNGI3M2Q3OGU5NmYiLCJzY29wZWRLZXlTZWNyZXQiOiI2N2FjNWNmZTBhODIzYWEyYzA1ZDA5MDNhMDRiZWQ5YjM1MzllMDVkODkxZWMwNTRiYjM2OTBkMDUyMDdjN2NhIiwiZXhwIjoxNzcwMTEyODA3fQ.5zF5vDwlY_RHXz4lkckjovm1xbFxowIbqZvDf69QD0Y";
    const uploadedUrls: string[] = [];
    try {
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${JWT}`,
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Failed to upload image: ${file.name}`);
        }

        const data = await response.json();
        if (!data.IpfsHash) {
          throw new Error(`No IpfsHash returned for file: ${file.name}`);
        }
        // Construct the public gateway URL
        const url = `https://emerald-big-beaver-890.mypinata.cloud/ipfs/${data.IpfsHash}`;
        uploadedUrls.push(url);
      }
      console.log(uploadedUrls)
      return uploadedUrls;
    } catch (err) {
      toast.error("Failed to upload images to IPFS");
      console.error(err);
      return [];
    }
  };

  return (
    // <Dialog open={isOpen} onOpenChange={onClose}>
    <div>
   
    {isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl flex flex-col max-h-[90vh] overflow-hidden border border-slate-200 relative">
          {/* Header */}
          <div className="border-b border-slate-200 sticky top-0 bg-white z-20 rounded-t-2xl">
            <div className="flex items-center justify-between px-8 py-5">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">Add Product</h2>
              <div className="flex items-center gap-3">
                <Button
                  type="submit"
                  form="product-form"
                  disabled={isSubmitting}
                  className="bg-slate-700 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                 Publish
                </Button>
                <button
                  type="button"
                  className="ml-2 rounded-full p-1 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  aria-label="Close"
                  onClick={onClose}
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Accessible description for screen readers */}
          <div className="sr-only">
            Add a new product to your store with details, images, and specifications.
          </div>

          {/* Decorative shadow for scroll */}
          <div
            className={`absolute inset-x-0 top-[62px] h-4 bg-gradient-to-b from-white to-transparent pointer-events-none z-10 transition-opacity duration-200 ${
              showTopShadow ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Main Content */}
          <div ref={contentRef} className="flex-1 overflow-y-auto">
            <form
              id="product-form"
              onSubmit={addProduct}
              className="p-8 space-y-8"
            >
              {/* Product Images */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-slate-900">Product Images</h3>
                  <div className="text-xs text-slate-500">
                    {uploadedImages.length} of {MAX_IMAGES} images
                  </div>
                </div>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 bg-slate-50">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <p className="text-slate-500">Choose image or drag and drop it here</p>
                    <p className="text-xs text-slate-400">JPG, JPEG, PNG. Max 10MB</p>
                    <label
                      className={`mt-2 flex items-center gap-2 px-4 py-1.5 border border-slate-300 rounded-md text-sm font-medium bg-white hover:bg-slate-100 transition cursor-pointer ${
                        uploadedImages.length >= MAX_IMAGES
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      <Upload className="h-4 w-4" />
                      <span>Upload</span>
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/jpg"
                        multiple
                        style={{ display: "none" }}
                        disabled={uploadedImages.length >= MAX_IMAGES}
                        onChange={async (e) => {
                          if (!e.target.files) return;
                          const files = Array.from(e.target.files);
                          const remainingSlots = MAX_IMAGES - uploadedImages.length;
                          const filesToAdd = files.slice(0, remainingSlots);

                          setUploadedImages((prev) => [
                            ...prev,
                            ...filesToAdd.map((file) => URL.createObjectURL(file)),
                          ]);
                          setImageFiles((prev) => [...prev, ...filesToAdd]);
                          e.target.value = "";
                        }}
                      />
                    </label>
                    {uploadedImages.length >= MAX_IMAGES && (
                      <div className="flex items-center gap-1 text-amber-600 text-xs mt-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>Maximum {MAX_IMAGES} images allowed</span>
                      </div>
                    )}
                  </div>
                  {uploadedImages.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-5">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative w-24 h-24 shadow-sm rounded-lg overflow-hidden bg-slate-100">
                          <ImageWithFallback
                            src={image}
                            alt={`Product image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-red-600 transition"
                            aria-label="Remove image"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>

              {/* Product Details */}
              <section>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Product Details</h3>
                <div className="space-y-5">
                  <div>
                    <Label htmlFor="productName" className="text-sm font-medium text-slate-900">
                      Product name
                    </Label>
                    <Input
                      id="productName"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      placeholder="Enter product name"
                      required
                      className="mt-2 border-slate-300 rounded-md"
                    />
                  </div>

                  <div>
                    <Label htmlFor="productDescription" className="text-sm font-medium text-slate-900">
                      Product description
                    </Label>
                    <Textarea
                      id="productDescription"
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                      placeholder="Enter product description"
                      rows={4}
                      required
                      className="mt-2 border-slate-300 rounded-md"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="productPrice" className="text-sm font-medium text-slate-900">
                        Product price
                      </Label>
                      <div className="relative mt-2">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-slate-900">$</span>
                        </div>
                        <Input
                          id="productPrice"
                          type="number"
                          min="0.01"
                          step="0.01"
                          value={productPrice}
                          onChange={(e) => setProductPrice(Number(e.target.value))}
                          placeholder="Enter product price"
                          required
                          className="pl-7 border-slate-300 rounded-md"
                        />
                      </div>
                    </div>
                    {/* <div>
                      <Label htmlFor="discountPrice" className="text-sm font-medium text-slate-900">
                        Discount price <span className="text-slate-400">(optional)</span>
                      </Label>
                      <div className="relative mt-2">
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
                      <div>
                      <Label htmlFor="productInventory" className="text-sm font-medium text-slate-900">
                        Stock quantity
                      </Label>
                      <Input
                        id="productInventory"
                        type="number"
                        min="0"
                        step="1"
                        value={productInventory}
                        onChange={(e) => setProductInventory(Number(e.target.value))}
                        placeholder="Enter quantity"
                        required
                        className="mt-2 border-slate-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
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

                  <div>
                    <Label className="text-sm font-medium text-slate-900">
                      Product specification
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <Label htmlFor="product_type" className="text-xs text-slate-700">Product Type</Label>
                        <Input
                          id="product_type"
                          value={typeof productSpecifications === "object" && productSpecifications !== null && "product_type" in productSpecifications ? (productSpecifications as any).product_type || "" : ""}
                          onChange={e =>
                            setProductSpecifications((prev: any) => ({
                              ...(typeof prev === "object" && prev !== null ? prev : {}),
                              product_type: e.target.value,
                            }))
                          }
                          placeholder="e.g. Footwear"
                          className="mt-1 border-slate-300 rounded-md"
                        />
                      </div>
                      <div>
                        <Label htmlFor="SKU" className="text-xs text-slate-700">SKU</Label>
                        <Input
                          id="SKU"
                          value={typeof productSpecifications === "object" && productSpecifications !== null && "SKU" in productSpecifications ? (productSpecifications as any).SKU || "" : ""}
                          onChange={e =>
                            setProductSpecifications((prev: any) => ({
                              ...(typeof prev === "object" && prev !== null ? prev : {}),
                              SKU: e.target.value,
                            }))
                          }
                          placeholder="e.g. FA203FS4OKRBQNAFAMZ"
                          className="mt-1 border-slate-300 rounded-md"
                        />
                      </div>
                      <div>
                        <Label htmlFor="Weight" className="text-xs text-slate-700">Weight</Label>
                        <Input
                          id="Weight"
                          value={typeof productSpecifications === "object" && productSpecifications !== null && "Weight" in productSpecifications ? (productSpecifications as any).Weight || "" : ""}
                          onChange={e =>
                            setProductSpecifications((prev: any) => ({
                              ...(typeof prev === "object" && prev !== null ? prev : {}),
                              Weight: e.target.value,
                            }))
                          }
                          placeholder="e.g. 0.76"
                          className="mt-1 border-slate-300 rounded-md"
                        />
                      </div>
                      <div>
                        <Label htmlFor="production_country" className="text-xs text-slate-700">Production Country</Label>
                        <Input
                          id="production_country"
                          value={typeof productSpecifications === "object" && productSpecifications !== null && "production_country" in productSpecifications ? (productSpecifications as any).production_country || "" : ""}
                          onChange={e =>
                            setProductSpecifications((prev: any) => ({
                              ...(typeof prev === "object" && prev !== null ? prev : {}),
                              production_country: e.target.value,
                            }))
                          }
                          placeholder="e.g. Nigeria"
                          className="mt-1 border-slate-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label className="text-xs text-slate-700">Additional Specs</Label>
                      {(typeof productSpecifications === "object" && productSpecifications !== null && Array.isArray((productSpecifications as any).additionalSpecs)
                        ? (productSpecifications as any).additionalSpecs
                        : [""]
                      ).map((spec: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 mt-2">
                          <Input
                            value={spec}
                            onChange={e => {
                              const newSpecs = typeof productSpecifications === "object" && productSpecifications !== null && Array.isArray((productSpecifications as any).additionalSpecs)
                                ? [...(productSpecifications as any).additionalSpecs]
                                : [""];
                              newSpecs[idx] = e.target.value;
                              setProductSpecifications((prev: any) => ({
                                ...(typeof prev === "object" && prev !== null ? prev : {}),
                                additionalSpecs: newSpecs,
                              }));
                            }}
                            placeholder="e.g. Care Instructions: Hand wash only, air dry"
                            className="border-slate-300 rounded-md flex-1"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="text-red-500"
                            onClick={() => {
                              const newSpecs = typeof productSpecifications === "object" && productSpecifications !== null && Array.isArray((productSpecifications as any).additionalSpecs)
                                ? [...(productSpecifications as any).additionalSpecs]
                                : [""];
                              newSpecs.splice(idx, 1);
                              setProductSpecifications((prev: any) => ({
                                ...(typeof prev === "object" && prev !== null ? prev : {}),
                                additionalSpecs: newSpecs,
                              }));
                            }}
                            disabled={
                              !(
                                typeof productSpecifications === "object" &&
                                productSpecifications !== null &&
                                Array.isArray((productSpecifications as any).additionalSpecs)
                              ) || (productSpecifications as any).additionalSpecs.length <= 1
                            }
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => {
                          setProductSpecifications((prev: any) => {
                            const prevSpecs =
                              typeof prev === "object" && prev !== null && Array.isArray(prev.additionalSpecs)
                                ? prev.additionalSpecs
                                : [""];
                            return {
                              ...(typeof prev === "object" && prev !== null ? prev : {}),
                              additionalSpecs: [...prevSpecs, ""],
                            };
                          });
                        }}
                      >
                        Add Spec
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    )}
     {isPending && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-8 shadow-lg">
          <svg className="animate-spin h-8 w-8 text-slate-700 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <span className="text-slate-700 font-medium">Saving product...</span>
        </div>
      </div>
    )}
    </div>
// </div>
  //   </Dialog>
  );
}