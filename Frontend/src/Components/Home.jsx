import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Home.css'; // Add this to import the hover effect and other styles

export const Home = () => {
  const [homeData, setHomeData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9); 

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/Home"); // Replace with your API URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setHomeData(data);
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };

    fetchHomeData();
  }, []);

  // Handler to show more cards
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  // Handler to show less cards
  const handleShowLess = () => {
    setVisibleCount(9);
  };

  return (
    <div>
      <div className="container-fluid mt-1">
        {/* Carousel Section */}
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/saif-ul-malook-1.webp"
                height={550}
                className="d-block w-100"
                alt="Kumrat Valley"
              />
              <div className="carousel-caption">
                <h1>Explore Pakistan's Timeless Heritage</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/bhurban.webp"
                height={550}
                className="d-block w-100"
                alt="Karakoram Highway"
              />
              <div className="carousel-caption">
                <h1 className="text-info shadow fw-bold">
                  Explore Pakistan's Timeless Heritage
                </h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/An_autumn_morning_Karimabad_Hunza.webp"
                height={550}
                className="d-block w-100"
                alt="Mukshpuri Top"
              />
              <div className="carousel-caption">
                <h3>Explore Pakistan's Timeless Heritage</h3>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Cards Section */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            {homeData.slice(0, visibleCount).map((item, index) => (
              <motion.div
                key={index}
                className="col-lg-4 col-md-6 col-sm-12 mb-4"
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: index * 0.4 }}
              >
                <div className="card animated-card">
                  <img
                    src={item.imageUrl} 
                    className="card-img-top"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h3 className="card-title  h2">{item.name}</h3><br />
                    <p className="card-text  h-5">{item.description}</p>
                    <button className="card-text  h-5">{item.location}</button>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {visibleCount < homeData.length ? (
            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={handleShowMore}>
                Show More
              </button>
            </div>
          ) : (
            <div className="text-center mt-4">
              <button className="btn btn-secondary" onClick={handleShowLess}>
                Show Less
              </button>
            </div>
          )}
        </div>

        {/* Footer Section */}
        <footer className="bg-dark text-white py-4 mt-5">
          <div className="container text-center">
            <div className="row">
              <div className="col-12">
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
                    <Link to="/topattractions" className="text-white text-decoration-none">
                      Top Attractions
                    </Link>
                  </li>
                  <li className="list-inline-item mx-3">
                    <Link to="/hostels" className="text-white text-decoration-none">
                      Hostels
                    </Link>
                  </li>
                  <li className="list-inline-item mx-3">
                    <Link to="/restaurants" className="text-white text-decoration-none">
                      Restaurants
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-12">
                <p>
                  Email:{" "}
                  <a href="mailto:usmandev502@gmail.com" className="text-info">
                    usmandev502@gmail.com
                  </a>
                </p>
                <p>Contact Numbers: 03165432668, 03416654988</p>
                <p>&copy; {new Date().getFullYear()} Historical Places of Pakistan. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
