import React from 'react'
import App1 from '../../assets/Images/AppDevelopment1.mp4'
import App2 from '../../assets/Images/AppDevelopment2.mp4'
import App3 from '../../assets/Images/AppDevelopment3.mp4'
import { motion } from "framer-motion"; // Ensure motion is imported from framer-motion


function AppHero() {

 
  return (
    <div className="bg-black w-full py-16 text-white">
      {/* Custom Mobile App Development */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 pt-0">
        {/* Text Content - Make it appear first on smaller screens */}
        
        <div className="flex-1 md:text-left space-y-6"> <motion.div
          initial={{ x: -300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                    // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
          
        >
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold">
            Custom Mobile App Development
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Custom mobile app development is the process of creating tailored mobile applications designed specifically to meet the unique needs, goals, and challenges of a business or individual. Unlike off-the-shelf solutions, these apps are built from scratch and are fully customizable, ensuring they align with the client’s requirements, brand identity, and target audience.
          </p></motion.div>
        </div>
        
        {/* Video Section */}
        <div className="flex-1 flex justify-center">
        <motion.div
          initial={{ x: 300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                    // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
          
        >
          <video
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={App1} type="video/mp4" />
          </video> </motion.div>
        </div>
      </div>

      {/* Cross-Platform App Development */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-32">
        {/* Video Section */}
        <div className="flex-1 flex justify-center">
        <motion.div
          initial={{ x: -300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                    // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
          
        >
          <video
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={App2} type="video/mp4" />
          </video> </motion.div>
        </div>
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
        <motion.div
          initial={{ x: 300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                    // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
          
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">
            Cross-Platform App Development
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Cross-platform app development is the process of building mobile applications that can run seamlessly on multiple operating systems, such as <span className='font-bold'>iOS, </span> <span className='font-bold'>Android, </span> and <span className='font-bold'>Windows,</span> using a single codebase. This approach reduces development time, cost, and effort while ensuring consistency across platforms.
          </p></motion.div>
        </div>
      </div>

      {/* UI/UX Designing */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-32">
        {/* Video Section */}
        <div className="flex-1 flex justify-center">
        <motion.div
          initial={{ x: 300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                    // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
          
        >
          <video
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={App3} type="video/mp4" />
          </video></motion.div>
        </div>

        {/* Text Content */}
        <div className="flex-1 md:text-left space-y-6 order-2 md:order-1 mt-6 md:mt-0 md:ml-4 lg:ml-6">
        <motion.div
          initial={{ x: -300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                    // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
          
        >
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold">
            UI/UX Design for Mobile Apps
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <span className="font-bold">UI/UX design </span> for mobile apps focuses on creating visually appealing, user-friendly, and seamless experiences for app users. While <span className="font-bold">UI (User Interface) </span> deals with the app’s visual elements and layout, <span className="font-bold">UX (User Experience) </span> ensures that users can interact with the app effortlessly and achieve their goals effectively.
            <br />
            <br />
            A well-designed UI/UX enhances user engagement, boosts retention, and ensures customer satisfaction by making the app intuitive and enjoyable to use.
          </p></motion.div>
        </div>
      </div>
    </div>
  )
}

export default AppHero;
