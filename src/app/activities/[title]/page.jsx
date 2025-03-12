"use client";
import SectionBanner from "@/app/Module/SectionBanner";
import useActivitiesDetails from "@/hooks/useActivitiesDetails";
import { useParams } from "next/navigation";
import activitiesImg from "@/assets/activities.jpg";
import { SliderModal } from "@/app/Module/SliderModal";
import Meta from "@/app/Module/Meta";

const ActivitesDetails = () => {
  const { title } = useParams();
  const { activitiesDetails, isLoading, fetchError } = useActivitiesDetails(title);
  
  const featuredImage = activitiesDetails?.images?.find(
    (img) => img.is_featured
  );

  const imageUrl = featuredImage
    ? `https://api.turagwaterfrontresort.com${featuredImage?.image}`
    : activitiesImg;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error loading activities details. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <Meta title={activitiesDetails?.title} />
      <SectionBanner title={activitiesDetails?.title} img={imageUrl} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-[#333334] text-[15px]">
          {activitiesDetails?.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
          {activitiesDetails?.images?.map((item, index) => (
            <SliderModal 
              key={index} 
              item={item} 
              itemArr={activitiesDetails?.images} 
              uniqueId={`id-${index}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitesDetails;
