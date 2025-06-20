import { useState } from "react";
import { X } from "lucide-react";
import { imgGroup } from "../imports/svg-v5jfz";
import svgPaths from "../imports/svg-k4sa3enb2i";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface BusinessRegistrationProps {
  onBack: () => void;
  onNext: (businessName?: string) => void;
}

export function BusinessRegistration({ onBack, onNext }: BusinessRegistrationProps) {
  const [businessData, setBusinessData] = useState({
    name: "",
    email: "",
    country: "",
    address: "",
    description: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBusinessData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (value: string) => {
    setBusinessData(prev => ({ ...prev, country: value }));
  };

  const handleNext = () => {
    // Pass the business name to the parent component
    onNext(businessData.name || "Business name");
  };

  return (
    <div className="bg-slate-50 min-h-screen w-full">
      <div className="flex flex-col items-center p-4 sm:p-6 md:p-[40px]">
        {/* Navigation bar with Peerly logo */}
        <div className="bg-white h-24 rounded-[20px] w-full shadow-sm border border-slate-50 mb-20">
          <div className="h-full flex items-center justify-between px-10 md:px-12">
            {/* Left side with logo */}
            <div className="flex items-center gap-1" data-name="Peerly Full Logo">
              <div className="bg-[#000000] overflow-clip relative rounded-lg shrink-0 size-12" data-name="Peerly_Logo">
                <div className="absolute left-[9px] overflow-clip size-[30px] top-[9px]" data-name="Frame">
                  <div className="absolute contents inset-0" data-name="Clip path group">
                    <div 
                      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[30px_30px]" 
                      data-name="Group"
                      style={{ maskImage: `url('${imgGroup}')` }}
                    >
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
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
                  </div>
                </div>
              </div>
              <div className="font-['Acme:Regular',_sans-serif] font-normal leading-[48px] text-[#000000] text-[48px]">
                Peerly
              </div>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="w-[540px] flex flex-row gap-6 items-center mb-6">
          <div className="flex-1 h-2 bg-slate-900 rounded-full"></div>
          <div className="flex-1 h-2 bg-slate-100 rounded-full"></div>
        </div>

        {/* Title section */}
        <div className="w-[540px] flex flex-col items-center text-center mb-6">
          <h1 className="text-[30px] font-semibold text-gray-900 tracking-[-0.225px] mb-1">
            Tell us about your business
          </h1>
          <p className="text-[14px] text-gray-900">
            This helps us to showcase your business and products
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl w-[540px] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col gap-4 mb-12">
              {/* Business name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-slate-900">Business name</label>
                <Input 
                  name="name"
                  placeholder="Enter your business name"
                  value={businessData.name}
                  onChange={handleChange}
                  className="border-slate-300"
                />
              </div>

              {/* Business email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-slate-900">Business email</label>
                <Input 
                  name="email"
                  placeholder="Enter your business email"
                  value={businessData.email}
                  onChange={handleChange}
                  className="border-slate-300"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-slate-900">Country</label>
                <Select value={businessData.country} onValueChange={handleCountryChange}>
                  <SelectTrigger className="border-slate-300">
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Business address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-slate-900">Business address</label>
                <Input 
                  name="address"
                  placeholder="Enter your business address"
                  value={businessData.address}
                  onChange={handleChange}
                  className="border-slate-300"
                />
              </div>

              {/* Business description */}
              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-[14px] font-medium text-slate-900">Business description</label>
                <Textarea 
                  name="description"
                  placeholder="Enter a short description about your business"
                  value={businessData.description}
                  onChange={handleChange}
                  className="border-slate-300 h-20 resize-none"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <Button 
                className="bg-slate-900 text-white w-full"
                onClick={handleNext}
              >
                Next
              </Button>
              
              <Button 
                variant="outline" 
                className="border-slate-200 w-full"
                onClick={onBack}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}