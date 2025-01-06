import React from 'react';
import heromain from "../../assets/Images/heromain.png";

function Hero() {
  return (
    <div className="bg-black text-white overflow-hidden ">
      <div className="flex items-center justify-between space-x-16 w-full max-w-screen-xl mx-auto px-4 py-16">
        {/* Hero Image */}
        <div className="flex-1">
          <img className="max-w-full h-auto rounded-lg" src={heromain} alt="Hero" />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-8">
          {/* Who We Are Section */}
          <div className="space-y-5">
            <h1 className="text-4xl font font-serif font-bold ">Who We Are?</h1>
            <p className="text-lg">
              <span className="font-bold">CodeTec Solutions</span> is a dynamic software house that brings <br />
              digital solutions to life. With a focus on innovation and design, <br /> we specialize in crafting
              seamless web, mobile, and desktop <br /> applications. Our team is dedicated to curating exceptional
              user <br /> experiences while leveraging digital marketing to help <br /> businesses grow and thrive. At
              Codetec, we are shaping the <br /> future of the digital world.
            </p>
          </div>

          {/* What We Do Section */}
          <div className="space-y-5">
            <h1 className="text-4xl font font-serif font-bold ">What We Do?</h1>
            <p className="text-lg">
              At <span className="font-bold">CodeTec Solutions</span>, we transform ideas into powerful digital <br />
              solutions. We specialize in creating seamless web, mobile, and <br /> desktop applications designed
              to meet the unique needs of <br /> businesses. Our expertise extends to crafting captivating user <br />
              experiences and implementing effective digital marketing <br /> strategies that drive growth. Whether
              it's innovative software <br /> development, professional web design, or tailored UX/UI <br /> solutions, we
              build the tools to shape your digital success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
