import clsx from "clsx";
import imgAbsurdDesignChapter1041 from "figma:asset/0d1338766288f9eb783cd08eb0d1d04a45e8b93c.png";
type BackgroundImage46Props = {
  additionalClassNames?: string[];
};

function BackgroundImage46({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage46Props>) {
  return (
    <div
      className={clsx(
        "flex items-center relative size-full",
        additionalClassNames,
      )}
    >
      {children}
    </div>
  );
}
type BackgroundImage30Props = {
  additionalClassNames?: string[];
};

function BackgroundImage30({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage30Props>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      {children}
    </div>
  );
}

function BackgroundImage14({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage46 additionalClassNames={["flex-row", "justify-center"]}>
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-4 py-2 relative w-full">
        {children}
      </div>
    </BackgroundImage46>
  );
}

function Frame7() {
  return (
    <BackgroundImage30>
      <div className="box-border content-stretch flex flex-col gap-1 items-center justify-center leading-[0] not-italic p-0 relative text-[14px] text-center w-full">
        <div
          className="css-odvum font-['Inter:Semi_Bold',_sans-serif] font-semibold min-w-full relative shrink-0 text-gray-900"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[20px]">One Vendor at a Time</p>
        </div>
        <div
          className="css-qsgf2p font-['Inter:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-gray-500"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[20px]">
            You can only checkout items from one vendor at a time. Please review
            your cart and remove items from other vendors to continue
          </p>
        </div>
      </div>
    </BackgroundImage30>
  );
}

function EmptyState() {
  return (
    <BackgroundImage30 additionalClassNames={["bg-[#ffffff]", "rounded-md"]}>
      <BackgroundImage46 additionalClassNames={["flex-col"]}>
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start px-8 py-4 relative w-full">
          <div
            className="bg-[50%_50%] bg-cover bg-no-repeat shrink-0 size-20"
            data-name="absurd.design - Chapter 1 - 04 1"
            style={{ backgroundImage: `url('${imgAbsurdDesignChapter1041}')` }}
          />
          <Frame7 />
        </div>
      </BackgroundImage46>
    </BackgroundImage30>
  );
}

function Button() {
  return (
    <BackgroundImage30 additionalClassNames={["bg-slate-900", "rounded-md"]}>
      <BackgroundImage14>
        <div className="css-xoyyvm font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
          <p className="block leading-[24px] whitespace-pre">Review Cart</p>
        </div>
      </BackgroundImage14>
    </BackgroundImage30>
  );
}

function Button1() {
  return (
    <BackgroundImage30 additionalClassNames={["bg-[#ffffff]", "rounded-md"]}>
      <div className="absolute border border-slate-200 border-solid inset-0 pointer-events-none rounded-md" />
      <BackgroundImage14>
        <div className="css-98cyo3 font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-left text-nowrap text-slate-900">
          <p className="block leading-[24px] whitespace-pre">Back</p>
        </div>
      </BackgroundImage14>
    </BackgroundImage30>
  );
}

function Actions() {
  return (
    <BackgroundImage30>
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start px-6 py-3 relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </BackgroundImage30>
  );
}

function Content() {
  return (
    <BackgroundImage30>
      <BackgroundImage46 additionalClassNames={["flex-col", "justify-center"]}>
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center p-[24px] relative w-full">
          <EmptyState />
          <Actions />
        </div>
      </BackgroundImage46>
    </BackgroundImage30>
  );
}

export default function Modal() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-xl size-full"
      data-name="Modal"
    >
      <div className="box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative size-full">
        <Content />
      </div>
      <div className="absolute border border-slate-50 border-solid inset-0 pointer-events-none rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}