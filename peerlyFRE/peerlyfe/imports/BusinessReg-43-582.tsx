import svgPaths from "./svg-fkxcq3hg3c";
import clsx from "clsx";
import { imgGroup } from "./svg-pzlog";
type Wrapper1Props = {
  additionalClassNames?: string[];
};

function Wrapper1({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      {children}
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
    <div className={clsx("relative rounded-md shrink-0", additionalClassNames)}>
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}
type DefaultTextProps = {
  text: string;
};

function DefaultText({ text }: DefaultTextProps) {
  return (
    <Wrapper1>
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
          <p className="block leading-[20px] whitespace-pre">{text}</p>
        </div>
        <Field />
      </div>
    </Wrapper1>
  );
}

function Field() {
  return (
    <Wrapper1 additionalClassNames={["rounded-md"]}>
      <div className="absolute border border-dashed border-slate-300 inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center p-[24px] relative w-full">
          <Text1
            text="Choose image or drag and drop it here"
            text1="JPG, JPEG, PNG. Max 10MB"
          />
          <ButtonText text="Upload" />
        </div>
      </div>
    </Wrapper1>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <Wrapper>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-1 relative">
        <Iconupload />
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-left text-nowrap text-slate-900">
          <p className="block leading-[20px] whitespace-pre">{text}</p>
        </div>
      </div>
    </Wrapper>
  );
}

function Iconupload() {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
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
      </svg>
    </div>
  );
}
type Text1Props = {
  text: string;
  text1: string;
};

function Text1({ text, text1 }: Text1Props) {
  return (
    <Wrapper1>
      <div className="box-border content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-1 items-center justify-start leading-[0] not-italic p-0 relative text-center text-nowrap text-slate-400 w-full">
        <div className="css-ofdctn relative shrink-0 text-[16px]">
          <p className="block leading-[24px] text-nowrap whitespace-pre">
            {text}
          </p>
        </div>
        <div className="css-ofdctn relative shrink-0 text-[14px]">
          <p className="block leading-[20px] text-nowrap whitespace-pre">
            {text1}
          </p>
        </div>
      </div>
    </Wrapper1>
  );
}

function Group() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[30px_30px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p2008cb80}
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
      className="absolute left-[9px] overflow-clip size-[30px] top-[9px]"
      data-name="Frame"
    >
      <ClipPathGroup />
    </div>
  );
}

function PeerlyLogo() {
  return (
    <div
      className="bg-[#000000] overflow-clip relative rounded-lg shrink-0 size-12"
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

function NavHead() {
  return (
    <Wrapper1 additionalClassNames={["h-24", "rounded-[20px]"]}>
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-24 items-center justify-between px-10 py-6 relative w-full">
          <PeerlyFullLogo />
          <div className="css-qsgf2p font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-gray-500 text-nowrap text-right">
            <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] text-[14px] text-gray-900 whitespace-pre">
              Skip
            </p>
          </div>
        </div>
      </div>
    </Wrapper1>
  );
}

function SectionItems() {
  return (
    <div
      className="basis-0 grow h-2 min-h-px min-w-px relative shrink-0"
      data-name="section items"
    >
      <div className="absolute bottom-0 left-[-1.55%] right-[-1.55%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 266 8"
        >
          <g id="section items">
            <rect
              fill="white"
              height="8"
              transform="translate(4)"
              width="258"
            />
            <path
              d="M4 4H262"
              id="Line 1"
              stroke="var(--stroke-0, #111827)"
              strokeLinecap="round"
              strokeWidth="8"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <Wrapper1>
      <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative w-full">
        {[...Array(2).keys()].map((_, i) => (
          <SectionItems key={i} />
        ))}
      </div>
    </Wrapper1>
  );
}

function Text() {
  return (
    <Wrapper1>
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center leading-[0] not-italic px-6 py-4 relative text-gray-900 w-full">
          <div className="css-cmxehs font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[30px] text-left text-nowrap tracking-[-0.225px]">
            <p className="adjustLetterSpacing block leading-[36px] whitespace-pre">
              Upload your business Images
            </p>
          </div>
          <div
            className="css-odvum font-['Inter:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[14px] text-center"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[24px]">
              This allow your customers to get hold of your business
            </p>
          </div>
        </div>
      </div>
    </Wrapper1>
  );
}

function Box() {
  return (
    <Wrapper1>
      <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative w-full">
        <DefaultText text="Business logo" />
        <DefaultText text="Business cover image" />
      </div>
    </Wrapper1>
  );
}

function Button2() {
  return (
    <Wrapper1 additionalClassNames={["bg-slate-900", "rounded-md"]}>
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full">
          <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Complete</p>
          </div>
        </div>
      </div>
    </Wrapper1>
  );
}

function Button3() {
  return (
    <Wrapper additionalClassNames={["bg-[#ffffff]", "w-full"]}>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full">
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
          <p className="block leading-[24px] whitespace-pre">Close</p>
        </div>
      </div>
    </Wrapper>
  );
}

function Action() {
  return (
    <Wrapper1>
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        <Button2 />
        <Button3 />
      </div>
    </Wrapper1>
  );
}

function Content() {
  return (
    <Wrapper1>
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start p-[32px] relative w-full">
          <Box />
          <Action />
        </div>
      </div>
    </Wrapper1>
  );
}

function Form() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl shrink-0 w-[540px]"
      data-name="Form"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative w-[540px]">
        <Content />
      </div>
      <div className="absolute border border-slate-100 border-solid inset-0 pointer-events-none rounded-xl" />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[540px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative w-[540px]">
        <Container />
        <Text />
        <Form />
      </div>
    </div>
  );
}

export default function BusinessReg() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="Business reg">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-20 items-center justify-start p-[40px] relative size-full">
          <NavHead />
          <Container1 />
        </div>
      </div>
    </div>
  );
}