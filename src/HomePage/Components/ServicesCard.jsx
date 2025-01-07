import React from 'react';
import WebDevelopment from "../../assets/Images/WebDevelopment.jpg";
import DesktopAppDevelopment from "../../assets/Images/Desktop Development.jpg";
import AnimationUIandUX from "../../assets/Images/animation-ux.jpg";

function ServicesCard() {
  return (
    <div className="bg-black text-white pt-32">
      <h1 className="text-5xl text-center font-serif font-bold pt-4">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center mt-10 gap-8">
        <div className="mt-10 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
          <img
            src={WebDevelopment}
            alt="WebDevelopment"
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4">Web Development</h2>
          <p className="text-gray-400 mt-2">
            Elevate your online presence with our custom web development. We craft tailored solutions for performance and user engagement. Contact us today.
          </p>
        </div>

        <div className="mt-10 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
          <img
            src={DesktopAppDevelopment}
            alt="DesktopAppDevelopment"
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4">Desktop App Development</h2>
          <p className="text-gray-400 mt-2">
            Boost productivity with tailored desktop apps. We deliver performance, security, and user-friendly design. Contact us today.
          </p>
        </div>

        <div className="mt-10 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
          <img
            src={AnimationUIandUX}
            alt="AnimationUIandUX"
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-2xl font-bold mt-4">UI/UX Designing</h2>
          <p className="text-gray-400 mt-2">
            We conceptualize and design interfaces that not only enhance user experiences but also leave a lasting impact on your target audience. Let's create a digital experience that truly stands out.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <button className="inline-flex items-center bg-[#91BE7F] py-3 px-5 font-bold border-black hover:bg-black hover:text-[#91BE7F] border-2 hover:border-[#91BE7F] text-base mt-4 md:mt-0 text-black">
          View All
        </button>
      </div>
    </div>
  );
}

export default ServicesCard;
