import { motion } from "framer-motion"; 

function ServiceOffer() {
  return (
    <div className="bg-black pt-14">
      <div>
        <h1 className="text-3xl sm:text-4xl text-center font-bold font-serif text-[#91BE7F]">
          WHAT WE CAN OFFER
        </h1>
        <p className="text-sm sm:text-md pt-6 text-center text-[#91BE7F]">
          We are constantly striving to improve our offerings so that our clients can benefit from the latest advances in technology.
        </p>
      </div>

      
      <div className="pt-12 px-4 sm:px-8 lg:px-24 gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.7 }}
          
        >   
          {/* Web Development */}
          <div className="space-y-8">
            <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#91BE7F]">
              Web Development
            </h1>
            <p className="text-sm sm:text-lg text-white leading-relaxed">
              <span className="font-bold">At CodeTec Solutions,</span> we build responsive, secure, and scalable web solutions tailored to your needs. Combining cutting-edge technology with intuitive design, we create websites and web applications that drive growth, enhance user experience, and set your brand apart online.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -300, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.7 }}
          
        > 
          {/* Web App Development */}
          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#91BE7F]">
              Web App Development
            </h1>
            <p className="text-sm sm:text-lg text-white leading-relaxed">
              <span className="font-bold">At CodeTec Solutions,</span> we specialize in web app development that delivers powerful, user-friendly, and scalable solutions. From dynamic interfaces to robust backends, we create web applications tailored to your business needs, ensuring seamless performance and exceptional user experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 300, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.7 }}
          
        > 
          {/* Mobile App Development */}
          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#91BE7F]">
              Mobile App Development
            </h1>
            <p className="text-sm sm:text-lg text-white leading-relaxed">
              <span className="font-bold">At CodeTec Solutions,</span> we create high-quality mobile applications tailored for iOS and Android. Combining sleek design with robust functionality, our apps deliver seamless user experiences, performance, and scalability to meet your business goals.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 300, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.7 }}
          
        > 
          {/* Desktop Application Development */}
          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#91BE7F]">
              Desktop Application Development
            </h1>
            <p className="text-sm sm:text-lg text-white leading-relaxed">
              <span className="font-bold">At CodeTec Solutions,</span> we develop custom desktop applications designed for performance, reliability, and user-friendliness. Tailored to your business needs, our solutions ensure seamless functionality, scalability, and compatibility across various operating systems, driving efficiency and growth.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServiceOffer;
