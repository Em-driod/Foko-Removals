import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedBackgroundProps {
  images: string[];
  duration?: number; // ms
  className?: string;
}

const AnimatedBackground = ({ images, duration = 4000, className = '' }: AnimatedBackgroundProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, [images, duration]);

  return (
    <div className={`absolute inset-0 w-full h-full -z-10 ${className}`} style={{overflow: 'hidden'}}>
      <AnimatePresence mode="sync">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover absolute inset-0"
        />
      </AnimatePresence>
    </div>
  );
};

export default AnimatedBackground;
