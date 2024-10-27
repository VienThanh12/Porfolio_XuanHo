import React from 'react';

const ProjectCard = () => {
  const cardContainerStyle = {
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: '#2e2e48',
    borderRadius: '8px',
  };

  const headerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#ffffff',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#c0c0c0',
    marginBottom: '1rem',
  };

  const tagContainerStyle = {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  };

  const tagStyle = {
    backgroundColor: '#3b3b57',
    color: '#ffffff',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.9em',
  };

  return (
    <div style={cardContainerStyle}>
      <div style={headerContainerStyle}>
        <h4 style={titleStyle}>Buzzmetrics</h4>
        <span style={{ fontSize: '0.9rem', color: '#ffffff' }}>Marketing Analytics</span>
      </div>
      <p style={descriptionStyle}>
        Buzzmetrics provides insights into brand performance through social media monitoring and data analytics.
      </p>
      <div style={tagContainerStyle}>
        <span style={tagStyle}>React.js</span>
        <span style={tagStyle}>Node.js</span>
        <span style={tagStyle}>Data Analysis</span>
      </div>
    </div>
  );
};

export default ProjectCard;
