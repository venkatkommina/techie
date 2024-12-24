'use client'
import { useState } from "react";
import { motion } from "framer-motion";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="text-white py-[2%]  text-lg mx-4"
      >
        MENU
      </button>

      {/* Full-Screen Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center gap-6 z-50"
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full shadow-md"
          >
            Close
          </button>

          {/* Menu Items */}
          <div className="text-center text-white space-y-4">
            <button className="text-3xl hover:text-green-400 px-10">Workshops</button>
            <button className="text-3xl hover:text-green-400 px-10">Events</button>
            <button className="text-3xl hover:text-green-400 px-10">Our Team</button>
            <button className="text-3xl hover:text-green-400 px-10">Contact Us</button>
          </div>
        </motion.div>
      )}
    </div>
  );
}