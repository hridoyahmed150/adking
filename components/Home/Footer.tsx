import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url('/image/bg.jpg')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative max-w-[1000px] mx-auto text-center lg:py-16 md:py-12 py-8 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
          GET IN TOUCH WITH US
        </h1>
        <p className="text-white mt-4 text-sm md:text-base lg:text-lg">
          Request a LED sign letters quote here…! We would love to know you
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <FaFacebookF className="text-2xl md:text-3xl lg:text-4xl text-[#f6ad02] hover:text-white transition duration-300" />
          <IoLogoInstagram className="text-2xl md:text-3xl lg:text-4xl text-[#f6ad02] hover:text-white transition duration-300" />
          <FaTwitter className="text-2xl md:text-3xl lg:text-4xl text-[#f6ad02] hover:text-white transition duration-300" />
          <IoLogoYoutube className="text-2xl md:text-3xl lg:text-4xl text-[#f6ad02] hover:text-white transition duration-300" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
