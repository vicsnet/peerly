import svgPaths from "./svg-78ytt53uwy";
import clsx from "clsx";
import imgAvatar from "figma:asset/b6003b2bab7e9044a0cdcfa3a882b6ffae4c8ff0.png";
import imgImage from "figma:asset/6e4efb602de83ba81d065532203d6f1d1374a8ff.png";
import imgImage1 from "figma:asset/f405e12dc8c15ed1474c1318f47ca279ef375e1f.png";
import { imgGroup } from "./svg-zv5pu";
import Image from "next/image";
type BackgroundImage298Props = {
  additionalClassNames?: string[];
};

function BackgroundImage298({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage298Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      {children}
    </div>
  );
}
type HeaderBackgroundImageProps = {
  text: string;
};

function HeaderBackgroundImage({
  children,
  text,
}: React.PropsWithChildren<HeaderBackgroundImageProps>) {
  return (
    <BackgroundImage298>
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative w-full">
        <div className="css-lqyxso font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-left text-nowrap">
          <p className="[text-overflow:inherit] block leading-[28px] overflow-inherit whitespace-pre">
            {text}
          </p>
        </div>
      </div>
    </BackgroundImage298>
  );
}

function TextBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage298>
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage298>
  );
}

function InputwithbuttonBackgroundImage({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage298>
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage298>
  );
}

function BackgroundImage245({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage298>
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage298>
  );
}

function ProductcardBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-xl shrink-0 w-[322px]">
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[322px]">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage210({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-3">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage192({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage175({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage298>
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage298>
  );
}

function BackgroundImage160({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage144({ children }: React.PropsWithChildren<{}>) {
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
type BackgroundImage128Props = {
  additionalClassNames?: string[];
};

function BackgroundImage128({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage128Props>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}
type BackgroundImage112Props = {
  additionalClassNames?: string[];
};

function BackgroundImage112({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage112Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
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
    <div className={clsx("relative", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage81Props = {
  additionalClassNames?: string[];
};

function BackgroundImage81({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage81Props>) {
  return (
    <div
      className={clsx(
        "bg-[#ffffff] relative rounded-md shrink-0",
        additionalClassNames,
      )}
    >
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage66({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage298 additionalClassNames={["bg-[#ffffff]", "rounded-md"]}>
      <div className="absolute border border-slate-300 border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </BackgroundImage298>
  );
}

function FieldBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage66>
      <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-2 relative w-full">
        {children}
      </div>
    </BackgroundImage66>
  );
}

function ButtonBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage81>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative">
        {children}
      </div>
    </BackgroundImage81>
  );
}
type TabitemBackgroundImageProps = {
  additionalClassNames?: string[];
};

function TabitemBackgroundImage({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<TabitemBackgroundImageProps>) {
  return (
    <div className={clsx("relative rounded shrink-0", additionalClassNames)}>
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-3 py-1 relative">
          {children}
        </div>
      </div>
    </div>
  );
}
type ButtonBackgroundImageProps = {
  additionalClassNames?: string[];
};

function ButtonBackgroundImage({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<ButtonBackgroundImageProps>) {
  return (
    <div
      className={clsx(
        "absolute backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.3)] rounded-[4.5px] top-[292px]",
        additionalClassNames,
      )}
    >
      <div className="absolute border-[0.75px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4.5px]" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1.5 items-center justify-center p-[6px] relative">
          {children}
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
    <BackgroundImage298>
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
    </BackgroundImage298>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
};

function ButtonBackgroundImageAndText({
  text,
}: ButtonBackgroundImageAndTextProps) {
  return (
    <BackgroundImage112
      additionalClassNames={["bg-slate-900", "rounded-md", "w-full"]}
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full">
        <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">{text}</p>
        </div>
      </div>
    </BackgroundImage112>
  );
}
type FieldBackgroundImageAndTextProps = {
  text: string;
};

function FieldBackgroundImageAndText({
  text,
}: FieldBackgroundImageAndTextProps) {
  return (
    <BackgroundImage66>
      <div className="box-border content-stretch flex flex-row items-center justify-start px-3 py-2 relative w-full">
        <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
          <p className="block leading-[24px] whitespace-pre">{text}</p>
        </div>
      </div>
    </BackgroundImage66>
  );
}

function BackgroundImageAndText2({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="css-lqyxso font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-left text-nowrap">
      <p className="[text-overflow:inherit] block leading-[28px] overflow-inherit whitespace-pre">
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="css-rk9qf8 font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-gray-900 text-left text-nowrap tracking-[-0.144px]">
      <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[32px] overflow-inherit whitespace-pre">
        {text}
      </p>
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
        "css-lqyxso overflow-ellipsis overflow-hidden relative shrink-0 w-full",
        additionalClassNames,
      )}
    >
      <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[28px] overflow-inherit">
        {text}
      </p>
    </div>
  );
}
type TextBackgroundImageProps = {
  text: string;
  text1: string;
};

function TextBackgroundImage({ text, text1 }: TextBackgroundImageProps) {
  return (
    <BackgroundImage96 additionalClassNames={["shrink-0", "w-full"]}>
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-[4px] relative text-gray-900 text-left text-nowrap w-full">
        <BackgroundImageAndText
          text={text}
          additionalClassNames={[
            "font-['Inter:Regular',_sans-serif]",
            "font-normal",
            "text-[16px]",
          ]}
        />
        <BackgroundImageAndText
          text={text1}
          additionalClassNames={[
            "font-['Inter:Semi_Bold',_sans-serif]",
            "font-semibold",
            "text-[18px]",
          ]}
        />
      </div>
    </BackgroundImage96>
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
    <BackgroundImage128 additionalClassNames={["shrink-0"]}>
      <PeerlyLogo />
      <div className="css-yqdygo font-['Acme:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[48px] text-left text-nowrap">
        <p className="block leading-[48px] whitespace-pre">Peerly</p>
      </div>
    </BackgroundImage128>
  );
}

function IconSearch() {
  return (
    <BackgroundImage144>
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
          d="M13.9999 14L11.0999 11.1"
          id="Vector_2"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
    </BackgroundImage144>
  );
}

function Field() {
  return (
    <BackgroundImage66>
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start pl-3 pr-14 py-2 relative w-full">
        <IconSearch />
        <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
          <p className="block leading-[24px] whitespace-pre">Search Vendor</p>
        </div>
      </div>
    </BackgroundImage66>
  );
}

function Default() {
  return (
    <BackgroundImage160>
      <Field />
    </BackgroundImage160>
  );
}

function InputWithButton() {
  return (
    <BackgroundImage192>
      <Default />
    </BackgroundImage192>
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

function IconShoppingCart1() {
  return (
    <BackgroundImage144>
      <g clipPath="url(#clip0_116_1158)" id="icon/shopping-cart">
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
          d={svgPaths.p4cc4c60}
          id="Vector_3"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_116_1158">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </BackgroundImage144>
  );
}

function Button1() {
  return (
    <BackgroundImage112 additionalClassNames={["rounded-[96px]"]}>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[12px] relative">
        <IconShoppingCart1 />
      </div>
    </BackgroundImage112>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-10" data-name="avatar">
      <Image
        alt=''
        className="block max-w-none size-full"
        height="40"
        src={imgAvatar}
        width="40"
      />
    </div>
  );
}

function Action() {
  return (
    <div className="relative shrink-0" data-name="Action">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-end p-0 relative">
        <Button1 />
        <Avatar />
      </div>
    </div>
  );
}

function NavHead() {
  return (
    <BackgroundImage298
      additionalClassNames={["bg-[#ffffff]", "h-24", "rounded-[20px]"]}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-24 items-center justify-between px-10 py-6 relative w-full">
          <PeerlyFullLogo />
          <Input />
          <Action />
        </div>
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </BackgroundImage298>
  );
}

function IconArrowLeft() {
  return (
    <BackgroundImage144>
      <g id="icon/arrow-left">
        <path
          d="M12.6667 8H3.33333"
          id="Vector"
          stroke="var(--stroke-0, #0F172A)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p203476e0}
          id="Vector_2"
          stroke="var(--stroke-0, #0F172A)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage144>
  );
}

function MenuItem() {
  return (
    <div
      className="bg-slate-100 relative rounded-md shrink-0"
      data-name="menu item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
          <IconArrowLeft />
          <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
            <p className="block leading-[20px] whitespace-pre">
              Back to Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Images() {
  return (
    <BackgroundImage192>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-12"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-12"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-12"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-12"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-12"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-12"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
    </BackgroundImage192>
  );
}

function IconArrowLeft1() {
  return (
    <BackgroundImage210>
      <g id="icon/arrow-left">
        <path
          d="M9.5 6H2.5"
          id="Vector"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
        <path
          d="M6 9.5L2.5 6L6 2.5"
          id="Vector_2"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
      </g>
    </BackgroundImage210>
  );
}

function Button2() {
  return (
    <ButtonBackgroundImage additionalClassNames={["left-3"]}>
      <IconArrowLeft1 />
    </ButtonBackgroundImage>
  );
}

function IconArrowRight() {
  return (
    <BackgroundImage210>
      <g id="icon/arrow-right">
        <path
          d="M2.5 6H9.5"
          id="Vector"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
        <path
          d="M6 2.5L9.5 6L6 9.5"
          id="Vector_2"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.666667"
        />
      </g>
    </BackgroundImage210>
  );
}

function Button3() {
  return (
    <ButtonBackgroundImage additionalClassNames={["left-[292px]"]}>
      <IconArrowRight />
    </ButtonBackgroundImage>
  );
}

function Images1() {
  return (
    <div className="relative shrink-0" data-name="Images">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative">
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat rounded-xl shrink-0 size-[328px]"
          data-name="image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        />
        <Images />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function TabItem() {
  return (
    <TabitemBackgroundImage>
      <div className="css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">Details</p>
      </div>
    </TabitemBackgroundImage>
  );
}

function TabItem1() {
  return (
    <TabitemBackgroundImage additionalClassNames={["bg-[#ffffff]"]}>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Specification</p>
      </div>
    </TabitemBackgroundImage>
  );
}

function Tabs() {
  return (
    <div className="bg-slate-100 relative rounded-md shrink-0" data-name="tabs">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-[4px] relative">
          <TabItem />
          <TabItem1 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <BackgroundImage128
      additionalClassNames={["[grid-area:1_/_1]", "ml-0", "mt-0"]}
    >
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">See more</p>
      </div>
    </BackgroundImage128>
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
    <div
      className="absolute bg-slate-100 left-0 rounded-md top-[360px]"
      data-name="navigation menu item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-1.5 py-0.5 relative">
          <Group3 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="basis-0 grow h-96 min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <div className="box-border content-stretch flex flex-col gap-3 h-96 items-start justify-start overflow-clip p-0 relative w-full">
        <div
          className="css-fjw36m font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] min-w-full not-italic relative shrink-0 text-[24px] text-gray-900 text-left tracking-[-0.144px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[32px]">{`Jordan 4 Retro White Cement (2025) FV5029-100 Size 12 Men's`}</p>
        </div>
        <Tabs />
        <div
          className="css-odvum font-['Inter:Regular',_sans-serif] font-normal leading-[28px] min-w-full not-italic relative shrink-0 text-[20px] text-gray-900 text-left"
          style={{ width: "min-content" }}
        >
          <p className="block mb-0">SKU: FA203FS4OKRBQNAFAMZ</p>
          <p className="block mb-0">Product Line: Liangzai2021</p>
          <p className="block mb-0">Model: Sneakers</p>
          <p className="block mb-0">Production Country: China</p>
          <p className="block mb-0">Size (L x W x H cm): 28*18*10</p>
          <p className="block mb-0">Weight (kg): 0.75</p>
          <p className="block mb-0">Color: White</p>
          <p className="block">Main Material: N/A</p>
        </div>
        <NavigationMenuItem />
      </div>
    </div>
  );
}

function ProductCard() {
  return (
    <BackgroundImage298 additionalClassNames={["rounded-xl"]}>
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start overflow-clip p-0 relative w-full">
        <Images1 />
        <Text />
      </div>
    </BackgroundImage298>
  );
}

function ProductCard1() {
  return (
    <ProductcardBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat h-60 rounded-xl shrink-0 w-full"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <TextBackgroundImage
        text="Jordan 4 Retro White Cement (2025) FV5029-100 Size 12"
        text1="$20"
      />
    </ProductcardBackgroundImage>
  );
}

function ProductCard2() {
  return (
    <ProductcardBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat h-60 rounded-xl shrink-0 w-full"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage1}')` }}
      />
      <TextBackgroundImage
        text="Jordan 4 Retro White Cement (2025) FV5029-100 Size 12"
        text1="$20"
      />
    </ProductcardBackgroundImage>
  );
}

function Products() {
  return (
    <BackgroundImage298>
      <div className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative w-full">
        <ProductCard1 />
        <ProductCard2 />
      </div>
    </BackgroundImage298>
  );
}

function OtherProducts() {
  return (
    <BackgroundImage245>
      <div className="css-3ylxic font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[20px] text-left text-nowrap tracking-[-0.1px]">
        <p className="adjustLetterSpacing block leading-[28px] whitespace-pre">
          Other Products
        </p>
      </div>
      <Products />
    </BackgroundImage245>
  );
}

function Container() {
  return (
    <div
      className="relative self-stretch shrink-0 w-[796px]"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-6 h-full items-start justify-start p-0 relative w-[796px]">
        <MenuItem />
        <ProductCard />
        <OtherProducts />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-[540px]" data-name="Text">
      <div className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-6 py-4 relative w-[540px]">
          <BackgroundImageAndText1 text="Checkout" />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <BackgroundImage112
      additionalClassNames={["bg-[rgba(255,255,255,0)]", "rounded-md"]}
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0.5 py-0 relative">
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-left text-nowrap text-slate-900">
          <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[24px] text-[14px] whitespace-pre">
            Log In
          </p>
        </div>
      </div>
    </BackgroundImage112>
  );
}

function Header() {
  return (
    <BackgroundImage298>
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
        <BackgroundImageAndText2 text="Contact" />
        <Button4 />
      </div>
    </BackgroundImage298>
  );
}

function Default1() {
  return (
    <BackgroundImage160>
      <FieldBackgroundImageAndText text="Email address" />
    </BackgroundImage160>
  );
}

function InputWithButton1() {
  return (
    <InputwithbuttonBackgroundImage>
      <Default1 />
    </InputwithbuttonBackgroundImage>
  );
}

function Input1() {
  return (
    <BackgroundImage175>
      <InputWithButton1 />
    </BackgroundImage175>
  );
}

function Text4() {
  return (
    <TextBackgroundImage2>
      <Header />
      <Input1 />
    </TextBackgroundImage2>
  );
}

function IconMinus() {
  return (
    <BackgroundImage144>
      <g id="icon/minus">
        <path
          d="M3.33333 8H12.6667"
          id="Vector"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.886667"
        />
      </g>
    </BackgroundImage144>
  );
}

function Button5() {
  return (
    <ButtonBackgroundImage1>
      <IconMinus />
    </ButtonBackgroundImage1>
  );
}

function Button6() {
  return (
    <BackgroundImage81 additionalClassNames={["size-8"]}>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative size-8">
        <div className="css-w9luqw font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">1</p>
        </div>
      </div>
    </BackgroundImage81>
  );
}

function IconPlus() {
  return (
    <BackgroundImage144>
      <g id="icon/plus">
        <path
          d="M8 3.33333V12.6667"
          id="Vector"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d="M3.33333 8H12.6667"
          id="Vector_2"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
    </BackgroundImage144>
  );
}

function Button7() {
  return (
    <ButtonBackgroundImage1>
      <IconPlus />
    </ButtonBackgroundImage1>
  );
}

function Row() {
  return (
    <BackgroundImage192>
      <Button5 />
      <Button6 />
      <Button7 />
    </BackgroundImage192>
  );
}

function Text5() {
  return (
    <TextBackgroundImage2>
      <HeaderBackgroundImage text="Quantity" />
      <Row />
    </TextBackgroundImage2>
  );
}

function IconChevronDown() {
  return (
    <BackgroundImage210>
      <g id="icon/chevron-down">
        <path
          d="M3 4.5L6 7.5L9 4.5"
          id="Vector"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage210>
  );
}

function Field2() {
  return (
    <FieldBackgroundImage>
      <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
        <p className="block leading-[24px] whitespace-pre">
          Select your country
        </p>
      </div>
      <IconChevronDown />
    </FieldBackgroundImage>
  );
}

function Default2() {
  return (
    <BackgroundImage160>
      <Field2 />
    </BackgroundImage160>
  );
}

function InputWithButton2() {
  return (
    <InputwithbuttonBackgroundImage>
      <Default2 />
    </InputwithbuttonBackgroundImage>
  );
}

function Input2() {
  return (
    <BackgroundImage175>
      <InputWithButton2 />
    </BackgroundImage175>
  );
}

function Default3() {
  return (
    <BackgroundImage160>
      <FieldBackgroundImageAndText text="First name" />
    </BackgroundImage160>
  );
}

function InputWithButton3() {
  return (
    <InputwithbuttonBackgroundImage>
      <Default3 />
    </InputwithbuttonBackgroundImage>
  );
}

function Input3() {
  return (
    <BackgroundImage160>
      <InputWithButton3 />
    </BackgroundImage160>
  );
}

function Default4() {
  return (
    <BackgroundImage160>
      <FieldBackgroundImageAndText text="Last name" />
    </BackgroundImage160>
  );
}

function InputWithButton4() {
  return (
    <InputwithbuttonBackgroundImage>
      <Default4 />
    </InputwithbuttonBackgroundImage>
  );
}

function Input4() {
  return (
    <BackgroundImage160>
      <InputWithButton4 />
    </BackgroundImage160>
  );
}

function Name() {
  return (
    <BackgroundImage298>
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        <Input3 />
        <Input4 />
      </div>
    </BackgroundImage298>
  );
}

function Default5() {
  return (
    <BackgroundImage160>
      <FieldBackgroundImageAndText text="Address" />
    </BackgroundImage160>
  );
}

function InputWithButton5() {
  return (
    <InputwithbuttonBackgroundImage>
      <Default5 />
    </InputwithbuttonBackgroundImage>
  );
}

function Input5() {
  return (
    <BackgroundImage175>
      <InputWithButton5 />
    </BackgroundImage175>
  );
}

function Default6() {
  return (
    <BackgroundImage160>
      <FieldBackgroundImageAndText text="Apartment, suite, e.t.c (optional)" />
    </BackgroundImage160>
  );
}

function InputWithButton6() {
  return (
    <InputwithbuttonBackgroundImage>
      <Default6 />
    </InputwithbuttonBackgroundImage>
  );
}

function Input6() {
  return (
    <BackgroundImage175>
      <InputWithButton6 />
    </BackgroundImage175>
  );
}

function Default7() {
  return (
    <BackgroundImage160>
      <FieldBackgroundImageAndText text="City" />
    </BackgroundImage160>
  );
}

function InputWithButton7() {
  return (
    <InputwithbuttonBackgroundImage>
      <Default7 />
    </InputwithbuttonBackgroundImage>
  );
}

function Input7() {
  return (
    <BackgroundImage160>
      <InputWithButton7 />
    </BackgroundImage160>
  );
}

function Default8() {
  return (
    <BackgroundImage160>
      <FieldBackgroundImageAndText text="Postal code (optional)" />
    </BackgroundImage160>
  );
}

function InputWithButton8() {
  return (
    <InputwithbuttonBackgroundImage>
      <Default8 />
    </InputwithbuttonBackgroundImage>
  );
}

function Input8() {
  return (
    <BackgroundImage160>
      <InputWithButton8 />
    </BackgroundImage160>
  );
}

function Name1() {
  return (
    <BackgroundImage298>
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        <Input7 />
        <Input8 />
      </div>
    </BackgroundImage298>
  );
}

function IconHelpCircle() {
  return (
    <BackgroundImage210>
      <g clipPath="url(#clip0_116_1168)" id="icon/help-circle">
        <path
          d={svgPaths.p3e7757b0}
          id="Vector"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.6"
        />
        <path
          d={svgPaths.p33e91d40}
          id="Vector_2"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.6"
        />
        <path
          d="M6 8.5H6.005"
          id="Vector_3"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.6"
        />
      </g>
      <defs>
        <clipPath id="clip0_116_1168">
          <rect fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </BackgroundImage210>
  );
}

function Field9() {
  return (
    <FieldBackgroundImage>
      <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
        <p className="block leading-[24px] whitespace-pre">Phone number</p>
      </div>
      <IconHelpCircle />
    </FieldBackgroundImage>
  );
}

function Default9() {
  return (
    <BackgroundImage160>
      <Field9 />
    </BackgroundImage160>
  );
}

function InputWithButton9() {
  return (
    <InputwithbuttonBackgroundImage>
      <Default9 />
    </InputwithbuttonBackgroundImage>
  );
}

function Input9() {
  return (
    <BackgroundImage175>
      <InputWithButton9 />
    </BackgroundImage175>
  );
}

function Text6() {
  return (
    <TextBackgroundImage2>
      <HeaderBackgroundImage text="Delivery" />
      <Input2 />
      <Name />
      <Input5 />
      <Input6 />
      <Name1 />
      <Input9 />
    </TextBackgroundImage2>
  );
}

function Tooltip() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[183px] rounded-md shadow-[0px_2px_4px_0px_rgba(30,41,59,0.25)] top-[542px]"
      data-name="tooltip"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-[13px] py-[7px] relative">
          <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
            <p className="block leading-[20px] whitespace-pre">
              We only use this number for shipping purpose
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <BackgroundImage96 additionalClassNames={["shrink-0", "w-full"]}>
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start pb-40 pt-4 px-6 relative w-full">
        <Text4 />
        <Text5 />
        <Text6 />
        <Tooltip />
      </div>
    </BackgroundImage96>
  );
}

function Button9() {
  return (
    <BackgroundImage81 additionalClassNames={["w-full"]}>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full">
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
          <p className="block leading-[24px] whitespace-pre">Add to Cart</p>
        </div>
      </div>
    </BackgroundImage81>
  );
}

function Actions() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-0 left-0 w-[540px]"
      data-name="Actions"
    >
      <div className="absolute border-[1px_0px_0px] border-slate-100 border-solid inset-0 pointer-events-none" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start pb-6 pt-3 px-6 relative w-[540px]">
          <ButtonBackgroundImageAndText text="Buy Now" />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Checkout() {
  return (
    <div
      className="bg-[#ffffff] h-[808px] relative rounded-xl shrink-0 w-[540px]"
      data-name="Checkout"
    >
      <div className="box-border content-stretch flex flex-col h-[808px] items-start justify-start overflow-clip p-0 relative w-[540px]">
        <Text3 />
        <Content />
        <Actions />
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Container1() {
  return (
    <BackgroundImage298>
      <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative w-full">
        <Container />
        <Checkout />
      </div>
    </BackgroundImage298>
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

function Text7() {
  return (
    <BackgroundImage298>
      <div className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-6 py-4 relative w-full">
          <BackgroundImageAndText1 text="Order summary" />
          <IconX />
        </div>
      </div>
    </BackgroundImage298>
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
    <BackgroundImage298
      additionalClassNames={["bg-slate-50", "h-[72px]", "rounded-xl"]}
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
    </BackgroundImage298>
  );
}

function Options() {
  return (
    <BackgroundImage245>
      <TextBackgroundImage1 text="Shipping" text1="$16" />
      <TextBackgroundImage1 text="Estimated Taxes" text1="$2" />
      <TextBackgroundImage1 text="Service Fees" text1="$2" />
    </BackgroundImage245>
  );
}

function SectionItems() {
  return (
    <BackgroundImage298 additionalClassNames={["h-0"]}>
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
    </BackgroundImage298>
  );
}

function Text11() {
  return (
    <BackgroundImage298>
      <div className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium items-center justify-between leading-[0] not-italic p-0 relative text-[#000000] text-left text-nowrap w-full">
        <div className="css-w9luqw relative shrink-0 text-[14px]">
          <p className="block leading-[20px] text-nowrap whitespace-pre">
            Total
          </p>
        </div>
        <div className="css-w9luqw relative shrink-0 text-[16px]">
          <p className="block leading-[24px] text-nowrap whitespace-pre">
            $140
          </p>
        </div>
      </div>
    </BackgroundImage298>
  );
}

function All() {
  return (
    <BackgroundImage245>
      <Options />
      <SectionItems />
      <Text11 />
    </BackgroundImage245>
  );
}

function Content1() {
  return (
    <BackgroundImage96 additionalClassNames={["shrink-0", "w-full"]}>
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[24px] relative w-full">
        <Product />
        <All />
      </div>
    </BackgroundImage96>
  );
}

function IconInfo() {
  return (
    <BackgroundImage210>
      <g clipPath="url(#clip0_116_1163)" id="icon/info">
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
        <clipPath id="clip0_116_1163">
          <rect fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </BackgroundImage210>
  );
}

function Product1() {
  return (
    <BackgroundImage298 additionalClassNames={["bg-slate-50", "rounded"]}>
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
    </BackgroundImage298>
  );
}

function Actions1() {
  return (
    <BackgroundImage96
      additionalClassNames={["bg-[#ffffff]", "shrink-0", "w-full"]}
    >
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start pb-6 pt-3 px-6 relative w-full">
        <ButtonBackgroundImageAndText text="Complete Purchase" />
        <Product1 />
      </div>
    </BackgroundImage96>
  );
}

function Modal() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl shrink-0 w-[480px]"
      data-name="Modal"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[480px]">
        <Text7 />
        <Content1 />
        <Actions1 />
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Background() {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,0.5)] h-[1024px] left-0 top-0 w-[1440px]"
      data-name="Background"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-[1024px] items-center justify-center p-[10px] relative w-[1440px]">
          <Modal />
        </div>
      </div>
    </div>
  );
}

export default function ProductsShowcase() {
  return (
    <BackgroundImage96 additionalClassNames={["bg-slate-50", "size-full"]}>
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[40px] relative size-full">
        <NavHead />
        <Container1 />
        <Background />
      </div>
    </BackgroundImage96>
  );
}