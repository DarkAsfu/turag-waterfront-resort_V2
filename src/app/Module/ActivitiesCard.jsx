"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useActivities from "@/hooks/useActivities";
import { SlLocationPin } from "react-icons/sl";
import ActivityCard from "./ActivityCard";

const venue = [
  { id: "", label: "All" },
  { id: "Dhaka", label: "Dhaka" },
  { id: "Gazipur", label: "Gazipur" },
];

const ActivitiesCard = () => {
  const [activeVenue, setActiveVenue] = useState("");
  const { activities: allActivities, loading, error } = useActivities("");
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const filterActivities = async () => {
      setIsLoading(true);
      try {
        if (allActivities) {
          if (activeVenue === "") {
            setFilteredActivities(allActivities);
          } else {
            const filtered = allActivities.filter(activity => activity.venue === activeVenue);
            setFilteredActivities(filtered);
          }
        }
      } finally {
        // Add a small delay to make the loading state visible
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    filterActivities();
  }, [activeVenue, allActivities]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading activities</div>;
  }

  return (
    <div className="max-w-7xl mx-auto bg-[#fff] px-0 md:px-4 py-24">
      <div className="lg:flex justify-between items-center px-4">
        <div>
          <p className="text-primary font-semibold">Pinnacle of Happiness</p>
          <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4">
            Activities
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-2 mt-2 items-center">
            {venue.map((venue) => (
              <button
                key={venue.id}
                onClick={() => setActiveVenue(venue.id)}
                className={`text-[12px] md:text-[16px] rounded-md md:px-6 py-2 md:py-3 font-medium transition-all border ${
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
      <div className="">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
          </div>
        ) : filteredActivities && filteredActivities.length > 0 ? (
          filteredActivities.map((activity, idx) => (
            <ActivityCard key={idx} activity={activity} />
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">No activities found for this venue</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivitiesCard;
