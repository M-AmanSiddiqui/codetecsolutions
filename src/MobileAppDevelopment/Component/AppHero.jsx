import React from 'react'
import App1 from '../../assets/Images/AppDevelopment1.mp4'
import App2 from '../../assets/Images/AppDevelopment2.mp4'
import App3 from '../../assets/Images/AppDevelopment3.mp4'
 function AppHero() {
  return (
     <div className="bg-black w-full py-16 text-white">
          
    
       {/* Custom Mobile App Development */}
    <div className="container mx-auto flex flex-col md:flex-row  px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 pt-0">
      {/* Text Content - Make it appear first on larger screens */}
      <div className="flex-1  md:text-left space-y-6 order-2md:order-1 mt-0">
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold">
        Custom Mobile App Development
        </h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
        Custom mobile app development is the process of creating tailored mobile applications designed specifically to meet the unique needs, goals, and challenges of a business or individual. Unlike off-the-shelf solutions, these apps are built from scratch and are fully customizable, ensuring they align with the client’s requirements, brand identity, and target audience.  </p>
      </div>
    
      {/* Image Section */}
        <div className="flex-1 flex justify-center">
              <video
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={App1} type="video/mp4" />
              </video>
            </div>
    </div>
    
    
       {/*Cross-Platform App Development */}
          <div className="container mx-auto flex flex-col md:flex-row  px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-32">
               <div className="flex-1 flex justify-center">
                     <video
                       className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto shadow-lg"
                       autoPlay
                       loop
                       muted
                       playsInline
                     >
                       <source src={App2} type="video/mp4" />
                     </video>
                   </div>
            <div className="flex-1 text-center md:text-left space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">
              Cross-Platform App Development
              </h2>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              Cross-platform app development is the process of building mobile applications that can run seamlessly on multiple operating systems, such as <span className='font-bold'>iOS, </span> <span className='font-bold'>Android, </span> and <span className='font-bold'>Windows,</span> using a single codebase. This approach reduces development time, cost, and effort while ensuring consistency across platforms.</p>
            </div>
          </div>
     
        {/* UI/UX Designing */}
    <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-32">
     <div className="flex-1 flex justify-center">
           <video
             className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto shadow-lg"
             autoPlay
             loop
             muted
             playsInline
           >
             <source src={App3} type="video/mp4" />
           </video>
         </div>
      <div className="flex-1 md:text-left space-y-6 order-2 md:order-1 mt-6 md:mt-0"> {/* Adjusted margin-top */}
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold">
          DESIGNING & PRODUCTION
        </h2>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
          <span className="font-bold">At CodeTec Solutions</span> we design exceptional user experiences. Our skilled team creates intuitive interfaces that engage users and deliver impactful results. Enhance your digital products with our user-focused design expertise. Your journey to outstanding UI/UX begins here.
        </p>
      </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}
export default AppHero;