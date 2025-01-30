import React from "react";

function Mission(){
    return(<>
    
    <h1 className="mt-24 mb-6 text-center text-4xl font-semibold">About Mini Ai</h1>
    <section id="mission" className="w-screen h-screen md:h-110 flex justify-center items-center">
        <div className="w-full h-full flex flex-col md:flex-row">
            <div className="w-full h-4/5 md:w-3/5 md:h-full flex flex-col md:flex-row justify-evenly items-center">
                <div className="h-1/2 w-5/6 md:w-2/5 md:h-full my-4">
                    <h1 className="text-3xl font-semibold mt-2 pb-2 border-black border-b-1">Our Identity</h1>
                    <p className="w-full mt-6 mb-2 py-2 border-black border-b-1">At Mini Ai out goal is to revoultounize the world of ai and the acces individuals have ize the world of ai and the acces individuals have ize the world of ai and the acces individuals have ize the world of ai and the acces individuals have ize the world of ai and the acces individuals have ize the world of ai and the acces individuals have</p>
                    <div className="slide-arrow text-2xl flex flex-row justify-start items-center">
                    <button className="">Learn More</button>
                    <h1 className="mx-4">{'>'}</h1>
                    </div>
                </div>
                <div className="h-1/2 w-5/6 md:w-2/5 md:h-full my-4">
                    <h1 className="text-3xl font-semibold mt-2 pb-2 border-black border-b-1">Our Mission</h1>
                    <p className="w-full mt-6 mb-2 py-2 border-black border-b-1">At Mini Ai out goal is to revoultounize the world of ai and the acces individuals have ize the world of ai and the acces individuals have ize the world of ai and the acces individuals have ize the world of ai and the acces individuals have ize the world of ai and the acces individuals have ize the world of ai and the acces individuals have</p>
                    <div className="slide-arrow text-2xl flex flex-row justify-start items-center">
                    <button className="">Learn More</button>
                    <h1 className="mx-4">{'>'}</h1>
                    </div>
                </div>
            </div>
            <div className=" w-full h-1/5 my-4 md:w-2/5 md:h-4/5 flex justify-center items-center">
                <img src="" className="h-full w-7/8 bg-amber"/>
            </div>
        </div>
    </section>
    </>)
}

export default Mission;