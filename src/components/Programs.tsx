import React, { useState, useEffect } from "react";

function Daisy() {
  return (
    <section className="h-[500px] w-screen bg-gray-600 flex flex-col md:flex-row justify-center items-center">
      <div className="w-2/5 h-9/10 bg-gray-100 px-4 flex flex-col justify-around">
        <div className="w-full h-4/9 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">Mini Ai x Journey with Daisy</h1>
          <p className="my-4">
            Insert text related to Insert text related to section more random text regardless without else anyways else while
          </p>
        </div>
        <div className="w-5/6 h-4/9 flex flex-row justify-around items-start">
          <div className="w-1/4 h-2/3 bg-gray-300"></div>
          <div className="w-1/4 h-2/3 bg-gray-300"></div>
        </div>
      </div>
      <div className="w-2/5 h-9/10 bg-gray-100 flex justify-center items-center">
        <div className="w-5/6 h-5/6 bg-amber-50"></div>
      </div>
    </section>
  );
}

function Basics() {
  return (
    <section className="h-[500px] w-screen bg-gray-600 flex flex-col md:flex-row justify-center items-center">
      <div className="w-2/5 h-9/10 bg-gray-100 flex justify-center items-center">
        <div className="w-5/6 h-5/6 bg-amber-50"></div>
      </div>
      <div className="w-2/5 h-9/10 bg-gray-100 px-4 flex flex-col justify-around">
        <div className="w-full h-4/9 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">AI Basics Course</h1>
          <p className="my-4">
            Insert text related to Insert text related to section more random text regardless without else anyways else while
          </p>
        </div>
        <div className="w-5/6 h-4/9 flex flex-row justify-center items-start">
          <h1>
            <b>Note:</b> Special thanks to Presenter 1, Presenter 2, Presenter 3
          </h1>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [<Daisy key="daisy" />, <Basics key="basics" />];

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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl font-semibold my-6">Programs & Events</h1>

      <section className="relative w-screen mb-20 h-[500px] overflow-hidden">
        {/* Carousel Container */}
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
