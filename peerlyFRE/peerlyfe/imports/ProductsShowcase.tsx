import svgPaths from "./svg-874yivtwjf";
import clsx from "clsx";
import imgAvatar from "figma:asset/b6003b2bab7e9044a0cdcfa3a882b6ffae4c8ff0.png";
import imgAvatar1 from "figma:asset/736cb115ec106be6d83ed7f4df294363af5d6c6d.png";
import imgImage from "figma:asset/6e4efb602de83ba81d065532203d6f1d1374a8ff.png";
import imgImage1 from "figma:asset/f405e12dc8c15ed1474c1318f47ca279ef375e1f.png";
import { imgGroup } from "./svg-undys";
import Image from "next/image";
type BackgroundImage102Props = {
  additionalClassNames?: string[];
};

function BackgroundImage102({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage102Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      {children}
    </div>
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

function BackgroundImage72({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage102>
      <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage102>
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
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage42({ children }: React.PropsWithChildren<{}>) {
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
type BackgroundImage27Props = {
  additionalClassNames?: string[];
};

function BackgroundImage27({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage27Props>) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function ButtonBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[96px] shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[12px] relative">
          {children}
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
      style={{ width: "min-content" }}
      className={clsx(
        "css-lqyxso min-w-full overflow-ellipsis overflow-hidden relative shrink-0",
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
    <BackgroundImage27 additionalClassNames={["shrink-0", "w-full"]}>
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
    </BackgroundImage27>
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
    <BackgroundImage42>
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
    </BackgroundImage42>
  );
}

function Field() {
  return (
    <BackgroundImage102 additionalClassNames={["bg-[#ffffff]", "rounded-md"]}>
      <div className="absolute border border-slate-300 border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start pl-3 pr-14 py-2 relative w-full">
          <IconSearch />
          <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
            <p className="block leading-[24px] whitespace-pre">Search Vendor</p>
          </div>
        </div>
      </div>
    </BackgroundImage102>
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
    <BackgroundImage42>
      <g clipPath="url(#clip0_11_525)" id="icon/shopping-cart">
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
        <clipPath id="clip0_11_525">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </BackgroundImage42>
  );
}

function Button() {
  return (
    <ButtonBackgroundImage>
      <IconShoppingCart />
    </ButtonBackgroundImage>
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
        <Button />
        <Avatar />
      </div>
    </div>
  );
}

function NavHead() {
  return (
    <BackgroundImage102
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
    </BackgroundImage102>
  );
}

function IconArrowLeft() {
  return (
    <BackgroundImage42>
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
    </BackgroundImage42>
  );
}

function MenuItem() {
  return (
    <BackgroundImage57 additionalClassNames={["bg-slate-100", "rounded-md"]}>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative">
        <IconArrowLeft />
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
          <p className="block leading-[20px] whitespace-pre">Back to Vendors</p>
        </div>
      </div>
    </BackgroundImage57>
  );
}

function Avatar1() {
  return (
    <div className="relative shrink-0 size-[120px]" data-name="avatar">
      <Image
        alt=''
        className="block max-w-none size-full"
        height="120"
        src={imgAvatar1}
        width="120"
      />
    </div>
  );
}

function Text() {
  return (
    <BackgroundImage102>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <div className="css-ukhhst font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-left w-[600px]">
          <p className="block leading-[24px]">
            A fully-onchain, ultra-large, hybrid collection.
          </p>
        </div>
      </div>
    </BackgroundImage102>
  );
}

function Head() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Head"
    >
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <div className="css-qro2gq font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[30px] text-left text-nowrap tracking-[-0.225px]">
          <p className="adjustLetterSpacing block leading-[36px] whitespace-pre">
            Vendor name
          </p>
        </div>
        <Text />
      </div>
    </div>
  );
}

function Header() {
  return (
    <BackgroundImage72>
      <Avatar1 />
      <Head />
    </BackgroundImage72>
  );
}

function IconShoppingCart1() {
  return (
    <BackgroundImage42>
      <g clipPath="url(#clip0_11_517)" id="icon/shopping-cart">
        <path
          d={svgPaths.p22b32180}
          id="Vector"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d={svgPaths.pceec000}
          id="Vector_2"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d={svgPaths.pedfc580}
          id="Vector_3"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_11_517">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </BackgroundImage42>
  );
}

function Button1() {
  return (
    <ButtonBackgroundImage>
      <IconShoppingCart1 />
    </ButtonBackgroundImage>
  );
}

function Text1() {
  return (
    <BackgroundImage57 additionalClassNames={["bg-gray-900", "h-16", "w-full"]}>
      <div className="box-border content-stretch flex flex-row h-16 items-center justify-between px-3 py-1 relative w-full">
        <div className="css-7drwq0 font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[20px] text-left text-nowrap tracking-[-0.1px]">
          <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[28px] overflow-inherit whitespace-pre">
            Buy Now
          </p>
        </div>
        <Button1 />
      </div>
    </BackgroundImage57>
  );
}

function ProductCard() {
  return (
    <ProductcardBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat h-60 shrink-0 w-full"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <Text1 />
    </ProductcardBackgroundImage>
  );
}

function ProductCard1() {
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

function ProductCard2() {
  return (
    <ProductcardBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat h-60 rounded-xl shrink-0 w-full"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <TextBackgroundImage
        text="Nike Air Max 1 OG Red (2023) DM0026-100 Size 10"
        text1="$150"
      />
    </ProductcardBackgroundImage>
  );
}

function ProductCard3() {
  return (
    <ProductcardBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat h-60 rounded-xl shrink-0 w-full"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <TextBackgroundImage
        text="Adidas Yeezy Boost 350 V2 Zebra (2022) HQ6966 Size 11"
        text1="$230"
      />
    </ProductcardBackgroundImage>
  );
}

function ProductCard4() {
  return (
    <ProductcardBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat h-60 rounded-xl shrink-0 w-full"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <TextBackgroundImage
        text="Puma Suede Classic Black (2021) 365659-01 Size 9"
        text1="$80"
      />
    </ProductcardBackgroundImage>
  );
}

function Products() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Products"
    >
      <div className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative w-full">
        <ProductCard />
        <ProductCard1 />
        <ProductCard2 />
        <ProductCard3 />
        <ProductCard4 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <BackgroundImage102>
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start leading-[0] not-italic p-0 relative text-[20px] text-gray-900 text-left text-nowrap w-full">
        <div
          className="css-co9bdk font-['Inter:Semi_Bold',_sans-serif] font-semibold min-w-full overflow-ellipsis overflow-hidden relative shrink-0 tracking-[-0.1px]"
          style={{ width: "min-content" }}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] adjustLetterSpacing block leading-[28px] overflow-inherit">
            All Categories
          </p>
        </div>
        <div className="css-odvum font-['Inter:Regular',_sans-serif] font-normal relative shrink-0">
          <p className="block leading-[28px] text-nowrap whitespace-pre">
            Digital Products
          </p>
        </div>
        <div className="css-odvum font-['Inter:Regular',_sans-serif] font-normal relative shrink-0">
          <p className="block leading-[28px] text-nowrap whitespace-pre">
            Physical Products
          </p>
        </div>
      </div>
    </BackgroundImage102>
  );
}

function ProductCard5() {
  return (
    <div
      className="bg-[#ffffff] h-[632px] relative rounded-xl shrink-0 w-[322px]"
      data-name="Product Card"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col h-[632px] items-start justify-start p-[24px] relative w-[322px]">
          <Text6 />
        </div>
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Container() {
  return (
    <BackgroundImage72>
      <Products />
      <ProductCard5 />
    </BackgroundImage72>
  );
}

export default function ProductsShowcase() {
  return (
    <BackgroundImage27 additionalClassNames={["bg-slate-50", "size-full"]}>
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[40px] relative size-full">
        <NavHead />
        <MenuItem />
        <Header />
        <Container />
      </div>
    </BackgroundImage27>
  );
}