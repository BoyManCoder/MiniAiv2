import React from "react";

function Navbar(){
    return(
        <>
        <div className="md:hidden w-full h-8 bg-green-700 flex flex-row justify-center items-center text-white font-bold">
                <h1>Mini Ai</h1>
            </div>
        <section className="w-screen shadow-black shadow-xl h-12 md:h-16 bg-dark flex justify-center items-center text-md md:text-lg">
            <div className="w-full flex flex-row justify-between items-center">
                <div className="text-white w-1/6 h-1/2 font-bold hidden md:block ml-20">MINI AI</div>
                <div className="text-white font-semibold flex flex-row w-full md:w-2/5 mr-12 h-1/2 justify-around items-center md:justify-between">
                    <a>
                        <h1>Home</h1>
                    </a>
                    <a>
                        <h1>Events</h1>
                    </a>
                    <a>
                        <h1>Executives</h1>
                    </a>
                    <a>
                        <h1>Mission</h1>
                    </a>
                    <a>
                        <button className="h-10 px-6 bg-bright hover:bg-green-600 transition-all hover:text-white text-gray-800 rounded-lg">Contact</button>
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Navbar;