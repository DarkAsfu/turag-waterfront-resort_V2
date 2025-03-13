import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import gazipurImg from "@/assets/gazipur.jpeg";
import dhaka from "@/assets/dhaka.jpg";
import Link from "next/link";
const VenuesSection = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 py-16">
        <article className={` relative pb-4  overflow-hidden`}>
          <div className="w-full rounded-md h-full overflow-hidden">
            <Image
              src={
                gazipurImg
              }
              alt={"image"}
              height={600}
              width={1200}
              className="h-full w-full object-cover rounded-xl hover:scale-100 scale-105 transition-all duration-300"
            />
          </div>
          <div className="absolute bottom-2 text-primary w-full p-4 flex justify-between items-center">
            <h3 className="sm:text-xl text-sm bg-primary text-white rounded-xl p-2 px-4">
              Turag Gazipur Venue
            </h3>

            <Link href="/gazipur-venue" className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary   font-medium text-neutral-200 border-2 transition-all duration-300 hover:w-24">
              <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
                Visit
              </div>
              <div className="absolute right-3">
                <MoveUpRight />
              </div>
            </Link>
          </div>
        </article>
        <article className={` relative pb-4  overflow-hidden`}>
          <div className="w-full rounded-md h-full overflow-hidden">
            <Image
              src={
                dhaka
              }
              alt={"image"}
              height={600}
              width={1200}
              className="h-full w-full object-cover rounded-xl hover:scale-100 scale-105 transition-all duration-300"
            />
          </div>
          <div className="absolute bottom-2 text-primary w-full p-4 flex justify-between items-center">
            <h3 className="sm:text-xl text-sm bg-primary text-white rounded-xl p-2 px-4">
              Turag Dhaka Venue
            </h3>

            <Link href="/dhaka-venue" className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary font-medium text-neutral-200 border-2 transition-all duration-300 hover:w-24">
              <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
                Visit
              </div>
              <div className="absolute right-3">
                <MoveUpRight />
              </div>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default VenuesSection;
