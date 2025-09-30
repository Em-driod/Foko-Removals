const Offer = () => {
  return (
    <div className="w-full bg-white px-4 md:px-28 py-16 ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 max-w-7xl mx-auto">
        <div className="space-y-4 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What we offer at{" "} <br />
            <span className="text-blue-600">Fokoremovals</span>
          </h2>
          <p className="text-gray-600">
            Trusted experts in home and office relocations, <br />
            furniture
            collection and timely delivery
          </p>
        </div>
        <div className="max-w-xs text-gray-500">
          More than 100 Homes, offices, <br />
          companies have used our services <br />
          during
          the years.
        </div>
      </div>

      {/* Cards Section: Use justify-center to center the flex items */}
      {/* Added max-w-7xl and mx-auto to center the whole content block, including the cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-12 max-w-7xl mx-auto">
        
        {/* Card 1 */}
        <div 
          className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col"
          style={{ width: '360px', height: 'auto' }}
        >
          <img
            src="https://images.unsplash.com/photo-1598546143495-8ab9e3c8a2ad"
            alt=" Removals"
            className="w-full h-52 object-cover"
          />
          {/* Content Wrapper */}
          <div className="p-6 space-y-2 flex flex-col flex-grow justify-end">
            <h3 className="text-lg font-semibold text-gray-900">
              House Removals
            </h3>
            <p className="text-gray-600 text-sm">
              Trusted experts in home and office <br /> furniture collection and timely
              delivery.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col"
          style={{ width: '360px', height: 'auto' }}
        >
          <img
            src="https://images.unsplash.com/photo-1593121927605-9e9b2eb01a1c"
            alt="Office Relocation"
            className="w-full h-52 object-cover"
          />
          {/* Content Wrapper */}
          <div className="p-6 space-y-2 flex flex-col flex-grow justify-end">
            <h3 className="text-lg font-semibold text-gray-900">
              Office Relocation
            </h3>
            <p className="text-gray-600 text-sm">
              Seamless moves that minimize downtime <br /> and keep your business
              running smoothly.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition flex flex-col"
          style={{ width: '330px', height: 'auto' }}
        >
          <img
            src="https://images.unsplash.com/photo-1622547748225-06f25a7d0c12"
            alt="Man & Van Services"
            className="w-full h-52 object-cover"
          />
          {/* Content Wrapper */}
          <div className="p-6 space-y-2 flex flex-col flex-grow justify-end">
            <h3 className="text-lg font-semibold text-gray-900">
              Man & Van Services
            </h3>
            <p className="text-gray-600 text-sm">
              Flexible transport solutions for small or <br />
              large moves at short
              notice.
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