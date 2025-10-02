import type { CSSProperties } from 'react';

// --- Styling Constants ---

// Style for the main feature text column
const featureTextStyle: CSSProperties = {
  fontSize: '1rem',
  lineHeight: '1.6',
  color: '#495057', // Dark gray text color
  maxWidth: '450px', // Limit text width slightly
  textAlign: 'left',
};

// Style for the bolded/emphasized section intros
const emphasisStyle: CSSProperties = {
  fontWeight: 'bold',
  color: '#1a1a1a',
  display: 'block', // Ensures the text flows nicely before the hyphen
};

// --- Component ---

const Speak = () => {
  return (
    <div className="w-full bg-white py-16 px-12 md:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-2">
          Speak with our experience <br /> team at{' '}
          <span className="text-[#1e88e5]">Fokoremovals</span>
        </h2>
        <p className="text-sm text-[#495057] mb-1">
          We are available 24/7, we work round the clock.
        </p>
        <p className="text-sm font-semibold text-[#1e88e5] mb-12">
          Your Request, We Answer
        </p>

        {/* Content Layout (Text left, Image right) */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around gap-10"> {/* Changed justify-between to justify-around */}
          {/* Left Column: Text Features */}
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            {/* Feature 1: Main Introduction */}
            <p className="md:pr-12" style={featureTextStyle}>
              Our friendly, knowledgeable staff are here to answer your questions,
              plan your move, and make sure everything runs smoothly. Whether
              you're relocating your home or business, we'll guide you through
              every step and tailor our services to your needs.
            </p>

            {/* Feature 2: Service Quality */}
            <p className="md:pr-12" style={featureTextStyle}>
              <span style={emphasisStyle}>Exceptional Service Quality:</span> We
              combine professional handling, punctual arrivals, and flexible
              options to deliver smooth, stress-free moves every time.
            </p>

            {/* Feature 3: Customer Care */}
            <p className="md:pr-12" style={featureTextStyle}>
              <span style={emphasisStyle}>Outstanding Customer Care:</span> Our
              responsive, friendly team listens, advises, and keeps you updated
              at every stage to ensure your complete satisfaction.
            </p>
          </div>

          {/* Right Column: Just an image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start"> {/* Changed justify-end to justify-start */}
            <img
              src="/gpt.png"
              alt="Service"
              style={{
                width: '400px', // Increased width
                height: '400px', // Increased height
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speak;