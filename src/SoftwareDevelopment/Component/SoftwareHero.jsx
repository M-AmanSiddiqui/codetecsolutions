import React from 'react'
import Software1 from '../../assets/Images/Software1.mp4'
import Software2 from '../../assets/Images/Software 2.png'
import State from './State'
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

 function SoftwareHero() {
  const [softwareRef, softwareInView] = useInView({ triggerOnce: true });
  const softwareAnimation = useSpring({
    x: softwareInView ? 0 : 200, // Slide from the left
    opacity: softwareInView ? 1 : 0, // Fade in
    config: { duration: 900 },
  });
  const [MoreThanRef, MoreThanInView] = useInView({ triggerOnce: true });
  const MoreThanAnimation = useSpring({
    x: MoreThanInView ? 0 : -200, // Slide from the left
    opacity: MoreThanInView ? 1 : 0, // Fade in
    config: { duration: 900 },
  });
  
  return (
       <div className="bg-black w-full py-12 text-white">
                
        
                <h1 className="text-4xl md:text-4xl text-center font-bold font-serif mt-12 underline">
        SOFTWARE DEVELOPMENT
      </h1>
          
          
             {/*Development */}
                <div className="container mx-auto flex flex-col md:flex-row  px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-32">
                    
             <div className="flex-1 flex justify-center">
                           <video
                             className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto shadow-lg"
                             autoPlay
                             loop
                             muted
                             playsInline
                           >
                             <source src={Software1} type="video/mp4" />
                           </video>
                         </div>
                  <div className="flex-1 text-center md:text-left space-y-6">
                  <animated.div
          ref={softwareRef}
          style={softwareAnimation}
          className="flex-1 text-center md:text-left space-y-6"
        >   <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">
                    DEVELOPMENT
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                    A commitment to quality and forward-thinking in the realm of IT services and consulting, positioning CodeTec Solutions as a leader in creating solutions that are not just current but also geared towards future industry demands.</p> </animated.div></div>
                </div>
           
              {/*More Than 10 Years Of Experience​ */}
          <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-32">
           {/* Image Section */}
              <div className="flex justify-center md:justify-end flex-1">
                <img
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
                  src={Software2}
                  alt="Software2"
                />
              </div>
          
            <div className="flex-1 md:text-left space-y-6 order-2 md:order-1 mt-6 md:mt-0"> {/* Adjusted margin-top */}
            <animated.div
          ref={MoreThanRef}
          style={MoreThanAnimation}
          className="flex-1 text-center md:text-left space-y-6"
        >  <h2 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold">
              More Than 10 Years Of Experience​
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              We understand that having a strong online presence is crucial for any business. That’s why we specialize in providing comprehensive development services that drive growth and success for your business.</p></animated.div>
           <State /> </div>
          </div>
          
          
          
          
          
          
          
          
          
          
          </div>
     
)
}
export default SoftwareHero;
