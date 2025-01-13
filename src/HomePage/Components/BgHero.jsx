import React from 'react';
import bgHero from '../../assets/Images/bgHero.mp4'; // Import the video file

function BgHero() {
  return (
    <div className="relative w-full h-screen  overflow-hidden z-0 ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0" // Video at the back
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgHero} type="video/mp4" />
      </video>
    </div>
  );
}

export default BgHero;
