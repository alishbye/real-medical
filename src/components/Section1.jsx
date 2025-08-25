import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Section1 = () => {
  const slides = [
    {
      image: 'slider1.jpeg',
      caption: 'Main Slider Image 1'
    },
    {
      image: 'slider2.jpeg',
      caption: 'Main Slider Image 2'
    },
    {
      image: 'slider3.jpeg',
      caption: 'Main Slider Image 3'
    },
    {
      image: 'slider4.jpeg',
      caption: 'Main Slider Image 4'
    },
    {
      image: 'slider5.jpeg',
      caption: 'Main Slider Image 5'
    },
  ];

  const sideImages = [
    {
      image: 'newside.jpeg',
      text: '5500-050-000',     
      description: 'Stryker Sonopet iQ Ultrasonic Aspirator Console',
      price: '$40,000'
    },
    {
      image: 'side2.jpeg',
      text: '718 092',
      description: 'Philips BV Pulsera c-arm',
      price: '$27,995'
    },
    {
      image: 'side3.jpeg',
      text: '8400-000-000',
      description: 'Strykey Multigen 2 Rf Generator',
      price: 'Contact for Pricing'
    },
    {
      image: 'side4.jpeg',
      text: 'MO0067917000',
      description: 'II LithoVue Touch Integrated Monitor Stryker',
      price: '$5,000'
    },
    {
      image: 'side5.jpeg',
      text: '718 092',
      description: 'Integrated Monitor Stryker LII LED AIM Light Source and Image Processor',
      price: '$65,500 '
    },
    {
      image: 'side6.jpeg',
      text: 'MO0067917000',
      description: 'Video Colonoscope and Image Processor with Roll',
      price: 'Contact for Pricing'
    },
  ];

  return (
    <div className="h-[100vh] md:h-[unset] w-full md:pt-[6.5rem]">
      {/* Full-width gray container */}
      <div className="bg-gray-200 w-full h-[100vh] md:h-[78vh]">
        <div className="w-full bg-[#94cb20] text-white text-sm font-medium text-center py-2">
          Welcome to Real Medical Store!
        </div>
        {/* Constrained inner container */}
        <div className="w-full mx-auto p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image slider (main carousel) */}
       <div className="w-full md:px-4 md:w-[66.666%] md:-ml-[90px]">
  <Swiper
    modules={[Autoplay, Pagination]}
    spaceBetween={30}
    slidesPerView={1}
    pagination={{ clickable: true }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    loop={true}
    className="h-[40vh] w-full md:h-[64vh] md:w-[42vw]"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="bg-white h-[280px] w-screen md:h-[63vh] md:w-[40vw] flex items-center justify-center">
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


{/* Mobile Header Section */}
<div className="md:hidden flex flex-col text-center">
  {/* Main Heading */}
  <h2 className="text-xl font-[Montserrat] tracking-tight">
    <span className="font-normal text-3xl">Today's </span>
    <span className="font-bold text-3xl">New Arrivals</span>
  </h2>

  {/* Date Range */}
  <p className="text-2xl mt-0">8/4–8/10</p>

  {/* Description */}
  <p className="text-gray-500 text-xs tracking-wide mt-2 max-w-xs">
    Equipment that has just arrived in our warehouse.
  </p>

  {/* View All Link */}
  <a href="#" className="text-[#6b9217] font-normal text-xl mt-2">
    View all &gt;
  </a>
  {/* Mobile-only image slider */}
<div className="pt-3 -ml-4 -mr-4 relative min-h-[200px]">

  <Swiper
    spaceBetween={6}
    slidesPerView={1.9} // Slight peek of next slide
    grabCursor={true}
    allowTouchMove={true} // Enable swiping
    className="w-full h-auto"
  >
    {sideImages.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="w-full h-[210px] flex flex-col bg-white overflow-hidden">
          {/* Image Section */}
          <div className="w-full h-[120px]">
            <img
              src={item.image}
              alt={`Side Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between p-3 flex-grow overflow-hidden">
            {/* Text & Description */}
            <div className="flex flex-col overflow-hidden">
              <div className="text-[11px] font-[Montserrat] text-gray-500 leading-tight truncate">
                {item.text}
              </div>
              <div className="text-[13px] font-[Montserrat] leading-tight line-clamp-2">
                {item.description}
              </div>
            </div>

            {/* Price */}
            <div className="text-[12px] text-[#94cb20] tracking-tighter font-[Montserrat] font-bold pb-[1px]">
              {item.price}
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
</div>
            {/* Side images */}
            <div className="hidden md:flex w-[680px] px-4 py-0.5 flex-col gap-4 -ml-[13.5%]">
              {/* Image slider with header and text below images */}
              <div className="w-full bg-white pt-2 px-4 pb-4 h-[55%] flex flex-col relative overflow-hidden">
                {/* Today's New Arrivals header inside the same container */}
                <div className="flex justify-between items-center mb-0">
                  <h2 className="font-normal">
                    <span className="text-black-700 text-3xl font-[Montserrat] tracking-tighter">Today's </span>
                    <span className="font-[Montserrat] text-3xl font-bold tracking-tighter">New Arrivals </span> - 
                    <span className="font-black font-[Montserrat] text-3xl tracking-tighter">7/25–7/31</span>
                  </h2>
                  <a href="#" className="text-black-500 text-xl">View all &gt;</a>
                </div>
                <p className="text-gray-500 text-[10px] tracking-wider mb-3">Equipment that has just arrived in our warehouse.</p>

                {/* Image slider */}
                <div className="flex-grow relative" style={{ height: 'calc(100% - 80px)' }}>
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation={{
                      nextEl: '.swiper-button-next-side',
                      prevEl: '.swiper-button-prev-side',
                    }}
                    className="w-full h-auto"
                  >
                    {sideImages.map((item, index) => (
                <SwiperSlide key={index}>
  <div className="w-full h-[200px] flex flex-col bg-white overflow-hidden">
    {/* Image Section */}
    <div className="w-full h-[130px] flex-shrink-0">
      <img
        src={item.image}
        alt={`Side Image ${index + 1}`}
        className="w-full h-full"
      />
    </div>

    {/* Content Section */}
    <div className="flex flex-col justify-between p-2 flex-grow overflow-hidden">
      {/* Text & Description */}
      <div className="flex flex-col overflow-hidden">
        <div className="text-[10px] font-[Montserrat] text-gray-500 leading-tight truncate">
          {item.text}
        </div>
     <div className="text-[10px] font-[Montserrat] leading-tight line-clamp-2 mb-[0.001px]">
  {item.description}
</div>
</div>

{/* Price (always at bottom) */}
<div className="text-[11px] text-[#94cb20] tarcking-tighter font-[Montserrat] font-bold pb-[4px]">
  {item.price}
</div>

    </div>
  </div>
</SwiperSlide>

                    ))}
                  </Swiper>
                  {/* Navigation arrows */}
                  <div className="swiper-button-prev-side absolute -left-4 top-[30%]  z-10 cursor-pointer ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                  <div className="swiper-button-next-side absolute -right-4 top-[30%]  z-10 cursor-pointer ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Image 2 container */}
              <div className="w-full bg-white p-3 h-[24.8vh] text-sm relative mt-0">
                <div className="flex justify-between items-center mb-0">
                  <h2 className="font-normal">
                    <span className="text-black-700 text-3xl font-[Montserrat] font-bold tracking-tighter">Incoming</span> 
                    <span className="font-[Montserrat] text-3xl"> Equipment</span> - 
                    <span className="font-black text-3xl tracking-tighter">7/27–7/30</span>
                  </h2>
                  <a href="#" className="text-black-500 text-xl">View all &gt;</a>
                </div>
                <p className="text-gray-500 text-xs tracking-widest mb-1.5">Equipment that is coming soon</p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border border-black border-collapse font-[Montserrat] text-[10px]">
                    <thead>
                      <tr className="border-b border-black bg-[#DCDDDE]">
                        <th className="py-1 px-2 border border-black font-bold text-xs text-center">SKU</th>
                        <th className="py-1 px-2 border border-black text-left text-xs font-bold">Description</th>
                        <th className="py-1 px-2 border border-black text-center text-xs font-bold">Manufacturer</th>
                        <th className="py-1 px-2 border border-black text-left text-xs font-bold">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd:bg-[#DCDDDE]">
                        <td className="py-0.5 px-2 border border-black text-black-500 text-center underline cursor-pointer">Large-Chuck-Key</td>
                        <td className="py-0.5 px-2 border border-black">Large 1/4&quot; Chuck Key</td>
                        <td className="py-0.5 px-2 border text-center border-black">AA</td>
                        <td className="py-0.5 px-2 border border-black">10</td>
                      </tr>
                      <tr className="odd:bg-[#DCDDDE]">
                        <td className="py-0.5 px-2 border border-black text-black-400 underline text-center cursor-pointer">527-022-150</td>
                        <td className="py-0.5 px-2 border border-black">2.2 mm Veress Needle, 150 mm</td>
                        <td className="py-0.5 px-2 border text-center border-black">AA</td>
                        <td className="py-0.5 px-2 border border-black">10</td>
                      </tr>
                      <tr className="odd:bg-[#DCDDDE]">
                        <td className="py-0.5 px-2 border border-black text-blue-400 underline cursor-pointer"></td>
                        <td className="py-0.5 px-2 border border-black">5.0 mm Endoscopic Clip Appliers, Green, 33 cm</td>
                        <td className="py-0.5 px-2 border text-center border-black">AA</td>
                        <td className="py-0.5 px-2 border border-black">10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;