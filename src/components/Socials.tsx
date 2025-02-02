import React from "react";

function Socials() {
    const socialLinks: { [key: string]: string } = {
      email: "mailto:miniai.toronto@gmail.com",
      insta: "https://www.instagram.com/miniai.to?igsh=dnpydmc3aGQwY2Fr",
      linkedin: "https://www.linkedin.com/company/mini-ai/",
    };
  
    function handleSocialClick(social: string): void {
      window.location.href = socialLinks[social];
    }
  
    return (
      <div className="flex space-x-4 p-4">
        {Object.entries(socialLinks).map(([key, link]) => (
          <button
            key={key}
            onClick={() => handleSocialClick(key)}
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all"
          >
            {key === "email" && (
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c-1.129 0-2.044-0.915-2.044-2.044v-17.381c0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067z" />
              </svg>
            )}
            {key === "insta" && (
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
              </svg>
            )}
            {key === "linkedin" && (
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" />
                <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" />
              </svg>
            )}
          </button>
        ))}
      </div>
    );
  }
  
  export default Socials;
  