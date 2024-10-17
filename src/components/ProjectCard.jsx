import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-2">{project.description}</p>
      <p className="mt-2 text-sm text-gray-500">Technologies: {project.tech}</p>
    </div>
  );
};

export default ProjectCard;
