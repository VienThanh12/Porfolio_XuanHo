import React from "react";

const Contact = () => {
  return (
    <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Contact</h1>
      <p style={{ fontSize: '1.25rem', textAlign: 'center', marginBottom: '1.5rem' }}>
        I'm currently looking for new opportunities. If you have a project or just want to say hi, feel free to contact me.
      </p>
      <p style={{ fontSize: '1.125rem', textAlign: 'center', marginBottom: '1.5rem' }}>
        You can drop me an email at{" "}
        <a href="mailto:jimtran98@gmail.com" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
          jimtran98@gmail.com
        </a>{" "}
        or find me on social media platforms. I'll get back to you as soon as possible.
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-icons/linkedin.svg" alt="LinkedIn" style={{ height: '2rem', width: '2rem' }} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-icons/github.svg" alt="GitHub" style={{ height: '2rem', width: '2rem' }} />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-icons/telegram.svg" alt="Telegram" style={{ height: '2rem', width: '2rem' }} />
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-icons/dribbble.svg" alt="Dribbble" style={{ height: '2rem', width: '2rem' }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-icons/instagram.svg" alt="Instagram" style={{ height: '2rem', width: '2rem' }} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
