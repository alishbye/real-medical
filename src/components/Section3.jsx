import React from "react";

const Section3 = () => {
  const manufacturers = [
  { src: "arthrex.jpeg", alt: "Arthrex", bg: "bg-black" },
  { src: "conmed.jpeg", alt: "ConMed", bg: "bg-[#0F69A1]" },
  { src: "olympus.jpeg", alt: "Olympus", bg: "bg-[#0A4293]" },
  { src: "storz.jpeg", alt: "Storz", bg: "bg-[#0B4094]" },
  { src: "stryker.jpeg", alt: "Stryker", bg: "bg-[#FAA613]" },
  { src: "nephew.jpeg", alt: "Smith & Nephew", bg: "bg-[#F27C19]" },
  ];

  return (
    <section className="w-full py-10">
        <div className="md:hidden bg-gray-200 py-7 -mt-9 flex flex-col text-center">
  {/* Main Heading */}
  <h2 className="text-xl font-Montserrat tracking-tight">
    <span className="font-bold text-3xl">Incoming </span>
    <span className="font-normal text-3xl">Equipment</span>
  </h2>

  {/* Date Range */}
  <p className="text-2xl mt-0">8/4–8/10</p>

  {/* Description */}
  <p className="text-gray-500 text-xs tracking-wide mt-2">
    Equipment that has just arrived in our warehouse.
  </p>

  {/* View All Link */}
  <a href="#" className="text-[#6b9217] text-xl font-normal mt-2">
    View all &gt;
  </a>
  </div>
      {/* Heading */}
      <div className="max-w-[1301px] mx-auto mt-6 md:mt-2">
        <h2 className="text-center text-3xl md:text-5xl font-bold md:font-extrabold font-Montserrat">
          Browse by Top Manufacturers
        </h2>
      </div>

      {/* Manufacturer Logos */}
  <div className="max-w-[1150px] mx-auto mt-4 md:mt-10 grid grid-cols-3 md:grid-cols-6">
      {manufacturers.map((item, index) => (
        <div
          key={index}
          className="flex justify-center items-center px-2 md:px-0 p-2 md:p-3"
        >
          <div
            className={`w-25 h-25 md:w-45 md:h-45 rounded-full flex items-center justify-center ${item.bg}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-20 h-20 md:w-35 md:h-20 object-contain"
            />
          </div>
        </div>
      ))}
</div>

        
        <div className="max-w-[1301px] mx-auto bg-[#94cb20] py-4 mt-8 px-4">
          <h2 className="text-white text-center text-2xl md:text-4xl">
           <span className="font-bold">Endoscopy </span><span className="font-normal tracking-wider">Top Sellers &gt;</span>
          </h2>
        </div>
          
  <div className="max-w-[1301px] mx-auto bg-gray-200 pt-2 px-4 pb-4 h-[200px] md:h-[430px]  px-0 md:px-4 mt-4 flex flex-col relative overflow-hidden">
    {/* Three equal square boxes with titles */}
    <div className="flex flex-1 gap-4">
      {/* Box 1 */}
      <div className="flex-1 bg-white shadow-md overflow-hidden relative">
        <img 
          src="Arthroscopes.jpeg" 
          alt="Product 1"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#94cb20] bg-opacity-70 text-center text-white p-2 md:p-3">
          <h3 className="text-sm md:text-lg font-bold">Arthroscopes</h3>
        </div>
      </div>
      
      {/* Box 2 */}
      <div className="flex-1 bg-white shadow-md overflow-hidden relative">
        <img 
          src="Camera.jpeg" 
          alt="Product 2"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#94cb20] bg-opacity-70 text-center text-white p-2 md:p-3">
          <h3 className="txt-sm md:text-lg font-bold">Camera Systems</h3>
        </div>
      </div>
      
      {/* Box 3 */}
      <div className="hidden md:block flex-1 bg-white shadow-md overflow-hidden relative">
        <img 
          src="Laparoscopes.jpeg" 
          alt="Product 3"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#94cb20] bg-opacity-70 text-center text-white p-3">
          <h3 className="text-lg font-bold">Laparoscopes</h3>
        </div>
      </div>
    </div>
  </div>

      
    </section>
  );
};
export default Section3;
