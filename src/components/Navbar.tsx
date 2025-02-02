import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function ResponsiveMenu({ open, setOpen }) {
  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen bg-gray-500/30 z-20"
        >
          <div className="text-md font-semibold uppercase bg-gradient-to-r from-green-500 to-teal-500 text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-4 border-b-2 border-t-2">
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="p-4 cursor-pointer"
              >
                <a href="#home" onClick={handleLinkClick}>Home</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="p-4 cursor-pointer"
              >
                <a href="#exec" onClick={handleLinkClick}>Executives</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="p-4 cursor-pointer"
              >
                <a href="#mission" onClick={handleLinkClick}>Mission</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="p-4 cursor-pointer"
              >
                <a href="#events" onClick={handleLinkClick}>Events</a>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Navbar() {
  const NavbarMenu = [
    { id: 1, title: "Home", link: "#home" },
    { id: 2, title: "Executives", link: "#exec" },
    { id: 3, title: "Mission", link: "#mission" },
    { id: 4, title: "Events", link: "#events" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-3">
          <div className="flex items-center gap-2">
            <img src="/assets/LongLogo.png" className="w-34 ml-6 md:ml-20" />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-green-500"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/miniai.to?igsh=dnpydmc3aGQwY2Fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:bg-green-500 hover:text-white rounded-full p-2 duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/mini-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:bg-green-500 hover:text-white rounded-full p-2 duration-200"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="mailto:miniai.toronto@gmail.com"
              className="hover:bg-green-500 font-semibold hover:text-white rounded-md border-2 border-green-500 px-6 py-2 duration-200 hidden md:block"
            >
              Contact
            </a>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <MdMenu className="text-4xl" />
            </div>
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
