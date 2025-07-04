import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/NBA2.png";
import rmtdevImg from "@/public/snake.png";
import wordanalyticsImg from "@/public/portweb.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AI and ML-Powered NBA Game Analysis Using Computer Vision",
    description:
      "Developed a professional NBA basketball analytics system leveraging AI and ML techniques with computer vision for automated player and ball detection, tracking, and game event analysis. Utilized YOLO for real-time object detection, OpenCV for video processing, and Python for system integration and data handling.",
    tags: ["Python", "OpenCV", "Deep Learning", "Pytorch", "Object Detection", "Jupyter Notebooks", "Lightning AI", "Roboflow API"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Retro Snake Game on ARM Mbed Microcontroller",
    description:
      "Developed a classic Snake game on an ARM Mbed microcontroller using C++ and embedded hardware prototyping. Integrated a micro-LCD display, capacitive touch controls, and audio output on a breadboarded system. Optimized game logic with efficient linked-list data structures for dynamic gameplay and implemented custom I/O interfacing for responsive user input and real-time feedback.",
    tags: ["C++", "ARM Mbed OS", "Embedded Systems", "Data Structures", "Circuit Design"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Professional React and Tailwind CSS Web Portfolio",
    description:
      "Built a modern, fully responsive developer portfolio website using Next.js 13, React, TypeScript, and Tailwind CSS. Implemented advanced UI/UX with Framer Motion animations, dark/light mode, and dynamic state management via React Context API. Integrated a functional contact form using React Email and Resend, and deployed the site to Vercel for live access. Emphasized accessibility, performance, and mobile-first design to showcase professional web development skills",
    tags: ["React", "Next.js","Node.js", "TypeScript", "Tailwind", "Framer", "Context API", "React Hooks"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "C++",
  "OpenCV",
  "Docker",
  "GCP",
  "AWS",
  "Azure",
  "Verilog",
  "Python",
  "Assembly",
  "Framer Motion",
] as const;