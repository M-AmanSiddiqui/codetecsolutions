import React from 'react';
import BgTypingCode from "../../assets/Images/Typing Code.mp4";

function TypingCode() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BgTypingCode} type="video/mp4" />
      </video>
      
      {/* You can add any content or overlay here if needed */}
    </div>
  );
}

export default TypingCode;
