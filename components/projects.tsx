"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useActiveSectionContext } from '@/context/active-section-context';
// this is importing a client component
//anything that is presentational os a server component
//we are just mapping data in this file

export default function Projects() {

  const { ref , inView } = useInView({
    threshold: 0.5, // Trigger when 10% of the section is visible
    //triggerOnce: true, // Only trigger once when it comes into view
  });
  const {setActiveSection} = useActiveSectionContext();


  useEffect(() => {
  if (inView) {
    setActiveSection("Projects");
  }
}, [inView, setActiveSection]);




  return (
    <section ref = {ref} id="projects" className="scroll-mt-28">
        <SectionHeading>My projects</SectionHeading>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                    <Project {...project} />
                    </React.Fragment>
            ))}

        </div>
    </section>
  );
}

