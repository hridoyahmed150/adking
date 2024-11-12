import React from 'react';
import Image from 'next/image';
import box from '@/public/image/new.webp';

function Box() {
  return (
    <div className="bg-[#2a2a2a] py-8 md:py-16">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center px-4 md:px-0 space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-shrink-0">
          <Image
            className="w-full md:w-[437px] h-auto"
            src={box}
            alt="Sample Box Image"
          />
        </div>
        <div className="text-center md:text-left md:ml-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#f6ad02]">
            WE PROVIDE <br className="hidden md:block" />
            SAMPLE BOX
          </h1>
          <p className="text-[#f6ad02] text-sm md:text-base mt-4 md:mt-6">
            We recommend our sign sample box, with various <br className="hidden md:block" />
            types of sign letter samples, providing you with style <br className="hidden md:block" />
            references and convenience for your business.
          </p>
          <button className="px-4 py-2 mt-6 border border-[#f6ad02] text-[#f6ad02] hover:text-white hover:bg-[#f6ad02] transition duration-500">
            BUY IT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
