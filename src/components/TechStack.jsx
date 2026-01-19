import React from "react";

const TechStack = () => {
  const techs = [
    "HTML5",
    "CSS",
    "Javascript",
    "Node.js",
    "React",
    "Git",
    "Github",
    "Python",
    "Tailwind",
  ];

  return (
    <div className="w-full bg-[#161b22] py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {techs.map((tech) => (
            <span
              key={tech}
              className="text-gray-500 font-bold uppercase tracking-widest hover:text-orange-500 transition-colors cursor-default text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
