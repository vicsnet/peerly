import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onClick?: () => void;
  label?: string;
}

export function BackButton({ onClick, label = "Back to Vendors" }: BackButtonProps) {
  return (
    <div className="flex justify-start w-full">
      <Button 
        variant="secondary" 
        onClick={onClick}
        className="bg-slate-100 rounded-md flex gap-2 items-center py-2 px-3"
      >
        <ArrowLeft className="size-4" />
        <span className="font-medium text-[14px] text-slate-900 leading-[20px]">
          {label}
        </span>
      </Button>
    </div>
  );
}