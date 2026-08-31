"use client";


import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

import { useSectionInView } from '@/lib/hooks';




export default function About() {
  const { ref} = useSectionInView('About');







  return (

    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 text-[color:var(--muted)]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
      id="about"
    >
      {/*Every section needs to get added to the page file we can use Section Heading for each section as a shortcut*/} 
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I&apos;m an electrical and computer engineering student passionate about <span className="font-medium">embedded systems, hardware-software co-design, semiconductor technology, automation, and secure computing</span>. Through engineering projects and internships, I&apos;ve developed experience with <span className="font-medium">firmware, hardware integration, systems engineering, and software development</span>.
      </p>
      <p className="mb-8">
        Outside of engineering, I enjoy <span className="font-medium">hiking, traveling, trying new activities, producing digital music, and exploring 3D design workflows</span>. I value meeting new people, building meaningful connections, and forming lifelong friendships.
      </p>

      <h3 className="text-xl font-semibold mb-2 font-display text-[color:var(--text)]">Career Goals</h3>
      <p className="mb-3">
        I&apos;m pursuing opportunities in <span className="font-medium">embedded systems, semiconductor manufacturing, systems engineering, aerospace, cybersecurity, and software development</span>. I&apos;m especially interested in building reliable, secure, and practical technology that connects hardware and software.
      </p>
      <p>
        My long-term goal is to deepen my expertise in <span className="font-medium">embedded and cyber-physical systems, chip and GPU architecture, and AI-enabled engineering workflows</span> while contributing to impactful technical projects.
      </p>
    </motion.section>
  )
}
