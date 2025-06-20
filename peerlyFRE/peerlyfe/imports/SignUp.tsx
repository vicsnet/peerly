import svgPaths from "./svg-6e28ma7prs";
import clsx from "clsx";
import imgSymbolPng from "figma:asset/6b902610013a9c11fa62fab7fec58a4d2a35c9f2.png";
import imgLogoPng from "figma:asset/680449e5dac08f498764fbd6cda12356a66374b2.png";
import { imgGroup } from "./svg-lun2o";
type BackgroundImage138Props = {
  additionalClassNames?: string[];
};

function BackgroundImage138({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage138Props>) {
  return <p className={clsx(additionalClassNames)}>{children}</p>;
}
type BackgroundImage121Props = {
  additionalClassNames?: string[];
};

function BackgroundImage121({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage121Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      {children}
    </div>
  );
}

function BackgroundImage104({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage121>
      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage121>
  );
}

function BackgroundImage88({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage121>
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage121>
  );
}

function InputwithbuttonBackgroundImage({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage121>
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage121>
  );
}

function BackgroundImage57({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage42({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage121>
      <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </BackgroundImage121>
  );
}

function FieldBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage121 additionalClassNames={["rounded-md"]}>
      <div className="absolute border border-slate-300 border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center relative size-full">
        {children}
      </div>
    </BackgroundImage121>
  );
}

function BackgroundImage13({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage121 additionalClassNames={["h-12", "rounded-lg"]}>
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
          {children}
        </div>
      </div>
    </BackgroundImage121>
  );
}

function Group() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[25px_25px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 25 25"
      >
        <g id="Group">
          <path
            clipRule="evenodd"
            d={svgPaths.p314aef80}
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
      className="absolute left-[7.5px] overflow-clip size-[25px] top-[7.5px]"
      data-name="Frame"
    >
      <ClipPathGroup />
    </div>
  );
}

function PeerlyLogo() {
  return (
    <div
      className="bg-[#000000] overflow-clip relative rounded-[6.66667px] shrink-0 size-10"
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
    <BackgroundImage121 additionalClassNames={["h-24", "rounded-[20px]"]}>
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row h-24 items-center justify-between px-10 py-6 relative w-full">
          <PeerlyFullLogo />
          <div className="css-qsgf2p font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-gray-500 text-nowrap text-right">
            <BackgroundImage138
              additionalClassNames={["text-[14px]", "whitespace-pre"]}
            >
              <span className="leading-[14px] text-gray-500">{`Already have an account? `}</span>
              <span className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic text-gray-900">
                Sign in
              </span>
            </BackgroundImage138>
          </div>
        </div>
      </div>
    </BackgroundImage121>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-[540px]" data-name="Text">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center leading-[0] not-italic px-6 py-4 relative text-gray-900 w-[540px]">
          <div className="css-wkyhdm font-['Inter:Semi_Bold',_sans-serif] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 text-[30px] text-left text-nowrap tracking-[-0.225px]">
            <p className="[text-overflow:inherit] adjustLetterSpacing block leading-[36px] overflow-inherit whitespace-pre">{`Create an account `}</p>
          </div>
          <div
            className="css-odvum font-['Inter:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[14px] text-center"
            style={{ width: "min-content" }}
          >
            <BackgroundImage138
              additionalClassNames={["block", "leading-[24px]"]}
            >
              Get started in seconds. Register using your email, or connect your
              crypto wallet. (You can always connect both to your account
              later).
            </BackgroundImage138>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field() {
  return (
    <FieldBackgroundImage>
      <div className="box-border content-stretch flex flex-row items-center justify-start px-3 py-2 relative w-full">
        <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
          <p className="block leading-[24px] whitespace-pre">
            Enter your email
          </p>
        </div>
      </div>
    </FieldBackgroundImage>
  );
}

function Default() {
  return (
    <BackgroundImage57>
      <Field />
    </BackgroundImage57>
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
    <BackgroundImage42>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Email</p>
      </div>
      <InputWithButton />
    </BackgroundImage42>
  );
}

function IconEye() {
  return (
    <div className="relative shrink-0 size-3" data-name="icon/eye">
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

function Field1() {
  return (
    <FieldBackgroundImage>
      <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-2 relative w-full">
        <div className="css-ofdctn font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap text-slate-400">
          <p className="block leading-[24px] whitespace-pre">
            Set your password
          </p>
        </div>
        <IconEye />
      </div>
    </FieldBackgroundImage>
  );
}

function Default1() {
  return (
    <BackgroundImage57>
      <Field1 />
    </BackgroundImage57>
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
    <BackgroundImage42>
      <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
        <p className="block leading-[20px] whitespace-pre">Password</p>
      </div>
      <InputWithButton1 />
    </BackgroundImage42>
  );
}

function Text1() {
  return (
    <BackgroundImage88>
      <Input />
      <Input1 />
    </BackgroundImage88>
  );
}

function Button() {
  return (
    <BackgroundImage121 additionalClassNames={["bg-slate-900", "rounded-md"]}>
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full">
          <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
            <p className="block leading-[24px] whitespace-pre">
              Create Account
            </p>
          </div>
        </div>
      </div>
    </BackgroundImage121>
  );
}

function Checkbox() {
  return (
    <BackgroundImage104>
      <div className="relative rounded-sm shrink-0 size-3.5">
        <div className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-sm" />
      </div>
      <div className="basis-0 css-qsgf2p font-['Inter:Medium',_sans-serif] font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[0px] text-gray-500 text-left">
        <BackgroundImage138
          additionalClassNames={["leading-[16px]", "text-[10px]"]}
        >
          <span className="font-['Inter:Regular',_sans-serif] font-normal">{`By selecting Create an account, you agree to our `}</span>
          <span className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] font-['Inter:Semi_Bold',_sans-serif] font-semibold text-gray-900">
            User Agreement
          </span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal">{` and acknowledge reading our `}</span>
          <span className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] font-['Inter:Semi_Bold',_sans-serif] font-semibold text-gray-900">
            User Privacy Notice
          </span>
          <span className="font-['Inter:Regular',_sans-serif] font-normal text-gray-900">
            .
          </span>
        </BackgroundImage138>
      </div>
    </BackgroundImage104>
  );
}

function Action() {
  return (
    <BackgroundImage88>
      <Button />
      <Checkbox />
    </BackgroundImage88>
  );
}

function Container() {
  return (
    <BackgroundImage121>
      <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative w-full">
        <Text1 />
        <Action />
      </div>
    </BackgroundImage121>
  );
}

function SectionItems() {
  return (
    <div
      className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0"
      data-name="section items"
    >
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 190 1"
        >
          <g id="section items">
            <rect
              fill="white"
              height="0"
              transform="translate(0 1)"
              width="190"
            />
            <line
              id="Line 1"
              stroke="var(--stroke-0, #E2E8F0)"
              x2="190"
              y1="0.5"
              y2="0.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <BackgroundImage104>
      <SectionItems />
      <div className="css-o4ypm7 flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-gray-700 text-nowrap">
        <p className="block leading-[14px] whitespace-pre">Or Continue with</p>
      </div>
      <SectionItems />
    </BackgroundImage104>
  );
}

function Google() {
  return (
    <BackgroundImage13>
      <div
        className="bg-[50%_50%] bg-contain bg-no-repeat rounded shrink-0 size-6"
        data-name="Symbol.png"
        style={{ backgroundImage: `url('${imgSymbolPng}')` }}
      />
      <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">
          Sign in with Google
        </p>
      </div>
    </BackgroundImage13>
  );
}

function Apple() {
  return (
    <BackgroundImage13>
      <div
        className="bg-[50%_50%] bg-contain bg-no-repeat rounded shrink-0 size-6"
        data-name="Logo.png"
        style={{ backgroundImage: `url('${imgLogoPng}')` }}
      />
      <div className="css-w9luqw font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[14px] whitespace-pre">
          Sign in with Apple
        </p>
      </div>
    </BackgroundImage13>
  );
}

function Login() {
  return (
    <BackgroundImage88>
      <Google />
      <Apple />
    </BackgroundImage88>
  );
}

function Content() {
  return (
    <BackgroundImage121>
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[32px] relative w-full">
          <Container />
          <Container1 />
          <Login />
        </div>
      </div>
    </BackgroundImage121>
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

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative">
        <Text />
        <Form />
      </div>
    </div>
  );
}

export default function SignUp() {
  return (
    <div className="bg-slate-50 relative size-full" data-name="Sign Up">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-20 items-center justify-start p-[40px] relative size-full">
          <NavHead />
          <Container2 />
        </div>
      </div>
    </div>
  );
}