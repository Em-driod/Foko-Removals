
import type { CSSProperties } from 'react';
// 1. Import icons from react-icons/md instead of lucide-react
import { MdCall, MdMail, MdLocationOn } from 'react-icons/md';

// --- Styling Constants ---
const formBackgroundStyle: CSSProperties = {
  background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)', // Light gradient for the form
};

const inputStyle: CSSProperties = {
  backgroundColor: '#eef4f9', // Light grey/blue background for inputs
  border: 'none',
  borderRadius: '8px',
  padding: '12px 16px',
  fontSize: '1rem',
  color: '#333',
  width: '100%',
  marginBottom: '10px',
  outline: 'none',
};

const placeholderTextStyle: CSSProperties = {
  fontSize: '0.9rem',
  color: '#7E8BA5',
};

const buttonStyle: CSSProperties = {
  backgroundColor: '#1e88e5', // Bright blue for the button
  backgroundImage: 'linear-gradient(to right, #1e88e5, #42a5f5)',
  border: 'none',
  borderRadius: '8px',
  padding: '12px 20px',
  color: 'white',
  fontWeight: '600',
  fontSize: '1rem',
  cursor: 'pointer',
  width: '100%',
  marginTop: '15px',
  boxShadow: '0 4px 10px rgba(30, 136, 229, 0.4)',
};

const labelStyle: CSSProperties = {
  fontSize: '0.85rem',
  fontWeight: '600',
  color: '#495057', // Dark text for labels
  marginBottom: '4px',
  display: 'block',
};

const contactInfoStyle: CSSProperties = {
  color: '#343a40', // Dark text for contact details
  fontSize: '1rem',
  fontWeight: '500',
};

// --- Component ---

const Footer = () => {
  return (
    <div className="w-full bg-[#1e88e5] min-h-screen flex flex-col items-center justify-start py-12 px-4">
      {/* Header Text */}
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-1">
          Get a Free Quote Today
        </h2>
        <p className="text-white/80 text-sm">Ready to move?</p>
      </div>

      {/* Main Container (White Card) */}
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-12 max-w-5xl w-full">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Side: Contact Info */}
          <div className="w-full md:w-5/12 space-y-6">
            <div className="flex items-center space-x-3">
              {/* 2. Used MdCall icon */}
              <MdCall
                className="w-6 h-6 text-green-500" // Adjusted size slightly for Md icons
              />
              <span style={contactInfoStyle}>07920021955</span>
            </div>

            <div className="flex items-center space-x-3">
              {/* 3. Used MdMail icon */}
              <MdMail
                className="w-6 h-6 text-blue-500"
              />
              <a
                href="mailto:info@fokoremovals.co.uk"
                style={contactInfoStyle}
                className="hover:text-blue-600 transition"
              >
                Info@fokoremovals.co.uk
              </a>
            </div>

            <div className="flex items-start space-x-3">
              {/* 4. Used MdLocationOn icon */}
              <MdLocationOn
                className="w-6 h-6 text-red-500"
                style={{ marginTop: '2px' }}
              />
              <div style={contactInfoStyle}>
                29 Middle Avenue, <br />
                Loughborough <br />
                LE11 5HZ
              </div>
            </div>
          </div>

          {/* Right Side: Client Contact Form */}
          <div
            className="w-full md:w-7/12 p-6 rounded-xl shadow-lg"
            style={formBackgroundStyle}
          >
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Client contact form
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {/* Name */}
              <div>
                <label style={labelStyle}>Name*</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  style={{ ...inputStyle, ...placeholderTextStyle }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email*</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{ ...inputStyle, ...placeholderTextStyle }}
                />
              </div>

              {/* Subject */}
              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  type="text"
                  placeholder="Type the subject"
                  style={{ ...inputStyle, ...placeholderTextStyle }}
                />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  placeholder="Type your message..."
                  rows={4}
                  style={{
                    ...inputStyle,
                    ...placeholderTextStyle,
                    resize: 'none',
                    height: '100px',
                  }}
                ></textarea>
              </div>

              <button type="submit" style={buttonStyle}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-12 text-center">
        <p className="text-white/60 text-xs">
          © 2023 FOKOREMOLDS Technology. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;