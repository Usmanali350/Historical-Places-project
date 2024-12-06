import React from 'react';
import './Contact.css'; 
import { Link } from 'react-router-dom';
export const Contact = () => {
  return (
    <div className="contact-container mt-4">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Feel free to reach out through any of the following channels:</p>
      </div>
      <div className="contact-details">
        <p><strong>Phone 1:</strong> <a href="tel:03165432668">0316-5432668</a></p>
        <p><strong>Phone 2:</strong> <a href="tel:03416654988">0341-6654988</a></p>
        <p><strong>Email:</strong> <a href="mailto:usmandev502@gmail.com">usmandev502@gmail.com</a></p>
      </div>
      <div className="contact-form">
        <h2>Send Me a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              className="form-control"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      <div className='container-fluid w-100 ms-0 me-0 ps-0 pe-0' >

<footer className="bg-dark text-white  mb-0">
  <div className="container text-center">
    <div className="row">
      {/* Navigation Links */}
      <div className="col-12 ">
        <ul className="list-inline">
          <li className="list-inline-item mx-3">
            <Link to="/home" className="text-white text-decoration-none">
              Home
            </Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link to="/about" className="text-white text-decoration-none">
              About
            </Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link to="/contact" className="text-white text-decoration-none">
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
            <Link to="/hostels" className="text-white text-decoration-none">
              Hostels
            </Link>
          </li>
          <li className="list-inline-item mx-3">
            <Link
              to="/restaurants"
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

export default Contact;
