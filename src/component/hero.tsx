import { FaPhone } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";

const Hero = () => {
  return (
    // **Key Change:** Changed 'p-4 lg:p-8' to 'px-4 lg:px-8 py-16' to drastically reduce horizontal margin on all screen sizes, while maintaining vertical spacing.
  <div className="relative min-h-screen flex flex-col lg:flex-row justify-center items-start w-full max-w-7xl mx-auto px-0 lg:px-0 py-16 gap-12 overflow-hidden">
      
      {/* Left side - Company Info */}
      <div className="text-white space-y-6 w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-sm flex items-center justify-center lg:justify-start gap-2">
          Trusted By 100+ <span className="text-yellow-400"> <img src="Group 3.png" alt="" /></span>
        </p>
        
        {/* Adjusted text size for better responsiveness */}
   <h1
       className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
     style={{
      fontWeight: 600,
       fontSize: '2.1rem', // ~33px on mobile
       lineHeight: '2.5rem', // ~40px on mobile
       letterSpacing: '-2px',
    // Restore large size for large screens
    ...(window.innerWidth >= 1024 ? {
      fontSize: '50px',
      lineHeight: '62px',
      letterSpacing: '-3px'
    } : {})
  }}
>
  <span className="text-blue-500">Foko Removals</span> – Your <br /> Move, Our Mission
</h1>
<p
  className="text-gray-200 text-base sm:text-lg md:text-xl"
  style={{
    fontFamily: 'Arial',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: window.innerWidth >= 1024 ? '18px' : '1rem',
    lineHeight: window.innerWidth >= 1024 ? '26px' : '1.5rem',
    letterSpacing: '0px',
  }}
>
  Reliable man & van and removal services, Based in <br className="hidden sm:block" /> Loughborough, serving across the UK.
</p>
        <div className="space-y-3 pt-4">
          <p className="flex items-center gap-2 justify-center lg:justify-start">
           <p className="bg-white/10 backdrop-blur-md rounded-full p-2 "><FaPhone size={20} />
</p>  <span className="text-lg font-medium ">07920021955</span>
          </p>
          <p className="flex items-center gap-2 justify-center lg:justify-start">
            <p className="bg-white/10 backdrop-blur-md rounded-full p-2 ">
           <IoIosMailUnread size={20} /> </p> <span className="text-lg font-medium">info@fokoremovalsltd.co.uk</span>
          </p>
        </div>
      </div>

      {/* Right side - Contact Form */}
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-[95vw] max-w-md lg:w-[500px] shadow-2xl border border-white/20 mx-auto lg:mx-0">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">Client Contact Form</h2>
        <form>
          
          <div className="mb-4">
            <label htmlFor="name" className="text-white mb-1 block text-lg font-medium">Name</label>
            <input 
              id="name"
              type="text" 
              placeholder="Enter your name" 
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 py-2 transition duration-200" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="text-white mb-1 block text-lg font-medium">Email</label>
            <input 
              id="email"
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 py-2 transition duration-200" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="text-white mb-1 block text-lg font-medium">Subject</label>
            <input 
              id="subject"
              type="text" 
              placeholder="Type the subject" 
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 py-2 transition duration-200" 
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="text-white mb-1 block text-lg font-medium">Message</label>
            <textarea 
              id="message"
              placeholder="Type your message..." 
              className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 py-2 transition duration-200 resize-none" 
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
  );
};

export default Hero;