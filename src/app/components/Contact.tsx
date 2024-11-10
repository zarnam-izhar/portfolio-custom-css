import React from 'react';
import { SiGmail } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
import './style/contact.css'; 

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h2 className="contact-heading" data-aos="zoom-in-up">
            Get in touch
          </h2>
          <p className="contact-description" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form
          </p>
          <div className="contact-item" data-aos="zoom-in-up">
            <SiGmail size={30} /> zarnamizhar@gmail.com
          </div>
          <div className="contact-item" data-aos="zoom-in-up">
            <BsFillTelephoneFill size={30} /> 03108676555
          </div>
        </div>
        <div className="contact-form">
          <div className="form-group" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-input" id="name" />
          </div>
          <div className="form-group" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-input" id="email" />
          </div>
          <div className="form-group" data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea className="form-textarea" id="msg" rows={8}></textarea>
          </div>
          <button className="send-btn" data-aos="zoom-in-up">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
