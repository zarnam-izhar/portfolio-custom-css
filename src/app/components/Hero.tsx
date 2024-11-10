"use client";

import React from 'react';
import Navbar from './Navbar';
import './style/hero.css';

const Hero = () => {
  return (
    <div id="hero" className="hero-section">
      <Navbar />
      <div className="hero-container">
        <div className="hero-spacer"></div>
        <div className="hero-text">
          <div>
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Zarnam</p>
            <p data-aos="zoom-in-up">Izhar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

