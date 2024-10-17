import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav
      id="navbar"
      style={{
        width: '100%',
        backgroundColor: '#fff',
        position: 'relative',
        zIndex: 20,
        paddingTop: '1.5rem',
        transition: 'transform 0.2s ease',
        backgroundColor:'#0F172A'
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
        <ul
          style={{
            display: 'flex',
            gap: '2rem',
            fontWeight: 'bold',
            fontSize: '1.125rem',
          }}
        >
          <li style={{ transition: 'all 0.2s ease' }}>
            <Link to="/">home</Link>
          </li>
          <li style={{ transition: 'all 0.2s ease' }}>
            <Link to="/projects">projects</Link>
          </li>
          <li style={{ transition: 'all 0.2s ease' }}>
            <Link to="/photos">photos</Link>
          </li>
          <li style={{ transition: 'all 0.2s ease' }}>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
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
