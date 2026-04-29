import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/NBA4.png";
import rmtdevImg from "@/public/snake.png";
import wordanalyticsImg from "@/public/portweb3.png";
import airtrafficImg from "@/public/airtraffic.png"; 
import piano from "@/public/piano2.jpg";
import cyber from "@/public/cyber4.png";
import bmo from "@/public/BMO.png";
import autonLineFollowingCarImg from "@/public/auton line following car.jpg";
import exoPcbUpdateImg from "@/public/exo pcb update.jpg";
import icFabProjectImg from "@/public/IC Fab project.jpg";
import hackathonTeamImg from "@/public/Hackathon Team.jpeg";
import icFabTeamV2Img from "@/public/IC Fab Team V2.png";
import ugaAstroResearchImg from "@/public/uga astro research.jpg";
import vlsiProjectImg from "@/public/updated vlsi project.png";
import epicLabImg from "@/public/Epic Lab.jpg";
import onboardingProjectImg from "@/public/onboarding project.png";


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
    name: "Activities",
    hash: "#activities",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Physical Design Team Researcher",
    company: "SiliconJackets - Part-time",
    location: "Atlanta, Georgia, United States - Hybrid",
    description:
      "Contributing to the physical design team implementing a SkyWater 130 nm ASIC using Cadence tools (Genus, Innovus, Virtuoso), supporting synthesis-to-layout flows, block-level tapeout runs, and macro integration for DFFRAM and SRAM. Responsibilities include setup and use of the team sapr-based automation environment and gradual ownership of Innovus flow bring-up, block-level TO2 flow runs, and macro placement experiments.",
    icon: React.createElement(FaReact),
    date: "Feb 2026 - Present",
  },
  {
    title: "Embedded Systems Hardware Researcher",
    company: "Exoskeleton and Prosthetic Intelligent Controls (EPIC) Lab",
    location: "Atlanta, GA",
    description:
      "Designed a power/control PCB in EasyEDA to replace legacy perfboard hardware, integrating battery input, 24V-to-20V buck regulation for Nvidia Jetson, XT30 motor distribution, and MoCap interfaces to improve robustness. Integrated a CAN transceiver between Jetson Orin and four motor drivers, translating logic-level TX/RX to CANH/CANL for real-time ML-driven balance-assist commands. Implemented a remote E-stop protocol with Jetson-controlled MOSFET gating for software-driven motor cutoff and soldered 20 backup cables for redundancy. Optimized a multi-IMU processing stack in Python on Linux, reducing sensor count and data volume by 40% with about 5% deviation from hip-torque ground truth. Built a modular MATLAB analytics pipeline to benchmark four ML forecast models across 24 treadmill-perturbation conditions and 16 patient datasets.",
    icon: React.createElement(FaReact),
    date: "Jan 2025 - Dec 2025",
  },
  {
    title: "Information Technology Project Manager",
    company: "Georgia Tech Office of Commercialization",
    location: "Atlanta, GA",
    description:
      "Optimized Airtable databases by designing a custom GUI that enabled 12 employees to view tasks, track deadlines, and collaborate, boosting completion rates by 70%. Programmed 20 JavaScript automations for hiring workflows, application tracking, and applicant field aggregation to generate 15 departmental metrics. Deployed a centralized event database for four departments, enforced secure access controls, trained 10 employees on error handling, and configured AI-powered alerts, improving coordination efficiency by 80%. Coordinated 50+ database projects with 25+ stakeholders, accelerating legacy Airtable upgrades and cutting update turnaround by 30%.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Present",
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
      "Developed a physics-informed 3D Solar System simulation in Blender by integrating 10 NASA VTAD models and orbital datasets, then scripting 20 camera and body motion paths in Python for predictive eclipse visualization on Meta Quest VR. Built a Blender Python UI add-on with custom panels and scene properties for account info, time controls, and rendering parameters to streamline interaction. Organized a structured Git repository for 30+ Blender, Python, and asset files to support iterative development and reproducible builds. Secured a $1,000 CURO Research Grant and delivered a live technical demo of the pipeline at the 2024 CURO Research Symposium.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2024 - May 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Silicon Chip Device Fabrication and Characterization",
    description:
      "Integrated Circuit Fabrication (Feb 2026). Executed a 40-step CMOS fabrication process on 2-inch n-type Si wafers across six photomask layers, including RCA clean, BOE wet etch, 1100 C thermal oxidations, and 365 nm UV photolithography. Fabricated active NMOS and PMOS devices with N+ and P+ solid-source pre-depositions, drive-in diffusions, and a 4000 A Al/Si PVD metallization layer. Evaluated predictive process modeling accuracy with Silvaco Athena/SUPREM TCAD scripts, extracting a simulated junction depth of 5.95 um and surface concentration of 3.16e16 cm^-3, and benchmarked against analytical Gaussian calculations. Validated device functionality by extracting threshold voltage and transconductance and measuring a 43.1 kHz ring oscillator frequency using probe station, curve tracer, and oscilloscope.",
    tags: ["CMOS Fabrication", "Photolithography", "TCAD", "Silvaco", "Device Characterization", "Cleanroom"],
    imageUrl: icFabProjectImg,
  },
  {
    title: "Calculator SoC: Verification & Physical Design (Digital VLSI)",
    description:
      "Georgia Tech SiliconJackets (Jan 2026). Designed and implemented a 64-bit SRAM-backed calculator in SystemVerilog for a digital VLSI SoC datapath, improving memory-read correctness by adding FSM priming and wait sequencing to handle SRAM latency and eliminate stale first-read behavior. Built a class-based verification environment with driver, monitor, scoreboard, constrained-random sequences, assertions, and coverage using Cadence Xcelium, SimVision, and IMC; executed 2000 randomized transactions and achieved 98% DUT coverage. Executed an end-to-end RTL-to-GDSII flow with Cadence Genus, Innovus, Tempus, and Voltus, including synthesis, floorplanning, place-and-route, STA signoff, and SRAM macro integration with placement and keepout constraints. Closed post-route timing with zero setup/hold violations and no failing endpoints, and used a Python-based STA parsing script to quantify timing headroom and determine a zero-WNS operating frequency of 943 MHz.",
    tags: ["SystemVerilog", "Verification", "Cadence", "RTL-to-GDSII", "STA", "SoC"],
    imageUrl: onboardingProjectImg,
  },
  {
    title: "VLSI CMOS Synchronous Adding Computer",
    description:
      "VLSI and Advanced Digital Design (Nov 2025). Designed a 1-bit CMOS full adder (XOR, NAND, INV) and composed a 4-bit ripple-carry adder, verifying all input combinations and characterizing sum/carry delay across a VDD sweep from 1.0 V to 0.6 V. Implemented an edge-triggered D flip-flop and 4-bit register file, then integrated them with the 4-bit adder into a synchronous adding computer at 10 MHz using vector-file testbenches for functional verification. Characterized maximum functional frequency by sweeping clock until failure and relating f_max to VDD scaling through transient simulations and delay measurements. Completed full custom layout of the 4-bit adder up to M4 in Cadence Virtuoso, passing DRC/LVS and analyzing subthreshold leakage and Vth tradeoffs for inverter-based standard cells.",
    tags: ["VLSI", "CMOS", "Cadence Virtuoso", "DRC/LVS", "SPICE", "Digital Design"],
    imageUrl: vlsiProjectImg,
  },
  {
    title: "Full-Stack Embedded AI BMO Companion",
    description:
      "Designed and programmed an ESP32-C6-based BMO Tamagotchi companion in C/C++ with a 4D Systems uLCD, 5-way nav switch, common-anode RGB LED, piezo speaker (LEDC PWM), MEMS mic, and ESP-NOW IMU accessory, implementing non-blocking state machines for UI, game loop, and virtual stat management in real time. Implemented low-power system design on ESP32-C6 using light/deep sleep, RTC with NTP sync, and wake-on-input, extending projected battery life by ~3-4x while maintaining responsive UI, wireless events, and periodic stat decay updates. Developed a full-stack chat backend and web client (Node.js/Express, React/TypeScript, PostgreSQL, Prisma, Socket.IO) where both the browser UI and ESP32 hardware share a unified BMO persona, REST/voice API surface, and persistent conversation history. Built an ESP32 to WiFi to /api/voice/input pipeline streaming PCM audio to a containerized Node.js service using OpenAI Whisper and GPT, centralizing AI behavior, prompt logic, and multi-client coordination while the microcontroller handles low-level transport, sensors, display, and local game logic. Containerized frontend, backend, and PostgreSQL with Docker Compose and environment-based config, enabling one-command spin-up for teammates and demos and reducing setup time from hours to under 5 minutes. Modeled the BMO enclosure and internal mounting features in SolidWorks and iterated a 3D-printed chassis to integrate PCB, uLCD, nav switch, RGB LED, and battery pack, validating clearances, thermals, and cable routing for a manufacturable embedded form factor.",
    tags: ["Full-stack", "ESP32-C6 embedded systems", "Edge AI voice pipeline", "Docker Compose microservices", "SolidWorks", "Low-power firmware / RTC", "PostgreSQL / Prisma ORM", "Real-time state machines", "Wireless sensor networks", "TypeScript/Node.js/Express/React", "OpenAI Whisper + GPT-4"],
    imageUrl: bmo,
  },
  {
    title: "ML Basketball Game Analysis System",
    description:
      "Independent project (June 2025). Built a production-ready, Dockerized Python pipeline for real-time basketball game analysis, combining AI and machine-learning multi-object tracking with OpenCV overlays, court aerial-view mapping, team assignment, and five metrics (passes, interceptions, possession, speed, distance) using a Hugging Face model for jersey-color classification. Trained and fine-tuned PyTorch models on AWS EC2 GPU instances, then deployed real-time inference and converted detections to structured tracking data with NumPy and Pandas, improving detection accuracy by 93%. Built a full-stack basketball analysis web app with FastAPI and Uvicorn and HTML/CSS/JavaScript frontend, adding clip upload, an SQLite-backed video library, and REST API routes to submit videos, track processing status, and fetch outputs.",
    tags: ["Python", "Docker", "OpenCV", "PyTorch", "AWS EC2", "FastAPI", "Uvicorn", "SQLite", "NumPy", "Pandas", "Hugging Face", "Computer Vision"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Autonomous Line-Following Car - Visual and Audio Systems",
    description:
      "Junior Design Capstone (April 2026). Led the A/V subsystem within a 4-person team using an Agile V-model workflow, including requirements decomposition, verification and validation planning, iterative risk reduction, and Git base setup for all subteams. Executed full PCB tapeout in KiCad with schematic capture, ERC/DRC, BOM, and Gerber generation for a custom A/V hub with display, audio, SPI I/O expander, and LED bargraph connectors; sent for fabrication, hand-soldered, and validated power integrity. Engineered A/V firmware in C++ on an ESP32-C6, driving an OLED arrow display over I2C, a 10-LED speed bargraph over SPI, and PWM audio feedback in a unified control loop. Deployed a Wi-Fi access point and HTTP web server on ESP32 for an HTML/CSS/JavaScript mobile UI with real-time speed, direction, and IR sensor metrics for debugging and data analysis.",
    tags: ["ESP32-C6", "C++", "PCB Design", "KiCad", "SPI", "I2C", "Embedded Systems", "Agile", "Firmware"],
    imageUrl: autonLineFollowingCarImg,
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
    tags: ["Arduino", "ESP32", "C++", "API Design", "Hardware/Software Integration", "Circuit Design", "MIDI signal processing", "Embedded Systems"],
    imageUrl: piano,
  },
  {
    title: "Cloud-Based Cyber-Threat Defense SOC + Honeynet on Azure",
    description:
      "Engineered a real-time SOC and honeynet environment in Microsoft Azure to demonstrate cloud-based threat defense, deploying 2 Windows and 1 Linux virtual machines alongside a SQL Database within a secured Virtual Network. All resources, including VMs, Key Vault, and network flows, were centrally monitored using Azure Log Analytics Workspace and integrated with Microsoft Sentinel (SIEM). During the evaluation period, 14 active Sentinel analytic rules generated 150 brute force incident alerts within 7 days, sourced from thousands of global authentication attempts. Post-deployment of advanced security controls and network hardening, security incidents and brute force attack volumes were reduced, as validated by Sentinel dashboards and KQL-based metric tracking.",
    tags: ["Azure", "Cloud Security", "SIEM", "KQL", "SQL Database", "Honeynet", "SOC", "Cybersecurity"],
    imageUrl: cyber,
  },
  {
    title: "Power/Data Hub PCB for Biomedical Exo Suit and Machine Learning",
    description:
      "Designed a power/control PCB in EasyEDA to replace a legacy perfboard assembly, integrating battery input, 24V-to-20V buck regulation for Nvidia Jetson, XT30 motor distribution, and MoCap interfaces to harden the electrical stack. Integrated a CAN transceiver between the Jetson Orin controller and four motor drivers, translating logic-level TX/RX to CANH/CANL for real-time ML balance-assist commands. Implemented a remote E-stop protocol with Jetson-controlled MOSFET gating for software-driven motor cutoff and soldered 20 backup cables for redundancy.",
    tags: ["EasyEDA", "PCB Design", "Nvidia Jetson", "Machine Learning", "Embedded Systems"],
    imageUrl: exoPcbUpdateImg,
  },
  {
    title: "Dynamic Frontend Developer Portfolio with React and Tailwind CSS",
    description:
      "Built a modern and responsive frontend developer portfolio website using Next.js 13, React, TypeScript, and Tailwind CSS. Implemented advanced UI/UX with 30 Framer Motion animations, system preference enabled dark/light mode, and dynamic state management via React Context API. Integrated a functional contact form using React Email and Resend, and deployed the site to Vercel with firewall-enabled security. Emphasized accessibility, performance, and mobile-first design.",
    tags: ["Frontend Development", "React", "Next.js", "Node.js", "TypeScript", "Tailwind", "Framer", "Context API", "Security", "React Hooks", "Vercel"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "FPGA LED Control Peripheral for Air Traffic Simulation",
    description:
      "Digital Hardware Design Laboratory (Apr 2025). Worked in a 4-person team to translate customer requirements for richer LED control into a peripheral specification for the SCOMP processor on a DE10 FPGA, defining a clear assembly-level interface for future software. Implemented and verified the LED controller in VHDL using Quartus Prime, exposing a 16-bit control register at I/O address 0x20 with direct 10-bit output, 4 PWM brightness levels (20–80% duty cycle), and 7 predefined patterns. Designed an assembly-level API that lets SCOMP software configure mode, brightness, and pattern with a single I/O write, and used it to build an air traffic simulation where each LED represents an air lane and brightness encodes aircraft traffic intensity. Applied an iterative hardware design process (requirements capture, register-map design, simulation, and on-board debug) with shared version control and informal code reviews to converge on a robust, backward-compatible peripheral.",
    tags: ["FPGA", "VHDL", "Quartus Prime", "SCOMP Assembly", "PWM"],
    imageUrl: airtrafficImg,
  },
] as const;

export const activitiesData = [
  {
    title: "1st Place - Claude Builder Club Hackathon with NBC (Orbit - AI Nutrition Coach)",
    organization: "Claude Builder Club @ Georgia Tech (Anthropic + NBC)",
    date: "Apr 2026",
    description:
      "Led a team of five to build Orbit, an AI-powered nutrition coach that uses computer vision and Claude's agentic capabilities to analyze food imagery, extract nutrition data, and deliver personalized dietary recommendations. Won 1st place among Georgia Tech teams and presented to organizers and NBC stakeholders with a focus on technical innovation and user impact.",
    tags: ["Hackathon", "1st Place", "Computer Vision", "LLM Agents"],
    imageUrl: hackathonTeamImg,
  },
  {
    title: "Exoskeleton and Prosthetic Intelligent Controls (EPIC) Lab - Human Balance Augmentation Team",
    organization: "Georgia Tech | EPIC Lab",
    date: "2025",
    description:
      "Team focused on assistive and wearable robotic systems for balance augmentation, combining sensing, control, and human-in-the-loop experimentation for safer mobility outcomes.",
    tags: ["Wearable Robotics", "Balance Augmentation", "Human-in-the-loop"],
    imageUrl: epicLabImg,
  },
  {
    title: "Integrated Circuit Fabrication Cleanroom Laboratory Team",
    organization: "Georgia Tech",
    date: "2026",
    description:
      "Cleanroom lab team focused on CMOS process execution, mask alignment, and device characterization. Highlights team collaboration, lab safety, and instrumentation workflows.",
    tags: ["Cleanroom", "IC fabrication", "Lab team", "Device characterization"],
    imageUrl: icFabTeamV2Img,
  },
  {
    title: "CURO Research Award & Symposium Spring 2024 - Simulations for Astronomy Education",
    organization: "University of Georgia - Center for Undergraduate Research Opportunities (CURO)",
    date: "Apr 2024",
    description:
      "Developed 3D, VR-ready astronomy simulations modeling the Earth-Moon-Sun system and solar/lunar eclipses using NASA VTAD assets and custom Blender tooling, enabling students to explore a virtual night sky from any location on Earth and addressing limitations of traditional astronomy labs. Presented a first-author poster at UGA's Spring 2024 CURO Research Symposium and received a $1000 CURO Research Reward.",
    tags: ["Research Award", "VR Simulation", "NASA VTAD", "Blender"],
    imageUrl: ugaAstroResearchImg,
  },
] as const;

export const skillGroups = [
  {
    title: "Computer Architecture and RTL",
    items: [
      "SystemVerilog",
      "Verilog",
      "VHDL",
      "RISC-V Assembly",
      "MIPS Assembly",
      "datapaths",
      "FSMs",
      "pipelined processors",
      "memory-mapped I/O",
      "calculator SoC",
      "RISC-V core",
      "verification testbenches",
      "waveform debugging",
      "assertions",
      "constrained-random stimulus",
      "coverage",
      "UVM-style environments",
      "5-stage pipeline",
      "hazards",
      "caches",
      "virtual memory",
      "concurrency",
      "energy and power in processors",
      "datapath design",
      "digital arithmetic circuits",
    ],
  },
  {
    title: "VLSI and Physical Design",
    items: [
      "RTL-to-GDSII flow",
      "synthesis",
      "floorplanning",
      "placement and routing",
      "STA",
      "power analysis",
      "SRAM macro integration",
      "Cadence Genus",
      "Innovus",
      "Tempus",
      "Voltus",
      "Virtuoso",
      "Quartus Prime",
      "FPGA CAD flows",
      "simulators",
      "waveform tools",
      "standard cell design",
      "standard cell layout",
      "interconnect delay",
      "delay/power analysis",
      "digital circuits",
      "analog circuits",
      "SPICE simulation",
    ],
  },
  {
    title: "Semiconductors and Material Sciences",
    items: [
      "semiconductor fabrication fundamentals",
      "CMOS logic",
      "MOSFET I-V behavior",
      "device regions",
      "leakage",
      "delay",
      "SRAM",
      "DRAM",
      "Flash memory",
      "oxidation",
      "diffusion",
      "lithography",
      "etch",
      "metallization",
      "ion implantation",
      "CVD",
      "cleanroom safety",
      "process integration",
      "device testing on wafers",
      "metrology",
      "four-point probe",
      "oxide thickness measurement",
      "SPC/run-sheet mindset",
      "crystal structures",
      "defects",
      "phase diagrams",
      "mechanical properties",
      "physics of solids",
    ],
  },
  {
    title: "Embedded Systems and PCB Design",
    items: [
      "ARM Cortex",
      "ARM mbed",
      "FreeRTOS",
      "Embedded Linux",
      "Arduino",
      "ESP32",
      "NVIDIA Jetson",
      "Raspberry Pi",
      "real-time systems",
      "low-power modes",
      "sensor fusion",
      "PWM motor control",
      "IMU integration",
      "SPI",
      "I2C",
      "UART",
      "CAN",
      "GPIO",
      "ADC",
      "DAC",
      "Bluetooth",
      "WiFi",
      "BLE",
      "sensors",
      "actuators",
      "PCB design",
      "EasyEDA",
      "KiCad",
      "oscilloscope",
      "logic analyzer",
      "multimeter",
      "breadboarding",
      "soldering",
      "board bring-up",
      "hardware-software integration",
      "sensor integration",
      "battery technology",
      "board-level debugging",
    ],
  },
  {
    title: "Firmware engineering",
    items: [
      "C",
      "C++",
      "Embedded C",
      "bare-metal programming",
      "interrupt-driven I/O",
      "device driver interface",
      "state machines",
      "interrupt handling",
      "real-time firmware",
      "RTOS-style firmware",
      "firmware architecture",
      "low-level register programming",
      "device initialization",
      "debug logging",
      "protocol handlers",
      "timers",
    ],
  },
  {
    title: "High performance computing ML/AI",
    items: [
      "CUDA concepts",
      "memory hierarchy",
      "occupancy",
      "race conditions",
      "optimization",
      "reductions",
      "scans",
      "sorts",
      "AI/ML",
      "classical ML",
      "neural networks",
      "computer vision",
      "OpenCV",
      "scikit-learn",
      "Hugging Face",
      "data pipelines",
      "analytics",
      "Jupyter Notebooks",
    ],
  },
  {
    title: "Cloud computing and networking",
    items: [
      "AWS",
      "Azure",
      "Google Cloud Platform",
      "VMs",
      "serverless",
      "Docker",
      "Docker Compose",
      "microservices",
      "REST APIs",
      "load balancing",
      "scalability",
      "key-value stores",
      "SQL",
      "MapReduce",
      "Spark-style processing",
      "security and monitoring",
      "TCP/UDP",
      "routing",
      "IP",
      "MAC",
      "WiFi basics",
    ],
  },
  {
    title: "Fullstack software development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "Bash/Shell",
      "Perl",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Flask",
      "Django",
      "PostgreSQL",
      "Prisma",
      "SQL",
      "RESTful APIs",
      "microservices",
      "responsive design",
      "UI/UX",
      "Framer Motion",
      "Vercel",
      "web application architecture",
    ],
  },
  {
    title: "Version control and collaboration tools",
    items: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Makefiles",
      "GitHub Copilot",
      "GitHub Actions",
      "Linux",
      "Docker",
      "CI/CD pipelines",
      "Airtable",
    ],
  },
] as const;