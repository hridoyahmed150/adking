// components/Review.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

export default function ClientSwiper() {
  const images = [
    { id: 1, imageUrl: "/product.jpg" },
    { id: 2, imageUrl: "/product.jpg" },
    { id: 3, imageUrl: "/product.jpg" },
    { id: 4, imageUrl: "/product.jpg" },
    { id: 5, imageUrl: "/product.jpg" },
    { id: 6, imageUrl: "/product.jpg" },
    { id: 7, imageUrl: "/product.jpg" },
    { id: 8, imageUrl: "/product.jpg" },
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
        autoplay={{
          delay: 1000, // Delay in milliseconds
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="flex justify-center items-center">
            <div className="flex justify-center">
              <Image
                src={image.imageUrl}
                alt={`Client logo ${image.id}`}
                width={300}
                height={300}
                className="rounded-full 
                  w-[100px] h-[100px]     // Small screen size (e.g., mobile)
                  sm:w-[150px] sm:h-[150px] // Tablet screen size
                  md:w-[200px] md:h-[200px] // Desktop screen size"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination mt-4"></div>
    </div>
  );
}
