import React from 'react';
import './About.css'; 
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div>
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
      <div className='container-fluid w-100 ms-0 me-0 ps-0 pe-0 mt-3' >

<footer className="bg-dark text-white  mb-0">
  <div className="container text-center">
    <div className="row">
      
      <div className="col-12 ">
        <ul className="list-inline">
          <li className="list-inline-item mx-3">
            <Link to="/Home" className="text-white text-decoration-none">
              Home
            </Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link to="/About" className="text-white text-decoration-none">
              About
            </Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link to="/Contact" className="text-white text-decoration-none">
              Contact
            </Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link
              to="/Topattractions"
              className="text-white text-decoration-none"
            >
              Topa Atractions
            </Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link to="/Hostels" className="text-white text-decoration-none">
              Hostels
            </Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link
              to="/Restaurants"
              className="text-white text-decoration-none"
              >
              Restaurants
            </Link>
          </li>
        </ul>
      </div>

      
      <div className="col-12">
        <p>
          Email:{" "}
          <a href="mailto:usmandev502@example.com" className="text-info">
            usmandev502@example.com
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Historical Places of Pakistan. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
</div>
    
    </div>
  );
};


