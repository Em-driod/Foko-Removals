const Offer = () => {
  return (
    <div className="w-full bg-white px-4 md:px-28 py-16 ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 max-w-7xl mx-auto text-center md:text-left">
        <div className="space-y-4 max-w-xl mx-auto md:mx-0">
          <h2
            className="font-bold text-gray-900 text-2xl xs:text-3xl sm:text-4xl md:text-5xl"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontStyle: 'medium',
              fontSize: '2rem', // 32px for mobile
              lineHeight: '2.5rem', // 40px for mobile
              letterSpacing: '-1.5px',
              ...(window.innerWidth >= 768 ? {
                fontSize: '50px',
                lineHeight: '67px',
                letterSpacing: '-3px',
              } : {})
            }}
          >
            What we offer at <br />
            <span className="text-blue-600">Fokoremovals</span>
          </h2>
          <p
            className="text-[#7E8BA5] text-sm xs:text-base sm:text-lg"
            style={{
              fontFamily: 'Arial',
              fontWeight: 400,
              fontStyle: 'regular',
              fontSize: window.innerWidth >= 768 ? '18px' : '0.95rem',
              lineHeight: window.innerWidth >= 768 ? '28px' : '1.4rem',
              letterSpacing: '0px',
            }}
          >
            Trusted experts in home and office relocations, <br />
            furniture collection and timely delivery
          </p>
        </div>
        <div
          className="max-w-xs text-[#7E8BA5] text-sm xs:text-base sm:text-lg mx-auto md:mx-0 hidden md:block"
          style={{
            fontFamily: 'Arial',
            fontWeight: 400,
            fontStyle: 'regular',
            fontSize: window.innerWidth >= 768 ? '18px' : '0.95rem',
            lineHeight: window.innerWidth >= 768 ? '28px' : '1.4rem',
            letterSpacing: '0px',
          }}
        >
          More than 100 Homes, offices, <br />
          companies have used our services <br />
          during the years.
        </div>
      </div>

      {/* Cards Section: Updated to responsive grid and 70/30 split */}
      <div className="grid grid-cols-1 gap-8 mt-12 max-w-7xl mx-auto md:grid-cols-3">
        
        {/* Card 1 */}
        <div
          className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col w-full h-[460px]" // Fixed height for 70/30 split
        >
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
        <div
          className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col w-full h-[460px]"
        >
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
        <div
          className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col w-full h-[460px]"
        >
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

export default Offer;