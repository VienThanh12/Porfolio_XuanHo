import React, { useState } from 'react';

const LinkedInIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://www.linkedin.com/in/susan95/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        transition: 'all 0.3s ease-in-out', // Smooth transition for all effects
        transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Scale up on hover
        color: isHovered ? '#000' : 'inherit', // Change text color to black on hover
        opacity: isHovered ? 1 : 0.8, // Opacity change
        backgroundColor: 'white',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="linkedin.svg"
        alt="LinkedIn"
        style={{
          marginTop: '5px',
          height: '1.3em',
          width: '2rem',
          transition: 'all 0.3s ease-in-out',
        }}
      />
    </a>
  );
};

export default LinkedInIcon;
