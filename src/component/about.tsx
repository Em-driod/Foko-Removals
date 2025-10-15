import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

// Animation for the image container
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05, rotate: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 80,
      duration: 0.8,
    },
  },
};

// Staggered animation for the text content
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Animation for individual text elements
const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};


const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    // Main container with relative positioning for the absolute blue footer
    <motion.div
      ref={sectionRef}
      className=" w-full overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* 1. Image Container: Removed fixed height to allow the image's natural height to determine the size. */}
      <motion.div className="w-full relative" variants={imageVariants}>
        <img
          src="newabout.png"
          alt="Foko Removals Van with boxes"
          // w-full h-auto ensures the image displays fully without cropping or letterboxing.
          className="w-full h-auto"
        />
      </motion.div>

      {/* 2. Blue Footer Bar - ABSOLUTELY POSITIONED over the bottom of the image */}
      {/* Reduced padding for mobile: p-4 instead of p-6 */}
      <motion.div
        className=" bottom-0 left-0 right-0 bg-blue-600 text-white p-4 md:p-12 w-full "
        variants={textContainerVariants}
      >
        {/* Content Wrapper */}
        {/* flex-col ensures content stacks on mobile, md:flex-row makes it a row on desktop */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-end">
          <motion.div
            className="space-y-2 max-w-2xl"
            variants={textContainerVariants}
          >
            {/* The primary heading */}
            <motion.h2
              className="text-sm md:text-xl font-bold text-center md:text-left"
              style={{
                fontFamily: "inter",
                fontWeight: 500,
                fontStyle: "meduim",
                fontSize: "50px",
                lineHeight: "67px",
                letterSpacing: "0px",
              }}
              variants={textItemVariants}
            >
              About Us
            </motion.h2>

            {/* The description text */}
            <motion.p
              className="text-xs md:text-lg text-white/90 text-center md:text-left"
              style={{
                fontFamily: "Arial",
                fontWeight: 200,
                fontStyle: "Regular",
                fontSize: "14px", // smaller on mobile
                lineHeight: "22px",
                letterSpacing: "0px",
                ...(window.innerWidth >= 768
                  ? {
                      fontSize: "14px",
                      lineHeight: "32px",
                    }
                  : {}),
              }}
              variants={textItemVariants}
            >
              At Foko Removals, we're all about making your move smooth and
              stress-free. Whether it's a single item, full house, or office
              relocation — we've got you covered with a friendly team, fair
              prices, and full insurance for peace of mind.
            </motion.p>
          </motion.div>

          {/* Right-aligned text ("Reliable, Fast & Timely"): Added mt-2 for separation on mobile. */}
          <motion.p
            className="hidden md:block mt-2 md:mt-0 text-xs md:text-sm text-white/70"
            variants={textItemVariants}
          >
            Reliable, Fast & Timely
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;