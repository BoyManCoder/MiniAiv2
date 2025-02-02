import React from "react";

function Mission(){
    // Declare the link in the function
    const redirectToLink = (url) => {
        window.location.href = url;  // Redirects to the URL
    };

    return (
        <>
            <h1 className="mt-14 md:mt-40 mb-6 text-center text-4xl font-semibold">About Mini Ai</h1>
            <section id="mission" className="w-screen h-200 md:h-110 flex justify-center items-center">
                <div className="w-full h-full flex flex-col md:flex-row">
                    <div className="w-full h-4/5 md:w-3/5 md:h-full flex flex-col md:flex-row justify-evenly items-center">
                        <div className="h-1/2 w-5/6 md:w-2/5 md:h-full my-4">
                            <h1 className="text-main text-3xl font-semibold mt-2 pb-2 border-black border-b-1">Our Identity</h1>
                            <p className="w-full py-4 border-black border-b-1">At MiniAI, our mission is to make AI education accessible to all, especially underprivileged communities lacking cutting-edge technology exposure. We provide hands-on workshops, mentorship, and insights from industry leaders at companies like Amazon, Google, and Tesla, ensuring that every student—regardless of background—can explore and innovate.</p>
                            <div className="slide-arrow text-2xl flex flex-row justify-start items-center">
                                <button 
                                    className="text-main font-semibold" 
                                    onClick={() => redirectToLink('https://www.linkedin.com/company/mini-ai/')}>  {/* Example URL */}
                                    Learn More
                                </button>
                                <h1 className="mx-4 text-main font-bold">{'>'}</h1>
                            </div>
                        </div>
                        <div className="h-1/2 w-5/6 md:w-2/5 md:h-full my-4">
                            <h1 className="text-main text-3xl font-semibold mt-2 pb-2 border-black border-b-1">Our Mission</h1>
                            <p className="w-full py-4 border-black border-b-1">By breaking financial and systemic barriers, we empower youth with the skills to thrive in an AI-driven world. Our goal is to bridge the educational gap, inspire the next generation of diverse AI pioneers, and create a more inclusive future in technology.</p>
                            <div className="slide-arrow text-2xl flex flex-row justify-start items-center">
                                <button 
                                    className="text-main font-semibold" 
                                    onClick={() => redirectToLink("https://www.instagram.com/miniai.to?igsh=dnpydmc3aGQwY2Fr")}>  {/* Example URL */}
                                    Learn More
                                </button>
                                <h1 className="mx-4 text-main font-bold">{'>'}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-1/5 my-4 md:w-2/5 md:h-4/5 flex justify-center items-center">
                        <img src="/assets/Class.jpg" className="h-full w-3/4 md:h-7/8 md:w-7/8 border-black border-1 md:border-2 rounded"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Mission;
