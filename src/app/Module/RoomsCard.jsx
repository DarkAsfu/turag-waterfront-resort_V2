import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Function to group rooms into rows with alternating counts
const groupRoomsIntoRows = (rooms, isMediumDevice) => {
  const rows = [];
  let currentRow = [];
  let count = isMediumDevice ? 2 : 3; // For medium devices, start with 2, otherwise start with 3
  
  rooms.forEach((room) => {
    currentRow.push(room); // Add the room to the current row
    // If the current row reaches the desired count (2 or 3), push it to the rows array
    if (currentRow.length === count) {
      rows.push({ count, items: currentRow }); // Add the row to the rows array
      currentRow = []; // Reset the current row
      // Alternate between 2 and 1 for medium devices, or 3 and 2 for large devices
      count = isMediumDevice ? (count === 2 ? 1 : 2) : (count === 3 ? 2 : 3);
    }
  });

  // If there are remaining rooms that didn't fit in the last row, add them as well
  if (currentRow.length > 0) {
    rows.push({ count, items: currentRow });
  }
  return rows;
};

// RoomsCard Component
const RoomsCard = ({ rooms }) => {
  const [isMediumDevice, setIsMediumDevice] = useState(false);

  // Check if the window width is in the medium breakpoint range
  useEffect(() => {
    const checkDeviceSize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setIsMediumDevice(true); // Medium size
      } else {
        setIsMediumDevice(false); // Not medium size, default to large
      }
    };

    checkDeviceSize(); // Initial check
    window.addEventListener("resize", checkDeviceSize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", checkDeviceSize);
    };
  }, []);

  const rowConfigurations = groupRoomsIntoRows(rooms, isMediumDevice);

  return (
    <div className="space-y-6">
      {rowConfigurations.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid grid-cols-1 ${row.count === 2 ? "md:grid-cols-2" : "md:grid-cols-1"} ${
            row.count === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
          } gap-6`}
        >
          {row.items.map((room, idx) => {
            const featuredImage = room.images.find((img) => img.is_featured);
            return (
              <div
                key={idx}
                className="relative group flex flex-col bg-white border border-gray-300 rounded-lg overflow-hidden"
                style={{ height: "500px" }} // Fixed height for the card
              >
                <Link href={`/room-details/${room.slug}`} className="flex flex-col flex-1">
                  <div className="relative w-full h-[500px]">
                    {/* Fixed height for the image container */}
                    {featuredImage ? (
                      <Image
                        src={`https://api.turagwaterfrontresort.com${featuredImage.image}`}
                        alt="Featured Room Image"
                        width={500}
                        height={300}
                        className="object-cover w-full h-full" // Ensure the image covers the entire container
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        No featured image available
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e1317]"></div>
                  </div>
                  <div className="absolute group-hover:translate-y-[-62px] transition-all duration-300 ease-in-out bottom-[3px] px-[35px] pb-8 z-10">
                    <h6 className="text-white font-semibold">
                      <span className="text-primary">BDT {room.cost}+++</span> / Night
                    </h6>
                    <h4 className="text-[24px] text-white font-semibold">{room.title}</h4>
                  </div>
                </Link>
                <div className="absolute bottom-[-60px] w-full px-[35px] pb-10 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 ease-in-out">
                  <hr className="pb-4 border-[#999]" />
                  <Link href="/book-now" className="flex items-center gap-1 uppercase font-semibold text-[14px] w-full text-[#999]">
                    <ChevronRight size={16} className="text-[#999] border rounded-full border-[#999]" />{" "}
                    Book Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default RoomsCard;
