import { useEffect, useState } from "react";

export default function ProjectsApiDemo() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div>
      <h2>Projects from API:</h2>
      <ul>
        {projects.map((project: any, idx) => (
          <li key={idx}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
}