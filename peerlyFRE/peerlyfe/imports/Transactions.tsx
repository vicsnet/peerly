import svgPaths from "./svg-fkaqesp56u";
import clsx from "clsx";
import imgAvatar from "figma:asset/5bee9393a6a3a30c7f2cff6dab100b8b77601184.png";
import { imgGroup } from "./svg-uq25u";

function Scrolllistitem1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[52px] relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col h-[52px] items-start justify-center p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Column9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative shrink-0 w-40">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-40">
        {children}
      </div>
    </div>
  );
}

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Column8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function Scrolllistitem({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[52px] relative shrink-0">
      <div className="box-border content-stretch flex flex-col h-[52px] items-start justify-center p-0 relative">
        {children}
      </div>
    </div>
  );
}

function Tableitem({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-slate-100 h-14 relative shrink-0">
      <div className="absolute border-[1px_0px] border-slate-200 border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-[-0.5px]" />
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string[];
};

function Wrapper5({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper5Props>) {
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

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
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

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        {children}
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string[];
};

function Wrapper1({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx(additionalClassNames)}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="flex flex-col justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function Content2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-center px-2 py-4 relative size-full">
        {children}
      </div>
    </Wrapper>
  );
}
type Navigationmenuitem1Props = {
  additionalClassNames?: string[];
};

function Navigationmenuitem1({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Navigationmenuitem1Props>) {
  return (
    <Wrapper1
      additionalClassNames={[
        "relative rounded-md shrink-0",
        ...additionalClassNames,
      ]}
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-1.5 py-0.5 relative">
        {children}
      </div>
    </Wrapper1>
  );
}

function Content1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper>
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-center p-[16px] relative size-full">
        {children}
      </div>
    </Wrapper>
  );
}
type NavigationmenuitemProps = {
  additionalClassNames?: string[];
};

function Navigationmenuitem({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<NavigationmenuitemProps>) {
  return (
    <div className={clsx("relative rounded-md shrink-0", additionalClassNames)}>
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-4 py-2 relative">
          {children}
        </div>
      </div>
    </div>
  );
}

function Container6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-2xl shrink-0">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[24px] relative w-full">
          {children}
        </div>
      </div>
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}
type MenuitemProps = {
  additionalClassNames?: string[];
};

function Menuitem({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<MenuitemProps>) {
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

function Helper1() {
  return (
    <Wrapper2>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 292 1"
      >
        <line
          id="Line 7"
          stroke="var(--stroke-0, #E2E8F0)"
          x2="292"
          y1="0.5"
          y2="0.5"
        />
      </svg>
    </Wrapper2>
  );
}

function Helper() {
  return (
    <Wrapper2>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 160 1"
      >
        <line
          id="Line 7"
          stroke="var(--stroke-0, #E2E8F0)"
          x2="160"
          y1="0.5"
          y2="0.5"
        />
      </svg>
    </Wrapper2>
  );
}
type ContentTextProps = {
  text: string;
};

function ContentText({ text }: ContentTextProps) {
  return (
    <Wrapper1 additionalClassNames={["relative", "shrink-0", "w-full"]}>
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-2 py-4 relative w-full">
        <div
          className="css-98cyo3 font-['Inter:Regular',_sans-serif] font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[14px] text-left text-slate-900"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[20px]">{text}</p>
        </div>
      </div>
    </Wrapper1>
  );
}
type TableitemTextProps = {
  text: string;
};

function TableitemText({ text }: TableitemTextProps) {
  return (
    <div className="bg-slate-100 relative shrink-0 w-full">
      <div className="absolute border-[1px_0px] border-slate-200 border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-[-0.5px]" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-2 py-4 relative w-full">
          <div className="css-98cyo3 font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-900">
            <p className="block leading-[24px] whitespace-pre">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-[10.286px] items-start justify-start p-0 relative">
        <div className="bg-[#ffffff] relative rounded-[2.57143px] shrink-0 size-[18px]">
          <div className="absolute border-[1.28571px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[2.57143px]" />
        </div>
      </div>
    </div>
  );
}
type Text4Props = {
  text: string;
};

function Text4({ text }: Text4Props) {
  return (
    <Wrapper3>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">{text}</p>
      </div>
    </Wrapper3>
  );
}
type TextProps = {
  text: string;
  text1: string;
};

function Text({ text, text1 }: TextProps) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center leading-[0] not-italic p-0 relative text-gray-900 text-left w-full">
        <div
          className="css-odvum font-['Inter:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[14px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[24px]">{text}</p>
        </div>
        <div className="css-lqyxso font-['Inter:Semi_Bold',_sans-serif] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-nowrap">
          <p className="[text-overflow:inherit] block leading-[28px] overflow-inherit whitespace-pre">
            {text1}
          </p>
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
    <Wrapper4>
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
    </Wrapper4>
  );
}

function MenuItem() {
  return (
    <Menuitem additionalClassNames={["bg-[#ffffff]"]}>
      <IconHome />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Home</p>
      </div>
    </Menuitem>
  );
}

function IconPackage2() {
  return (
    <Wrapper4>
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
    </Wrapper4>
  );
}

function MenuItem1() {
  return (
    <Menuitem additionalClassNames={["bg-[#ffffff]"]}>
      <IconPackage2 />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Products</p>
      </div>
    </Menuitem>
  );
}

function IconBox() {
  return (
    <Wrapper4>
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
    </Wrapper4>
  );
}

function MenuItem2() {
  return (
    <Menuitem additionalClassNames={["bg-[#ffffff]"]}>
      <IconBox />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Orders</p>
      </div>
    </Menuitem>
  );
}

function IconUsers() {
  return (
    <Wrapper4>
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
    </Wrapper4>
  );
}

function MenuItem3() {
  return (
    <Menuitem additionalClassNames={["bg-[#ffffff]"]}>
      <IconUsers />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Teams</p>
      </div>
    </Menuitem>
  );
}

function IconWallet() {
  return (
    <Wrapper4>
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
    </Wrapper4>
  );
}

function MenuItem4() {
  return (
    <Menuitem additionalClassNames={["bg-slate-100", "rounded-md"]}>
      <IconWallet />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Transactions</p>
      </div>
    </Menuitem>
  );
}

function IconSettings() {
  return (
    <Wrapper4>
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
    </Wrapper4>
  );
}

function MenuItem5() {
  return (
    <Menuitem additionalClassNames={["bg-[#ffffff]"]}>
      <IconSettings />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Settings</p>
      </div>
    </Menuitem>
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
    <Wrapper4>
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
    </Wrapper4>
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
    <Wrapper5 additionalClassNames={["h-20"]}>
      <div className="box-border content-stretch flex flex-row gap-4 h-20 items-center justify-start px-4 py-2.5 relative w-full">
        <div className="css-w9luqw font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
          <p className="block leading-[28px] whitespace-pre">Transactions</p>
        </div>
      </div>
    </Wrapper5>
  );
}

function Container() {
  return (
    <Container6>
      <Text text="Total Revenue" text1="$ 1,964" />
    </Container6>
  );
}

function Container1() {
  return (
    <Container6>
      <Text text="In-Escrow" text1="$ 732" />
    </Container6>
  );
}

function Container2() {
  return (
    <Container6>
      <Text text="Completed" text1="$ 664" />
    </Container6>
  );
}

function Analytics() {
  return (
    <div className="relative shrink-0 w-full" data-name="Analytics">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        <Container />
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Text4 text="All" />
    </div>
  );
}

function NavigationMenuItem() {
  return (
    <Navigationmenuitem additionalClassNames={["bg-slate-100"]}>
      <Group3 />
    </Navigationmenuitem>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Text4 text="In-Escrow" />
    </div>
  );
}

function NavigationMenuItem1() {
  return (
    <Navigationmenuitem additionalClassNames={["bg-[#ffffff]"]}>
      <Group4 />
    </Navigationmenuitem>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Text4 text="Completed" />
    </div>
  );
}

function NavigationMenuItem2() {
  return (
    <Navigationmenuitem additionalClassNames={["bg-[#ffffff]"]}>
      <Group5 />
    </Navigationmenuitem>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative">
        <NavigationMenuItem />
        <NavigationMenuItem1 />
        <NavigationMenuItem2 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <Wrapper5>
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-[16px] relative w-full">
        <Container3 />
      </div>
    </Wrapper5>
  );
}

function TableItem() {
  return (
    <Tableitem>
      <div className="box-border content-stretch flex flex-row gap-2.5 h-14 items-center justify-start p-[16px] relative">
        <Checkbox />
      </div>
    </Tableitem>
  );
}

function Content() {
  return (
    <Content1>
      <Checkbox />
    </Content1>
  );
}

function ScrollListItem() {
  return (
    <Scrolllistitem>
      <Content />
      <Wrapper2>
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 50 1"
        >
          <line
            id="Line 7"
            stroke="var(--stroke-0, #E2E8F0)"
            x2="50"
            y1="0.5"
            y2="0.5"
          />
        </svg>
      </Wrapper2>
    </Scrolllistitem>
  );
}

function Column() {
  return (
    <Column8>
      <TableItem />
      {[...Array(6).keys()].map((_, i) => (
        <ScrollListItem key={i} />
      ))}
    </Column8>
  );
}

function ScrollListItem6() {
  return (
    <Wrapper6>
      <ContentText text="#183878484" />
      <Helper />
    </Wrapper6>
  );
}

function ScrollListItem7() {
  return (
    <Wrapper6>
      <ContentText text="#849494493" />
      <Helper />
    </Wrapper6>
  );
}

function ScrollListItem8() {
  return (
    <Wrapper6>
      <ContentText text="#894904489" />
      <Helper />
    </Wrapper6>
  );
}

function ScrollListItem9() {
  return (
    <Wrapper6>
      <ContentText text="#839338483" />
      <Helper />
    </Wrapper6>
  );
}

function ScrollListItem10() {
  return (
    <Wrapper6>
      <ContentText text="#744893984" />
      <Helper />
    </Wrapper6>
  );
}

function ScrollListItem11() {
  return (
    <Wrapper6>
      <ContentText text="#893933494" />
      <Helper />
    </Wrapper6>
  );
}

function Column1() {
  return (
    <Column9>
      <TableitemText text="Transaction ID" />
      <ScrollListItem6 />
      <ScrollListItem7 />
      <ScrollListItem8 />
      <ScrollListItem9 />
      <ScrollListItem10 />
      <ScrollListItem11 />
    </Column9>
  );
}

function ScrollListItem12() {
  return (
    <Wrapper6>
      <ContentText text="#1838" />
      <Helper />
    </Wrapper6>
  );
}

function ScrollListItem13() {
  return (
    <Wrapper6>
      <ContentText text="#3883" />
      <Helper />
    </Wrapper6>
  );
}

function ScrollListItem14() {
  return (
    <Wrapper6>
      <ContentText text="#8489" />
      <Helper />
    </Wrapper6>
  );
}

function ScrollListItem15() {
  return (
    <Wrapper6>
      <ContentText text="#8483" />
      <Helper />
    </Wrapper6>
  );
}

function ScrollListItem16() {
  return (
    <Wrapper6>
      <ContentText text="#7484" />
      <Helper />
    </Wrapper6>
  );
}

function ScrollListItem17() {
  return (
    <Wrapper6>
      <ContentText text="#8494" />
      <Helper />
    </Wrapper6>
  );
}

function Column2() {
  return (
    <Column9>
      <TableitemText text="Order ID" />
      <ScrollListItem12 />
      <ScrollListItem13 />
      <ScrollListItem14 />
      <ScrollListItem15 />
      <ScrollListItem16 />
      <ScrollListItem17 />
    </Column9>
  );
}

function ScrollListItem18() {
  return (
    <Wrapper6>
      <ContentText text="Emily Carter" />
      <Helper1 />
    </Wrapper6>
  );
}

function ScrollListItem19() {
  return (
    <Wrapper6>
      <ContentText text="James Thompson" />
      <Helper1 />
    </Wrapper6>
  );
}

function ScrollListItem20() {
  return (
    <Wrapper6>
      <ContentText text="Sophia Martinez" />
      <Helper1 />
    </Wrapper6>
  );
}

function ScrollListItem21() {
  return (
    <Wrapper6>
      <ContentText text="Liam Johnson" />
      <Helper1 />
    </Wrapper6>
  );
}

function ScrollListItem22() {
  return (
    <Wrapper6>
      <ContentText text="Olivia Brown" />
      <Helper1 />
    </Wrapper6>
  );
}

function ScrollListItem23() {
  return (
    <Wrapper6>
      <ContentText text="Ethan Davis" />
      <Helper1 />
    </Wrapper6>
  );
}

function Column3() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative shrink-0"
      data-name="Column"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <TableitemText text="Customer name" />
        <ScrollListItem18 />
        <ScrollListItem19 />
        <ScrollListItem20 />
        <ScrollListItem21 />
        <ScrollListItem22 />
        <ScrollListItem23 />
      </div>
    </div>
  );
}

function ScrollListItem24() {
  return (
    <Wrapper6>
      <ContentText text="$120" />
      <Helper />
    </Wrapper6>
  );
}

function Column4() {
  return (
    <Column9>
      <TableitemText text="Amount" />
      {[...Array(6).keys()].map((_, i) => (
        <ScrollListItem24 key={i} />
      ))}
    </Column9>
  );
}

function Frame6() {
  return (
    <Wrapper3>
      <div className="css-mnd9iz font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-green-900 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">Completed</p>
      </div>
    </Wrapper3>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame6 />
    </div>
  );
}

function NavigationMenuItem3() {
  return (
    <Navigationmenuitem1 additionalClassNames={["bg-green-100"]}>
      <Group6 />
    </Navigationmenuitem1>
  );
}

function Content30() {
  return (
    <Content2>
      <NavigationMenuItem3 />
    </Content2>
  );
}

function ScrollListItem30() {
  return (
    <Scrolllistitem1>
      <Content30 />
      <Helper />
    </Scrolllistitem1>
  );
}

function Frame8() {
  return (
    <Wrapper3>
      <div className="css-bwt5r7 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-blue-900 text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">In-Escrow</p>
      </div>
    </Wrapper3>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function NavigationMenuItem5() {
  return (
    <Navigationmenuitem1 additionalClassNames={["bg-sky-100"]}>
      <Group8 />
    </Navigationmenuitem1>
  );
}

function Content32() {
  return (
    <Content2>
      <NavigationMenuItem5 />
    </Content2>
  );
}

function ScrollListItem32() {
  return (
    <Scrolllistitem1>
      <Content32 />
      <Helper />
    </Scrolllistitem1>
  );
}

function Column5() {
  return (
    <Column9>
      <TableitemText text="Status" />
      <ScrollListItem30 />
      <ScrollListItem30 />
      <ScrollListItem32 />
      <ScrollListItem32 />
      <ScrollListItem30 />
      <ScrollListItem32 />
    </Column9>
  );
}

function ScrollListItem36() {
  return (
    <Wrapper6>
      <ContentText text="23 May 2025" />
      <Wrapper2>
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 140 1"
        >
          <line
            id="Line 7"
            stroke="var(--stroke-0, #E2E8F0)"
            x2="140"
            y1="0.5"
            y2="0.5"
          />
        </svg>
      </Wrapper2>
    </Wrapper6>
  );
}

function Column6() {
  return (
    <div
      className="bg-[#ffffff] relative shrink-0 w-[140px]"
      data-name="Column"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-[140px]">
        <TableitemText text="Date" />
        {[...Array(6).keys()].map((_, i) => (
          <ScrollListItem36 key={i} />
        ))}
      </div>
    </div>
  );
}

function TableItem7() {
  return (
    <Tableitem>
      <div className="box-border content-stretch flex flex-row gap-2.5 h-14 items-center justify-start p-[16px]" />
    </Tableitem>
  );
}

function IconMoreVertical() {
  return (
    <Wrapper4>
      <g id="icon/more-vertical">
        <path
          d={svgPaths.p36e45a00}
          id="Vector"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d={svgPaths.p150f5b00}
          id="Vector_2"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
        <path
          d={svgPaths.p2d6e5280}
          id="Vector_3"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.33333"
        />
      </g>
    </Wrapper4>
  );
}

function Content42() {
  return (
    <Content1>
      <IconMoreVertical />
    </Content1>
  );
}

function ScrollListItem42() {
  return (
    <Scrolllistitem>
      <Content42 />
      <Wrapper2>
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48 1"
        >
          <line
            id="Line 7"
            stroke="var(--stroke-0, #E2E8F0)"
            x2="48"
            y1="0.5"
            y2="0.5"
          />
        </svg>
      </Wrapper2>
    </Scrolllistitem>
  );
}

function Column7() {
  return (
    <Column8>
      <TableItem7 />
      {[...Array(6).keys()].map((_, i) => (
        <ScrollListItem42 key={i} />
      ))}
    </Column8>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative w-full">
        <Column />
        <Column1 />
        <Column2 />
        <Column3 />
        <Column4 />
        <Column5 />
        <Column6 />
        <Column7 />
      </div>
    </div>
  );
}

function TableFull() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full"
      data-name="Table Full"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-center overflow-clip p-0 relative w-full">
        <Header />
        <Table />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-[24px] relative size-full">
          <Analytics />
          <TableFull />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative size-full">
        <Topbar />
        <Container4 />
      </div>
    </div>
  );
}

export default function Transactions() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="Transactions">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full">
        <Sidebar />
        <Container5 />
      </div>
    </div>
  );
}