

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
// 1. Import the Link component from Next.js
// This is required because <Link> is not a global component. If you forget this import,
// React will throw a runtime error saying "Link is not defined" and your navigation links won't render.
import Link from "next/link";

// 2. Import the links array from your data file
// This array contains the navigation items you want to display in your header.
import { links } from "@/lib/data";




// Rename function to "Header" (PascalCase)
export default function Header() {
  return (
    <header className="z-[999] relative">


      <motion.div 
        className="fixed top-0 left-1/2  h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        // Framer Animation which will animate the header on mount
        // Initial state: header starts above the viewport and is invisible (y: -100, opacity: 0)
        // Animate state: header moves to its final position (y: 0) and becomes fully visible (opacity: 1)
        // The x: "-50%" centers the header horizontally on the page so we removed the translate in the className
        //transform is framer motion's way of animating the position of the element
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1  }}
      >
      </motion.div>

      {/* The div below is for the content inside the header */}
      {/* we made this flex container to center the content inside the header */}
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      // Array in javascript "links" each object represents a link in the navigation bar 
      // using hash for routing to different sections of the page
      // the array is a named export so we import it
      >


        {/*flexbox is used to align the items in the nav bar*/}
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {
            links.map(link=>(
              //gives li elements a height of 3/4 of the nav bar
              <motion.li className="h-3/4 flex items-center justify-center px-3 py-3 hover:text-gray-950 transition"  key={link.hash} 
              // Framer Motion animation for each link
              initial={{ opacity: 0, y: -100 }} // Start slightly below and invisible
              animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
              >
                <Link href={link.hash}>{link.name}</Link>
              </motion.li>
            ))
          }
          


        </ul>

        
      </nav>


    </header>
  );
}
