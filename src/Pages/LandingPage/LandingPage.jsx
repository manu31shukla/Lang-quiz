import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const clickSound = new Audio(process.env.PUBLIC_URL + '/click.mp3');

    const playClickSound = () => {
      clickSound.currentTime = 0;
      clickSound.play();
    };

  return (
    <div className="landing-container">
      <div className="animation-container">
        <div className="video-overlay">
          <video width="100%" height="100%" autoPlay loop muted>
            <source src={process.env.PUBLIC_URL + '/video.mp4'} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="content-container">
        <h1>Welcome to Linguify</h1>
        <p>Embark on an exhilarating journey and enhance your language skills through an immersive gaming experience!</p>
        <div className="button-container">
          <Link to="/signup" className="get-started-button" onClick={playClickSound}>
            Get Started
          </Link>
          <Link to="/login" className="already-have-account-link" onClick={playClickSound}>
            Already have an account? Log in here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
