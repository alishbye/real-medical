import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import {
  FaCcVisa,
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
  FaCcDiscover
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* Top Newsletter Section */}
   <div className="bg-[#94cb20] text-white px-6 py-10">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    {/* Left side: Heading + Icons */}
    <div>
      <h3 className="font-extrabold text-2xl leading-tight">
        Get Updates, Exclusive<br></br> Deals, and More.
      </h3>
      <div className="flex gap-4 text-xl mt-4 ">
        <FaInstagram className="hover:text-gray-300 cursor-pointer" />
        <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
        <FaTwitter className="hover:text-gray-300 cursor-pointer" />
        <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
        <FaYoutube className="hover:text-gray-300 cursor-pointer" />
      </div>
    </div>

    {/* Right side: Email form */}
  <div className="px-5 md:px-15 flex flex-col sm:flex-row w-full md:w-auto gap-3">
  <input
    type="email"
    placeholder="Enter Email Address"
    className="px-4 py-2 bg-white rounded-md outline-none text-black w-full md:w-90"
  />
  <button className="bg-[#090e01] px-6 py-2 rounded-md font-semibold hover:bg-[#8fa268]">
    Sign Up
  </button>
</div>
</div>
</div>

      {/* Links Section */} 
     <div className=" py-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 px-6 gap-10 md:gap-40">
        <div>
          <h4 className="font-extrabold md:font-bold mb-2">Contact Us</h4>
          <div className="text-xs md:text-sm font-bold md:font-normal text-gray-500">
  <p>Corporate Office</p>
  <p>9830 West 190th Street Suite M</p>
  <p>Mokena, IL 60448</p>
  <p>(708) 479-0062</p>
</div>
        </div>

        <div>
          <h4 className="font-extrabold md:font-bold mb-2">About Us</h4>
          <ul className="text-xs md:text-sm font-bold md:font-normal cursor-pointer space-y-1">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Join Our Team</li>
            <li>News</li>
            <li>Shipping Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold md:font-bold mb-2 ">Support</h4>
          <ul className="text-xs md:text-sm font-bold md:font-normal cursor-pointer space-y-1">
            <li>Warranty & Terms</li>
            <li>FAQ</li>
            <li>Return & Refund Policy</li>
            <li>Privacy & Cookie Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold md:font-bold mb-2">Products</h4>
          <ul className="text-xs md:text-sm font-bold md:font-normal cursor-pointer space-y-1">
            <li>Inventory Lists</li>
            <li>Catalogs</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Bottom Section */}
<div className="py-5 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
  <div className="flex gap-3 text-2xl order-1 md:order-none">
    <FaCcVisa />
    <FaCcAmex />
    <FaCcMastercard />
    <FaCcPaypal />
    <FaCcDiscover />
  </div>
  <p className="text-xs w-full text-center mt-4 md:mt-0 order-2 md:order-none">
    © Copyright 2025 AA Medical. All Rights Reserved.
  </p>
</div>
      
    </footer>
  );
};

export default Footer;