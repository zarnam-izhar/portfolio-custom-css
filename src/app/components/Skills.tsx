"use client";

import React from 'react';
import './style/skills.css';

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        <div className="skills-text" data-aos="zoom-in-up">
          <h2 className="skills-title">Technologies I work with</h2>
          <p className="skills-description">
            I'm working with HTML, CSS, Tailwind, and Next.js for my projects
          </p>
        </div>

        <div className="skills-list">
          <div className="skills-column">
            <h2 data-aos="zoom-in-up">Typescript</h2>
            <h2 data-aos="zoom-in-up">React.js</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>
          </div>

          <div className="skills-column">
            <h2 data-aos="zoom-in-up">HTML</h2>
            <h2 data-aos="zoom-in-up">CSS</h2>
            <h2 data-aos="zoom-in-up">Node.js</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
