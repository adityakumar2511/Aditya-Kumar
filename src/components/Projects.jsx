import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      image: "https://picsum.photos/seed/proj1/800/600",
      description:
        "A full-scale online store with real-time inventory management.",
    },
    {
      title: "Finance Tracker",
      category: "Fintech",
      image: "https://picsum.photos/seed/proj2/800/600",
      description:
        "Intuitive dashboard for monitoring personal and business finances.",
    },
    {
      title: "Social Connect",
      category: "Mobile App",
      image: "https://picsum.photos/seed/proj3/800/600",
      description:
        "Modern social media interface with real-time messaging.",
    },
  ];

  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 lg:px-12 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12"
        variants={cardVariants}
      >
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-lg">
            A curated collection of my recent projects, highlighting my skills
            in modern UI design, performance optimization, and full-stack
            development.
          </p>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/projects"
            className="p-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            View all work →
          </Link>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -10,
              boxShadow: "0px 10px 30px rgba(255,115,0,0.25)",
            }}
            className="group relative overflow-hidden rounded-2xl bg-[#161b22] border border-gray-800 transition-all"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-orange-600 rounded-full text-white hover:bg-orange-700 transition-colors"
                >
                  <Github size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white rounded-full text-black hover:bg-gray-200 transition-colors"
                >
                  <ExternalLink size={20} />
                </motion.button>
              </motion.div>
            </div>

            {/* Content */}
            <motion.div
              className="p-6 space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs uppercase tracking-widest text-orange-500 font-bold">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">
                {project.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
