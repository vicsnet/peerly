import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { User } from "@/types/user";
import { useActiveAccount, useProfiles, useDisconnect } from "thirdweb/react";

interface UserDropdownProps {
  user: User;
  onProfileClick?: () => void;
  onOrdersClick?: () => void;
  onTransactionsClick?: () => void;
  onSignOut: () => void;
}

type BackgroundImage89Props = {
  additionalClassNames?: string[];
};

function BackgroundImage89({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage89Props>) {
  return (
    <div className={`relative shrink-0 w-full ${additionalClassNames.join(' ')}`}>
      {children}
    </div>
  );
}

function BackgroundImage14({ children, onClick }: React.PropsWithChildren<{ onClick?: () => void }>) {
  return (
    <BackgroundImage89 additionalClassNames={["bg-white"]}>
      <div className="flex flex-row items-center relative size-full">
        <button
          onClick={onClick}
          className="box-border flex flex-row gap-2 items-center justify-start px-2 py-1.5 relative w-full hover:bg-slate-50 transition-colors text-left"
        >
          {children}
        </button>
      </div>
    </BackgroundImage89>
  );
}

type MenuitemBackgroundImageAndTextProps = {
  text: string;
  onClick?: () => void;
};

function MenuitemBackgroundImageAndText({
  text,
  onClick,
}: MenuitemBackgroundImageAndTextProps) {
  return (
    <BackgroundImage14 onClick={onClick}>
      <div className="basis-0 font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-sm text-left text-slate-700">
        <p className="block leading-5">{text}</p>
      </div>
    </BackgroundImage14>
  );
}

function MenuItem4({ onClick }: { onClick?: () => void }) {
  return (
    <BackgroundImage14 onClick={onClick}>
      <div className="basis-0 font-medium grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-sm text-left text-red-700">
        <p className="block leading-5">Sign out</p>
      </div>
    </BackgroundImage14>
  );
}

type BackgroundImage29Props = {
  additionalClassNames?: string[];
};

function BackgroundImage29({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage29Props>) {
  return (
    <div className={`relative ${additionalClassNames.join(' ')}`}>
      <div className="relative size-full">{children}</div>
    </div>
  );
}

function TopSection({ onProfileClick, onOrdersClick, onTransactionsClick, onSignOut }: {
  onProfileClick?: () => void;
  onOrdersClick?: () => void;
  onTransactionsClick?: () => void;
  onSignOut: () => void;
}) {
  return (
    <BackgroundImage29 additionalClassNames={["bg-white", "shrink-0", "w-full"]}>
      <div className="box-border flex flex-col items-start justify-start pb-[5px] pt-0 px-[5px] relative w-full">
        <MenuitemBackgroundImageAndText text="Profile" onClick={onProfileClick} />
        <MenuitemBackgroundImageAndText text="Orders" onClick={onOrdersClick} />
        <MenuitemBackgroundImageAndText text="Transactions" onClick={onTransactionsClick} />
        <MenuItem4 onClick={onSignOut} />
        
      </div>

    </BackgroundImage29>
  );
}

function Frame11({ onProfileClick, onOrdersClick, onTransactionsClick, onSignOut }: {
  onProfileClick?: () => void;
  onOrdersClick?: () => void;
  onTransactionsClick?: () => void;
  onSignOut: () => void;
}) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border flex flex-col items-center justify-start p-0 relative w-full">
        <TopSection 
          onProfileClick={onProfileClick}
          onOrdersClick={onOrdersClick}
          onTransactionsClick={onTransactionsClick}
          onSignOut={onSignOut}
        />
      </div>
    </div>
  );
}

function SelectOptions({ 
  onProfileClick, 
  onOrdersClick, 
  onTransactionsClick, 
  onSignOut,
  position 
}: {
  onProfileClick?: () => void;
  onOrdersClick?: () => void;
  onTransactionsClick?: () => void;
  onSignOut: () => void;
  position: { top: number; left: number; };
}) {
  return (
    <div 
      className="fixed w-[140px] z-[9999]"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        borderRadius: '6px'
      }}
    >
      <div 
        className="box-border flex flex-row items-start justify-start overflow-clip p-0 relative w-[140px]"
        style={{ borderRadius: '6px' }}
      >
        <Frame11 
          onProfileClick={onProfileClick}
          onOrdersClick={onOrdersClick}
          onTransactionsClick={onTransactionsClick}
          onSignOut={onSignOut}
        />
      </div>
      <div 
        className="absolute border border-slate-100 inset-[-1px] pointer-events-none"
        style={{ 
          borderRadius: '7px',
          boxShadow: '0px 4px 6px 0px rgba(0,0,0,0.09)'
        }}
      />
    </div>
  );
}

export function UserDropdown({ 
  user, 
  onProfileClick, 
  onOrdersClick, 
  onTransactionsClick, 
  onSignOut 
}: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8, // 8px gap below the avatar
        left: rect.right - 140 // Align dropdown right edge with avatar right edge
      });
    }
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8, // 8px gap below the avatar
        left: rect.right - 140 // Align dropdown right edge with avatar right edge
      });
    }
    setIsOpen(true);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        // Check if click is inside the dropdown
        const dropdownElements = document.querySelectorAll('[data-dropdown-content]');
        let clickedInsideDropdown = false;
        
        dropdownElements.forEach(element => {
          if (element.contains(event.target as Node)) {
            clickedInsideDropdown = true;
          }
        });
        
        if (!clickedInsideDropdown) {
          handleClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Update position on scroll/resize
  useEffect(() => {
    const updatePosition = () => {
      if (isOpen && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom + 8,
          left: rect.right - 140
        });
      }
    };

    if (isOpen) {
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
    }

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen]);

  const handleMenuItemClick = (callback?: () => void) => {
    if (callback) {
      callback();
    }
    handleClose();
  };

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => {
          // Only close on mouse leave if we're not hovering over the dropdown
          setTimeout(() => {
            const dropdownElement = document.querySelector('[data-dropdown-content]');
            if (!dropdownElement || !dropdownElement.matches(':hover')) {
              setIsOpen(false);
            }
          }, 100);
        }}
        className="relative shrink-0 size-10 rounded-full overflow-hidden hover:ring-2 hover:ring-slate-200 transition-all"
      >
        <img
          alt={user.name}
          className="block w-full h-full object-cover"
          src={user.picture}
        />
      </button>

      {isOpen && createPortal(
        <div 
          data-dropdown-content
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <SelectOptions
            position={dropdownPosition}
            onProfileClick={() => handleMenuItemClick(onProfileClick)}
            onOrdersClick={() => handleMenuItemClick(onOrdersClick)}
            onTransactionsClick={() => handleMenuItemClick(onTransactionsClick)}
            onSignOut={() => handleMenuItemClick(onSignOut)}
          />
        </div>,
        document.body
      )}
    </>
  );
}