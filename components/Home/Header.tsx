// components/Header.js
"use client";
import Image from 'next/image';
import logo from '@/components/image/logo-removebg-preview.png'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';


export default function Header() {

  const [isFocused, setIsFocused] = useState(false);

  return (
    // Header Section
    <main className='bg-yellow-400'>
      <div className="container m-auto flex items-center justify-between w-full p-4">
        {/* Logo Section */}
        <div className="w-1/3 flex justify-center cursor-pointer">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </div>
        <div className="w-1/3 flex justify-center">
          <ul className="flex gap-5 text-white">
            <li className="li">HOME</li>
            <li className="li">SHOP</li>
            <li className="li">ELEMENT</li>
            <li className="li">PAGES</li>
            <li className="li">PORTFOLIO</li>
            <li className="li">BLOGS</li>
          </ul>
        </div>
        {/* Navigation Tools */}
        <div className="w-1/3 flex justify-end items-center space-x-4">
          {/* Search Section */}
          <div className="flex justify-end items-center w-full h-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className={`px-4 py-3 transition-all duration-400 ease-in-out ${isFocused ? 'w-[300px]' : 'w-[20px]'
                  } text-gray-700 text-sm uppercase tracking-wider rounded-md border-none bg-gradient-to-r from-white to-[#f5eed3] focus:outline-none`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <IoSearch className="text-xl absolute top-3 right-3" />
            </div>
          </div>
          {/* User Icon */}
          <div className="cursor-pointer p-1">
            <FaRegUserCircle className='text-2xl' />
          </div>
          {/* Card Icon */}
          <div className="cursor-pointer p-1">
            <MdOutlineLocalGroceryStore className='text-2xl' />
          </div>
        </div>
      </div>
    </main>
  );
}
