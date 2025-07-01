import svgPaths from "./svg-uc7kkoydng";
import clsx from "clsx";
import imgAvatar from "figma:asset/b6003b2bab7e9044a0cdcfa3a882b6ffae4c8ff0.png";
import imgImage from "figma:asset/6e4efb602de83ba81d065532203d6f1d1374a8ff.png";
import { imgGroup } from "./svg-figqa";
import Image from "next/image";

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative size-full">
        {children}
      </div>
    </div>
  );
}

function TextBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative size-full">
        {children}
      </div>
    </div>
  );
}
type BackgroundImage89Props = {
  additionalClassNames?: string[];
};

function BackgroundImage89({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage89Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage73({ children }: React.PropsWithChildren<{}>) {
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

function BackgroundImage57({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative size-full">
      <div className="box-border content-stretch flex flex-row items-start justify-start px-2 py-1.5 relative">
        {children}
      </div>
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
    <div className={clsx("relative", additionalClassNames)}>
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function OrderproductBackgroundImage({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-2xl shrink-0 w-full">
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-between p-[24px] relative w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function NavigationmenuitemBackgroundImage({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-gray-100 relative rounded-md shrink-0">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-1.5 relative">
          {children}
        </div>
      </div>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
      <p className="block leading-[24px] whitespace-pre">{text}</p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <BackgroundImage41
      additionalClassNames={["[grid-area:1_/_1]", "ml-0", "mt-0"]}
    >
      <div className="css-odvum font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">{text}</p>
      </div>
    </BackgroundImage41>
  );
}
type MenubaritemBackgroundImageAndTextProps = {
  text: string;
};

function MenubaritemBackgroundImageAndText({
  text,
}: MenubaritemBackgroundImageAndTextProps) {
  return (
    <div className="relative shrink-0">
      <BackgroundImage57>
        <div className="css-qsgf2p font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-gray-500 text-left text-nowrap">
          <p className="block leading-[20px] whitespace-pre">{text}</p>
        </div>
      </BackgroundImage57>
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
    <BackgroundImage41 additionalClassNames={["shrink-0"]}>
      <PeerlyLogo />
      <div className="css-yqdygo font-['Acme:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[48px] text-left text-nowrap">
        <p className="block leading-[48px] whitespace-pre">Peerly</p>
      </div>
    </BackgroundImage41>
  );
}

function IconSearch() {
  return (
    <BackgroundImage73>
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
    </BackgroundImage73>
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
    <BackgroundImage89>
      <Default />
    </BackgroundImage89>
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
    <BackgroundImage73>
      <g clipPath="url(#clip0_137_655)" id="icon/shopping-cart">
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
          d={svgPaths.p34448940}
          id="Vector_3"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_137_655">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </BackgroundImage73>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[96px] shrink-0" data-name="button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[12px] relative">
          <IconShoppingCart1 />
        </div>
      </div>
    </div>
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
    <div
      className="bg-[#ffffff] h-24 relative rounded-[20px] shrink-0 w-full"
      data-name="Nav Head"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-24 items-center justify-between px-10 py-6 relative w-full">
          <PeerlyFullLogo />
          <Input />
          <Action />
        </div>
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function IconArrowLeft() {
  return (
    <BackgroundImage73>
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
    </BackgroundImage73>
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

function MenubarItem() {
  return (
    <div className="relative shrink-0" data-name="menubar item">
      <div className="absolute border-[#000000] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <BackgroundImage57>
        <div className="css-odvum font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-left text-nowrap">
          <p className="block leading-[20px] whitespace-pre">Pending</p>
        </div>
      </BackgroundImage57>
    </div>
  );
}

function SubMenubar() {
  return (
    <BackgroundImage89 additionalClassNames={["rounded-md"]}>
      <MenubarItem />
      <MenubaritemBackgroundImageAndText text="Completed" />
      <MenubaritemBackgroundImageAndText text="Cancelled" />
    </BackgroundImage89>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center pb-0 pt-4 px-6 relative w-full">
          <div className="css-rk9qf8 font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-gray-900 text-left text-nowrap tracking-[-0.144px]">
            <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[32px] overflow-inherit whitespace-pre">
              Orders
            </p>
          </div>
          <SubMenubar />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <BackgroundImageAndText text="In-transit" />
    </div>
  );
}

function NavigationMenuItem() {
  return (
    <NavigationmenuitemBackgroundImage>
      <Group3 />
    </NavigationmenuitemBackgroundImage>
  );
}

function Text1() {
  return (
    <TextBackgroundImage>
      <BackgroundImageAndText1 text="Jordan 4 Retro White Cement (2025) *in hand size 15 men’s" />
      <div className="css-3ylxic font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[20px] text-left text-nowrap tracking-[-0.1px]">
        <p className="adjustLetterSpacing block leading-[28px] whitespace-pre">
          $120
        </p>
      </div>
      <div className="css-o4ypm7 flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Qty: 1</p>
      </div>
      <NavigationMenuItem />
    </TextBackgroundImage>
  );
}

function Container() {
  return (
    <ContainerBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-[120px]"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <Text1 />
    </ContainerBackgroundImage>
  );
}

function OrderProduct() {
  return (
    <OrderproductBackgroundImage>
      <Container />
      <div className="css-98cyo3 flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">View Details</p>
      </div>
    </OrderproductBackgroundImage>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <BackgroundImageAndText text="Shipped" />
    </div>
  );
}

function NavigationMenuItem1() {
  return (
    <NavigationmenuitemBackgroundImage>
      <Group4 />
    </NavigationmenuitemBackgroundImage>
  );
}

function Text2() {
  return (
    <TextBackgroundImage>
      <BackgroundImageAndText1 text="Nike Air Max 97 OG Silver Bullet (2023) *in hand size 10 men’s" />
      <div className="css-3ylxic font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[20px] text-left text-nowrap tracking-[-0.1px]">
        <p className="adjustLetterSpacing block leading-[28px] whitespace-pre">
          $200
        </p>
      </div>
      <div className="css-o4ypm7 flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Qty: 2</p>
      </div>
      <NavigationMenuItem1 />
    </TextBackgroundImage>
  );
}

function Container1() {
  return (
    <ContainerBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-[120px]"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <Text2 />
    </ContainerBackgroundImage>
  );
}

function OrderProduct1() {
  return (
    <OrderproductBackgroundImage>
      <Container1 />
      <div className="css-98cyo3 flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">View Details</p>
      </div>
    </OrderproductBackgroundImage>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <BackgroundImageAndText text="Delivered" />
    </div>
  );
}

function NavigationMenuItem2() {
  return (
    <NavigationmenuitemBackgroundImage>
      <Group5 />
    </NavigationmenuitemBackgroundImage>
  );
}

function Text3() {
  return (
    <TextBackgroundImage>
      <BackgroundImageAndText1 text="Adidas Yeezy Boost 350 V2 Zebra (2022) *in hand size 11 men’s" />
      <div className="css-3ylxic font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[20px] text-left text-nowrap tracking-[-0.1px]">
        <p className="adjustLetterSpacing block leading-[28px] whitespace-pre">
          $250
        </p>
      </div>
      <div className="css-o4ypm7 flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-700 text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Qty: 1</p>
      </div>
      <NavigationMenuItem2 />
    </TextBackgroundImage>
  );
}

function Container2() {
  return (
    <ContainerBackgroundImage>
      <div
        className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-[120px]"
        data-name="image"
        style={{ backgroundImage: `url('${imgImage}')` }}
      />
      <Text3 />
    </ContainerBackgroundImage>
  );
}

function OrderProduct2() {
  return (
    <OrderproductBackgroundImage>
      <Container2 />
      <div className="css-98cyo3 flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">View Details</p>
      </div>
    </OrderproductBackgroundImage>
  );
}

function Container3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative size-full">
          <OrderProduct />
          <OrderProduct1 />
          <OrderProduct2 />
        </div>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-xl shrink-0 w-full"
      data-name="Modal"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <Text />
        <Container3 />
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

export default function Orders() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="Orders">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[40px] relative size-full">
          <NavHead />
          <MenuItem />
          <Modal />
        </div>
      </div>
    </div>
  );
}