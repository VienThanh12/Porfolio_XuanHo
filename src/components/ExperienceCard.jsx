import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h3 className="text-xl font-semibold">{experience.role}</h3>
      <p className="text-md text-gray-700">{experience.company}</p>
      <p className="text-sm text-gray-500">{experience.location} | {experience.time}</p>
      <ul className="list-disc list-inside mt-2">
        {experience.description.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
