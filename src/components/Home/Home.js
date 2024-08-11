import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import bitmojiImage from '../../images/bitmoji.png'; 

const Home = () => {
  return (
    <div className="home container">
      <div className="background-element"></div>
      <div className="intro">
        <img src={bitmojiImage} alt="My Bitmoji" className="bitmoji" />
        <h1>Hi, I'm Sharif Ali, a Software Developer.</h1>
        <p>Welcome to my Portfolio.</p>
        <Link to="/projects">
          <button className="cta-button">Check Out My Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
