import React from "react";
import svgPaths from "../imports/svg-78ytt53uwy";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner";

interface OrderSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productPrice: number;
  productImage: string;
  quantity?: number;
  shippingCost?: number;
  taxCost?: number;
  serviceFee?: number;
}

type BackgroundImage298Props = {
  additionalClassNames?: string[];
};

function BackgroundImage298({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage298Props>) {
  return (
    <div className={`relative shrink-0 w-full ${additionalClassNames.join(' ')}`}>
      {children}
    </div>
  );
}

function BackgroundImage245({ children }: React.PropsWithChildren<object>) {
  return (
    <BackgroundImage298>
      <div className="box-border flex flex-col gap-2 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage298>
  );
}

type BackgroundImage96Props = {
  additionalClassNames?: string[];
};

function BackgroundImage96({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage96Props>) {
  return (
    <div className={`relative ${additionalClassNames.join(' ')}`}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

type TextBackgroundImage1Props = {
  text: string;
  text1: string;
};

function TextBackgroundImage1({ text, text1 }: TextBackgroundImage1Props) {
  return (
    <BackgroundImage298>
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
    </BackgroundImage298>
  );
}

type ButtonBackgroundImageAndTextProps = {
  text: string;
  onClick?: () => void;
};

function ButtonBackgroundImageAndText({
  text,
  onClick,
}: ButtonBackgroundImageAndTextProps) {
  return (
    <div className="bg-slate-900 relative rounded-md shrink-0 w-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <button 
          onClick={onClick}
          className="box-border flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full hover:opacity-90 transition-opacity"
        >
          <div className="font-medium leading-[0] not-italic relative shrink-0 text-white text-sm text-left text-nowrap">
            <p className="block leading-6 whitespace-pre">{text}</p>
          </div>
        </button>
      </div>
    </div>
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

function Text7({ onClose }: { onClose: () => void }) {
  return (
    <BackgroundImage298>
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
    </BackgroundImage298>
  );
}

function Left({ productImage, productName }: { productImage: string; productName: string }) {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Left"
    >
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
    <BackgroundImage298 additionalClassNames={["bg-slate-50", "rounded-xl"]}>
      <div className="absolute border border-slate-300 inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border flex flex-row gap-4 h-[72px] items-center justify-start p-3 relative w-full">
          <Left productImage={productImage} productName={productName} />
          <div className="font-medium leading-[0] not-italic relative shrink-0 text-black text-base text-left text-nowrap">
            <p className="block leading-6 whitespace-pre">${totalPrice.toFixed(0)}</p>
          </div>
        </div>
      </div>
    </BackgroundImage298>
  );
}

function Options({ shippingCost, taxCost, serviceFee }: {
  shippingCost: number;
  taxCost: number;
  serviceFee: number;
}) {
  return (
    <BackgroundImage245>
      <TextBackgroundImage1 text="Shipping" text1={`$${shippingCost}`} />
      <TextBackgroundImage1 text="Estimated Taxes" text1={`$${taxCost}`} />
      <TextBackgroundImage1 text="Service Fees" text1={`$${serviceFee}`} />
    </BackgroundImage245>
  );
}

function SectionItems() {
  return (
    <BackgroundImage298 additionalClassNames={["h-px"]}>
      <div className="w-full h-px bg-slate-200"></div>
    </BackgroundImage298>
  );
}

function Text11({ total }: { total: number }) {
  return (
    <BackgroundImage298>
      <div className="box-border flex flex-row font-medium items-center justify-between leading-[0] not-italic p-0 relative text-black text-left text-nowrap w-full">
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
    </BackgroundImage298>
  );
}

function All({ productPrice, quantity, shippingCost, taxCost, serviceFee }: {
  productPrice: number;
  quantity: number;
  shippingCost: number;
  taxCost: number;
  serviceFee: number;
}) {
  const subtotal = productPrice * quantity;
  const total = subtotal + shippingCost + taxCost + serviceFee;
  
  return (
    <BackgroundImage245>
      <Options shippingCost={shippingCost} taxCost={taxCost} serviceFee={serviceFee} />
      <SectionItems />
      <Text11 total={total} />
    </BackgroundImage245>
  );
}

function Content1({ productImage, productName, productPrice, quantity, shippingCost, taxCost, serviceFee }: {
  productImage: string;
  productName: string;
  productPrice: number;
  quantity: number;
  shippingCost: number;
  taxCost: number;
  serviceFee: number;
}) {
  const subtotal = productPrice * quantity;
  
  return (
    <BackgroundImage96 additionalClassNames={["shrink-0", "w-full"]}>
      <div className="box-border flex flex-col gap-8 items-start justify-start p-6 relative w-full">
        <Product 
          productImage={productImage} 
          productName={productName} 
          totalPrice={subtotal}
        />
        <All 
          productPrice={productPrice}
          quantity={quantity}
          shippingCost={shippingCost}
          taxCost={taxCost}
          serviceFee={serviceFee}
        />
      </div>
    </BackgroundImage96>
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
        <g clipPath="url(#clip0_116_1163)" id="icon/info">
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
          <clipPath id="clip0_116_1163">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Product1() {
  return (
    <BackgroundImage298 additionalClassNames={["bg-slate-50", "rounded"]}>
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
    </BackgroundImage298>
  );
}

function Actions1({ onCompletePurchase }: { onCompletePurchase: () => void }) {
  return (
    <BackgroundImage96
      additionalClassNames={["bg-white", "shrink-0", "w-full"]}
    >
      <div className="box-border flex flex-col gap-1.5 items-start justify-start pb-6 pt-3 px-6 relative w-full">
        <ButtonBackgroundImageAndText 
          text="Complete Purchase"
          onClick={onCompletePurchase}
        />
        <Product1 />
      </div>
    </BackgroundImage96>
  );
}

function Modal({ onClose, onCompletePurchase, productImage, productName, productPrice, quantity, shippingCost, taxCost, serviceFee }: {
  onClose: () => void;
  onCompletePurchase: () => void;
  productImage: string;
  productName: string;
  productPrice: number;
  quantity: number;
  shippingCost: number;
  taxCost: number;
  serviceFee: number;
}) {
  return (
    <div
      className="bg-white relative rounded-xl shrink-0 w-[480px]"
      data-name="Modal"
    >
      <div className="box-border flex flex-col items-start justify-start overflow-clip p-0 relative w-[480px]">
        <Text7 onClose={onClose} />
        <Content1 
          productImage={productImage}
          productName={productName}
          productPrice={productPrice}
          quantity={quantity}
          shippingCost={shippingCost}
          taxCost={taxCost}
          serviceFee={serviceFee}
        />
        <Actions1 onCompletePurchase={onCompletePurchase} />
      </div>
      <div className="absolute border border-slate-50 inset-0 pointer-events-none rounded-xl shadow-sm" />
    </div>
  );
}

function Background({ onClose, onCompletePurchase, productImage, productName, productPrice, quantity, shippingCost, taxCost, serviceFee }: {
  onClose: () => void;
  onCompletePurchase: () => void;
  productImage: string;
  productName: string;
  productPrice: number;
  quantity: number;
  shippingCost: number;
  taxCost: number;
  serviceFee: number;
}) {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.5)] h-[1024px] left-0 top-0 w-[1440px]"
      data-name="Background"
      onClick={handleOverlayClick}
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border flex flex-row gap-2.5 h-[1024px] items-center justify-center p-[10px] relative w-[1440px]">
          <Modal
            onClose={onClose}
            onCompletePurchase={onCompletePurchase}
            productImage={productImage}
            productName={productName}
            productPrice={productPrice}
            quantity={quantity}
            shippingCost={shippingCost}
            taxCost={taxCost}
            serviceFee={serviceFee}
          />
        </div>
      </div>
    </div>
  );
}

export function OrderSummaryModal({
  isOpen,
  onClose,
  productName,
  productPrice,
  productImage,
  quantity = 1,
  shippingCost = 16,
  taxCost = 2,
  serviceFee = 2
}: OrderSummaryModalProps) {
  const handleCompletePurchase = () => {
    toast.success("Purchase completed! Your order is being processed.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <Background
        onClose={onClose}
        onCompletePurchase={handleCompletePurchase}
        productImage={productImage}
        productName={productName}
        productPrice={productPrice}
        quantity={quantity}
        shippingCost={shippingCost}
        taxCost={taxCost}
        serviceFee={serviceFee}
      />
    </div>
  );
}