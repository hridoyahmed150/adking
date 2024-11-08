"use client";
import Image from 'next/image';

function ProductList() {
  // Array of card data
  const cards = [
    {
      id: 1,
      image: "/product-1.jpg",
      title: "Acrylic 3D Letter Outdoor LED Sign or Digital Signage or Sign Boards",
      description: "High-quality acrylic signage for outdoor use with LED lighting.Eye-catching custom neon signage designed to attract customers.High-quality acrylic signage for outdoor use with LED lighting"
    },
    {
      id: 2,
      image: "/product-2.jpg",
      title: "Custom Neon Signage for Businesses",
      description: "Eye-catching custom neon signage designed to attract customers.High-quality acrylic signage for outdoor use with LED lighting.High-quality acrylic signage for outdoor use with LED lighting"
    },
    {
      id: 3,
      image: "/product-1.jpg",
      title: "Digital LED Displays for Events",
      description: "Portable and programmable LED displays perfect for events and promotions.Eye-catching custom neon signage designed to attract customers.High-quality acrylic signage for outdoor use with LED lighting"
    },
  ];

  return (
    <div className="space-y-6 pt-[75px] w-[1100px] m-auto pb-10">
      <h1 className="text-4xl font-bold py-28 text-center">OUR PRODUCTS</h1>
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`group flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} border border-[#f6ad02] rounded-lg overflow-hidden mx-auto items-start`}
        >
          {/* Image Section */}
          <div className="overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              width={400}
              height={200}
              className="object-cover transition-transform duration-300 group-hover:scale-110 aspect-video"
            />
          </div>

          {/* Text Section */}
          <div className="p-4 w-2/3 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2 text-[#f6ad02]">{card.title}</h1>
            <p className="text-gray-400 mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-bold">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
