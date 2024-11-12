import { Button } from "@/components/ui/button";
import Link from "next/link";
import ClintSwiper from "./ClintSwiper";

export default function Clint() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center relative md:pb-8 pt-2">
        <h1 className="text-3xl font-bold mb-8">Our Clints</h1>
      </div>
      <ClintSwiper />
      <div className='flex justify-center py-6'>
        <Button className='bg-[#f6ad02] hover:bg-[#f6ad02] hover:scale-110 transition-transform duration-300 md:text-xl text-sm' type="button">
          <Link href='/'>View All
          </Link>
        </Button>
      </div>
    </div>
  );
}