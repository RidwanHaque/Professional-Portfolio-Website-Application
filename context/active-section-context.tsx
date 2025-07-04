"use client";


import React from 'react'
import { createContext, useContext, useState } from 'react';
import { links } from "@/lib/data";



 type SectionName = (typeof links)[number]['name'];

 type ActiveSectionContextProviderProps = { children: React.ReactNode };


 type ActiveSectionContextType = {
 activeSection: SectionName;
 setActiveSection: React.Dispatch<React.SetStateAction<SectionName>> };


 export const ActiveSectionContext = createContext<ActiveSectionContextType | null >(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    const [activeSection , setActiveSection] = useState<SectionName>('Home');
  return ( 
  <ActiveSectionContext.Provider 
    value={{ activeSection, setActiveSection }}>{children}
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