// components/Hero.js
import Image from 'next/image';
import BG from '@/public/image/hero.jpg'

export default function Hero() {
  return (
    <div className="relative w-full flex justify-center items-center h-96 mt-[75px]">
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
      </div>
    </div>
  );
}
