import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import projectsData from "./projectsData";



// Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Project Item Component
const ProjectItem = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const variants = isEven ? leftVariants : rightVariants;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-8 lg:gap-12 items-center group`}
    >
      {/* Image Section */}
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="w-full lg:w-1/2"
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl ">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full lg:h-[350px] h-[200px] object-cover "
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        variants={containerVariants}
        className="w-full lg:w-1/2 space-y-6"
      >
        <motion.div variants={containerVariants}>
          <motion.span
            variants={leftVariants}
            className="inline-block px-4 py-2 bg-orange-600/20 border border-orange-600/30 rounded-full text-orange-500 font-semibold text-sm uppercase tracking-wider mb-4"
          >
            {project.category}
          </motion.span>

          <motion.h2
            variants={leftVariants}
            className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300"
          >
            {project.title}
          </motion.h2>

          <motion.p
            variants={leftVariants}
            className="text-gray-400 text-lg leading-relaxed"
          >
            {project.description}
          </motion.p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap gap-3"
        >
          {project.techStack.map((tech, i) => (
            <motion.span
              key={i}
              variants={leftVariants}
              whileHover={{ scale: 1.08 }}
              className="px-4 py-2 bg-[#161b22] text-orange-500 rounded-lg text-sm font-semibold border border-orange-500/20 hover:border-orange-500/50 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={containerVariants}
          className="flex gap-4 pt-4"
        >
          {project.github && project.github !== "#" && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-[#161b22] text-white rounded-lg hover:bg-[#1f2937] transition-all duration-300 border border-gray-700 hover:border-orange-500 group/btn"
          >
            <Github
              size={20}
              className="group-hover/btn:text-orange-500 transition-colors"
            />
            <span className="font-semibold">View Code</span>
          </motion.a>
          )}

          {project.live && project.live !== "#" && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50"
          >
            <ExternalLink size={20} />
            <span className="font-semibold">Live Demo</span>
          </motion.a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Main Projects Page Component
const Projects = () => {
  return (
    <motion.div
      className="min-h-screen bg-[#0d1117]"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          className="space-y-32"
          variants={containerVariants}
        >
          {projectsData.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
