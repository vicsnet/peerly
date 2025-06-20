import svgPaths from "./svg-tbgeefbezx";
import clsx from "clsx";
import imgAvatar from "figma:asset/b6003b2bab7e9044a0cdcfa3a882b6ffae4c8ff0.png";
import imgImage from "figma:asset/6e4efb602de83ba81d065532203d6f1d1374a8ff.png";
import imgIconJpeg from "figma:asset/01971d9e3f08c00bf48fe47fac92bfaf1c19a0ad.png";
import imgIconJpeg1 from "figma:asset/2799d4a125449779453f25b39daa66c6de88d515.png";
import imgCoinbaseIconPng from "figma:asset/c2ab0992ab80f1a96d7e985b4fc6533462550d4f.png";
import { imgGroup } from "./svg-bgzgd";
type BackgroundImage256Props = {
  additionalClassNames?: string[];
};

function BackgroundImage256({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage256Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      {children}
    </div>
  );
}

function BackgroundImage239({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage256>
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage256>
  );
}

function BackgroundImage223({ children }: React.PropsWithChildren<{}>) {
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
type BackgroundImage207Props = {
  additionalClassNames?: string[];
};

function BackgroundImage207({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage207Props>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function NameBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage256>
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage256>
  );
}

function BackgroundImage176({ children }: React.PropsWithChildren<{}>) {
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

function HeaderBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage256>
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage256>
  );
}

function TextBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage256>
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage256>
  );
}

function InputwithbuttonBackgroundImage({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage256>
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage256>
  );
}

function BackgroundImage115({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage256>
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage256>
  );
}

function BackgroundImage100({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage85({ children }: React.PropsWithChildren<{}>) {
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
type BackgroundImage70Props = {
  additionalClassNames?: string[];
};

function BackgroundImage70({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage70Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage55({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage256 additionalClassNames={["bg-[#ffffff]", "rounded-md"]}>
      <div className="absolute border border-slate-300 border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </BackgroundImage256>
  );
}

function BackgroundImage40({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center relative size-full">
      <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
        {children}
      </div>
    </div>
  );
}

function WalletBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-12 min-h-px min-w-px relative rounded-lg shrink-0">
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-lg" />
      <BackgroundImage40>{children}</BackgroundImage40>
    </div>
  );
}

function FieldBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage55>
      <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-2 relative w-full">
        {children}
      </div>
    </BackgroundImage55>
  );
}
type TextBackgroundImageProps = {
  text: string;
  text1: string;
};

function TextBackgroundImage({ text, text1 }: TextBackgroundImageProps) {
  return (
    <BackgroundImage256>
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
    </BackgroundImage256>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
};

function ButtonBackgroundImageAndText({
  text,
}: ButtonBackgroundImageAndTextProps) {
  return (
    <BackgroundImage70
      additionalClassNames={["bg-slate-900", "rounded-md", "w-full"]}
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full">
        <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">{text}</p>
        </div>
      </div>
    </BackgroundImage70>
  );
}
type FieldBackgroundImageAndTextProps = {
  text: string;
};

function FieldBackgroundImageAndText({
  text,
}: FieldBackgroundImageAndTextProps) {
  return (
    <BackgroundImage55>
      <div className="box-border content-stretch flex flex-row items-center justify-start px-3 py-2 relative w-full">
        <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
          <p className="block leading-[24px] whitespace-pre">{text}</p>
        </div>
      </div>
    </BackgroundImage55>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="css-lqyxso font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-left text-nowrap">
      <p className="[text-overflow:inherit] block leading-[28px] overflow-inherit whitespace-pre">
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="css-rk9qf8 font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-gray-900 text-left text-nowrap tracking-[-0.144px]">
      <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[32px] overflow-inherit whitespace-pre">
        {text}
      </p>
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
    <div className="relative shrink-0" data-name="Peerly Full Logo">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <PeerlyLogo />
        <div className="css-yqdygo font-['Acme:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[48px] text-left text-nowrap">
          <p className="block leading-[48px] whitespace-pre">Peerly</p>
        </div>
      </div>
    </div>
  );
}

function IconSearch() {
  return (
    <BackgroundImage85>
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
          d={svgPaths.pc9d8c00}
          id="Vector_2"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
    </BackgroundImage85>
  );
}

function Field() {
  return (
    <BackgroundImage55>
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start pl-3 pr-14 py-2 relative w-full">
        <IconSearch />
        <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
          <p className="block leading-[24px] whitespace-pre">Search Vendor</p>
        </div>
      </div>
    </BackgroundImage55>
  );
}

function Default() {
  return (
    <BackgroundImage100>
      <Field />
    </BackgroundImage100>
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
    <BackgroundImage85>
      <g clipPath="url(#clip0_30_8473)" id="icon/shopping-cart">
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
        <clipPath id="clip0_30_8473">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </BackgroundImage85>
  );
}

function Button() {
  return (
    <BackgroundImage70 additionalClassNames={["rounded-[96px]"]}>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[12px] relative">
        <IconShoppingCart />
      </div>
    </BackgroundImage70>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-10" data-name="avatar">
      <img
        alt
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
        <Button />
        <Avatar />
      </div>
    </div>
  );
}

function NavHead() {
  return (
    <BackgroundImage256
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
    </BackgroundImage256>
  );
}

function IconArrowLeft() {
  return (
    <BackgroundImage85>
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
    </BackgroundImage85>
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
            <p className="block leading-[20px] whitespace-pre">Back</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative size-full text-left text-nowrap">
        <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#000000] text-[16px]">
          <p className="block leading-[24px] text-nowrap whitespace-pre">
            Jordan 4 Retro White Cement (2025) *in hand size 15 men’s
          </p>
        </div>
        <div className="css-3ylxic font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#000000] text-[20px] tracking-[-0.1px]">
          <p className="adjustLetterSpacing block leading-[28px] text-nowrap whitespace-pre">
            $120
          </p>
        </div>
        <div className="css-o4ypm7 flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center relative shrink-0 text-[14px] text-gray-700">
          <p className="block leading-[14px] text-nowrap whitespace-pre">
            Qty: 1
          </p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative size-full">
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-[120px]"
          data-name="image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        />
        <Text />
      </div>
    </div>
  );
}

function CartProduct() {
  return (
    <BackgroundImage256 additionalClassNames={["rounded-2xl"]}>
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-between p-[24px] relative w-full">
          <Container />
          <div className="css-4he1w3 flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-left text-nowrap text-red-500">
            <p className="block leading-[14px] whitespace-pre">Remove</p>
          </div>
        </div>
      </div>
    </BackgroundImage256>
  );
}

function Container2() {
  return (
    <div
      className="relative self-stretch shrink-0 w-[796px]"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-6 h-full items-start justify-start p-0 relative w-[796px]">
        <MenuItem />
        {[...Array(2).keys()].map((_, i) => (
          <CartProduct key={i} />
        ))}
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-[540px]" data-name="Text">
      <div className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-6 py-4 relative w-[540px]">
          <BackgroundImageAndText text="Checkout" />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <BackgroundImage70
      additionalClassNames={["bg-[rgba(255,255,255,0)]", "rounded-md"]}
    >
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-0.5 py-0 relative">
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-left text-nowrap text-slate-900">
          <p className="[text-decoration-line:underline] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[24px] text-[14px] whitespace-pre">
            Log In
          </p>
        </div>
      </div>
    </BackgroundImage70>
  );
}

function Header() {
  return (
    <BackgroundImage256>
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
        <BackgroundImageAndText1 text="Contact" />
        <Button1 />
      </div>
    </BackgroundImage256>
  );
}

function Default1() {
  return (
    <BackgroundImage100>
      <FieldBackgroundImageAndText text="Email address" />
    </BackgroundImage100>
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
    <BackgroundImage115>
      <InputWithButton1 />
    </BackgroundImage115>
  );
}

function Text3() {
  return (
    <TextBackgroundImage1>
      <Header />
      <Input1 />
    </TextBackgroundImage1>
  );
}

function Header1() {
  return (
    <HeaderBackgroundImage>
      <BackgroundImageAndText1 text="Delivery" />
    </HeaderBackgroundImage>
  );
}

function IconChevronDown() {
  return (
    <BackgroundImage176>
      <g id="icon/chevron-down">
        <path
          d="M3 4.5L6 7.5L9 4.5"
          id="Vector"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage176>
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
    <BackgroundImage100>
      <Field2 />
    </BackgroundImage100>
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
    <BackgroundImage115>
      <InputWithButton2 />
    </BackgroundImage115>
  );
}

function Default3() {
  return (
    <BackgroundImage100>
      <FieldBackgroundImageAndText text="First name" />
    </BackgroundImage100>
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
    <BackgroundImage100>
      <InputWithButton3 />
    </BackgroundImage100>
  );
}

function Default4() {
  return (
    <BackgroundImage100>
      <FieldBackgroundImageAndText text="Last name" />
    </BackgroundImage100>
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
    <BackgroundImage100>
      <InputWithButton4 />
    </BackgroundImage100>
  );
}

function Name() {
  return (
    <NameBackgroundImage>
      <Input3 />
      <Input4 />
    </NameBackgroundImage>
  );
}

function Default5() {
  return (
    <BackgroundImage100>
      <FieldBackgroundImageAndText text="Address" />
    </BackgroundImage100>
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
    <BackgroundImage115>
      <InputWithButton5 />
    </BackgroundImage115>
  );
}

function Default6() {
  return (
    <BackgroundImage100>
      <FieldBackgroundImageAndText text="Apartment, suite, e.t.c (optional)" />
    </BackgroundImage100>
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
    <BackgroundImage115>
      <InputWithButton6 />
    </BackgroundImage115>
  );
}

function Default7() {
  return (
    <BackgroundImage100>
      <FieldBackgroundImageAndText text="City" />
    </BackgroundImage100>
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
    <BackgroundImage100>
      <InputWithButton7 />
    </BackgroundImage100>
  );
}

function Default8() {
  return (
    <BackgroundImage100>
      <FieldBackgroundImageAndText text="Postal code (optional)" />
    </BackgroundImage100>
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
    <BackgroundImage100>
      <InputWithButton8 />
    </BackgroundImage100>
  );
}

function Name1() {
  return (
    <NameBackgroundImage>
      <Input7 />
      <Input8 />
    </NameBackgroundImage>
  );
}

function IconHelpCircle() {
  return (
    <BackgroundImage176>
      <g clipPath="url(#clip0_30_8448)" id="icon/help-circle">
        <path
          d={svgPaths.p3e7757b0}
          id="Vector"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.6"
        />
        <path
          d={svgPaths.p2bfa7bc0}
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
        <clipPath id="clip0_30_8448">
          <rect fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </BackgroundImage176>
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
    <BackgroundImage100>
      <Field9 />
    </BackgroundImage100>
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
    <BackgroundImage115>
      <InputWithButton9 />
    </BackgroundImage115>
  );
}

function Text4() {
  return (
    <TextBackgroundImage1>
      <Header1 />
      <Input2 />
      <Name />
      <Input5 />
      <Input6 />
      <Name1 />
      <Input9 />
    </TextBackgroundImage1>
  );
}

function Header2() {
  return (
    <HeaderBackgroundImage>
      <BackgroundImageAndText1 text="Payment Methods" />
    </HeaderBackgroundImage>
  );
}

function Wallet() {
  return (
    <WalletBackgroundImage>
      <div
        className="bg-[50%_50%] bg-contain bg-no-repeat rounded shrink-0 size-6"
        data-name="Icon.jpeg"
        style={{ backgroundImage: `url('${imgIconJpeg}')` }}
      />
      <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Metamask</p>
      </div>
    </WalletBackgroundImage>
  );
}

function Wallet1() {
  return (
    <WalletBackgroundImage>
      <div
        className="bg-[50%_50%] bg-contain bg-no-repeat rounded shrink-0 size-6"
        data-name="Icon.jpeg"
        style={{ backgroundImage: `url('${imgIconJpeg1}')` }}
      />
      <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Phantom</p>
      </div>
    </WalletBackgroundImage>
  );
}

function Wallet2() {
  return (
    <WalletBackgroundImage>
      <div
        className="bg-[50%_50%] bg-contain bg-no-repeat rounded shrink-0 size-6"
        data-name="coinbase_icon.png"
        style={{ backgroundImage: `url('${imgCoinbaseIconPng}')` }}
      />
      <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Coinbase</p>
      </div>
    </WalletBackgroundImage>
  );
}

function Wallets() {
  return (
    <BackgroundImage256>
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <Wallet />
        <Wallet1 />
        <Wallet2 />
      </div>
    </BackgroundImage256>
  );
}

function Wallet3() {
  return (
    <BackgroundImage256 additionalClassNames={["h-12", "rounded-lg"]}>
      <BackgroundImage40>
        <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
          <p className="block leading-[14px] whitespace-pre">Other Wallets</p>
        </div>
      </BackgroundImage40>
    </BackgroundImage256>
  );
}

function Text5() {
  return (
    <TextBackgroundImage1>
      <Header2 />
      <Wallets />
      <Wallet3 />
    </TextBackgroundImage1>
  );
}

function Content() {
  return (
    <BackgroundImage207 additionalClassNames={["shrink-0", "w-full"]}>
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start px-6 py-4 relative w-full">
        <Text3 />
        <Text4 />
        <Text5 />
      </div>
    </BackgroundImage207>
  );
}

function Button3() {
  return (
    <BackgroundImage256 additionalClassNames={["bg-[#ffffff]", "rounded-md"]}>
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full">
          <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
            <p className="block leading-[24px] whitespace-pre">Add to Cart</p>
          </div>
        </div>
      </div>
    </BackgroundImage256>
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
          <Button3 />
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
        <Text2 />
        <Content />
        <Actions />
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Container3() {
  return (
    <BackgroundImage256>
      <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative w-full">
        <Container2 />
        <Checkout />
      </div>
    </BackgroundImage256>
  );
}

function IconX() {
  return (
    <BackgroundImage223>
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
    </BackgroundImage223>
  );
}

function Text6() {
  return (
    <BackgroundImage256>
      <div className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-6 py-4 relative w-full">
          <BackgroundImageAndText text="Order summary" />
          <IconX />
        </div>
      </div>
    </BackgroundImage256>
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
    <BackgroundImage223>
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
    </BackgroundImage223>
  );
}

function WithAction() {
  return (
    <BackgroundImage256>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative w-full">
        <Product />
        <IconTrash2 />
      </div>
    </BackgroundImage256>
  );
}

function Carts() {
  return (
    <BackgroundImage256>
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        {[...Array(2).keys()].map((_, i) => (
          <WithAction key={i} />
        ))}
      </div>
    </BackgroundImage256>
  );
}

function Options() {
  return (
    <BackgroundImage239>
      <TextBackgroundImage text="Shipping" text1="$16" />
      <TextBackgroundImage text="Estimated Taxes" text1="$2" />
      <TextBackgroundImage text="Service Fees" text1="$2" />
    </BackgroundImage239>
  );
}

function SectionItems() {
  return (
    <BackgroundImage256 additionalClassNames={["h-0"]}>
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
    </BackgroundImage256>
  );
}

function Text10() {
  return (
    <BackgroundImage256>
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
    </BackgroundImage256>
  );
}

function All() {
  return (
    <BackgroundImage239>
      <Options />
      <SectionItems />
      <Text10 />
    </BackgroundImage239>
  );
}

function Content1() {
  return (
    <BackgroundImage207 additionalClassNames={["shrink-0", "w-full"]}>
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[24px] relative w-full">
        <Carts />
        <All />
      </div>
    </BackgroundImage207>
  );
}

function IconInfo() {
  return (
    <BackgroundImage176>
      <g clipPath="url(#clip0_30_8460)" id="icon/info">
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
        <clipPath id="clip0_30_8460">
          <rect fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </BackgroundImage176>
  );
}

function Product2() {
  return (
    <BackgroundImage256 additionalClassNames={["bg-slate-50", "rounded"]}>
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
    </BackgroundImage256>
  );
}

function Actions1() {
  return (
    <BackgroundImage207
      additionalClassNames={["bg-[#ffffff]", "shrink-0", "w-full"]}
    >
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start pb-6 pt-3 px-6 relative w-full">
        <ButtonBackgroundImageAndText text="Complete Purchase" />
        <Product2 />
      </div>
    </BackgroundImage207>
  );
}

function Modal() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl shrink-0 w-[480px]"
      data-name="Modal"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[480px]">
        <Text6 />
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

export default function Checkout1() {
  return (
    <BackgroundImage207 additionalClassNames={["bg-slate-50", "size-full"]}>
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[40px] relative size-full">
        <NavHead />
        <Container3 />
        <Background />
      </div>
    </BackgroundImage207>
  );
}