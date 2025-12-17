"use client";

import { useEffect, useState } from "react";

interface Project {
  title: string;
  [key: string]: unknown;
}

export default function ProjectsApiDemo() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h2>Projects from API:</h2>
      <ul>
        {projects.map((project: Project, idx) => (
          <li key={idx}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
}