import React, { useState, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { ChevronDown, Upload, Plus, Camera } from "lucide-react";
import { toast } from "sonner";
import { ImageWithFallback } from "../../../../components/figma/ImageWithFallback";

// Sample country options
const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Mexico",
  "South Africa",
  "Nigeria",
  "Kenya",
];

interface SellerBusinessSettingsProps {
  businessInfo: {
    businessName: string;
    businessEmail: string;
    country: string;
    businessAddress: string;
    businessDescription: string;
    coverImage: string;
    profileImage: string;
  };
}

export function SellerBusinessSettings({ businessInfo }: SellerBusinessSettingsProps) {
  // State for form fields
  const [businessName, setBusinessName] = useState(businessInfo.businessName);
  const [businessEmail, setBusinessEmail] = useState(businessInfo.businessEmail);
  const [country, setCountry] = useState(businessInfo.country);
  const [businessAddress, setBusinessAddress] = useState(businessInfo.businessAddress);
  const [businessDescription, setBusinessDescription] = useState(businessInfo.businessDescription);
  
  // State for images
  const [coverImage, setCoverImage] = useState(businessInfo.coverImage);
  const [profileImage, setProfileImage] = useState(businessInfo.profileImage);
  
  // Refs for file inputs
  const coverImageInputRef = useRef<HTMLInputElement>(null);
  const profileImageInputRef = useRef<HTMLInputElement>(null);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!businessName || !businessEmail || !country || !businessAddress) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Submit form - in a real app, this would call an API
    toast.success("Business information updated successfully");
  };
  
  // Handle cover image upload
  const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle profile image upload
  const handleProfileImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Business information</h2>
      
      {/* Image Upload Section */}
      <div className="relative mb-6">
        <div className="relative">
          {/* Cover Image */}
          <div 
            className="h-40 w-full rounded-2xl bg-slate-100 mb-6 relative overflow-hidden"
            style={{ 
              backgroundImage: coverImage ? `url(${coverImage})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <button
              type="button"
              onClick={() => coverImageInputRef.current?.click()}
              className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm"
            >
              <Camera className="h-5 w-5 text-slate-700" />
            </button>
            <input
              ref={coverImageInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCoverImageUpload}
            />
            {!coverImage && (
              <div className="flex flex-col items-center justify-center h-full">
                <Upload className="h-6 w-6 text-slate-400 mb-2" />
                <span className="text-sm text-slate-500">Upload cover image</span>
              </div>
            )}
          </div>
          
          {/* Profile Image */}
          <div className="absolute left-10 bottom-0 transform translate-y-1/2">
            <div 
              className="h-[100px] w-[100px] rounded-full border-4 border-white bg-slate-100 relative overflow-hidden"
              style={{ 
                backgroundImage: profileImage ? `url(${profileImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Centered camera button */}
              <button
                type="button"
                onClick={() => profileImageInputRef.current?.click()}
                className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity"
              >
                <div className="bg-white p-2 rounded-full shadow-sm">
                  <Camera className="h-5 w-5 text-slate-700" />
                </div>
              </button>
              <input
                ref={profileImageInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfileImageUpload}
              />
              {!profileImage && (
                <div className="flex flex-col items-center justify-center h-full">
                  <Upload className="h-5 w-5 text-slate-400" />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Spacer to account for the overlapping profile image */}
        <div className="h-[50px]"></div>
      </div>
      
      {/* Business Information Form */}
      <div className="space-y-4 mt-8">
        <div>
          <Label htmlFor="businessName">Business name</Label>
          <Input
            id="businessName"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Enter your business name"
            className="mt-1.5"
          />
        </div>
        
        <div>
          <Label htmlFor="businessEmail">Business email</Label>
          <Input
            id="businessEmail"
            type="email"
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
            placeholder="Enter your business email"
            className="mt-1.5"
          />
        </div>
        
        <div>
          <Label htmlFor="country">Country</Label>
          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="businessAddress">Business address</Label>
          <Input
            id="businessAddress"
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
            placeholder="Enter your business address"
            className="mt-1.5"
          />
        </div>
        
        <div>
          <Label htmlFor="businessDescription">Business description</Label>
          <Textarea
            id="businessDescription"
            value={businessDescription}
            onChange={(e) => setBusinessDescription(e.target.value)}
            placeholder="Enter a short description about your business"
            className="mt-1.5 min-h-[80px]"
          />
        </div>
      </div>
      
      <div className="mt-6">
        <Button type="submit" className="bg-slate-700 hover:bg-slate-800">
          Save
        </Button>
      </div>
    </form>
  );
}