import React from "react";
import { Code, Layers, Globe } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const floatVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] py-24 lg:py-32"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Floating Background Blobs */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="inline-block mb-6 px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            Portfolio Showcase
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Explore My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
            Projects
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          A collection of projects showcasing my expertise across modern web
          technologies and frameworks. From responsive frontend interfaces to
          full-stack and custom WordPress solutions, each project reflects my
          focus on clean design, performance, and usability.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            {
              icon: <Code className="text-orange-500" size={24} />,
              value: "50+",
              label: "Projects Completed",
            },
            {
              icon: <Layers className="text-purple-500" size={24} />,
              value: "10+",
              label: "Technologies",
            },
            {
              icon: <Globe className="text-blue-500" size={24} />,
              value: "100%",
              label: "Client Satisfaction",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0px 12px 30px rgba(255,115,0,0.25)",
              }}
              className="flex items-center gap-3 px-6 py-3 bg-[#161b22] border border-gray-700 rounded-lg"
            >
              {stat.icon}
              <div className="text-left">
                <p className="text-white font-semibold">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
