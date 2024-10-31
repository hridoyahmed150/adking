// components/Hero.js
import Image from 'next/image';
import BG from '@/public/image/hero.jpg'

export default function Hero() {
  return (
    <div className="relative w-full flex justify-center items-center h-96 mt-[90px]">
      <Image
        src={BG}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Site
        </h1>
        <button className="mt-4 px-6 py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}
