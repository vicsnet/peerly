import React, { useState } from "react";
import svgPaths from "../imports/svg-woc6yv4a3i";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCart } from "../contexts/CartContext";
import { MultiItemOrderSummaryModal } from "./MultiItemOrderSummaryModal";
import { toast } from "sonner";

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

type BackgroundImage137Props = {
  additionalClassNames?: string[];
};

function BackgroundImage137({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage137Props>) {
  return (
    <div className={`relative shrink-0 w-full ${additionalClassNames.join(' ')}`}>
      {children}
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex-1 min-w-0 relative">
      <div className="box-border flex flex-row gap-3 items-center justify-start p-0 relative size-full">
        {children}
      </div>
    </div>
  );
}

function ProductBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage137 additionalClassNames={["rounded-xl"]}>
      <div className="absolute border border-slate-100 inset-0 pointer-events-none rounded-xl" />
      <div className="relative size-full">
        <div className="box-border flex flex-row gap-3 items-start justify-between p-3 relative w-full">
          {children}
        </div>
      </div>
    </BackgroundImage137>
  );
}

type BackgroundImage90Props = {
  additionalClassNames?: string[];
};

function BackgroundImage90({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage90Props>) {
  return (
    <div className={`relative shrink-0 ${additionalClassNames.join(' ')}`}>
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}

type BackgroundImage28Props = {
  additionalClassNames?: string[];
};

function BackgroundImage28({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage28Props>) {
  return (
    <div className={`relative ${additionalClassNames.join(' ')}`}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

type RightBackgroundImageProps = {
  onRemove: () => void;
  quantity: number;
};

function RightBackgroundImage({ onRemove, quantity }: RightBackgroundImageProps) {
  return (
    <div className="flex flex-col items-end justify-between h-full min-w-[80px] shrink-0">
      <button 
        onClick={onRemove}
        className="text-red-500 hover:text-red-600 transition-colors font-normal text-xs leading-[14px] py-1 px-2 -mt-1 -mr-1 hover:bg-red-50 rounded"
      >
        Remove
      </button>
      <div className="text-gray-700 font-normal text-xs leading-[14px] mt-auto">
        Qty: {quantity}
      </div>
    </div>
  );
}

type TextBackgroundImage1Props = {
  text: string;
  text1: string;
};

function TextBackgroundImage1({ text, text1 }: TextBackgroundImage1Props) {
  return (
    <div className="flex-1 min-w-0">
      <div className="box-border flex flex-col font-medium items-start justify-between leading-[0] not-italic p-0 relative h-full text-black text-left">
        <div className="w-full overflow-hidden relative shrink-0 text-sm mb-2">
          <p className="block leading-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
            {text}
          </p>
        </div>
        <div className="relative shrink-0 text-base">
          <p className="block leading-6 text-nowrap whitespace-pre">
            {text1}
          </p>
        </div>
      </div>
    </div>
  );
}

function Container({ productImage, productName, productPrice, onRemove, quantity }: {
  productImage: string;
  productName: string;
  productPrice: string;
  onRemove: () => void;
  quantity: number;
}) {
  return (
    <ContainerBackgroundImage>
      <div className="rounded-lg shrink-0 size-12 overflow-hidden">
        <ImageWithFallback
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
      <TextBackgroundImage1
        text={productName}
        text1={productPrice}
      />
    </ContainerBackgroundImage>
  );
}

function Product({ productImage, productName, productPrice, onRemove, quantity }: {
  productImage: string;
  productName: string;
  productPrice: string;
  onRemove: () => void;
  quantity: number;
}) {
  return (
    <ProductBackgroundImage>
      <Container 
        productImage={productImage}
        productName={productName}
        productPrice={productPrice}
        onRemove={onRemove}
        quantity={quantity}
      />
      <RightBackgroundImage onRemove={onRemove} quantity={quantity} />
    </ProductBackgroundImage>
  );
}

function IconX({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="relative shrink-0 size-6 cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="icon/x"
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

function Text9({ onClose }: { onClose: () => void }) {
  return (
    <BackgroundImage137>
      <div className="absolute border-b border-slate-200 inset-x-0 top-0 bottom-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border flex flex-row items-center justify-between px-6 py-4 relative w-full">
          <div className="font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-2xl text-gray-900 text-left text-nowrap tracking-tight">
            <p className="block leading-8 overflow-inherit whitespace-pre">
              Cart
            </p>
          </div>
          <IconX onClick={onClose} />
        </div>
      </div>
    </BackgroundImage137>
  );
}

function Carts({ cartItems, onRemoveItem }: {
  cartItems: any[];
  onRemoveItem: (id: number) => void;
}) {
  if (!cartItems || cartItems.length === 0) {
    return (
      <BackgroundImage137>
        <div className="flex items-center justify-center py-8">
          <p className="text-gray-500 text-center">Your cart is empty</p>
        </div>
      </BackgroundImage137>
    );
  }

  return (
    <BackgroundImage137>
      <div className="box-border flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        {cartItems.map((item) => (
          <Product
            key={`${item.id}-${JSON.stringify(item.variants || '')}`}
            productImage={item.image}
            productName={item.name}
            productPrice={`$${(item.price * item.quantity).toFixed(0)}`}
            onRemove={() => onRemoveItem(item.id)}
            quantity={item.quantity}
          />
        ))}
      </div>
    </BackgroundImage137>
  );
}

function Text13({ total }: { total: number }) {
  return (
    <BackgroundImage137 additionalClassNames={["bg-slate-50", "rounded-lg"]}>
      <div className="absolute border border-slate-100 inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border flex flex-row font-medium items-center justify-between leading-[0] not-italic p-2 relative text-black text-left text-nowrap w-full">
          <div className="relative shrink-0 text-sm">
            <p className="block leading-5 text-nowrap whitespace-pre">
              Total
            </p>
          </div>
          <div className="relative shrink-0 text-base">
            <p className="block leading-6 text-nowrap whitespace-pre">
              ${total.toFixed(0)}
            </p>
          </div>
        </div>
      </div>
    </BackgroundImage137>
  );
}

function Content1({ cartItems, onRemoveItem, total }: {
  cartItems: any[];
  onRemoveItem: (id: number) => void;
  total: number;
}) {
  return (
    <BackgroundImage28 additionalClassNames={["shrink-0", "w-full"]}>
      <div className="box-border flex flex-col gap-8 items-start justify-start p-6 relative w-full">
        <Carts cartItems={cartItems} onRemoveItem={onRemoveItem} />
        <Text13 total={total} />
      </div>
    </BackgroundImage28>
  );
}

type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string[];
  onClick?: () => void;
};

function BackgroundImageAndText1({
  text,
  additionalClassNames = [],
  onClick,
}: BackgroundImageAndText1Props) {
  return (
    <button
      onClick={onClick}
      className={`box-border flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative ${additionalClassNames.join(' ')}`}
    >
      <div className="font-medium leading-[0] not-italic relative shrink-0 text-white text-sm text-left text-nowrap">
        <p className="block leading-6 whitespace-pre">{text}</p>
      </div>
    </button>
  );
}

function Button5({ onCheckout, disabled }: { onCheckout: () => void; disabled: boolean }) {
  return (
    <BackgroundImage90
      additionalClassNames={[
        disabled ? "bg-gray-400" : "bg-slate-900", 
        "rounded-md", 
        "w-full",
        disabled ? "" : "hover:bg-slate-800"
      ]}
    >
      <BackgroundImageAndText1
        text="Checkout"
        additionalClassNames={["w-full"]}
        onClick={disabled ? undefined : onCheckout}
      />
    </BackgroundImage90>
  );
}

type BackgroundImage44Props = {
  text: string;
  additionalClassNames?: string[];
  onClick?: () => void;
};

function BackgroundImage44({
  text,
  additionalClassNames = [],
  onClick,
}: BackgroundImage44Props) {
  return (
    <div className={`bg-white relative rounded-md shrink-0 ${additionalClassNames.join(' ')}`}>
      <div className="absolute border border-slate-200 inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <button
          onClick={onClick}
          className="box-border flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full hover:bg-slate-50 transition-colors"
        >
          <div className="font-medium leading-[0] not-italic relative shrink-0 text-sm text-left text-nowrap text-slate-900">
            <p className="block leading-6 whitespace-pre">{text}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function Button6({ onClearAll, disabled }: { onClearAll: () => void; disabled: boolean }) {
  return (
    <BackgroundImage44
      additionalClassNames={["w-full"]}
      text="Clear All"
      onClick={disabled ? undefined : onClearAll}
    />
  );
}

function Actions({ onCheckout, onClearAll, hasItems }: {
  onCheckout: () => void;
  onClearAll: () => void;
  hasItems: boolean;
}) {
  return (
    <BackgroundImage137 additionalClassNames={["bg-white"]}>
      <div className="absolute border-t border-slate-100 inset-x-0 top-0 bottom-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border flex flex-col gap-3 items-start justify-start pb-6 pt-3 px-6 relative w-full">
          <Button5 onCheckout={onCheckout} disabled={!hasItems} />
          <Button6 onClearAll={onClearAll} disabled={!hasItems} />
        </div>
      </div>
    </BackgroundImage137>
  );
}

export function CartDropdown({ isOpen, onClose, onCheckout }: CartDropdownProps) {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
    toast.success("Item removed from cart");
  };

  const handleClearAll = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  const handleCheckout = () => {
    // Open the order summary modal instead of calling parent's onCheckout
    setIsOrderSummaryOpen(true);
  };

  const handleOrderSummaryClose = () => {
    setIsOrderSummaryOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const total = totalPrice;
  const hasItems = items.length > 0;

  return (
    <>
      <div 
        className="fixed inset-0 z-40"
        onClick={handleOverlayClick}
      >
        {/* Responsive positioning with 16px rounded corners */}
        <div 
          className="absolute bg-white shadow-lg border border-slate-50 w-[480px] max-w-[90vw] top-[140px] right-4 lg:right-[60px]"
          style={{ borderRadius: '16px' }}
        >
          <div 
            className="box-border flex flex-col items-start justify-start overflow-clip p-0 relative w-full"
            style={{ borderRadius: '16px' }}
          >
            <Text9 onClose={onClose} />
            <Content1 
              cartItems={items}
              onRemoveItem={handleRemoveItem}
              total={total}
            />
            <Actions 
              onCheckout={handleCheckout}
              onClearAll={handleClearAll}
              hasItems={hasItems}
            />
          </div>
        </div>
      </div>

      {/* Order Summary Modal */}
      <MultiItemOrderSummaryModal 
        isOpen={isOrderSummaryOpen}
        onClose={handleOrderSummaryClose}
      />
    </>
  );
}