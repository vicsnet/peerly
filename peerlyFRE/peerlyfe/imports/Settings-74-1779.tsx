import svgPaths from "./svg-ia9rqgnjoz";
import clsx from "clsx";
import imgAvatar from "figma:asset/5bee9393a6a3a30c7f2cff6dab100b8b77601184.png";
import imgCoverImage from "figma:asset/866bf2f271640be2178c0ed55dc0a9c1d6612e20.png";
import imgProfileImage from "figma:asset/51cef9ab45443a507f870addc84990d9da50204f.png";
import { imgGroup } from "./svg-y85u7";
import Image from "next/image";

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

function BackgroundImage104({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage89({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}
type TopbarBackgroundImageProps = {
  additionalClassNames?: string[];
};

function TopbarBackgroundImage({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<TopbarBackgroundImageProps>) {
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

function BackgroundImage58({ children }: React.PropsWithChildren<{}>) {
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
type BackgroundImage42Props = {
  additionalClassNames?: string[];
};

function BackgroundImage42({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage42Props>) {
  return (
    <div
      className={clsx(
        "relative rounded-md shrink-0 w-full",
        additionalClassNames,
      )}
    >
      <div className="absolute border border-slate-300 border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
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
type BackgroundImage13Props = {
  additionalClassNames?: string[];
};

function BackgroundImage13({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage13Props>) {
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
type FieldBackgroundImageAndTextProps = {
  text: string;
};

function FieldBackgroundImageAndText({
  text,
}: FieldBackgroundImageAndTextProps) {
  return (
    <BackgroundImage42>
      <div className="box-border content-stretch flex flex-row items-center justify-start px-3 py-2 relative w-full">
        <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
          <p className="block leading-[24px] whitespace-pre">{text}</p>
        </div>
      </div>
    </BackgroundImage42>
  );
}
type TabitemBackgroundImageAndTextProps = {
  text: string;
};

function TabitemBackgroundImageAndText({
  text,
}: TabitemBackgroundImageAndTextProps) {
  return (
    <BackgroundImage13>
      <div className="css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-700">
        <p className="block leading-[20px] whitespace-pre">{text}</p>
      </div>
    </BackgroundImage13>
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
    <BackgroundImage58>
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
    </BackgroundImage58>
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
    <BackgroundImage58>
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
    </BackgroundImage58>
  );
}

function MenuItem1() {
  return (
    <MenuitemBackgroundImage additionalClassNames={["bg-[#ffffff]"]}>
      <IconPackage2 />
      <div className="basis-0 css-bqjh75 font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left text-slate-700">
        <p className="block leading-[20px]">Products</p>
      </div>
    </MenuitemBackgroundImage>
  );
}

function IconBox() {
  return (
    <BackgroundImage58>
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
    </BackgroundImage58>
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
    <BackgroundImage58>
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
    </BackgroundImage58>
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
    <BackgroundImage58>
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
    </BackgroundImage58>
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
    <BackgroundImage58>
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
    </BackgroundImage58>
  );
}

function MenuItem5() {
  return (
    <MenuitemBackgroundImage
      additionalClassNames={["bg-slate-100", "rounded-md"]}
    >
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
    <BackgroundImage58>
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
    </BackgroundImage58>
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
    <TopbarBackgroundImage additionalClassNames={["h-20"]}>
      <div className="box-border content-stretch flex flex-row gap-4 h-20 items-center justify-start px-4 py-2.5 relative w-full">
        <div className="css-w9luqw font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left text-nowrap">
          <p className="block leading-[28px] whitespace-pre">Settings</p>
        </div>
      </div>
    </TopbarBackgroundImage>
  );
}

function TabItem1() {
  return (
    <BackgroundImage13 additionalClassNames={["bg-[#ffffff]"]}>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Business</p>
      </div>
    </BackgroundImage13>
  );
}

function Tabs() {
  return (
    <div className="bg-slate-100 relative rounded-md shrink-0" data-name="tabs">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-start p-[5px] relative">
          <TabitemBackgroundImageAndText text="Profile" />
          <TabItem1 />
          <TabitemBackgroundImageAndText text="Wallet" />
          <TabitemBackgroundImageAndText text="Notifications" />
        </div>
      </div>
    </div>
  );
}

function Topbar1() {
  return (
    <TopbarBackgroundImage>
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start px-4 py-3 relative w-full">
        <Tabs />
      </div>
    </TopbarBackgroundImage>
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

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        <div className="css-co9bdk font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[20px] text-gray-900 text-left text-nowrap tracking-[-0.1px]">
          <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[28px] overflow-inherit whitespace-pre">
            Business information
          </p>
        </div>
      </div>
    </div>
  );
}

function Images() {
  return (
    <div
      className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
      data-name="Images"
    >
      <div
        className="[grid-area:1_/_1] bg-[50%_50%] bg-cover bg-no-repeat h-40 ml-0 mt-0 rounded-2xl w-[812px]"
        data-name="Cover Image"
        style={{ backgroundImage: `url('${imgCoverImage}')` }}
      />
      <div
        className="[background-size:cover,_auto] [grid-area:1_/_1] bg-slate-100 ml-10 mt-[110px] relative rounded-[160px] size-[100px]"
        data-name="Profile Image"
        style={{ backgroundImage: `url('${imgProfileImage}')` }}
      >
        <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-[160px]" />
      </div>
    </div>
  );
}

function Default() {
  return (
    <BackgroundImage104>
      <FieldBackgroundImageAndText text="Enter your business name" />
    </BackgroundImage104>
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
    <BackgroundImage89>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Business name</p>
      </div>
      <InputWithButton />
    </BackgroundImage89>
  );
}

function Default1() {
  return (
    <BackgroundImage104>
      <FieldBackgroundImageAndText text="Enter your business email" />
    </BackgroundImage104>
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
    <BackgroundImage89>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Business email</p>
      </div>
      <InputWithButton1 />
    </BackgroundImage89>
  );
}

function IconChevronDown() {
  return (
    <div className="relative shrink-0 size-3" data-name="icon/chevron-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="icon/chevron-down">
          <path
            d="M3 4.5L6 7.5L9 4.5"
            id="Vector"
            stroke="var(--stroke-0, #94A3B8)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Field2() {
  return (
    <BackgroundImage42 additionalClassNames={["bg-[#ffffff]"]}>
      <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-2 relative w-full">
        <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
          <p className="block leading-[24px] whitespace-pre">
            Select your country
          </p>
        </div>
        <IconChevronDown />
      </div>
    </BackgroundImage42>
  );
}

function Default2() {
  return (
    <BackgroundImage104>
      <Field2 />
    </BackgroundImage104>
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
    <BackgroundImage89>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Country</p>
      </div>
      <InputWithButton2 />
    </BackgroundImage89>
  );
}

function Default3() {
  return (
    <BackgroundImage104>
      <FieldBackgroundImageAndText text="Enter your business address" />
    </BackgroundImage104>
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
    <BackgroundImage89>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Business address</p>
      </div>
      <InputWithButton3 />
    </BackgroundImage89>
  );
}

function Textarea() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#ffffff] h-20 ml-0 mt-5 relative rounded-md w-[812px]"
      data-name="textarea"
    >
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-20 items-start justify-start px-3 py-2 relative w-[812px]">
          <div className="basis-0 css-ofdctn font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-left text-slate-400">
            <p className="block leading-[24px]">
              Enter a short description about your business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] css-w9luqw font-['Inter:Medium',_sans-serif] font-medium ml-0 mt-0 not-italic relative text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">
          Business description
        </p>
      </div>
      <Textarea />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
        <Group2 />
      </div>
    </div>
  );
}

function Textarea1() {
  return (
    <BackgroundImage89>
      <Frame3 />
    </BackgroundImage89>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <Input />
        <Input1 />
        <Input2 />
        <Input3 />
        <Textarea1 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="bg-slate-700 relative rounded-md shrink-0"
      data-name="button"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1.5 relative">
          <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              Change Password
            </p>
          </div>
        </div>
      </div>
    </div>
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
          <Text />
          <Images />
          <Text1 />
          <Button />
        </div>
      </div>
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Container() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <Form />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-start justify-start px-[180px] py-6 relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative shrink-0"
      data-name="Container"
    >
      <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-0 relative size-full">
        <Topbar2 />
        <Container1 />
      </div>
    </div>
  );
}

export default function Settings() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="Settings">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative size-full">
        <Sidebar />
        <Container2 />
      </div>
    </div>
  );
}