import svgPaths from "./svg-ax3np156av";
import clsx from "clsx";
import imgImage from "figma:asset/f6b4606caf3f72f520d6e1147c88dded6a21d932.png";
import imgImage1 from "figma:asset/446366073728d966f17b0fa373f456b22e48603f.png";
import imgImage2 from "figma:asset/2c881a821d59de7adc715e03a2cb0bdcae96d9e2.png";
import imgImage3 from "figma:asset/6e4efb602de83ba81d065532203d6f1d1374a8ff.png";
import { imgGroup } from "./svg-hzbor";

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative size-full">
        {children}
      </div>
    </div>
  );
}

function VendorcardBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative rounded-xl shrink-0 w-[322px]">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[322px]">
        {children}
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}
type BackgroundImage74Props = {
  additionalClassNames?: string[];
};

function BackgroundImage74({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage74Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage59({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        {children}
      </svg>
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
    <div className={clsx("relative", additionalClassNames)}>
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
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
    <div className={clsx("relative", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function ProductBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-xl shrink-0 w-full">
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-[12px] relative w-full">
          {children}
        </div>
      </div>
    </div>
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
type TextBackgroundImage1Props = {
  text: string;
  text1: string;
};

function TextBackgroundImage1({ text, text1 }: TextBackgroundImage1Props) {
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
type TextBackgroundImageProps = {
  text: string;
  text1: string;
};

function TextBackgroundImage({ text, text1 }: TextBackgroundImageProps) {
  return (
    <BackgroundImage28 additionalClassNames={["shrink-0", "w-full"]}>
      <div className="box-border content-stretch flex flex-col items-start justify-start pb-2.5 pt-2 px-3 relative w-full">
        <div className="css-bv6qim font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[20px] text-gray-900 text-left text-nowrap tracking-[-0.1px]">
          <p className="adjustLetterSpacing block leading-[28px] whitespace-pre">
            {text}
          </p>
        </div>
        <div
          className="css-h70kcp font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-gray-600 text-left text-nowrap"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[24px] overflow-inherit">
            {text1}
          </p>
        </div>
        <BackgroundImage text="⭐ 4.8" text1="10 Products" />
      </div>
    </BackgroundImage28>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium items-start justify-between leading-[0] not-italic p-0 relative text-[12px] text-gray-900 text-left text-nowrap w-full">
        <div className="css-lqyxso overflow-ellipsis overflow-hidden relative shrink-0">
          <p className="[text-overflow:inherit] block leading-[20px] overflow-inherit text-nowrap whitespace-pre">
            {text}
          </p>
        </div>
        <div className="css-lqyxso overflow-ellipsis overflow-hidden relative shrink-0">
          <p className="[text-overflow:inherit] block leading-[20px] overflow-inherit text-[12px] text-nowrap whitespace-pre">
            {text1}
          </p>
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string[];
};

function BackgroundImageAndText({
  text,
  additionalClassNames = [],
}: BackgroundImageAndTextProps) {
  return (
    <div
      className={clsx(
        "box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative",
        additionalClassNames,
      )}
    >
      <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
};

function ButtonBackgroundImageAndText({
  text,
}: ButtonBackgroundImageAndTextProps) {
  return (
    <div className="bg-[#ffffff] relative rounded-md shrink-0">
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative">
          <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
            <p className="block leading-[24px] whitespace-pre">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[25px_25px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p314aef80}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div
      className="absolute left-[7.5px] overflow-clip size-[25px] top-[7.5px]"
      data-name="Frame"
    >
      <ClipPathGroup />
    </div>
  );
}

function PeerlyLogo() {
  return (
    <div
      className="bg-[#000000] overflow-clip relative rounded-[6.66667px] shrink-0 size-10"
      data-name="Peerly_Logo"
    >
      <Frame />
    </div>
  );
}

function PeerlyFullLogo() {
  return (
    <BackgroundImage44 additionalClassNames={["shrink-0"]}>
      <PeerlyLogo />
      <div className="css-yqdygo font-['Acme:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[48px] text-left text-nowrap">
        <p className="block leading-[48px] whitespace-pre">Peerly</p>
      </div>
    </BackgroundImage44>
  );
}

function IconSearch() {
  return (
    <BackgroundImage59>
      <g id="icon/search">
        <path
          d={svgPaths.p107a080}
          id="Vector"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M14 13.9999L11.1 11.0999"
          id="Vector_2"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
    </BackgroundImage59>
  );
}

function Field() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 w-full"
      data-name="field"
    >
      <div className="absolute border border-slate-300 border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start pl-3 pr-14 py-2 relative w-full">
          <IconSearch />
          <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
            <p className="block leading-[24px] whitespace-pre">Search Vendor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Default() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="default"
    >
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        <Field />
      </div>
    </div>
  );
}

function InputWithButton() {
  return (
    <div className="relative shrink-0" data-name="input/with button">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative">
        <Default />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0" data-name="input">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative">
        <InputWithButton />
      </div>
    </div>
  );
}

function IconShoppingCart() {
  return (
    <BackgroundImage59>
      <g clipPath="url(#clip0_28_7375)" id="icon/shopping-cart">
        <path
          d={svgPaths.p22b32180}
          id="Vector"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d={svgPaths.pceec000}
          id="Vector_2"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d={svgPaths.p20ac8380}
          id="Vector_3"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_28_7375">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </BackgroundImage59>
  );
}

function Button() {
  return (
    <BackgroundImage74 additionalClassNames={["rounded-[96px]"]}>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[12px] relative">
        <IconShoppingCart />
      </div>
    </BackgroundImage74>
  );
}

function Button2() {
  return (
    <BackgroundImage74 additionalClassNames={["bg-slate-900", "rounded-md"]}>
      <BackgroundImageAndText text="Start Selling" />
    </BackgroundImage74>
  );
}

function Action() {
  return (
    <div className="relative shrink-0" data-name="Action">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative">
        <Button />
        <ButtonBackgroundImageAndText text="Log In" />
        <Button2 />
      </div>
    </div>
  );
}

function NavHead() {
  return (
    <div
      className="bg-[#ffffff] h-24 relative rounded-[20px] shrink-0 w-full"
      data-name="Nav Head"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-24 items-center justify-between px-12 py-6 relative w-full">
          <PeerlyFullLogo />
          <Input />
          <Action />
        </div>
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] not-italic p-0 relative text-[#ffffff] text-left text-nowrap">
        <div className="css-e1wgyf font-['Inter:Extra_Bold',_sans-serif] font-extrabold relative shrink-0 text-[48px] tracking-[-0.576px]">
          <p className="adjustLetterSpacing block leading-[48px] text-nowrap whitespace-pre">
            Turn Your Products into Profits
          </p>
        </div>
        <div className="css-xoyyvm font-['Inter:Regular',_sans-serif] font-normal relative shrink-0 text-[16px]">
          <p className="block leading-[24px] text-nowrap whitespace-pre">
            Join thousands of sellers growing their business online. It’s free
            and easy to get started.
          </p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="bg-[#000000] h-[248px] relative rounded-3xl shrink-0 w-full"
      data-name="Content"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[248px] items-start justify-between p-[40px] relative w-full">
          <Text />
          <ButtonBackgroundImageAndText text="Start Selling" />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <BackgroundImage44
      additionalClassNames={["[grid-area:1_/_1]", "ml-0", "mt-0"]}
    >
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">View All</p>
      </div>
    </BackgroundImage44>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame3 />
    </div>
  );
}

function NavigationMenuItem() {
  return (
    <BackgroundImage28
      additionalClassNames={["bg-slate-100", "rounded-md", "shrink-0"]}
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-2 relative">
        <Group3 />
      </div>
    </BackgroundImage28>
  );
}

function Head() {
  return (
    <div className="relative shrink-0 w-full" data-name="Head">
      <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
        <div className="css-qro2gq font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[30px] text-left text-nowrap tracking-[-0.225px]">
          <p className="adjustLetterSpacing block leading-[36px] whitespace-pre">
            Vendor Spotlight
          </p>
        </div>
        <NavigationMenuItem />
      </div>
    </div>
  );
}

function VendorCard() {
  return (
    <VendorcardBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat h-[180px] shrink-0 w-full"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <TextBackgroundImage text="Vendor name" text1="Description" />
    </VendorcardBackgroundImage>
  );
}

function VendorCard1() {
  return (
    <VendorcardBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat h-[180px] shrink-0 w-full"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
      <TextBackgroundImage text="Vendor name" text1="Description" />
    </VendorcardBackgroundImage>
  );
}

function VendorCard2() {
  return (
    <VendorcardBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat h-[180px] shrink-0 w-full"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage2}')` }}
      />
      <TextBackgroundImage text="Vendor name" text1="Description" />
    </VendorcardBackgroundImage>
  );
}

function Vendors() {
  return (
    <div className="relative shrink-0 w-full" data-name="Vendors">
      <div className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative w-full">
        <VendorCard />
        <VendorCard1 />
        <VendorCard2 />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
        <VendorCard />
      </div>
    </div>
  );
}

function Indicator() {
  return (
    <div
      className="absolute bg-red-500 left-[1132px] rounded-[9.33333px] size-2 top-20"
      data-name="Indicator"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-0 py-[0.667px] relative size-2">
          <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[4px] text-left text-nowrap">
            <p className="block leading-[6.66667px] whitespace-pre">2</p>
          </div>
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

function Text9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-6 py-4 relative w-full">
          <div className="css-rk9qf8 font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-gray-900 text-left text-nowrap tracking-[-0.144px]">
            <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[32px] overflow-inherit whitespace-pre">
              Cart
            </p>
          </div>
          <IconX />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <ContainerBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-12"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage3}')` }}
      />
      <TextBackgroundImage1
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
        style={{ backgroundImage: `url('${imgImage3}')` }}
      />
      <TextBackgroundImage1
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
        style={{ backgroundImage: `url('${imgImage3}')` }}
      />
      <TextBackgroundImage1
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
    <div className="relative shrink-0 w-full" data-name="Carts">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <Product />
        <Product1 />
        <Product2 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div
      className="bg-slate-50 relative rounded-lg shrink-0 w-full"
      data-name="Text"
    >
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
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
      </div>
    </div>
  );
}

function Content1() {
  return (
    <BackgroundImage28 additionalClassNames={["shrink-0", "w-full"]}>
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[24px] relative w-full">
        <Carts />
        <Text13 />
      </div>
    </BackgroundImage28>
  );
}

function Button4() {
  return (
    <BackgroundImage74
      additionalClassNames={["bg-slate-900", "rounded-md", "w-full"]}
    >
      <BackgroundImageAndText
        text="Checkout"
        additionalClassNames={["w-full"]}
      />
    </BackgroundImage74>
  );
}

function Actions() {
  return (
    <BackgroundImage28
      additionalClassNames={["bg-[#ffffff]", "shrink-0", "w-full"]}
    >
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start pb-6 pt-3 px-6 relative w-full">
        <Button4 />
      </div>
    </BackgroundImage28>
  );
}

function Modal() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[920px] rounded-xl top-[140px] w-[480px]"
      data-name="Modal"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[480px]">
        <Text9 />
        <Content1 />
        <Actions />
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

export default function VendorsShowcase() {
  return (
    <BackgroundImage28 additionalClassNames={["bg-slate-50", "size-full"]}>
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[40px] relative size-full">
        <NavHead />
        <Content />
        <Head />
        <Vendors />
        <Indicator />
        <Modal />
      </div>
    </BackgroundImage28>
  );
}