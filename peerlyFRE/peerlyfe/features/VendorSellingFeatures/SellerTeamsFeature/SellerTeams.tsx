import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { 
  UserPlus, 
  MoreHorizontal, 
  Users, 
  Search,
  X
} from "lucide-react";
import { Input } from "../../../components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "../../../components/ui/dropdown-menu";
import { Badge } from "../../../components/ui/badge";
import { InviteTeamMemberModal } from "./components/InviteTeamMemberModal";
import { toast } from "sonner";

// Define team member roles
export type TeamMemberRole = "admin" | "manager" | "editor" | "viewer";

// Define team member interface
export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: TeamMemberRole;
  status: "active" | "pending" | "inactive";
  dateAdded: string;
}

export function SellerTeams() {
  const [searchTerm, setSearchTerm] = useState("");
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  
  console.log("SellerTeams render:", { isInviteModalOpen, teamMembersLength: teamMembers.length }); // Debug log

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter team members based on search term
  const filteredMembers = teamMembers.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle adding a new team member - now expects an object parameter
  const handleAddTeamMember = (memberData: { name: string; email: string; role: string }) => {
    // Check if the email already exists
    if (teamMembers.some(member => member.email === memberData.email)) {
      toast.error("This email has already been invited.");
      return;
    }

    // In a real app, this would send an invitation and then update the UI
    const newMember: TeamMember = {
      id: `member-${Date.now()}`,
      name: memberData.name.trim(),
      email: memberData.email,
      role: memberData.role as TeamMemberRole,
      status: "pending",
      dateAdded: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };

    setTeamMembers([...teamMembers, newMember]);
    toast.success(`Invitation sent to ${memberData.name} (${memberData.email})`);
    setIsInviteModalOpen(false);
  };

  // Handle resending an invitation
  const handleResendInvitation = (memberId: string) => {
    const member = teamMembers.find(m => m.id === memberId);
    if (member) {
      toast.success(`Invitation resent to ${member.name} (${member.email})`);
    }
  };

  // Handle removing a team member
  const handleRemoveMember = (memberId: string) => {
    const member = teamMembers.find(m => m.id === memberId);
    if (member) {
      setTeamMembers(teamMembers.filter(m => m.id !== memberId));
      toast.success(`${member.name} has been removed from your team`);
    }
  };

  // Handle changing a member's role
  const handleChangeRole = (memberId: string, newRole: TeamMemberRole) => {
    const updatedMembers = teamMembers.map(member => {
      if (member.id === memberId) {
        return { ...member, role: newRole };
      }
      return member;
    });
    
    setTeamMembers(updatedMembers);
    const member = teamMembers.find(m => m.id === memberId);
    if (member) {
      toast.success(`${member.name}'s role updated to ${newRole}`);
    }
  };

  // Render status badge
  const renderStatusBadge = (status: "active" | "pending" | "inactive") => {
    switch (status) {
      case "active":
        return <Badge variant="outline" className="bg-green-100 text-green-900 border-0">Active</Badge>;
      case "pending":
        return <Badge variant="outline" className="bg-amber-100 text-amber-900 border-0">Pending</Badge>;
      case "inactive":
        return <Badge variant="outline" className="bg-slate-100 text-slate-900 border-0">Inactive</Badge>;
      default:
        return null;
    }
  };

  // Render empty state if no team members
  if (teamMembers.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-xl border border-slate-100 shadow-sm p-8 text-center">
          <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-slate-600" />
          </div>
          <h3 className="text-[18px] font-semibold mb-2">No team members yet</h3>
          <p className="text-slate-500 mb-6">
            Invite team members to help manage your store, products, and orders.
          </p>
          <Button 
            className="mx-auto"
            onClick={() => {
              console.log("Empty state button clicked");
              setIsInviteModalOpen(true);
            }}
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Invite Team Member
          </Button>
        </div>

        {/* Invite Modal */}
        <InviteTeamMemberModal
          isOpen={isInviteModalOpen}
          onClose={() => setIsInviteModalOpen(false)}
          onInvite={handleAddTeamMember}
        />
      </div>
    );
  }

  // Render team members table
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
      {/* Header with search and actions */}
      <div className="p-4 flex items-center justify-between border-b border-slate-100">
        <div className="relative w-64">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <Input
            type="text"
            placeholder="Search by name or email..."
            className="pl-10 border-slate-200"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <Button 
          onClick={() => {
            console.log("Table view button clicked");
            setIsInviteModalOpen(true);
          }}
          className="bg-slate-900"
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Invite Team Member
        </Button>
      </div>
      
      {/* Team members table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] table-fixed">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="w-[220px] p-4 text-left font-medium text-slate-900">Name</th>
              <th className="w-[280px] p-4 text-left font-medium text-slate-900">Email</th>
              <th className="w-[120px] p-4 text-left font-medium text-slate-900">Role</th>
              <th className="w-[120px] p-4 text-left font-medium text-slate-900">Status</th>
              <th className="w-[180px] p-4 text-left font-medium text-slate-900">Added On</th>
              <th className="w-[80px] p-4 text-left font-medium text-slate-900"></th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <tr key={member.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-900">{member.name}</td>
                <td className="p-4 text-slate-600">{member.email}</td>
                <td className="p-4">
                  <Badge variant="outline" className="bg-slate-100 border-0">
                    {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                  </Badge>
                </td>
                <td className="p-4">{renderStatusBadge(member.status)}</td>
                <td className="p-4 text-slate-600">{member.dateAdded}</td>
                <td className="p-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 hover:bg-slate-100">
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem onClick={() => handleChangeRole(member.id, "admin")} className="cursor-pointer">
                        Set as Admin
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleChangeRole(member.id, "manager")} className="cursor-pointer">
                        Set as Manager
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleChangeRole(member.id, "editor")} className="cursor-pointer">
                        Set as Editor
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleChangeRole(member.id, "viewer")} className="cursor-pointer">
                        Set as Viewer
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {member.status === "pending" && (
                        <DropdownMenuItem onClick={() => handleResendInvitation(member.id)} className="cursor-pointer">
                          Resend Invitation
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem 
                        onClick={() => handleRemoveMember(member.id)} 
                        className="text-red-600 cursor-pointer"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Remove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty search results */}
        {filteredMembers.length === 0 && (
          <div className="p-8 text-center text-slate-500">
            No team members found matching your search.
          </div>
        )}
      </div>

      {/* Invite Modal */}
      <InviteTeamMemberModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        onInvite={handleAddTeamMember}
      />
    </div>
  );
}