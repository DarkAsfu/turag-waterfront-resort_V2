"use client";
import SectionBanner from "@/app/Module/SectionBanner";
import { useParams } from "next/navigation";
import bImg from "@/assets/rwc.jpg";
import React, { useRef, useState } from "react";
import useRoomDetails from "@/hooks/useRoomDetails";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bed from "@/assets/icon/bed.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

// import required modules
import {
  Autoplay,
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
} from "swiper/modules";
import Image from "next/image";

const RoomDetails = () => {
  const { title } = useParams();
  const { roomDetails, isLoading, fetchError } = useRoomDetails(title);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error loading room details. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <SectionBanner title={roomDetails?.title} img={bImg} />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div>
          <h3 className="text-[30px] text-headingColor font-semibold">
            {roomDetails?.title}
          </h3>
          <h5 className="text-primary text-[18px] mb-[25px]">
            BDT {roomDetails?.cost}+++ / Night
          </h5>
          <p className="text-[#333334] text-[15px]">
            {roomDetails?.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#B89146",
            }}
            loop={true}
            spaceBetween={10}
            navigation={false}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
            className="mySwiper2 mb-3"
          >
             <>
              {roomDetails?.images
                .filter((image) => !image.is_featured)
                .map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      width={800}
                      height={400}
                      alt="rooms-images"
                      src={`https://api.turagwaterfrontresort.com${image.image}`}
                      style={{ objectFit: "cover" }}
                    />
                  </SwiperSlide>
                ))}
            </>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <>
              {roomDetails?.images
                .filter((image) => !image.is_featured)
                .map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      width={100}
                      height={100}
                      alt="rooms-images"
                      src={`https://api.turagwaterfrontresort.com${image.image}`}
                      style={{ objectFit: "cover" }}
                    />
                  </SwiperSlide>
                ))}
            </>
          </Swiper>
        </div>
        <div>
          <h3 className="text-[30px] text-headingColor font-semibold mt-16">
            Amenities
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 mt-10">
          <>
            {
              roomDetails?.amenities
              ?.map((service, index) => (
                <li key={index} className="text-headingColor text-[18px] font-serif flex gap-5 items-center">
                  <Image width={30} height={30} alt="bed-icon" src={`https://api.turagwaterfrontresort.com${service.icon}`} /> {service.title}
                </li>
              ))
            }
            </>
          </ul>
        </div>
        <div>
          <h3 className="text-[30px] text-headingColor font-semibold mt-16">
            Complementary
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 my-10">
            <>
            {
              roomDetails?.complementary?.map((service, index) => (
                <li key={index} className="text-headingColor text-[18px] font-serif flex gap-5 items-center">
                  <Image width={30} height={30} alt="bed-icon" src={`https://api.turagwaterfrontresort.com${service.icon}`} /> {service.title}
                </li>
              ))
            }
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
