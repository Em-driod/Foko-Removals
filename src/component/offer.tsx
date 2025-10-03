import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";

// Animation Variants for the Header Text
const headerVariants: Variants = { // Explicitly type as Variants for consistency
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // Valid cubic-bezier array
    },
  },
};

// Animation Variants for the Cards Container (to stagger the children)
const cardContainerVariants: Variants = { // Explicitly type as Variants
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card animation
      delayChildren: 0.2,    // Initial delay for the first card
    },
  },
};

// Animation Variants for the Individual Cards
// Use a type structure that aligns with the object for safety, 
// or simply let TypeScript infer the type (as shown here for simplicity)
const cardItemVariants = { 
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // The 'spring' type is a string literal, 'as const' makes it strict.
      // Keeping 'as const' is valid if you prefer a strict string type here.
      type: "spring" as const, 
      stiffness: 80,
      damping: 15,
    },
  },
};

const Offer = () => {
  // 1. Ref and InView hook for the Header section
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 }); // Trigger when 50% of header is visible

  // 2. Ref and InView hook for the Cards section
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.2 }); // Trigger when 20% of cards are visible

  return (
    <div className="w-full bg-white px-4 md:px-28 py-16 ">
      
      {/* Header Section (Animated) */}
      <motion.div
        ref={headerRef}
        className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 max-w-7xl mx-auto text-center md:text-left"
        variants={headerVariants}
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
      >
        <div className="space-y-4 max-w-xl mx-auto md:mx-0">
          <motion.h2 // Animate the H2 tag directly
            className="font-bold text-gray-900 text-2xl xs:text-3xl sm:text-4xl md:text-5xl"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontStyle: 'medium',
              fontSize: '2rem',
              lineHeight: '2.5rem',
              letterSpacing: '-1.5px',
              // Note: For production, refactor window.innerWidth logic using a proper hook
              ...(typeof window !== 'undefined' && window.innerWidth >= 768 ? {
                fontSize: '50px',
                lineHeight: '67px',
                letterSpacing: '-3px',
              } : {})
            }}
          >
            What we offer at <br />
            <span className="text-blue-600">Fokoremovals</span>
          </motion.h2>
          <motion.p // Animate the P tag directly
            className="text-[#7E8BA5] text-sm xs:text-base sm:text-lg"
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: (typeof window !== 'undefined' && window.innerWidth >= 768) ? '18px' : '0.95rem',
              lineHeight: (typeof window !== 'undefined' && window.innerWidth >= 768) ? '28px' : '1.4rem',
              letterSpacing: '0px',
            }}
          >
            Trusted experts in home and office relocations, <br />
            furniture collection and timely delivery
          </motion.p>
        </div>
        <div
          className="max-w-xs text-[#7E8BA5] text-sm xs:text-base sm:text-lg mx-auto md:mx-0 hidden md:block"
          style={{
            fontFamily: 'Arial',
            fontWeight: 400,
            fontStyle: 'regular',
            fontSize: (typeof window !== 'undefined' && window.innerWidth >= 768) ? '18px' : '0.95rem',
            lineHeight: (typeof window !== 'undefined' && window.innerWidth >= 768) ? '28px' : '1.4rem',
            letterSpacing: '0px',
          }}
        >
          More than 100 Homes, offices, <br />
          companies have used our services <br />
          during the years.
        </div>
      </motion.div>

      {/* --- */}

      {/* Cards Section (Animated Stagger) */}
      <motion.div
        ref={cardsRef} // Attach ref to the grid container
        className="grid grid-cols-1 gap-8 mt-12 max-w-7xl mx-auto md:grid-cols-3"
        variants={cardContainerVariants}
        initial="hidden"
        animate={isCardsInView ? "visible" : "hidden"} // Trigger based on InView hook
      >
        
        {/* Card 1 */}
        <motion.div
          className="bg-white rounded-xl overflow-hidden transition flex flex-col w-full h-[460px]"
          style={{
            boxShadow: '0 8px 32px 0 rgba(37, 99, 235, 0.35), 0 1.5px 8px 0 rgba(37, 99, 235, 0.15)',
            border: '0px #2563eb',
          }}
          variants={cardItemVariants} // Use item variant for staggered animation
        >
          {/* NOTE: Image paths are assumed to be correct in your project */}
          <img
            src="/adam mover 1.png"
            alt="Removals"
            className="w-full h-[70%] object-cover" 
          />
          <div className="p-6 space-y-2 flex flex-col flex-grow justify-start h-[30%] text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              House Removals
            </h3>
            <p className="text-gray-600 text-sm">
              Trusted experts in home and office furniture collection and timely delivery.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white rounded-xl overflow-hidden transition flex flex-col w-full h-[460px]"
          style={{
            boxShadow: '0 8px 32px 0 rgba(37, 99, 235, 0.35), 0 1.5px 8px 0 rgba(37, 99, 235, 0.15)',
            border: '0px #2563eb',
          }}
          variants={cardItemVariants}
        >
          <img
            src="relocate.png"
            alt="Office Relocation"
            className="w-full h-[70%] object-cover" 
          />
          <div className="p-6 space-y-2 flex flex-col flex-grow justify-start h-[30%] text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              Office Relocation
            </h3>
            <p className="text-gray-600 text-sm">
              Seamless moves that minimize downtime and keep your business running smoothly.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white rounded-xl overflow-hidden transition flex flex-col w-full h-[460px]"
          style={{
            boxShadow: '0 8px 32px 0 rgba(37, 99, 235, 0.35), 0 1.5px 8px 0 rgba(37, 99, 235, 0.15)',
            border: '0px #2563eb',
          }}
          variants={cardItemVariants}
        >
          <img
            src="move.png"
            alt="Man & Van Services"
            className="w-full h-[70%] object-cover" 
          />
          <div className="p-6 space-y-2 flex flex-col flex-grow justify-start h-[30%] text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              Man & Van Services
            </h3>
            <p className="text-gray-600 text-sm">
              Flexible transport solutions for small or large moves at short notice.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* --- */}

      {/* Footer Link (Animated - Simple Fade Up) */}
      <motion.div 
        className="mt-10 max-w-7xl mx-auto flex justify-center md:justify-end"
        variants={headerVariants} // Re-use the header animation for the footer link
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"} // Using the same visibility check as the header
      >
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline inline-flex items-center gap-2"
        >
          See All What We Offer →
        </a>
      </motion.div>
    </div>
  );
};

export default Offer;