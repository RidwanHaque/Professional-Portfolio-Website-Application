import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/NBA4.png";
import rmtdevImg from "@/public/snake.png";
import wordanalyticsImg from "@/public/portweb3.png";
import airtrafficImg from "@/public/airtraffic.png"; 
import pcbImg from "@/public/pcb.png"; 
import piano from "@/public/piano2.jpg";



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
    title: "Machine Learning and Biomechanics Researcher",
    company: "Georgia Tech | Institute for Robotics and Intelligent Machines", // <-- Add this line
    location: "Atlanta, GA",
    description:
      "Upgraded PCB architecture and power delivery via precision circuit routing, optimizing signal integrity for hip-exoskeleton. Configured 7 IMUs for sensor ablation experiments on an engineered hip exoskeleton to analyze balance augmentation on humans. Engineered a hierarchical data structure, 4 data visualization MATLAB functions, and a GUI for TCN machine learning model training, organizing and analyzing biomechanical data from 24 CAREN pilots across variable platform perturbation conditions",
    icon: React.createElement(FaReact),
    date: "Jan 2025 - Current",
  },
    {
    title: "Project Manager",
    company: "Georgia Tech Office of Commercialization",
    location: "Atlanta, GA",
    description:
      "Optimized database systems with Airtable by designing a custom GUI, enabling employees to efficiently view and manage their assigned tasks, track deadlines, and collaborate, resulting in a 60% increase in task completion rates. Programmed JavaScript automations for the department's hiring tracking processes, enabling application tracking, record organization, and a GUI for aggregating applicant form fields to generate 8 data metrics for departmental insights. Delivered technical AV support for 5 conference presentations and trained 10 employees on Airtable database implementation ",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Current",
  },
    {
    title: "Product Designer",
    company: "Nitriam Design",
    location: "Orlando, FL",
    description:
      "Managing contract projects for the manufacturing startup, including client meetings to discuss project timelines and budgeting. Designed 10 vehicles and an RC Aircraft for 3D printing and rendering high-quality product visualizations for brands",
    icon: React.createElement(FaReact),
    date: "June 2024 - Jan 2025",
  },
  {
    title: "Computational Astrophysics Researcher",
    company: "UGA CURO Research Program",
    location: "Athens, GA",
    description:
      "Programmed an interactive UI with Python, optimizing user control and navigation by 50%. Integrated 10 NASA Visualization Tech Apps & Development resources and utilized observational research data for scripting. Configured Git LFS with GitHub to track over 30 file versions, and share large simulation files remotely",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - May 2024",
  },
  // {
  //   title: "Administrative Assistant",
  //   company: "UGA Office of Undergraduate Admissions",
  //   location: "Athens, GA",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "Aug 2023 - May 2024",
  // },
] as const;

export const projectsData = [
  {
    title: "AI and ML-Powered NBA Game Analysis Using Computer Vision",
    description:
      "Developed a professional NBA basketball analytics system leveraging AI and ML techniques with computer vision for automated player and ball detection, tracking, and game event analysis. Utilized YOLO for real-time object detection, OpenCV for video processing, and Python for system integration and data handling.",
    tags: ["Python", "OpenCV", "Deep Learning", "Machine Learning", "Pytorch", "Object Detection", "Jupyter Notebooks", "Lightning AI", "Roboflow API"],
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
    title: "Arduino-Powered Piano LED Visualizer/Learning System API",
    description:
      "Engineered an embedded system that translates live MIDI data from a digital piano into a real-time, velocity-sensitive light show on a WS2812B addressable LED strip. The system's hardware core is an Arduino Uno, which processes serial data captured via the Hairless MIDI Serial Bridge. The circuit design incorporates a 330-ohm resistor for data line signal integrity and a parallel 100 microfarad capacitor to stabilize the 5V/4A external power supply, ensuring reliable hardware performance. The firmware, written in C++ in the Arduino IDE, is designed as a configurable API. The modular script allows for easy implementation for various MIDI enabled keyboards and LED strips, and also functions as a piano tutor. This enables users to program new songs for guided learning simply by defining the melody and rhythm within the code, creating a (follow the lights) experience",
    tags: ["Arduino", "Esp32", "C++", "API Design", "Hardware/Software Integration", "Circuit Design", "MIDI signal processing", "Embedded Systems"],
    imageUrl: piano,
  },
  {
    title: "Hip Exoskeleton and Sensor Suit Interface PCB",
    description:
      "Designed and fabricated a custom PCB using EasyEDA for integration with the Vicon motion capture system, CAREN Motek platform, and Nvidia Jetson unit. The board is mounted on a hip exoskeleton and sensor suits for machine learning data collection in robotic human augmentation research. The PCB features precision power delivery, multiple sensor and actuator connectors, and robust signal routing to support real-time biomechanical data acquisition and control.",
    tags: ["EasyEDA", "PCB Design", "Nvidia Jetson", "Machine Learning", "Embedded Systems",],
    imageUrl: pcbImg,
  },
  {
    title: "Professional React and Tailwind CSS Web Portfolio",
    description:
      "Built a modern, fully responsive developer portfolio website using Next.js 13, React, TypeScript, and Tailwind CSS. Implemented advanced UI/UX with Framer Motion animations, dark/light mode, and dynamic state management via React Context API. Integrated a functional contact form using React Email and Resend, and deployed the site to Vercel for live access. Emphasized accessibility, performance, and mobile-first design to showcase professional web development skills",
    tags: ["React", "Next.js","Node.js", "TypeScript", "Tailwind", "Framer", "Context API","Resend API", "React Hooks" , "Vercel"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Air Traffic Control LED Peripheral Visualization System",
    description:
      "Co-developed an embedded LED interface using memory-mapped registers on a DE10 board, enabling real-time control of 10 LEDs via a 16-bit protocol to simulate airway status (open/closed) and speed limits (20%-80% brightness). Collaborated in a 4-member team to design hardware-software integration, contributing to pattern generation logic and demo code for an air traffic control API.",
    tags: ["Intel Quartus Prime", "SCOMP Assembly", "VHDL", "Embedded Systems", "FPGA"],
    imageUrl: airtrafficImg,
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
  "Framer Motion",
  "C",
  "C++",
  "Java",
  "Python",
  "MATLAB",
  "VHDL",
  "Verilog",
  "RISC-V Assembly",
  "Linux",
  "Ubuntu/WSL",
  "Raspbian",
  "Mbed OS",
  "ARM mbed",
  "ESP32",
  "Arduino IDE",
  "FPGAs",
  "Raspberry Pi",
  "Oscilloscope",
  "Logic Analyzer",
  "Multimeter",
  "Intel Quartus Prime",
  "ModelSim",
  "LabVIEW",
  "Autodesk Inventor",
  "Fusion 360",
  "EasyEDA",
  "Blender",
  "Airtable",
  "Jupyter Notebooks",
  "OpenCV",
  "Docker",
  "Google Cloud Platform",
  "AWS",
  "Azure",
] as const;