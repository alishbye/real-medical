import React from 'react';

export const Section5 = () => {
  const manufacturers = [
    { src: "logo1.jpeg", alt: "Arthrex", name: "Surgical Power" },
    { src: "logo2.jpeg", alt: "ConMed", name: "Visualization" },
    { src: "logo3.jpeg", alt: "Olympus", name: "Flexible Endoscopy" },
    { src: "logo4.jpeg", alt: "Storz", name: "Orthopedic" },
    { src: "logo5.jpeg", alt: "Stryker", name: "Stryker" },
    { src: "logo1.jpeg", alt: "Smith & Nephew", name: "Neurology" },
  ];

  return (
    <section className="w-full py-10">
      {/* Main Heading */}
      <div className="max-w-[1301px] mx-auto mt-0 md:mt-2">
        <h2 className="text-center text-3xl md:text-5xl font-bold md:font-extrabold tracking-tight font-Montserrat">
          Featured Categories
        </h2>
      </div>

      {/* Manufacturer Logos with Names */}
      <div className="max-w-[1150px] mx-auto mt-3 grid grid-cols-3 md:grid-cols-6 gap-0 md:gap-4">
        {manufacturers.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 space-y-1 md:space-y-2"  // Changed to column layout
          >
            <div className="flex justify-center">
              <img
                src={item.src}
                alt={item.alt}
                className="w-28 h-26 md:w-42 md:h-42 object-fill md:object-contain rounded-full"
              />
            </div>
            <h3 className="text-center text-sm md:text-xl font-extrabold text-black">{item.name}</h3>
          </div>
        ))}
      </div>
        <div className="max-w-[1301px] mx-auto mt-6 px-4">
        <p className="text-center text-medium text-gray-500 leading-tight">
       Real Medical Store serves as your reliable partner for premium new and pre-owned medical equipment. We provide an extensive selection of high-quality medical<br />
  devices, equipment, and supplies from reputable manufacturers—all available at special discounted pricing. With more than a decade of industry experience, we've<br />
  established ourselves as a company that consistently surpasses expectations by offering customized solutions and exceptional service to physicians, medical practices,<br />
  and healthcare facilities globally.
  <br /><br />
  At Real Medical Store, we maintain one of the most comprehensive online inventories of medical diagnostic equipment and devices, all offered at consistently<br />
  affordable rates. Our platform caters to both buyers and sellers of new and pre-owned medical equipment, ensuring we can meet all your healthcare equipment<br />
  requirements.
  <br /><br />
  Select Real Medical Store for a dependable, straightforward experience when purchasing medical and surgical equipment. Find out why healthcare professionals<br />
  consistently trust Real Medical for their medical and surgical supply needs!
</p>
      </div>
    </section>
  );
};