import React from "react";

function Executives() {
  const ExecInfo = [
    {
      name: "Srigan Siva.",
      position: "CEO",
      desc: "Description here",
    },
    {
      name: "Vedant Kansara",
      position: "CEO",
      desc: "Description here",
    },
    {
      name: "Hani Mahdi",
      position: "Web Developer",
      desc: "How long can this really be before bugs and things like that begin to be experienced",
    },
  ];

  return (
    <>
      <section
        id="exec"
        className="mt-10 w-screen py-2 h-120 bg-gray-100 flex flex-col justify-between"
      >
        <h1 className="text-center text-3xl font-semibold">Executive Team</h1>
        <div className="w-full h-4/5 flex flex-row justify-evenly items-center">
     
          {ExecInfo.map((exec, index) => (
            <div
              key={index}
              className="w-1/5 h-full flex flex-col justify-around p-4 bg-white rounded-lg shadow-md relative overflow-hidden"
            >
            
              <div className="h-4/6 w-full flex justify-center items-center bg-gray-200 relative">
                <img
                  src="https://via.placeholder.com/150"
                  alt={`${exec.name}'s image`}
                  className="w-full h-full object-cover rounded-full transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0"
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
