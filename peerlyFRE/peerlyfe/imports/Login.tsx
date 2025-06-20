import imgSymbolPng from "figma:asset/6b902610013a9c11fa62fab7fec58a4d2a35c9f2.png";
import imgLogoPng from "figma:asset/680449e5dac08f498764fbd6cda12356a66374b2.png";

function BackgroundImage13({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-12 relative rounded-lg shrink-0 w-full">
      <div className="absolute border border-slate-300 border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-12 items-center justify-center px-3 py-4 relative w-full">
          {children}
        </div>
      </div>
    </div>
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

export default function Login() {
  return (
    <div className="relative size-full" data-name="Login">
      <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative size-full">
        <Google />
        <Apple />
      </div>
    </div>
  );
}