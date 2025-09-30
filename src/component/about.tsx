const About = () => {
  return (
    // Main container with relative positioning for the absolute blue footer
    <div className="relative w-full overflow-hidden">
      
      {/* 1. Image and Text Container */}
      {/* Set a max height for the image wrapper to keep the van visible but responsive */}
      <div className="w-full h-[60vh] md:h-[70vh] relative">
        <img
          // Placeholder source since the uploaded image is not a URL, 
          // replace 'your-van-image-url.jpg' with the actual image path or import.
          src="busman.png" 
          alt="Foko Removals Van with boxes"
          className="w-full h-full object-cover"
        />
        {/* Placeholder for the boxes and logo that appear overlaid on the van in the image. 
            In a real scenario, these would be styled with absolute positioning on top of the image.
            For simplicity, we'll focus on the bottom blue bar content structure. */}
      </div>

      {/* 2. Blue Footer Bar - Absolute positioning to sit over the bottom of the image (as shown in the provided design) 
          or simply positioned below the image for better content flow. 
          We'll position it below the image for easier responsiveness. 
      */}
      <div className="bg-blue-600 text-white p-8 md:p-12 w-full">
        {/* Content Wrapper to align with the max-width of your Hero/Offer sections (max-w-7xl) */}
        <div className="max-w-7xl mx-auto flex justify-between items-end">
          
          <div className="space-y-4 max-w-2xl">
            {/* The primary heading */}
            <h2 className="text-3xl md:text-4xl font-bold">
              About Us
            </h2>
            
            {/* The description text */}
            <p className="text-base md:text-lg text-white/90">
              At Foko Removals, we're all about making your move smooth and stress-free. 
              Whether it's a single item, full house, or office relocation — we've got you covered 
              with a friendly team, fair prices, and full insurance for peace of mind.
            </p>
          </div>
          
          {/* Right-aligned text ("Reliable, Fast & Timely") */}
          <p className="hidden md:block text-sm text-white/70">
            Reliable, Fast & Timely
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;