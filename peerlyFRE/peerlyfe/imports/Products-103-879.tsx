import svgPaths from "./svg-m5yu69vgt8";
import clsx from "clsx";
import imgAvatar from "figma:asset/5bee9393a6a3a30c7f2cff6dab100b8b77601184.png";
import imgImage from "figma:asset/7c2adc967f10134690ea8a0ad1db846ffa420dae.png";
import { imgGroup } from "./svg-b7z4x";
import Image from "next/image";

function BackgroundImage146({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="css-co9bdk font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-gray-900 text-left text-nowrap tracking-[-0.1px]">
      <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[28px] overflow-inherit whitespace-pre">
        {children}
      </p>
    </div>
  );
}

function BackgroundImage130({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage114({ children }: React.PropsWithChildren<{}>) {
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

function BackgroundImage98({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </div>
  );
}
type BackgroundImage82Props = {
  additionalClassNames?: string[];
};

function BackgroundImage82({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage82Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage67({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative rounded-md shrink-0">
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function ButtonBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage67>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative">
        {children}
      </div>
    </BackgroundImage67>
  );
}

function NavigationmenuitemBackgroundImage({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage82 additionalClassNames={["bg-green-100", "rounded-md"]}>
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-1.5 relative">
        {children}
      </div>
    </BackgroundImage82>
  );
}
type MenuitemBackgroundImageProps = {
  additionalClassNames?: string[];
};

function MenuitemBackgroundImage({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<MenuitemBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-1.5 relative w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

function BackgroundImage13({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage98>
      <div className="box-border content-stretch flex flex-row items-center justify-between leading-[0] not-italic px-0 py-3 relative text-[#000000] text-[14px] text-left text-nowrap w-full">
        {children}
      </div>
    </BackgroundImage98>
  );
}
type ContentBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string[];
};

function ContentBackgroundImageAndText({
  text,
  additionalClassNames = [],
}: ContentBackgroundImageAndTextProps) {
  return <p className={clsx("block", additionalClassNames)}>{text}</p>;
}
type TextBackgroundImageProps = {
  text: string;
  text1: string;
};

function TextBackgroundImage({ text, text1 }: TextBackgroundImageProps) {
  return (
    <BackgroundImage13>
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
    </BackgroundImage13>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <div className="css-mnd9iz font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-green-900 text-left text-nowrap">
          <p className="block leading-[14px] whitespace-pre">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[17.5px_17.5px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p1538680}
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
      className="absolute left-[5.25px] overflow-clip size-[17.5px] top-[5.25px]"
      data-name="Frame"
    >
      <ClipPathGroup />
    </div>
  );
}

function PeerlyLogo() {
  return (
    <div
      className="bg-[#000000] overflow-clip relative rounded-[4.66667px] shrink-0 size-7"
      data-name="Peerly_Logo"
    >
      <Frame />
    </div>
  );
}

function PeerlyFullLogo() {
  return (
    <div className="relative shrink-0" data-name="Peerly full logo">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-0 relative">
        <PeerlyLogo />
        <div className="css-yqdygo font-['Acme:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[32px] text-left text-nowrap">
          <p className="block leading-[32px] whitespace-pre">Peerly</p>
        </div>
      </div>
    </div>
  );
}

function IconSidebarClose() {
  return (
    <div className="relative shrink-0 size-5" data-name="icon/sidebar-close">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="icon/sidebar-close">
          <path
            d={svgPaths.p1cec7ff0}
            id="Vector"
            stroke="var(--stroke-0, #334155)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M7.5 2.5V17.5"
            id="Vector_2"
            stroke="var(--stroke-0, #334155)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p2d3e9980}
            id="Vector_3"
            stroke="var(--stroke-0, #334155)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function FullLogoIcon() {
  return (
    <div className="relative shrink-0 w-full" data-name="Full Logo + Icon">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
        <PeerlyFullLogo />
        <IconSidebarClose />
      </div>
    </div>
  );
}

function IconHome() {
  return (
    <BackgroundImage114>
      <g id="icon/home">
        <path
          d={svgPaths.p3763fc80}
          id="Vector"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 14.6667V8H10V14.6667"
          id="Vector_2"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage114>
  );
}

function MenuItem() {
  return (
    <MenuitemBackgroundImage additionalClassNames={["bg-[#ffffff]"]}>
      <IconHome />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Home</p>
      </div>
    </MenuitemBackgroundImage>
  );
}

function IconPackage2() {
  return (
    <BackgroundImage114>
      <g id="icon/package-2">
        <path
          d={svgPaths.p3abf8680}
          id="Vector"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p1b90fa80}
          id="Vector_2"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 2V6"
          id="Vector_3"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage114>
  );
}

function MenuItem1() {
  return (
    <MenuitemBackgroundImage
      additionalClassNames={["bg-slate-100", "rounded-md"]}
    >
      <IconPackage2 />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Products</p>
      </div>
    </MenuitemBackgroundImage>
  );
}

function IconBox() {
  return (
    <BackgroundImage114>
      <g id="icon/box">
        <path
          d={svgPaths.p2940c200}
          id="Vector"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p176da400}
          id="Vector_2"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 14.6667V8"
          id="Vector_3"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage114>
  );
}

function MenuItem2() {
  return (
    <MenuitemBackgroundImage additionalClassNames={["bg-[#ffffff]"]}>
      <IconBox />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Orders</p>
      </div>
    </MenuitemBackgroundImage>
  );
}

function IconUsers() {
  return (
    <BackgroundImage114>
      <g id="icon/users">
        <path
          d={svgPaths.p9966100}
          id="Vector"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p3694d280}
          id="Vector_2"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p18704540}
          id="Vector_3"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p13fb43a0}
          id="Vector_4"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage114>
  );
}

function MenuItem3() {
  return (
    <MenuitemBackgroundImage additionalClassNames={["bg-[#ffffff]"]}>
      <IconUsers />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Teams</p>
      </div>
    </MenuitemBackgroundImage>
  );
}

function IconWallet() {
  return (
    <BackgroundImage114>
      <g id="icon/wallet">
        <path
          d={svgPaths.p1e7f6000}
          id="Vector"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p3a9c1cc0}
          id="Vector_2"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p3c246300}
          id="Vector_3"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage114>
  );
}

function MenuItem4() {
  return (
    <MenuitemBackgroundImage additionalClassNames={["bg-[#ffffff]"]}>
      <IconWallet />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Transactions</p>
      </div>
    </MenuitemBackgroundImage>
  );
}

function IconSettings() {
  return (
    <BackgroundImage114>
      <g id="icon/settings">
        <path
          d={svgPaths.pe9ab200}
          id="Vector"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p28db2b80}
          id="Vector_2"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage114>
  );
}

function MenuItem5() {
  return (
    <MenuitemBackgroundImage additionalClassNames={["bg-[#ffffff]"]}>
      <IconSettings />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Settings</p>
      </div>
    </MenuitemBackgroundImage>
  );
}

function Section() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Section">
      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative w-full">
        <MenuItem />
        <MenuItem1 />
        <MenuItem2 />
        <MenuItem3 />
        <MenuItem4 />
        <MenuItem5 />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <Image
        alt=''
        className="block max-w-none size-full"
        height="32"
        loading="lazy"
        src={imgAvatar}
        width="32"
      />
    </div>
  );
}

function SecondaryIcon() {
  return (
    <BackgroundImage114>
      <g id="secondary icon">
        <path
          d="M6 12L10 8L6 4"
          id="Vector"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
    </BackgroundImage114>
  );
}

function Bottom() {
  return (
    <div className="absolute bottom-0 left-0 w-[220px]" data-name="Bottom">
      <div className="absolute border-[1px_0px_0px] border-slate-100 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-3 relative w-[220px]">
          <Avatar />
          <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
            <p className="block leading-[20px]">Business name</p>
          </div>
          <SecondaryIcon />
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div
      className="bg-[#ffffff] h-[1024px] relative shrink-0 w-[220px]"
      data-name="Sidebar"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 h-[1024px] items-start justify-start px-4 py-6 relative w-[220px]">
          <FullLogoIcon />
          <Section />
          <Bottom />
        </div>
      </div>
      <div className="absolute border-[0px_1px_0px_0px] border-slate-100 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IconBell() {
  return (
    <div className="relative shrink-0 size-6" data-name="icon/bell">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="icon/bell">
          <path
            d={svgPaths.p1e4b7b80}
            id="Vector"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p146fda80}
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

function Topbar() {
  return (
    <div
      className="bg-[#ffffff] h-20 relative shrink-0 w-full"
      data-name="Topbar"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-20 items-center justify-between px-4 py-2.5 relative w-full">
          <div className="css-w9luqw font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
            <p className="block leading-[28px] whitespace-pre">
              Product Details
            </p>
          </div>
          <IconBell />
        </div>
      </div>
      <div className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IconArrowLeft() {
  return (
    <BackgroundImage114>
      <g id="icon/arrow-left">
        <path
          d="M12.6667 8H3.33333"
          id="Vector"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p203476e0}
          id="Vector_2"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage114>
  );
}

function Button() {
  return (
    <BackgroundImage67>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[12px] relative">
        <IconArrowLeft />
      </div>
    </BackgroundImage67>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <BackgroundImageAndText text="Published" />
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

function MiniText() {
  return (
    <BackgroundImage130>
      <BackgroundImage146>{`Cape & Hooded Splash Shirt`}</BackgroundImage146>
      <NavigationMenuItem />
    </BackgroundImage130>
  );
}

function Text() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <MiniText />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <BackgroundImage67>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-3 relative">
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
          <p className="block leading-[24px] whitespace-pre">Edit Product</p>
        </div>
      </div>
    </BackgroundImage67>
  );
}

function Button2() {
  return (
    <div className="bg-red-500 relative rounded-md shrink-0" data-name="button">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-3 relative">
          <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconMoreVertical() {
  return (
    <BackgroundImage114>
      <g id="icon/more-vertical">
        <path
          d={svgPaths.p36e45a00}
          id="Vector"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p150f5b00}
          id="Vector_2"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p2d6e5280}
          id="Vector_3"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage114>
  );
}

function Button3() {
  return (
    <BackgroundImage67>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[16px] relative">
        <IconMoreVertical />
      </div>
    </BackgroundImage67>
  );
}

function Action() {
  return (
    <div className="relative shrink-0" data-name="Action">
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative">
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function HeaderWithAction() {
  return (
    <BackgroundImage130>
      <Button />
      <Text />
      <Action />
    </BackgroundImage130>
  );
}

function Images() {
  return (
    <div className="relative shrink-0 w-full" data-name="Images">
      <div className="[flex-flow:wrap] box-border content-start flex gap-2 items-start justify-start p-0 relative w-full">
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-60"
          data-name="image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        />
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-60"
          data-name="image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        />
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-60"
          data-name="image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        />
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-60"
          data-name="image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        />
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-60"
          data-name="image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        />
        <div
          className="bg-[50%_50%] bg-cover bg-no-repeat rounded-lg shrink-0 size-60"
          data-name="image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        />
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
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative size-full">
        <Images />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <BackgroundImage98>
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-6 py-4 relative w-full">
        <div className="css-lqyxso font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-gray-900 text-left text-nowrap">
          <p className="[text-overflow:inherit] block leading-[28px] overflow-inherit whitespace-pre">
            Information
          </p>
        </div>
      </div>
    </BackgroundImage98>
  );
}

function IconMinus() {
  return (
    <BackgroundImage114>
      <g id="icon/minus">
        <path
          d="M3.33333 8H12.6667"
          id="Vector"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.886667"
        />
      </g>
    </BackgroundImage114>
  );
}

function Button4() {
  return (
    <ButtonBackgroundImage>
      <IconMinus />
    </ButtonBackgroundImage>
  );
}

function IconPlus() {
  return (
    <BackgroundImage114>
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
    </BackgroundImage114>
  );
}

function Button5() {
  return (
    <ButtonBackgroundImage>
      <IconPlus />
    </ButtonBackgroundImage>
  );
}

function Row() {
  return (
    <div className="relative shrink-0" data-name="Row">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Button4 />
        <BackgroundImage146>12</BackgroundImage146>
        <Button5 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div
      className="bg-slate-50 relative rounded-xl shrink-0 w-full"
      data-name="Text"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[12px] relative w-full">
          <div className="css-lqyxso font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-gray-900 text-left text-nowrap">
            <p className="[text-overflow:inherit] block leading-[20px] overflow-inherit whitespace-pre">
              Quantity
            </p>
          </div>
          <Row />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <BackgroundImage13>
      <div className="css-w9luqw font-['Inter:Regular',_sans-serif] font-normal relative shrink-0">
        <p className="block leading-[20px] text-nowrap whitespace-pre">{`Product Price `}</p>
      </div>
      <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium relative shrink-0">
        <p className="block leading-[20px] text-nowrap whitespace-pre">$120</p>
      </div>
    </BackgroundImage13>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <BackgroundImageAndText text="Published" />
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

function Text6() {
  return (
    <BackgroundImage98>
      <div className="box-border content-stretch flex flex-row items-center justify-between px-0 py-3 relative w-full">
        <div className="css-w9luqw font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
          <p className="block leading-[20px] whitespace-pre">Product Status</p>
        </div>
        <NavigationMenuItem1 />
      </div>
    </BackgroundImage98>
  );
}

function Options() {
  return (
    <div className="relative shrink-0 w-full" data-name="Options">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
        <Text3 />
        <TextBackgroundImage text="Date Added" text1="23 May 2025" />
        <TextBackgroundImage text="Stock Quantity" text1="12" />
        <Text6 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <BackgroundImage82 additionalClassNames={["w-full"]}>
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start px-6 py-4 relative w-full">
        <Text2 />
        <div className="css-odvum font-['Inter:Regular',_sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[20px] text-gray-900 text-left w-full">
          <ContentBackgroundImageAndText
            text="This is an elegant, comfortable, and fresh shoe style, originating from the latest model of this year."
            additionalClassNames={["mb-0"]}
          />
          <ContentBackgroundImageAndText text="The shoe upper is the most popular style this year, it is both cool and versatile. The upper texture is comfortable, soft, casual, and elegant. The internal design has vents, allowing you to breathe freely and comfortably." />
        </div>
        <Options />
      </div>
    </BackgroundImage82>
  );
}

function Checkout() {
  return (
    <div
      className="bg-[#ffffff] h-[808px] relative rounded-xl shrink-0 w-[540px]"
      data-name="Checkout"
    >
      <div className="box-border content-stretch flex flex-col h-[808px] items-start justify-start overflow-clip p-0 relative w-[540px]">
        <Text1 />
        <Content />
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative w-full">
        <Container />
        <Checkout />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <HeaderWithAction />
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[24px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative size-full">
        <Topbar />
        <Container3 />
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="Products">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full">
        <Sidebar />
        <Container4 />
      </div>
    </div>
  );
}