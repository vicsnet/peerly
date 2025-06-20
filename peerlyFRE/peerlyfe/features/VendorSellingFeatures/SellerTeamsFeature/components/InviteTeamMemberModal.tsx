import React, { useState } from "react";
import { X } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from "../../../../components/ui/dialog";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { toast } from "sonner";

interface InviteTeamMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInvite: (member: { name: string; email: string; role: string }) => void;
}

export function InviteTeamMemberModal({ isOpen, onClose, onInvite }: InviteTeamMemberModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  console.log("InviteTeamMemberModal render:", { isOpen, name, email, role }); // Debug log
  
  // Clear form when modal is closed
  React.useEffect(() => {
    if (!isOpen) {
      setName("");
      setEmail("");
      setRole("");
      setIsSubmitting(false);
    }
  }, [isOpen]);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!name.trim()) {
      toast.error("Please enter a name");
      return;
    }
    
    if (!email.trim()) {
      toast.error("Please enter an email");
      return;
    }
    
    if (!role) {
      toast.error("Please select a role");
      return;
    }
    
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      try {
        onInvite({ name, email, role });
        onClose();
        toast.success(`Invitation sent to ${name}`);
      } catch (error) {
        toast.error("Failed to send invitation");
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md overflow-hidden rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold tracking-tight text-gray-900">
            Invite Team Member
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-500">
            Add a new member to your team. They will receive an email invitation.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="member-name" className="text-sm font-medium text-slate-900">Full Name</Label>
            <Input 
              id="member-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
              className="mt-1.5 border-slate-300 rounded-md"
            />
          </div>
          
          <div>
            <Label htmlFor="member-email" className="text-sm font-medium text-slate-900">Email Address</Label>
            <Input 
              id="member-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="mt-1.5 border-slate-300 rounded-md"
            />
          </div>
          
          <div>
            <Label htmlFor="member-role" className="text-sm font-medium text-slate-900">Role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger id="member-role" className="mt-1.5 border-slate-300 rounded-md">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent className="z-[100]">
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="border-slate-300">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-slate-700 hover:bg-slate-800">
              {isSubmitting ? "Sending..." : "Send Invitation"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}