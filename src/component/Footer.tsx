import type { CSSProperties } from 'react';
// 1. Import icons from react-icons/md instead of lucide-react
import { MdCall,} from 'react-icons/md';
import { IoIosMailUnread } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
// --- Styling Constants ---

const contactInfoStyle: CSSProperties = {
  color: '#343a40', // Dark text for contact details
  fontSize: '1rem',
  fontWeight: '500',
};

// --- Component ---

const Footer = () => {
  return (
    // Ensured full mobile width for the blue background container
    <div className="w-full bg-[#007BFF] min-h-screen flex flex-col items-center justify-start py-12 px-4">
      
      {/* Header Text */}
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-1">
          Get a Free Quote Today
        </h2>
        <p className="text-white/80 text-sm">Ready to move?</p>
      </div>

      {/* Main Container (White Card) */}
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-12 max-w-5xl w-full">
        {/* FIX: Changed md:items-start to md:items-center to vertically center content on large screens */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:items-center"> 
          
          {/* Left Side: Contact Info - This is now vertically centered */}
          <div className="w-full md:w-5/12 space-y-6 pt-4">
            <div className="flex items-center space-x-3 ">
              <MdCall
                className="w-7 h-7 text-blue-500   bg-blue-100 rounded-full p-1"
              /> <FaWhatsapp color='green'  size={20} />
              <span style={contactInfoStyle}>07920021955</span>
            </div> 

            <div className="flex items-center space-x-3">
              <p className="bg-blue-100 rounded-full p-2 " >
                           <IoIosMailUnread size={20}  color='blue'  className="w-7 h-7 text-blue-500 rounded-full p-1"/>
                         </p> 
              <a
                href="mailto:info@fokoremovals.co.uk"
                style={contactInfoStyle}
                className="hover:text-blue-600 transition"
              >
                Info@fokoremovals.co.uk
              </a>
            </div>

            <div className="flex items-start space-x-3">
              <CiLocationOn
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

          {/* Right Side: Client Contact Form - MOBILE OPTIMIZED */}
          <div className="bg-[#F3F8FE] backdrop-blur-md rounded-xl p-6 w-full max-w-lg lg:w-7/12 shadow-2xl border border-white/20 mx-auto">
            <h2 className="text-black text-2xl font-semibold mb-6 text-center">Client Contact Form</h2>
            <form>
              
              <div className="mb-4">
                <label htmlFor="name" className="text-black mb-1 block text-base font-medium">Name</label>
                <input 
                  id="name"
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-white border-b-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 py-2.5 transition duration-200" 
                  required 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="text-black mb-1 block text-base font-medium">Email</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white border-b-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 py-2.5 transition duration-200" 
                  required 
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="text-black mb-1 block text-base font-medium">Subject</label>
                <input 
                  id="subject"
                  type="text" 
                  placeholder="Type the subject" 
                  className="w-full bg-white border-b-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 py-2.5 transition duration-200" 
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="text-black mb-1 block text-base font-medium">Message</label>
                <textarea 
                  id="message"
                  placeholder="Type your message..." 
                  className="w-full bg-white border-b-2 border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-600 py-2.5 transition duration-200 resize-none h-24" 
                  rows={4}>
                </textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-semibold hover:from-blue-700 hover:to-blue-500 transition duration-300 shadow-lg"
              >
                Submit 
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="mt-12 text-center">
        <p className="text-white/60 text-xs">
          © 2025 FOKOREMOLDS Technology. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;