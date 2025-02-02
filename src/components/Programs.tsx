import React, { useState, useEffect } from "react";

function TDSB() {
  return (
    <section className="h-[500px] w-screen bg-main flex flex-col md:flex-row justify-center items-center">
      <div className="w-2/5 h-9/10 bg-gray-100 px-4 flex flex-col justify-around">
        <div className="w-full h-4/9 flex flex-col justify-center">
          <h1 className="my-4 text-3xl font-semibold">TDSB AI Workshops</h1>
          <p className="mb-4">
          In partnership with the Toronto District School Board, we hosted three in-person workshops at Pierre Laporte Middle School, bringing AI education directly to Grade 8 students. Through an engaging, hands-on approach, we simplified Machine Learning concepts and introduced an interactive module on bias in AI models like ChatGPT.
          </p>
        </div>
        <div className="w-5/6 h-4/9 flex flex-row justify-around items-start">
          <img src="/assets/TDSBLogo.png" className="w-1/3 h-2/3"/>
        </div>
      </div>
      <div className="w-2/5 h-9/10 bg-gray-100 flex justify-center items-center">
        <div className="w-5/6 h-5/6 flex justify-center items-center">
        <img src="/assets/TDSB.jpg" className="object-contain"/>
        </div>
      </div>
    </section>
  );
}

function Daisy() {
  return (
    <section className="h-[500px] w-screen bg-main flex flex-col md:flex-row justify-center items-center">
      <div className="w-2/5 h-9/10 bg-gray-100 px-4 flex flex-col justify-around">
        <div className="w-full h-4/9 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">Mini Ai & Baycrest Hospital</h1>
          <p className="my-4">
          In collaboration with Baycrest Hospital, we introduced elderly patients to the wonders of ChatGPT and DALL·E, showing them how AI can enhance creativity. By bridging the generational gap in technology, we empowered seniors to engage with AI in a meaningful way, fostering curiosity and connection.
          </p>
        </div>
        <div className="w-5/6 h-4/9 flex flex-row justify-around items-start">
          <img src="/assets/Baycrest.png"/>
        </div>
      </div>
      <div className="w-2/5 h-9/10 bg-gray-100 flex justify-center items-center">
        <div className="w-5/6 h-5/6 flex justify-center items-center">
        <img src="/assets/Daisy.jpg" className="object-contain"/>
        </div>
      </div>
    </section>
  );
}

function Basics() {
  return (
    <section className="h-[500px] w-screen bg-main flex flex-col md:flex-row justify-center items-center">
      <div className="w-2/5 h-9/10 bg-gray-100 flex justify-center items-center">
        <div className="w-5/6 h-5/6 flex justify-center items-center">
          <img className="h-5/7 w-full" src="/assets/Basic.jpeg"/>
        </div>
      </div>
      <div className="w-2/5 h-9/10 bg-gray-100 px-4 flex flex-col justify-around">
        <div className="w-full h-4/9 flex flex-col justify-center ">
          <h1 className="text-3xl font-semibold">AI Basics Course</h1>
          <p className="my-4">
          Welcome to MiniAI, a completely FREE Artificial Intelligence learning course for selected students in Grades 8-12. Over the summer, you will learn everything you need to know in order to become resourceful with AI. Each week we will have a new lesson, so bring your notepads. Along with that, our lessons will include informative guest speakers from multiple big name tech companies, including Microsoft, Facebook, and Amazon.
          </p>
        </div>
        <div className="w-5/6 h-1/9 flex flex-row justify-start items-end">
          <h1>
            <b>Note:</b> Special thanks to:
            <ul>
              <li>Tong Su - Meta Senior Software Engineer</li>
              <li>Richard Zhang - Amazon Senior Software Engineer</li>
              <li>Ugan Siva - Microsoft Senior Product Manager</li>
            </ul>
          </h1>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [<Daisy key="daisy" />, <Basics key="basics" />, <TDSB key="tdsb"/>];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl font-semibold mt-20 mb-6">Programs & Events</h1>

      <section id="events" className="hidden md:block relative w-screen mb-20 h-[500px] overflow-hidden">
        <div
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-screen flex justify-center items-center">
              {slide}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
        >
          ❯
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${currentIndex === index ? "bg-white" : "bg-gray-500"}`}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Programs;
