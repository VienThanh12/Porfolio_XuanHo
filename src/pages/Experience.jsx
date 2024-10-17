import React from "react";
import ExperienceCard from "../components/ExperienceCard";

const experiences = [
  {
    role: "PhD Student | Junior Researcher",
    company: "IMT Atlantique",
    location: "Brest, France",
    time: "From Nov 2024",
    description: [
      "Conducting research on civic tech projects to design replicable process models.",
      "Developing frameworks for digital commons and software engineering principles.",
      "Collaborating with the research team to publish papers and present findings at conferences."
    ]
  },
  {
    role: "Growth Support Engineer",
    company: "Hello Clever",
    location: "Remote | Sydney, Australia",
    time: "Jul 2023 - Present",
    description: [
      "Provided technical support for API integration and optimized their services.",
      "Assisted developers in documentation, troubleshooting, and problem-solving.",
      "Contributed to a monthly revenue stream in the millions of dollars."
    ]
  },
  {
    role: "Software Engineer",
    company: "Sassybae",
    location: "Remote | Sydney, Australia",
    time: "Nov 2022 - Jul 2023",
    description: [
      "Developed the company website and backend for mobile applications.",
      "Implemented API cloud functions and achieved high performance metrics for the site."
    ]
  }
];

const Experience = () => {
  return (
    <div style={{ padding: '2.5rem' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>Experience</h2>
      <div style={{ marginTop: '1.25rem' }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: '1.5rem' }}>
            <ExperienceCard experience={exp} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
