import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Sassybae's Landing Page",
    description: "A landing page for Sassybae, a toy trading platform for kids.",
    tech: "Next.js, Tailwind CSS, Storyblok, Node.js"
  },
  {
    title: "Sturdy Octo Blog",
    description: "A full-stack blog application built with Next.js.",
    tech: "Next.js, Tailwind CSS, Firebase"
  }
];

const Projects = () => {
  return (
    <div style={{ padding: '2.5rem' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>Projects</h2>
      <div
        style={{
          marginTop: '1.25rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          gridGap: '1.5rem'
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
