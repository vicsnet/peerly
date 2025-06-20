import { Button } from "../../../components/ui/button";

interface HeroBannerProps {
  onStartSellingClick?: () => void;
}

export function HeroBanner({ onStartSellingClick }: HeroBannerProps) {
  return (
    <div className="bg-black rounded-3xl relative w-full">
      <div className="overflow-clip relative w-full">
        <div className="flex flex-col items-start justify-between p-6 md:p-[40px] relative w-full min-h-[200px] md:min-h-[248px]">
          {/* Banner Text */}
          <div className="flex flex-col gap-1 items-start text-white mb-6 md:mb-0">
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-[48px] tracking-[-0.576px] leading-tight md:leading-[48px]">
              Turn Your Products into Profits
            </h1>
            <p className="font-normal text-sm md:text-[16px] leading-normal md:leading-[24px] max-w-full md:max-w-2xl">
              Join thousands of sellers growing their business online. It's free and easy to get started.
            </p>
          </div>
          
          {/* CTA Button */}
          <Button 
            variant="outline" 
            className="bg-white text-slate-900 rounded-md font-medium"
            onClick={onStartSellingClick}
          >
            Start Selling
          </Button>
        </div>
      </div>
    </div>
  );
}