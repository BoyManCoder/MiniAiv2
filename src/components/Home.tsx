import React, { useRef, useState } from "react";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai"; // Import icons

function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true); // Controls button visibility

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);

        // Hide button after a short delay for a smoother effect
        setTimeout(() => setShowButton(false), 1000);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowButton(true); // Show button when paused
      }
    }
  };

  return (
    <>
      <section 
        id="home" 
        className="home w-screen h-90 md:h-150 relative bg-[url('/assets/Class.jpg')] bg-cover bg-center"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="h-full md:h-full w-full flex flex-col justify-center items-center relative z-10">
          <div className="h-1/5 md:h-1/15 w-full md:w-1/2">
            <h1 className="text-center my-4 text-bright text-4xl md:text-6xl font-semibold">
              Welcome to Mini Ai
            </h1>
          </div>

          <div className="h-3/5 md:h-13/15 w-full flex justify-center items-center">
            <div className="shadow-green-800 shadow-lg h-4/5 w-5/6 md:h-2/3 md:w-1/2 p-1 bg-gradient-to-br from-green-800 to-green-600 rounded flex justify-center items-center relative">
              
              {/* Video: Starts hidden until played */}
              <video
                ref={videoRef}
                className={`h-full w-full object-cover rounded transition-opacity duration-500 ${
                  isPlaying ? "opacity-100" : "opacity-80"
                }`}
                src="/assets/into.mp4"
              ></video>

              {/* Black Background (Until Video Starts) */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black-800/90 rounded"></div>
              )}

              {/* Play/Pause Button with Fade Effect */}
              <button
                onClick={handlePlayPause}
                className={`absolute flex justify-center items-center w-16 h-16  bg-opacity-70 text-white rounded-full transition-opacity duration-500 ${
                  showButton ? "opacity-100" : "opacity-0"
                }`}
              >
                {isPlaying ? (
                  <AiOutlinePauseCircle className="text-6xl text-white" />
                ) : (
                  <AiOutlinePlayCircle className="text-6xl text-white" />
                )}
              </button>
            </div>
          </div>

          <div className="h-1/5 md:h-1/15 w-full flex flex-col justify-start items-center">
            <h1 className="h-4/5 w-5/6 md:h-2/3 md:w-1/2 text-white font-md text-center">
              <b>Message from the CEO:</b> Srigan Siva
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
