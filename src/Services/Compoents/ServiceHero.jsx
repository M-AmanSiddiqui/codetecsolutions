import ServiceWebDevelopment from "../../assets/Images/Service WebDevelopment.jpg";
import ServiceSoftwareDevelopment from "../../assets/Images/Service SoftwareDevelopment.jpg";
import ServiceAppDevelopment from "../../assets/Images/Service AppDevelopment.jpg";
import ServiceUIandUX from "../../assets/Images/UX-vs-UI-Design.jpeg";
import ServiceEcommerce from "../../assets/Images/Service Ecommerce.png";
import ServiceSoftwareMaintenance from "../../assets/Images/Service SoftwareMaintaines.jpg";
import { motion } from "framer-motion"; // Ensure motion is imported from framer-motion

function ServiceHero() {
    return (
      <div className="bg-black w-full py-16 text-white ">
        {/* Web Development */}
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 space-y-12 md:space-y-0 md:space-x-8">
        <div className="flex-1">
        <motion.div
          initial={{ x: -300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          whileHover={{ scale: 1.1 }} // Hover effect
          style={{ originX: 0.5, originY: 0.5 }}    // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
       
        >
        <img
          className="max-w-full h-auto shadow-md"
          src={ServiceWebDevelopment}
          alt="Web Development"
        />
      </motion.div>
    </div>
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6 mt-6 md:mt-0 md:pl-8 ">
          <motion.div
          initial={{ x: 300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                  // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
       
        >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
              Web Development
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              <span className="font-bold">At CodeTec Solutions</span> web development is at the core of building powerful, dynamic, and scalable online platforms tailored to your business needs. Our expert team specializes in creating responsive, high-performance websites and web applications that seamlessly integrate functionality with cutting-edge technology. From robust backend development to interactive front-end interfaces, we ensure every project is optimized for speed, security, and user experience. With EcoDesk, your web presence becomes a tool for innovation and growth in today’s digital landscape
            </p>
            </motion.div>
          </div>
        </div>
  
        {/* Software Development */}
        <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between px-6 md:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-16">
          <div className="flex-1">
          <motion.div
          initial={{ x: 300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          whileHover={{ scale: 1.1 }} // Hover effect
          style={{ originX: 0.5, originY: 0.5 }}  // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
       
        >
            <img className="max-w-full h-auto shadow-md" src={ServiceSoftwareDevelopment} alt="Hero" />
            </motion.div>  </div>
          <div className="flex-1 text-center md:text-left space-y-6 mt-6 md:mt-0 md:pr-8">
          <motion.div
          initial={{ x: -300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                  // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
       
        >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
              Software Development
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              <span className="font-bold">At CodeTec Solutions</span> our software development services are tailored to transform your ideas into innovative, scalable, and efficient solutions. We specialize in creating robust web, mobile, and desktop applications that streamline processes, enhance productivity, and drive growth. By leveraging modern technologies and agile methodologies, we deliver customized software solutions designed to meet your unique business needs. With a commitment to quality and user satisfaction, CodeTec Solutions ensures your software is not only functional but also future-ready.
            </p> </motion.div>
          </div>
        </div>
  
        {/* Mobile App Development */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-16">
          <div className="flex-1">
          <motion.div
          initial={{ x: -300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          whileHover={{ scale: 1.1 }} // Hover effect
          style={{ originX: 0.5, originY: 0.5 }}  // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
       
        >
            <img
              className="max-w-full h-auto shadow-md"
              src={ServiceAppDevelopment}
              alt="Mobile App Development"
            />    </motion.div>
          </div>
          <div className="flex-1 text-center md:text-left space-y-6 mt-6 md:mt-0 md:pl-8">
          <motion.div
          initial={{ x: 300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                  // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
       
        >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
              Mobile App Development
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              <span className="font-bold">At CodeTec Solutions</span> we specialize in mobile app development that bridges the gap between businesses and their customers. Whether it’s for iOS or Android, we create intuitive, high-performance mobile applications tailored to your brand’s goals. Our team combines sleek, user-friendly designs with robust functionality to deliver apps that offer seamless experiences across devices. From concept to launch, we ensure every app is optimized for performance, security, and scalability, helping you stay ahead in the competitive mobile landscape. With CodeTec Solutions, your mobile app becomes a powerful tool for growth and customer engagement.
            </p>    </motion.div>
          </div>
        </div>
  
        {/* UI/UX Design */}
        <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between px-6 md:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-16">
          <div className="flex-1">
          <motion.div
          initial={{ x: 300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          whileHover={{ scale: 1.1 }} // Hover effect
          style={{ originX: 0.5, originY: 0.5 }} // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
       
        >
            <img
              className="max-w-full h-auto shadow-md"
              src={ServiceUIandUX}
              alt="UI/UX Design"
            />    </motion.div>
          </div>
          <div className="flex-1 text-center md:text-left space-y-6 mt-6 md:mt-0 md:pr-8">
          <motion.div
          initial={{ x: -300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                  // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
       
        >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
              UI/UX Design
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              <span className="font-bold">At CodeTec Solutions</span> UI/UX design is about creating intuitive, user-centered experiences that drive engagement and satisfaction. Our team focuses on crafting visually appealing interfaces paired with seamless user interactions to ensure your digital products are not only aesthetically pleasing but also easy to navigate. By understanding your users’ needs and behavior, we design solutions that enhance usability and functionality. Whether for websites or mobile apps, CodeTec Solution’s UI/UX designs prioritize clarity, accessibility, and responsiveness, delivering experiences that delight users and achieve your business goals.
            </p>    </motion.div>
          </div>
        </div>
  
        {/* E-commerce Solutions */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-16">
          <div className="flex-1">
          <motion.div
          initial={{ x: -300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          whileHover={{ scale: 1.1 }} // Hover effect
          style={{ originX: 0.5, originY: 0.5 }}      // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
       
        >
            <img
              className="max-w-full h-auto shadow-md"
              src={ServiceEcommerce}
              alt="E-commerce Solutions"
            />    </motion.div>
          </div>
          <div className="flex-1 text-center md:text-left space-y-6 mt-6 md:mt-0 md:pl-8">
          <motion.div
          initial={{ x: 300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                  // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
       
        >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
              E-commerce Solutions
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              <span className="font-bold">At CodeTec Solutions</span> we provide comprehensive e-commerce solutions that empower businesses to thrive in the digital marketplace. From custom-built online stores to seamless integration with payment gateways, our team designs and develops e-commerce platforms that are secure, scalable, and easy to manage. We focus on creating smooth, user-friendly shopping experiences, ensuring your customers can browse, purchase, and interact with your brand effortlessly. With CodeTec Solution’s e-commerce solutions, you get a fully optimized platform that supports your business growth, increases conversions, and maximizes customer satisfaction.
            </p>    </motion.div>
          </div>
        </div>
  
        {/* Software Maintenance and Support */}
        <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between px-6 md:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-16">
          <div className="flex-1">
          <motion.div
          initial={{ x: 300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
          whileHover={{ scale: 1.1 }} // Hover effect
          style={{ originX: 0.5, originY: 0.5 }}     // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
       
        >
            <img
              className="max-w-full h-auto shadow-md"
              src={ServiceSoftwareMaintenance}
              alt="Software Maintenance and Support"
            />    </motion.div>
          </div>
          <div className="flex-1 text-center md:text-left space-y-6 mt-6 md:mt-0 md:pr-8">
          <motion.div
          initial={{ x: -300, opacity: 0 }}  // Start from the left
          whileInView={{ x: 0, opacity: 1 }}  // Animate to the center
                  // Trigger animation only once when in view
          transition={{ duration: 0.7 }}      // Animation duration
       
        >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
              Software Maintenance and Support
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              <span className="font-bold">At CodeTec Solutions</span> we understand that software development doesn’t end at launch. Our software maintenance and support services ensure that your applications remain efficient, secure, and up-to-date. We provide proactive monitoring, troubleshooting, and regular updates to keep your software running smoothly. Whether it’s fixing bugs, improving functionality, or adapting to new business requirements, CodeTec Solution’s support team is always ready to provide quick and reliable solutions. With our ongoing maintenance and support, you can focus on growing your business while we ensure your software continues to meet your evolving needs.
            </p>    </motion.div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ServiceHero;
  