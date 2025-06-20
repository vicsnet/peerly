import svgPaths from "./svg-bi1ja775vl";
import clsx from "clsx";
import imgImage from "figma:asset/6e4efb602de83ba81d065532203d6f1d1374a8ff.png";
type BackgroundImage61Props = {
  additionalClassNames?: string[];
};

function BackgroundImage61({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage61Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
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
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage29({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage61>
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
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
      <div className="box-border content-stretch flex flex-row items-center justify-between leading-[0] not-italic p-0 relative text-[#000000] text-[14px] text-left text-nowrap w-full">
        <div className="css-w9luqw font-['Inter:Regular',_sans-serif] font-normal relative shrink-0">
          <p className="block leading-[20px] text-nowrap whitespace-pre">
            {text}
          </p>
        </div>
        <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium relative shrink-0">
          <p className="block leading-[20px] text-nowrap whitespace-pre">
            {text1}
          </p>
        </div>
      </div>
    </BackgroundImage61>
  );
}

function IconX() {
  return (
    <BackgroundImage14>
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
    </BackgroundImage14>
  );
}

function Text() {
  return (
    <BackgroundImage61>
      <div className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-6 py-4 relative w-full">
          <div className="css-rk9qf8 font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-gray-900 text-left text-nowrap tracking-[-0.144px]">
            <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[32px] overflow-inherit whitespace-pre">
              Order summary
            </p>
          </div>
          <IconX />
        </div>
      </div>
    </BackgroundImage61>
  );
}

function Left() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Left"
    >
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-12"
          data-name="image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        />
        <div className="basis-0 css-9uomk2 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[14px] overflow-inherit">
            Jordan 4 Retro White Cement (2025) *in hand size 15 men’s
          </p>
        </div>
      </div>
    </div>
  );
}

function Product() {
  return (
    <div
      className="basis-0 bg-slate-50 grow h-[72px] min-h-px min-w-px relative rounded-xl shrink-0"
      data-name="Product"
    >
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-xl" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-[72px] items-center justify-start p-[12px] relative w-full">
          <Left />
          <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">$120</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconTrash2() {
  return (
    <BackgroundImage14>
      <g id="icon/trash-2">
        <path
          d="M3 6H21"
          id="Vector"
          stroke="var(--stroke-0, #64748B)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d={svgPaths.p23398000}
          id="Vector_2"
          stroke="var(--stroke-0, #64748B)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d={svgPaths.p129c5380}
          id="Vector_3"
          stroke="var(--stroke-0, #64748B)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M10 11V17"
          id="Vector_4"
          stroke="var(--stroke-0, #64748B)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14 11V17"
          id="Vector_5"
          stroke="var(--stroke-0, #64748B)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </BackgroundImage14>
  );
}

function WithAction() {
  return (
    <BackgroundImage61>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-full">
        <Product />
        <IconTrash2 />
      </div>
    </BackgroundImage61>
  );
}

function Carts() {
  return (
    <BackgroundImage61>
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        {[...Array(2).keys()].map((_, i) => (
          <WithAction key={i} />
        ))}
      </div>
    </BackgroundImage61>
  );
}

function Options() {
  return (
    <BackgroundImage29>
      <TextBackgroundImage text="Shipping" text1="$16" />
      <TextBackgroundImage text="Estimated Taxes" text1="$2" />
      <TextBackgroundImage text="Service Fees" text1="$2" />
    </BackgroundImage29>
  );
}

function SectionItems() {
  return (
    <BackgroundImage61 additionalClassNames={["h-0"]}>
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 432 1"
        >
          <g id="section items">
            <rect
              fill="white"
              height="0"
              transform="translate(0 1)"
              width="432"
            />
            <line
              id="Line 1"
              stroke="var(--stroke-0, #F1F5F9)"
              x2="432"
              y1="0.5"
              y2="0.5"
            />
          </g>
        </svg>
      </div>
    </BackgroundImage61>
  );
}

function Text4() {
  return (
    <BackgroundImage61>
      <div className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium items-center justify-between leading-[0] not-italic p-0 relative text-[#000000] text-left text-nowrap w-full">
        <div className="css-w9luqw relative shrink-0 text-[14px]">
          <p className="block leading-[20px] text-nowrap whitespace-pre">
            Total
          </p>
        </div>
        <div className="css-w9luqw relative shrink-0 text-[16px]">
          <p className="block leading-[24px] text-nowrap whitespace-pre">
            $260
          </p>
        </div>
      </div>
    </BackgroundImage61>
  );
}

function All() {
  return (
    <BackgroundImage29>
      <Options />
      <SectionItems />
      <Text4 />
    </BackgroundImage29>
  );
}

function Content() {
  return (
    <BackgroundImage44>
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[24px] relative w-full">
        <Carts />
        <All />
      </div>
    </BackgroundImage44>
  );
}

function Button() {
  return (
    <BackgroundImage61 additionalClassNames={["bg-slate-900", "rounded-md"]}>
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full">
          <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              Complete Purchase
            </p>
          </div>
        </div>
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
            stroke="var(--stroke-0, #374151)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 8V6"
            id="Vector_2"
            stroke="var(--stroke-0, #374151)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 4H6.005"
            id="Vector_3"
            stroke="var(--stroke-0, #374151)"
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
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center px-2 py-1 relative w-full">
          <IconInfo />
          <div className="basis-0 css-o4ypm7 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[10px] text-gray-700 text-left">
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

function Actions() {
  return (
    <BackgroundImage44 additionalClassNames={["bg-[#ffffff]"]}>
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start pb-6 pt-3 px-6 relative w-full">
        <Button />
        <Product2 />
      </div>
    </BackgroundImage44>
  );
}

function Modal() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl shrink-0 w-[480px]"
      data-name="Modal"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[480px]">
        <Text />
        <Content />
        <Actions />
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

export default function Background() {
  return (
    <div
      className="bg-[rgba(0,0,0,0.5)] relative size-full"
      data-name="Background"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[10px] relative size-full">
          <Modal />
        </div>
      </div>
    </div>
  );
}