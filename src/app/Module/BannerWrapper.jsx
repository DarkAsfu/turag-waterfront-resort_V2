"use client"; // Mark this as a Client Component

import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./Banner"), { ssr: false });

const BannerWrapper = () => {
  return <Banner />;
};

export default BannerWrapper;
