
import SectionHeading from './section-heading'
import React from 'react'

export default function About() {
  return (

    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
        {/*Every section needs to get added to the page file we can use Section Heading for each section as a shortcut*/} 
        <SectionHeading>About Me</SectionHeading>
        {/*two paragraphs  */}
        
        <p className="mb-3">
          My passion for technology has driven me to build projects across diverse fields like{" "}
          <span className="font-medium">AI/ML, full-stack web development, cybersecurity, and embedded systems</span>[1].{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect, especially when tackling complex challenges like building an{" "}
          <span className="font-medium">AI-powered basketball analytics tool</span> or an{" "}
          <span className="font-medium">LED-guided piano learning system</span>[1]. My core technical skills are in{" "}
          <span className="font-medium">
            Python, TypeScript, React, Next.js, and Node.js
          </span>[1][2]. I have extensive experience with cloud platforms like{" "}
          <span className="font-medium">AWS and Azure</span> and technologies such as{" "}
          <span className="font-medium">TensorFlow, Three.js, and Docker</span>[1][2][3]. I am currently seeking a{" "}
          <span className="font-medium">full-time position</span> as a software developer.
        </p>
        <p>
          <span className="italic">When I'm not coding</span>, I channel my curiosity into hands-on projects. My interest in music inspired me to build a smart piano tutor, and I am currently building a{" "}
          <span className="font-medium">cybersecurity homelab</span> to deepen my knowledge of network security[1][3]. I also enjoy{" "}
          <span className="font-medium">learning new things</span>, from the fundamentals of{" "}
          <span className="font-medium">electronics</span> to playing video games and watching movies[4].
        </p>


    </section>
  )
}
