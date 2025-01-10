import React from 'react';
import bgappHero from '../../assets/Images/BgAppDevelopment.mp4'; 

function BgAppHero() {
  return (
    <div>

          <div className="bg-black w-full py-44 text-white">
      
      <h1 className="text-4xl md:text-4xl text-center font-bold font-serif mt-12 underline">
        MOBILE APP DEVELOPMENT
      </h1>
</div> 
    <div className="relative w-full h-screen -mt-32 overflow-hidden z-0 ">
   
      <video
        className="absolute top-0 left-0 w-full h-screenx  object-cover z-0" 
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgappHero} type="video/mp4" />
      </video>
    </div></div>
  );
}

export default BgAppHero;