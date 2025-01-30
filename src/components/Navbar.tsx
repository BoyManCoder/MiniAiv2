import React from "react";

function Navbar(){
    return(
        <>
        <div className="md:hidden w-full h-8 bg-green-700 flex flex-row justify-center items-center text-white font-bold">
                <h1>Mini Ai</h1>
            </div>
        <section className="w-screen h-12 md:h-14 bg-black  text-md md:text-lg">
            <div className="w-full h-full flex flex-row justify-around items-center">
                <div className="text-white w-1/6 h-1/2 hidden md:block">MINI AI</div>
                <div className="text-white flex flex-row w-full md:w-2/5 h-1/2 justify-around md:justify-between">
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
                </div>
            </div>
        </section>
        </>
    )
}

export default Navbar;