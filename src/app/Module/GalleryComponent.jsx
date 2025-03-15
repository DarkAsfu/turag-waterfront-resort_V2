"use client";
import { MediaModal } from "@/components/magicui/modal";
import useGallery from "@/hooks/useGallery";
import useGalleryByType from "@/hooks/useGalleryByType";
import { useEffect, useState } from "react";

const tabs = [
  { id: "All", label: "All" },
  { id: "Outdoor", label: "Outdoor" },
  { id: "Dining", label: "Dining" },
  { id: "Activities", label: "Activities" },
  { id: "Rooms", label: "Rooms" },
  { id: "Interior", label: "Interior" },
  { id: "Events", label: "Events" },
];

const GalleryComponent = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeVenue, setActiveVenue] = useState("All");
  const { gallery, loading, error } = useGallery();
  const { galleryList, isLoading, fetchError } = useGalleryByType(
    activeTab === "All" ? "" : activeTab
  );

  // Get unique venues from gallery data
  const venues = ["All", ...new Set(gallery.map(item => item.venue))];
  console.log(venues);
  // Filter gallery items based on active tab and venue
  const getGalleryToDisplay = () => {
    let filteredGallery = activeTab === "All" ? gallery : galleryList;
    
    if (activeVenue !== "All") {
      filteredGallery = filteredGallery.filter(item => item.venue === activeVenue);
    }
    
    return filteredGallery;
  };

  const noGalleryItems = getGalleryToDisplay().length === 0;

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:flex justify-between items-center pt-10">
          <div>
            <p className="text-primary font-semibold">Show Gallery image by type and venue</p>
            <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4">
              Our Gallery
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            {/* Venue Selection */}
            <div className="grid grid-cols-3 gap-2">
              {venues.map((venue) => (
                <button
                  key={venue}
                  onClick={() => setActiveVenue(venue)}
                  className={`text-[13px] md:text-[16px] border rounded-md px-1 md:px-4 py-2 md:py-3 font-medium transition-all ${
                    activeVenue === venue
                      ? "bg-primary text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  {venue}
                </button>
              ))}
            </div>
            {/* Type Selection */}
            <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-[13px] md:text-[16px] border rounded-md px-1 md:px-4 py-2 md:py-3 font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-white"
                      : "bg-white text-black hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="py-10">
          {(isLoading || loading) ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              {noGalleryItems ? (
                <div className="col-span-full text-center text-gray-500">
                  No gallery images found for the specified type and venue.
                </div>
              ) : (
                getGalleryToDisplay().map((galleryItem) => {
                  const imgSrc = `https://api.turagwaterfrontresort.com${galleryItem?.image}`;
                  return (
                    <MediaModal
                      key={galleryItem.id}
                      imgSrc={imgSrc}
                      alt={galleryItem.alt_text || "Gallery Image"}
                      onError={(e) => {
                        console.error(`Failed to load image: ${imgSrc}`, e);
                      }}
                    />
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryComponent;
