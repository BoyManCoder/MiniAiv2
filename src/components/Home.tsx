import React, { useRef } from "react";
import Long from "../assets/Long.tsx";

function Home() {
  // Create a ref for the video element
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Play or pause the video when the button is clicked
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <>
      <section id="home" className="home w-screen h-90 md:h-150">
        <div className="image-overlay"></div>
        <div className="h-full md:h-full w-full bg-main flex flex-col justify-center items-center relative z-10">
          <div className="h-1/5 md:h-1/15 w-full md:w-1/2">
            <h1 className="text-center my-4 text-bright text-4xl md:text-6xl font-semibold">Welcome to Mini Ai</h1>
          </div>
          <div className="h-3/5 md:h-13/15 w-full flex justify-center items-center">
            <div className="shadow-green-800 shadow-lg h-4/5 w-5/6 md:h-2/3 md:w-1/2 p-1 bg-gradient-to-br from-green-800 to-green-600 rounded flex justify-center items-center">
              <video
                ref={videoRef}
                className="h-full w-full bg-white rounded"
                src="your-video-file.mp4"
              ></video>

              {/* Play/Pause Button */}
              <button
                onClick={handlePlayPause}
                className="absolute flex justify-center items-center w-12 h-12 bg-gray-100 text-white rounded-full"
              >
                <span className="text-3xl">
                  {videoRef.current?.paused ? "" : ""}
                </span>
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
