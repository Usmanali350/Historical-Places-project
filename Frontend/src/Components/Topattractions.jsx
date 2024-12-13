import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Topattractions = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMoreInfoClick = () => {
    setShowMoreInfo(!showMoreInfo); 
  };

  return (
    <div className="container-fluid  mt-1">
    
          <div className='container'>
    <div className="row align-items-center">
        <div className="col-lg-6 col-sm-12 sm-w-100">
          <img className="img-fluid w-100" src="public/caption.jpg" alt="Attraction" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <p className='h4' style={{textAlign:'justify'}}>Your text goes here. You can describe the image or provide some additional information. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias autem laborum esse placeat ad! Totam quaerat nulla molestias quos molestiae veritatis corrupti. Odio iste libero, optio molestiae hic facere odit Totam quaerat nulla molestias quos molestiae veritatis corrupti. Odio iste libero, optio molestiae hic facere odit molestiae hic facere odit molestiae!</p>
          <div className='justify-content-between'>
            <Link className='float-start' to="/contact">
              <button className="btn btn-primary me-3">Contact</button>
            </Link>
            <button className="btn btn-secondary float-end" onClick={handleMoreInfoClick}>
              More Info
            </button>
          </div>
          {showMoreInfo && (
            <div className='h4 mt-3' style={{textAlign:'justify'}}>
              <p>Here is more information about the image. You can provide detailed descriptions or any other content related to the image. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum distinctio deleniti fugiat. Praesentium sit saepe doloremque quae hic odit, iusto corrupti, consequuntur nesciunt corporis similique labore inventore in? Quam, tempora!</p>
            </div>
          )}
        </div>
      </div>
      <hr /><hr />
      <div className="row align-items-center mt-5">
        <div className="col-lg-6 col-sm-12 sm-w-100">
          <img className="img-fluid w-100" src="public/indian-.jpg" alt="Attraction" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <p className='h4' style={{textAlign:'justify'}}>Your text goes here. You can describe the image or provide some additional information. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias autem laborum esse placeat ad! Totam quaerat nulla molestias quos molestiae veritatis corrupti. Odio iste libero, optio molestiae hic facere odit Totam quaerat nulla molestias quos molestiae veritatis corrupti. Odio iste libero, optio molestiae hic facere odit molestiae hic facere odit molestiae!</p>
          <div className='justify-content-between'>
            <Link className='float-start' to="/contact">
              <button className="btn btn-primary me-3">Contact</button>
            </Link>
            <button className="btn btn-secondary float-end" onClick={handleMoreInfoClick}>
              More Info
            </button>
          </div>
          {showMoreInfo && (
            <div className='h4 mt-3' style={{textAlign:'justify'}}>
              <p>Here is more information about the image. You can provide detailed descriptions or any other content related to the image. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum distinctio deleniti fugiat. Praesentium sit saepe doloremque quae hic odit, iusto corrupti, consequuntur nesciunt corporis similique labore inventore in? Quam, tempora!</p>
            </div>
          )}
        </div>
      </div>
      <hr /><hr />
     
      
      <div className="row align-items-center">
        <div className="col-lg-6 col-sm-12 sm-w-100">
          <img className="img-fluid w-100" src="public/back1.webp" alt="Attraction" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <p className='h4' style={{textAlign:'justify'}}>Your text goes here. You can describe the image or provide some additional information. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias autem laborum esse placeat ad! Totam quaerat nulla molestias quos molestiae veritatis corrupti. Odio iste libero, optio molestiae hic facere odit Totam quaerat nulla molestias quos molestiae veritatis corrupti. Odio iste libero, optio molestiae hic facere odit molestiae hic facere odit molestiae!</p>
          <div className='justify-content-between'>
            <Link className='float-start' to="/contact">
              <button className="btn btn-primary me-3">Contact</button>
            </Link>
            <button className="btn btn-secondary float-end" onClick={handleMoreInfoClick}>
              More Info
            </button>
          </div>
          {showMoreInfo && (
            <div className='h4 mt-3' style={{textAlign:'justify'}}>
              <p>Here is more information about the image. You can provide detailed descriptions or any other content related to the image. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum distinctio deleniti fugiat. Praesentium sit saepe doloremque quae hic odit, iusto corrupti, consequuntur nesciunt corporis similique labore inventore in? Quam, tempora!</p>
            </div>
          )}
        </div>
      </div>
      <hr /><hr />
      <div className="row align-items-center mt-5">
        <div className="col-lg-6 col-sm-12 sm-w-100">
          <img className="img-fluid w-100" src="public/malam-jabba.webp" alt="Attraction" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <p className='h4' style={{textAlign:'justify'}}>Your text goes here. You can describe the image or provide some additional information. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias autem laborum esse placeat ad! Totam quaerat nulla molestias quos molestiae veritatis corrupti. Odio iste libero, optio molestiae hic facere odit Totam quaerat nulla molestias quos molestiae veritatis corrupti. Odio iste libero, optio molestiae hic facere odit molestiae hic facere odit molestiae!</p>
          <div className='justify-content-between'>
            <Link className='float-start' to="/contact">
              <button className="btn btn-primary me-3">Contact</button>
            </Link>
            <button className="btn btn-secondary float-end" onClick={handleMoreInfoClick}>
              More Info
            </button>
          </div>
          {showMoreInfo && (
            <div className='h4 mt-3' style={{textAlign:'justify'}}>
              <p>Here is more information about the image. You can provide detailed descriptions or any other content related to the image. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum distinctio deleniti fugiat. Praesentium sit saepe doloremque quae hic odit, iusto corrupti, consequuntur nesciunt corporis similique labore inventore in? Quam, tempora!</p>
            </div>
          )}
        </div>
      </div>
      <hr /><hr />
        </div>
      
<div className='container-fluid w-100 ms-0 me-0 ps-0 pe-0' >

<footer className="bg-dark text-white  mb-0">
  <div className="container text-center">
    <div className="row">
      
      <div className="col-12 ">
        <ul className="list-inline">
          <li className="list-inline-item mx-3">
            <Link to="/home" className="text-white text-decoration-none">
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
