import React from 'react';

const About = () => {
  return (
    <div
      id="about"
      style={{
        paddingTop: '8rem', 
        margin: '0 auto',
        maxWidth: '1200px', 
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem', 
        }}
        data-aos="zoom-in-up"
      >
        About Me
      </h2>
      <p
        style={{
          color: '#6B7280', 
          fontSize: '1rem', 
          paddingTop: '1rem', 
        }}
        data-aos="zoom-in-up"
      >
        I am a student at GIAC, pursuing a course in Artificial Intelligence, Web 3.0 & Metaverse. I am quite passionate about learning about new and improving technologies.
      </p>
    </div>
  );
};

export default About;
