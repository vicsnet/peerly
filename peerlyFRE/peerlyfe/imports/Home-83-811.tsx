import svgPaths from "./svg-g0tgza5xny";
import clsx from "clsx";
import imgAvatar from "figma:asset/5bee9393a6a3a30c7f2cff6dab100b8b77601184.png";
import { imgGroup } from "./svg-rb9gc";

function Text15({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center leading-[0] not-italic p-0 relative text-gray-900 text-left w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper8({ children }: React.PropsWithChildren<{}>) {
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

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative rounded-md shrink-0">
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center overflow-clip relative size-full">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[24px] relative w-full">
        {children}
      </div>
    </div>
  );
}

function Form2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative rounded-xl shrink-0 w-full">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
          {children}
        </div>
      </div>
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full">
      <Wrapper4>{children}</Wrapper4>
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

function Container13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-2xl shrink-0">
      <Wrapper4>{children}</Wrapper4>
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
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <Wrapper6>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative">
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
          <p className="block leading-[24px] whitespace-pre">{text}</p>
        </div>
      </div>
    </Wrapper6>
  );
}
type Text14Props = {
  text: string;
  additionalClassNames?: string[];
};

function Text14({ text, additionalClassNames = [] }: Text14Props) {
  return (
    <div
      style={{ width: "min-content" }}
      className={clsx(
        "font-['Inter:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[14px]",
        additionalClassNames,
      )}
    >
      <p className="block leading-[24px]">{text}</p>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <div className="css-co9bdk font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-gray-900 text-left text-nowrap tracking-[-0.1px]">
          <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[28px] overflow-inherit whitespace-pre">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
type Text13Props = {
  text: string;
  additionalClassNames?: string[];
};

function Text13({ text, additionalClassNames = [] }: Text13Props) {
  return (
    <div
      className={clsx(
        "font-['Inter:Semi_Bold',_sans-serif] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-nowrap",
        additionalClassNames,
      )}
    >
      <p className="[text-overflow:inherit] block leading-[28px] overflow-inherit whitespace-pre">
        {text1}
      </p>
    </div>
  );
}
type Text1Props = {
  text: string;
  text1: string;
};

function Text1({ text, text1 }: Text1Props) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center leading-[0] not-italic p-0 relative text-gray-900 text-left w-full">
        <div
          className="css-odvum font-['Inter:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[14px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[24px]">{text}</p>
        </div>
        <Text13 text={text1} additionalClassNames={["css-lqyxso"]} />
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
    <Wrapper8>
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
    </Wrapper8>
  );
}

function MenuItem() {
  return (
    <Menuitem additionalClassNames={["bg-slate-100", "rounded-md"]}>
      <IconHome />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Home</p>
      </div>
    </Menuitem>
  );
}

function IconPackage2() {
  return (
    <Wrapper8>
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
    </Wrapper8>
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
    <Wrapper8>
      <g id="icon/box">
        <path
          d={svgPaths.p16da080}
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
    </Wrapper8>
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
    <Wrapper8>
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
          d={svgPaths.p188b8380}
          id="Vector_3"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p11a5dbc0}
          id="Vector_4"
          stroke="var(--stroke-0, #334155)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </Wrapper8>
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
    <Wrapper8>
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
    </Wrapper8>
  );
}

function MenuItem4() {
  return (
    <Menuitem additionalClassNames={["bg-[#ffffff]"]}>
      <IconWallet />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Transactions</p>
      </div>
    </Menuitem>
  );
}

function IconSettings() {
  return (
    <Wrapper8>
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
    </Wrapper8>
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
    <Wrapper8>
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
    </Wrapper8>
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
            <p className="block leading-[28px] whitespace-pre">Home</p>
          </div>
          <IconBell />
        </div>
      </div>
      <div className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative">
        <div className="css-mnd9iz font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-green-900 text-left text-nowrap">
          <p className="block leading-[14px] whitespace-pre">Setup Complete</p>
        </div>
      </div>
    </div>
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
      className="bg-green-100 relative rounded-md shrink-0"
      data-name="navigation menu item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-3 py-1.5 relative">
          <Group3 />
        </div>
      </div>
    </div>
  );
}

function MiniText() {
  return (
    <div className="relative shrink-0 w-full" data-name="Mini text">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        <div className="css-odvum font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">{`You're all set up! Here's how your store is performing.`}</p>
        </div>
        <NavigationMenuItem />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative w-full">
        <div className="css-wkyhdm font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[30px] text-gray-900 text-left text-nowrap tracking-[-0.225px]">
          <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[36px] overflow-inherit whitespace-pre">
            Welcome to Peerly!
          </p>
        </div>
        <MiniText />
      </div>
    </div>
  );
}

function IconView() {
  return (
    <Wrapper8>
      <g id="icon/view">
        <path
          d={svgPaths.p27c1a700}
          id="Vector"
          stroke="var(--stroke-0, #0F172A)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p207da180}
          id="Vector_2"
          stroke="var(--stroke-0, #0F172A)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p13c3ac00}
          id="Vector_3"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={svgPaths.p33ef1c0}
          id="Vector_4"
          stroke="var(--stroke-0, black)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </Wrapper8>
  );
}

function Button() {
  return (
    <Wrapper6>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-3 relative">
        <IconView />
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
          <p className="block leading-[24px] whitespace-pre">View Store</p>
        </div>
      </div>
    </Wrapper6>
  );
}

function IconPlus() {
  return (
    <Wrapper8>
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
    </Wrapper8>
  );
}

function Button1() {
  return (
    <div
      className="bg-slate-900 relative rounded-md shrink-0"
      data-name="button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-4 py-3 relative">
          <IconPlus />
          <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Add Product</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="relative shrink-0" data-name="Action">
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function HeaderWithAction() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header with action">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative w-full">
        <Text />
        <Action />
      </div>
    </div>
  );
}

function Container() {
  return (
    <Container13>
      <Text1 text="Total Products" text1="64" />
    </Container13>
  );
}

function Container1() {
  return (
    <Container13>
      <Text1 text="Total Orders" text1="64" />
    </Container13>
  );
}

function Container2() {
  return (
    <Container13>
      <Text1 text="Total Revenue" text1="$ 64" />
    </Container13>
  );
}

function Container3() {
  return (
    <Container13>
      <Text1 text="Store Views" text1="1,474" />
    </Container13>
  );
}

function Analytics() {
  return (
    <Wrapper10>
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </Wrapper10>
  );
}

function Text6() {
  return (
    <Text15>
      <Text13 text="Add new products" additionalClassNames={["css-lqyxso"]} />
      <Text14
        text="List another item in your store"
        additionalClassNames={["css-odvum"]}
      />
    </Text15>
  );
}

function Container4() {
  return (
    <Wrapper>
      <Text6 />
      <ButtonText text="Add Product" />
    </Wrapper>
  );
}

function Text7() {
  return (
    <Text15>
      <Text13
        text="Preview your storefront"
        additionalClassNames={["css-lqyxso"]}
      />
      <Text14
        text="View your shop as customers would see it and make final tweaks."
        additionalClassNames={["css-odvum"]}
      />
    </Text15>
  );
}

function Container5() {
  return (
    <Wrapper>
      <Text7 />
      <ButtonText text="Preview Store" />
    </Wrapper>
  );
}

function Text8() {
  return (
    <Text15>
      <Text13 text="Share store" additionalClassNames={["css-lqyxso"]} />
      <Text14
        text="Get your store link to share"
        additionalClassNames={["css-odvum"]}
      />
    </Text15>
  );
}

function Container6() {
  return (
    <Wrapper>
      <Text8 />
      <ButtonText text="Share Store" />
    </Wrapper>
  );
}

function Form() {
  return (
    <Form2>
      <TextText text="Quick actions" />
      <Container4 />
      <Container5 />
      <Container6 />
    </Form2>
  );
}

function Text10() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-center leading-[0] not-italic p-0 relative text-left text-sky-700 w-full">
        <Text13 text="📊 Boost sales" additionalClassNames={["css-1teaci"]} />
        <Text14
          text="Add product bundles to increase average order value"
          additionalClassNames={["css-nyhjy0"]}
        />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div
      className="basis-0 bg-sky-50 grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Container"
    >
      <Wrapper4>
        <Text10 />
      </Wrapper4>
      <div className="absolute border border-sky-200 border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

function Text11() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Text"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-center leading-[0] not-italic p-0 relative text-emerald-700 text-left w-full">
        <Text13 text="📈 Marketing" additionalClassNames={["css-ep0yp9"]} />
        <Text14
          text="Share your store on social media to reach more customers"
          additionalClassNames={["css-rfxvax"]}
        />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div
      className="basis-0 bg-emerald-50 grow min-h-px min-w-px relative rounded-2xl shrink-0"
      data-name="Container"
    >
      <Wrapper4>
        <Text11 />
      </Wrapper4>
      <div className="absolute border border-emerald-200 border-solid inset-0 pointer-events-none rounded-2xl" />
    </div>
  );
}

function Container9() {
  return (
    <Wrapper10>
      <Container7 />
      <Container8 />
    </Wrapper10>
  );
}

function Form1() {
  return (
    <Form2>
      <TextText text="Growth tips" />
      <Container9 />
    </Form2>
  );
}

function Container10() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <HeaderWithAction />
        <Analytics />
        <Form />
        <Form1 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start p-[24px] relative size-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative size-full">
        <Topbar />
        <Container11 />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="Home">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full">
        <Sidebar />
        <Container12 />
      </div>
    </div>
  );
}