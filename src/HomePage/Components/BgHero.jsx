import React from 'react';
import bgHero from '../../assets/Images/bgHero.mp4'; // Import the video file

function BgHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden mt-40">
      <video className="absolute top-0 left-0 right-0 min-w-full h-full object-cover" autoPlay loop muted  playsInline>
        <source src={bgHero} type="video/mp4" />
       </video>
      
    
    </div>
  );
}

export default BgHero;
