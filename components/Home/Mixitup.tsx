"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Mixitup = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      import('mixitup').then((mixitup) => {
        console.log('MixItUp initialized');
        mixitup.default(containerRef.current, {
          selectors: {
            target: '.mix',
          },
          animation: {
            duration: 300,
          },
        });
      }).catch(err => {
        console.error('Error loading MixItUp:', err);
      });
    }
  }, []);

  // Array of card data
  const cards = [
    { id: 1, category: 'Best', image: '/product.jpg', title: 'Quick View' },
    { id: 2, category: 'Best', image: '/product.jpg', title: 'Quick View' },
    { id: 3, category: 'Best', image: '/product.jpg', title: 'Quick View' },
    { id: 4, category: 'Best', image: '/product.jpg', title: 'Quick View' },
    { id: 5, category: 'Popular', image: '/product.jpg', title: 'Quick View' },
    { id: 6, category: 'Popular', image: '/product.jpg', title: 'Quick View' },
  ];

  return (
    <div className="max-w-[1100px] mx-auto h-full p-6">
      {/* Filter controls */}
      <div className="flex justify-end gap-4 mb-8 mr-4">
        <Button className="btn" type="button" data-filter="all">All</Button>
        <Button className="btn" type="button" data-filter=".Best">Best</Button>
        <Button className="btn" type="button" data-filter=".Popular">Popular</Button>
      </div>

      {/* Container for MixItUp items */}
      <div ref={containerRef} className="mixitup-container grid grid-cols-3 gap-[20px]">
        {cards.map((card) => (
          <div key={card.id} className={`mix ${card.category} flex justify-center`}>
            <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image src={card.image} alt={card.title} width={317} height={317} className="object-cover transition-transform duration-300 cursor-pointer" />
              <Link href={`/details`}>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{card.title}</h3>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mixitup;
