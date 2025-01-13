import React from 'react';
import Ecommerce from "../../assets/Images/Ecommerce.mp4";

function BgEcommerce() {
  return (
    <div className="bg-black w-full py-16 text-white">
      <div className="relative w-full h-[60vh] sm:h-[80vh] lg:h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Ecommerce} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default BgEcommerce;
