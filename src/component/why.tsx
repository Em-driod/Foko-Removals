import type { CSSProperties } from 'react';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import './why.css';

// Define the mobile breakpoint value for consistency
const MD_BREAKPOINT = 768;

// --- FRAMER MOTION VARIANTS ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 80,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
    },
  },
};

const Why = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MD_BREAKPOINT : true
  );

  const featuresRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < MD_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    fontWeight: 800,
    fontSize: isMobile ? '24px' : '22px',
    color: '#1a1a1a',
    lineHeight: '32px',
    letterSpacing: '3%',
  };

  const featureDescriptionStyle: CSSProperties = {
    fontSize: '0.9em',
    color: '#555',
    lineHeight: '1.4',
  };

  const OriginalImageContainerStyle: CSSProperties = {
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
    width: '300px',
    height: 'auto',
    zIndex: '40',
    transform: 'rotate(1deg)',
  };

  const TopAlignedImageContainerStyle: CSSProperties = {
    position: 'relative',
    height: '220px',
    // Re-added radius to the container
    borderRadius: '8px',
    marginBottom: '8px',
    width: 'calc(100% + 40px)',
    marginLeft: '-20px',
    marginRight: '-20px',
    marginTop: '-20px',
    overflow: 'hidden',
  };

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
            rotation = 0;
            extraTop = -16;
          }
          if (i === 1) {
            rotation = -9;
            extraTop = -1;
          }
          if (i === 2) {
            rotation = 0;
            extraTop = 25;
          }
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `${i * 10 + extraTop}px`,
                left: '50%',
                transform: `translateX(-50%) rotate(${rotation}deg)`,
                width: '95%',
                maxWidth: '340px',
                height: '70px',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 6px 18px 0 rgba(100,100,100,50)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                zIndex: 10 - i,
                opacity: i === 0 ? 1 : 2 - i * 0.2,
                filter: i > 0 ? 'blur(0.8px)' : 'none',
              }}
            >
              <img
                src={i === 0 ? '/01.png' : `/${String(i + 1).padStart(3, '0')}.png`}
                alt="Service"
                style={{
                  width: '38px',
                  height: '38px',
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
                <div
                  style={{ fontSize: '0.65em', color: '#777' }}
                  className="flex items-center"
                >
                  <img src="loc.png" className="w-3 h-3" alt="" />
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

        <div
          style={{
            position: 'relative',
            height: '70px',
            marginBottom: '20px',
            width: '100%',
          }}
        >
          {[0, 1].map((i) => {
            const baseTop = i === 0 ? 0 : 18;
            const rotation = i === 0 ? 2 : -4;
            const topPosition = `${baseTop}px`;

            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: topPosition,
                  left: '50%',
                  transform: `translateX(-50%) rotate(${rotation}deg)`,
                  transformOrigin: 'top center',
                  width: '100%',
                  maxWidth: '340px',
                  height: '70px',
                  background: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 6px 18px 0 rgba(100,100,100,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 6px',
                  zIndex: i === 0 ? 6 : 4,
                  opacity: 1,
                  filter: 'none',
                  transition: 'all 0.3s ease-out',
                }}
              >
                <img
                  src={`/${String(i + 4).padStart(3, '0')}.png`}
                  alt="Service"
                  style={{
                    width: '38px',
                    height: '38px',
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
                  <div
                    style={{ fontSize: '0.65em', color: '#777' }}
                    className="items-center flex"
                  >
                    <img src="loc.png" className="w-3 h-3" alt="" />
                    {i === 0 ? 'Barrow upon Soar' : 'Kegworth'}
                  </div>
                </div>
                <div
                  style={{
                    fontWeight: 500,
                    color: '#7a7a7a',
                    fontSize: '0.7em',
                  }}
                >
                  Premium
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const splitHeader = (text: string, splitPoint: string) => {
    if (!isMobile) return text;
    const parts = text.split(splitPoint);
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}
          {splitPoint}
          <br />
          {parts.slice(1).join(splitPoint)}
        </>
      );
    }
    return text;
  };

  return (
    <div className="w-full bg-white px-4 md:px-28 py-16">
      <motion.div
        ref={headerRef}
        className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 max-w-7xl mx-auto text-center md:text-left"
        variants={headerVariants}
        initial="hidden"
        animate={isHeaderInView ? 'visible' : 'hidden'}
      >
        <div className="space-y-4 max-w-xl mx-auto md:mx-0">
          <motion.h2
            className="font-bold text-gray-900 text-2xl xs:text-3xl sm:text-4xl md:text-5xl"
            style={headerStyles}
          >
            Why choose <br />
            <span className="text-blue-600">Fokoremovals</span>
          </motion.h2>
          <motion.p
            className="text-[#7E8BA5] text-sm xs:text-base sm:text-lg"
            style={textStyles}
          >
            Your trusted partner for stress-free moves <br />
            across the UK
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

      {/* First Row */}
      <motion.div
        ref={featuresRef}
        className="why-feature-container"
        variants={containerVariants}
        initial="hidden"
        animate={isFeaturesInView ? 'visible' : 'hidden'}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: isMobile ? '120px' : '20px',
          marginBottom: isMobile ? '40px' : '30px', // Reduced margin for mobile
          marginTop: isMobile ? '40px' : '80px', // Reduced margin for mobile
        }}
      >
        {/* Feature 1 */}
        <motion.div
          style={{
            ...cardContentStyle,
            margin: '0 auto',
            overflow: 'visible',
          }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div style={OriginalImageContainerStyle}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                overflow: 'hidden',
                borderRadius: '8px',
              }}
            >
              <img src="/road.png" alt="Angled road" style={RoadImageStyle} />
            </div>
            <img src="/truck.png" alt="Moving Truck" style={TruckImageStyle} />
          </div>
          <div>
            <h3 style={featureHeaderStyle}>
              {splitHeader('Fully Insured Goods in Transit', ' Insured ')}
            </h3>
            <p style={featureDescriptionStyle}>
              Enjoy complete peace of mind knowing your items are protected
              throughout the move.
            </p>
          </div>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          style={{
            ...cardContentStyle,
            margin: '0 auto',
          }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div
            className="rounded-3xl"
            style={{
              position: 'relative',
              height: '220px',
              background: '#F3F8FE',
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
                width: isMobile ? '230px' : '248px',
                zIndex: '2',
              }}
            />
          </div>
          <div>
            <h3 style={featureHeaderStyle}>
              {splitHeader('Professional, Polite, and Punctual', ', Polite,')}
            </h3>
            <p style={featureDescriptionStyle}>
              Our experienced team delivers a courteous, timely, and hassle-free
              service every time.
            </p>
          </div>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          style={{
            ...cardContentStyle,
            margin: '0 auto',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            textAlign: 'initial',
          }}
          variants={itemVariants}
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
              {splitHeader('Affordable and Flexible Options', ' and ')}
            </h3>
            <p style={featureDescriptionStyle}>
              Choose a plan that fits your schedule and budget without
              compromising on quality
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Second Row */}
      <motion.div
        className="why-feature-row"
        variants={containerVariants}
        initial="hidden"
        animate={isFeaturesInView ? 'visible' : 'hidden'}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          // Reduced gap for mobile between Feature 4 and 5
          gap: isMobile ? '80px' : '20px',
        }}
      >
        {/* Feature 4 */}
        <motion.div
          style={{ ...cardContentStyle, minHeight: '350px' }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div
            style={{
              ...TopAlignedImageContainerStyle,
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
              // Removed explicit borderRadius: '0'
            }}
          >
            <img
              src="/Shop.png"
              alt="Shop"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                // Curved the image corners
                borderRadius: '8px',
              }}
            />
          </div>
          <h3 style={featureHeaderStyle}>
            {splitHeader('Your Belongings Handled with Care', ' Belongings ')}
          </h3>
          <p style={featureDescriptionStyle}>
            We treat your possessions as if they were our own, ensuring safe
            transport at every stage.
          </p>
        </motion.div>

        {/* Feature 5 */}
        <motion.div
          style={{ ...cardContentStyle, minHeight: '350px' }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <div
            style={{
              ...TopAlignedImageContainerStyle,
              background: 'lightgray',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              color: '#666',
              // Removed explicit borderRadius: '0'
            }}
          >
            <img
              src="/map.png"
              alt="map"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top',
                // Curved the image corners
                borderRadius: '8px',
              }}
            />
          </div>
          <h3 style={featureHeaderStyle}>
            {splitHeader('Based in Loughborough, Operating UK-Wide', ', ')}
          </h3>
          <p  style={featureDescriptionStyle}>
            Local expertise with national reach wherever you're moving, we've
            got you covered.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Why;