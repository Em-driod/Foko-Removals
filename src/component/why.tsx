import type { CSSProperties } from 'react';
import './why.css';

// Basic styles for reusability (best practice would be to use a CSS file)
const cardContentStyle: CSSProperties = {
  background: '#f8f9fa',
  borderRadius: '12px',
  padding: '25px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  minHeight: '320px', // Uniform height for visual consistency
};

const featureHeaderStyle: CSSProperties = {
  fontSize: '1.5em',
  fontWeight: 'bold',
  color: '#1a1a1a',
  marginTop: '10px',
  marginBottom: '10px',
};

const featureDescriptionStyle: CSSProperties = {
  fontSize: '1em',
  color: '#555',
};

// Styles for Feature 1's complex image positioning
const ImageContainerStyle: CSSProperties = {
  position: 'relative',
  height: '200px',
  background: '#e9ecef', // Light background for the image area
  borderRadius: '8px',
  marginBottom: '15px',
  overflow: 'hidden', // Ensures the truck/road don't overflow the container border
};

const RoadImageStyle: CSSProperties = {
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  height: 'auto',
  transform: 'rotate(5deg) scale(1.2) translateY(20px)', // Example of a complex angled style
  objectFit: 'cover',
  opacity: 0.5, // Reduced opacity for a background effect
};

const TruckImageStyle: CSSProperties = {
  position: 'absolute',
  bottom: '-20px',
  right: '10%',
  width: '150px', // Adjust size as needed
  height: 'auto',
  zIndex: '2',
  transform: 'rotate(10deg)', // Example of an angled truck
};

const Why = () => {
  return (
    <div style={{ padding: '80px', fontFamily: 'sans-serif', background: 'white' }}>
      {/* Header and Introduction Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
        <div style={{ maxWidth: '60%' }}>
          <h1 style={{ fontSize: '3em', fontWeight: 'normal', color: '#1a1a1a' }}>
            Why choose <span style={{ color: '#007bff', fontWeight: 'bold' }}>Fokoremovals</span>
          </h1>
          <p style={{ fontSize: '1.2em', color: '#555' }}>
            Your trusted partner for stress-free moves across the UK
          </p>
        </div>
        <div style={{ maxWidth: '35%', fontSize: '0.9em', color: '#666' }}>
          <p>
            At Fokoremovalsltd, we combine professionalism, reliability and care to make every move smooth and hassle-free.
          </p>
        </div>
      </div>

      {/* --- Feature Blocks Row 1 (3 Columns) --- */}
  <div className="why-feature-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '40px' }}>
        {/* Feature 1: Fully Insured */}
        <div style={{ ...cardContentStyle, textAlign: 'center' }}>
          {/* The Image Container with the angled truck and road */}
          <div style={ImageContainerStyle}>
            {/* Road Image Placeholder */}
            <img
              src="/road.png" // Placeholder path
              alt="Angled road"
              style={RoadImageStyle}
            />
            {/* Truck Image Placeholder */}
            <img
              src="/truck.png" // Placeholder path
              alt="Moving Truck"
              style={TruckImageStyle}
            />
          </div>
          <h3 style={featureHeaderStyle}>Fully Insured Goods in Transit</h3>
          <p style={featureDescriptionStyle}>
            Enjoy complete peace of mind knowing your items are protected throughout the move.
          </p>
        </div>

        {/* Feature 2: Professional, Polite, and Punctual */}
        <div style={{ ...cardContentStyle, textAlign: 'center' }}>
          <div
            style={{
              position: 'relative',
              height: '200px',
              background: 'lightgray url(/bgp.png) center/cover no-repeat', // Replace with your background image path
              borderRadius: '8px',
              marginBottom: '15px',
              overflow: 'visible',
            }}
          >
            {/* Absolute image, e.g., mover character */}
            <img
              src="/courier.png" // Replace with your actual image path
              alt="Mover Character"
              style={{
                position: 'absolute',
                top: '-60px', // Slightly overflow the card
                left: '50%',
                transform: 'translateX(-50%)',
                width: '180px', // Adjust size as needed
                zIndex: '2',
              }}
            />
          </div>
          <h3 style={featureHeaderStyle}>Professional, Polite, and Punctual</h3>
          <p style={featureDescriptionStyle}>
            Our experienced team delivers a courteous, timely, and hassle-free service every time.
          </p>
        </div>

        {/* Feature 3: Affordable and Flexible Options */}
        <div
          style={{
            ...cardContentStyle,
            textAlign: 'center',
            position: 'relative',
            minHeight: '320px', // match height with other cards
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
              top: '-40px',
              left: '50%',
              transform: 'translateX(-50%)',
              // Increased height to contain the stacked cards visually
              height: '120px', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start', // Align cards to the top of this container
              width: '100%',
            }}
          >
            {[0, 1, 2].map((i) => {
              // Card rotation and vertical offset logic
              let rotation = 0;
              let extraTop = 0;
              if (i === 0) {
                rotation = 4;
                extraTop = -24;
              } // left up, right down
              if (i === 1) {
                rotation = -3;
                extraTop = 4;
              } // left down, right up
              // i === 2 is normal
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: `${i * 12 + extraTop}px`,
                    left: '50%',
                    transform: `translateX(-50%) rotate(${rotation}deg)`,
                    width: '300px',
                    height: '60px',
                    background: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    zIndex: 10 - i,
                    opacity: i === 0 ? 1 : 0.85 - i * 0.2,
                    filter: 'none',
                  }}
                >
                  <img
                    src={i === 0 ? '/01.png' : `/${String(i + 1).padStart(3, '0')}.png`}
                    alt='Service'
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginRight: '12px',
                    }}
                  />
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: '10px',
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
                    <div style={{ fontSize: '0.85em', color: '#777' }}>
                      {i === 0 ? 'Hathern' : i === 1 ? 'Loughborough' : 'Quorn'}
                    </div>
                  </div>
                  <div
                    style={{ fontWeight: 500, color: '#7a7a7a', fontSize: '0.85em' }}
                  >
                    Premium Service
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inside the main card */}
          <div style={{ marginTop: '130px' }}> {/* Adjusted margin top to clear the floating cards */}
            {/* Divider Text */}
            <p
              style={{
                textAlign: 'left',
                fontSize: '0.8em',
                color: '#666',
                margin: '10px 0 12px 20px',
              }}
            >
              Last week
            </p>

            {/* Last Two Cards */}
            <div
              style={{
                position: 'relative',
                height: '70px',
                marginBottom: '20px',
                width: '100%',
              }}
            >
              {[0, 1].map((i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: `${i * 12}px`,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '300px',
                    height: '60px',
                    background: '#fff',
                    borderRadius: '16px',
                    boxShadow: '0 3px 12px rgba(0,0,0,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    zIndex: 10 - i,
                    opacity: i === 0 ? 1 : 0.85,
                    filter: i === 0 ? 'none' : 'blur(1px)',
                  }}
                >
                  <img
                    src={`/${String(i + 4).padStart(3, '0')}.png`}
                    alt='Service'
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginRight: '12px',
                    }}
                  />
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: '1em',
                        color: '#222',
                        lineHeight: '1.2',
                      }}
                    >
                      {i === 0 ? 'Packing' : 'Storage'}
                    </div>
                    <div style={{ fontSize: '0.85em', color: '#777' }}>
                      {i === 0 ? 'Barrow upon Soar' : 'Kegworth'}
                    </div>
                  </div>
                  <div
                    style={{ fontWeight: 500, color: '#7a7a7a', fontSize: '0.85em' }}
                  >
                    Premium Service
                  </div>
                </div>
              ))}
            </div>

            {/* Heading Below */}
            <h3 style={featureHeaderStyle}>Affordable and Flexible Options</h3>
            <p style={featureDescriptionStyle}>
              Choose a plan that fits your schedule and budget without compromising on quality.
            </p>
          </div>
        </div>
      </div>

      {/* --- Feature Blocks Row 2 (2 Columns) --- */}
  <div className="why-feature-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
        {/* Feature 4: Your Belongings Handled with Care (Left) */}
        <div style={{ ...cardContentStyle }}>
          <div style={{ height: '300px', background: 'lightgray', borderRadius: '8px', marginBottom: '15px' }}>
            {/* Placeholder for the boxes image */}
            
          </div>
          <h3 style={featureHeaderStyle}>Your Belongings Handled with Care</h3>
          <p style={featureDescriptionStyle}>
            We treat your possessions as if they were our own, ensuring safe transport at every stage.
          </p>
        </div>

        {/* Feature 5: Based in Loughborough, Operating UK-Wide (Right) */}
        <div style={{ ...cardContentStyle }}>
          <div style={{ height: '300px', background: 'lightgray', borderRadius: '8px', marginBottom: '15px' }}>
            {/* Placeholder for the map image */}
            
          </div>
          <h3 style={featureHeaderStyle}>Based in Loughborough, Operating UK-Wide</h3>
          <p style={featureDescriptionStyle}>
            Local expertise with national reach wherever you're moving, we've got you covered.
          </p>
        </div>
      </div>

      {/* Optional: Blue footer bar style */}
      <div style={{ height: '10px', backgroundColor: '#007bff', marginTop: '40px' }}></div>
    </div>
  );
};

export default Why;