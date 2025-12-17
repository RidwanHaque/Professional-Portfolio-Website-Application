import React from "react";

export default function AddProjectDemo() {
  function addProject() {
    fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Project",
        description: "This is a new project.",
        // add other fields as needed
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // { status: "success", received: { ... } }
        alert("Project added! See console for response.");
      });
  }

  return (
    <button
      onClick={addProject}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Add Project
    </button>
  );
}