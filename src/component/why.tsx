import type { CSSProperties } from 'react';
import './why.css';

// Basic styles for reusability
const cardContentStyle: CSSProperties = {
  background: '#f8f9fa',
  borderRadius: '12px',
  padding: '20px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  minHeight: '400px', // Increased height
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
  height: '180px', // Increased height
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
  bottom: '-20px',
  right: '10%',
  width: '140px', // Slightly larger for taller container
  height: 'auto',
  zIndex: '2',
  transform: 'rotate(10deg)',
};

const Why = () => {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'sans-serif', 
      background: 'white',
      overflowX: 'hidden'
    }}>
      {/* Header and Introduction - Left and Right corners */}
      <div
        className="flex flex-col md:flex-row md:justify-between md:items-start mb-[30px]"
      >
        {/* Left Corner */}
        <div
          className="w-full md:w-auto text-center md:text-left"
          style={{ maxWidth: '60%' }}
        >
          <h1
            className="font-bold text-gray-900 text-xl xs:text-2xl sm:text-3xl md:text-5xl"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontStyle: 'medium',
              fontSize: window.innerWidth >= 768 ? '50px' : '1.3rem',
              lineHeight: window.innerWidth >= 768 ? '67px' : '2rem',
              letterSpacing: window.innerWidth >= 768 ? '-3px' : '-1px',
            }}
          >
            Why choose <span style={{ color: '#007bff', fontWeight: 'bold' }}>Fokoremovals</span>
          </h1>
          <p
            className="text-sm md:text-base"
            style={{ fontSize: window.innerWidth >= 768 ? '1.1em' : '0.95em', color: '#555' }}
          >
            Your trusted partner for stress-free moves across the UK
          </p>
        </div>
        {/* Right Corner - always at right on desktop, hidden on mobile, 5 lines max */}
        <div
          className="hidden md:block text-[#7E8BA5] text-sm xs:text-base sm:text-lg text-right md:max-w-xs md:ml-auto"
          style={{
            fontFamily: 'Arial',
            fontWeight: 400,
            fontStyle: 'regular',
            fontSize: '18px',
            lineHeight: '28px',
            letterSpacing: '0px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
            maxWidth: '320px',
          }}
        >
          <p>
            At Fokoremovalsltd, we combine professionalism, reliability and care to make every move smooth and hassle-free. We go the extra mile for our clients, ensuring satisfaction and peace of mind with every move.
          </p>
        </div>
      </div>

      {/* First Row - 3 Features with reduced width and increased height */}
      <div className="why-feature-row" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Reduced min width
        gap: '20px', 
        marginBottom: '30px' 
      }}>
        {/* Feature 1: Fully Insured */}
        <div style={{ 
          ...cardContentStyle, 
          textAlign: 'center',
          maxWidth: '350px', // Reduced width
          margin: '0 auto' // Center the card
        }}>
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
              Enjoy complete peace of mind knowing your items are protected throughout the move.
            </p>
          </div>
        </div>

        {/* Feature 2: Professional, Polite, and Punctual */}
        <div style={{ 
          ...cardContentStyle, 
          textAlign: 'center',
          maxWidth: '350px', // Reduced width
          margin: '0 auto' // Center the card
        }}>
          <div
            style={{
              position: 'relative',
              height: '180px', // Increased height
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
                top: '-50px', // Adjusted for taller container
                left: '50%',
                transform: 'translateX(-50%)',
                width: '160px', // Slightly larger
                zIndex: '2',
              }}
            />
          </div>
          <div>
            <h3 style={featureHeaderStyle}>Professional, Polite, and Punctual</h3>
            <p style={featureDescriptionStyle}>
              Our experienced team delivers a courteous, timely, and hassle-free service every time.
            </p>
          </div>
        </div>

        {/* Feature 3: Affordable and Flexible Options */}
        <div
          style={{
            ...cardContentStyle,
            textAlign: 'center',
            position: 'relative',
            maxWidth: '350px', // Reduced width
            margin: '0 auto', // Center the card
            paddingTop: '0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          {/* First Stack of 3 Cards - FLOATING ABOVE */}
          <div
            style={{
              position: 'absolute',
              top: '-30px',
              left: '50%',
              transform: 'translateX(-50%)',
              height: '110px', // Slightly increased
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            {[0, 1, 2].map((i) => {
              let rotation = 0;
              let extraTop = 0;
              if (i === 0) {
                rotation = 4;
                extraTop = -20;
              }
              if (i === 1) {
                rotation = -3;
                extraTop = 2;
              }
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: `${i * 12 + extraTop}px`, // Slightly increased spacing
                    left: '50%',
                    transform: `translateX(-50%) rotate(${rotation}deg)`,
                    width: '90%', // Adjusted for narrower card
                    maxWidth: '260px',
                    height: '55px', // Slightly taller
                    background: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 12px',
                    zIndex: 10 - i,
                    opacity: i === 0 ? 1 : 0.85 - i * 0.2,
                    filter: 'none',
                  }}
                >
                  <img
                    src={i === 0 ? '/01.png' : `/${String(i + 1).padStart(3, '0')}.png`}
                    alt='Service'
                    style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginRight: '10px',
                    }}
                  />
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: '0.8em',
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
                    <div style={{ fontSize: '0.75em', color: '#777' }}>
                      {i === 0 ? 'Hathern' : i === 1 ? 'Loughborough' : 'Quorn'}
                    </div>
                  </div>
                  <div
                    style={{ fontWeight: 500, color: '#7a7a7a', fontSize: '0.75em' }}
                  >
                    Premium
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '100px' }}> {/* Increased margin for taller layout */}
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
                height: '65px', // Slightly taller
                marginBottom: '20px', // Increased margin
                width: '100%',
              }}
            >
              {[0, 1].map((i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: `${i * 12}px`, // Increased spacing
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90%', // Adjusted for narrower card
                    maxWidth: '260px',
                    height: '55px', // Slightly taller
                    background: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 12px',
                    zIndex: 10 - i,
                    opacity: i === 0 ? 1 : 0.85,
                    filter: i === 0 ? 'none' : 'blur(1px)',
                  }}
                >
                  <img
                    src={`/${String(i + 4).padStart(3, '0')}.png`}
                    alt='Service'
                    style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginRight: '10px',
                    }}
                  />
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: '0.8em',
                        color: '#222',
                        lineHeight: '1.2',
                      }}
                    >
                      {i === 0 ? 'Packing' : 'Storage'}
                    </div>
                    <div style={{ fontSize: '0.75em', color: '#777' }}>
                      {i === 0 ? 'Barrow upon Soar' : 'Kegworth'}
                    </div>
                  </div>
                  <div
                    style={{ fontWeight: 500, color: '#7a7a7a', fontSize: '0.75em' }}
                  >
                    Premium
                  </div>
                </div>
              ))}
            </div>

            <h3 style={featureHeaderStyle}>Affordable and Flexible Options</h3>
            <p style={featureDescriptionStyle}>
              Choose a plan that fits your schedule and budget without compromising on quality.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row - 2 Features (keeping original dimensions) */}
      <div className="why-feature-row" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px' 
      }}>
        {/* Feature 4: Your Belongings Handled with Care */}
        <div style={{ ...cardContentStyle, minHeight: '350px' }}>
          <div style={{ 
            height: '200px', 
            background: 'lightgray', 
            borderRadius: '8px', 
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666'
          }}>
            [Boxes Image]
          </div>
          <h3 style={featureHeaderStyle}>Your Belongings Handled with Care</h3>
          <p style={featureDescriptionStyle}>
            We treat your possessions as if they were our own, ensuring safe transport at every stage.
          </p>
        </div>

        {/* Feature 5: Based in Loughborough, Operating UK-Wide */}
        <div style={{ ...cardContentStyle, minHeight: '350px' }}>
          <div style={{ 
            height: '200px', 
            background: 'lightgray', 
            borderRadius: '8px', 
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666'
          }}>
            [Map Image]
          </div>
          <h3 style={featureHeaderStyle}>Based in Loughborough, Operating UK-Wide</h3>
          <p style={featureDescriptionStyle}>
            Local expertise with national reach wherever you're moving, we've got you covered.
          </p>
        </div>
      </div>

      {/* Optional: Blue footer bar style */}
      <div style={{ 
        height: '8px', 
        backgroundColor: '#007bff', 
        marginTop: '30px',
        borderRadius: '4px'
      }}></div>
    </div>
  );
};

export default Why;