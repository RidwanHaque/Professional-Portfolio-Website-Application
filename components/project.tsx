"use client";


import { projectsData } from "@/lib/data";
import { useState, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";



type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]

});
const scaleProgress = useTransform(scrollYProgress, [0,1],[0.8,1]);
const opacityProgress = useTransform(scrollYProgress, [0,1],[0.6,1]);


// Show only first 120 chars if not expanded
const preview = description.length > 120 && !expanded
  ? description.slice(0, 120) + "..."
  : description;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,      // <-- use the transformed value
        opacity: opacityProgress   // <-- use the transformed value
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-indigo-100/60 dark:bg-white/10 max-w-[75rem] border border-black/5 rounded-lg overflow-hidden p-5 sm:p-10 grid sm:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] gap-6 sm:gap-8 items-start sm:justify-between hover:bg-indigo-200/50 dark:hover:bg-white/20 dark:text-white">
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            <AnimatePresence initial={false}>
              <motion.span
                key={expanded ? "expanded" : "collapsed"}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ display: "block", overflow: "hidden" }}
              >
                {expanded ? description : preview}
              </motion.span>
            </AnimatePresence>
            {description.length > 120 && (
              <button
                className="ml-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-200/60 hover:bg-slate-300/80 transition-all duration-200 text-slate-700 font-medium shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-slate-400"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
              >
                <span className="transition-colors duration-200">
                  {expanded ? "Show less" : "Read more"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </p>
        </div>
        <div className="hidden sm:flex justify-end items-start self-start h-full">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="w-full max-w-[28rem] rounded-lg shadow-2xl drop-shadow-2xl transition group-hover:scale-[1.03] group-hover:translate-y-2"
          />
        </div>
      </section>
    </motion.div>
  );
}