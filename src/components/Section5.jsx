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
        <h2 className="text-center text-3xl md:text-5xl font-bold md:font-extrabold tracking-tight font-[Montserrat]">
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
          AA Medical Store is your trusted source for premium new and used medical equipment. We specialize in offering a vast range of high-quality medical<br></br>devices, equipment, and supplies from trusted manufacturers—all at discounted and special prices. With over ten years of experience, we've built a<br></br> reputation for exceeding expectations by delivering tailored solutions and unparalleled service to doctors, clinics, and hospitals worldwide.
          <br /><br />
          At AA Medical Store, you'll find one of the largest online inventories of medical diagnostic equipment and devices available for purchase at everyday<br></br> low prices. Whether you're looking to buy or sell new or pre-owned medical equipment, our platform is designed to meet your needs.
          <br /><br />
          Choose AA Medical Store for a reliable, hassle-free experience in buying medical and surgical equipment. Discover why AA Medical is the trusted choice for<br></br>medical and surgical supplies today!
        </p>
      </div>
    </section>
  );
};