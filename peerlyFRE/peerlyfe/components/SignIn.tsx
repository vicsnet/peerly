import { X } from "lucide-react";
// Import the images directly from figma assets
// import imgSymbolPng from "figma:asset/6b902610013a9c11fa62fab7fec58a4d2a35c9f2.png";
// import imgSymbolPng from "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070";
// https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070
// import imgLogoPng from "figma:asset/680449e5dac08f498764fbd6cda12356a66374b2.png";
// import imgLogoPng from "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070";
import { imgGroup } from "../imports/svg-5mh2g";
// import svgPaths from "../imports/svg-baymwh3e0j";

interface SignInProps {
  onSignIn: () => void;
  onSignUp: () => void;
  onClose?: () => void;
  isSellerFlow?: boolean;
}

export function SignIn({ onSignIn, onSignUp, onClose, isSellerFlow = false }: SignInProps) {
  return (
    <div className="bg-slate-50 min-h-screen w-full">
      <div className="flex flex-col gap-6 p-4 sm:p-6 md:p-[40px] max-w-[1440px] mx-auto">
        {/* Navigation bar with Peerly logo and close button */}
        <div className="bg-white h-24 rounded-[20px] w-full shadow-sm border border-slate-50">
          <div className="h-full flex items-center justify-between px-10 md:px-12">
            {/* Left side with logo - Using exact structure from Figma */}
            <div className="flex items-center gap-1" data-name="Peerly Full Logo">
              {/* Peerly Logo - Black square with mask */}
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
                          {/* <path
                            clipRule="evenodd"
                            d={svgPaths.p2008cb80}
                            fill="var(--fill-0, white)"
                            fillRule="evenodd"
                            id="Vector"
                          /> */}

                          
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Peerly text */}
              <div className="font-['Acme:Regular',_sans-serif] font-normal leading-[48px] text-[#000000] text-[48px]">
                Peerly
              </div>
            </div>

            {/* Right side with sign up link and close button */}
            <div className="flex items-center gap-6">
              <div className="text-[14px] text-gray-500">
                Don&#39t have an account? 
                <span 
                  onClick={onSignUp}
                  className="underline font-semibold text-gray-900 ml-1 cursor-pointer"
                >
                  Sign up
                </span>
              </div>
              <button 
                onClick={onClose}
                className="flex items-center justify-center cursor-pointer"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center justify-center mt-12">
          {/* Title section */}
          <div className="w-[540px] flex flex-col items-center text-center mb-6">
            <h1 className="text-[30px] font-semibold text-gray-900 tracking-[-0.225px] mb-1">
              {isSellerFlow ? "Sign in to start selling" : "Sign in to your account"}
            </h1>
            <p className="text-[14px] text-gray-900">
              {isSellerFlow 
                ? "Welcome! Sign in to your seller account or create a new one" 
                : "Welcome back! Sign in using your email, or continue with Google or Apple"}
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl w-[540px] shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8">
              {/* Email and password inputs */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium text-slate-900">Email</label>
                    <input 
                      type="email"
                      placeholder="Enter your email"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-[16px]"
                    />
                  </div>

                  {/* Password field */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between">
                      <label className="text-[14px] font-medium text-slate-900">Password</label>
                      <a href="#" className="text-[14px] text-gray-900 underline">Forgot password?</a>
                    </div>
                    <div className="relative">
                      <input 
                        type="password"
                        placeholder="Enter your password"
                        className="w-full border border-slate-300 rounded-md px-3 py-2 text-[16px] pr-8"
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6C1 6 2.5 2.5 6 2.5C9.5 2.5 11 6 11 6C11 6 9.5 9.5 6 9.5C2.5 9.5 1 6 1 6Z" stroke="#94A3B8" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6 7.5C6.82843 7.5 7.5 6.82843 7.5 6C7.5 5.17157 6.82843 4.5 6 4.5C5.17157 4.5 4.5 5.17157 4.5 6C4.5 6.82843 5.17157 7.5 6 7.5Z" stroke="#94A3B8" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-3">
                  <button 
                    className="bg-slate-900 text-white py-2 px-4 rounded-md text-[14px] font-medium"
                    onClick={onSignIn}
                  >
                    Sign In
                  </button>
                </div>
              </div>

              {/* Or continue with section */}
              <div className="flex items-center my-8">
                <div className="flex-1 h-px bg-slate-100"></div>
                <span className="px-4 text-[10px] text-gray-700">Or Continue with</span>
                <div className="flex-1 h-px bg-slate-100"></div>
              </div>

              {/* Social logins */}
              <div className="flex flex-col gap-3">
                {/* Google button with correct icon */}
                <button className="flex items-center justify-center gap-2 py-2 border border-slate-300 rounded-lg h-12">
                  <div 
                    className="bg-[50%_50%] bg-contain bg-no-repeat rounded shrink-0 size-6"
                    style={{ backgroundImage: `url('${imgGroup}')` }}
                  />
                  <span className="text-[14px] font-medium">Sign in with Google</span>
                </button>
                
                {/* Apple button with correct icon */}
                <button className="flex items-center justify-center gap-2 py-2 border border-slate-300 rounded-lg h-12">
                  <div 
                    className="bg-[50%_50%] bg-contain bg-no-repeat rounded shrink-0 size-6"
                    style={{ backgroundImage: `url('${imgGroup}')` }}
                  />
                  <span className="text-[14px] font-medium">Sign in with Apple</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}