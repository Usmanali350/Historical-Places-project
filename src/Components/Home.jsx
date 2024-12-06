import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
    <div className="container-fluid  mt-1">
      {/* Carousel Container */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators */}
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
              src="/kumrat-urdu-is-a-valley.jpg"
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
              src="public/bhurban.webp"
              height={550}
              className="d-block w-100"
              alt="Karakoram Highway"
            />
            <div className="carousel-caption">
            <h1 className='text-info shadow fw-bold'>Explore Pakistan's Timeless Heritage</h1>    </div>
          </div>
          <div className="carousel-item">
            <img
              src="public/An_autumn_morning_Karimabad_Hunza.webp"
              height={550}
              className="d-block w-100"
              alt="Mukshpuri Top"
            />
            <div className="carousel-caption">
            <h3>Explore Pakistan's Timeless Heritage</h3>            </div>
          </div>
        </div>

        {/* Controls */}
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
      <div className="container mt-5">
  {/* First Row */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-4 mb-4">
      <div className="card animated-card">
        <img src="/m-pakistan.jpg" className="card-img-top" alt="Card 1" />
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">This is a card with some description.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 mb-4">
      <div className="card animated-card">
        <img src="public/kumrat-urdu-is-a-valley.jpg" className="card-img-top" alt="Card 2" />
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">This is another card with more information.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 mb-4">
      <div className="card animated-card">
        <img src="public/pexels-.jpeg" className="card-img-top" alt="Card 3" />
        <div className="card-body">
          <h5 className="card-title">Card 3</h5>
          <p className="card-text">This is the third card in the row.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="row justify-content-center">
    <div className="col-12 col-md-4 mb-4">
      <div className="card animated-card">
        <img src="public/Chitral-1024x640.jpg" className="card-img-top" alt="Card 1" />
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">This is a card with some description.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 mb-4">
      <div className="card animated-card">
        <img src="public/bhurban.webp" className="card-img-top" alt="Card 2" />
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">This is another card with more information.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 mb-4">
      <div className="card animated-card">
        <img src="public/back1.webp" className="card-img-top" alt="Card 3" />
        <div className="card-body">
          <h5 className="card-title">Card 3</h5>
          <p className="card-text">This is the third card in the row.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Second Row */}
  <div className="row justify-content-center">
    <div className="col-12 col-md-4 mb-4">
      <div className="card animated-card">
        <img src="/Rani_Kort.jpg" className="card-img-top" alt="Card 4" />
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">Description for Rani Kort.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 mb-4">
      <div className="card animated-card">
        <img src="/shah-jahan.jpg" className="card-img-top" alt="Card 5" />
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">Description for Shah Jahan.</p>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 mb-4">
      <div className="card animated-card">
        <img src="/Bukhari-Park-Karachi-420x220.jpg.webp" className="card-img-top" alt="Card 6" />
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">Description for Bukhari Park.</p>
        </div>
      </div>
    </div>
  </div>
</div>



<div className='mb-0' >


    <footer className="bg-dark text-white py-4 mb-0">
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
  </div>
  )
};
        