"use client";
import useRoomByType from "@/hooks/useRoomByType";
import RoomsCard from "./RoomsCard";

const DhakaVenueRooms = () => {
  const { roomList, isLoading, fetchError } = useRoomByType("", "Dhaka");
  console.log(roomList);
  return (
    <div className="max-w-7xl mx-auto md:py-24 py-10 px-4">
      <div>
        <p className="text-primary font-semibold">Pinnacle of Comfort</p>
        <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4">
          Dhaka Venue
        </h1>
      </div>

      {isLoading ? (
        <div className=" flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
        </div>
      ) : (
        <RoomsCard rooms={roomList} />
      )}
    </div>
  );
};

export default DhakaVenueRooms;
