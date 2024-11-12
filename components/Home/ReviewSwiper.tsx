// components/Review.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

import { FaStar } from "react-icons/fa";

export default function ReviewSwiper() {
  const reviews = [
    {
      id: 1,
      name: "Okenna Oparah",
      date: "Oct 22, 2024",
      rating: 5,
      review: "Justin from Pink Plumber was a life saver this morning...",
      imageUrl: "/product.jpg",
    },
    {
      id: 2,
      name: "Robert Pilkington",
      date: "Oct 15, 2024",
      rating: 5,
      review: "Another good experience with Pink Plumber. Very helpful!",
      imageUrl: "/product.jpg",
    },
    {
      id: 3,
      name: "Jason Harris",
      date: "Oct 15, 2024",
      rating: 5,
      review: "Pink Plumber is definitely my new go-to for plumbing issues.",
      imageUrl: "/product.jpg",
    },
    {
      id: 4,
      name: "Linda Jones",
      date: "Oct 10, 2024",
      rating: 4,
      review: "Good service, but it took a bit longer than expected.",
      imageUrl: "/product.jpg",
    },
    {
      id: 5,
      name: "Sarah Lee",
      date: "Oct 5, 2024",
      rating: 5,
      review: "Fantastic work! Highly recommended.",
      imageUrl: "/product.jpg",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto lg:px-0 md:px-5 px-10">
      <Swiper
        slidesPerView={1} // Set default to 1 for mobile
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[FreeMode, Pagination]}
        className="relative"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="p-4 bg-white rounded-lg flex flex-col justify-between h-auto bg-gradient-to-b from-[#f3dca5] to-[#f6ad02]"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={review.imageUrl}
                alt={review.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <div className="text-lg font-semibold">{review.name}</div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-black">{review.date}</span>
                  <div className="flex text-white">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{review.review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination container */}
      <div className="swiper-pagination mt-4"></div>
    </div>
  );
}
