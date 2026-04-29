

// header (nav bar component)
// header is the container that holds the div element for the white bacckground of the nav bar. we 
// always want the nav bar to be on top so we use z-999 to make sure it is on top of the other elements
// it will be fixed because the white background and text want to scroll with us down the page 
// there is blurred translucent effect on the nav bar
// we want center of the element to coincide with the center of the page 
// install framer motion package to add animations to the nav bar
// so instead of a div element that we currently have we will use a motion div
// use effect is a react hook that allows us to run code after the component has mounted
// everything in the apps folder is a server component by default
// to make it a client component we need to add "use client" at the very top of the file
// now we get client side functionalities so we can use browser APIs like local storage, session storage, etc.
// interactive components like buttons, forms, etc. also need to be client components
// presentational components like headers, footers, etc. can be server components

"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed top-0 left-0 w-full z-[99999] pointer-events-none">
      <motion.div
        className="fixed top-0 left-1/2 z-[99998] h-auto w-full rounded-none glass-panel px-2 py-3 sm:top-6 sm:h-[3.25rem] sm:w-[min(90vw,44rem)] sm:rounded-full sm:px-0 sm:py-0 pointer-events-none"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="fixed top-0 left-1/2 z-[99999] flex h-auto w-full -translate-x-1/2 items-center justify-center py-3 sm:top-6 sm:h-[3.25rem] sm:w-[min(90vw,44rem)] sm:py-0 pointer-events-auto">
        <ul className="flex w-full max-w-[26rem] flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.85rem] font-medium text-[color:var(--muted)] sm:max-w-none sm:flex-nowrap sm:gap-4 sm:text-[0.85rem]">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-2 transition text-[color:var(--muted)] hover:text-[color:var(--text)]",
                  {
                    "text-[color:var(--text)]": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-[color:var(--surface-2)] border border-[color:var(--line)] rounded-full absolute inset-0 -z-10 shadow-[0_0_16px_var(--glow)]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}