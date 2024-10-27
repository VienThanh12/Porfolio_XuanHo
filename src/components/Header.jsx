import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [hovered, setHovered] = useState(null); // Track which link is hovered

  return (
    <nav
      id="navbar"
      style={{
        width: '100%',
        backgroundColor: '#0F172A', // Dark background
        position: 'relative',
        zIndex: 20,
        paddingTop: '1.5rem',
        transition: 'transform 0.2s ease',
      }}
    >
      {/* Desktop version */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: '6rem',
          paddingRight: '6rem',
          
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            fontWeight: 'bold',
            fontSize: '1.125rem',
            color: 'white',
          }}
        >
          <p
            style={{
              position: 'relative',
              transition: 'all 0.2s ease',
              paddingBottom: '0.5rem',
              borderBottom: hovered === 'home' ? '2px solid white' : 'none',
            }}
            onMouseEnter={() => setHovered('home')}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to="/" style={{ color: '#CBD5E1', textDecoration: 'none' , fontSize: '30px'}}>home</Link>
          </p>

          <p
            style={{
              position: 'relative',
              transition: 'all 0.2s ease',
              paddingBottom: '0.5rem',
              borderBottom: hovered === 'projects' ? '2px solid white' : 'none',
            }}
            onMouseEnter={() => setHovered('projects')}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to="/projects" style={{ color: '#CBD5E1', textDecoration: 'none' , fontSize: '30px'}}>projects</Link>
          </p>

         
          <p
            style={{
              position: 'relative',
              transition: 'all 0.2s ease',
              paddingBottom: '0.5rem',
              borderBottom: hovered === 'contact' ? '2px solid white' : 'none',
            }}
            onMouseEnter={() => setHovered('contact')}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to="/contact" style={{ color: '#CBD5E1', textDecoration: 'none' , fontSize: '30px'}}>contact</Link>
          </p>
        </div>
      </div>

      {/* Mobile version */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {/* Placeholder for mobile menu */}
      </div>
    </nav>
  );
};

export default Header;
