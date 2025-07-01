import { useState } from "react";
import { Upload } from "lucide-react";
import { imgGroup } from "../imports/svg-pzlog";
import svgPaths from "../imports/svg-fkxcq3hg3c";
import { Button } from "./ui/button";
import Image from "next/image";

interface BusinessImagesProps {
  onBack: () => void;
  onComplete: () => void;
  onSkip?: () => void;
}

export function BusinessImages({ onBack, onComplete, onSkip }: BusinessImagesProps) {
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverFile(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  if(logoFile){
    console.log(logoFile)
  }
  if(coverFile){
    console.log(coverFile)
  }

  return (
    <div className="bg-slate-50 min-h-screen w-full">
      <div className="flex flex-col items-center p-4 sm:p-6 md:p-[40px]">
        {/* Navigation bar with Peerly logo and skip button */}
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

            {/* Skip button */}
            {onSkip && (
              <button 
                onClick={onSkip}
                className="font-semibold text-[14px] text-gray-900 underline"
              >
                Skip
              </button>
            )}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="w-[540px] flex flex-row gap-6 items-center mb-6">
          <div className="flex-1 h-2 bg-slate-900 rounded-full"></div>
          <div className="flex-1 h-2 bg-slate-900 rounded-full"></div>
        </div>

        {/* Title section */}
        <div className="w-[540px] flex flex-col items-center text-center mb-6">
          <h1 className="text-[30px] font-semibold text-gray-900 tracking-[-0.225px] mb-1">
            Upload your business Images
          </h1>
          <p className="text-[14px] text-gray-900">
            This allows your customers to get to know your business
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl w-[540px] shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8">
            <div className="flex flex-col gap-5 mb-12">
              {/* Business logo upload */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-slate-900">Business logo</label>
                <div className="border border-dashed border-slate-300 rounded-md p-6">
                  {logoPreview ? (
                    <div className="relative">
                      <Image 
                        src={logoPreview} 
                        alt="Business logo preview" 
                        width={24}
                        height={24}
                        className="w-24 h-24 mx-auto object-cover rounded-md"
                      />
                      <button 
                        onClick={() => {setLogoPreview(null); setLogoFile(null);}}
                        className="absolute top-0 right-0 bg-white rounded-full p-1 shadow-md"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 3L3 9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 3L9 9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="text-center">
                        <p className="text-[16px] text-slate-400">Choose image or drag and drop it here</p>
                        <p className="text-[14px] text-slate-400">JPG, JPEG, PNG. Max 10MB</p>
                      </div>
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/jpg"
                          onChange={handleLogoChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex items-center gap-2 border-slate-200"
                        >
                          <Upload className="h-4 w-4" />
                          <span className="text-[12px] font-medium">Upload</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Business cover image upload */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-slate-900">Business cover image</label>
                <div className="border border-dashed border-slate-300 rounded-md p-6">
                  {coverPreview ? (
                    <div className="relative">
                      <Image 
                        src={coverPreview} 
                        alt="Business cover preview" 
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <button 
                        onClick={() => {setCoverPreview(null); setCoverFile(null);}}
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 3L3 9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 3L9 9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <div className="text-center">
                        <p className="text-[16px] text-slate-400">Choose image or drag and drop it here</p>
                        <p className="text-[14px] text-slate-400">JPG, JPEG, PNG. Max 10MB</p>
                      </div>
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/jpeg,image/png,image/jpg"
                          onChange={handleCoverChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex items-center gap-2 border-slate-200"
                        >
                          <Upload className="h-4 w-4" />
                          <span className="text-[12px] font-medium">Upload</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <Button 
                className="bg-slate-900 text-white w-full"
                onClick={onComplete}
              >
                Complete
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