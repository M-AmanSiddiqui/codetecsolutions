import heromain from "../../assets/Images/heromain.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="bg-black text-white overflow-x-hidden overflow-hidden"> {/* Prevent horizontal overflow */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 w-full max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-16">
        {/* Hero Image with Scroll Animation */}
        <motion.div
          initial={{ x: -300, opacity: 0 }} // Start animation from the left (default for mobile)
          whileInView={{ x: 0, opacity: 1 }} // Animate to the center
          transition={{ duration: 0.7 }} // Animation duration
          whileHover={{ scale: 1.1 }} // Hover effect
          style={{ originX: 0.5, originY: 0.5 }}
          className="flex-1 w-full max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[80vh] overflow-hidden"
        >
          <img
            className="w-full h-full object-cover rounded-lg"
            src={heromain}
            alt="Hero"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 space-y-12">
          {/* Who We Are Section */}
          <motion.div
            initial={{ x: 300, opacity: 0 }} // Start animation from the right (default for mobile)
            whileInView={{ x: 0, opacity: 1 }} // Animate to the center
            transition={{ duration: 0.7 }} // Animation duration
            className="space-y-5"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-[#91BE7F]">
              Who We Are?
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              <span className="font-bold">CodeTec Solutions</span> is a dynamic software house that brings
              <br /> digital solutions to life. With a focus on innovation and design, <br /> we specialize in crafting seamless web,
              mobile, and desktop <br /> applications. Our team is dedicated to curating exceptional <br /> user experiences
              while leveraging digital marketing to help <br /> businesses grow and thrive. At Codetec, we are shaping the <br />
              future of the digital world.
            </p>
          </motion.div>

          {/* What We Do Section */}
          <motion.div
            initial={{ x: 300, opacity: 0 }} // Start animation from the right (default for mobile)
            whileInView={{ x: 0, opacity: 1 }} // Animate to the center
            transition={{ duration: 1 }} // Animation duration
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-[#91BE7F]">
              What We Do?
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mt-4">
              At <span className="font-bold">CodeTec Solutions</span>, we transform ideas into powerful digital <br />
              solutions. We specialize in creating seamless web, mobile, and <br /> desktop applications designed to meet the
              unique needs of <br /> businesses. Our expertise extends to crafting captivating user <br /> experiences and
              implementing effective digital marketing <br /> strategies that drive growth. Whether it's innovative software <br />
              development, professional web design, or tailored UX/UI <br /> solutions, we build the tools to shape your digital
              success.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
