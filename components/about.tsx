"use client";


import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

import { useSectionInView } from '@/lib/hooks';




export default function About() {
  const { ref} = useSectionInView('About');







  return (

    <motion.section ref = {ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
      id="about"
      >
        {/*Every section needs to get added to the page file we can use Section Heading for each section as a shortcut*/} 
        <SectionHeading>About Me</SectionHeading>
        {/*two paragraphs  */}
        
        <p className="mb-3">
          My passion for technology has led me to build projects across{" "}
          <span className="font-medium">embedded systems, hardware-software co-design, automation, and web development</span>. 
          I am especially interested in <span className="font-medium">aerospace engineering</span> and <span className="font-medium">national security initiatives</span>. 
          My current research in <span className="font-medium">Robotic Human Augmentation at Georgia Tech</span> has deepened my understanding of biomedical innovation and the importance of access to healthcare, while my experience at <span className="font-medium">UGA's CURO Research Program</span> allowed me to explore astrophysics and computational research under the guidance of Dr. Nandana Weliweriya and Professor Inseok Song. while attending UGA I was awarded a $1000 CURO Research Reward had the oppurtunity to present at the Spring 2024 CURO Research Symposium.
          <br /><br />
          I am currently seeking an <span className="font-medium">internship or co-op</span> as a <span className="font-medium">Cloud Computing and Infrastructure Security Engineer, Embedded Systems and Computing Hardware Engineer, or Software Engineer</span>.
        </p>
        <p>
          My interest in aerospace inspired me to build an{" "}
          <span className="font-medium">API for an air traffic control system interfaced with an FPGA on a DE10 development board</span>. I am currently building a{" "}
          <span className="font-medium">cybersecurity homelab</span> to deepen my knowledge of network security. Outside of engineering, I enjoy{" "}
          <span className="font-medium">digital music production in FL Studio</span> and{" "}
          <span className="font-medium">optimizing 3D rendering workflows in Blender</span>.
        </p>
    </motion.section>
  )
}
