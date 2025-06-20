import { ImageWithFallback } from "./figma/ImageWithFallback";

interface VendorHeaderProps {
  vendorName: string;
  description: string;
  logoUrl: string;
  coverImage: string;
  rating?: number;
  reviewCount?: number;
  location?: string;
}

export function VendorHeader({ 
  vendorName, 
  description, 
  logoUrl, 
  coverImage,
  rating, 
  reviewCount, 
  location 
}: VendorHeaderProps) {
  return (
    <div className="relative w-full">
      {/* Cover Image Background */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden">
        <ImageWithFallback
          src={coverImage}
          alt={`${vendorName} cover`}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      
      {/* Content Container */}
      <div className="relative px-4 md:px-8 max-w-[1440px] mx-auto">
        {/* Logo and Info Section */}
        <div className="relative -mt-16 md:-mt-20">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
            {/* Logo */}
            <div className="relative z-10">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-white shadow-lg border-4 border-white">
                <ImageWithFallback
                  src={logoUrl}
                  alt={`${vendorName} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Vendor Info */}
            <div className="flex-1 bg-white rounded-xl shadow-lg border border-slate-100 p-4 md:p-6 mt-4 md:mt-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
                  {vendorName}
                </h1>
                
                <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
                  {description}
                </p>
                
                {/* Rating and Location */}
                {(rating && reviewCount) && (
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <div className="flex items-center gap-1">
                      <div className="flex items-center">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="font-medium text-gray-900 ml-1">
                          {rating.toFixed(1)}
                        </span>
                      </div>
                      <span className="text-gray-500">
                        ({reviewCount.toLocaleString()} reviews)
                      </span>
                    </div>
                    
                    {location && (
                      <>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-1 text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                          </svg>
                          <span>{location}</span>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}