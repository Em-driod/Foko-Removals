import { FaPhone } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -40, rotate: -3 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 15, mass: 0.8 },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, rotate: 2 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.4 },
  },
};

const Hero = () => {
  // ✅ Corrected environment variable
  const formId = import.meta.env.VITE_FORMSPREE_ID || "xpwanamm"; // fallback if .env missing

  const [state, handleSubmit] = useForm(formId);


  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row justify-center items-start w-full max-w-7xl mx-auto px-0 py-16 gap-12 overflow-hidden lg:mt-4">

      {/* Left side */}
      <motion.div
        className="text-white space-y-6 w-full lg:w-1/2 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="text-sm flex items-center justify-center lg:justify-start gap-2" variants={itemVariants}>
          Trusted By 100+ <span className="text-yellow-400"><img src="Group 3.png" alt="" /></span>
        </motion.p>

        <motion.h1
          className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          style={{
            fontWeight: 600,
            fontSize: '2.1rem',
            lineHeight: '2.5rem',
            letterSpacing: '-2px',
            ...(window.innerWidth >= 1024
              ? { fontSize: '50px', lineHeight: '62px', letterSpacing: '-3px' }
              : {}),
          }}
          variants={itemVariants}
        >
          <span className="text-blue-500">Foko Removals</span> – Your <br /> Move, Our Mission
        </motion.h1>

        <motion.p
          className="text-[#C5CFE3] text-base sm:text-lg md:text-xl"
          style={{
            fontFamily: 'Arial',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: window.innerWidth >= 1024 ? '18px' : '1rem',
            lineHeight: window.innerWidth >= 1024 ? '26px' : '1.5rem',
          }}
          variants={itemVariants}
        >
          Reliable man & van and removal services, Based in <br className="hidden sm:block" /> Loughborough, serving across the UK.
        </motion.p>

        <motion.div className="space-y-10 pt-4" variants={itemVariants}>
          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-full p-2"
              animate={{ rotate: [0, -8, 8, -8, 8, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.5 }}
            >
              <FaPhone size={20} />
            </motion.div>
            <motion.span
              className="text-lg font-medium"
              animate={{ x: [0, -1, 1, -1, 1, 0] }}
              transition={{ duration: 0.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.8 }}
            >
              07920021955
            </motion.span>
          </div>

          <div className="flex items-center gap-2 justify-center lg:justify-start">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-full p-2"
              animate={{ rotate: [0, -8, 8, -8, 8, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 3.5 }}
            >
              <IoIosMailUnread size={20} />
            </motion.div>
            <motion.span
              className="text-lg font-medium"
              animate={{ x: [0, -1, 1, -1, 1, 0] }}
              transition={{ duration: 0.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 3.8 }}
            >
              info@fokoremovalsltd.co.uk
            </motion.span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right side form */}
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-[95vw] max-w-md lg:w-[500px] shadow-2xl border border-white/20 mx-auto lg:mx-0"
        variants={formVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">Client Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-white mb-1 block text-lg font-medium">Name</label>
            <input
              id="name"
              name="name"
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
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 py-2 transition duration-200"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="text-white mb-1 block text-lg font-medium">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Type the subject"
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 py-2 transition duration-200"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="text-white mb-1 block text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 py-2 transition duration-200 resize-none"
              rows={4}
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Hero;
