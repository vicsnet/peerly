import clsx from "clsx";
import imgImage from "figma:asset/6e4efb602de83ba81d065532203d6f1d1374a8ff.png";
type BackgroundImage73Props = {
  additionalClassNames?: string[];
};

function BackgroundImage73({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage73Props>) {
  return (
    <div
      className={clsx(
        "flex flex-row items-center relative size-full",
        additionalClassNames,
      )}
    >
      {children}
    </div>
  );
}
type BackgroundImage57Props = {
  additionalClassNames?: string[];
};

function BackgroundImage57({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage57Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      {children}
    </div>
  );
}
type BackgroundImage41Props = {
  additionalClassNames?: string[];
};

function BackgroundImage41({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage41Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative size-full">
        {children}
      </div>
    </div>
  );
}

function ProductBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage57 additionalClassNames={["rounded-xl"]}>
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-[12px] relative w-full">
          {children}
        </div>
      </div>
    </BackgroundImage57>
  );
}
type RightBackgroundImageProps = {
  text: string;
  text1: string;
};

function RightBackgroundImage({ text, text1 }: RightBackgroundImageProps) {
  return (
    <div className="relative self-stretch shrink-0">
      <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full items-end justify-between leading-[0] not-italic p-0 relative text-[10px] text-left text-nowrap">
        <div className="css-4he1w3 flex flex-col justify-center relative shrink-0 text-red-500">
          <p className="block leading-[14px] text-nowrap whitespace-pre">
            {text}
          </p>
        </div>
        <div className="css-o4ypm7 flex flex-col justify-center relative shrink-0 text-gray-700">
          <p className="block leading-[14px] text-nowrap whitespace-pre">
            {text1}
          </p>
        </div>
      </div>
    </div>
  );
}
type TextBackgroundImageProps = {
  text: string;
  text1: string;
};

function TextBackgroundImage({ text, text1 }: TextBackgroundImageProps) {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col font-['Inter:Medium',_sans-serif] font-medium items-start justify-between leading-[0] not-italic p-0 relative size-full text-[#000000] text-left text-nowrap">
        <div
          className="css-9uomk2 min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[14px]"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[14px] overflow-inherit">
            {text}
          </p>
        </div>
        <div className="css-w9luqw relative shrink-0 text-[16px]">
          <p className="block leading-[24px] text-nowrap whitespace-pre">
            {text1}
          </p>
        </div>
      </div>
    </div>
  );
}

function IconX() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon/x">
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
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M6 6L18 18"
            id="Vector_2"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <BackgroundImage57>
      <div className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <BackgroundImage73>
        <div className="box-border content-stretch flex flex-row items-center justify-between px-6 py-4 relative w-full">
          <div className="css-rk9qf8 font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-gray-900 text-left text-nowrap tracking-[-0.144px]">
            <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[32px] overflow-inherit whitespace-pre">
              Cart
            </p>
          </div>
          <IconX />
        </div>
      </BackgroundImage73>
    </BackgroundImage57>
  );
}

function Container() {
  return (
    <ContainerBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-12"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <TextBackgroundImage
        text="Jordan 4 Retro White Cement (2025) *in hand size 15 men’s"
        text1="$120"
      />
    </ContainerBackgroundImage>
  );
}

function Product() {
  return (
    <ProductBackgroundImage>
      <Container />
      <RightBackgroundImage text="Remove" text1="Qty: 1" />
    </ProductBackgroundImage>
  );
}

function Container1() {
  return (
    <ContainerBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-12"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <TextBackgroundImage
        text="Nike Air Max 1 OG Anniversary (2023) *in hand size 12 men’s"
        text1="$150"
      />
    </ContainerBackgroundImage>
  );
}

function Product1() {
  return (
    <ProductBackgroundImage>
      <Container1 />
      <RightBackgroundImage text="Remove" text1="Qty: 1" />
    </ProductBackgroundImage>
  );
}

function Container2() {
  return (
    <ContainerBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-12"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <TextBackgroundImage
        text="Adidas Yeezy Boost 350 V2 Beluga Reflective (2024) *in hand size 11 men’s"
        text1="$220"
      />
    </ContainerBackgroundImage>
  );
}

function Product2() {
  return (
    <ProductBackgroundImage>
      <Container2 />
      <RightBackgroundImage text="Remove" text1="Qty: 1" />
    </ProductBackgroundImage>
  );
}

function Carts() {
  return (
    <BackgroundImage57>
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <Product />
        <Product1 />
        <Product2 />
      </div>
    </BackgroundImage57>
  );
}

function Text4() {
  return (
    <BackgroundImage57 additionalClassNames={["bg-slate-50", "rounded-lg"]}>
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-lg" />
      <BackgroundImage73>
        <div className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium items-center justify-between leading-[0] not-italic p-[8px] relative text-[#000000] text-left text-nowrap w-full">
          <div className="css-w9luqw relative shrink-0 text-[14px]">
            <p className="block leading-[20px] text-nowrap whitespace-pre">
              Total
            </p>
          </div>
          <div className="css-w9luqw relative shrink-0 text-[16px]">
            <p className="block leading-[24px] text-nowrap whitespace-pre">
              $520
            </p>
          </div>
        </div>
      </BackgroundImage73>
    </BackgroundImage57>
  );
}

function Content() {
  return (
    <BackgroundImage41>
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[24px] relative w-full">
        <Carts />
        <Text4 />
      </div>
    </BackgroundImage41>
  );
}

function Button() {
  return (
    <BackgroundImage57 additionalClassNames={["bg-slate-900", "rounded-md"]}>
      <BackgroundImage73 additionalClassNames={["justify-center"]}>
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full">
          <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Checkout</p>
          </div>
        </div>
      </BackgroundImage73>
    </BackgroundImage57>
  );
}

function Actions() {
  return (
    <BackgroundImage41 additionalClassNames={["bg-[#ffffff]"]}>
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start pb-6 pt-3 px-6 relative w-full">
        <Button />
      </div>
    </BackgroundImage41>
  );
}

export default function Modal() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl size-full"
      data-name="Modal"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <Text />
        <Content />
        <Actions />
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}