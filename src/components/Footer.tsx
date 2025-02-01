import React from "react";

function Footer() {
  
    return (
      <>
        <footer className="w-screen h-auto bg-gray-800 text-white">
          <section className="w-full max-w-screen-xl mx-auto p-8 flex flex-col sm:flex-row justify-between items-start">
            <div className="flex flex-col sm:flex-row sm:items-start sm:w-3/5 w-full">
              <div className="flex flex-row justify-evenly items-center w-full mb-6 sm:mb-0">
                <div className="flex items-center justify-center sm:w-2/5">
                  <div className="md:w-60 h-24 flex items-center justify-center">
                    <a href="#">
                    <img src="src/assets/MiniAiB.png" className="w-30 md:w-60" alt="Logo" />
                    </a>
                  </div>
                </div>
                <ul className="flex flex-col space-y-2 text-left sm:w-1/3">
                  <li><a href="#found" className="hover:underline">Home</a></li>
                  <li><a href="#about" className="hover:underline">Events</a></li>
                  <li><a href="#program" className="hover:underline">Executives</a></li>
                  <li><a href="#contact" className="hover:underline">Mission</a></li>
                </ul>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 sm:w-full">
                <p className="text-sm leading-relaxed sm:text-left text-center">
                At MiniAI, we empower underserved communities with cutting-edge AI education, featuring special guest speakers from Amazon, Google, Tesla, and more. Through hands-on workshops and insights from industry leaders, we prepare the next generation to excel in the AI-driven future.

                </p>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-center sm:items-end sm:w-2/6 mt-6 sm:mt-0">
              <p className="mb-2 text-sm"> For any partnerships or collaborations, even general inquiries, contact us through our email miniai.toronto@gmail.com or one of our social media platforms, though we prefer email. Thank you for the support as we continue to better our communities.</p>
            </div>
          </section>
          <div className="w-full text-center py-4 border-t border-gray-700">
            <p className="text-sm">© 2025 Mini Ai. All rights reserved.</p>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;