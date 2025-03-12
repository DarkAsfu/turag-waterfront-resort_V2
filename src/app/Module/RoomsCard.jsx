import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoomsCard = ({ rooms }) => {
  console.log(rooms.length);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rooms.map((room, idx) => {
        const featuredImage = room.images.find(img => img.is_featured);
        return (
          <div key={idx} className="relative group">
            <Link href={`/room-details/${room.slug}`}>
              <div className="relative overflow-hidden">
                {featuredImage ? (
                  <Image
                    src={`https://api.turagwaterfrontresort.com${featuredImage.image}`}
                    width={800} // Replace with the actual width of the image or desired width
                    height={300} // Replace with the actual height of the image or desired height
                    // layout="responsive" // Makes the image responsive
                    alt="Featured Room Image"
                  />
                ) : (
                  <div>No featured image available</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e1317]"></div>
              </div>
              <div className="absolute group-hover:translate-y-[-62px] transition-all duration-300 ease-in-out bottom-[3px] px-[35px] pb-8 z-10">
                <h6 className="text-white font-semibold">
                  <span className="text-primary ">BDT {room.cost}+++</span> / Night
                </h6>
                <h4 className="text-[24px] text-white font-semibold">
                  {room.title}
                </h4>
              </div>
            </Link>

            {/* "Book Now" Button - Hidden by default, shows when the content is hovered */}
            <div className="absolute bottom-[-60px] w-full px-[35px] pb-10 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 ease-in-out">
              <hr className="pb-4 border-[#999]" />
              <Link
                href="/book-now"
                className="flex items-center gap-1 uppercase font-semibold text-[14px] w-full text-[#999]"
              >
                <ChevronRight
                  size={16}
                  className="text-[#999] border rounded-full border-[#999]"
                />{" "}
                Book Now
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomsCard;
