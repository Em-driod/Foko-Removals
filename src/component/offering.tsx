

const Offering = () => {
  return (
    <div className="w-full bg-white px-4 md:px-28 py-16">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 max-w-7xl mx-auto text-center md:text-left">
        <div className="space-y-4 max-w-xl mx-auto md:mx-0">
          <h2
            className="font-bold text-gray-900 text-2xl xs:text-3xl sm:text-4xl md:text-[50px] leading-[2.5rem] md:leading-[67px] tracking-[-1.5px] md:tracking-[-3px]"
            // Using Tailwind for responsiveness. Removed inline style object with window.innerWidth.
            style={{ fontFamily: 'Inter', fontWeight: 500 }}
          >
            What we offer at <br />
            <span className="text-blue-600">Fokoremovals</span>
          </h2>
          <p
            className="text-[#7E8BA5] text-sm xs:text-base sm:text-lg md:text-[18px] leading-[1.4rem] md:leading-7"
            // Using Tailwind for responsiveness. Removed inline style object with window.innerWidth.
            style={{ fontFamily: 'Arial', fontWeight: 400 }}
          >
            Trusted experts in home and office relocations, <br />
            furniture collection and timely delivery
          </p>
        </div>
        <div
          className="max-w-xs text-[#7E8BA5] text-sm xs:text-base sm:text-lg md:text-[18px] leading-[1.4rem] md:leading-7 mx-auto md:mx-0 hidden md:block"
          style={{ fontFamily: 'Arial', fontWeight: 400 }}
        >
          More than 100 Homes, offices, <br />
          companies have used our services <br />
          during the years.
        </div>
      </div>

      {/* Cards Section: Updated to a two-row responsive grid (3 columns x 2 rows) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col w-full h-[460px]">
          {/* Image: h-[70%] for 70% height */}
          <img
            src="/adam mover 1.png"
            alt="Removals"
            className="w-full h-[70%] object-cover"
          />
          {/* Content Wrapper: h-[30%] for 30% height */}
          <div className="p-6 space-y-2 flex flex-col flex-grow justify-start h-[30%] text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              House Removals
            </h3>
            <p className="text-gray-600 text-sm">
              Trusted experts in home and office furniture collection and timely delivery.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col w-full h-[460px]">
          {/* Image: h-[70%] for 70% height */}
          <img
            src="relocate.png"
            alt="Office Relocation"
            className="w-full h-[70%] object-cover"
          />
          {/* Content Wrapper: h-[30%] for 30% height */}
          <div className="p-6 space-y-2 flex flex-col flex-grow justify-start h-[30%] text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              Office Relocation
            </h3>
            <p className="text-gray-600 text-sm">
              Seamless moves that minimize downtime and keep your business running smoothly.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col w-full h-[460px]">
          {/* Image: h-[70%] for 70% height */}
          <img
            src="move.png"
            alt="Man & Van Services"
            className="w-full h-[70%] object-cover"
          />
          {/* Content Wrapper: h-[30%] for 30% height */}
          <div className="p-6 space-y-2 flex flex-col flex-grow justify-start h-[30%] text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              Man & Van Services
            </h3>
            <p className="text-gray-600 text-sm">
              Flexible transport solutions for small or large moves at short notice.
            </p>
          </div>
        </div>
        
        {/* --- SECOND ROW OF CARDS --- */}
        
        {/* Card 4 (New) */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col w-full h-[460px]">
          {/* Image: h-[70%] for 70% height - NOTE: Update 'placeholder-4.png' to your actual image source */}
          <img
            src="furniture.png" 
            alt="Packing Services"
            className="w-full h-[70%] object-cover"
          />
          {/* Content Wrapper: h-[30%] for 30% height */}
          <div className="p-6 space-y-2 flex flex-col flex-grow justify-start h-[30%] text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              Professional Packing
            </h3>
            <p className="text-gray-600 text-sm">
              Our experts handle all your items with care, using high-quality materials.
            </p>
          </div>
        </div>

        {/* Card 5 (New) */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col w-full h-[460px]">
          {/* Image: h-[70%] for 70% height - NOTE: Update 'placeholder-5.png' to your actual image source */}
          <img
            src="time.png"
            alt="Storage Solutions"
            className="w-full h-[70%] object-cover"
          />
          {/* Content Wrapper: h-[30%] for 30% height */}
          <div className="p-6 space-y-2 flex flex-col flex-grow justify-start h-[30%] text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              Short/Long-Term Storage
            </h3>
            <p className="text-gray-600 text-sm">
              Secure and flexible storage options for when you need extra time or space.
            </p>
          </div>
        </div>

        {/* Card 6 (New) */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col w-full h-[460px]">
          {/* Image: h-[70%] for 70% height - NOTE: Update 'placeholder-6.png' to your actual image source */}
          <img
            src="world.png"
            alt="International Moves"
            className="w-full h-[70%] object-cover"
          />
          {/* Content Wrapper: h-[30%] for 30% height */}
          <div className="p-6 space-y-2 flex flex-col flex-grow justify-start h-[30%] text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-900">
              International Relocation
            </h3>
            <p className="text-gray-600 text-sm">
              We manage all logistics for a stress-free move to any country worldwide.
            </p>
          </div>
        </div>
        
      </div>

      {/* Footer Link */}
      <div className="mt-10 text-center max-w-7xl mx-auto">
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline inline-flex items-center gap-2"
        >
          See All What We Offer →
        </a>
      </div>
    </div>
  );
};

export default Offering;