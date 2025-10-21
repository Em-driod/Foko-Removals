import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { FaPhone } from "react-icons/fa6";


// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

// --- Styling ---
const contactInfoStyle: CSSProperties = {
  color: "#343a40",
  fontSize: "1rem",
  fontWeight: "500",
};

// Define the address for the map link
const ADDRESS = "29 Middle Avenue, Loughborough LE11 5HZ";
// URL-encode the address for use in the Google Maps link
const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;


// --- Component ---
const Footer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // Define the submission endpoint
  
                                                                    

  return (
    <motion.div
      ref={sectionRef}
      className="w-full bg-[#007BFF] min-h-screen flex flex-col items-center justify-start py-12 px-4 border-white border-t-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div className="text-center mb-8" variants={itemVariants}>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-1">
          Get a Free Quote Today
        </h2>
        <p className="text-white/80 text-sm">Ready to move?</p>
      </motion.div>

      {/* Card Container */}
      <motion.div
        className="bg-white rounded-xl shadow-2xl p-6 md:p-12 max-w-5xl w-full"
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row justify-between gap-10 md:items-center">
          {/* Contact Info (Updated UI) */}
          <motion.div
            className="w-full md:w-5/12 space-y-6 pt-4 flex flex-col items-center md:items-start text-center md:text-left -ml-4 md:ml-0" 
            variants={containerVariants}
          >
            {/* Phone and WhatsApp */}
            <motion.div
              className="flex items-center space-x-3 justify-center md:justify-start"
              variants={itemVariants}
            >
              <a href="tel:+07920021955">
                <motion.div
                  className="bg-[#dbebff] backdrop-blur-md rounded-full p-2"
                  animate={{ rotate: [0, -8, 8, -8, 8, 0] }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2.5,
                  }}
                >
                  <FaPhone size={20} color="#067eff" />
                </motion.div>
              </a>
              <a href="https://wa.me/message/JP5CZNIVNQAHH1">
                <img
                  src="/whatsapp.png"
                  className="w-7 h-7 text-blue-800 bg-blue-100 rounded-full p-1"
                  alt="whatsapp"
                />
              </a>
              <span style={contactInfoStyle}>07920021955</span>
            </motion.div>

            {/* Email */}
            <motion.div
              className="flex items-center space-x-3 justify-center md:justify-start"
              variants={itemVariants}
            >
              <img
                src="/gmail.png"
                className="w-7 h-7 text-blue-800 bg-blue-100 rounded-full p-1"
                alt="gmail"
              />
              <a
                href="mailto:info@fokoremovals.co.uk"
                style={contactInfoStyle}
                className="hover:text-blue-600 transition"
              >
                Info@fokoremovals.co.uk
              </a>
            </motion.div>

            {/* Location (New Map Link) */}
            <motion.div
              className="flex items-start space-x-3 justify-center md:justify-start" 
              variants={itemVariants}
            >
              {/* Anchor tag wraps the icon and text to make it all clickable */}
              <a 
                href={MAP_LINK_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start space-x-3 w-fit mx-auto md:mx-0 group cursor-pointer"
              >
                <img
                  src="/location.png"
                  className="w-7 h-7 text-blue-800 bg-blue-100 rounded-full p-1 mt-1 flex-shrink-0 group-hover:bg-blue-200 transition"
                  alt="location"
                />
                <div style={contactInfoStyle} className="text-center md:text-left group-hover:text-blue-600 transition">
                  29 Middle Avenue, <br />
                  Loughborough <br />
                  LE11 5HZ
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-[#F3F8FE] backdrop-blur-md rounded-xl p-6 w-full max-w-lg lg:w-7/12 shadow-2xl border border-white/20 mx-auto"
            variants={itemVariants}
          >
              <h2 className="text-black text-2xl font-semibold mb-6 text-center">
                Client Contact Form
              </h2>

              {/* FORM ACTION URL IS THE ONLY LOGIC ON THE FORM TAG */}
              <form method="POST" action="https://submit-form.com/Aim9V36wq" >
                  <div className="mb-4">
                      <label
                          htmlFor="name"
                          className="text-black mb-1 block text-lg font-medium"
                      >
                          Name
                      </label>
                      <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          className="w-full bg-transparent border-b border-gray-400 text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 py-2 transition duration-200"
                          required
                      />
                  </div>

                  <div className="mb-4">
                      <label
                          htmlFor="email"
                          className="text-black mb-1 block text-lg font-medium"
                      >
                          Email
                      </label>
                      <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          className="w-full bg-transparent border-b border-gray-400 text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 py-2 transition duration-200"
                          required
                      />
                  </div>
                  <div className="mb-4">
                      <label
                          htmlFor="number"
                          className="text-black mb-1 block text-lg font-medium"
                      >
                          Phone Number
                      </label>
                      <input
                          id="number"
                          name="number"
                          type="number"
                          placeholder="Enter your phone number"
                          // NOTE: Corrected the text color here from 'text-white placeholder-gray-300' to 'text-black placeholder-gray-400' 
                          className="w-full bg-transparent border-b border-gray-400 text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 py-2 transition duration-200"
                          required
                      />
                  </div>

                  <div className="mb-4">
                      <label
                          htmlFor="subject"
                          className="text-black mb-1 block text-lg font-medium"
                      >
                          Subject
                      </label>
                      <input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Type the subject"
                          className="w-full bg-transparent border-b border-gray-400 text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 py-2 transition duration-200"
                      />
                  </div>

                  <div className="mb-6">
                      <label
                          htmlFor="message"
                          className="text-black mb-1 block text-lg font-medium"
                      >
                          Message
                      </label>
                      <textarea
                          id="message"
                          name="message"
                          placeholder="Type your message..."
                          className="w-full bg-transparent border-b border-gray-400 text-black placeholder-gray-400 focus:outline-none focus:border-blue-400 py-2 transition duration-200 resize-none"
                          rows={4}
                          required 
                      />
                  </div>

                  <motion.button
                      type="submit"
                      className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition duration-300 shadow-lg"
                      whileHover={{ scale: 1.05, y: -2 }}
                  >
                      Submit
                  </motion.button>
              </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Bottom (Unchanged UI) */}
      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <p className="text-white/60 text-xs">
          © 2025 FOKOREMOVALS Technology. All rights reserved.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;