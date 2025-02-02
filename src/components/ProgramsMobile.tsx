import React, { useState, useEffect } from "react";

function ProgramCard({ title, description, image, logo }) {
  return (
    <div className="w-full bg-bright text-black p-4 rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-3" />
      <p className="text-sm text-center my-6">{description}</p>
      {logo && <img src={logo} alt="logo" className="w-1/2" />}
    </div>
  );
}

const programsData = [
  {
    title: "TDSB AI Workshops",
    description:
      "In partnership with the Toronto District School Board, we hosted three in-person workshops at Pierre Laporte Middle School, bringing AI education directly to Grade 8 students. ",
    image: "public/assets/TDSB.jpg",
    logo: "public/assets/TDSBLogo.png",
  },
  {
    title: "Mini AI & Baycrest Hospital",
    description:
      "In collaboration with Baycrest Hospital, we introduced elderly patients to the wonders of ChatGPT and DALL·E, showing them how AI can enhance creativity. By bridging the generational gap in technology, we empowered seniors to engage with AI in a meaningful way, fostering curiosity and connection.",
    image: "public/assets/Daisy.jpg",
    logo: "public/assets/Baycrest.png",
  },
  {
    title: "AI Basics Course",
    description:
      "Welcome to MiniAI, a completely FREE Artificial Intelligence learning course for selected students in Grades 8-12. Our lessons will include informative guest speakers from multiple big name tech companies, including Microsoft, Facebook, and Amazon.",
    image: "public/assets/Basic.jpeg",
    logo: "public/assets/LongLogo.png",
  },
];

function ProgramsMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % programsData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-4 py-6">
      <h1 id="events" className="text-center text-2xl font-semibold mt-18 mb-4">Programs & Events</h1>
      <div className="w-full overflow-hidden">
        {programsData.map((program, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0 hidden"}`}
          >
            <ProgramCard {...program} />
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-3 mt-4">
        {programsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-400"}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default ProgramsMobile;
