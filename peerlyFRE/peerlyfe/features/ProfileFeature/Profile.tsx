import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Separator } from "../../components/ui/separator";
import { Badge } from "../../components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { ArrowLeft, MapPin, Plus, Edit, Trash2, Eye, EyeOff, ChevronDown } from "lucide-react";
import { toast } from "sonner";

interface ProfileUser {
  id: string | number | undefined;
  name: string;
  email: string | undefined;
  picture: string;
  avatar?: string;
  isSeller?: boolean;
  address?:string;
}

interface ProfileProps {
  user: ProfileUser | null;
  onBack: () => void;
}

interface Address {
  id: number;
  type: "home" | "work" | "other";
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

// Mock saved addresses
const mockAddresses: Address[] = [
  {
    id: 1,
    type: "home",
    name: "Home",
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    isDefault: true
  },
  {
    id: 2,
    type: "work",
    name: "Office",
    street: "456 Business Ave",
    city: "New York",
    state: "NY", 
    zipCode: "10002",
    country: "United States",
    isDefault: false
  }
];

export function Profile({ user, onBack }: ProfileProps) {
  const [personalInfo, setPersonalInfo] = useState({
    name: user?.name || "",
    email: user?.email || "",
    picture: user?.picture || "",
    wallet:user?.address || ""
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const [addresses, setAddresses] = useState<Address[]>(mockAddresses);
  const [isAddressDialogOpen, setIsAddressDialogOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [newAddress, setNewAddress] = useState({
    type: "home" as "home" | "work" | "other",
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States"
  });

  const handlePersonalInfoSave = () => {
    // In a real app, this would make an API call
    toast.success("Personal information updated successfully");
  };

  const handlePasswordChange = () => {
    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      toast.error("Please fill in all password fields");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New passwords don't match");
      return;
    }

    if (passwordData.newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    // In a real app, this would make an API call
    toast.success("Password changed successfully");
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  const handleAddAddress = () => {
    if (!newAddress.name || !newAddress.street || !newAddress.city || !newAddress.state || !newAddress.zipCode) {
      toast.error("Please fill in all required fields");
      return;
    }

    const address: Address = {
      id: addresses.length + 1,
      ...newAddress,
      isDefault: addresses.length === 0 // First address is default
    };

    setAddresses([...addresses, address]);
    setNewAddress({
      type: "home",
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States"
    });
    setIsAddressDialogOpen(false);
    toast.success("Address added successfully");
  };

  const handleEditAddress = (address: Address) => {
    setEditingAddress(address);
    setNewAddress({
      type: address.type,
      name: address.name,
      street: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      country: address.country
    });
    setIsAddressDialogOpen(true);
  };

  const handleUpdateAddress = () => {
    if (!editingAddress) return;

    if (!newAddress.name || !newAddress.street || !newAddress.city || !newAddress.state || !newAddress.zipCode) {
      toast.error("Please fill in all required fields");
      return;
    }

    const updatedAddresses = addresses.map(addr => 
      addr.id === editingAddress.id 
        ? { ...addr, ...newAddress }
        : addr
    );

    setAddresses(updatedAddresses);
    setEditingAddress(null);
    setNewAddress({
      type: "home",
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States"
    });
    setIsAddressDialogOpen(false);
    toast.success("Address updated successfully");
  };

  const handleDeleteAddress = (id: number) => {
    const addressToDelete = addresses.find(addr => addr.id === id);
    if (addressToDelete?.isDefault) {
      toast.error("Cannot delete default address. Set another address as default first.");
      return;
    }

    setAddresses(addresses.filter(addr => addr.id !== id));
    toast.success("Address deleted successfully");
  };

  const handleSetDefaultAddress = (id: number) => {
    const updatedAddresses = addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    }));
    setAddresses(updatedAddresses);
    toast.success("Default address updated");
  };

  const closeAddressDialog = () => {
    setIsAddressDialogOpen(false);
    setEditingAddress(null);
    setNewAddress({
      type: "home",
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States"
    });
  };

  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Profile Settings</h1>
            <p className="text-gray-600">Manage your account information and preferences</p>
          </div>
        </div>

        {/* Profile Content */}
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            {/* <TabsTrigger value="password">Password</TabsTrigger> */}
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
          </TabsList>

          {/* Personal Information Tab */}
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                    <img 
                      src={user.picture} 
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div>
                    <Button variant="outline" size="sm">
                      Change Avatar
                    </Button>
                    <p className="text-sm text-gray-500 mt-1">
                      JPG, PNG or GIF. Max size 5MB.
                    </p>
                  </div> */}
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={personalInfo.name}
                      // onChange={(e) => setPersonalInfo(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={personalInfo.email}
                      // onChange={(e) => setPersonalInfo(prev => ({ ...prev, email: e.target.value }))}
                      // placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Wallet Address</Label>
                    <Input
                      id="address"
                      value={personalInfo?.wallet}
                      // onChange={(e) => setPersonalInfo(prev => ({ ...prev, phone: e.target.value }))}
                      // placeholder="Enter your phone number"
                    />
                  </div>

                  {/* <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={personalInfo.dateOfBirth}
                      onChange={(e) => setPersonalInfo(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                    />
                  </div> */}
                </div>

                {/* <div className="flex justify-end">
                  <Button onClick={handlePersonalInfoSave}>
                    Save Changes
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Password Tab */}
          {/* <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                  Update your password to keep your account secure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="current-password"
                        type={showPasswords.current ? "text" : "password"}
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                        placeholder="Enter your current password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => togglePasswordVisibility('current')}
                      >
                        {showPasswords.current ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <div className="relative">
                      <Input
                        id="new-password"
                        type={showPasswords.new ? "text" : "password"}
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                        placeholder="Enter your new password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => togglePasswordVisibility('new')}
                      >
                        {showPasswords.new ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <div className="relative">
                      <Input
                        id="confirm-password"
                        type={showPasswords.confirm ? "text" : "password"}
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        placeholder="Confirm your new password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => togglePasswordVisibility('confirm')}
                      >
                        {showPasswords.confirm ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Password Requirements:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• At least 8 characters long</li>
                    <li>• Include uppercase and lowercase letters</li>
                    <li>• Include at least one number</li>
                    <li>• Include at least one special character</li>
                  </ul>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handlePasswordChange}>
                    Update Password
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent> */}

          {/* Addresses Tab */}
          <TabsContent value="addresses">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Saved Addresses</CardTitle>
                    <CardDescription>
                      Manage your delivery addresses for faster checkout
                    </CardDescription>
                  </div>
                  <Dialog open={isAddressDialogOpen} onOpenChange={setIsAddressDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add Address
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto z-[9999]">
                      <DialogHeader>
                        <DialogTitle>
                          {editingAddress ? "Edit Address" : "Add New Address"}
                        </DialogTitle>
                        <DialogDescription>
                          {editingAddress 
                            ? "Update your address information" 
                            : "Add a new delivery address to your account"
                          }
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="address-type">Type</Label>
                          <div className="relative">
                            <Select 
                              value={newAddress.type} 
                              onValueChange={(value: "home" | "work" | "other") => 
                                setNewAddress(prev => ({ ...prev, type: value }))
                              }
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select address type" />
                              </SelectTrigger>
                              <SelectContent className="z-[10000]">
                                <SelectItem value="home">🏠 Home</SelectItem>
                                <SelectItem value="work">🏢 Work</SelectItem>
                                <SelectItem value="other">📍 Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address-name">Address Name</Label>
                          <Input
                            id="address-name"
                            value={newAddress.name}
                            onChange={(e) => setNewAddress(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="e.g., Home, Office, etc."
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="street">Street Address</Label>
                          <Textarea
                            id="street"
                            value={newAddress.street}
                            onChange={(e) => setNewAddress(prev => ({ ...prev, street: e.target.value }))}
                            placeholder="Enter your street address"
                            rows={2}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              value={newAddress.city}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, city: e.target.value }))}
                              placeholder="City"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <Input
                              id="state"
                              value={newAddress.state}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, state: e.target.value }))}
                              placeholder="State"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input
                              id="zip"
                              value={newAddress.zipCode}
                              onChange={(e) => setNewAddress(prev => ({ ...prev, zipCode: e.target.value }))}
                              placeholder="ZIP Code"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <div className="relative">
                              <Select 
                                value={newAddress.country} 
                                onValueChange={(value) => setNewAddress(prev => ({ ...prev, country: value }))}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent className="z-[10000]">
                                  <SelectItem value="United States">🇺🇸 United States</SelectItem>
                                  <SelectItem value="Canada">🇨🇦 Canada</SelectItem>
                                  <SelectItem value="United Kingdom">🇬🇧 United Kingdom</SelectItem>
                                  <SelectItem value="Australia">🇦🇺 Australia</SelectItem>
                                  <SelectItem value="Germany">🇩🇪 Germany</SelectItem>
                                  <SelectItem value="France">🇫🇷 France</SelectItem>
                                  <SelectItem value="Japan">🇯🇵 Japan</SelectItem>
                                  <SelectItem value="Spain">🇪🇸 Spain</SelectItem>
                                  <SelectItem value="Italy">🇮🇹 Italy</SelectItem>
                                  <SelectItem value="Netherlands">🇳🇱 Netherlands</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <DialogFooter>
                        <Button variant="outline" onClick={closeAddressDialog}>
                          Cancel
                        </Button>
                        <Button onClick={editingAddress ? handleUpdateAddress : handleAddAddress}>
                          {editingAddress ? "Update Address" : "Add Address"}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {addresses.length === 0 ? (
                    <div className="text-center py-8">
                      <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No addresses saved</h3>
                      <p className="text-gray-600 mb-4">Add your first address to get started</p>
                      <Button onClick={() => setIsAddressDialogOpen(true)}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Address
                      </Button>
                    </div>
                  ) : (
                    addresses.map((address) => (
                      <div
                        key={address.id}
                        className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-medium text-gray-900">{address.name}</h3>
                              <Badge variant="secondary" className="text-xs">
                                {address.type}
                              </Badge>
                              {address.isDefault && (
                                <Badge className="text-xs">Default</Badge>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm">
                              {address.street}<br />
                              {address.city}, {address.state} {address.zipCode}<br />
                              {address.country}
                            </p>
                          </div>
                          
                          <div className="flex items-center gap-2 ml-4">
                            {!address.isDefault && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleSetDefaultAddress(address.id)}
                              >
                                Set Default
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEditAddress(address)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            {!address.isDefault && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDeleteAddress(address.id)}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}