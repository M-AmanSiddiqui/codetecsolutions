import React from 'react';
import WebDevelopment from "../../assets/Images/WebDevelopment.jpg";
import DesktopAppDevelopment from "../../assets/Images/Desktop Development.jpg";
import AnimationUIandUX from "../../assets/Images/animation-ux.jpg";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import motion for animations

function ServicesCard() {
  return (
    <div className="bg-black text-white pt-32 overflow-x-hidden overflow-y-hidden">
      <h1 className="text-5xl text-center font-serif font-bold pt-4">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center mt-10 gap-8">
        {/* Web Development Card */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
          className="mt-10 p-6 rounded-lg shadow-lg max-w-sm mx-auto"
        >
               <motion.div 
          
                whileHover={{ scale: 1.1 }}  
               style={{ originX: 0.5, originY: 0.5 }}
               > 
          <img
            src={WebDevelopment}
            alt="WebDevelopment"
            className="w-full h-48 object-cover rounded-md"
          /></motion.div>
          <h2 className="text-2xl font-bold mt-4">Web Development</h2>
          <p className="text-gray-400 mt-2">
            Elevate your online presence with our custom web development. We craft tailored solutions for performance and user engagement. Contact us today.
          </p>
        </motion.div>

        {/* Desktop App Development Card */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}  // Start from the bottom
          whileInView={{ y: 0, opacity: 1 }}  // Animate to the center
                // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
          className="mt-10 p-6 rounded-lg shadow-lg max-w-sm mx-auto"
        >
           <motion.div 
          
          whileHover={{ scale: 1.1 }}  
         style={{ originX: 0.5, originY: 0.5 }}
         > 
          <img
            src={DesktopAppDevelopment}
            alt="DesktopAppDevelopment"
            className="w-full h-48 object-cover rounded-md"
          /> </motion.div>
          <h2 className="text-2xl font-bold mt-4">Desktop App Development</h2>
          <p className="text-gray-400 mt-2">
            Boost productivity with tailored desktop apps. We deliver performance, security, and user-friendly design. Contact us today.
          </p>
        </motion.div>

        {/* UI/UX Designing Card */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}  // Start from the right
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
          className="mt-10 p-6 rounded-lg shadow-lg max-w-sm mx-auto"
        >
              <motion.div 
          
          whileHover={{ scale: 1.1 }}  
         style={{ originX: 0.5, originY: 0.5 }}
         > <img
            src={AnimationUIandUX}
            alt="AnimationUIandUX"
            className="w-full h-48 object-cover rounded-md"
          />      </motion.div> 
          <h2 className="text-2xl font-bold mt-4">UI/UX Designing</h2>
          <p className="text-gray-400 mt-2">
            We conceptualize and design interfaces that not only enhance user experiences but also leave a lasting impact on your target audience. Let's create a digital experience that truly stands out.
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <Link to="/Services" ><button className="inline-flex items-center bg-[#91BE7F] py-3 px-5 font-bold border-black hover:bg-black hover:text-[#91BE7F] border-2 hover:border-[#91BE7F] text-base mt-4 md:mt-0 text-black">
          View All
        </button></Link>
      </div>
    </div>
  );
}

export default ServicesCard;
