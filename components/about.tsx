"use client";


import SectionHeading from './section-heading'
import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (

    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
      >
        {/*Every section needs to get added to the page file we can use Section Heading for each section as a shortcut*/} 
        <SectionHeading>About Me</SectionHeading>
        {/*two paragraphs  */}
        
        <p className="mb-3">
          My passion for technology has driven me to build projects across diverse fields like{" "}
          <span className="font-medium">AI/ML, full-stack web development, cybersecurity, and embedded systems</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect, especially when tackling complex challenges like building an{" "}
          <span className="font-medium">AI-powered basketball analytics tool</span> or an{" "}
          <span className="font-medium">LED-guided piano learning system</span>. My core technical skills are in{" "}
          <span className="font-medium">
            Python, TypeScript, React, Next.js, and Node.js
          </span>. I have extensive experience with cloud platforms like{" "}
          <span className="font-medium">AWS and Azure</span> and technologies such as{" "}
          <span className="font-medium">TensorFlow, Three.js, and Docker</span>. I am currently seeking a{" "}
          <span className="font-medium">full-time position</span> as a software developer.
        </p>
        <p>
          <span className="italic">When I'm not coding</span>, I channel my curiosity into hands-on projects. My interest in music inspired me to build a smart piano tutor, and I am currently building a{" "}
          <span className="font-medium">cybersecurity homelab</span> to deepen my knowledge of network security. I also enjoy{" "}
          <span className="font-medium">learning new things</span>, from the fundamentals of{" "}
          <span className="font-medium">electronics</span> to playing video games and watching movies.
        </p>
    </motion.section>
  )
}
