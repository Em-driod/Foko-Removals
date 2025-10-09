import { motion, useInView } from 'framer-motion';
import type { Variants } from "framer-motion";
import { useRef } from 'react';
import type { CSSProperties } from 'react';
// 1. Import icons from react-icons/md instead of lucide-react
import { MdCall,} from 'react-icons/md';
import { IoIosMailUnread } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

// --- Styling Constants ---

const contactInfoStyle: CSSProperties = {
  color: '#343a40', // Dark text for contact details
  fontSize: '1rem',
  fontWeight: '500',
};

// --- Component ---

const Footer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    // Ensured full mobile width for the blue background container
    <motion.div
      ref={sectionRef}
      className="w-full bg-[#007BFF] min-h-screen flex flex-col items-center justify-start py-12 px-4"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      
      {/* Header Text */}
      <motion.div className="text-center mb-8" variants={itemVariants}>
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-1">
          Get a Free Quote Today
        </h2>
        <p className="text-white/80 text-sm">Ready to move?</p>
      </motion.div>

      {/* Main Container (White Card) */}
      <motion.div
        className="bg-white rounded-xl shadow-2xl p-6 md:p-12 max-w-5xl w-full"
        variants={containerVariants}
      >
        {/* FIX: Changed md:items-start to md:items-center to vertically center content on large screens */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:items-center"> 
          
          {/* Left Side: Contact Info - This is now vertically centered */}
          <motion.div className="w-full md:w-5/12 space-y-6 pt-4" variants={containerVariants}>
            <motion.div className="flex items-center space-x-3 " variants={itemVariants}>
              <MdCall
                className="w-7 h-7 text-blue-500   bg-blue-100 rounded-full p-1"
              /> <FaWhatsapp color='green'  size={20} />
              <span style={contactInfoStyle}>07920021955</span>
            </motion.div> 

            <motion.div className="flex items-center space-x-3" variants={itemVariants}>
              <p className="bg-blue-100 rounded-full  " >
                           <IoIosMailUnread size={20}  color='blue'  className="w-7 h-7 text-blue-500 rounded-full p-1"/>
                         </p> 
              <a
                href="mailto:info@fokoremovals.co.uk"
                style={contactInfoStyle}
                className="hover:text-blue-600 transition"
              >
                Info@fokoremovals.co.uk
              </a>
            </motion.div>

            <motion.div className="flex items-start space-x-3" variants={itemVariants}>
              <CiLocationOn
                className="w-7 h-7 text-blue-800  bg-blue-100 rounded-full p-1" size={20}
                style={{ marginTop: '24px' }}
              />
              <div style={contactInfoStyle}>
                29 Middle Avenue, <br />
                Loughborough <br />
                LE11 5HZ
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Client Contact Form - MOBILE OPTIMIZED */}
          <motion.div
            className="bg-[#F3F8FE] backdrop-blur-md rounded-xl p-6 w-full max-w-lg lg:w-7/12 shadow-2xl border border-white/20 mx-auto"
            variants={itemVariants}
          >
            <h2 className="text-black text-2xl font-semibold mb-6 text-center">Client Contact Form</h2>
            <form>
              
              <div className="mb-4">
                <label htmlFor="name" className="text-black mb-1 block text-base font-medium">Name</label>
                <input 
                  id="name"
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full border-b-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 py-2.5 transition duration-200" 
                  required 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="text-black mb-1 block text-base font-medium">Email</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full  border-b-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 py-2.5 transition duration-200" 
                  required 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="text-black mb-1 block text-base font-medium">Subject</label>
                <input 
                  id="subject"
                  type="text" 
                  placeholder="Type the subject" 
                  className="w-full  border-b-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 py-2.5 transition duration-200" 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="text-black mb-1 block text-base font-medium">Message</label>
                <textarea 
                  id="message"
                  placeholder="Type your message..." 
                  className="w-full  border-b-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 py-2.5 transition duration-200 resize-none h-24" 
                  rows={4}>
                </textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Submit 
              </motion.button >
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Copyright */}
      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <p className="text-white/60 text-xs">
          © 2025 FOKOREMOLDS Technology. All rights reserved.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Footer;