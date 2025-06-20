import { imgGroup } from "../imports/svg-hzbor";

export function Logo() {
  return (
    <div className="flex items-center gap-1">
      <div className="bg-[#000000] overflow-clip relative rounded-[6.66667px] shrink-0 size-10">
        <div className="absolute left-[7.5px] overflow-clip size-[25px] top-[7.5px]">
          <div className="absolute contents inset-0">
            <div
              className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[25px_25px]"
              style={{ maskImage: `url('${imgGroup}')` }}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 25 25"
              >
                <path
                  clipRule="evenodd"
                  d="M12.5 2.75C12.5 1.23122 11.2688 0 9.75 0H2.75C1.23122 0 0 1.23122 0 2.75V9.83992C0 11.3587 1.23122 12.5899 2.75 12.5899H9.75C11.2688 12.5899 12.5 13.8211 12.5 15.3399V22.25C12.5 23.7687 13.7313 25 15.25 25H22.25C23.7687 25 25 23.7687 25 22.25V15.16C25 13.6412 23.7687 12.4101 22.25 12.4101H15.25C13.7313 12.4101 12.5 11.1789 12.5 9.66006V2.75Z"
                  fill="white"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="font-['Acme:Regular',_sans-serif] font-normal text-[#000000] text-[48px] leading-[48px]">
        Peerly
      </div>
    </div>
  );
}