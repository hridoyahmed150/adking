"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';

const cards = [
  {
    id: 1,
    image: "/product-1.jpg",
    title: "Acrylic 3D Letter Outdoor LED Sign or Digital Signage or Sign Boards",
    description: "High-quality acrylic signage for outdoor use with LED lighting. Eye-catching custom neon signage designed to attract customers.",
  },
  {
    id: 2,
    image: "/product-2.jpg",
    title: "Custom Neon Signage for Businesses",
    description: "Eye-catching custom neon signage designed to attract customers. High-quality acrylic signage for outdoor use with LED lighting.",
  },
  {
    id: 3,
    image: "/product-1.jpg",
    title: "Digital LED Displays for Events",
    description: "Portable and programmable LED displays perfect for events and promotions. High-quality acrylic signage for outdoor use with LED lighting.",
  },
];

function ProductList() {
  const router = useRouter();

  return (
    <div className="flex max-w-[1000px] mx-auto pt-20 pb-10 px-4 md:px-10 lg:px-0">
      {/* Product List Section */}
      <div className="flex-1 pr-4 overflow-y-auto">
        <h1 className="text-3xl md:text-4xl font-bold py-14 text-center">OUR PRODUCTS</h1>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`group flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} border border-[#f6ad02] rounded-lg overflow-hidden mx-auto items-start mb-6`}
            onClick={() => router.push(`/listing/${card.id}`)}
          >
            {/* Image Section */}
            <div className="overflow-hidden w-full md:w-1/3">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={200}
                className="object-cover transition-transform duration-300 group-hover:scale-110
                  w-full h-[200px] md:h-[150px] lg:h-[200px]" // Responsive heights
              />
            </div>

            {/* Text Section */}
            <div className="p-4 w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#f6ad02]">{card.title}</h1>
              <p className="text-gray-400 mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-bold">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Section */}
      <div className='hidden lg:block lg:w-1/4 sticky top-20 h-full px-4 pt-[150px]'>
        <Sidebar />
      </div>
    </div>
  );
}

export default ProductList;
