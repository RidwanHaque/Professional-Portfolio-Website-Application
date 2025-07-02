import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
// this is importing a client component
//anything that is presentational os a server component
//we are just mapping data in this file

export default function Projects() {
  return (
    <section>
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

