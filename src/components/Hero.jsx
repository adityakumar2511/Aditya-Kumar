import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import ResumePDF from "../assets/AdityaCV.pdf";
import profileImage from "../assets/myimg.jpg";
const Hero = () => {
  const roles = [
    "Frontend Developer",
    "WordPress Developer",
    "Software Developer",
    "Full Stack Developer",
    "Shopify Developer",
    "MERN Stack Developer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 🔤 TYPEWRITER EFFECT
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(
          currentRole.substring(0, displayedText.length + 1)
        );

        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1200); // pause after full word
        }
      } else {
        // Deleting
        setDisplayedText(
          currentRole.substring(0, displayedText.length - 1)
        );

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <div className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden bg-[#0b0f14]">
      {/* Decorative background elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl lg:text-4xl font-semibold tracking-tight text-white"
            >
              Hello<span className="text-orange-500">.</span>
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-none text-gray-300"
            >
              I'm <span className="text-white">Aditya</span>
            </motion.h1>

            {/* 🔤 TYPING ROLE TEXT */}
            <div className="text-4xl lg:text-6xl font-bold tracking-tight text-white mt-4 h-20 lg:h-24 flex items-center">
              <motion.p
                key={currentRoleIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {displayedText}
                <span className="ml-1 animate-pulse">|</span>
              </motion.p>
            </div>
          </div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white
                         font-semibold rounded-lg transition-all flex items-center
                         gap-2 shadow-lg"
            >
              Got a project?{" "}
              <ArrowLeft size={18} className="rotate-90 transform" />
            </motion.a>

            <motion.a
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-700
             hover:border-orange-500 text-white
             font-semibold rounded-lg transition-all"
            >
              My Resume
            </motion.a>

          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 lg:w-96 lg:h-96"
          >
            {/* 🔴 ORIGINAL EXPANDING CIRCLE (PRESERVED) */}
            <div className="absolute inset-0 rounded-full border border-orange-500/30 animate-[ping_4s_linear_infinite]"></div>

            {/* Secondary ring */}
            <div className="absolute inset-4 rounded-full border border-orange-500/20"></div>

            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="relative w-full h-full rounded-full overflow-hidden
                         border-8 border-[#1a1f2e] shadow-2xl z-10"
            >
              <img
                src={profileImage}
                alt="Aditya Kumar"
                className="w-full h-full object-cover grayscale-[20%]
                           hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>

            {/* Decorative symbols */}
            <motion.div
              animate={{ rotate: [12, 18, 12] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 text-orange-500/40
                         text-6xl font-light select-none"
            >
              &lt;
            </motion.div>

            <motion.div
              animate={{ rotate: [-12, -18, -12] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 text-orange-500/40
                         text-6xl font-light select-none"
            >
              &gt;
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
