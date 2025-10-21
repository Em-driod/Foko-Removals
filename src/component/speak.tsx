import { motion } from "framer-motion";

import type { Variants } from "framer-motion";
import type { CSSProperties, FC } from 'react';

// --- Styling Constants ---

const featureTextStyle: CSSProperties = {
  fontSize: '1rem',
  lineHeight: '1.6',
  color: '#495057',
  maxWidth: '450px',
  textAlign: 'left',
};

const emphasisStyle: CSSProperties = {
  fontWeight: 'bold',
  color: '#1a1a1a',
  display: 'block',
};

// --- Animation Variants ---

const textVariant: Variants = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const imageVariant: Variants = {
  hidden: { x: 80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut', delay: 0.3 },
  },
};

// --- Component ---

const Speak: FC = () => {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: '36px',
            lineHeight: '100%',
            letterSpacing: '-0.06em',
            textAlign: 'center',
          }}
        >
          Speak with our experienced <br /> team at{' '}
          <span className="text-[#1e88e5]">Fokoremovals</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm text-[#495057] mb-1"
        >
          We are available 24/7, we work round the clock.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm text-[#495057] mb-12"
        >
          Your Request, We Answer
        </motion.p>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-center md:justify-between md:gap-6">
          {/* Left Column: Text */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-5/12 space-y-10 text-center ml-2 md:text-left pt-12 md:pt-0"
          >
            <p style={featureTextStyle}>
              Our friendly, knowledgeable staff are here to answer your questions,
              plan your move, and make sure everything runs smoothly. Whether
              you're relocating your home or business, we'll guide you through
              every step and tailor our services to your needs.
            </p>

            <p style={featureTextStyle}>
              <span style={emphasisStyle}>Exceptional Service Quality:</span> We
              combine professional handling, punctual arrivals, and flexible
              options to deliver smooth, stress-free moves every time.
            </p>

            <p style={featureTextStyle}>
              <span style={emphasisStyle}>Outstanding Customer Care:</span> Our
              responsive, friendly team listens, advises, and keeps you updated
              at every stage to ensure your complete satisfaction.
            </p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-9/12 flex justify-center md:justify-center pt-12 md:pt-0"
          >
            <img
              src="/gpt.png"
              alt="Service"
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
              }}
              className="w-48 h-64 md:w-[400px] md:h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Speak;
