import React, { useState } from 'react';

const Section4 = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Define dropdown items for each category
  const categoryItems = {
    visualization: [
      "Camera Systems",
      "HDTV Systems",
      "Media Management",
      "Accessories",
      "Device Control",
      "Cystoscopes",
      "Laryngocopes"
    ],
    imaging: [
      "4K Systems",
      "Light Sources",
      "Surgical Monitors",
      "Video Carts",
      "Arthroscopes",
      "Laparoscopes",
      "Sinus Scopes"
    ],
    surgicalPower: [
      "Power Systems",
      "Consoles",
      "Handpieces",
      "Blades",
      "Accessories"
    ],
    generalSurgery: [
      "Electrosurgery",
      "Instruments",
      "Disposables",
      "Retractors",
      "Forceps"
    ],
    arthroscopy: [
      "Arthroscopes",
      "Shavers",
      "Fluid Management",
      "Implants",
      "Sutures"
    ],
    anesthesia: [
      "Machines",
      "Ventilators",
      "Monitors",
      "Disposables",
      "Accessories"
    ],
    sportsMedicine: [
      "Repair Systems",
      "Biologics",
      "Suture Anchors",
      "Rehabilitation"
    ],
    cardiovascular: [
      "Endovascular",
      "Stents",
      "Catheters",
      "Monitoring",
      "Pumps"
    ]
  };

  // Helper component to render items in two columns
const TwoColumnDropdown = ({ items }) => (
  <div className="p-1 px-3 text-lg">
    <div className="grid grid-cols-2 gap-0">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="py-1 hover:underline cursor-pointer"
          onClick={() => console.log(item)} // Add your click handler here
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

  return (
    <section className="py-0">
      {/* Gray Container */}
      <div className="hidden md:block max-w-[1301px] mx-auto bg-gray-200 pb-10 px-4 mt-4">
        <div className="w-full bg-gray-200 px-4 pb-2 h-full flex flex-col relative overflow-hidden">
          {/* Product Catalog Grid */}
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-5xl font-extrabold text-center mt-8">Explore Our Product Catalog</h2>
            
            <div className="grid grid-cols-2 pt-11 gap-2 px-8">
              {/* Column 1 */}
              <div className="flex flex-col gap-2">
                {/* Visualization */}
                <div>
                  <div 
                    className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm h-[3rem] cursor-pointer"
                    onClick={() => toggleDropdown('visualization')}
                  >
                    <span className="font-bold text-lg">Visualization</span>
                    <span className="text-3xl font-bold text-[#94cb20]">
                      {activeDropdown === 'visualization' ? '-' : '+'}
                    </span>
                  </div>
                  {activeDropdown === 'visualization' && (
                    <TwoColumnDropdown items={categoryItems.visualization} />
                  )}
                </div>

                {/* Surgical Power */}
                <div>
                  <div 
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm h-[3rem] cursor-pointer"
                    onClick={() => toggleDropdown('surgicalPower')}
                  >
                    <span className="font-bold text-lg">Surgical Power</span>
                    <span className="text-3xl font-bold text-[#94cb20]">
                      {activeDropdown === 'surgicalPower' ? '-' : '+'}
                    </span>
                  </div>
                  {activeDropdown === 'surgicalPower' && (
                    <TwoColumnDropdown items={categoryItems.surgicalPower} />
                  )}
                </div>

                {/* Arthroscopy */}
                <div>
                  <div 
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm h-[3rem] cursor-pointer"
                    onClick={() => toggleDropdown('arthroscopy')}
                  >
                    <span className="font-bold text-lg">Arthroscopy</span>
                    <span className="text-3xl font-bold text-[#94cb20]">
                      {activeDropdown === 'arthroscopy' ? '-' : '+'}
                    </span>
                  </div>
                  {activeDropdown === 'arthroscopy' && (
                    <TwoColumnDropdown items={categoryItems.arthroscopy} />
                  )}
                </div>

                {/* Sports Medicine */}
                <div>
                  <div 
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm h-[3rem] cursor-pointer"
                    onClick={() => toggleDropdown('sportsMedicine')}
                  >
                    <span className="font-bold text-lg">Sports Medicine</span>
                    <span className="text-3xl font-bold text-[#94cb20]">
                      {activeDropdown === 'sportsMedicine' ? '-' : '+'}
                    </span>
                  </div>
                  {activeDropdown === 'sportsMedicine' && (
                    <TwoColumnDropdown items={categoryItems.sportsMedicine} />
                  )}
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-2">
                {/* Imaging */}
                <div>
                  <div 
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm h-[3rem] cursor-pointer"
                    onClick={() => toggleDropdown('imaging')}
                  >
                    <span className="font-bold text-lg">Imaging</span>
                    <span className="text-3xl font-bold text-[#94cb20]">
                      {activeDropdown === 'imaging' ? '-' : '+'}
                    </span>
                  </div>
                  {activeDropdown === 'imaging' && (
                    <TwoColumnDropdown items={categoryItems.imaging} />
                  )}
                </div>

                {/* General Surgery */}
                <div>
                  <div 
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm h-[3rem] cursor-pointer"
                    onClick={() => toggleDropdown('generalSurgery')}
                  >
                    <span className="font-bold text-lg">General Surgery</span>
                    <span className="text-3xl font-bold text-[#94cb20]">
                      {activeDropdown === 'generalSurgery' ? '-' : '+'}
                    </span>
                  </div>
                  {activeDropdown === 'generalSurgery' && (
                    <TwoColumnDropdown items={categoryItems.generalSurgery} />
                  )}
                </div>

                {/* Anesthesia */}
                <div>
                  <div 
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm h-[3rem] cursor-pointer"
                    onClick={() => toggleDropdown('anesthesia')}
                  >
                    <span className="font-bold text-lg">Anesthesia</span>
                    <span className="text-3xl font-bold text-[#94cb20]">
                      {activeDropdown === 'anesthesia' ? '-' : '+'}
                    </span>
                  </div>
                  {activeDropdown === 'anesthesia' && (
                    <TwoColumnDropdown items={categoryItems.anesthesia} />
                  )}
                </div>

                {/* Cardiovascular */}
                <div>
                  <div 
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm h-[3rem] cursor-pointer"
                    onClick={() => toggleDropdown('cardiovascular')}
                  >
                    <span className="font-bold text-lg">Cardiovascular</span>
                    <span className="text-3xl font-bold text-[#94cb20]">
                      {activeDropdown === 'cardiovascular' ? '-' : '+'}
                    </span>
                  </div>
                  {activeDropdown === 'cardiovascular' && (
                    <TwoColumnDropdown items={categoryItems.cardiovascular} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Most Popular Section */}
      <div className="bg-white-100 w-full -mt-4 md:mt-8">
        <div className="max-w-[1301px] mx-auto bg-[#94cb20] py-4 px-4">
          <h2 className="text-white text-center text-2xl md:text-4xl">
            <span className="font-extrabold">Surgical Power </span>Best Sellers &gt;
          </h2>
        </div>
      </div>
  <div className="bg-[#c4cfd9] max-w-[1301px] mx-auto pt-2 px-4 pb-4 flex flex-col relative h-auto mt-4">
  {/* New layout with outer boxes and center stacked boxes */}
  <div className="flex flex-col md:flex-row flex-1 gap-4 h-auto md:h-full">
    
    {/* Left large box */}
    <div className="flex-2 bg-white relative h-[250px] md:h-full">
      <img 
        src="Section4.png" 
        alt="Battery Handpieces"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-[#94cb20] bg-opacity-70 text-center text-white p-3">
        <h3 className="text-lg font-semibold">Battery Handpieces</h3>
      </div>
    </div>
    
    {/* Middle two vertically stacked boxes */}
    <div className="flex-1 flex flex-col gap-2 h-[500px] md:h-full overflow-hidden">
      {/* Top small box */}
      <div className="flex-1 bg-white min-h-[150px] md:min-h-0 relative">
        <img 
          src="box2.png" 
          alt="Pneumatic Handpieces"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#94cb20] bg-opacity-70 text-center text-white p-3">
          <h3 className="text-lg font-semibold">Pneumatic Handpieces</h3>
        </div>
      </div>
      
      {/* Bottom small box */}
      <div className="flex-1 bg-white min-h-[150px] md:min-h-0  relative">
        <img 
          src="box1.png" 
          alt="High Speed Handpieces"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#94cb20] bg-opacity-70 text-center text-white p-3">
          <h3 className="text-lg font-semibold">High Speed Handpieces</h3>
        </div>
      </div>
    </div>
    
    {/* Right large box */}
    <div className="hidden md:block flex-1 bg-white relative h-[250px] md:h-full">
      <img 
        src="section4big.png" 
        alt="Surgical Instruments"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-[#94cb20] bg-opacity-70 text-center text-white p-3">
        <h3 className="text-lg font-semibold">Surgical Instruments</h3>
      </div>
    </div>

  </div>
</div>



    </section>
  );
};

export default Section4;