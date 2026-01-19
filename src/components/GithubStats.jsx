import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const GithubStats = () => {
  return (
    <motion.section
      id="stats"
      className="max-w-7xl mx-auto px-6 lg:px-12 py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h2
        variants={itemVariants}
        className="text-4xl lg:text-5xl font-bold text-white text-center mb-12"
      >
        My Github Contributions
      </motion.h2>

      {/* Contribution Calendar */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center mb-16"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white rounded-xl p-6 shadow-xl"
        >
          <img
            src="https://ghchart.rshah.org/adityakumar2511"
            alt="GitHub Contribution Calendar"
            className="h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {/* GitHub Stats */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -10,
            boxShadow: "0px 12px 30px rgba(59,130,246,0.25)",
          }}
          className="bg-gradient-to-br from-[#0b1220] to-[#0e1627] border border-blue-500/20 rounded-2xl p-2 shadow-lg flex items-center justify-center"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=adityakumar2511&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
            className="w-full p-6 pt-4"
          />
        </motion.div>

        {/* GitHub Streak */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -10,
            boxShadow: "0px 12px 30px rgba(236,72,153,0.25)",
          }}
          className="bg-gradient-to-br from-[#0b1220] to-[#0e1627] border border-blue-500/20 rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center"
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=adityakumar2511&theme=tokyonight&hide_border=false"
            alt="GitHub Streak"
            className="w-full"
          />
        </motion.div>

        {/* Top Languages */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -10,
            boxShadow: "0px 12px 30px rgba(34,197,94,0.25)",
          }}
          className="bg-gradient-to-br from-[#0b1220] to-[#0e1627] border border-blue-500/20 rounded-2xl p-6 shadow-lg"
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=adityakumar2511&theme=tokyonight&layout=compact"
            alt="Top Languages"
            className="w-full"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default GithubStats;
