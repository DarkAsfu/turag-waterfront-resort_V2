"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import resort1 from "@/assets/hero1.jpg";
import resort2 from "@/assets/hero2.jpg";
import resort3 from "@/assets/hero3.jpg";
import Image from "next/image";

// Import your custom CSS
import "./Banner.css"; // Create this file for custom styles

const Banner = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure animations only run on the client
  }, []);

  if (!isClient) return null;

  return (
    <>
      {isClient && (
        <Swiper
          cssMode={true}
          pagination={{
            clickable: true, // Disable click on pagination bullets
          }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper -mt-24"
        >
          {[resort1, resort2, resort3].map((resort, index) => (
            <SwiperSlide key={index}>
              <section
                className="relative bg-zoom bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${resort.src})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative mx-auto max-w-5xl px-4 py-32 flex justify-center items-center text-center min-h-[700px]">
                  <div className="space-y-8">
                    <p className="mt-4 text-[#f7c05c] text-lg md:text-xl lg:text-2xl font-semibold z-10 mx-auto">
                    {index === 0
                        ? "Turag Waterfront Resort Gazipur"
                        : index === 1
                        ? "Turag Waterfront Resort Gazipur"
                        : "Turag Waterfront Resort Dhaka Venue"}
                      
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white capitalize tracking-wide">
                      {index === 0
                        ? "Stay in Cozy Wooden Cottages by the River"
                        : index === 1
                        ? "Experience the beauty of nature by the Turag River"
                        : "Experience Like Your Own Home"}
                    </h1>
                    <div className="mt-8 flex justify-center flex-wrap gap-4 text-center">
                      <a
                        href="/about"
                        className="block rounded-sm bg-primary px-8 sm:px-12 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-medium text-white shadow-sm hover:bg-[#f7c05c] focus:ring-3 focus:outline-hidden sm:w-auto uppercase"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Banner;