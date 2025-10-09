import type { CSSProperties } from 'react';
import { useState, useEffect, useRef } from 'react'; // Added useRef
import { motion, useInView, type Variants } from 'framer-motion'; // Added motion, useInView, Variants
import './why.css';

// Define the mobile breakpoint value for consistency
const MD_BREAKPOINT = 768;

// --- FRAMER MOTION VARIANTS ---

// Variants for the entire feature grid container (for staggering)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each card animation
      delayChildren: 0.2, // Initial delay for the first card
    },
  },
};

// Variants for the individual feature cards
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
    },
  },
};

// Variants for the Header text (re-using the header animation idea)
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Why = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MD_BREAKPOINT : true
  );

  // 1. Ref and InView hook for the Feature Rows Container
  const featuresRef = useRef(null);
  // Trigger animation when 20% of the container is visible
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });

  // 2. Ref and InView hook for the Header section
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 }); // Trigger when 50% of header is visible

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < MD_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Responsive Card Styles ---
  // ... (Card styles remain the same for non-animated props)
  const cardContentStyle: CSSProperties = {
    background: 'white',
    border: 'lightgray solid 0.3px',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: isMobile
      ? '0 8px 32px 0 rgba(37, 99, 235, 0.35), 0 1.5px 8px 0 rgba(37, 99, 235, 0.15)'
      : 'none',
    height: '350px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: isMobile ? 'center' : 'left',
  };

  const featureHeaderStyle: CSSProperties = {
    fontFamily: 'inter',
    fontWeight: 700,
    fontSize: '21px',
    color: '#1a1a1a',
    lineHeight: '32px',
    letterSpacing: '3%',
  };

  const featureDescriptionStyle: CSSProperties = {
    fontSize: '0.9em',
    color: '#555',
    lineHeight: '1.4',
  };

  // --- Feature 1 Specific Styles (Unchanged) ---
  const ImageContainerStyle: CSSProperties = {
    position: 'relative',
    height: '220px',
    background: 'white',
    borderRadius: '8px',
    marginBottom: '8px',
  };

  const RoadImageStyle: CSSProperties = {
    position: 'absolute',
    bottom: '0',
    left: '-5px',
    width: '100%',
    height: 'auto',
    top: '-20px',
    transform: 'rotate(2deg) scale(1.2) translateY(30px)',
    objectFit: 'cover',
    opacity: 100,
    borderRadius: '8px',
  };

  const TruckImageStyle: CSSProperties = {
    position: 'absolute',
    bottom: '40px',
    right: '-13%',
    top: '-100px',
    width: '280px',
    height: 'auto',
    zIndex: '40',
    transform: 'rotate(1deg)',
  };

  // --- Global Header/Text Styles (Unchanged) ---
  const headerStyles: CSSProperties = {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontStyle: 'medium',
    fontSize: isMobile ? '2rem' : '50px',
    lineHeight: isMobile ? '2.5rem' : '67px',
    letterSpacing: isMobile ? '-1.5px' : '-3px',
  };

  const textStyles: CSSProperties = {
    fontFamily: 'Arial',
    fontWeight: 400,
    fontStyle: 'regular',
    fontSize: isMobile ? '0.95rem' : '18px',
    lineHeight: isMobile ? '1.4rem' : '28px',
    letterSpacing: '0px',
  };

  // --- Feature 3 Card Content (Complex visual elements remain left-aligned inside) ---
  const featureThreeImageContent = (
    <div
      style={{
        position: 'relative',
        height: '340px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        textAlign: 'initial',
      }}
    >
      {/* First Stack of 3 Cards - FLOATING ABOVE */}
      <div
        style={{
          position: 'absolute',
          top: '-10px',
          left: '50%',
          transform: 'translateX(-50%)',
          height: '110px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '120%',
        }}
      >
        {[0, 1, 2].map((i) => {
          let rotation = 0;
          let extraTop = 0;
          if (i === 0) {
            rotation = 9;
            extraTop = -15;
          }
          if (i === 1) {
            rotation = 0;
            extraTop = 0;
          }
          if (i === 2) {
            rotation = 9;
            extraTop = 20;
          }
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `${i * 10 + extraTop}px`,
                left: '50%',
                transform: `translateX(-50%) rotate(${rotation}deg)`,
                width: '85%',
                maxWidth: '300px',
                height: '50px',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 6px 18px 0 rgba(100,100,100,50)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                zIndex: 10 - i,
                opacity: i === 0 ? 1 : 0.85 - i * 0.2,
                filter: 'none',
              }}
            >
              <img
                src={i === 0 ? '/01.png' : `/${String(i + 1).padStart(3, '0')}.png`}
                alt="Service"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '8px',
                }}
              />
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: '0.75em',
                    color: '#222',
                    lineHeight: '1.2',
                  }}
                >
                  {i === 0
                    ? 'Office Relocations'
                    : i === 1
                    ? 'House Removal'
                    : 'Man & Van'}
                </div>
                <div style={{ fontSize: '0.65em', color: '#777' }}>
                  {i === 0 ? 'Hathern' : i === 1 ? 'Loughborough' : 'Quorn'}
                </div>
              </div>
              <div
                style={{ fontWeight: 500, color: '#7a7a7a', fontSize: '0.7em' }}
              >
                Premium
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '130px' }}>
        <p
          style={{
            textAlign: 'left',
            fontSize: '0.75em',
            color: '#666',
            margin: '10px 0 12px 15px',
          }}
        >
          Last week
        </p>

        {/* Last Two Cards */}
        <div
          style={{
            position: 'relative',
            height: '65px',
            marginBottom: '20px',
            width: '100%',
          }}
        >
          {[0, 1].map((i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `${i * 10}px`,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '85%',
                maxWidth: '240px',
                height: '50px',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 6px 18px 0 rgba(100,100,100,0.18)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                zIndex: 10 - i,
                opacity: i === 0 ? 1 : 0.85,
                filter: i === 0 ? 'none' : 'blur(1px)',
              }}
            >
              <img
                src={`/${String(i + 4).padStart(3, '0')}.png`}
                alt="Service"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '8px',
                }}
              />
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: '0.75em',
                    color: '#222',
                    lineHeight: '1.2',
                  }}
                >
                  {i === 0 ? 'Packing' : 'Storage'}
                </div>
                <div style={{ fontSize: '0.65em', color: '#777' }}>
                  {i === 0 ? 'Barrow upon Soar' : 'Kegworth'}
                </div>
              </div>
              <div
                style={{ fontWeight: 500, color: '#7a7a7a', fontSize: '0.7em' }}
              >
                Premium
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- Render Component ---

  return (
    <div className="w-full bg-white px-4 md:px-28 py-16">
      {/* Header and Introduction - Animated */}
      <motion.div
        ref={headerRef}
        className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 max-w-7xl mx-auto text-center md:text-left"
        variants={headerVariants}
        initial="hidden"
        animate={isHeaderInView ? 'visible' : 'hidden'}
      >
        <div className="space-y-4 max-w-xl mx-auto md:mx-0">
          <motion.h2 // Animate the H2 tag directly
            className="font-bold text-gray-900 text-2xl xs:text-3xl sm:text-4xl md:text-5xl"
            style={headerStyles}
          >
            Why choose <br />
            <span className="text-blue-600">Fokoremovals</span>
          </motion.h2>
          <motion.p // Animate the P tag directly
            className="text-[#7E8BA5] text-sm xs:text-base sm:text-lg"
            style={textStyles}
          >
            Your trusted partner for stress-free moves <br />
            across the Uk
          </motion.p>
        </div>
        <div
          className="max-w-xs text-[#7E8BA5] text-sm xs:text-base sm:text-lg mx-auto md:mx-0 hidden md:block"
          style={textStyles}
        >
          At Fokoremovalsltd, we combine <br />
          professionalism, reliability and care <br />
          to make every move smooth and <br />
          hassle-free.
        </div>
      </motion.div>
      
      {/* --- */}

      {/* First Row - 3 Features (Animated Container) */}
      <motion.div
        ref={featuresRef} // Attach ref to the main container for scroll detection
        className="why-feature-container"
        variants={containerVariants}
        initial="hidden"
        animate={isFeaturesInView ? 'visible' : 'hidden'} // Trigger stagger animation on scroll
        style={{
          display: 'grid',
          // UPDATED: Increased min width for wider cards (320px -> 350px)
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: isMobile ? '64px' : '20px',
          marginBottom: '30px',
          marginTop: '80px',
        }}
      >
        {/* Feature 1: Fully Insured */}
        <motion.div
          style={{
            ...cardContentStyle,
            // REMOVED/UPDATED: Removing maxWidth to allow card to fill grid space
            // maxWidth: '400px',
            margin: '0 auto',
            overflow: 'visible',
          }}
          variants={itemVariants} // Apply item variant
          whileHover={{ scale: 1.02 }}
        >
          <div style={ImageContainerStyle}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                borderRadius: '8px',
              }}
            >
              <img
                src="/road.png"
                alt="Angled road"
                style={RoadImageStyle}
              />
            </div>
            <img
              src="/truck.png"
              alt="Moving Truck"
              style={TruckImageStyle}
            />
          </div>
          <div>
            <h3 style={featureHeaderStyle}>Fully Insured Goods in Transit</h3>
            <p style={featureDescriptionStyle}>
              Enjoy complete peace of mind knowing your items protected
              throughout the move.
            </p>
          </div>
        </motion.div>

        {/* Feature 2: Professional, Polite, and Punctual */}
        <motion.div
          style={{
            ...cardContentStyle,
            // REMOVED/UPDATED: Removing maxWidth to allow card to fill grid space
            // maxWidth: '400px',
            margin: '0 auto',
          }}
          variants={itemVariants} // Apply item variant
          whileHover={{ scale: 1.02 }}
        >
          <div
            style={{
              position: 'relative',
              height: '220px',
              background: 'lightgray url(/bgp.png) center/cover no-repeat',
              borderRadius: '8px',
              marginBottom: '8px',
              overflow: 'visible',
            }}
          >
            <img
              src="/courier.png"
              alt="Mover Character"
              style={{
                position: 'absolute',
                top: '-110px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                zIndex: '2',
              }}
            />
          </div>
          <div>
            <h3 style={featureHeaderStyle}>
              Professional, Polite, and Punctual
            </h3>
            <p style={featureDescriptionStyle}>
              Our experienced team delivers a courteous, timely, and hassle-free
              service every time.
            </p>
          </div>
        </motion.div>

        {/* Feature 3: Affordable and Flexible Options */}
        <motion.div
          style={{
            ...cardContentStyle,
            // REMOVED/UPDATED: Removing maxWidth to allow card to fill grid space
            // maxWidth: '400px',
            margin: '0 auto',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            textAlign: 'initial',
          }}
          variants={itemVariants} // Apply item variant
          whileHover={{ scale: 1.02 }}
        >
          {featureThreeImageContent}
          <div
            style={{
              marginTop: '8px',
              textAlign: isMobile ? 'center' : 'left',
            }}
          >
            <h3 style={featureHeaderStyle}>
              Affordable and Flexible Options
            </h3>
            <p style={featureDescriptionStyle}>
              Choose a plan that fits your schedule and budget without
              compromising on quality
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* --- */}

      {/* Second Row - 2 Features (Animated Container - NOTE: They inherit the animation from the *first* featureRef) */}
      <motion.div
        className="why-feature-row"
        variants={containerVariants}
        initial="hidden"
        // This second row will animate at the same time as the first one,
        // using the same in-view trigger for simplicity, ensuring both are motion components.
        animate={isFeaturesInView ? 'visible' : 'hidden'} 
        style={{
          display: 'grid',
          // UPDATED: Increased min width for wider cards (320px -> 350px)
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: isMobile ? '64px' : '20px',
        }}
      >
        {/* Feature 4: Your Belongings Handled with Care */}
        <motion.div 
          style={{ ...cardContentStyle, minHeight: '350px' }}
          variants={itemVariants} // Apply item variant
          whileHover={{ scale: 1.02 }}
        >
          <div
            style={{
              height: '220px',
              background: 'lightgray',
              borderRadius: '8px',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
              overflow: 'hidden',
            }}
          >
            <img
              src="/Shop.png"
              alt="Shop"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>
          <h3 style={featureHeaderStyle}>
            Your Belongings Handled with Care
          </h3>
          <p style={featureDescriptionStyle}>
            We treat your possessions as if they were our own, ensuring safe
            transport at every stage.
          </p>
        </motion.div>

        {/* Feature 5: Based in Loughborough, Operating UK-Wide */}
        <motion.div 
          style={{ ...cardContentStyle, minHeight: '350px' }}
          variants={itemVariants} // Apply item variant
          whileHover={{ scale: 1.02 }}
        >
          <div
            style={{
              height: '220px',
              background: 'lightgray',
              borderRadius: '8px',
              marginBottom: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
              overflow: 'hidden',
            }}
          >
            <img
              src="/map.png"
              alt="map"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>
          <h3 style={featureHeaderStyle}>
            Based in Loughborough, Operating UK-Wide
          </h3>
          <p style={featureDescriptionStyle}>
            Local expertise with national reach wherever you're moving, we've got
            you covered.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Why;