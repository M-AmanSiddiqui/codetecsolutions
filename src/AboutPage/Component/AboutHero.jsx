import HeroImage from "../../assets/Images/About Hero.mp4";
import HeroLaptop from "../../assets/Images/Laptop.jpg";
import OurMission from "../../assets/Images/Our Mission Image.jpg";
import OurVision from "../../assets/Images/Our Vision.jpg";
import { motion } from 'framer-motion';


function AboutHero() {
  

  
  

  return (
    <div className="bg-black w-full py-16 text-white sm:overflow-hidden overflow-x-hidden">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl text-center font-bold font-serif mb-20 mt-12 md:mt-24 lg:mt-32 underline">
        ABOUT US
      </h1>

      {/* Who We Are Section */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between md:space-y-0 md:space-x-8">
        <div className="flex-1 flex justify-center max-w-full overflow-hidden">
          <motion.video
            initial={{ x: -300, opacity: 0 }} // Start from the left
            whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
            whileHover={{ scale: 1.1 }}
            style={{ originX: 0.5, originY: 0.5 }}
            transition={{
              duration: 0.7, // Smooth entry
              whileHover: { type: "spring", stiffness: 300 },
            }}
            className="w-full max-w-full sm:max-w-sm md:max-w-lg lg:max-w-xl h-auto shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={HeroImage} type="video/mp4" />
          </motion.video>
        </div>

        {/* Text Content with Animation */}
        <motion.div
          initial={{ x: 300, opacity: 0 }} // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left space-y-6 max-w-full sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold">
            Who We Are?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <span className="font-bold">CodeTec Solutions</span> is a dynamic software house that
            brings digital solutions to life. With a focus on innovation and
            design, we specialize in crafting seamless web, mobile, and desktop
            applications. Our team is dedicated to curating exceptional user
            experiences while leveraging digital marketing to help businesses
            grow and thrive. At CodeTec Solutions, we are shaping the future of
            the digital world.
          </p>
        </motion.div>
      </div>

      {/* About CodeTec Solutions */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between space-y-5 sm:space-y-5 md:space-y-0 md:space-x-8 mt-16">
        <motion.div
          initial={{ x: 300, opacity: 0 }} // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          whileHover={{ scale: 1.1 }}
          style={{ originX: 0.5, originY: 0.5 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <img
            className="w-full sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto rounded-lg shadow-md"
            src={HeroLaptop}
            alt="Hero"
          />
        </motion.div>
        <motion.div
          initial={{ x: -300, opacity: 0 }}  // Start from the bottom
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left space-y-6 max-w-full sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold">
            About CodeTec Solutions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <span className="font-bold">CodeTec Solutions</span> is a dynamic digital solutions
            company dedicated to helping businesses thrive in the ever-evolving
            online landscape. We specialize in web design, development,
            software solutions, UI/UX design, and digital marketing. From
            creating engaging websites and intuitive applications to delivering
            scalable e-commerce platforms and custom software, CodeTec Solutions
            combines innovation, expertise, and a client-first approach to
            deliver exceptional results.
          </p>
        </motion.div>
      </div>

      {/* Our Mission */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 space-y-5 sm:space-y-5 md:space-y-0 md:space-x-8 mt-16">
        <motion.div
          initial={{ x: -300, opacity: 0 }} // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          whileHover={{ scale: 1.1 }}
          style={{ originX: 0.5, originY: 0.5 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <img
            className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-lg shadow-md"
            src={OurMission}
            alt="Our Mission"
          />
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}  // Start from the bottom
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left space-y-6 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <span className="font-bold">CodeTec Solutions</span> Our mission at CodeTec Solutions is to
            empower businesses by delivering innovative, reliable, and
            user-focused digital solutions. We are committed to combining
            creativity, technology, and expertise to create exceptional
            websites, applications, and software that drive growth, enhance user
            experiences, and foster long-term success for our clients.
          </p>
        </motion.div>
      </div>

      {/* Our Vision */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between px-4 md:px-8 lg:px-16 space-y-5 sm:space-y-5 md:space-y-0 md:space-x-8 mt-16">
        <motion.div
          initial={{ x: 300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          whileHover={{ scale: 1.1 }}
          style={{ originX: 0.5, originY: 0.5 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <img
            className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto rounded-lg shadow-md"
            src={OurVision}
            alt="Our Vision"
          />
        </motion.div>
        <motion.div
          initial={{ x: -300, opacity: 0 }} // Start from the bottom
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left space-y-6 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">
            Our Vision
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <span className="font-bold">CodeTec Solutions</span> is a dynamic digital solutions
            company dedicated to helping businesses thrive in the ever-evolving
            online landscape. We specialize in web design, development,
            software solutions, UI/UX design, and digital marketing. From
            creating engaging websites and intuitive applications to delivering
            scalable e-commerce platforms and custom software, CodeTec Solutions
            combines innovation, expertise, and a client-first approach to
            deliver exceptional results.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutHero;
