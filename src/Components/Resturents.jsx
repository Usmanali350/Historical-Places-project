import React from 'react';
import './Resturents.css'; 
import { Link } from 'react-router-dom';

export const Resturents = () => {
  return (
    <div className="container-fluid p-0 mt-1">
      <div className="background-container d-flex justify-content-center align-items-center">
        <h1 className="heading-text">TOP 10 RESTAURANTS IN PAKISTAN</h1>
      </div>
      <div className="container">
      <h3 className='mt-3 h1'>Top 10 Restaurants in Pakistan: Where to Eat in Pakistan </h3>
      <p className="description-text h5">
        Top 10 Restaurants in Pakistan: A Mouth-Watering Listicle
        From the heart of Lahore at Nishat Hotels to other cities’ hidden gems, we’re about to explore Pakistan’s culinary treasures that will leave your taste buds craving more:
      </p><hr /><hr />

      {/* 1 */}
    <h2>1. Bistro at Nishat Hotels, Lahore:</h2>
      <p>
      A Culinary Oasis in the Heart of Lahore: The Bistro at Nishat Hotels invites you to indulge in a sensory symphony of flavors. This charming restaurant beautifully marries the rich heritage of Lahore with modern culinary innovation. Signature dishes like the “Lahori Gusto Burger” and “Kebab-e-Khaas” pay homage to local tastes while infusing a contemporary twist. The ambiance, adorned with traditional art and soft lighting, offers the perfect setting for a romantic dinner or a lively gathering with friends.</p>


      <h2>2. Cube at Nishat Hotels, Lahore:</h2>
      <p>
      Dining in Style: Cube at Nishat Hotels is where style and substance converge. Its avant-garde design sets the stage for a memorable dining experience. The diverse menu, from classic Pakistani dishes to international favorites like “Cube’s Surf and Turf,” ensures something for everyone. Cube is not just a restaurant; it’s a statement of Lahore’s evolving culinary culture. Book your table now!.</p>

      <h2>3. La' Cucina at Nishat Hotels, Lahore:</h2>
      <p>
      An Italian Love Affair: La ‘Cucina is a culinary haven that transports you to the heart of Italy. The passionate chefs at this restaurant craft handmade pastas, wood-fired pizzas, and delectable desserts. The ambiance, adorned with rustic Italian decor, invites you to linger over your meal, savoring every bite. Don’t miss the “Tiramisu” – a slice of Italy in Lahore..</p>

      <h2>4. Green Room at Nishat Hotels, Lahore:</h2>
      <p>
      A Symphony of Flavors: Green Room at Nishat Hotels is a culinary tribute to diverse menu lovers. Their “Lebanese Corner” features various dishes prepared with the freshest sourced ingredients. The restaurant’s eco-friendly design complements its sustainability-focused menu, making it an oasis for those who appreciate a green lifestyle and gourmet dining.

Now, let’s venture beyond Lahore to discover the culinary delights waiting in other cities:</p>

      <h2>5. Monal Restaurant, Islamabad:</h2>
      <p>
      Dining in the Clouds: Monal Restaurant in Islamabad is not just a dining experience; it’s an elevation of the senses. Perched atop the Margalla Hills, it offers panoramic views of Islamabad. The menu showcases Pakistani and international cuisines, with “Margalla’s Charcoal Grill” being a favorite. Reserve a table for sunset dining to witness Islamabad’s beauty at its finest.</p>

      <h2>6. Kolachi Restaurant, Karachi:</h2>
      <p>
      Seafood Extravaganza: Karachi’s Kolachi Restaurant is synonymous with fresh seafood. Nestled by the Arabian Sea, it’s famous for its catch-of-the-day dishes. Savor the “Kolachi Grill,” a succulent mix of prawns, fish, and lobster, while enjoying sea breezes and the mesmerizing sound of the waves.

</p>

      <h2>7. Ambrosia, Faisalabad:</h2>
      <p>
      Fine Dining in Faisalabad: Ambrosia brings a touch of sophistication to Faisalabad’s culinary scene. The menu features a delightful fusion of local and international flavors. The “Lamb Chops with Pomegranate Glaze” is a standout dish, and the restaurant’s elegant ambiance makes it an ideal venue for special occasions.</p>

      <h2>8. The Forest, Murree:</h2>
      <p>
      Nature’s Dining Retreat: The Forest in Murree offers a unique dining experience amidst lush greenery. The restaurant serves delectable Pakistani and continental dishes. The “Murree Trout” is a must-try specialty, and the serene ambiance, surrounded by verdant hills, makes every meal a moment to cherish.</p>

      <h2>9. Cafe de Hunza, Hunza Valley:</h2>
      <p>
      Culinary Magic in the Mountains: Cafe de Hunza, nestled in the stunning Hunza Valley, is a hidden gem awaiting your discovery. This charming cafe combines breathtaking views of the Karakoram Range with a menu that showcases local flavors. Savor traditional Hunza dishes like “Chapshuro” and “Apricot Walnut Cake” while surrounded by the serenity of the valley. Dining here is an enchanting experience that connects you with the heart of Hunza’s culinary heritage.</p>

      <h2>10. Serena Khaplu Palace, Gilgit-Baltistan:</h2>
      <p>
      Royal Dining in the North of Pakistan: Serena Khaplu Palace in Gilgit-Baltistan is an oasis of royal dining amid the awe-inspiring mountains. The menu features traditional Pakistani dishes served with regal flair. The view of the Karakoram Range adds an unparalleled sense of grandeur to your dining experience.</p>
     
     <h1>Conclusion:</h1>
     <p>These are just a few of the many great restaurants in Pakistan. Pakistan has something to offer everyone with its diverse cuisine and rich culture. From the modern elegance of Nishat Hotels’ Bistro, Cube, La ‘Cucina, and Green Room in Lahore to the various offerings of restaurants in other cities, there’s a culinary adventure waiting for every palate. So, whether you’re looking for a fine dining experience or a casual meal, check out some of the country’s top restaurants. Plan your culinary adventure with Nishat Hotels today and experience the best of Lahore’s dining scene.</p>

      </div>
      <div className='container-fluid w-100 ms-0 me-0 ps-0 pe-0 mt-3' >

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
