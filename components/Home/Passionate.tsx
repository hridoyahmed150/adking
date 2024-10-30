import React from 'react'
import { SiToggltrack } from "react-icons/si";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiRecycleFill } from "react-icons/ri";
import { BiBriefcaseAlt2 } from "react-icons/bi";

function Passionate() {
  return (
    <div className='max-w-[1000px] m-auto'>
      <div className='mt-20 text-center relative'>
        <h1 className='text-4xl font-bold'>WE ARE PASSIONATE</h1>
        <h2 className='text-4xl my-2'>AT WHAT WE DO</h2>
        <span className='w-10 h-[2px] bg-black absolute mb-10'></span>
      </div>
      <div className='flex py-6'>
        <div className='p-4'>
          <div className='flex justify-center'>
            <SiToggltrack className='text-[70px]' fill='#f6ad02' />
          </div>
          <div className='text-center'>
            <h1 className='text-lg font-bold py-5'>STABLE & LONG LIFE</h1>
            <p>
              Our LED sign letters are made of durable material and can be used for more than 50000 hours.
            </p>
          </div>
        </div>
        <div className='p-4'>
          <div className='flex justify-center'>
            <HiOutlineLightBulb className='text-[70px] bg-[#f6ad02] text-white rounded-[50%] p-2' />
          </div>
          <div className='text-center'>
            <h1 className='text-lg font-bold py-5'>ENERGY-SAVING </h1>
            <p>
              The energy-efficient illuminated component LED in our illuminated signs is great for the environment
            </p>
          </div>
        </div>
        <div className='p-4'>
          <div className='flex justify-center'>
            <BiBriefcaseAlt2 className='text-[70px] bg-[#f6ad02] text-white rounded-[50%] p-2' />
          </div>
          <div className='text-center'>
            <h1 className='text-lg font-bold py-5'>EASY MAINTENANCE</h1>
            <p>
              Our sign are also very low maintenance and can last for years without the need for repair work
            </p>
          </div>
        </div>
        <div className='p-4'>
          <div className='flex justify-center'>
            <RiRecycleFill className='text-[70px] bg-[#f6ad02] text-white rounded-[50%] p-2' />
          </div>
          <div className='text-center'>
            <h1 className='text-lg font-bold py-5'>RECYCLABLE</h1>
            <p>
              If you have an existing sign letter that still functional structure, upgrade your sign at a reduced cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Passionate