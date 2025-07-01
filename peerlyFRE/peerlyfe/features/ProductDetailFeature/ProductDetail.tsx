import React, { useState, useEffect } from "react";
import { BackButton } from "@/components/BackButton";
import { NavBar } from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Minus, Plus, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useProducts, Product } from "@/contexts/ProductContext";
import { VendorMismatchModal } from "@/components/VendorMismatchModal";
import { MultiItemOrderSummaryModal } from "@/components/MultiItemOrderSummaryModal";
import { toast } from "sonner";

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  isSeller?: boolean;
}

interface ProductDetailProps {
  productId: number | null;
  onBackClick: () => void;
  onLoginClick: () => void;
  onCartClick: () => void;
  onStartSellingClick: () => void;
  vendorId: number | null;
  vendorName?: string;
  user?: User | null;
  onSignOut?: () => void;
  onProfileClick?: () => void;
  onOrdersClick?: () => void;
  onTransactionsClick?: () => void;
}

export function ProductDetail({
  productId,
  onBackClick,
  onLoginClick,
  onCartClick,
  onStartSellingClick,
  vendorId,
  vendorName,
  user,
  onSignOut,
  onProfileClick,
  onOrdersClick,
  onTransactionsClick
}: ProductDetailProps) {
  const { getProductById, getProductsByVendor } = useProducts();
  const { addToCart, clearCart, items } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [otherProducts, setOtherProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'details' | 'specification'>('specification');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVendorMismatchModalOpen, setIsVendorMismatchModalOpen] = useState(false);
  const [isOrderSummaryModalOpen, setIsOrderSummaryModalOpen] = useState(false);
  const [buyNowProduct, setBuyNowProduct] = useState<any>(null);
  const [isBuyNowMode, setIsBuyNowMode] = useState(false);
  
  // Load product when productId changes
  useEffect(() => {
    if (productId) {
      const loadedProduct = getProductById(productId);
      setProduct(loadedProduct);
      
      // Initialize selected variants
      if (loadedProduct?.variants) {
        const initialVariants: Record<string, string> = {};
        loadedProduct.variants.forEach(variant => {
          if (variant.options.length > 0) {
            initialVariants[variant.name] = variant.options[0];
          }
        });
        setSelectedVariants(initialVariants);
      }
    }
  }, [productId, getProductById]);

  // Load other products from the same vendor
  useEffect(() => {
    if (vendorId && productId) {
      const vendorProducts = getProductsByVendor(vendorId);
      // Filter out the current product and limit to 2 items
      const filtered = vendorProducts.filter(p => p.id !== productId).slice(0, 2);
      setOtherProducts(filtered);
    }
  }, [vendorId, productId, getProductsByVendor]);
  
  // Handle quantity changes
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const incrementQuantity = () => {
    if (product && quantity < product.inventory) {
      setQuantity(quantity + 1);
    } else {
      toast.error("Cannot exceed available inventory");
    }
  };
  
  // Handle variant selection
  const handleVariantChange = (variantName: string, option: string) => {
    setSelectedVariants(prev => ({
      ...prev,
      [variantName]: option
    }));
  };
  
  // Handle image navigation
  const handlePrevImage = () => {
    if (product && product.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (product && product.images.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  // Check if there's more content to show
  const hasMoreContent = () => {
    if (activeTab === 'details') {
      return product?.description && product.description.length > 200;
    } else {
      // For specifications, we can check if there are additional fields
      return true; // Always show see more for specs as demo
    }
  };

  // Get content based on tab and expansion state
  const getTabContent = () => {
    if (activeTab === 'details') {
      const description = product?.description || '';
      if (!isExpanded && description.length > 200) {
        return description.substring(0, 200) + '...';
      }
      return description;
    } else {
      // Specification content
      const baseSpecs = [
        `SKU: ${product?.sku || 'FA203FS4OKRBQNAFAMZ'}`,
        `Product Line: ${product?.productLine || 'Liangzai2021'}`,
        `Model: ${product?.model || 'Sneakers'}`,
        `Production Country: ${product?.productionCountry || 'China'}`,
        `Size (L x W x H cm): ${product?.dimensions || '28*18*10'}`,
        `Weight (kg): ${product?.weight || '0.75'}`,
        `Color: ${product?.color || 'White'}`,
        `Main Material: ${product?.material || 'N/A'}`
      ];

      const additionalSpecs = [
        'Care Instructions: Hand wash only, air dry',
        'Warranty: 1 year manufacturer warranty',
        'Certification: ISO 9001 certified',
        'Environmental: Eco-friendly materials',
        'Shipping: Free shipping on orders over $50'
      ];

      if (isExpanded) {
        return [...baseSpecs, ...additionalSpecs];
      }
      return baseSpecs;
    }
  };
  
  // Handle add to cart
  const handleAddToCart = () => {
    if (!product) return;
    
    const hasItemsFromOtherVendor = items.some(item => item.vendorId !== product.vendorId);
    
    if (hasItemsFromOtherVendor) {
      setIsVendorMismatchModalOpen(true);
      return;
    }
    
    addProductToCart();
  };
  
  const addProductToCart = () => {
    if (!product) return;
    
    addToCart({
      id: product.id,
      name: product.name,
      price: product.discountPrice || product.price,
      image: product.images[0],
      vendorId: product.vendorId,
      vendorName: vendorName
    });
    
    toast.success(`${product.name} added to cart`);
  };
  
  // Handle buy now - show centered modal without adding to cart
  const handleBuyNowClick = () => {
    if (!product) return;
    
    const hasItemsFromOtherVendor = items.some(item => item.vendorId !== product.vendorId);
    
    if (hasItemsFromOtherVendor) {
      setIsVendorMismatchModalOpen(true);
      return;
    }
    
    // Create the buy now product object without adding to cart
    const buyNowProductData = {
      id: product.id,
      name: product.name,
      price: product.discountPrice || product.price,
      image: product.images[0],
      quantity: quantity,
      vendorId: product.vendorId,
      vendorName: vendorName
    };
    
    setBuyNowProduct(buyNowProductData);
    setIsBuyNowMode(true);
    setIsOrderSummaryModalOpen(true);
  };
  
  const handleClearCartAndAddProduct = () => {
    if (!product) return;
    
    clearCart();
    addProductToCart();
    setIsVendorMismatchModalOpen(false);
  };

  const handleClearCartAndBuyNow = () => {
    if (!product) return;
    
    // Create the buy now product object without adding to cart
    const buyNowProductData = {
      id: product.id,
      name: product.name,
      price: product.discountPrice || product.price,
      image: product.images[0],
      quantity: quantity,
      vendorId: product.vendorId,
      vendorName: vendorName
    };
    
    setBuyNowProduct(buyNowProductData);
    setIsBuyNowMode(true);
    setIsVendorMismatchModalOpen(false);
    setIsOrderSummaryModalOpen(true);
  };

  const handleOrderSummaryClose = () => {
    setIsOrderSummaryModalOpen(false);
    setIsBuyNowMode(false);
    setBuyNowProduct(null);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <div className="px-4 md:px-8 pt-6 max-w-[1440px] mx-auto w-full">
          <NavBar 
            // onLoginClick={onLoginClick} 
            // onStartSellingClick={onStartSellingClick} 
            // onCartClick={onCartClick} 
            // user={user}
            // onSignOut={onSignOut}
            // onProfileClick={onProfileClick}
            // onOrdersClick={onOrdersClick}
            // onTransactionsClick={onTransactionsClick}
          />
        </div>
        <div className="flex-1 container mx-auto px-4 py-12 flex justify-center items-center">
          <p>Product not found or still loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <div className="px-4 md:px-8 pt-6 max-w-[1440px] mx-auto w-full">
        <NavBar 
          // onLoginClick={onLoginClick} 
          // onStartSellingClick={onStartSellingClick} 
          // onCartClick={onCartClick} 
          // user={user}
          // onSignOut={onSignOut}
          // onProfileClick={onProfileClick}
          // onOrdersClick={onOrdersClick}
          // onTransactionsClick={onTransactionsClick}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 md:px-8 pt-6 max-w-[1440px] mx-auto w-full">
        <div className="flex flex-row gap-6 w-full">
          {/* Left Column - Product Details */}
          <div className="flex flex-col gap-6 w-[796px]">
            {/* Back Button */}
            <div className="bg-slate-100 rounded-md w-fit">
              <BackButton onClick={onBackClick} label="Back to Products" />
            </div>

            {/* Product Card */}
            <div className="bg-white rounded-xl p-0 overflow-hidden">
              <div className="flex flex-row gap-4 p-0">
                {/* Product Images */}
                <div className="flex flex-col gap-2 shrink-0">
                  {/* Main Image */}
                  <div className="relative w-[328px] h-[328px] rounded-xl overflow-hidden bg-slate-50">
                    <ImageWithFallback
                      src={product.images[currentImageIndex]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Navigation Arrows */}
                    {product.images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/30 backdrop-blur-md rounded border border-white/10 flex items-center justify-center hover:bg-black/40 transition-colors"
                        >
                          <ChevronLeft className="w-3 h-3 text-white" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/30 backdrop-blur-md rounded border border-white/10 flex items-center justify-center hover:bg-black/40 transition-colors"
                        >
                          <ChevronRight className="w-3 h-3 text-white" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Thumbnail Images */}
                  <div className="flex gap-2 overflow-x-auto">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className={`w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 ${
                          index === currentImageIndex ? 'ring-2 ring-primary' : ''
                        }`}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`${product.name} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Information */}
                <div className="flex-1 h-96 flex flex-col gap-3 p-0 overflow-hidden">
                  {/* Product Title */}
                  <h1 className="text-2xl font-semibold text-gray-900 tracking-[-0.144px] leading-8">
                    {product.name}
                  </h1>

                  {/* Tabs */}
                  <div className="bg-slate-100 rounded-md p-1 flex w-fit">
                    <button
                      onClick={() => setActiveTab('details')}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        activeTab === 'details'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      Details
                    </button>
                    <button
                      onClick={() => setActiveTab('specification')}
                      className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                        activeTab === 'specification'
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      Specification
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className={`flex-1 ${isExpanded ? 'overflow-auto' : 'overflow-hidden'}`}>
                    {activeTab === 'details' && (
                      <div className="text-gray-900 text-xl leading-7">
                        <p className="mb-0">{getTabContent()}</p>
                      </div>
                    )}
                    
                    {activeTab === 'specification' && (
                      <div className="text-gray-900 text-xl leading-7 space-y-0">
                        {(getTabContent() as string[]).map((spec, index) => (
                          <p key={index} className="mb-0">{spec}</p>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* See More/Less Button */}
                  {hasMoreContent() && (
                    <div className="bg-slate-100 rounded-md px-1.5 py-0.5 w-fit mt-2">
                      <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-xs font-medium text-slate-900 leading-5"
                      >
                        {isExpanded ? 'Show less' : 'See more'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Other Products */}
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-black tracking-[-0.1px] leading-7">
                Other Products
              </h2>
              <div className="flex gap-6">
                {otherProducts.map((otherProduct) => (
                  <div key={otherProduct.id} className="w-[322px] rounded-xl overflow-hidden">
                    <div className="h-60 rounded-xl overflow-hidden mb-1">
                      <ImageWithFallback
                        src={otherProduct.images[0]}
                        alt={otherProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-1">
                      <p className="text-base font-normal text-gray-900 leading-7 mb-0">
                        {otherProduct.name}
                      </p>
                      <p className="text-lg font-semibold text-gray-900 leading-7 mb-0">
                        ${(otherProduct.discountPrice || otherProduct.price).toFixed(0)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Checkout */}
          <div className="relative w-[540px] h-[808px] bg-white rounded-xl shadow-sm border border-slate-50">
            {/* Header */}
            <div className="border-b border-slate-100 px-6 py-4">
              <h2 className="text-2xl font-semibold text-gray-900 tracking-[-0.144px] leading-8">
                Checkout
              </h2>
            </div>

            {/* Scrollable Content */}
            <div className="px-6 pt-4 pb-40 overflow-y-auto h-full">
              {/* Contact Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 leading-7">Contact</h3>
                  {!user && (
                    <button
                      onClick={onLoginClick}
                      className="text-sm font-medium text-slate-900 underline hover:no-underline"
                    >
                      Log In
                    </button>
                  )}
                </div>
                <div className="border border-slate-300 rounded-md px-3 py-2 bg-white">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full text-base font-normal text-slate-400 leading-6 outline-none bg-transparent"
                    defaultValue={user?.email || ""}
                  />
                </div>
              </div>

              {/* Quantity Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 leading-7 mb-2">Quantity</h3>
                <div className="flex items-center gap-0">
                  <button
                    onClick={decrementQuantity}
                    className="w-8 h-8 border border-slate-200 rounded-l-md bg-white flex items-center justify-center hover:bg-slate-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4 text-slate-400" />
                  </button>
                  <div className="w-8 h-8 border-t border-b border-slate-200 bg-white flex items-center justify-center">
                    <span className="text-base font-normal text-black leading-6">{quantity}</span>
                  </div>
                  <button
                    onClick={incrementQuantity}
                    className="w-8 h-8 border border-slate-200 rounded-r-md bg-white flex items-center justify-center hover:bg-slate-50"
                    disabled={product.inventory <= quantity}
                  >
                    <Plus className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>

              {/* Color Selection (if available) */}
              {product.variants?.find(v => v.name.toLowerCase() === 'color') && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 leading-7 mb-2">Color</h3>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 bg-white border border-slate-200 rounded-md"></button>
                    <button className="w-8 h-8 bg-black border border-slate-200 rounded-md"></button>
                    <button className="w-8 h-8 bg-slate-500 border border-slate-200 rounded-md"></button>
                  </div>
                </div>
              )}

              {/* Delivery Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 leading-7 mb-3">Delivery</h3>
                <div className="space-y-3">
                  <div className="border border-slate-300 rounded-md px-3 py-2 bg-white">
                    <input
                      type="text"
                      placeholder="Select your country"
                      className="w-full text-base font-normal text-slate-400 leading-6 outline-none bg-transparent"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 border border-slate-300 rounded-md px-3 py-2 bg-white">
                      <input
                        type="text"
                        placeholder="First name"
                        className="w-full text-base font-normal text-slate-400 leading-6 outline-none bg-transparent"
                      />
                    </div>
                    <div className="flex-1 border border-slate-300 rounded-md px-3 py-2 bg-white">
                      <input
                        type="text"
                        placeholder="Last name"
                        className="w-full text-base font-normal text-slate-400 leading-6 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="border border-slate-300 rounded-md px-3 py-2 bg-white">
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full text-base font-normal text-slate-400 leading-6 outline-none bg-transparent"
                    />
                  </div>
                  <div className="border border-slate-300 rounded-md px-3 py-2 bg-white">
                    <input
                      type="text"
                      placeholder="Apartment, suite, e.t.c (optional)"
                      className="w-full text-base font-normal text-slate-400 leading-6 outline-none bg-transparent"
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 border border-slate-300 rounded-md px-3 py-2 bg-white">
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full text-base font-normal text-slate-400 leading-6 outline-none bg-transparent"
                      />
                    </div>
                    <div className="flex-1 border border-slate-300 rounded-md px-3 py-2 bg-white">
                      <input
                        type="text"
                        placeholder="Postal code (optional)"
                        className="w-full text-base font-normal text-slate-400 leading-6 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="border border-slate-300 rounded-md px-3 py-2 bg-white">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full text-base font-normal text-slate-400 leading-6 outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed Actions at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-6 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <Button 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm leading-6"
                  onClick={handleBuyNowClick}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-slate-200 bg-white text-slate-900 hover:bg-slate-50 text-sm leading-6"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Order Summary Modal */}
      <MultiItemOrderSummaryModal 
        isOpen={isOrderSummaryModalOpen}
        onClose={handleOrderSummaryClose}
        buyNowMode={isBuyNowMode}
        buyNowProduct={buyNowProduct}
      />

      {/* Vendor Mismatch Modal */}
      <VendorMismatchModal 
        isOpen={isVendorMismatchModalOpen}
        onClose={() => setIsVendorMismatchModalOpen(false)}
        onClearCart={handleClearCartAndAddProduct}
        onClearCartAndBuyNow={handleClearCartAndBuyNow}
        currentVendorName={vendorName || "the current vendor"}
      />
    </div>
  );
}