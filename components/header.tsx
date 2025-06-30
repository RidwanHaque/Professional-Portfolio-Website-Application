

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

"use client"; // Add this to the very first line

import React from 'react';
import { motion } from "framer-motion";

// Rename function to "Header" (PascalCase)
export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div 
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        // Add the animation props from the tutorial
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
      </motion.div>
    </header>
  );
}
