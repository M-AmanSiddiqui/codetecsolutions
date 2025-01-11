import HeroImage from "../../assets/Images/About Hero.mp4";
import HeroLaptop from "../../assets/Images/Laptop.jpg";
import OurMission from "../../assets/Images/Our Mission Image.jpg";
import OurVision from "../../assets/Images/Our Vision.jpg";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

function AboutHero() {
  // Animation for each section and image
  const [whoWeAreRef, whoWeAreInView] = useInView({ triggerOnce: true });
  const whoWeAreAnimation = useSpring({
    transform: whoWeAreInView ? 'translateY(0)' : 'translateY(100px)',
    opacity: whoWeAreInView ? 2 : 0,
    config: { duration: 1000 },
  });

  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const aboutAnimation = useSpring({
    transform: aboutInView ? 'translateY(0)' : 'translateY(100px)',
    opacity: aboutInView ? 1 : 0,
    config: { duration: 1000 },
  });

  const [missionRef, missionInView] = useInView({ triggerOnce: true });
  const missionAnimation = useSpring({
    transform: missionInView ? 'translateY(0)' : 'translateY(100px)',
    opacity: missionInView ? 1 : 0,
    config: { duration: 1000 },
  });

  const [visionRef, visionInView] = useInView({ triggerOnce: true });
  const visionAnimation = useSpring({
    transform: visionInView ? 'translateY(0)' : 'translateY(100px)',
    opacity: visionInView ? 1 : 0,
    config: { duration: 1000 },
  });

  // Image animations
  const [heroImageRef, heroImageInView] = useInView({ triggerOnce: true });
  const heroImageAnimation = useSpring({
    transform: heroImageInView ? 'translateX(0)' : 'translateX(100px)', // image slides from the right
    opacity: heroImageInView ? 1 : 0,
    config: { duration: 1000 },
  });

  const [missionImageRef, missionImageInView] = useInView({ triggerOnce: true });
  const missionImageAnimation = useSpring({
    transform: missionImageInView ? 'translateX(0)' : 'translateX(-100px)', // image slides from the left
    opacity: missionImageInView ? 1 : 0,
    config: { duration: 1000 },
  });

  const [visionImageRef, visionImageInView] = useInView({ triggerOnce: true });
  const visionImageAnimation = useSpring({
    transform: visionImageInView ? 'translateX(0)' : 'translateX(100px)', // image slides from the right
    opacity: visionImageInView ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <div className="bg-black w-full py-16 text-white">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl text-center font-bold font-serif mb-20 underline">
        ABOUT US
      </h1>

      {/* Who We Are Section */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8">
        {/* Video Section */}
        <div className="flex-1 flex justify-center">
          <video
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={HeroImage} type="video/mp4" />
          </video>
        </div>

        {/* Text Content with Animation */}
        <animated.div
          ref={whoWeAreRef}
          style={whoWeAreAnimation}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">
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
        </animated.div>
      </div>

      {/* About CodeTec Solutions */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-16">
        <animated.div
          ref={heroImageRef}
          style={heroImageAnimation}
          className="flex-1"
        >
          <img
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-md"
            src={HeroLaptop}
            alt="Hero"
          />
        </animated.div>
        <animated.div
          ref={aboutRef}
          style={aboutAnimation}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold">
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
        </animated.div>
      </div>

      {/* Our Mission */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-16">
        <animated.div
          ref={missionImageRef}
          style={missionImageAnimation}
          className="flex-1"
        >
          <img
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-md"
            src={OurMission}
            alt="Our Mission"
          />
        </animated.div>
        <animated.div
          ref={missionRef}
          style={missionAnimation}
          className="flex-1 text-center md:text-left space-y-6"
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
        </animated.div>
      </div>

      {/* Our Vision */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between px-6 md:px-12 lg:px-16 space-y-12 md:space-y-0 md:space-x-8 mt-16">
        <animated.div
          ref={visionImageRef}
          style={visionImageAnimation}
          className="flex-1"
        >
          <img
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-md"
            src={OurVision}
            alt="Our Vision"
          />
        </animated.div>
        <animated.div
          ref={visionRef}
          style={visionAnimation}
          className="flex-1 text-center md:text-left space-y-6"
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
        </animated.div>
      </div>
    </div>
  );
}

export default AboutHero;
