import React from "react";
import Long from "../assets/Long";

function Navbar(){
    // Function to handle redirects
    const redirectToLink = (url) => {
        window.location.href = url;  // Redirect to the URL
    };

    return (
        <>
            <div className="md:hidden w-full h-10 bg-white flex flex-row justify-center items-center text-white">
                <img src="src/assets/LongLogo.png" className="logo h-8"/>
            </div>
            <nav>
                <section className="w-screen navbarA h-12 md:h-16 bg-white flex justify-center items-center text-sm md:text-lg">
                    <div className="w-full flex flex-row justify-between items-center">
                        <div className="text-white w-1/6 h-1/2 hidden md:block ml-20">
                            <img src="src/assets/LongLogo.png" className="logo h-10"/>
                        </div>
                        <div className="text-white flex flex-row w-full md:w-2/5 md:mr-12 h-1/2 justify-around items-center md:justify-between">
                            <a onClick={() => redirectToLink('#home')}>
                                <h1 className="navbarB">Home</h1>
                            </a>
                            <a onClick={() => redirectToLink('#events')}>
                                <h1 className="navbarB">Events</h1>
                            </a>
                            <a onClick={() => redirectToLink('#exec')}>
                                <h1 className="navbarB">Executives</h1>
                            </a>
                            <a onClick={() => redirectToLink('#mission')}>
                                <h1 className="navbarB">Mission</h1>
                            </a>
                            <a>
                                <button
                                    onClick={() => redirectToLink('mailto:miniai.toronto@gmail.com')}
                                    className="h-8 text-center md:h-10 px-4 md:px-6 bg-bright hover:bg-green-600 transition-all hover:text-white text-gray-800 rounded-lg">
                                    Contact
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
            </nav>
        </>
    );
}

export default Navbar;
