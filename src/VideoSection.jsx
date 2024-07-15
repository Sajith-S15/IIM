import React from 'react';
import './assets/styles/videosection.css'; // Import the CSS file for this component

const VideoSection = () => {
  return (
    <div className="video-container">
      <video className="video" autoPlay muted loop>
        <source src="https://res.cloudinary.com/denmnkoks/video/upload/v1720769868/iitvideo_h2xrgh.mp4" type="video/mp4" /> {/* Adjust the path to your video */}
        Your browser does not support the video tag.
      </video>
      <div className="overlay-nav">
        <nav>
          <a href="#media-relations">Media Relations</a>
          <a href="#executive-education">Executive Education & Consulting</a>
          <a href="#campus">Campus</a>
          <a href="#international-relations">International Relations</a>
        </nav>
      </div>
    </div>
  );
};

export default VideoSection;

