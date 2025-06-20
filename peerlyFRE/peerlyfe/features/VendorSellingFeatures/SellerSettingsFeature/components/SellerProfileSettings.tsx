import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

interface SellerProfileSettingsProps {
  sellerInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export function SellerProfileSettings({ sellerInfo }: SellerProfileSettingsProps) {
  // State for form fields
  const [firstName, setFirstName] = useState(sellerInfo.firstName);
  const [lastName, setLastName] = useState(sellerInfo.lastName);
  const [email, setEmail] = useState(sellerInfo.email);
  
  // Password states
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Password visibility states
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Handle form submission
  const handlePersonalInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    if (!firstName || !lastName || !email) {
      toast.error("All fields are required");
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Submit form - in a real app, this would call an API
    toast.success("Personal information updated successfully");
  };
  
  // Handle password change
  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate password fields
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("All password fields are required");
      return;
    }
    
    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }
    
    // Password strength validation
    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
    
    // Submit password change - in a real app, this would call an API
    toast.success("Password changed successfully");
    
    // Reset password fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };
  
  return (
    <div className="space-y-6">
      {/* Personal Information Form */}
      <form onSubmit={handlePersonalInfoSubmit} className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Personal information</h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="mt-1.5"
            />
          </div>
          
          <div>
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="mt-1.5"
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1.5"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <Button type="submit" className="bg-slate-700 hover:bg-slate-800">
            Save
          </Button>
        </div>
      </form>
      
      {/* Password Form */}
      <form onSubmit={handlePasswordChange} className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Password</h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="currentPassword">Current Password</Label>
            <div className="relative mt-1.5">
              <Input
                id="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current your password"
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? (
                  <EyeOff className="h-4 w-4 text-slate-400" />
                ) : (
                  <Eye className="h-4 w-4 text-slate-400" />
                )}
              </button>
            </div>
          </div>
          
          <div>
            <Label htmlFor="newPassword">New Password</Label>
            <div className="relative mt-1.5">
              <Input
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? (
                  <EyeOff className="h-4 w-4 text-slate-400" />
                ) : (
                  <Eye className="h-4 w-4 text-slate-400" />
                )}
              </button>
            </div>
          </div>
          
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative mt-1.5">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password to confirm"
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4 text-slate-400" />
                ) : (
                  <Eye className="h-4 w-4 text-slate-400" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <Button type="submit" className="bg-slate-700 hover:bg-slate-800">
            Change Password
          </Button>
        </div>
      </form>
    </div>
  );
}