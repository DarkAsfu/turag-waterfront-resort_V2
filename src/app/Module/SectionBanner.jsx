'use client'

import { useEffect, useState } from 'react';
import Image from "next/image";

const SectionBanner = ({ title, img }) => {
  const [isDhakaVenue, setIsDhakaVenue] = useState(false);

  useEffect(() => {
    // Check if the current pathname is "/dhaka-venue" after the component mounts
    if (window.location.pathname === '/dhaka-venue') {
      setIsDhakaVenue(true);
    }
  }, []);

  return (
    <section className={`relative h-[60vh] lg:h-[50vh] flex items-center justify-center ${!isDhakaVenue ? '-mt-32' : '-mt-32'}`}>
      {/* Background Image */}
      <Image
        src={img}
        alt="room-img"
        fill={true}
        style={{objectFit: "cover"}}
        className="absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 mt-16 max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div>
          <h1 className="text-white text-[36px] md:text-[45px] font-medium">{title}</h1>
          <p className="text-white text-[14px] font-medium">
            Home - <span className="text-primary">{title}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionBanner;
