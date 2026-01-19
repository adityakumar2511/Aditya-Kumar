import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-500 border border-gray-800/50 mt-20">
      <p className="text-white">
        © {new Date().getFullYear()} Aditya Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
