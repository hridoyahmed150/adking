import React from 'react'
import Link from 'next/link';
import { Button } from "@/components/ui/button";

function ContactForm() {
  return (
    < div className='pt-[75px] h-[80vh]'>
      <div className='text-center pt-5'>
        <h1 className='text-5xl font-bold'>Contact Us</h1>
      </div>
      < form className="max-w-[1100px] m-auto w-full bg-transparent px-8 py-6 space-y-4" >
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
        <Button className='bg-[#f6ad02] hover:bg-[#f6ad02] hover:scale-110 transition-transform duration-300 text-xl' type="button">
          <Link href='/'>Submite
          </Link>
        </Button>
      </form >
    </div >
  )
}

export default ContactForm