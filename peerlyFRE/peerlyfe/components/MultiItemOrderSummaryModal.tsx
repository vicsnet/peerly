import React from "react";
import svgPaths from "../imports/svg-bi1ja775vl";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCart } from "../contexts/CartContext";
import { toast } from "sonner";

interface BuyNowProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  vendorId: number;
  vendorName?: string;
}

interface MultiItemOrderSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Buy Now mode props
  buyNowMode?: boolean;
  buyNowProduct?: BuyNowProduct;
}

// Mock vendor fee settings - in a real app, this would come from an API
const vendorFeeSettings: Record<number, {
  shipping: number;
  taxRate: number; // percentage
  serviceFee: number;
}> = {
  1: { shipping: 15, taxRate: 8.5, serviceFee: 3 }, // SneakerWorld
  2: { shipping: 12, taxRate: 7.0, serviceFee: 2 }, // Fresh Harvest  
  3: { shipping: 20, taxRate: 9.0, serviceFee: 4 }, // TechHaven
  4: { shipping: 25, taxRate: 8.0, serviceFee: 5 }, // Home & Beyond
  5: { shipping: 8, taxRate: 6.5, serviceFee: 1 },  // Artisan Crafts
  6: { shipping: 10, taxRate: 7.5, serviceFee: 2 }, // Wellness Hub
};

// Default fees for unknown vendors
const defaultFees = { shipping: 16, taxRate: 8.0, serviceFee: 2 };

type BackgroundImage61Props = {
  additionalClassNames?: string[];
};

function BackgroundImage61({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage61Props>) {
  return (
    <div className={`relative shrink-0 w-full ${additionalClassNames.join(' ')}`}>
      {children}
    </div>
  );
}

type BackgroundImage44Props = {
  additionalClassNames?: string[];
};

function BackgroundImage44({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage44Props>) {
  return (
    <div className={`relative shrink-0 w-full ${additionalClassNames.join(' ')}`}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage29({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage61>
      <div className="box-border flex flex-col gap-2 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage61>
  );
}

function BackgroundImage14({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-6">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </div>
  );
}

type TextBackgroundImageProps = {
  text: string;
  text1: string;
};

function TextBackgroundImage({ text, text1 }: TextBackgroundImageProps) {
  return (
    <BackgroundImage61>
      <div className="box-border flex flex-row items-center justify-between leading-[0] not-italic p-0 relative text-black text-sm text-left text-nowrap w-full">
        <div className="font-normal relative shrink-0">
          <p className="block leading-5 text-nowrap whitespace-pre">
            {text}
          </p>
        </div>
        <div className="font-medium relative shrink-0">
          <p className="block leading-5 text-nowrap whitespace-pre">
            {text1}
          </p>
        </div>
      </div>
    </BackgroundImage61>
  );
}

function IconX({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="relative shrink-0 size-6 cursor-pointer hover:opacity-70 transition-opacity"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="icon/x">
          <path
            d="M18 6L6 18"
            id="Vector"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M6 6L18 18"
            id="Vector_2"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </button>
  );
}

function Text({ onClose }: { onClose: () => void }) {
  return (
    <BackgroundImage61>
      <div className="absolute border-b border-slate-200 inset-x-0 top-0 bottom-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border flex flex-row items-center justify-between px-6 py-4 relative w-full">
          <div className="font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-2xl text-gray-900 text-left text-nowrap tracking-tight">
            <p className="block leading-8 overflow-inherit whitespace-pre">
              Order summary
            </p>
          </div>
          <IconX onClick={onClose} />
        </div>
      </div>
    </BackgroundImage61>
  );
}

function Left({ productImage, productName }: { productImage: string; productName: string }) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <div className="rounded-lg shrink-0 size-12 overflow-hidden">
          <ImageWithFallback
            src={productImage}
            alt={productName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="basis-0 font-medium grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-black text-sm text-left text-nowrap">
          <p className="block leading-[14px] overflow-inherit">
            {productName}
          </p>
        </div>
      </div>
    </div>
  );
}

function Product({ productImage, productName, totalPrice }: { 
  productImage: string; 
  productName: string; 
  totalPrice: number;
}) {
  return (
    <div className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-xl shrink-0">
      <div className="absolute border border-slate-300 inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border flex flex-row gap-4 h-[72px] items-center justify-start p-3 relative w-full">
          <Left productImage={productImage} productName={productName} />
          <div className="font-medium leading-[0] not-italic relative shrink-0 text-black text-base text-left text-nowrap">
            <p className="block leading-6 whitespace-pre">${totalPrice.toFixed(0)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconTrash2({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="relative shrink-0 size-6 cursor-pointer hover:opacity-70 transition-opacity"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="icon/trash-2">
          <path
            d="M3 6H21"
            id="Vector"
            stroke="#64748B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p23398000}
            id="Vector_2"
            stroke="#64748B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p129c5380}
            id="Vector_3"
            stroke="#64748B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M10 11V17"
            id="Vector_4"
            stroke="#64748B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M14 11V17"
            id="Vector_5"
            stroke="#64748B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </button>
  );
}

function WithAction({ productImage, productName, totalPrice, onRemove, showRemove = true }: {
  productImage: string;
  productName: string;
  totalPrice: number;
  onRemove?: () => void;
  showRemove?: boolean;
}) {
  return (
    <BackgroundImage61>
      <div className="box-border flex flex-row gap-2.5 items-center justify-start p-0 relative w-full">
        <Product 
          productImage={productImage}
          productName={productName}
          totalPrice={totalPrice}
        />
        {showRemove && onRemove && <IconTrash2 onClick={onRemove} />}
      </div>
    </BackgroundImage61>
  );
}

// Empty cart state component
function EmptyCartState() {
  return (
    <BackgroundImage61>
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5-5M7 13l-2.5 5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
        <p className="text-sm text-gray-500 text-center max-w-sm">
          Add some products to your cart to get started with your order.
        </p>
      </div>
    </BackgroundImage61>
  );
}

function Carts({ cartItems, onRemoveItem, buyNowMode, buyNowProduct }: {
  cartItems: any[];
  onRemoveItem: (id: number) => void;
  buyNowMode?: boolean;
  buyNowProduct?: BuyNowProduct;
}) {
  // In buy now mode, show the single product without remove option
  if (buyNowMode && buyNowProduct) {
    return (
      <BackgroundImage61>
        <div className="box-border flex flex-col gap-4 items-start justify-start p-0 relative w-full">
          <WithAction 
            productImage={buyNowProduct.image}
            productName={buyNowProduct.name}
            totalPrice={buyNowProduct.price * buyNowProduct.quantity}
            showRemove={false}
          />
        </div>
      </BackgroundImage61>
    );
  }

  // Regular cart mode - check if empty
  if (!cartItems || cartItems.length === 0) {
    return <EmptyCartState />;
  }

  return (
    <BackgroundImage61>
      <div className="box-border flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        {cartItems.map((item) => (
          <WithAction 
            key={`${item.id}-${JSON.stringify(item.variants || '')}`}
            productImage={item.image}
            productName={item.name}
            totalPrice={item.price * item.quantity}
            onRemove={() => onRemoveItem(item.id)}
            showRemove={true}
          />
        ))}
      </div>
    </BackgroundImage61>
  );
}

function Options({ shippingCost, taxCost, serviceFee }: {
  shippingCost: number;
  taxCost: number;
  serviceFee: number;
}) {
  return (
    <BackgroundImage29>
      <TextBackgroundImage text="Shipping" text1={`$${shippingCost.toFixed(2)}`} />
      <TextBackgroundImage text="Estimated Taxes" text1={`$${taxCost.toFixed(2)}`} />
      <TextBackgroundImage text="Service Fees" text1={`$${serviceFee.toFixed(2)}`} />
    </BackgroundImage29>
  );
}

function SectionItems() {
  return (
    <BackgroundImage61 additionalClassNames={["h-0"]}>
      <div className="w-full h-px bg-slate-200"></div>
    </BackgroundImage61>
  );
}

function Text4({ total }: { total: number }) {
  return (
    <BackgroundImage61>
      <div className="box-border flex flex-row font-medium items-center justify-between leading-[0] not-italic p-0 relative text-black text-left text-nowrap w-full">
        <div className="relative shrink-0 text-sm">
          <p className="block leading-5 text-nowrap whitespace-pre">
            Total
          </p>
        </div>
        <div className="relative shrink-0 text-base">
          <p className="block leading-6 text-nowrap whitespace-pre">
            ${total.toFixed(2)}
          </p>
        </div>
      </div>
    </BackgroundImage61>
  );
}

function All({ cartItems, shippingCost, taxCost, serviceFee, buyNowMode, buyNowProduct }: {
  cartItems: any[];
  shippingCost: number;
  taxCost: number;
  serviceFee: number;
  buyNowMode?: boolean;
  buyNowProduct?: BuyNowProduct;
}) {
  let subtotal = 0;
  
  if (buyNowMode && buyNowProduct) {
    subtotal = buyNowProduct.price * buyNowProduct.quantity;
  } else {
    subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
  
  const total = subtotal + shippingCost + taxCost + serviceFee;

  return (
    <BackgroundImage29>
      <Options shippingCost={shippingCost} taxCost={taxCost} serviceFee={serviceFee} />
      <SectionItems />
      <Text4 total={total} />
    </BackgroundImage29>
  );
}

function Content({ cartItems, onRemoveItem, shippingCost, taxCost, serviceFee, buyNowMode, buyNowProduct, hasItems }: {
  cartItems: any[];
  onRemoveItem: (id: number) => void;
  shippingCost: number;
  taxCost: number;
  serviceFee: number;
  buyNowMode?: boolean;
  buyNowProduct?: BuyNowProduct;
  hasItems: boolean;
}) {
  return (
    <BackgroundImage44>
      <div className="box-border flex flex-col gap-8 items-start justify-start p-6 relative w-full">
        <Carts 
          cartItems={cartItems} 
          onRemoveItem={onRemoveItem}
          buyNowMode={buyNowMode}
          buyNowProduct={buyNowProduct}
        />
        
        {/* Only show fee breakdown if there are items */}
        {hasItems && (
          <All 
            cartItems={cartItems}
            shippingCost={shippingCost}
            taxCost={taxCost}
            serviceFee={serviceFee}
            buyNowMode={buyNowMode}
            buyNowProduct={buyNowProduct}
          />
        )}
      </div>
    </BackgroundImage44>
  );
}

function Button({ onCompletePurchase, disabled }: { 
  onCompletePurchase: () => void; 
  disabled: boolean;
}) {
  return (
    <BackgroundImage61 additionalClassNames={[disabled ? "bg-gray-400" : "bg-slate-900", "rounded-md"]}>
      <div className="flex flex-row items-center justify-center relative size-full">
        <button
          onClick={disabled ? undefined : onCompletePurchase}
          className="box-border flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full hover:opacity-90 transition-opacity"
          disabled={disabled}
        >
          <div className="font-medium leading-[0] not-italic relative shrink-0 text-white text-sm text-left text-nowrap">
            <p className="block leading-6 whitespace-pre">
              Complete Purchase
            </p>
          </div>
        </button>
      </div>
    </BackgroundImage61>
  );
}

function IconInfo() {
  return (
    <div className="relative shrink-0 size-3" data-name="icon/info">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g clipPath="url(#clip0_120_326)" id="icon/info">
          <path
            d={svgPaths.p3e7757b0}
            id="Vector"
            stroke="#374151"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8V6"
            id="Vector_2"
            stroke="#374151"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 4H6.005"
            id="Vector_3"
            stroke="#374151"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_120_326">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Product2() {
  return (
    <BackgroundImage61 additionalClassNames={["bg-slate-50", "rounded"]}>
      <div className="absolute border border-slate-100 inset-0 pointer-events-none rounded" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border flex flex-row gap-1.5 items-center justify-center px-2 py-1 relative w-full">
          <IconInfo />
          <div className="basis-0 flex flex-col font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-xs text-gray-700 text-left">
            <p className="block leading-[14px]">
              Payment will be held in escrow until you confirm the order has
              been received and meet your requirements
            </p>
          </div>
        </div>
      </div>
    </BackgroundImage61>
  );
}

function Actions({ onCompletePurchase, hasItems }: {
  onCompletePurchase: () => void;
  hasItems: boolean;
}) {
  // Don't show actions for empty cart
  if (!hasItems) {
    return null;
  }

  return (
    <BackgroundImage44 additionalClassNames={["bg-white"]}>
      <div className="box-border flex flex-col gap-1.5 items-start justify-start pb-6 pt-3 px-6 relative w-full">
        <Button onCompletePurchase={onCompletePurchase} disabled={!hasItems} />
        <Product2 />
      </div>
    </BackgroundImage44>
  );
}

function Modal({ onClose, onCompletePurchase, cartItems, onRemoveItem, shippingCost, taxCost, serviceFee, buyNowMode, buyNowProduct }: {
  onClose: () => void;
  onCompletePurchase: () => void;
  cartItems: any[];
  onRemoveItem: (id: number) => void;
  shippingCost: number;
  taxCost: number;
  serviceFee: number;
  buyNowMode?: boolean;
  buyNowProduct?: BuyNowProduct;
}) {
  const hasItems = buyNowMode ? !!buyNowProduct : cartItems.length > 0;

  return (
    <div 
      className="bg-white relative shrink-0 w-[480px] max-w-[90vw]"
      style={{ borderRadius: '16px' }}
    >
      <div 
        className="box-border flex flex-col items-start justify-start overflow-clip p-0 relative w-full"
        style={{ borderRadius: '16px' }}
      >
        <Text onClose={onClose} />
        <Content 
          cartItems={cartItems}
          onRemoveItem={onRemoveItem}
          shippingCost={shippingCost}
          taxCost={taxCost}
          serviceFee={serviceFee}
          buyNowMode={buyNowMode}
          buyNowProduct={buyNowProduct}
          hasItems={hasItems}
        />
        <Actions 
          onCompletePurchase={onCompletePurchase}
          hasItems={hasItems}
        />
      </div>
      <div 
        className="absolute border border-slate-50 inset-0 pointer-events-none shadow-sm"
        style={{ borderRadius: '16px' }}
      />
    </div>
  );
}

// Function to calculate dynamic fees based on cart contents
function calculateDynamicFees(cartItems: any[], buyNowMode: boolean, buyNowProduct?: BuyNowProduct) {
  let totalShipping = 0;
  let totalTaxes = 0;
  let totalServiceFees = 0;
  let subtotal = 0;

  if (buyNowMode && buyNowProduct) {
    // Buy now mode - use single vendor's fees
    const vendorId = buyNowProduct.vendorId;
    const fees = vendorFeeSettings[vendorId] || defaultFees;
    
    subtotal = buyNowProduct.price * buyNowProduct.quantity;
    totalShipping = fees.shipping;
    totalTaxes = (subtotal * fees.taxRate) / 100;
    totalServiceFees = fees.serviceFee;
  } else if (cartItems.length > 0) {
    // Regular cart mode - calculate fees for each vendor
    const vendorGroups = cartItems.reduce((groups: Record<number, any[]>, item) => {
      const vendorId = item.vendorId;
      if (!groups[vendorId]) {
        groups[vendorId] = [];
      }
      groups[vendorId].push(item);
      return groups;
    }, {});

    // Calculate fees for each vendor group
    Object.entries(vendorGroups).forEach(([vendorIdStr, items]) => {
      const vendorId = parseInt(vendorIdStr);
      const fees = vendorFeeSettings[vendorId] || defaultFees;
      
      const vendorSubtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      subtotal += vendorSubtotal;
      
      // Each vendor adds their shipping fee (could be optimized to use highest shipping fee instead)
      totalShipping += fees.shipping;
      
      // Calculate taxes based on vendor's tax rate and their subtotal
      totalTaxes += (vendorSubtotal * fees.taxRate) / 100;
      
      // Each vendor adds their service fee
      totalServiceFees += fees.serviceFee;
    });

    // If multiple vendors, we might want to cap or optimize shipping
    // For now, we'll use the highest shipping fee instead of sum
    if (Object.keys(vendorGroups).length > 1) {
      totalShipping = Math.max(...Object.keys(vendorGroups).map(vendorIdStr => {
        const vendorId = parseInt(vendorIdStr);
        const fees = vendorFeeSettings[vendorId] || defaultFees;
        return fees.shipping;
      }));
    }
  }

  return {
    shipping: totalShipping,
    taxes: totalTaxes,
    serviceFees: totalServiceFees
  };
}

export function MultiItemOrderSummaryModal({ 
  isOpen, 
  onClose,
  buyNowMode = false,
  buyNowProduct
}: MultiItemOrderSummaryModalProps) {
  const { items, removeFromCart, clearCart, addToCart } = useCart();

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
    toast.success("Item removed from order");
  };

  const handleCompletePurchase = () => {
    if (buyNowMode && buyNowProduct) {
      // In buy now mode, add the product to cart and complete purchase
      clearCart();
      
      // Add the product with the specified quantity
      for (let i = 0; i < buyNowProduct.quantity; i++) {
        addToCart({
          id: buyNowProduct.id,
          name: buyNowProduct.name,
          price: buyNowProduct.price,
          image: buyNowProduct.image,
          vendorId: buyNowProduct.vendorId,
          vendorName: buyNowProduct.vendorName
        });
      }
      
      toast.success("Order placed successfully! Your payment is being processed.");
      clearCart();
      onClose();
    } else {
      // Regular cart mode
      toast.success("Order placed successfully! Your payment is being processed.");
      clearCart();
      onClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  // Calculate dynamic fees based on cart contents
  const { shipping, taxes, serviceFees } = calculateDynamicFees(items, buyNowMode, buyNowProduct);

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[9999]"
      onClick={handleOverlayClick}
    >
      <Modal
        onClose={onClose}
        onCompletePurchase={handleCompletePurchase}
        cartItems={items}
        onRemoveItem={handleRemoveItem}
        shippingCost={shipping}
        taxCost={taxes}
        serviceFee={serviceFees}
        buyNowMode={buyNowMode}
        buyNowProduct={buyNowProduct}
      />
    </div>
  );
}