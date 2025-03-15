"use client";
import useActivities from "@/hooks/useActivities";
import ActivityCard from "./ActivityCard";

const GazipurVenueActivities = () => {
  const { activities, loading, error } = useActivities("Gazipur");
  console.log(activities);
  return (
    <div className="bg-[#f2f2f2] py-16">
      <div className="max-w-7xl mx-auto">
        <div className="px-4">
          <p className="text-primary font-semibold">Pinnacle of Happiness</p>
          <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold">
            Activities
          </h1>
        </div>
        {activities.map((activity, idx) => (
          <ActivityCard key={idx} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default GazipurVenueActivities;
