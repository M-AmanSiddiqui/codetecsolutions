import React from 'react';
import bgappHero from '../../assets/Images/BgAppDevelopment.mp4'; 

function BgAppHero() {
  return (
    <div className="relative bg-black text-white">
      {/* Heading */}
      <div className="inset-0 z-10 flex justify-center">
        <h1 className="text-4xl md:text-3xl lg:text-5xl items-center font-bold pt-10 font-serif underline">
          MOBILE APP DEVELOPMENT
        </h1>
      </div>

      {/* Background Video */}
      <div className="w-full h-screen overflow-hidden">
        <video
          className="mt-10 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgappHero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default BgAppHero;
