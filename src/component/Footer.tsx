
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-500 text-center text-white py-10">
      {/* Top Section */}
      <h2 className="text-2xl font-bold">Get a Free Quote Today</h2>
      <p className="text-sm mt-1">Ready to move?</p>

      {/* Contact Box */}
      <div className="bg-white rounded-lg shadow-md max-w-5xl mx-auto mt-8 p-10 flex flex-col md:flex-row justify-between gap-10">
        {/* Left - Contact Info */}
        <div className="flex flex-col gap-6 text-black text-left w-full md:w-1/2">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-500 text-lg" />
            <span>07920021955</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-500 text-lg" />
            <span>Info@fokoremovals.co.uk</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-500 text-lg" />
            <span>
              29 Middle Avenue, <br /> Loughborough <br /> LE11 5HZ
            </span>
          </div>
        </div>

        {/* Right - Client Contact Form */}
        <div className="bg-gray-50 rounded-lg p-6 w-full md:w-1/2">
          <h3 className="text-black font-semibold mb-4">Client contact form</h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col text-left">
              <label className="text-sm font-medium">Name*</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col text-left">
              <label className="text-sm font-medium">Email*</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col text-left">
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Type the subject"
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col text-left">
              <label className="text-sm font-medium">Message</label>
              <textarea
                placeholder="Type your message..."
                className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-xs opacity-80">
        © 2019 FokoreMOVALS Technology. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
