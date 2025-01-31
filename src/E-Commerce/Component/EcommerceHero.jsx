import  Wordpress from "../../assets/Images/EcommerceWordpress.png"
import  Shopify from "../../assets/Images/EcommerceShopify.png"
import { motion } from "framer-motion"; 


 function EcommerceHero() {
  return (
    <div className='bg-black w-full py-16 text-white'>
        {/*  WORDPRESS */}
      <div className="container mx-auto flex flex-col md:flex-row  px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 pt-0">
        {/* Text Content - Make it appear first on larger screens */}
        <div className="flex-1  md:text-left space-y-6 order-2md:order-1 mt-0">
        <motion.div
          initial={{ x: -300, opacity: 0 }}  
          whileInView={{ x: 0, opacity: 1 }} 
               
          transition={{ duration: 0.7 }}      
          
        >
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold">
          WORDPRESS
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            For designing services, <span className="font-bold">CodeTec Solutions</span>  we empower businesses to succeed in e-commerce with expertly crafted Shopify solutions. Our team specializes in designing and developing custom Shopify stores that are visually stunning, user-friendly, and tailored to your brand. From setting up your storefront to integrating powerful features like payment gateways, inventory management, and marketing tools, we ensure a seamless shopping experience for your customers. With CodeTec Solution’s Shopify expertise, you’ll have a scalable, secure, and performance-optimized platform to grow your online business with confidence.
          </p></motion.div>
        </div>
      
        {/* Image Section */}
        <div className="flex-1 flex justify-center order-1 md:order-2 mt-0">
          <div className="flex-1">
          <motion.div
          initial={{ x: 300, opacity: 0 }}  
          whileInView={{ x: 0, opacity: 1 }} 
          whileHover={{ scale: 1.1 }} // Hover effect
          style={{ originX: 0.5, originY: 0.5 }}
          transition={{ duration: 0.7 }}      
          
        >
            <img
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-md"
              src={Wordpress}
              alt="Wordpress"
            /></motion.div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-16">
  <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-6 space-y-12 md:space-y-0 md:space-x-12">
    
    {/* Image Section */}
    <div className="flex justify-center md:justify-end flex-1">
    <motion.div
          initial={{ x: -300, opacity: 0 }}  
          whileInView={{ x: 0, opacity: 1 }} 
          whileHover={{ scale: 1.1 }} // Hover effect
          style={{ originX: 0.5, originY: 0.5 }}     
          transition={{ duration: 0.7 }}      
          
        >
      <img
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
        src={Shopify}
        alt="Shopify"
      /></motion.div>
    </div>

    {/* Text Content */}
    <div className="flex-1 text-center md:text-left">
    <motion.div
          initial={{ x: 300, opacity: 0 }}  
          whileInView={{ x: 0, opacity: 1 }} 
               
          transition={{ duration: 0.7 }}      
          
        >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
        SHOPIFY
      </h2>
      <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
        At <span className="font-bold">CodeTec Solutions</span>, we empower businesses to
        succeed in e-commerce with expertly crafted Shopify solutions. Our
        team specializes in designing and developing custom Shopify stores
        that are visually stunning, user-friendly, and tailored to your
        brand. From setting up your storefront to integrating powerful
        features like payment gateways, inventory management, and marketing
        tools, we ensure a seamless shopping experience for your customers.
        With CodeTec Solution's Shopify expertise, you'll have a scalable,
        secure, and performance-optimized platform to grow your online
        business with confidence.
      </p></motion.div>
    </div>
  </div>
</div>

    </div>
  )
}
export default EcommerceHero
