import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

function Footer() {
  return (
    <div className="relative bg-cover" style={{ backgroundImage: `url('/image/bg.jpg')` }}>

      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative max-w-[1000px] m-auto text-center py-16">
        <h1 className="text-5xl text-white font-bold">GET IN TOUCH WITH US</h1>
        <p className="text-white mt-4">Request a led sign letters quote here…! We would love to know you</p>
        <div className='flex text-white justify-center mt-4 gap-4'>
          <FaFacebookF className='text-4xl text-[#f6ad02] hover:text-white' />
          <IoLogoInstagram className='text-4xl text-[#f6ad02] hover:text-white' />
          <FaTwitter className='text-4xl text-[#f6ad02] hover:text-white' />
          <IoLogoYoutube className='text-4xl text-[#f6ad02] hover:text-white' />
        </div>
      </div>
    </div>
  )
}

export default Footer
