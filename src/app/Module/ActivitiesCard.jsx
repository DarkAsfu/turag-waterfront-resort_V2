"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import useActivities from "@/hooks/useActivities";
import { SlLocationPin } from "react-icons/sl";

const ActivitiesCard = () => {
  const { activities, loading, error } = useActivities();
  console.log(activities);

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
    <div>
      {activities.map((activity, idx) => (
        <div key={idx} className="bg-[#F7F7F7] xl:py-10">
          <div
            className={`grid md:grid-cols-2 gap-4 lg:gap-10 items-center max-w-7xl mx-auto bg-[#fff] px-4 py-10 rounded-lg`}
          >
            {/* For even index, swap image and content order */}
            <div
              className={`lg:py-16  ${
                idx % 2 === 0 ? "lg:order-1 lg:pl-16" : "lg:order-2 lg:pr-16"
              }`}
            >
              <Image
                className="rounded-md"
                src={`https://api.turagwaterfrontresort.com${activity?.images[0]?.image}`}
                width={700}
                height={500}
                alt="restaurants"
              />
            </div>

            <div
              className={`md:mt-0 lg:px-20 ${
                idx % 2 === 0 ? "lg:order-2 " : "lg:order-1 "
              }`}
            >
              <div className="flex items-center gap-3">
                <p className="flex items-center gap-2 text-primary font-semibold">
                  <SlLocationPin className="text-primary text-[18px]" />
                  <span className="text-primary">{activity.venue}</span>
                </p>
                -<p className="text-primary font-semibold">{activity.slogan}</p>{" "}
              </div>
              <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4">
                {activity.type}
              </h1>
              <div
                className="max-w-none mb-10"
                dangerouslySetInnerHTML={{
                  __html: `${activity?.description.slice(0, 150)}...`,
                }}
              />
              <Link
                href={`activities/${activity.slug}`}
                className="border p-3 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-md"
              >
                {activity.title}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesCard;
