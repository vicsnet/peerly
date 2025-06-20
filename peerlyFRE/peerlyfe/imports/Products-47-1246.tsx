import svgPaths from "./svg-snlumxlwp5";
import clsx from "clsx";
import imgAvatar from "figma:asset/5bee9393a6a3a30c7f2cff6dab100b8b77601184.png";
import imgImage from "figma:asset/7c807da69baa842ba6d039b54e026abb98d01708.png";
import { imgGroup } from "./svg-raapz";
type TextBackgroundImageProps = {
  additionalClassNames?: string[];
};

function TextBackgroundImage({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<TextBackgroundImageProps>) {
  return (
    <div
      style={{ width: "min-content" }}
      className={clsx(
        "css-lqyxso min-w-full overflow-ellipsis overflow-hidden relative shrink-0",
        additionalClassNames,
      )}
    >
      {children}
    </div>
  );
}

function BackgroundImage153({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function InputwithbuttonBackgroundImage({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage120({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage105({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
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
    <div className={clsx("relative size-full", additionalClassNames)}>
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
        {children}
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
    <div className={clsx("relative rounded-md shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
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
    <div
      className={clsx(
        "bg-[#ffffff] relative shrink-0 w-full",
        additionalClassNames,
      )}
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        {children}
      </div>
      <div className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundImage41({ children }: React.PropsWithChildren<{}>) {
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

function BackgroundImage12({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="absolute border border-slate-300 border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start p-[12px] relative w-full">
          <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
type TextareaBackgroundImageAndTextProps = {
  text: string;
};

function TextareaBackgroundImageAndText({
  text,
}: TextareaBackgroundImageAndTextProps) {
  return (
    <div className="[grid-area:1_/_1] bg-[#ffffff] h-20 ml-0 mt-5 relative rounded-md w-[672px]">
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-20 items-start justify-start px-3 py-2 relative w-[672px]">
          <div className="basis-0 css-ofdctn font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-left text-slate-400">
            <p className="block leading-[24px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type FieldBackgroundImageAndTextProps = {
  text: string;
};

function FieldBackgroundImageAndText({
  text,
}: FieldBackgroundImageAndTextProps) {
  return (
    <BackgroundImage12>
      <p className="block leading-[24px] whitespace-pre">{text}</p>
    </BackgroundImage12>
  );
}
type SelectBackgroundImageAndTextProps = {
  text: string;
};

function SelectBackgroundImageAndText({
  text,
}: SelectBackgroundImageAndTextProps) {
  return (
    <div className="bg-[#ffffff] relative rounded-md shrink-0 w-[120px]">
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-3 py-2 relative w-[120px]">
          <div className="basis-0 css-98cyo3 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-900">
            <p className="block leading-[24px]">{text}</p>
          </div>
          <IconchevrondownBackgroundImage />
        </div>
      </div>
    </div>
  );
}

function IconchevrondownBackgroundImage() {
  return (
    <BackgroundImage41>
      <g id="icon/chevron-down">
        <path
          d="M4 6L8 10L12 6"
          id="Vector"
          stroke="var(--stroke-0, #94A3B8)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
    </BackgroundImage41>
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
        <div className="css-yqdygo font-['Acme:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[32px] text-left text-nowrap">
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
    <BackgroundImage41>
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
    </BackgroundImage41>
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
    <BackgroundImage41>
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
    </BackgroundImage41>
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
    <BackgroundImage41>
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
    </BackgroundImage41>
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
    <BackgroundImage41>
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
    </BackgroundImage41>
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

function IconSettings() {
  return (
    <BackgroundImage41>
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
    </BackgroundImage41>
  );
}

function MenuItem4() {
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
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-8" data-name="avatar">
      <img
        alt
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
    <BackgroundImage41>
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
    </BackgroundImage41>
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

function Topbar() {
  return (
    <BackgroundImage57 additionalClassNames={["h-20"]}>
      <div className="box-border content-stretch flex flex-row gap-4 h-20 items-center justify-start px-4 py-2.5 relative w-full">
        <div className="css-w9luqw font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
          <p className="block leading-[28px] whitespace-pre">Products</p>
        </div>
      </div>
    </BackgroundImage57>
  );
}

function IconSearch() {
  return (
    <BackgroundImage41>
      <g id="icon/search" opacity="0.5">
        <path
          d={svgPaths.p107a080}
          id="Vector"
          stroke="var(--stroke-0, #0F172A)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d={svgPaths.pc9d8c00}
          id="Vector_2"
          stroke="var(--stroke-0, #0F172A)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
    </BackgroundImage41>
  );
}

function MenuItem5() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-full"
      data-name="menu item"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-2 py-2.5 relative w-full">
          <IconSearch />
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic opacity-50 relative shrink-0 text-[14px] text-left text-slate-400">
            <p className="block leading-[20px]">Type a product or search...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 w-60"
      data-name="Search"
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start overflow-clip p-0 relative w-60">
        <MenuItem5 />
      </div>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-0 relative">
        <Search />
        <SelectBackgroundImageAndText text="Status" />
        <SelectBackgroundImageAndText text="Stock" />
      </div>
    </div>
  );
}

function IconPlus() {
  return (
    <BackgroundImage41>
      <g id="icon/plus">
        <path
          d="M8 3.33333V12.6667"
          id="Vector"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33333 8H12.6667"
          id="Vector_2"
          stroke="var(--stroke-0, white)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage41>
  );
}

function Button() {
  return (
    <ButtonBackgroundImage additionalClassNames={["bg-slate-900"]}>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-3 relative">
        <IconPlus />
        <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Add Product</p>
        </div>
      </div>
    </ButtonBackgroundImage>
  );
}

function Header() {
  return (
    <BackgroundImage57>
      <div className="box-border content-stretch flex flex-row items-center justify-between px-6 py-4 relative w-full">
        <Container />
        <Button />
      </div>
    </BackgroundImage57>
  );
}

function Toggle() {
  return (
    <div className="h-6 relative shrink-0 w-11" data-name="toggle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 44 24"
      >
        <g id="toggle">
          <rect
            fill="var(--fill-0, #0F172A)"
            height="24"
            id="Rectangle 2"
            rx="12"
            width="44"
          />
          <circle
            cx="32"
            cy="12"
            fill="var(--fill-0, white)"
            id="Ellipse 2"
            r="10"
          />
        </g>
      </svg>
    </div>
  );
}

function Switch() {
  return (
    <div className="relative shrink-0" data-name="switch">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <Toggle />
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="box-border content-stretch flex flex-row items-start justify-between p-0 relative w-full">
        <div
          className="[background-size:cover,_auto] bg-[#d9d9d9] rounded-lg shrink-0 size-12"
          data-name="Image"
          style={{ backgroundImage: `url('${imgImage}')` }}
        />
        <Switch />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-gray-900 text-left text-nowrap w-full">
        <TextBackgroundImage
          additionalClassNames={[
            "font-['Inter:Semi_Bold',_sans-serif]",
            "font-semibold",
            "text-[18px]",
          ]}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[28px] overflow-inherit">
            Hooded Splash Shirt
          </p>
        </TextBackgroundImage>
        <TextBackgroundImage
          additionalClassNames={[
            "font-['Inter:Regular',_sans-serif]",
            "font-normal",
            "text-[14px]",
          ]}
        >
          <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[24px] overflow-inherit">
            This is an elegant, comfortable and durable cotton shirt
          </p>
        </TextBackgroundImage>
      </div>
    </div>
  );
}

function Down() {
  return (
    <div className="relative shrink-0 w-full" data-name="Down">
      <div className="box-border content-stretch flex flex-row font-['Inter:Medium',_sans-serif] font-medium items-center justify-between leading-[0] not-italic p-0 relative text-gray-900 text-left text-nowrap w-full">
        <div className="css-lqyxso overflow-ellipsis overflow-hidden relative shrink-0 text-[16px]">
          <p className="[text-overflow:inherit] block leading-[24px] overflow-inherit text-nowrap whitespace-pre">
            $100
          </p>
        </div>
        <div className="css-odvum relative shrink-0 text-[12px]">
          <p className="block leading-[20px] text-nowrap whitespace-pre">
            10 in stock
          </p>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative w-full">
        <Top />
        <Text />
        <Down />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Container"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[16px] relative w-full">
          <Text1 />
        </div>
      </div>
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

function Products() {
  return (
    <div className="relative shrink-0 w-full" data-name="Products">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        {[...Array(3).keys()].map((_, i) => (
          <Container1 key={i} />
        ))}
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-full" data-name="Form">
      <BackgroundImage89 additionalClassNames={["overflow-clip"]}>
        <Products />
      </BackgroundImage89>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-xl shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-full">
        <Header />
        <Form />
      </div>
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Container5() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[24px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative size-full">
        <Topbar />
        <Container5 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <ButtonBackgroundImage additionalClassNames={["bg-slate-700"]}>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
        <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Publish</p>
        </div>
      </div>
    </ButtonBackgroundImage>
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

function Action() {
  return (
    <div className="relative shrink-0" data-name="Action">
      <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative">
        <Button1 />
        <IconX />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="absolute border-[0px_0px_1px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-6 py-4 relative w-full">
          <div className="css-rk9qf8 font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[24px] text-gray-900 text-left text-nowrap tracking-[-0.144px]">
            <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[32px] overflow-inherit whitespace-pre">
              Add Product
            </p>
          </div>
          <Action />
        </div>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative text-center text-nowrap text-slate-400 w-full">
        <div className="css-ofdctn relative shrink-0 text-[16px]">
          <p className="block leading-[24px] text-nowrap whitespace-pre">
            Choose image or drag and drop it here
          </p>
        </div>
        <div className="css-ofdctn relative shrink-0 text-[14px]">
          <p className="block leading-[20px] text-nowrap whitespace-pre">
            JPG, JPEG, PNG. Max 10MB
          </p>
        </div>
      </div>
    </div>
  );
}

function IconUpload() {
  return (
    <BackgroundImage41>
      <g id="icon/upload">
        <path
          d={svgPaths.p23ad1400}
          id="Vector"
          stroke="var(--stroke-0, #0F172A)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p26e09a00}
          id="Vector_2"
          stroke="var(--stroke-0, #0F172A)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 2V10"
          id="Vector_3"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </BackgroundImage41>
  );
}

function Button2() {
  return (
    <div className="relative rounded-md shrink-0" data-name="button">
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-1 relative">
          <IconUpload />
          <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap text-slate-900">
            <p className="block leading-[20px] whitespace-pre">Upload</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <div className="relative rounded-md shrink-0 w-full" data-name="field">
      <div className="absolute border border-dashed border-slate-300 inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center p-[24px] relative w-full">
          <Text7 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Default() {
  return (
    <BackgroundImage120>
      <FieldBackgroundImageAndText text="Enter product name" />
    </BackgroundImage120>
  );
}

function InputWithButton() {
  return (
    <InputwithbuttonBackgroundImage>
      <Default />
    </InputwithbuttonBackgroundImage>
  );
}

function Input() {
  return (
    <BackgroundImage105>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Product name</p>
      </div>
      <InputWithButton />
    </BackgroundImage105>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] css-w9luqw font-['Inter:Medium',_sans-serif] font-medium ml-0 mt-0 not-italic relative text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">
          Product description
        </p>
      </div>
      <TextareaBackgroundImageAndText text="Enter product description" />
    </div>
  );
}

function Frame3() {
  return (
    <BackgroundImage153>
      <Group2 />
    </BackgroundImage153>
  );
}

function Textarea1() {
  return (
    <BackgroundImage105>
      <Frame3 />
    </BackgroundImage105>
  );
}

function Field2() {
  return (
    <BackgroundImage12>
      <p className="leading-[24px] whitespace-pre">
        <span className="text-slate-900">$</span>
        <span>{` Enter product price`}</span>
      </p>
    </BackgroundImage12>
  );
}

function Default1() {
  return (
    <BackgroundImage120>
      <Field2 />
    </BackgroundImage120>
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
    <BackgroundImage105>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Product price</p>
      </div>
      <InputWithButton1 />
    </BackgroundImage105>
  );
}

function Default2() {
  return (
    <BackgroundImage120>
      <FieldBackgroundImageAndText text="Enter quantity" />
    </BackgroundImage120>
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
    <BackgroundImage105>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Stock quantity</p>
      </div>
      <InputWithButton2 />
    </BackgroundImage105>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] css-w9luqw font-['Inter:Medium',_sans-serif] font-medium ml-0 mt-0 not-italic relative text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">
          Product specification
        </p>
      </div>
      <TextareaBackgroundImageAndText text="Enter the product specifications, sizes" />
    </div>
  );
}

function Frame4() {
  return (
    <BackgroundImage153>
      <Group3 />
    </BackgroundImage153>
  );
}

function Textarea3() {
  return (
    <BackgroundImage105>
      <Frame4 />
    </BackgroundImage105>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <BackgroundImage89>
        <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Product Images</p>
        </div>
        <Field />
        <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Product Details</p>
        </div>
        <Input />
        <Textarea1 />
        <Input1 />
        <Input2 />
        <Textarea3 />
      </BackgroundImage89>
    </div>
  );
}

function Modal() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl shrink-0 w-[720px]"
      data-name="Modal"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[720px]">
        <Text6 />
        <Content />
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

export default function Products1() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="Products">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full">
        <Sidebar />
        <Container6 />
        <Background />
      </div>
    </div>
  );
}