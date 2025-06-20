import svgPaths from "./svg-b26jlad1zd";
import clsx from "clsx";

function Wrapper6({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative w-full">
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

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
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
    <div className={clsx("relative", additionalClassNames)}>
      <div className="flex flex-row items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
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
type TextareaTextProps = {
  text: string;
};

function TextareaText({ text }: TextareaTextProps) {
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
type FieldTextProps = {
  text: string;
};

function FieldText({ text }: FieldTextProps) {
  return (
    <Wrapper>
      <p className="block leading-[24px] whitespace-pre">{text}</p>
    </Wrapper>
  );
}

function Button() {
  return (
    <Wrapper1 additionalClassNames={["bg-slate-700", "rounded-md", "shrink-0"]}>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
        <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Publish</p>
        </div>
      </div>
    </Wrapper1>
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
        <Button />
        <IconX />
      </div>
    </div>
  );
}

function Text() {
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

function Text1() {
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
    <div className="relative shrink-0 size-4" data-name="icon/upload">
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

function Button1() {
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
          <Text1 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Default() {
  return (
    <Wrapper3>
      <FieldText text="Enter product name" />
    </Wrapper3>
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
    <Wrapper2>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Product name</p>
      </div>
      <InputWithButton />
    </Wrapper2>
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
      <TextareaText text="Enter product description" />
    </div>
  );
}

function Frame3() {
  return (
    <Wrapper6>
      <Group2 />
    </Wrapper6>
  );
}

function Textarea1() {
  return (
    <Wrapper2>
      <Frame3 />
    </Wrapper2>
  );
}

function Field2() {
  return (
    <Wrapper>
      <p className="leading-[24px] whitespace-pre">
        <span className="text-slate-900">$</span>
        <span>{` Enter product price`}</span>
      </p>
    </Wrapper>
  );
}

function Default1() {
  return (
    <Wrapper3>
      <Field2 />
    </Wrapper3>
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
    <Wrapper2>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Product price</p>
      </div>
      <InputWithButton1 />
    </Wrapper2>
  );
}

function Default2() {
  return (
    <Wrapper3>
      <FieldText text="Enter quantity" />
    </Wrapper3>
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
    <Wrapper2>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Stock quantity</p>
      </div>
      <InputWithButton2 />
    </Wrapper2>
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
      <TextareaText text="Enter the product specifications, sizes" />
    </div>
  );
}

function Frame4() {
  return (
    <Wrapper6>
      <Group3 />
    </Wrapper6>
  );
}

function Textarea3() {
  return (
    <Wrapper2>
      <Frame4 />
    </Wrapper2>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-[24px] relative w-full">
          <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              Product Images
            </p>
          </div>
          <Field />
          <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[16px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              Product Details
            </p>
          </div>
          <Input />
          <Textarea1 />
          <Input1 />
          <Input2 />
          <Textarea3 />
        </div>
      </div>
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
        <Text />
        <Content />
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

export default function Background() {
  return (
    <Wrapper1 additionalClassNames={["bg-[rgba(0,0,0,0.5)]", "size-full"]}>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-[10px] relative size-full">
        <Modal />
      </div>
    </Wrapper1>
  );
}