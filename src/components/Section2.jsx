import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Section2 = () => {
  const sideImages = [
    {
      image: 'side1.jpeg',
      text: '5500-050-000',     
      description: 'Stryker Sonopet iQ Ultrasonic Aspirator Console',
      price: '$40,000',
      originalPrice: '$7,050',
      savings: '$1,155'
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
      price: '$65,500'
    },
    {
      image: 'side6.jpeg',
      text: 'MO0067917000',
      description: 'Video Colonoscope and Image Processor with Roll',
      price: 'Contact for Pricing'
    },
  ];

  return (
    <div className="hidden md:block bg-white-100 w-full h-[57.5vh] mt-8">
      <div className="max-w-[1301px] mx-auto bg-[#94cb20] py-4 px-4">
        <h2 className="text-white text-center text-4xl">
          Most <span className="font-extrabold">Popular &gt;</span>
        </h2>
      </div>
      {/* Gray Area with Slider */}
      <div className="max-w-[1301px] mx-auto bg-gray-200 h-[330px] px-4 mt-4">
        <div className="w-full bg-gray-200 pt-2 px-4 pb-4 h-full flex flex-col relative overflow-hidden">
          {/* Slider */}
          <div className="flex-grow relative" style={{ height: 'calc(100% - 80px)' }}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={4}
              navigation={{
                nextEl: '.swiper-button-next-side',
                prevEl: '.swiper-button-prev-side',
              }}
              className="w-full h-auto"
            >
              {sideImages.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full flex flex-col bg-gray-200 overflow-hidden">
                    {/* Image Section */}
                    <div className="w-full h-[200px] mt-4 px-4 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={`Popular Item ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-between p-2 flex-grow overflow-hidden relative h-[95px]">
                      <div className="flex flex-col overflow-hidden">
                        <div className="text-xs font-[Montserrat] text-gray-600 leading-tight">
                          {item.text}
                        </div>
                        <div className="text-sm font-semibold font-[Montserrat] leading-tight line-clamp-2">
                          {item.description}
                        </div>
                      </div>
                      <div className="absolute left-2 bottom-0">
                        <div className="flex justify-between items-end gap-4">
                          <div className={`text-sm tracking-tighter font-[Montserrat] font-bold ${index === 0 ? 'text-sm text-red-500' : 'text-[#94cb20]'}`}>
                            {item.price}
                          </div>
                          {item.originalPrice && (
                            <div className="text-sm font-semibold text-gray-600 ml-auto line-through">
                              Reg {item.originalPrice}
                            </div>
                          )}
                        </div>
                        {item.savings && (
                          <div className="text-xs text-red-600 font-bold ">
                            Clearance save {item.savings}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Navigation arrows */}
            <div className="swiper-button-prev-side absolute -left-4 top-[30%] z-10 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-side absolute -right-4 top-[30%] z-10 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;