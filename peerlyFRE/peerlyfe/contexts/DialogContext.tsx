"use client"
import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";

type DialogId = string;
type DialogDescription = string;

interface DialogContextState {
  getDescriptions: () => Record<DialogId, DialogDescription>;
}

interface DialogContextValue extends DialogContextState {
  registerDialog: (id: string, description: string) => void;
  unregisterDialog: (id: string) => void;
}

const DialogContext = createContext<DialogContextValue | undefined>(undefined);

/**
 * DialogProvider component that manages accessibility descriptions for dialogs
 */
export function DialogProvider({ children }: { children: React.ReactNode }) {
  // Use a ref to store descriptions to avoid re-renders when updating
  const descriptionsRef = useRef<Record<DialogId, DialogDescription>>({});
  
  // State only used to trigger re-renders when descriptions change
  const [updateCounter, setUpdateCounter] = useState(0);
  
  // Function to get current descriptions
  const getDescriptions = useCallback(() => {
    return descriptionsRef.current;
  }, []);
  
  // Register a dialog description
  const registerDialog = useCallback((id: string, description: string) => {
    const currentDesc = descriptionsRef.current[id];
    if (currentDesc !== description) {
      descriptionsRef.current[id] = description;
      // Only trigger update if this is an actual change
      if (currentDesc !== description) {
        setUpdateCounter(c => c + 1);
      }
    }
  }, []);
  
  // Unregister a dialog description
  const unregisterDialog = useCallback((id: string) => {
    if (id in descriptionsRef.current) {
      delete descriptionsRef.current[id];
      setUpdateCounter(c => c + 1);
    }
  }, []);
  
  // Create a stable context value that doesn't depend on the descriptions themselves
  const contextValue = React.useMemo(() => ({
    getDescriptions,
    registerDialog,
    unregisterDialog
  }), [getDescriptions, registerDialog, unregisterDialog]);
  
  // Get the current descriptions for rendering
  const descriptions = descriptionsRef.current;
  
  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      
      {/* Render hidden descriptions for screen readers */}
      <div aria-hidden="true" className="sr-only">
        {Object.entries(descriptions).map(([id, description]) => (
          <div key={id} id={id}>
            {description}
          </div>
        ))}
      </div>
    </DialogContext.Provider>
  );
}

/**
 * Hook to access the dialog context
 */
export function useDialogContext() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogContext must be used within a DialogProvider");
  }
  return context;
}

/**
 * Hook to register a dialog description and get an ID to use with aria-describedby
 */
export function useDialogDescription(id: string, description: string): string {
  const { registerDialog, unregisterDialog } = useDialogContext();
  const stableId = useRef(id).current;
  
  // Register on mount, unregister on unmount
  useEffect(() => {
    registerDialog(stableId, description);
    return () => unregisterDialog(stableId);
  }, [stableId, description, registerDialog, unregisterDialog]);
  
  return stableId;
}