import React from "react";

function SignUp() {
  // Redirect function
  const handleEnrollClick = () => {
    window.location.href = "https://forms.gle/QzK5R4pXzLGgDHFu6"; // Your enrollment link
  };

  return (
    <>
      <section className="w-screen h-120 md:h-74 my-12 md:my-26 bg-grey-300 flex justify-center items-center text-white">
        <div className="w-4/5 h-full bg-main rounded flex flex-col md:flex-row justify-between">
          <div className="w-full h-2/5 md:w-1/2 md:h-full md:ml-4 p-2 flex flex-col md:items-start items-center justify-center">
            <h1 className="text-4xl font-semibold mt-14 md:my-2 mb-2 md:mb-4">Sign Up Today</h1>
            <p className="text-center md:text-left my-2">
              Enlist now to always be notified with our latest events, courses, and other informative AI content.
            </p>
            {/* Enroll Now button with onClick */}
            <button
              onClick={handleEnrollClick}
              className="bg-light w-5/6 md:w-28 text-center py-2 rounded md:my-6 text-lg hover:bg-green-700 transition-all"
            >
              Enroll Now
            </button>
          </div>
          <div className="w-full h-2/5 md:w-1/2 md:h-full flex justify-end items-center">
            <img src="/assets/Robo.jpg" className="h-full w-full md:h-full md:w-7/8" />
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
