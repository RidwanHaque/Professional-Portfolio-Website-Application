"use client";


import React from 'react'
import { createContext, useContext, useState } from 'react';
import { links } from "@/lib/data";
import type { SectionName } from "@/lib/types";



 type ActiveSectionContextProviderProps = { children: React.ReactNode };


 type ActiveSectionContextType = {
 activeSection: SectionName;
 setActiveSection: React.Dispatch<React.SetStateAction<SectionName>> 
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;

};


 export const ActiveSectionContext = createContext<ActiveSectionContextType | null >(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    const [activeSection , setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return ( 
  <ActiveSectionContext.Provider 
    value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>{children}
    </ActiveSectionContext.Provider> );
}

// react hook to use the context
// this hook will throw an error if the context is not used within the provider
export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
  }
  return context;
}