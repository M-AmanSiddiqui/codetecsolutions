import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import heromain from "../../assets/Images/heromain.png";

function Hero() {
  // Hero image animation
  const [imageRef, imageInView] = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const imageAnimation = useSpring({
    x: imageInView ? 0 : -200, // Slide from the left
    opacity: imageInView ? 1 : 0, // Fade in
    config: { duration: 1000 }, // Animation duration
  });

  // Who We Are section animation
  const [whoWeAreRef, whoWeAreInView] = useInView({ triggerOnce: true });
  const whoWeAreAnimation = useSpring({
    x: whoWeAreInView ? 0 : 200, // Slide from the right
    opacity: whoWeAreInView ? 1 : 0, // Fade in
    config: { duration: 1000 },
  });

  // What We Do section animation
  const [whatWeDoRef, whatWeDoInView] = useInView({ triggerOnce: true });
  const whatWeDoAnimation = useSpring({
    x: whatWeDoInView ? 0 : 200, // Slide from the right
    opacity: whatWeDoInView ? 1 : 0, // Fade in
    config: { duration: 1000 },
  });

  return (
    <div className="bg-black text-white overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 w-full max-w-screen-xl mx-auto px-4 py-16">
        {/* Hero Image with Scroll Animation */}
        <animated.div
          ref={imageRef}
          style={imageAnimation}
          className="flex-1"
        >
          <img className="max-w-full h-auto rounded-lg" src={heromain} alt="Hero" />
        </animated.div>

        {/* Text Content */}
        <div className="flex-1 space-y-8">
          {/* Who We Are Section */}
          <animated.div
            ref={whoWeAreRef}
            style={whoWeAreAnimation}
            className="space-y-5"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold">Who We Are?</h1>
            <p className="text-base md:text-lg">
              <span className="font-bold">CodeTec Solutions</span> is a dynamic software house that brings <br />
              digital solutions to life. With a focus on innovation and design, <br /> we specialize in crafting
              seamless web, mobile, and desktop <br /> applications. Our team is dedicated to curating exceptional
              user <br /> experiences while leveraging digital marketing to help <br /> businesses grow and thrive. At
              Codetec, we are shaping the <br /> future of the digital world.
            </p>
          </animated.div>

          {/* What We Do Section */}
          <animated.div
            ref={whatWeDoRef}
            style={whatWeDoAnimation}
            className="space-y-5"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold">What We Do?</h1>
            <p className="text-base md:text-lg">
              At <span className="font-bold">CodeTec Solutions</span>, we transform ideas into powerful digital <br />
              solutions. We specialize in creating seamless web, mobile, and <br /> desktop applications designed
              to meet the unique needs of <br /> businesses. Our expertise extends to crafting captivating user <br />
              experiences and implementing effective digital marketing <br /> strategies that drive growth. Whether
              it's innovative software <br /> development, professional web design, or tailored UX/UI <br /> solutions, we
              build the tools to shape your digital success.
            </p>
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
