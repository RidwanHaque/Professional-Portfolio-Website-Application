"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { skillGroups } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion"



const fadeInAnimationsVariants = {
    initial: {
        opacity: 0,
        y: 100 
    },
    animate: (index: number) => ({
    
        opacity: 1,
        y:0,
        transition: {
            delay: 0.05 * index,

        },
    }),
};


export default function Skills() {

const { ref} = useSectionInView('Skills');

  return (
        <section ref={ref} id="skills" className="mb-28 max-w-[62rem] scroll-mt-28 text-center sm:mb-40">
                <SectionHeading>My Skills</SectionHeading>
                <p className="mx-auto mb-8 max-w-3xl text-sm sm:text-base text-[color:var(--muted)]">
                    Organized into nine focused domains spanning architecture, physical design,
                    semiconductors, embedded systems and PCB design, firmware, AI, cloud,
                    software, and collaboration.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {skillGroups.map((group, groupIndex) => (
                            <motion.article
                                key={group.title}
                                className="chip-panel rounded-2xl p-5 text-left"
                                variants={fadeInAnimationsVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={groupIndex}
                            >
                                <h3 className="font-display text-lg sm:text-xl text-[color:var(--text)] mb-3">
                                    {group.title}
                                </h3>
                                <ul className="flex flex-wrap gap-2 text-sm text-[color:var(--muted)]">
                                    {group.items.map((skill, index) => (
                                        <motion.li
                                            key={skill}
                                            className="chip-pill rounded-xl px-3 py-2"
                                            variants={fadeInAnimationsVariants}
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={{ once: true }}
                                            custom={index}
                                        >
                                            {skill}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.article>
                        ))}
                </div>
    </section>
  )
}
