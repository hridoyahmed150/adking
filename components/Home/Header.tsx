// components/Header.js
"use client";
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/image/logo.png';
import { IoSearch, IoMenu, IoClose } from "react-icons/io5"; // Import menu and close icons
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <main className='bg-[#f6ad02] fixed w-full z-50 top-0'>
      <div className="container m-auto flex items-center justify-between w-full p-2">
        {/* Logo Section */}
        <div className="w-1/3 flex justify-center cursor-pointer">
          <Image src={logo} alt="Logo" width={60} height={60} />
        </div>

        {/* Menu Links for Desktop */}
        <div className="w-1/3 hidden md:flex justify-center">
          <ul className="flex text-white">
            {[
              { name: 'HOME', path: '/home' },
              { name: 'PRODUCT', path: '/listing' },
              { name: 'BLOGS', path: '/details' },
              { name: 'CONTACT', path: '/contact' },
              { name: 'ABOUT', path: '/about' },
            ].map((item) => (
              <li
                key={item.name}
                className="relative cursor-pointer transition-all duration-100 font-normal hover:font-semibold group mx-3 hover:scale-110"
              >
                <Link href={item.path}>
                  {item.name}
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Search and Mobile Menu Button */}
        <div className="w-1/3 flex justify-end items-center space-x-4">
          {/* Search Section */}
          <div className="relative" ref={searchRef}>
            <input
              type="text"
              placeholder="Search..."
              className={`px-4 py-3 transition-all duration-400 ease-in-out ${isExpanded ? 'w-[300px] bg-gradient-to-r from-white to-[#f5eed3]' : 'w-[20px] bg-transparent'
                } text-gray-700 text-sm uppercase tracking-wider rounded-md border-none focus:outline-none`}
              onFocus={() => setIsExpanded(true)}
            />
            <IoSearch
              className="text-xl absolute top-3 right-3 cursor-pointer"
              onClick={() => setIsExpanded((prev) => !prev)}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl md:hidden focus:outline-none"
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-[#f6ad02] z-40">
          <ul className="flex flex-col items-center space-y-4 py-4 text-white">
            {[
              { name: 'HOME', path: '/home' },
              { name: 'PRODUCT', path: '/listing' },
              { name: 'BLOGS', path: '/details' },
              { name: 'CONTACT', path: '/contact' },
              { name: 'ABOUT', path: '/about' },
            ].map((item) => (
              <li key={item.name} className="cursor-pointer transition-all duration-100 font-normal hover:font-semibold">
                <Link href={item.path} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
