"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '@/lib/hooks';
// this is importing a client component
//anything that is presentational os a server component
//we are just mapping data in this file

export default function Projects() {

  const { ref} = useSectionInView('Projects', 0.5);




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

