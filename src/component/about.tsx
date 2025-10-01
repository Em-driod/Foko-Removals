const About = () => {
  return (
    // Main container with relative positioning for the absolute blue footer
    <div className=" w-full overflow-hidden">
      
      {/* 1. Image Container: Removed fixed height to allow the image's natural height to determine the size. */}
      <div className="w-full relative">
        <img
          src="busman.png" 
          alt="Foko Removals Van with boxes"
          // w-full h-auto ensures the image displays fully without cropping or letterboxing.
          className="w-full h-auto" 
        />
      </div>

      {/* 2. Blue Footer Bar - ABSOLUTELY POSITIONED over the bottom of the image */}
      {/* Reduced padding for mobile: p-4 instead of p-6 */}
      <div className=" bottom-0 left-0 right-0 bg-blue-600 text-white p-4 md:p-12 w-full ">
        
        {/* Content Wrapper */}
        {/* flex-col ensures content stacks on mobile, md:flex-row makes it a row on desktop */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-end">
          
          <div className="space-y-2 max-w-2xl">
            {/* The primary heading */}
            <h2
              className="text-sm md:text-xl font-bold text-center md:text-left"
              style={{
                fontFamily: 'inter',
                fontWeight: 500,
                fontStyle: 'meduim',
                fontSize: '50px',
                lineHeight: '67px',
                letterSpacing: '0px',
              }}
            >
              About Us
            </h2>
            
            {/* The description text */}
            <p
              className="text-xs md:text-lg text-white/90 text-center md:text-left"
              style={{
                fontFamily: 'Arial',
                fontWeight: 400,
                fontStyle: 'Regular',
                fontSize: '13px', // smaller on mobile
                lineHeight: '22px',
                letterSpacing: '0px',
                ...(window.innerWidth >= 768 ? {
                  fontSize: '18px',
                  lineHeight: '32px',
                } : {})
              }}
            >
              At Foko Removals, we're all about making your move smooth and stress-free. 
              Whether it's a single item, full house, or office relocation — we've got you covered <br className="block md:hidden" />
              with a friendly team, fair prices, and full insurance for peace of mind.
            </p>
          </div>
          
          {/* Right-aligned text ("Reliable, Fast & Timely"): Added mt-2 for separation on mobile. */}
          <p className="mt-2 md:mt-0 text-xs md:text-sm text-white/70">
            Reliable, Fast & Timely
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;