import svgPaths from "./svg-imon40tg1r";
import clsx from "clsx";
import imgAvatar from "figma:asset/5bee9393a6a3a30c7f2cff6dab100b8b77601184.png";
import { imgGroup } from "./svg-g55wu";

function Wrapper16({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Inputwithbutton({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper11({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Button3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-slate-700 relative rounded-md shrink-0">
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}
type Topbar3Props = {
  additionalClassNames?: string[];
};

function Topbar3({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Topbar3Props>) {
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

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-md shrink-0 w-full">
      <div className="absolute border border-slate-300 border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center relative size-full">
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
type WrapperProps = {
  additionalClassNames?: string[];
};

function Wrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div
      className={clsx("relative rounded-[3px] shrink-0", additionalClassNames)}
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-3 py-1.5 relative">
          {children}
        </div>
      </div>
    </div>
  );
}
type FieldText1Props = {
  text: string;
};

function FieldText1({ text }: FieldText1Props) {
  return (
    <Wrapper2>
      <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-2 relative w-full">
        <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
          <p className="block leading-[24px] whitespace-pre">{text}</p>
        </div>
        <Iconeye />
      </div>
    </Wrapper2>
  );
}

function Iconeye() {
  return (
    <div className="relative shrink-0 size-3">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="icon/eye">
          <path
            d={svgPaths.p9ee4100}
            id="Vector"
            stroke="var(--stroke-0, #94A3B8)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.6"
          />
          <path
            d={svgPaths.p24092800}
            id="Vector_2"
            stroke="var(--stroke-0, #94A3B8)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.6"
          />
        </g>
      </svg>
    </div>
  );
}
type FieldTextProps = {
  text: string;
};

function FieldText({ text }: FieldTextProps) {
  return (
    <Wrapper2>
      <div className="box-border content-stretch flex flex-row items-center justify-start px-3 py-2 relative w-full">
        <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
          <p className="block leading-[24px] whitespace-pre">{text}</p>
        </div>
      </div>
    </Wrapper2>
  );
}
type Text8Props = {
  text: string;
  additionalClassNames?: string[];
};

function Text8({ text, additionalClassNames = [] }: Text8Props) {
  return (
    <div
      className={clsx(
        "box-border content-stretch flex flex-row gap-2.5 items-center justify-center relative",
        additionalClassNames,
      )}
    >
      <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}
type Text7Props = {
  text: string;
};

function Text7({ text }: Text7Props) {
  return (
    <div className="css-co9bdk font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-gray-900 text-left text-nowrap tracking-[-0.1px]">
      <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[28px] overflow-inherit whitespace-pre">
        {text}
      </p>
    </div>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
      <Text7 text={text} />
    </div>
  );
}
type TabitemTextProps = {
  text: string;
};

function TabitemText({ text }: TabitemTextProps) {
  return (
    <Wrapper>
      <div className="css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">{text}</p>
      </div>
    </Wrapper>
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
    <Menuitem additionalClassNames={["bg-slate-100", "rounded-md"]}>
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
    <Topbar3 additionalClassNames={["h-20"]}>
      <div className="box-border content-stretch flex flex-row gap-4 h-20 items-center justify-start px-4 py-2.5 relative w-full">
        <div className="css-w9luqw font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
          <p className="block leading-[28px] whitespace-pre">Settings</p>
        </div>
      </div>
    </Topbar3>
  );
}

function TabItem() {
  return (
    <Wrapper additionalClassNames={["bg-[#ffffff]"]}>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Profile</p>
      </div>
    </Wrapper>
  );
}

function Tabs() {
  return (
    <div className="bg-slate-100 relative rounded-md shrink-0" data-name="tabs">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-[5px] relative">
          <TabItem />
          <TabitemText text="Business" />
          <TabitemText text="Wallet" />
          <TabitemText text="Notifications" />
        </div>
      </div>
    </div>
  );
}

function Topbar1() {
  return (
    <Topbar3>
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-3 relative w-full">
        <Tabs />
      </div>
    </Topbar3>
  );
}

function Topbar2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Topbar">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative w-full">
        <Topbar />
        <Topbar1 />
      </div>
    </div>
  );
}

function IconArrowLeft() {
  return (
    <Wrapper4>
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
    </Wrapper4>
  );
}

function Button() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0"
      data-name="button"
    >
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[12px] relative">
          <IconArrowLeft />
        </div>
      </div>
    </div>
  );
}

function MiniText() {
  return (
    <Wrapper7>
      <Text7 text="Profile" />
    </Wrapper7>
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
    <Button3>
      <Text8 text="Save" additionalClassNames={["px-4", "py-3"]} />
    </Button3>
  );
}

function Action() {
  return (
    <div className="relative shrink-0" data-name="Action">
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative">
        <Button1 />
      </div>
    </div>
  );
}

function HeaderWithAction() {
  return (
    <Wrapper7>
      <Button />
      <Text />
      <Action />
    </Wrapper7>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <Text5 text="Personal information" />
    </div>
  );
}

function Default() {
  return (
    <Wrapper11>
      <FieldText text="Enter your first name" />
    </Wrapper11>
  );
}

function InputWithButton() {
  return (
    <Inputwithbutton>
      <Default />
    </Inputwithbutton>
  );
}

function Input() {
  return (
    <Wrapper10>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">First name</p>
      </div>
      <InputWithButton />
    </Wrapper10>
  );
}

function Default1() {
  return (
    <Wrapper11>
      <FieldText text="Enter your last name" />
    </Wrapper11>
  );
}

function InputWithButton1() {
  return (
    <Inputwithbutton>
      <Default1 />
    </Inputwithbutton>
  );
}

function Input1() {
  return (
    <Wrapper10>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Last name</p>
      </div>
      <InputWithButton1 />
    </Wrapper10>
  );
}

function Default2() {
  return (
    <Wrapper11>
      <FieldText text="Enter your email" />
    </Wrapper11>
  );
}

function InputWithButton2() {
  return (
    <Inputwithbutton>
      <Default2 />
    </Inputwithbutton>
  );
}

function Input2() {
  return (
    <Wrapper10>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Email</p>
      </div>
      <InputWithButton2 />
    </Wrapper10>
  );
}

function Text2() {
  return (
    <Wrapper16>
      <Text1 />
      <Input />
      <Input1 />
      <Input2 />
    </Wrapper16>
  );
}

function Form() {
  return (
    <Form2>
      <Text2 />
    </Form2>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <Text5 text="Password" />
    </div>
  );
}

function Default3() {
  return (
    <Wrapper11>
      <FieldText1 text="Enter current your password" />
    </Wrapper11>
  );
}

function InputWithButton3() {
  return (
    <Inputwithbutton>
      <Default3 />
    </Inputwithbutton>
  );
}

function Input3() {
  return (
    <Wrapper10>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Current Password</p>
      </div>
      <InputWithButton3 />
    </Wrapper10>
  );
}

function Default4() {
  return (
    <Wrapper11>
      <FieldText1 text="Enter your new password" />
    </Wrapper11>
  );
}

function InputWithButton4() {
  return (
    <Inputwithbutton>
      <Default4 />
    </Inputwithbutton>
  );
}

function Input4() {
  return (
    <Wrapper10>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">New Password</p>
      </div>
      <InputWithButton4 />
    </Wrapper10>
  );
}

function Default5() {
  return (
    <Wrapper11>
      <FieldText1 text="Re-enter your password to confirm" />
    </Wrapper11>
  );
}

function InputWithButton5() {
  return (
    <Inputwithbutton>
      <Default5 />
    </Inputwithbutton>
  );
}

function Input5() {
  return (
    <Wrapper10>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Confirm Password</p>
      </div>
      <InputWithButton5 />
    </Wrapper10>
  );
}

function Container() {
  return (
    <Wrapper16>
      <Text3 />
      <Input3 />
      <Input4 />
      <Input5 />
    </Wrapper16>
  );
}

function Button2() {
  return (
    <Button3>
      <Text8 text="Change Password" additionalClassNames={["px-3", "py-1.5"]} />
    </Button3>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <Container />
        <Button2 />
      </div>
    </div>
  );
}

function Form1() {
  return (
    <Form2>
      <Text4 />
    </Form2>
  );
}

function Container1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <HeaderWithAction />
        <Form />
        <Form1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[180px] py-6 relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative size-full">
        <Topbar2 />
        <Container2 />
      </div>
    </div>
  );
}

export default function Settings() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="Settings">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full">
        <Sidebar />
        <Container3 />
      </div>
    </div>
  );
}