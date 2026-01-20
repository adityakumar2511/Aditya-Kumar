import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import madhuRekhaBillingSoftwareImg from "../assets/ProjectsImg/madhuRekhaBillingSoftware.png";
import skyproImg from "../assets/ProjectsImg/skypro.png";
import CSSCPImg from "../assets/ProjectsImg/csscp.png";
import bebeyondLandingPageImg from "../assets/ProjectsImg/bebeyondLandingPage.png";
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
    // Madhu Rekha Billing Software Project
    {
      category: "Mern Stack",
      title: "Madhu Rekha Billing Software",
      image: madhuRekhaBillingSoftwareImg,
      description:
        "Madhu Rekha Billing Software is a responsive web-based billing and invoicing application built with modern frontend technologies. It allows users to generate invoices, manage billing items, and track customer details efficiently. Designed with an intuitive user interface, the app improves billing accuracy and workflow speed. The project is deployed on Vercel for fast performance and seamless access across devices.",
      // techStack: ["React", "Vite", "Tailwind", "Node", "Express", "Firebase", "SheetIntegration"],
      github: "https://github.com/adityakumar2511/Madhu-Rekha-Billing-Software-Frontend",
      live: "https://madhu-rekha-billing-software-fronte.vercel.app/",
    },

    // SkyPro Aviation Website Project
    {
      category: "WordPress",
      title: "SkyPro Aviation Website",
      image: skyproImg,
      description:
        "SkyPro Aviation Website is a professional aviation training academy site that highlights pilot training programs, DGCA ground classes, license conversion services, and aviation guidance. The responsive layout and structured menus help visitors explore courses, learn about the institute, and contact the academy easily to start pilot career preparation.",
      // techStack: ["WordPress", "Elementor", "Contact Form 7", "HTML", "CSS"],
      //github: "#",
      live: "https://skyproaviation.org/",
    },

    //CSSCP Website Project
    {
      category: "WordPress",
      title: "CSSCP Website",
      image: CSSCPImg,
      description:
        "Chandra Shekhar Singh College of Pharmacy Website is an educational institution site that showcases academic programs, campus information, and admission details for pharmacy courses. Built with a structured layout, it provides clear navigation for visitors to explore courses, faculty, facilities, and contact information.",
      techStack: ["WordPress", "Elementor", "WP Forms", "ACF", "HTML", "CSS"],
      //github: "#",
      live: "https://csscp.in/",
    },

    // BeBeyond Digital Shopify Landing Page Project
    {
      category: "Landing Page",
      title: "BeBeyond Digital Solutions",
      image: bebeyondLandingPageImg,
      description:
        "BeBeyond Digital Shopify Landing Page is a modern, responsive landing page designed to promote Shopify services. It showcases core offerings, client solutions, and calls-to-action with a clean layout and engaging visuals. The page guides visitors through value propositions and encourages lead generation with clear buttons and structured content.",
      //techStack: ["React", "vite", "Tailwind CSS", "Framer Motion", "SheetIntegration"],
      //github: "#",
      live: "https://shopify.bebeyond.digital/",
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
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8"
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
            <div className="w-full h-[300px] overflow-hidden relative">
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
                {/* Github Button — sirf tab dikhe jab link ho */}
                {project.github && project.github !== "#" && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-orange-600 rounded-full text-white hover:bg-orange-700 transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                )}

                {/* Live Button — sirf tab dikhe jab link ho */}
                {project.live && project.live !== "#" && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white rounded-full text-black hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                )}
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
