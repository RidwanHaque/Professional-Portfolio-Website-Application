import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/NBA4.png";
import rmtdevImg from "@/public/snake.png";
import wordanalyticsImg from "@/public/portweb3.png";
import airtrafficImg from "@/public/airtraffic.png"; 
import pcbImg from "@/public/pcb5.png"; 
import piano from "@/public/piano2.jpg";
import cyber from "@/public/cyber4.png";
import bmo from "@/public/BMO.png";


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
    title: "Biomedical Hardware Researcher",
    company: "Georgia Tech | Institute for Robotics and Intelligent Machines", // <-- Add this line
    location: "Atlanta, GA",
    description:
      "Designed and upgraded PCB architecture and power delivery for AK80 motors, emergency switch, and Nvidia Jetson Nano, optimizing CAN bus signal processing integrity for the hip exoskeleton by 60%. Innovated PCB design with a remote emergency stop protocol by integrating Jetson-controlled MOSFET gating for software-driven motor power cutoff, and soldered 20 backup cables to ensure system redundancy and reliability. Optimized 7-IMU exoskeleton data processing using Python, reducing sensor count by 40% with only a 2% loss in accuracy. Developed a procedural data architecture and four custom MATLAB visualization algorithms for real-time biomechanical machine learning training and performance analysis across 24 pilot trial datasets.",
    icon: React.createElement(FaReact),
    date: "Jan 2025 - Current",
  },
    {
    title: "Information Technology Project Manager",
    company: "Georgia Tech Office of Commercialization",
    location: "Atlanta, GA",
    description:
      "Optimized Airtable databases by designing a custom GUI that enabled 12 employees to efficiently view and manage their assigned tasks, track deadlines, and collaborate, resulting in a 67% increase in task completion rates. Programmed JavaScript automations for hiring processes to enable application tracking, record organization, and a GUI for aggregating applicant form fields to generate eight data metrics for departmental insights. Deployed a scalable event database for four departments, enforced secure access controls, trained 10 employees on error-handling interfaces, and configured AI-powered alerts, improving coordination efficiency by 80%.",
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
    title: "Astrophysics Software Researcher",
    company: "University of Georgia Department of Physics & Astronomy",
    location: "Athens, GA",
    description:
      "Developed a 3D solar system simulation in Blender by integrating 10 NASA VTAD assets and automating 20 motion paths through Python scripting for predictive eclipse visualization on Meta Quest VR. Engineered an interactive Python GUI that enhanced user navigation and control by 58%. Utilized Git version control to manage over 30 simulation files, improving collaborative development. Awarded a $1,000 CURO Research Grant and presented the simulation at the 2024 CURO Research Symposium.",
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
    title: "Full-Stack Embedded AI BMO Companion",
    description:
      "Designed and programmed an ESP32‑C6–based BMO Tamagotchi companion in C/C++ with a 4D Systems uLCD, 5‑way nav switch, common‑anode RGB LED, piezo speaker (LEDC PWM), MEMS mic, and ESP‑NOW IMU accessory, implementing non‑blocking state machines for UI, game loop, and virtual stat management (happiness/energy) in real time. Implemented low‑power system design on ESP32‑C6 using light/deep sleep, RTC with NTP sync, and wake‑on‑input, extending projected battery life by ~3–4× while maintaining responsive UI, wireless events, and periodic stat decay updates. Developed a full‑stack chat backend and web client (Node.js/Express, React/TypeScript, PostgreSQL, Prisma, Socket.IO) where both the browser UI and ESP32 hardware share a unified BMO persona, REST/voice API surface, and persistent conversation history.​ Built an ESP32 → WiFi → /api/voice/input pipeline streaming PCM audio to a containerized Node.js service using OpenAI Whisper + GPT, centralizing AI behavior, prompt logic, and multi‑client coordination while the microcontroller handles low‑level transport, sensors, display, and local game logic. Containerized frontend, backend, and PostgreSQL with Docker Compose and environment‑based config, enabling one‑command spin‑up for teammates/demos and reducing setup time from hours to under 5 minutes.​ Modeled the BMO enclosure and internal mounting features in SolidWorks and iterated a 3D‑printed chassis to integrate PCB, uLCD, nav switch, RGB LED, and battery pack, validating clearances, thermals, and cable routing for a manufacturable embedded form factor.",
    tags: ["Full‑stack", "ESP32‑C6 embedded systems", "Edge AI voice pipeline", "Docker Compose microservices", "SolidWorks", "Low‑power firmware / RTC", "PostgreSQL / Prisma ORM", "Real‑time state machines (UI/game loop)", "Wireless sensor networks (ESP‑NOW)", "TypeScript/Node.js/Express/React", "OpenAI Whisper + GPT-4"],
    imageUrl: bmo,
  },
  {
    title: "AI and ML-Powered NBA Game Analysis Using Computer Vision",
    description:
      "Developed a professional NBA basketball analytics system leveraging AI and ML with computer vision for automated player and ball detection, multi-object tracking, and game event analysis. Built a PyTorch and ML based pipeline utilizing YOLO for real-time object detection, OpenCV for video processing, a zero-shot classifier for team affiliation, and court keypoint detection to generate tactical top-down views and calculate 4 real-world metrics such as speed, distance, passes, and steals. Integrated the system with Python for seamless data handling and analysis.",
    tags: ["Python", "OpenCV", "Deep Learning", "Machine Learning", "Pytorch", "Object Detection", "Jupyter Notebooks", "Lightning AI", "Roboflow API"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Retro Snake Game on ARM Mbed Microcontroller",
    description:
      "Developed a classic Snake game on an ARM Mbed microcontroller using C++ and embedded hardware prototyping. Integrated a micro-LCD display, 10 capacitive touch controls, and audio output on a breadboarded system. Optimized game logic with efficient linked-list data structures for dynamic gameplay and implemented custom I/O interfacing for responsive user input and real-time feedback.",
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
    title: "Cloud-Based Cyber-Threat Defense SOC + Honeynet on Azure",
    description:
      "Engineered a real-time SOC and honeynet environment in Microsoft Azure to demonstrate cloud-based threat defense, deploying 2 Windows and 1 Linux virtual machines alongside a SQL Database within a secured Virtual Network. All resources—including VMs, Key Vault, and network flows—were centrally monitored using Azure Log Analytics Workspace and integrated with Microsoft Sentinel (SIEM). During the evaluation period, 14 active Sentinel analytic rules (6 high, 7 medium severity) generated 150 brute force incident alerts within 7 days, sourced from thousands of global authentication attempts (e.g., 3,110+ each from Egypt and the UK). Post-deployment of advanced security controls and network hardening, security incidents and brute force attack volumes were reduced, as validated by Sentinel dashboards and KQL-based metric tracking.",
    tags: ["Azure", "Cloud Security", "SIEM", "KQL", "SQL Database", "Honeynet", "SOC", "Cybersecurity"],
    imageUrl: cyber,
  },
  {
    title: "Power/Data Hub PCB for Biomedical Exo Suit and Machine Learning",
    description:
      "Designed a PCB for integration with the Vicon motion capture system, CAREN Motek platform, and Nvidia Jetson, mounted on a hip exoskeleton and sensor suits for machine learning-based data collection in robotic human augmentation research. The board provides precision power delivery with dual battery inputs, emergency-stop, and a buck converter for isolated Jetson supply; it incorporates robust signal routing, CAN transceiver-based motor network outputs, and multiple dedicated connectors for sensors and actuators, enabling reliable real-time biomechanical data acquisition and control.",
    tags: ["EasyEDA", "PCB Design", "Nvidia Jetson", "Machine Learning", "Embedded Systems",],
    imageUrl: pcbImg,
  },
  {
    title: "Dynamic Frontend Developer Portfolio with React and Tailwind CSS",
    description:
      "Built a modern and responsive frontend developer portfolio website using Next.js 13, React, TypeScript, and Tailwind CSS. Implemented advanced UI/UX with 30 Framer Motion animations, System preference enabled dark/light mode, and dynamic state management via React Context API. Integrated a functional contact form using React Email and Resend, and deployed the site to Vercel with firewall-enabled security. Emphasized accessibility, performance, and mobile-first design.",
    tags: ["Frontend Development", "React", "Next.js","Node.js", "TypeScript", "Tailwind", "Framer", "Context API","Security", "React Hooks" , "Vercel"],
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
  "KQL",
  "SQL",
  "MATLAB",
  "VHDL",
  "Verilog",
  "RISC-V Assembly",
  "Linux",
  "Ubuntu",
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