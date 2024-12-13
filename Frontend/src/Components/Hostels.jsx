import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { Link } from "react-router-dom";

export const Hostels = () => {
  const [HostelData, setHostelData] = useState([]);

  useEffect(() => {
    const fetchHostelData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/Hostels"); // Replace with your API URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setHostelData(data);
        console.log("Fetched Hostel Data:", data);
      } catch (error) {
        console.error("Error fetching hostel data:", error);
      }
    };

    fetchHostelData();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Staggered animation
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="container-fluid p-0 mt-1">

      <div className="container mt-4">
       

        <div className="row">
          {HostelData.map((item, index) => (
            <motion.div
              className="col-md-4 mb-4"
              key={item.id || index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className="card shadow h-100">
                <div
                  className="card-img-top"
                  style={{
                    backgroundImage: `url(${item.image || "default-image.jpg"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                  }}
                ></div>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>

                  
                  <p className="card-text">
                    {item.description || "No description available."}
                  </p>
                  <Link to={item.ad} className="btn btn-primary"
                  >Learn More</Link>
                    
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container-fluid w-100 ms-0 me-0 ps-0 pe-0 mt-3">
        <footer className="bg-dark text-white mb-0">
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
                    <Link to="/Topattractions" className="text-white text-decoration-none">
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
                  <a href="mailto:usmandev502@example.com" className="text-info">
                    usmandev502@example.com
                  </a>
                </p>
                <p>
                  &copy; {new Date().getFullYear()} Historical Places of Pakistan. All
                  rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
