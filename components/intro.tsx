"use client"
//this converts the code below into a client component
//we need to do this because we are using framer motion and next/image which are client components

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
//import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
 const {ref} = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick, } =
    useActiveSectionContext();


  return (
    //we use section instead of div because it is more semantic for the content we are displaying
    //section is used to group related content together
    //we are going to have another div that will hold image of person
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
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
                        className="h-60 w-60 rounded-full object cover border-[0.35rem] border-white shadow-x1"
                        />

                </motion.div>

            </div>


        </div>
        <motion.h1 className="mb-10 mt-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        //transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
        >
            <span className="font-bold">Hello, I&apos;m Ridwan.</span> I&apos;m a{" "}
            <span className="font-bold">Computer Engineering Student</span> studying at 
            <span className="font-bold"> The Georgia Institute of Technology</span> with{" "}
            <span className="font-bold">4 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.

            
        </motion.h1>
        <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition "
          onClick={() =>{
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/cv.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-[#0077b5] p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-[#005983] active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/ridwanhaque0942/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-[#181717] p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-black active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/ridwanhaque"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
        <motion.p
            className="mt-6 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.5, delay: 0.4 }}
        >
            I’m currently working on a few projects and looking for new
            opportunities. Feel free to reach out if you have any questions
            or just want to connect!
        </motion.p>
    </section>
  )
}
