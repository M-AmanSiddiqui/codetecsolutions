import Software1 from '../../assets/Images/Software1.mp4';
import Software2 from '../../assets/Images/Software 2.png';
import State from './State';
import { motion } from "framer-motion"; 

function SoftwareHero() {
  return (
    <div className="bg-black w-full py-12 text-white">
      <h1 className="text-4xl md:text-4xl text-center font-bold font-serif mt-16 md:mt-28 lg:mt-32 underline">
        SOFTWARE DEVELOPMENT
      </h1>

      
      {/* Development Section */}
      <div className="container mx-auto flex flex-col md:flex-row px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-32">
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={{ x: -300, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.7 }} 
            whileHover={{ scale: 1.1 }} // Hover effect
            style={{ originX: 0.5, originY: 0.5 }}         
          >
            <video
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={Software1} type="video/mp4" />
            </video>
          </motion.div>
        </div>
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.div
            initial={{ x: 300, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.7 }} 
                        
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">
              DEVELOPMENT
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              A commitment to quality and forward-thinking in the realm of IT services and consulting, positioning CodeTec Solutions as a leader in creating solutions that are not just current but also geared towards future industry demands.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-32">
        {/* Image Section */}
        <div className="flex justify-center md:justify-end flex-1">
          <motion.div
            initial={{ x: 300, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.7 }} 
            whileHover={{ scale: 1.1 }} // Hover effect
            style={{ originX: 0.5, originY: 0.5 }}           
          >
            <img
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
              src={Software2}
              alt="Software2"
            />
          </motion.div>
        </div>

        <div className="flex-1 md:text-left space-y-6 order-2 md:order-1 mt-6 md:mt-0">
          <motion.div
            initial={{ x: -300, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.7 }} 
                        
          >
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold">
              More Than 10 Years Of Experience
            </h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              We understand that having a strong online presence is crucial for any business. That’s why we specialize in providing comprehensive development services that drive growth and success for your business.
            </p>
            <State />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SoftwareHero;
