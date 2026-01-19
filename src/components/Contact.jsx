import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false); // 👈 loading state

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSending) return; // extra safety

    setIsSending(true); // 👈 disable button

    emailjs
      .sendForm(
        "service_dszwjie",     // Service ID
        "template_qh57j6j",   // Template ID
        formRef.current,
        "Af3FOI5oPrYL9UlFn"   // Public Key
      )
      .then(
        () => {
          alert("Message sent successfully! ✅");
          formRef.current.reset();
          setIsSending(false); // 👈 re-enable button
        },
        (error) => {
          alert("Failed to send message ❌");
          console.error("EmailJS Error:", error.text);
          setIsSending(false); // 👈 re-enable button
        }
      );
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 lg:px-12 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* Left Section */}
        <motion.div variants={containerVariants} className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Let's Talk
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Have a project in mind or just want to connect? I’m always open to
              discussing new ideas, creative concepts, and exciting
              opportunities. Let’s build something great together.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={containerVariants} className="space-y-6">
            {[
              { icon: <Mail size={24} />, label: "Email", value: "adityak4724@gmail.com" },
              { icon: <Phone size={24} />, label: "Phone", value: "+91 9621195498" },
              { icon: <MapPin size={24} />, label: "Location", value: "Prayagraj / India" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-4 bg-[#161b22] rounded-full border border-gray-800 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                    {item.label}
                  </p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex items-center gap-5 pt-4">
            <a
              href="https://www.linkedin.com/in/aditya-kumar-195880264/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161b22] border border-gray-800 rounded-full text-blue-500 hover:bg-blue-600 hover:text-white transition-all"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="https://github.com/adityakumar2511"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161b22] border border-gray-800 rounded-full text-gray-300 hover:bg-black hover:text-white transition-all"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://wa.me/919621195498"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#161b22] border border-gray-800 rounded-full text-green-500 hover:bg-green-600 hover:text-white transition-all"
            >
              <FaWhatsapp size={30} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          variants={itemVariants}
          className="p-8 bg-[#161b22] rounded-3xl border border-gray-800 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                disabled={isSending}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                disabled={isSending}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Subject</label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Project Inquiry"
              className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
              disabled={isSending}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Message</label>
            <textarea
              rows={4}
              name="message"
              required
              placeholder="Tell me about your project..."
              className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
              disabled={isSending}
            />
          </div>

          <motion.button
            whileHover={!isSending ? { scale: 1.04 } : {}}
            whileTap={!isSending ? { scale: 0.95 } : {}}
            type="submit"
            disabled={isSending}
            className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2
              ${isSending
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700 text-white"}
            `}
          >
            {isSending ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
