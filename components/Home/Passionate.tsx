import React from 'react';
import { SiToggltrack } from "react-icons/si";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiRecycleFill } from "react-icons/ri";
import { BiBriefcaseAlt2 } from "react-icons/bi";

function Passionate() {
  return (
    <div className="max-w-[1000px] m-auto px-4">
      {/* Header */}
      <div className="md:mt-20 mt-5 text-center relative">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">WE ARE PASSIONATE</h1>
        <h2 className="lg:text-4xl md:text-3xl text-2xl my-2">AT WHAT WE DO</h2>
        <span className="w-10 h-[2px] bg-black absolute left-1/2 transform -translate-x-1/2 mt-2"></span>
      </div>

      {/* Icon Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 py-6">
        <div className="p-4 text-center">
          <div className="flex justify-center">
            <SiToggltrack className="md:text-[70px] text-[50px]" style={{ color: '#f6ad02' }} />
          </div>
          <h1 className="text-lg font-bold md:py-5 py-2">STABLE & LONG LIFE</h1>
          <p>
            Our LED sign letters are made of durable material and can be used for more than 50,000 hours.
          </p>
        </div>

        <div className="p-4 text-center">
          <div className="flex justify-center">
            <HiOutlineLightBulb className="md:text-[70px] text-[50px] bg-[#f6ad02] text-white rounded-full p-2" />
          </div>
          <h1 className="text-lg font-bold md:py-5 py-2">ENERGY-SAVING</h1>
          <p>
            The energy-efficient LED component in our illuminated signs is great for the environment.
          </p>
        </div>

        <div className="p-4 text-center">
          <div className="flex justify-center">
            <BiBriefcaseAlt2 className="md:text-[70px] text-[50px] bg-[#f6ad02] text-white rounded-full p-2" />
          </div>
          <h1 className="text-lg font-bold md:py-5 py-2">EASY MAINTENANCE</h1>
          <p>
            Our signs are low maintenance and can last for years without needing repairs.
          </p>
        </div>

        <div className="p-4 text-center">
          <div className="flex justify-center">
            <RiRecycleFill className="md:text-[70px] text-[50px] bg-[#f6ad02] text-white rounded-full p-2" />
          </div>
          <h1 className="text-lg font-bold md:py-5 py-2">RECYCLABLE</h1>
          <p>
            Upgrade your sign at a reduced cost if you have a structure that is still functional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Passionate;
