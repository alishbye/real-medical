import { useState } from 'react';
import { Globe } from 'lucide-react';

const dropdownData = {
  Categories: [
    'Visualization', 'Surgical Power', 'Arthroscopy', 'Sports Medicine', 'Laparoscopy',
    'Neurology & Spine', 'Orthopedic', 'Patient Care', 'Operating Room', 'Urology',
    'Flexible Endoscopy', 'GYN', 'ENT', 'Imaging', 'General Surgery',
    'Anesthesia', 'Cardiovascular', 'Cosmetic Surgery', 'Ophthalmology',
    'Sterile Processing', 'Laboratory', 'Gastrointestinal', 'Dental',
  ],
  Manufacturers: [
    'Arthrex', 'ConMed', 'Stryker', 'Olympus', 'Karl Storz', 'Smith & Nephew',
    'Medtronic', 'Johnson & Johnson', 'Richard Wolf', 'Covidien',
    'Zimmer Biomet', 'Steris', 'FUJIFILM', 'Pentax',
  ],
  Deals: ['Weekly Deals', 'Clearance'],
};

export default function DesktopNavbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div className="hidden md:block w-full fixed z-50 shadow-sm">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-26 py-2 bg-white text-black font-medium border-b border-gray-300 text-xs">
        <div className="flex items-center h-full">
          {/* About with hover dropdown */}
          <div className="relative group h-full flex items-center">
            <div className="pb-2 cursor-pointer">
              <span>About</span>
            </div>
            <div className="absolute left-0 top-full w-48 bg-white rounded-b shadow-lg text-black hidden group-hover:block z-50">
              {['About Us', 'Join Our Team', 'Our Team', 'News'].map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-full flex items-center px-2 transform translate-y-[-4px]">|</div>
          
          {/* Services with hover dropdown */}
          <div className="relative group h-full flex items-center">
            <div className="pb-2 cursor-pointer">
              <span>Services</span>
            </div>
            <div className="absolute left-0 top-full w-48 bg-white rounded-b shadow-lg text-black hidden group-hover:block z-50">
              {['Asset Management', 'Equipment Maintenance', 'Installation Services', 'Training Programs'].map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-full flex items-center px-2 transform translate-y-[-4px]">|</div>
          
          {/* Support with hover dropdown */}
          <div className="relative group h-full flex items-center">
            <div className="pb-2 cursor-pointer">
              <span>Support</span>
            </div>
            <div className="absolute left-0 top-full w-48 bg-white rounded-b shadow-lg text-black hidden group-hover:block z-50">
              {['Warranty and Terms', 'FAQ', 'Return and Refund Policy', 'Technical Support', 'Contact Support'].map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-full flex items-center px-2 transform translate-y-[-4px]">|</div>
          
          {/* Regular menu items */}
          <div className="h-full flex items-center pb-2 cursor-pointer">
            <span>Contact Us</span>
          </div>
          
          <div className="h-full flex items-center px-2 transform translate-y-[-4px]">|</div>
          
          <div className="h-full flex items-center pb-2 cursor-pointer">
            <span>Sell Equipment</span>
          </div>
          
          <div className="h-full flex items-center px-2 transform translate-y-[-4px]">|</div>
          
          <div className="h-full flex items-center pb-2 cursor-pointer">
            <span>Inventory Lists</span>
          </div>
          
          <div className="h-full flex items-center px-2 transform translate-y-[-4px]">|</div>
          
          <div className="h-full flex items-center pb-2 cursor-pointer">
            <span>Catalogs</span>
          </div>
        </div>
        
        <div className="flex items-center">
          <span className="inline-flex items-center cursor-pointer">
            <Globe className="w-4 h-4 mr-1" />
            PK/EN
          </span>
          <span className="px-2 transform translate-y-[-1px]">|</span>
          <span className="cursor-pointer">Login</span>
          <span className="px-2 transform translate-y-[-1px]">|</span>
          <span className="cursor-pointer">Register</span>
        </div>
      </div>

  {/* Main Nav */}
<div className="flex justify-between items-center px-26 py-3 bg-white relative border-b border-gray-200">
  {/* Left - Logo and Nav */}
  <div className="flex items-center space-x-8">
    {/* Replaced text logo with image logo */}
   <div className="flex items-center justify-center h-10"> {/* Container to control alignment */}
      <img 
        src="logo.png" 
        alt="Company Logo" 
       className="h-10 w-10 object-contain transform scale-525"
      />
    </div>
    <div className="flex space-x-6 text-base font-extrabold text-black relative">
      {['Categories', 'Manufacturers', 'Deals', 'Offers'].map((menu) => (
        <div key={menu} className="relative">
          <button
            onClick={() => toggleDropdown(menu)}
            className="cursor-pointer focus:outline-none flex items-center"
          >
            {menu}
            {menu !== 'Offers' && <span className="ml-1 text-xs">▼</span>}
          </button>
          {openDropdown === menu && dropdownData[menu] && (
            <ul
              className="absolute left-0 mt-2 w-56 max-h-96 overflow-y-auto bg-white shadow-lg rounded z-50"
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {dropdownData[menu].map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm font-normal"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </div>

        {/* Right - Search & Icons */}
{/* Right - Search & Icons */}
<div className="flex items-center space-x-4">
  <div className="relative">
    <input
      type="text"
      placeholder="Search"
      className="pl-8 pr-4 py-2 rounded-full bg-gray-200 focus:outline-none text-sm font-normal w-170"
    />
    <svg
      className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85zm-5.242.656a5 5 0 110-10 5 5 0 010 10z" />
    </svg>
  </div>

  {/* Chat bubble outline */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="cursor-pointer"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0-4.556 3.694-8.25 8.25-8.25h3c4.556 0 8.25 3.694 8.25 8.25s-3.694 8.25-8.25 8.25H9.75a.75.75 0 0 0-.53.22l-3.72 3.72a.75.75 0 0 1-1.28-.53V17.25A8.25 8.25 0 0 1 2.25 12z" />
  </svg>

  {/* Camera outline */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="cursor-pointer"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5A2.25 2.25 0 0 1 6 5.25h2.25l1.5-2.25h4.5l1.5 2.25H18A2.25 2.25 0 0 1 20.25 7.5v9A2.25 2.25 0 0 1 18 18.75H6A2.25 2.25 0 0 1 3.75 16.5v-9z" />
    <circle cx="12" cy="12" r="3.75" />
  </svg>
</div>


      </div>
    </div>
  );
}