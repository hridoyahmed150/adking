"use client";
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/image/logo.png';
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from 'react';
import { usePathname } from 'next/navigation';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const pathname = usePathname();

  return (
    <main className='bg-[#f6ad02] fixed w-full z-50 top-0'>
      <div className="max-w-[1000px] m-auto flex items-center justify-between w-full p-2">
        {/* Logo Section - Align Left */}
        <div className="w-1/3 flex md:justify-start justify-center cursor-pointer">
          <Image src={logo} alt="Logo" width={60} height={60} />
        </div>

        {/* Menu Links for Desktop - Align Right */}
        <div className="w-1/3 hidden md:flex justify-end">
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
                className={`relative cursor-pointer transition-all duration-100 font-normal hover:font-semibold group mx-3 hover:scale-110 ${pathname === item.path ? 'font-semibold' : ''
                  }`}
              >
                <Link href={item.path}>
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out ${pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                ></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="w-1/3 flex justify-end items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none"
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
              <li
                key={item.name}
                className={`cursor-pointer transition-all duration-100 font-normal hover:font-semibold ${pathname === item.path ? 'font-semibold underline' : ''
                  }`}
              >
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
