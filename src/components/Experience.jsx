import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    company: "BeBeyond Digital Solutions",
    companyLink: "https://bebeyond.digital/",
    duration: "June 2025 – Present",
    location: "Prayagraj, Uttar Pradesh",
    points: [
      "Built and managed custom websites using WordPress and Elementor, ensuring smooth functionality and appealing design.",
      "Integrated React.js components to create interactive, dynamic, and seamless user interfaces.",
      "Collaborated with the team to develop responsive and SEO-friendly websites.",
    ],
  },
  {
    role: "Internship & Assistant Web Developer",
    company: "Help People To Save People Trust (NGO)",
    companyLink: "https://www.helppeopletosavepeopletrust.org/",
    duration: "January 2023 – January 2025",
    location: "Prayagraj, Uttar Pradesh",
    points: [
      "Developed interactive UI components using HTML, CSS, and JavaScript.",
      "Designed and implemented interactive forms to improve user engagement.",
      "Contributed to documentation, presentations, and design support using Microsoft Office tools.",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
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

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="max-w-7xl mx-auto px-6 lg:px-12 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Experience
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          My professional journey as a Web Developer, working with modern
          technologies like React.js, WordPress, and Tailwind CSS to build
          scalable and user-friendly digital products.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-gray-800 ml-4 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-10 group"
          >
            {/* Dot */}
            <div className="absolute -left-[8px] top-2 w-3 h-3 bg-orange-600 rounded-full shadow-lg shadow-orange-500/40 group-hover:scale-125 transition-transform" />

            {/* Card */}
            <motion.div
              whileHover={{
                y: -8,
                boxShadow: "0px 15px 35px rgba(255,115,0,0.25)",
              }}
              className="bg-gradient-to-br from-[#0b1220] to-[#0e1627] border border-gray-800 rounded-2xl p-8 transition-all"
            >
              {/* Top Row */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {exp.role}
                  </h3>

                  {/* Company + Link */}
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
                  >
                    {exp.company}
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 mt-4">
                {exp.points.map((point, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 6 }}
                    className="text-gray-300 leading-relaxed flex items-start gap-3"
                  >
                    <span className="mt-2 w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
