// pages/index.js
import ReviewSwiper from "@/components/Home/ReviewSwiper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Review() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center relative md:pb-8 pb-2">
        <h1 className="text-3xl font-bold mb-8">Customer Reviews</h1>
        <ReviewSwiper />
      </div>
      <div className='flex justify-center md:py-6 pb-2'>
        <Button className='bg-[#f6ad02] hover:bg-[#f6ad02] hover:scale-110 transition-transform duration-300 text-xl' type="button">
          <Link href='/reviews'>View All
          </Link>
        </Button>
      </div>
    </div>
  );
}
