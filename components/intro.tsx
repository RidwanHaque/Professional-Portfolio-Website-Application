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
    <section
      ref={ref}
      id="home"
      className="mb-24 w-full max-w-[72rem] scroll-mt-28"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="hero-card chip-panel rounded-3xl px-6 py-8 sm:px-10 sm:py-10 text-center lg:text-left"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <p className="hero-eyebrow">Silicon systems + embedded intelligence</p>
          <motion.h1
            className="hero-title font-display mt-4 text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold"
            style={{
              textShadow: "0 0 30px rgba(139, 92, 246, 0.4), 0 0 60px rgba(236, 72, 153, 0.2)"
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.6, delay: 0.1 }}
          >
            Hello, I&apos;m Ridwan. I design chip-aware systems, real-time
            software, and experimental platforms that fuse hardware with AI.
          </motion.h1>
          <p className="mt-4 text-base sm:text-lg text-[color:var(--muted)]">
            Computer Engineering student at Georgia Tech with 4 years of
            experience spanning chip design, embedded systems, distributed
            software, and data-driven tooling.
          </p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2 text-xs sm:text-sm">
            {[
              "Physical design",
              "Embedded systems",
              "Distributed software",
              "AI pipelines",
            ].map((label) => (
              <span key={label} className="chip-pill rounded-full px-3 py-1">
                {label}
              </span>
            ))}
          </div>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-base font-medium"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#contact"
              className="group btn-primary px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
              onClick={() =>{
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </a>

            <a
              className="group btn-secondary px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
              href="/RidwanHaque_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
              className="icon-btn p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
              href="https://www.linkedin.com/in/ridwanhaque0942/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="icon-btn p-4 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
              href="https://github.com/ridwanhaque"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem]"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.6, delay: 0.15 }}
        >
          <div className="hero-orbit hero-orbit--outer"></div>
          <div className="hero-orbit hero-orbit--inner"></div>
          <div className="hero-chip hero-chip--a"></div>
          <div className="hero-chip hero-chip--b"></div>
          <div className="relative z-10 rounded-[2.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-4 glow-ring">
            <Image
              src="/Ridwan%20V2.png"
              alt="Ridwan Portrait"
              width={520}
              height={640}
              quality={95}
              priority={true}
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>

      <motion.p
        className="mt-10 text-center text-sm text-[color:var(--muted)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0.35 }}
      >
        Currently building new projects and open to research and internship
        opportunities. Reach out anytime.
      </motion.p>

      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0.45 }}
      >
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="will-change-transform"
        >
          <motion.div
            whileHover={{ scale: 1.28 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 900, damping: 20, mass: 0.45 }}
            className="will-change-transform"
          >
            <Image
              src="/twistient.png"
              alt="Twistient"
              width={320}
              height={320}
              quality={95}
              className="w-80 h-80 object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
