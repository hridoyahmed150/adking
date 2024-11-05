// components/Review.jsx
"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function ReviewHero() {
  const reviews = [
    {
      id: 1,
      name: "Okenna Oparah",
      date: "Oct 22, 2024",
      rating: 5,
      review: "Justin from Pink Plumber was a life saver this morning...",
      imageUrl: "/product.jpg"
    },
    {
      id: 2,
      name: "Robert Pilkington",
      date: "Oct 15, 2024",
      rating: 5,
      review: "Another good experience with Pink Plumber. Very helpful!",
      imageUrl: "/product.jpg"
    },
    {
      id: 3,
      name: "Jason Harris",
      date: "Oct 15, 2024",
      rating: 5,
      review: "Pink Plumber is definitely my new go-to for plumbing issues.",
      imageUrl: "/product.jpg"
    },
    {
      id: 4,
      name: "Linda Jones",
      date: "Oct 10, 2024",
      rating: 4,
      review: "Good service, but it took a bit longer than expected.",
      imageUrl: "/product.jpg"
    },
    {
      id: 5,
      name: "Sarah Lee",
      date: "Oct 5, 2024",
      rating: 5,
      review: "Fantastic work! Highly recommended.",
      imageUrl: "/product.jpg"
    },
    {
      id: 6,
      name: "Alex Morgan",
      date: "Sep 30, 2024",
      rating: 5,
      review: "Quick response and great service!",
      imageUrl: "/product.jpg"
    },
    {
      id: 7,
      name: "Emily Clark",
      date: "Sep 25, 2024",
      rating: 4,
      review: "Professional and friendly team.",
      imageUrl: "/product.jpg"
    },
    {
      id: 8,
      name: "Daniel Roberts",
      date: "Sep 20, 2024",
      rating: 5,
      review: "Exceptional service, very satisfied!",
      imageUrl: "/product.jpg"
    },
    {
      id: 9,
      name: "Sophia Nguyen",
      date: "Sep 15, 2024",
      rating: 5,
      review: "Highly recommend Pink Plumber!",
      imageUrl: "/product.jpg"
    },
  ];

  return (
    <main className="mt-[75px] bg-[#f2f2f2]">
      <div className="flex justify-center bg-gradient-to-b from-[#f1e6cb] to-[#e0bb65] py-[10rem]">
        <h1 className="text-6xl text-white font-bold">The AD KING Reviews</h1>
      </div>
      <div className="max-w-[1100px] m-auto pb-6">
        <h1 className="text-center text-4xl font-bold py-6">Customer Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 bg-white rounded-lg flex flex-col justify-between shadow-lg"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={review.imageUrl}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="text-xl font-semibold text-center">{review.name}</div>
                <span className="text-black text-sm">{review.date}</span>
                <div className="flex text-[#f6ad02] py-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-700 text-center py-2">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
