import React from "react";
import LinkedInIcon from "./icon/LinkedinIcon";
import GithubIcon from "./icon/GithubIcon";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#1e293b', // A dark blue/gray background
        color: '#94a3b8', // Light gray text color
        padding: '2rem 0', // Padding for the top and bottom
        textAlign: 'center',
      }}
    >
   <div style={{ display: 'flex', gap: '1rem', justifyContent:'center', marginBottom:'10px'}}>
            <LinkedInIcon/>
            <GithubIcon/>
            
          </div>

      {/* Copyright Text */}
      <div style={{ fontSize: '0.875rem' }}>
        © 2024 Xuan Ho. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
