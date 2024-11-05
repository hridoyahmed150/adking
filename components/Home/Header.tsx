// components/Header.js
"use client";
import Image from 'next/image';
import Link from 'next/link';  // Import Link from Next.js
import logo from '@/public/image/logo.png'
import { IoSearch } from "react-icons/io5";
import { useState, useRef, useEffect } from 'react';

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
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
        <div className="w-1/3 flex justify-center">
          <ul className="flex text-white">
            {[
              { name: 'HOME', path: '/home' },
              { name: 'SHOP', path: '/' },
              { name: 'ELEMENT', path: '/' },
              { name: 'PAGES', path: '/' },
              { name: 'PORTFOLIO', path: '/' },
              { name: 'BLOGS', path: '/details' },
            ].map((item) => (
              <li
                key={item.name}
                className="relative cursor-pointer transition-all duration-100 font-normal hover:font-semibold group mx-3 hover:scale-110"
              >
                <Link href={item.path}>
                  {item.name}
                </Link>
                <span
                  className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"
                ></span>
              </li>
            ))}
          </ul>
        </div>
        {/* Navigation Tools */}
        <div className="w-1/3 flex justify-end items-center space-x-4">
          {/* Search Section */}
          <div className="flex justify-end items-center w-full h-full">
            <div className="relative" ref={searchRef}>
              {/* Input Field */}
              <input
                type="text"
                placeholder="Search..."
                className={`px-4 py-3 transition-all duration-400 ease-in-out ${isExpanded ? 'w-[300px] bg-gradient-to-r from-white to-[#f5eed3]' : 'w-[20px] bg-transparent'
                  } text-gray-700 text-sm uppercase tracking-wider rounded-md border-none focus:outline-none`}
                onFocus={() => setIsExpanded(true)}
              />

              {/* Search Icon */}
              <IoSearch
                className="text-xl absolute top-3 right-3 cursor-pointer"
                onClick={() => setIsExpanded((prev) => !prev)} // Toggles expanded state
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
