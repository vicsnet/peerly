import svgPaths from "./svg-2wpb88getv";
import clsx from "clsx";
import imgAvatar from "figma:asset/5bee9393a6a3a30c7f2cff6dab100b8b77601184.png";
import { imgGroup } from "./svg-6qo3r";

function Text7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-center leading-[0] not-italic p-0 relative text-gray-900 text-left w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
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

function Container7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative rounded-2xl shrink-0 w-full">
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
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="bg-[#ffffff] relative rounded-md shrink-0">
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative">
          <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
            <p className="block leading-[24px] whitespace-pre">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type Text6Props = {
  text: string;
};

function Text6({ text }: Text6Props) {
  return (
    <div className="css-lqyxso font-['Inter:Semi_Bold',_sans-serif] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-nowrap">
      <p className="[text-overflow:inherit] block leading-[28px] overflow-inherit whitespace-pre">
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
    <div
      style={{ width: "min-content" }}
      className="css-odvum font-['Inter:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[14px]"
    >
      <p className="block leading-[24px]">{text}</p>
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
    <Wrapper>
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
    </Wrapper>
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
    <Wrapper>
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
    </Wrapper>
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
    <Wrapper>
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
    </Wrapper>
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
    <Wrapper>
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
    </Wrapper>
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

function IconSettings() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

function MenuItem4() {
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
    <Wrapper>
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
    </Wrapper>
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
    <div
      className="bg-[#ffffff] h-20 relative shrink-0 w-full"
      data-name="Topbar"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 h-20 items-center justify-start px-4 py-2.5 relative w-full">
          <div className="css-w9luqw font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
            <p className="block leading-[28px] whitespace-pre">Get Started</p>
          </div>
        </div>
      </div>
      <div className="absolute border-[0px_0px_1px] border-slate-100 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="box-border content-stretch flex flex-col items-start justify-center leading-[0] not-italic p-0 relative text-gray-900 text-left w-full">
        <div className="css-wkyhdm font-['Inter:Semi_Bold',_sans-serif] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 text-[30px] text-nowrap tracking-[-0.225px]">
          <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[36px] overflow-inherit whitespace-pre">
            Welcome to Peerly!
          </p>
        </div>
        <Text5 text="Get the most to your customers with peerly" />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <Text7>
      <Text6 text="Add your first product" />
      <Text5 text="List an item for sale and make it visible to potential buyers" />
    </Text7>
  );
}

function Container() {
  return (
    <Container7>
      <Text1 />
      <ButtonText text="Add Product" />
    </Container7>
  );
}

function Text2() {
  return (
    <Text7>
      <Text6 text="Invite a team member (Optional)" />
      <Text5 text="Collaborate by adding someone to help manage products or handle orders" />
    </Text7>
  );
}

function Container1() {
  return (
    <Container7>
      <Text2 />
      <ButtonText text="Invite Member" />
    </Container7>
  );
}

function Text3() {
  return (
    <Text7>
      <Text6 text="Preview your storefront" />
      <Text5 text="View your shop as customers would see it and make final tweaks." />
    </Text7>
  );
}

function Container2() {
  return (
    <Container7>
      <Text3 />
      <ButtonText text="Preview Store" />
    </Container7>
  );
}

function Text4() {
  return (
    <Text7>
      <Text6 text="Join the Peerly community" />
      <Text5 text="Access support, updates, and feedback from other sellers in our community space." />
    </Text7>
  );
}

function Container3() {
  return (
    <Container7>
      <Text4 />
      <ButtonText text="Join Telegram" />
    </Container7>
  );
}

function Form() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl shrink-0 w-full"
      data-name="Form"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
          <Container />
          <Container1 />
          <Container2 />
          <Container3 />
        </div>
      </div>
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Container4() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <Text />
        <Form />
      </div>
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

export default function Home() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="Home">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full">
        <Sidebar />
        <Container6 />
      </div>
    </div>
  );
}