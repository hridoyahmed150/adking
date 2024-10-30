import React from 'react'
import Image from 'next/image'
import box from '@/components/image/new.webp'

function Box() {
  return (
    <div className="bg-[#2a2a2a] py-16">
      <div className="max-w-[1000px] m-auto flex items-center">
        <div>
          <Image src={box} alt="Logo" />
        </div>
        <div className='text-center ml-16'>
          <h1 className="text-4xl font-bold text-[#f6ad02]">
            WE PROVIDE <br />
            SAMPLE BOX
          </h1>
          <p className='text-[#f6ad02] text-sm'>
            We recommend our sign sample box, various <br />
            types of sign letters samples, provide you with style <br />
            reference, and bring convenience to your business.
          </p>
          <button className="px-4 py-1 mt-6 border border-[#f6ad02] text-[#f6ad02] hover:text-white hover:bg-[#f6ad02] duration-100">BUY IT</button>
        </div>
      </div>
    </div>
  )
}

export default Box