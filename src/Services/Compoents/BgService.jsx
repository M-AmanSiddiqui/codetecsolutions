
import BgCoding from "../../assets/Images/BgService.mp4"

function BgService() {
  return (

    <div className="bg-black w-full py-16 text-white">
    {/* Heading */}
    <h1 className="text-4xl md:text-5xl text-center font-bold font-serif mb-20 underline">
      SERVICES
    </h1>
    <div className="relative w-full h-screen overflow-hidden ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BgCoding} type="video/mp4" />
      </video>
      
    </div>
    </div>
  );
}

export default BgService;
