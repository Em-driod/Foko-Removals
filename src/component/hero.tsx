import { FaPhone } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
// 1. Import motion and necessary hooks from framer-motion
import { motion } from "framer-motion";

import type { Variants } from "framer-motion";

// Helper for the staggered animation on the left side
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child animation
    },
  },
};

// Helper for the individual item animation on the left side
const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

// Helper for the single animation on the right side (contact form)
const formVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 15,
      delay: 0.5, // Start a bit later than the left side
    },
  },
};

// **NOTE:** The inline JavaScript logic using `window.innerWidth` for responsiveness
// is generally discouraged in React, as it can cause hydration issues and is
// better handled using CSS/Tailwind classes or a `useLayoutEffect`/`useState` hook.
// I've kept the original logic structure but strongly recommend refactoring
// to a custom hook for production code.

const Hero = () => {
  return (
    // Wrap the main container with motion.div for potential page transitions later
    // or keep it as a standard div if only inner elements need animation
    <div className="relative min-h-screen flex flex-col lg:flex-row justify-center items-start w-full max-w-7xl mx-auto px-0 lg:px-0 py-16 gap-12 overflow-hidden">
      
      {/* Left side - Company Info - Staggered Fade-In from Left */}
      <motion.div
        className="text-white space-y-6 w-full lg:w-1/2 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Item 1: Trusted By */}
        <motion.p 
          className="text-sm flex items-center justify-center lg:justify-start gap-2"
          variants={itemVariants}
        >
          Trusted By 100+ <span className="text-yellow-400"> <img src="Group 3.png" alt="" /></span>
        </motion.p>
        
        {/* Item 2: Main Title (H1) */}
        <motion.h1
          className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          style={{
            fontWeight: 600,
            fontSize: '2.1rem', // ~33px on mobile
            lineHeight: '2.5rem', // ~40px on mobile
            letterSpacing: '-2px',
            // The original logic is kept, but again, refactoring is recommended
            ...(window.innerWidth >= 1024 ? {
              fontSize: '50px',
              lineHeight: '62px',
              letterSpacing: '-3px'
            } : {})
          }}
          variants={itemVariants}
        >
          <span className="text-blue-500">Foko Removals</span> – Your <br /> Move, Our Mission
        </motion.h1>

        {/* Item 3: Sub-text (P) */}
        <motion.p
          className="text-gray-200 text-base sm:text-lg md:text-xl"
          style={{
            fontFamily: 'Arial',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: window.innerWidth >= 1024 ? '18px' : '1rem',
            lineHeight: window.innerWidth >= 1024 ? '26px' : '1.5rem',
            letterSpacing: '0px',
          }}
          variants={itemVariants}
        >
          Reliable man & van and removal services, Based in <br className="hidden sm:block" /> Loughborough, serving across the UK.
        </motion.p>

        {/* Item 4: Contact Info (Container) */}
        <motion.div 
          className="space-y-3 pt-4"
          variants={itemVariants} // Apply animation to the whole contact block
        >
          <motion.p
            className="flex items-center gap-2 justify-center lg:justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <p className="bg-white/10 backdrop-blur-md rounded-full p-2 "><FaPhone size={20} /></p>
            <span className="text-lg font-medium ">07920021955</span>
          </motion.p>
          <motion.p
            className="flex items-center gap-2 justify-center lg:justify-start"
            whileHover={{ scale: 1.05 }}
          >
            <p className="bg-white/10 backdrop-blur-md rounded-full p-2 ">
              <IoIosMailUnread size={20} />
            </p> 
            <span className="text-lg font-medium">info@fokoremovalsltd.co.uk</span>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Right side - Contact Form - Scale-Up and Fade-In from Bottom */}
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-[95vw] max-w-md lg:w-[500px] shadow-2xl border border-white/20 mx-auto lg:mx-0"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">Client Contact Form</h2>
        <form>
          {/* Form fields remain standard */}
          <div className="mb-4">
            <label htmlFor="name" className="text-white mb-1 block text-lg font-medium">Name</label>
            <input 
              id="name"
              type="text" 
              placeholder="Enter your name" 
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 py-2 transition duration-200" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="text-white mb-1 block text-lg font-medium">Email</label>
            <input 
              id="email"
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 py-2 transition duration-200" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="text-white mb-1 block text-lg font-medium">Subject</label>
            <input 
              id="subject"
              type="text" 
              placeholder="Type the subject" 
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 py-2 transition duration-200" 
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="text-white mb-1 block text-lg font-medium">Message</label>
            <textarea 
              id="message"
              placeholder="Type your message..." 
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 py-2 transition duration-200 resize-none" 
              rows={4}>
            </textarea>
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
  );
};

export default Hero;