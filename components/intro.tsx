"use client"
//this converts the code below into a client component
//we need to do this because we are using framer motion and next/image which are client components

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    //we use section instead of div because it is more semantic for the content we are displaying
    //section is used to group related content together
    //we are going to have another div that will hold image of person
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className="relative">
                {/* motion componenet is using react hooks and this is a server component */}
                <motion.div
                    initial ={{ opacity: 0, scale:0 }}
                    animate ={{ opacity: 1, scale:1 }}
                    transition ={{ type: "tween", duration: 0.2, }}
                    >
                    <Image
                        src="/Ridwan-Haque.png"
                        alt="Ridwan Portrait"
                        width={192}
                        height={192}
                        quality={95}
                        priority={true}
                        className="h-80 w-80 rounded-full object cover border-[0.35rem] border-white shadow-x1"
                        />

                </motion.div>

            </div>


        </div>
        <p className="mb-10 mt-4 text-2xl font-medium leading-[1.5] sm:text-4xl">
            <span className="font-bold">Hello, I'm Ridwan.</span> I'm a{" "}
            <span className="font-bold">Computer Engineering Student</span> with{" "}
            <span className="font-bold">2 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
        </p>
    </section>
  )
}
