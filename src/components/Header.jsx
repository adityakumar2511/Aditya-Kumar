import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ResumePDF from "../assets/AdityaCV.pdf";

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "Statistics", href: "/#stats", id: "stats" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0d1117]/80 backdrop-blur-md border-b border-gray-800/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white transition-all duration-300 hover:text-orange-500 hover:scale-105"
        >
          Aditya Kumar
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 group
                ${activeSection === link.id
                  ? "text-orange-500"
                  : "text-gray-400 hover:text-orange-500"
                }
              `}
            >
              {link.name}

              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-orange-500 transition-all duration-300
                  ${activeSection === link.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                  }
                `}
              />
            </a>
          ))}

          {/* Download CV Button */}
          <motion.a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md
                       hover:bg-orange-600 transition-all shadow-md"
          >
            Download CV
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-[#0d1117] border-b border-gray-800 px-6 py-8 flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 8 }}
                className={`text-lg font-medium transition-colors
                  ${activeSection === link.id
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-orange-500"
                  }
                `}
              >
                {link.name}
              </motion.a>
            ))}

            {/* Mobile Download CV Button */}
            <motion.a
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-block text-center px-4 py-3 text-lg font-semibold
                         text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-all"
            >
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
