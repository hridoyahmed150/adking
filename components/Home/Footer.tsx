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
          <FaFacebookF className='text-4xl' />
          <IoLogoInstagram className='text-4xl' />
          <FaTwitter className='text-4xl' />
          <IoLogoYoutube className='text-4xl' />
        </div>
        {/* form */}
        <form className="max-w-full w-full bg-transparent px-8 py-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border border-gray-300 text-white p-3 placeholder-gray-300 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-gray-300 text-white p-3 placeholder-gray-300 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-transparent border border-gray-300 text-white p-3 placeholder-gray-300 focus:outline-none"
          />
          <textarea
            placeholder="Type your message here..."
            className="w-full bg-transparent border border-gray-300 text-white p-3 placeholder-gray-300 focus:outline-none"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 font-semibold hover:bg-gray-800 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Footer
