import React from "react";

function Executives() {
  const ExecInfo = [
    {
      name: "Srigan Siva",
      position: "CEO",
      desc: "Srigan Siva is our CEO and oversees all major operations. He coordinates partnerships, funding, and ensures that all programs and events run smoothly.",
      image: "/assets/srigan.jpg",
    },
    {
      name: "Vedant Kansara",
      position: "COO",
      desc: "Vedant Kansara is a talented educator tasked with the development of our curriculums, programs, and media. He ensures that presenters, presentations, and activities are all held to a high standard.",
      image: "/assets/vedant.jpg",
    },
    {
      name: "Hani Mahdi",
      position: "Web Developer",
      desc: "Hani Mahdi is a computer programmer with a knack for web development. Hani creates, updates, and maintains our web app to ensure our online presence continues to attract youth to our programs.",
      image: "/assets/hani.jpg",
    },
  ];

  return (
    <>
      <section
        id="exec"
        className="mt-10 w-screen py-2 h-350 md:h-120 bg-main text-black flex flex-col justify-between"
      >
        <h1 className="text-center text-3xl my-4 font-semibold text-white">Executive Team</h1>
        <div className="w-full h-full md:w-full md:h-4/5 flex flex-col md:flex-row justify-evenly items-center">
     
          {ExecInfo.map((exec, index) => (
            <div
              key={index}
              className="w-3/4 my-4 h-2/7 md:w-1/5 md:h-full flex flex-col justify-around p-4 bg-bright rounded-lg shadow-md relative overflow-hidden"
            >
            
              <div className="h-4/6 w-full flex justify-center items-center bg-gray-200 relative">
                <img
                  src={exec.image}
                  alt={`${exec.name}'s image`}
                  className="w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0"
                />
                
                <div className="absolute inset-0 flex justify-center m-2 items-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <p className="text-center text-sm text-gray-800 p-4 bg-white bg-opacity-75 rounded-lg">
                    {exec.desc}
                  </p>
                </div>
              </div>
              
              <div className="h-1/6 text-center">
                <h1 className="text-xl font-semibold">{exec.name}</h1>
                <p className="text-sm text-gray-500">{exec.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Executives;
