import * as React from "react";
import { cn } from "./utils";

interface CustomToggleProps extends React.HTMLAttributes<HTMLDivElement> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const CustomToggle = React.forwardRef<HTMLDivElement, CustomToggleProps>(
  ({ checked, onCheckedChange, disabled = false, className, ...props }, ref) => {
    const handleClick = () => {
      if (!disabled && onCheckedChange) {
        onCheckedChange(!checked);
      }
    };

    return (
      <div
        ref={ref}
        role="switch"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        onClick={handleClick}
        className={cn(
          "relative h-6 w-11 cursor-pointer rounded-full transition-colors",
          checked ? "bg-slate-900" : "bg-slate-200",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform",
            checked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </div>
    );
  }
);

CustomToggle.displayName = "CustomToggle";