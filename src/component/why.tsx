import type { CSSProperties } from 'react';
import { useState, useEffect } from 'react';
import './why.css';

// Basic styles for reusability
const cardContentStyle: CSSProperties = {
  background: '#f8f9fa',
  borderRadius: '12px',
  padding: '20px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  minHeight: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const featureHeaderStyle: CSSProperties = {
  fontSize: '1.25em',
  fontWeight: 'bold',
  color: '#1a1a1a',
  marginTop: '10px',
  marginBottom: '10px',
};

const featureDescriptionStyle: CSSProperties = {
  fontSize: '0.9em',
  color: '#555',
  lineHeight: '1.4',
};

// Styles for Feature 1's complex image positioning
const ImageContainerStyle: CSSProperties = {
  position: 'relative',
  height: '180px',
  background: '#e9ecef',
  borderRadius: '8px',
  marginBottom: '15px',
  overflow: 'hidden',
};

const RoadImageStyle: CSSProperties = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  height: 'auto',
  transform: 'rotate(5deg) scale(1.2) translateY(20px)',
  objectFit: 'cover',
  opacity: 0.5,
};

const TruckImageStyle: CSSProperties = {
  position: 'absolute',
  bottom: '10px',
  right: '5%',
  width: '220px',
  height: 'auto',
  zIndex: '2',
  transform: 'rotate(10deg)',
};

// Define the mobile breakpoint value for consistency
const MD_BREAKPOINT = 768;

const Why = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MD_BREAKPOINT : true
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < MD_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // --- Feature 3 Card Content (Now always renders the complex structure) ---
  const featureThreeImageContent = (
    <div
      style={{
        position: 'relative',
        height: '270px', // Slightly increased height to contain floating elements on mobile
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      {/* First Stack of 3 Cards - FLOATING ABOVE */}
      <div
        style={{
          position: 'absolute',
          top: '0px', // Adjusted starting position up
          left: '50%',
          transform: 'translateX(-50%)',
          height: '110px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        {[0, 1, 2].map((i) => {
          let rotation = 0;
          let extraTop = 0;
          // Apply minimal rotation/offset adjustments
          if (i === 0) {
            rotation = 3;
            extraTop = -15; // Adjusted for better centering
          }
          if (i === 1) {
            rotation = -2;
            extraTop = 0;
          }
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: `${i * 10 + extraTop}px`, // Reduced vertical spacing
                left: '50%',
                transform: `translateX(-50%) rotate(${rotation}deg)`,
                width: '85%', // Reduced width for mobile
                maxWidth: '240px', // Max width for larger screens
                height: '50px', // Slightly reduced height
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
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
                    fontSize: '0.75em', // Smaller font for mobile
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

      <div style={{ marginTop: '140px' }}> {/* Increased margin for lower stack */}
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
                top: `${i * 10}px`, // Reduced vertical spacing
                left: '50%',
                transform: 'translateX(-50%)',
                width: '85%', // Reduced width for mobile
                maxWidth: '240px',
                height: '50px', // Slightly reduced height
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
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
      {/* Header and Introduction - Left and Right corners */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 max-w-7xl mx-auto text-center md:text-left">
        <div className="space-y-4 max-w-xl mx-auto md:mx-0">
          <h2
            className="font-bold text-gray-900 text-2xl xs:text-3xl sm:text-4xl md:text-5xl"
            style={headerStyles}
          >
            Why choose <br />
            <span className="text-blue-600">Fokoremovals</span>
          </h2>
          <p
            className="text-[#7E8BA5] text-sm xs:text-base sm:text-lg"
            style={textStyles}
          >
            Your trusted partner for stress-free moves <br />
            across the Uk
          </p>
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
      </div>

      {/* First Row - 3 Features with reduced width and increased height */}
      <div
        className="why-feature-row"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '30px',
          marginTop: '20px',
        }}
      >
        {/* Feature 1: Fully Insured */}
        <div
          style={{
            ...cardContentStyle,
            textAlign: 'center',
            maxWidth: '350px',
            margin: '0 auto',
          }}
        >
          <div style={ImageContainerStyle}>
            <img
              src="/road.png"
              alt="Angled road"
              style={RoadImageStyle}
            />
            <img
              src="/truck.png"
              alt="Moving Truck"
              style={TruckImageStyle}
            />
          </div>
          <div>
            <h3 style={featureHeaderStyle}>Fully Insured Goods in Transit</h3>
            <p style={featureDescriptionStyle}>
              Enjoy complete peace of mind knowing your items are protected
              throughout the move.
            </p>
          </div>
        </div>

        {/* Feature 2: Professional, Polite, and Punctual */}
        <div
          style={{
            ...cardContentStyle,
            textAlign: 'center',
            maxWidth: '350px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              position: 'relative',
              height: '180px',
              background: 'lightgray url(/bgp.png) center/cover no-repeat',
              borderRadius: '8px',
              marginBottom: '15px',
              overflow: 'visible',
            }}
          >
            <img
              src="/courier.png"
              alt="Mover Character"
              style={{
                position: 'absolute',
                top: '-50px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '160px',
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
        </div>

        {/* Feature 3: Affordable and Flexible Options (Complex Structure Always Rendered) */}
        <div
          style={{
            ...cardContentStyle,
            textAlign: 'center',
            maxWidth: '350px',
            margin: '0 auto',
            paddingTop: '20px', // Ensure padding is consistent at the top
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          {featureThreeImageContent}
          <div style={{ marginTop: '20px' }}>
            <h3 style={featureHeaderStyle}>Affordable and Flexible Options</h3>
            <p style={featureDescriptionStyle}>
              Choose a plan that fits your schedule and budget without
              compromising on quality.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row - 2 Features (keeping original dimensions) */}
      <div
        className="why-feature-row"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
        }}
      >
        {/* Feature 4: Your Belongings Handled with Care */}
        <div style={{ ...cardContentStyle, minHeight: '350px' }}>
          <div
            style={{
              height: '200px',
              background: 'lightgray',
              borderRadius: '8px',
              marginBottom: '15px',
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
        </div>

        {/* Feature 5: Based in Loughborough, Operating UK-Wide */}
        <div style={{ ...cardContentStyle, minHeight: '350px' }}>
          <div
            style={{
              height: '200px',
              background: 'lightgray',
              borderRadius: '8px',
              marginBottom: '15px',
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
        </div>
      </div>
    </div>
  );
};

export default Why;