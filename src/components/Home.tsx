import React, { useRef } from "react";

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
      <section id="home" className="w-screen h-140 md:h-screen bg-gray-50">
        <div className="h-1/5 md:h-1/5 w-full bg-gray-200"></div>
        <div className="h-2/3 md:h-4/5 w-full  bg-gray-100 flex justify-center items-start">
          <div className=" h-3/5 w-5/6 md:h-2/3 md:w-1/2 p-1 bg-gray-200 mt-14 rounded flex justify-center items-center relative">
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
      </section>
    </>
  );
}

export default Home;
