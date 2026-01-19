import React from "react";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiBootstrap,
    SiTailwindcss,
    SiGit,
    SiGithub,
    SiPython,
    SiWordpress,
    SiElementor,
    SiShopify,
    SiFirebase,
    SiNodedotjs,
} from "react-icons/si";

/* ------------------ Animation Variants ------------------ */
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const Skills = () => {
    const skills = [
        { name: "HTML", icon: <SiHtml5 size={40} />, gradient: "from-orange-400 via-red-500 to-pink-500" },
        { name: "CSS", icon: <SiCss3 size={40} />, gradient: "from-blue-400 via-cyan-500 to-teal-400" },
        { name: "JavaScript", icon: <SiJavascript size={40} />, gradient: "from-yellow-300 via-yellow-400 to-amber-500" },
        { name: "React", icon: <SiReact size={40} />, gradient: "from-cyan-300 via-blue-400 to-indigo-500" },
        { name: "Bootstrap", icon: <SiBootstrap size={40} />, gradient: "from-purple-400 via-violet-500 to-purple-600" },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={40} />, gradient: "from-teal-300 via-cyan-400 to-blue-500" },
        { name: "Java", icon: <FaJava size={40} />, gradient: "from-red-400 via-orange-500 to-amber-600" },
        { name: "Git", icon: <SiGit size={40} />, gradient: "from-orange-500 via-red-600 to-rose-600" },
        { name: "GitHub", icon: <SiGithub size={40} />, gradient: "from-gray-400 via-slate-500 to-gray-600" },
        { name: "Python", icon: <SiPython size={40} />, gradient: "from-blue-400 via-yellow-400 to-blue-600" },
        { name: "WordPress", icon: <SiWordpress size={40} />, gradient: "from-blue-500 via-blue-600 to-indigo-600" },
        { name: "Elementor", icon: <SiElementor size={40} />, gradient: "from-pink-400 via-rose-500 to-red-500" },
        { name: "Shopify", icon: <SiShopify size={40} />, gradient: "from-green-400 via-emerald-500 to-teal-600" },
        { name: "Firebase", icon: <SiFirebase size={40} />, gradient: "from-yellow-400 via-orange-500 to-red-500" },
        { name: "Node.js", icon: <SiNodedotjs size={40} />, gradient: "from-green-500 via-lime-600 to-emerald-600" },
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background Circles */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10"
            >
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white">
                        Skills & Technologies
                    </h2>
                    <p className="text-purple-200 max-w-2xl mx-auto text-lg">
                        I work with a variety of modern technologies and tools to build
                        high-quality digital products.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -15, scale: 1.08, rotate: 2 }}
                            className="group relative flex flex-col items-center justify-center space-y-3 p-6
                                       bg-white/10 backdrop-blur-lg rounded-2xl
                                       border border-white/20
                                       transition-all duration-300
                                       hover:bg-white/20 hover:border-white/40
                                       hover:shadow-2xl cursor-pointer overflow-hidden"
                        >
                            {/* Gradient Background on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>

                            {/* Icon */}
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 200, duration: 0.6 }}
                                className={`relative z-10 p-5 rounded-xl bg-gradient-to-br ${skill.gradient} text-white shadow-lg`}
                            >
                                {skill.icon}
                            </motion.div>

                            {/* Label */}
                            <span className="relative z-10 text-white font-bold text-center tracking-tight text-sm
                                           group-hover:scale-110 transition-transform duration-300">
                                {skill.name}
                            </span>

                            {/* Glow Effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${skill.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Skills;