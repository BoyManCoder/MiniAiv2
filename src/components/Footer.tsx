import React from "react";

function Footer() {
  
    return (
      <>
        <footer className="w-screen h-auto bg-gray-800 text-white">
          <section className="w-full max-w-screen-xl mx-auto p-8 flex flex-col sm:flex-row justify-between items-start">
            <div className="flex flex-col sm:flex-row sm:items-start sm:w-3/5 w-full">
              <div className="flex flex-row justify-evenly items-center w-full mb-6 sm:mb-0">
                <div className="flex items-center justify-center sm:w-1/5">
                  <div className="w-24 h-24 flex items-center justify-center">
                    <a href="#">
                    <img src="" alt="Logo" />
                    </a>
                  </div>
                </div>
                <ul className="flex flex-col space-y-2 text-left sm:w-1/3">
                  <li><a href="#found" className="hover:underline">Founders</a></li>
                  <li><a href="#about" className="hover:underline">Mission</a></li>
                  <li><a href="#program" className="hover:underline">Programs</a></li>
                  <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 sm:w-full">
                <p className="text-sm leading-relaxed sm:text-left text-center">
                  Welcome to our website! We are dedicated to empowering communities
                  through innovative programs and a mission-driven approach. Our founders
                  are committed to building a brighter future for everyone.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-end sm:w-2/6 mt-6 sm:mt-0">
              <p className="mb-2 text-sm">Stay updated! Subscribe to our newsletter:</p>
              
            </div>
          </section>
          <div className="w-full text-center py-4 border-t border-gray-700">
            <p className="text-sm">© 2025 Your Company. All rights reserved.</p>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;