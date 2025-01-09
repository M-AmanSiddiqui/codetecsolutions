import Graphic1 from "../../assets/Images/gaphic 1.jpg";
import Graphic2 from "../../assets/Images/Graphic2.jpg";
import Graphic3 from "../../assets/Images/Graphic3.webp";

function GraphicHero() {
  return (
    <div className="bg-black w-full py-16 text-white">
      

   {/* Designing & Production */}
<div className="container mx-auto flex flex-col md:flex-row  px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 pt-0">
  {/* Text Content - Make it appear first on larger screens */}
  <div className="flex-1  md:text-left space-y-6 order-2md:order-1 mt-0">
    <h2 className="text-2xl sm:text-3xl lg:text-3xl font-serif font-bold">
      DESIGNING & PRODUCTION
    </h2>
    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
      For designing services, <span className="font-bold">CodeTec Solutions</span> is your go-to partner. We’re dedicated to transforming your ideas into stunning visuals that captivate and inspire. From web design and branding to graphics, our talented team of creatives is here to bring your vision to reality. With a focus on detail and a passion for excellence, we create designs that make a lasting impact. Experience the magic of exceptional design with Codetec Solutions—where your creative journey begins.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-1 flex justify-center order-1 md:order-2 mt-0">
    <div className="flex-1">
      <img
        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-md"
        src={Graphic1}
        alt="Graphic1"
      />
    </div>
  </div>
</div>


      {/* Our Expertise */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-32">
        
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">
          Our Expertise
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <span className="font-bold">At CodeTec Solutions</span>we take pride in delivering exceptional design <br /> solutions that combine creativity with innovation. Our talented team blends <br /> modern design principles with a deep understanding of technology to create <br /> visually striking and highly functional designs. Whether it’s designing intuitive <br /> user interfaces, creating impactful graphics, or building a strong brand <br /> identity, our experts are here to exceed your expectations. With a proven <br /> history of crafting outstanding designs, we’re committed to enhancing your <br /> digital presence and making your projects stand out. Let us turn your <br /> ideas into stunning visual realities.
          </p>
        </div>
      </div>

      {/*Graphic Designing */}
      <div className="container mx-auto flex flex-col md:flex-row  px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-32">
        <div className="flex-1">
          <img
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-md"
            src={Graphic2}
            alt="Graphic Designing"
          />
        </div>
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">
          Graphic Designing
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <span className="font-bold"> At CodeTec Solutions</span>we specialize in the art of visual storytelling. Our expert team transforms your ideas into compelling visuals, from logos to marketing materials. With a sharp focus on aesthetics and detail, we create designs that leave a lasting impression. Elevate your brand with our graphic design excellence.
          </p>
        </div>
      </div>
 
    {/* UI/UX Designing */}
<div className="container mx-auto flex flex-col-reverse md:flex-row-reverse px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-32">
  <div className="flex-1">
    <img
      className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-md"
      src={Graphic3}
      alt="UI/UX Designing"
    />
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
  );
}

export default GraphicHero;
