import svgPaths from "./svg-xuknvgqorg";
import clsx from "clsx";
import imgImage from "figma:asset/f6b4606caf3f72f520d6e1147c88dded6a21d932.png";
import imgImage1 from "figma:asset/446366073728d966f17b0fa373f456b22e48603f.png";
import imgImage2 from "figma:asset/2c881a821d59de7adc715e03a2cb0bdcae96d9e2.png";
import { imgGroup } from "./svg-iezfn";
type BackgroundImage90Props = {
  additionalClassNames?: string[];
};

function BackgroundImage90({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage90Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      {children}
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

function BackgroundImage60({ children }: React.PropsWithChildren<{}>) {
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
type BackgroundImage45Props = {
  additionalClassNames?: string[];
};

function BackgroundImage45({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage45Props>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage30({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center relative size-full">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative">
        {children}
      </div>
    </div>
  );
}
type BackgroundImage15Props = {
  additionalClassNames?: string[];
};

function BackgroundImage15({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage15Props>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}
type TextBackgroundImageProps = {
  text: string;
  text1: string;
};

function TextBackgroundImage({ text, text1 }: TextBackgroundImageProps) {
  return (
    <BackgroundImage15 additionalClassNames={["shrink-0", "w-full"]}>
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
    </BackgroundImage15>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <BackgroundImage90>
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
    </BackgroundImage90>
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
      <BackgroundImage30>
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
          <p className="block leading-[24px] whitespace-pre">{text}</p>
        </div>
      </BackgroundImage30>
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
    <BackgroundImage45 additionalClassNames={["shrink-0"]}>
      <PeerlyLogo />
      <div className="css-yqdygo font-['Acme:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[48px] text-left text-nowrap">
        <p className="block leading-[48px] whitespace-pre">Peerly</p>
      </div>
    </BackgroundImage45>
  );
}

function IconSearch() {
  return (
    <BackgroundImage60>
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
          d="M14 14L11.1 11.1"
          id="Vector_2"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
    </BackgroundImage60>
  );
}

function Field() {
  return (
    <BackgroundImage90 additionalClassNames={["bg-[#ffffff]", "rounded-md"]}>
      <div className="absolute border border-slate-300 border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start pl-3 pr-14 py-2 relative w-full">
          <IconSearch />
          <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
            <p className="block leading-[24px] whitespace-pre">Search Vendor</p>
          </div>
        </div>
      </div>
    </BackgroundImage90>
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
    <BackgroundImage60>
      <g clipPath="url(#clip0_2_554)" id="icon/shopping-cart">
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
          d={svgPaths.p3f9af840}
          id="Vector_3"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_554">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </BackgroundImage60>
  );
}

function Button() {
  return (
    <div className="relative rounded-[96px] shrink-0" data-name="button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[12px] relative">
          <IconShoppingCart />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div
      className="bg-slate-900 relative rounded-md shrink-0"
      data-name="button"
    >
      <BackgroundImage30>
        <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Start Selling</p>
        </div>
      </BackgroundImage30>
    </div>
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
    <BackgroundImage90
      additionalClassNames={["bg-[#ffffff]", "h-24", "rounded-[20px]"]}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-24 items-center justify-between px-12 py-6 relative w-full">
          <PeerlyFullLogo />
          <Input />
          <Action />
        </div>
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </BackgroundImage90>
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
    <BackgroundImage90
      additionalClassNames={["bg-[#000000]", "h-[248px]", "rounded-3xl"]}
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[248px] items-start justify-between p-[40px] relative w-full">
          <Text />
          <ButtonBackgroundImageAndText text="Start Selling" />
        </div>
      </div>
    </BackgroundImage90>
  );
}

function Frame3() {
  return (
    <BackgroundImage45
      additionalClassNames={["[grid-area:1_/_1]", "ml-0", "mt-0"]}
    >
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">View All</p>
      </div>
    </BackgroundImage45>
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
    <BackgroundImage15
      additionalClassNames={["bg-slate-100", "rounded-md", "shrink-0"]}
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-2 relative">
        <Group3 />
      </div>
    </BackgroundImage15>
  );
}

function Head() {
  return (
    <BackgroundImage90>
      <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
        <div className="css-qro2gq font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[30px] text-left text-nowrap tracking-[-0.225px]">
          <p className="adjustLetterSpacing block leading-[36px] whitespace-pre">
            Vendor Spotlight
          </p>
        </div>
        <NavigationMenuItem />
      </div>
    </BackgroundImage90>
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
    <BackgroundImage90>
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
    </BackgroundImage90>
  );
}

export default function VendorsShowcase() {
  return (
    <BackgroundImage15 additionalClassNames={["bg-slate-50", "size-full"]}>
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[40px] relative size-full">
        <NavHead />
        <Content />
        <Head />
        <Vendors />
      </div>
    </BackgroundImage15>
  );
}