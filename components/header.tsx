import React from 'react'



// header (nav bar component)
// header is the container that holds the div element for the white bacckground of the nav bar. we 
// always want the nav bar to be on top so we use z-999 to make sure it is on top of the other elements
// it will be fixed because the white background and text want to scroll with us down the page 
// there is blurred translucent effect on the nav bar
// we want center of the element to coincide with the center of the page 
export default function header() {
  return <header className="z-[999] relative">
    <div className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full">



    </div>

  </header>;

  


}
