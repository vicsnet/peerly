import svgPaths from "./svg-k4sa3enb2i";
import clsx from "clsx";
import { imgGroup } from "./svg-v5jfz";

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center relative size-full">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full">
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

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
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

function Sectionitems({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-2 min-h-px min-w-px relative shrink-0">
      <div className="absolute bottom-0 left-[-1.55%] right-[-1.55%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 266 8"
        >
          <g id="section items">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type FieldTextProps = {
  text: string;
};

function FieldText({ text }: FieldTextProps) {
  return (
    <Wrapper>
      <div className="box-border content-stretch flex flex-row items-center justify-start px-3 py-2 relative w-full">
        <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
          <p className="block leading-[24px] whitespace-pre">{text}</p>
        </div>
      </div>
    </Wrapper>
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
    <div
      className="h-24 relative rounded-[20px] shrink-0 w-full"
      data-name="Nav Head"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-24 items-center justify-start px-10 py-6 relative w-full">
          <PeerlyFullLogo />
        </div>
      </div>
    </div>
  );
}

function SectionItems() {
  return (
    <Sectionitems>
      <rect fill="white" height="8" transform="translate(4)" width="258" />
      <path
        d="M4 4H262"
        id="Line 1"
        stroke="var(--stroke-0, #111827)"
        strokeLinecap="round"
        strokeWidth="8"
      />
    </Sectionitems>
  );
}

function SectionItems1() {
  return (
    <Sectionitems>
      <rect fill="white" height="8" transform="translate(4)" width="258" />
      <path
        d="M4 4H262"
        id="Line 1"
        stroke="var(--stroke-0, #E2E8F0)"
        strokeLinecap="round"
        strokeWidth="8"
      />
    </Sectionitems>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative w-full">
        <SectionItems />
        <SectionItems1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center leading-[0] not-italic px-6 py-4 relative text-gray-900 w-full">
          <div className="css-cmxehs font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[30px] text-left text-nowrap tracking-[-0.225px]">
            <p className="adjustLetterSpacing block leading-[36px] whitespace-pre">
              Tell us about your business
            </p>
          </div>
          <div
            className="css-odvum font-['Inter:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[14px] text-center"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[24px]">
              This help us to showcase your business and products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Default() {
  return (
    <Wrapper2>
      <FieldText text="Enter your business name" />
    </Wrapper2>
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
    <Wrapper1>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Business name</p>
      </div>
      <InputWithButton />
    </Wrapper1>
  );
}

function Default1() {
  return (
    <Wrapper2>
      <FieldText text="Enter your business email" />
    </Wrapper2>
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
    <Wrapper1>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Business email</p>
      </div>
      <InputWithButton1 />
    </Wrapper1>
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
    <Wrapper additionalClassNames={["bg-[#ffffff]"]}>
      <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-2 relative w-full">
        <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
          <p className="block leading-[24px] whitespace-pre">
            Select your country
          </p>
        </div>
        <IconChevronDown />
      </div>
    </Wrapper>
  );
}

function Default2() {
  return (
    <Wrapper2>
      <Field2 />
    </Wrapper2>
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
    <Wrapper1>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Country</p>
      </div>
      <InputWithButton2 />
    </Wrapper1>
  );
}

function Default3() {
  return (
    <Wrapper2>
      <FieldText text="Enter your business address" />
    </Wrapper2>
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
    <Wrapper1>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Business address</p>
      </div>
      <InputWithButton3 />
    </Wrapper1>
  );
}

function Textarea() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#ffffff] h-20 ml-0 mt-5 relative rounded-md w-[476px]"
      data-name="textarea"
    >
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-md" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 h-20 items-start justify-start px-3 py-2 relative w-[476px]">
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
    <Wrapper1>
      <Frame3 />
    </Wrapper1>
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
      className="bg-slate-900 relative rounded-md shrink-0 w-full"
      data-name="button"
    >
      <Wrapper5>
        <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Next</p>
        </div>
      </Wrapper5>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-md shrink-0 w-full"
      data-name="button"
    >
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <Wrapper5>
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
          <p className="block leading-[24px] whitespace-pre">Back</p>
        </div>
      </Wrapper5>
    </div>
  );
}

function Action() {
  return (
    <div className="relative shrink-0 w-full" data-name="Action">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start p-[32px] relative w-full">
          <Text1 />
          <Action />
        </div>
      </div>
    </div>
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