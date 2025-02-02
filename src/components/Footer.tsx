import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-screen h-auto bg-gray-800 text-white">
        <section className="w-full max-w-screen-xl mx-auto p-8 flex flex-col sm:flex-row justify-between items-start">
          <div className="flex flex-col sm:flex-row sm:items-start sm:w-3/5 w-full">
            {/* Updated Nav Links to be Horizontal on Mobile */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:w-3/5 w-full">
              <div className="flex flex-col sm:flex-row justify-center sm:justify-start w-full mb-6 sm:mb-0">
                <ul className="flex flex-wrap justify-center sm:flex-col sm:justify-start space-x-4 sm:space-x-0 sm:space-y-2 text-center sm:text-left">
                  <li><a href="#home" className="hover:underline">Home</a></li>
                  <li><a href="#events" className="hover:underline">Events</a></li>
                  <li><a href="#exec" className="hover:underline">Executives</a></li>
                  <li><a href="#mission" className="hover:underline">Mission</a></li>
                </ul>
              </div>
            </div>
            {/* Description */}
            <div className="mt-4 sm:mt-0 sm:ml-6 sm:w-full">
              <p className="text-sm leading-relaxed sm:text-left text-center">
                At MiniAI, we empower underserved communities with cutting-edge AI education, featuring special guest speakers from Amazon, Google, Tesla, and more. Through hands-on workshops and insights from industry leaders, we prepare the next generation to excel in the AI-driven future.
              </p>
            </div>
          </div>
          {/* Contact Information */}
          <div className="hidden md:flex flex-col items-center sm:items-end sm:w-2/6 mt-6 sm:mt-0">
            <p className="mb-2 text-sm">
              For any partnerships or collaborations, even general inquiries, contact us through our email miniai.toronto@gmail.com or one of our social media platforms, though we prefer email. Thank you for the support as we continue to better our communities.
            </p>
          </div>
        </section>
        {/* Copyright Section */}
        <div className="w-full text-center py-4 border-t border-gray-700">
          <p className="text-sm">© 2025 MiniAI. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
