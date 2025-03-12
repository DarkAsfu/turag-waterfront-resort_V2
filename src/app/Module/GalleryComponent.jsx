"use client";
import { MediaModal } from "@/components/magicui/modal";
import useGallery from "@/hooks/useGallery";
import useGalleryByType from "@/hooks/useGalleryByType";
import { useEffect, useState } from "react";

const tabs = [
  { id: "All", label: "All" }, // Added "All" tab
  { id: "Outdoor", label: "Outdoor" },
  { id: "Dining", label: "Dining" },
  { id: "Activities", label: "Activities" },
  { id: "Rooms", label: "Rooms" },
  { id: "Interior", label: "Interior" },
  { id: "Events", label: "Events" },
];

const GalleryComponent = () => {
  const [activeTab, setActiveTab] = useState("All"); // Default tab is "All"
  const { gallery, loading, error } = useGallery();
  const { galleryList, isLoading, fetchError } = useGalleryByType(
    activeTab === "All" ? "" : activeTab
  ); // Pass empty string for "All"

  useEffect(() => {
    // Fetch gallery items based on the active tab
    // This will automatically trigger when activeTab changes
  }, [activeTab]);

  // Decide which gallery data to display based on the active tab
  const getGalleryToDisplay = () => {
    if (activeTab === "All") {
      return gallery; // Show all gallery items when "All" is selected
    }
    return galleryList; // Show filtered gallery items for other tabs
  };

  // Check if there are no gallery items to display
  const noGalleryItems = getGalleryToDisplay().length === 0;

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-between items-center pt-10">
          <div>
            <p className="text-primary font-semibold">Show Gallery image by type</p>
            <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4">
              Our Gallery
            </h1>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[13px] md:text-[16px] rounded-md px-1 md:px-4 py-2 md:py-3 font-medium transition-all ${
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

        {/* Gallery Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 py-10">
          {noGalleryItems ? (
            <div className="col-span-full text-center text-gray-500">
              No gallery images found for the specified type.
            </div>
          ) : (
            getGalleryToDisplay().map((galleryItem) => {
              const imgSrc = `https://api.turagwaterfrontresort.com${galleryItem?.image}`;
              console.log("Image URL:", imgSrc); // Log the image URL for debugging
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
      </div>
    </div>
  );
};

export default GalleryComponent;
