"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 glass-panel w-[3rem] h-[3rem] rounded-full flex items-center justify-center hover:scale-[1.15] hover:shadow-[0_0_24px_var(--glow)] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsSun className="text-[color:var(--accent)]" />
      ) : (
        <BsMoon className="text-[color:var(--accent)]" />
      )}
    </button>
  );
}