import React from "react";
import WebDesigning from "../../assets/Images/webdesign.jpg";
import SoftwareDevelopment from "../../assets/Images/Software Development.jfif";
import UiandUX from "../../assets/Images/UX-vs-UI-Design.jpeg";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client";

  
function HeroCard() {
  return (
    <div className="bg-black text-white">
      <h1 className="text-5xl text-center font-serif pt-8 font-bold">
        We can help you with
      </h1>
      <div className="flex flex-wrap justify-center mt-10 gap-8">
        {/* Web Designing Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 p-6 rounded-lg shadow-lg max-w-sm mx-auto"
        >
          <Link to="/MobileAppDevelopment" className="hover:text-[#91BE7F]">
            <img
              src={WebDesigning}
              alt="Web Designing"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">Web Designing</h2>
          </Link>
          <p className="text-gray-400 mt-2">
            Web designing involves creating customized, responsive, and visually
            appealing websites to enhance user experience and support business
            goals.
          </p>
        </motion.div>

        {/* Software Development Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 p-6 rounded-lg shadow-lg max-w-sm mx-auto"
        >
          <Link to="/SoftwareDevelopment" className="hover:text-[#91BE7F]">
            <img
              src={SoftwareDevelopment}
              alt="Software Development"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">Software Development</h2>
          </Link>
          <p className="text-gray-400 mt-2">
            Software development provides custom solutions by designing,
            building, testing, and maintaining software to meet specific
            business needs.
          </p>
        </motion.div>

        {/* UI/UX Designing Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 p-6 rounded-lg shadow-lg max-w-sm mx-auto"
        >
          <Link to="/GraphicDesigning" className="hover:text-[#91BE7F]">
            <img
              src={UiandUX}
              alt="UI/UX Designing"
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4">UI/UX Designing</h2>
          </Link>
          <p className="text-gray-400 mt-2">
            UI/UX designing focuses on creating intuitive interfaces and
            seamless user experiences, enhancing usability and customer
            satisfaction.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroCard;
