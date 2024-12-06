import React from 'react'
import { Link } from 'react-router-dom'

export const Hostels = () => {
  return (
    
    <div className="container-fluid mt-4 ">
      <div className="row text-center">
        <div className="col-md-3">
          <div className="image-wrapper">
            <img 
              src="public/3 Best Hostels in Kuala Lumpur - A Backpackers and Hipster Haven alike.jpeg" 
              alt="image 1" 
              className="img-fluid equal-height rounded fade-in" 
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-wrapper">
            <img 
              src="public/5 Best Hostels in Bangkok (Updated 2024) - Road Affair.jpeg" 
              alt="image 2" 
              className="img-fluid rounded equal-height fade-in" 
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-wrapper">
            <img 
              src="public/5 Star Hostels, Hostel Guide and Travel Collective - Hostelgeeks.jpeg" 
              alt="image 3" 
              className="img-fluid rounded equal-height fade-in" 
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-wrapper">
            <img 
              src="public/7 Best Hostels in Barcelona for Young Adults.jpeg" 
              alt="image 4" 
              className="img-fluid rounded equal-height fade-in" 
            />
          </div>
        </div>
      </div><hr /><hr />

      <div className="row text-center mt-5">
        <div className="col-md-3">
          <div className="image-wrapper">
            <img 
              src="public/Welcoming Hostel in the Heart of Hong Kong _ L'Essenziale.jpeg" 
              alt="image 1" 
              className="img-fluid equal-height rounded fade-in" 
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-wrapper">
            <img 
              src="public/Bed and breakfast in Ratchthevi · ★4_55 · 1 bedroom · 16 beds · 2 shared baths.jpeg" 
              alt="image 2" 
              className="img-fluid rounded equal-height fade-in" 
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-wrapper">
            <img 
              src="public/Best hostels in Bangkok — Top 10 coolest & cheap hostels in Bangkok you should stay - Living + Nomads – Travel tips, Guides, News & Information!.jpeg" 
              alt="image 3" 
              className="img-fluid rounded equal-height fade-in" 
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="image-wrapper">
            <img 
              src="public/Ministry of Design targets millennial travellers with COO concept hostel.jpeg" 
              alt="image 4" 
              className="img-fluid rounded equal-height fade-in" 
            />
          </div>
        </div>
      </div>


      {/* footer */}
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
  )
}
