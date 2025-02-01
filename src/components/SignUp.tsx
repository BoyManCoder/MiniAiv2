import React from "react"

function SignUp(){
    return(
        <>
        <section className="w-screen h-96 md:h-74 mt-10 bg-grey-300 flex justify-center items-baseline text-white">
            <div className="w-4/5 h-full bg-main flex flex-col md:flex-row">
                <div className="w-full h-2/3 md:w-1/2 md:h-full md:ml-4 p-2 flex flex-col md:items-start items-center justify-center">
                    <h1 className="text-4xl font-semibold my-4 md:mb-4">Sign Up Today</h1>
                    <p className="text-center md:text-left">Enlist now to always be notified with our latest events, courses, and other informative AI content.</p>
                    <button className="bg-light w-5/6 md:w-28 text-center py-2 rounded md:my-6 text-lg  hover:bg-main transition-all">Enroll Now</button> 
                </div>
                <div className="w-full h-1/3 md:w-1/2 md:h-full flex justify-end items-center">
                    <img src="src/assets/Robo.jpg" className="h-full w-7/8"/>
                </div>
            </div>
        </section>
        </>
    )
}

export default SignUp;