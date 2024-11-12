// components/Review.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export default function ClientSwiper() {
  const images = [
    { id: 1, imageUrl: "/product.jpg" },
    { id: 2, imageUrl: "/product.jpg" },
    { id: 3, imageUrl: "/product.jpg" },
    { id: 4, imageUrl: "/product.jpg" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="flex justify-center items-center">
            <div className="flex justify-center">
              <Image
                src={image.imageUrl}
                alt={`Client logo ${image.id}`}
                width={300} // Default width for larger screens
                height={300} // Default height for larger screens
                className="rounded-full 
                  w-[150px] h-[150px]     // Small screen size (e.g., mobile)
                  sm:w-[200px] sm:h-[200px] // Tablet screen size
                  md:w-[300px] md:h-[300px] // Desktop screen size"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination mt-4"></div>
    </div>
  );
}
