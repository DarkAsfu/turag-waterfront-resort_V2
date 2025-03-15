"use client";
import { useEffect, useState } from "react";
import RoomsCard from "./RoomsCard";
import useRoomByType from "@/hooks/useRoomByType";

const tabs = [
  { id: "", label: "All" },
  { id: "Deluxe", label: "Deluxe" },
  { id: "Cottage", label: "Cottage" },
  { id: "Suite", label: "Suite" },
  { id: "Villa", label: "Villa" },
  { id: "Platinum", label: "Platinum" },
];
const venue = [
  { id: "", label: "All" },
  { id: "Dhaka", label: "Dhaka" },
  { id: "Gazipur", label: "Gazipur" },
];

const Accommodations = () => {
  const [activeTab, setActiveTab] = useState("");
  const [activeVenue, setActiveVenue] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { roomList, isLoading, fetchError } = useRoomByType(activeTab, activeVenue);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Add a small delay to show loading state

    return () => clearTimeout(timer);
  }, [activeTab, activeVenue]);

  const getRoomsToDisplay = () => {
    return roomList.length > 0 ? roomList : [];
  };

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );

  return (
    <div className="bg-[#F7F7F7] py-10 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:flex justify-between items-center">
          <div>
            <p className="text-primary font-semibold">Pinnacle of Comfort</p>
            <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4">
              Accommodations
            </h1>
          </div>
          <div>
            {/* Custom Tabs */}
            <div className="flex justify-between md:justify-end gap-2 md:gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-[12px] md:text-[16px] rounded-md px-[8px] md:px-6 py-2 md:py-3 font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2 items-center">
                <h3 className="text-primary text-[16px] md:text-[18px] font-semibold ">Venue: </h3>
              {venue.map((venue) => (
                <button
                  key={venue.id}
                  onClick={() => setActiveVenue(venue.id)}
                  className={`text-[12px] md:text-[16px] rounded-md md:px-6 py-2 md:py-3 font-medium transition-all ${
                    activeVenue === venue.id
                      ? "bg-primary text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  {venue.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {(isLoading || isTransitioning) ? (
            <LoadingSpinner />
          ) : (
            <RoomsCard rooms={getRoomsToDisplay()} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
