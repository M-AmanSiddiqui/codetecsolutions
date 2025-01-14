import React from 'react';
import { motion } from "framer-motion";

function ClientsFeedback() {
  return (
    <div className="bg-black pt-14 w-full overflow-hidden">
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold font-serif text-[#91BE7F]">
          CLIENTS FEEDBACK
        </h1>
      </div>
      
      {/* Horizontal Rule */}
      <hr className="my-8 mx-auto max-w-full border-t-2 border-[#91BE7F]" />

      <div className="pt-12 px-4 sm:px-8 lg:px-12 gap-8 flex flex-col sm:flex-row justify-center sm:justify-between">
        {/* Business Owner */}
        <div className="w-full sm:w-1/3 space-y-4 mb-8 sm:mb-0">
          <motion.div
            initial={{ x: -40, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
      
            transition={{ duration: 1.3 }} 
            
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-[#91BE7F]">
              Umaima Azeez
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#91BE7F]">Business Owner</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
              We partnered with <span className="font-bold">CodeTec Solutions</span> for
              the development of a custom desktop application to streamline our
              internal processes. From concept to implementation, their team showcased
              exceptional expertise and professionalism. They thoroughly understood our
              complex requirements and delivered a robust, user-friendly application
              ahead of schedule. The solution has significantly enhanced our workflow
              efficiency, and we commend <span className="font-bold">CodeTec Solution’s</span> dedication and
              technical excellence.
            </p>
          </motion.div>
        </div>

        {/* Web App Development */}
        <div className="w-full sm:w-1/3 space-y-4 mb-8 sm:mb-0">
          <motion.div
            initial={{ y: 40, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
      
            transition={{ duration: 1.3 }} 
            
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-[#91BE7F]">
              Danish Owais
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#91BE7F]">Founder & CEO</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
              I had the pleasure of working with the talented web design team at
              <span className="font-bold">CodeTec Solutions</span> for our company’s
              website redesign project. Their creativity and attention to detail truly
              impressed me. They not only crafted a visually stunning website but also
              ensured a seamless user experience. Our website now reflects our brand
              identity perfectly, and we’ve received numerous compliments from our
              customers. I highly recommend <span className="font-bold">CodeTec Solutions</span> for their exceptional
              web design expertise.
            </p>
          </motion.div>
        </div>

        {/* Mobile App Development */}
        <div className="w-full sm:w-1/3 space-y-4">
          <motion.div
            initial={{ x: 40, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
      
            transition={{ duration: 1.3 }} 
            
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-[#91BE7F]">
              Saad Ahmed
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#91BE7F]">Founder & Director</h2>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
              <span className="font-bold">CodeTec Solutions</span> exceeded our
              expectations in creating a modern and captivating website for our tech
              startup. Their team demonstrated a deep understanding of our vision and
              industry trends. They incorporated innovative design elements, resulting
              in a website that not only looks great but also functions flawlessly. The
              user experience they crafted has been a game-changer for us, enhancing
              our online presence and customer engagement. We’re grateful for the
              expertise and dedication of <span className="font-bold">CodeTec Solutions</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ClientsFeedback;
