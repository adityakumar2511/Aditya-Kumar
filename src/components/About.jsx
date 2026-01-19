import React, { useEffect, useState } from "react";
import { Layout, Smartphone, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ------------------ CountUp Component ------------------ */
const CountUp = ({ end, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ------------------ Variants ------------------ */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/* ------------------ About Component ------------------ */
const About = () => {
  const services = [
    {
      title: "Website Development",
      icon: <Layout className="text-orange-500" size={24} />,
      description: "Building modern, high-performance web applications.",
    },
    {
      title: "Software Development",
      icon: <Smartphone className="text-orange-500" size={24} />,
      description: "Building reliable and scalable software solutions with clean code.",
    },
    {
      title: "Website Hosting",
      icon: <Globe className="text-orange-500" size={24} />,
      description: "Reliable deployment and maintenance solutions.",
    },
  ];

  const stats = [
    { label: "Completed Projects", value: 120, suffix: "+" },
    { label: "Client satisfaction", value: 95, suffix: "%" },
    { label: "Years of experience", value: 5, suffix: "+" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-6 lg:px-12 py-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT COLUMN */}
        <div className="relative pl-12 space-y-12">
          <div className="absolute left-0 top-6 bottom-14 w-0.5 bg-gray-800"></div>

          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 8 }}
              className="relative group"
            >
              {/* Dot */}
              <motion.div
                whileHover={{ scale: 1.4 }}
                className="absolute -left-[54px] top-1/2 -translate-y-1/2
                           w-3 h-3nd h-3 bg-gray-800 border-2 border-[#0d1117]
                           rounded-full group-hover:bg-orange-500
                           transition-colors"
              />

              <div className="flex items-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="p-4 bg-[#161b22] rounded-xl border-2 border-gray-800
                             group-hover:border-orange-500 transition-all"
                >
                  {service.icon}
                </motion.div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1
                                 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <motion.div variants={containerVariants} className="space-y-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              About me
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
              I am a passionate web developer focused on building modern, responsive, and high-performance web applications. My primary skills include React.js, Tailwind CSS, and WordPress, with a strong emphasis on clean UI and smooth user experience. <br/>I also have  knowledge of the MERN stack (MongoDB,Firebase Express, React, Node.js) and am continuously working to strengthen my backend and full-stack development skills. I enjoy learning new technologies and turning ideas into functional, user-friendly digital solutions.
            </p>
          </motion.div>

          {/* STATS WITH COUNTING */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-gray-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        

      </div>
      
    </motion.div>

    
  );
};

export default About;
