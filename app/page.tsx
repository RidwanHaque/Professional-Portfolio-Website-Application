import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";


import ProjectsApiDemo from "@/components/ProjectsApiDemo";

export default function Home() {
  return <main className="flex flex-col items-center px-4">
    <Intro />
    <SectionDivider />
    <About />

    <Projects />
    <ProjectsApiDemo />
    <AddProjectDemo />
    <Skills />
    <Experience />
    <Contact />
    

  </main>

}
