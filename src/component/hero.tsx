const Hero = () => {
  return (
    // **Key Change:** Changed 'p-4 lg:p-8' to 'px-4 lg:px-8 py-16' to drastically reduce horizontal margin on all screen sizes, while maintaining vertical spacing.
    <div className="relative min-h-screen flex flex-col lg:flex-row justify-center items-center w-full max-w-7xl mx-auto px-0 lg:px-0 py-16 gap-12">
      
      {/* Left side - Company Info */}
      <div className="text-white space-y-6 w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-sm flex items-center justify-center lg:justify-start gap-2">
          Trusted By 100+ <span className="text-yellow-400">⭐</span>
        </p>
        
        {/* Adjusted text size for better responsiveness */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          <span className="text-blue-500">Foko Removals</span> – Your <br /> Move, Our Mission
        </h1>
        <p className="text-gray-200 text-lg">
          Reliable man & van and removal services, Based in <br className="hidden sm:block" /> Loughborough, serving across the UK.
        </p>
        <div className="space-y-3 pt-4">
          <p className="flex items-center gap-2 justify-center lg:justify-start">
            📞 <span className="text-lg font-medium">07920021955</span>
          </p>
          <p className="flex items-center gap-2 justify-center lg:justify-start">
            📧 <span className="text-lg font-medium">info@fokoremovalsltd.co.uk</span>
          </p>
        </div>
      </div>

      {/* Right side - Contact Form */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-md shadow-2xl border border-white/20">
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