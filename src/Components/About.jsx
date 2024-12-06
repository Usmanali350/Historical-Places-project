import React from 'react';
import './About.css'; 
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="container">
      <div className="about-header">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi, I'm a passionate MERN stack web developer with expertise in crafting dynamic, responsive, and scalable web applications. 
            I specialize in using <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React</strong>, and <strong>Node.js</strong> to deliver end-to-end solutions that meet client requirements.
          </p>
          <p>
            My journey as a developer has been driven by a love for problem-solving and creating seamless user experiences. Whether it's building robust APIs, designing responsive UIs, or optimizing performance, I enjoy every aspect of the development process.
          </p>
          <p>
            Let's connect and build something amazing together!
          </p>
        </div>
        <div className="about-image">
          <img src="/usman.jpg" alt="Your Profile" />
        </div>
        <Link className="float-start" to="/contact">
          <button className="btn btn-primary me-3">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};


