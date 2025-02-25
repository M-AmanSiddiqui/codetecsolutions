import BgTypingCode from "../../assets/Images/Typing Code.mp4";

function TypingCode() {

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        className="absolute top-20 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={BgTypingCode} type="video/mp4" />
      </video>

      
      {/* Add any content here (optional) */}
    </div>
  );
}

export default TypingCode;
