import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Resturents.css";
import { Link } from "react-router-dom";

export const Resturents = () => {
  const [RestorentsData, setRestorentsData] = useState([]);

  useEffect(() => {
    const fetchRestorentsData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/Restorents"); // Replace with your API URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRestorentsData(data);
        console.log("Fetched restorents Data:", data); // Console log the fetched data
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestorentsData();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container-fluid p-0 mt-1">
      <div className="background-container d-flex justify-content-center align-items-center">
      </div>

      <div className="container">
        {/* <h3 className="mt-3 h1">Top 10 Restaurants in Pakistan</h3>
        <p className="description-text h5">
          Discover the finest dining experiences across Pakistan, from gourmet
          hotspots to hidden gems.
        </p> */}
        <hr />

        <div className="row">
          {RestorentsData.map((restaurant, index) => (
            <motion.div
              className="col-md-4 mb-4"
              key={restaurant.id || index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="card shadow h-100">
                <div
                  className="card-img-top"
                  style={{
                    backgroundImage: `url(${restaurant.image || "default-image.jpg"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                  }}
                ></div>
                <div className="card-body">
                  <h2 className="card-title text-primary">{restaurant.name}</h2>
                  <h5 className="card-title text-info ">Location:{restaurant.location}</h5>
                  
                  <p className="card-text">
                  <h5 className="card-title text-warning mt-0"><p style={{color:"coral"}}>Salient Features:</p> {restaurant.ad}</h5>
                    {restaurant.description || "No description available."}
                  </p>
                  <Link to={restaurant.googleMapLink}><button>Google Map Location</button></Link>
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
                    <Link
                      to="/Topattractions"
                      className="text-white text-decoration-none"
                    >
                      Top Attractions
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
