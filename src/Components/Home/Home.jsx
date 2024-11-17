import React from 'react';
import './Home.css';
import image from '../../assets/home.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <img src={image} alt="home" className="home-image"  width="100%"/>
      <div className="home-text">
        Following in the footsteps of his legendary mentor, Pierre Fournier, cellist John Walz is known for his versatility and elegant musicianship. His performances as a soloist and chamber music artist are always remarkable events!
      </div>
    </div>
  );
};

export default Home;
