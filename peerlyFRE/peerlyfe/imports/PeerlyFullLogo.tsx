import svgPaths from "./svg-neimfk3jc1";
import { imgGroup } from "./svg-bz4bn";

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

export default function PeerlyFullLogo() {
  return (
    <div className="relative size-full" data-name="Peerly Full Logo">
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative size-full">
        <PeerlyLogo />
        <div className="css-yqdygo font-['Acme:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#000000] text-[48px] text-left text-nowrap">
          <p className="block leading-[48px] whitespace-pre">Peerly</p>
        </div>
      </div>
    </div>
  );
}