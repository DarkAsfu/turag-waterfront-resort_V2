"use client";
import Image from "next/image";
import about from "../../assets/about1.jpg";
import aboutDhaka from "../../assets/about_dhaka.png";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import useAbouts from "@/hooks/useAbouts";

const About = () => {
  const { abouts, loading, error } = useAbouts();
  console.log(abouts);
  return (
    <>
      <div className="max-w-7xl mx-auto py-10 md:py-24 md:gap-6 lg:gap-10 px-4 items-center align-middle">
        {abouts.map((about, idx) => (
          <div key={idx} className="relative grid lg:grid-cols-2 items-center gap-10 mt-10">
            <div className={`text-headingColor ${idx % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
              <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4">
                {about.title}
              </h1>
              <p className="text-[15px] text-[#333334] mb-6">{about.content}</p>
              <Link
                href="/gazipur-venue"
                className="mb-6 flex gap-3 items-center rounded-sm bg-primary px-12 py-3 text-[14px] md:text-[16px] font-medium text-white shadow-sm hover:bg-[#f7c05c] focus:ring-3 focus:outline-hidden sm:w-auto uppercase max-w-max"
              >
                {about.title} <MoveRight />
              </Link>
            </div>
            <div className={`relative ${idx % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc={about.youtube_url}
                thumbnailSrc={`https://api.turagwaterfrontresort.com/${about.thumbnail}`}
                thumbnailAlt="Turag Waterfront Resort"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc={about.youtube_url}
                thumbnailSrc={about.src}
                thumbnailAlt="Turag Waterfront Resort"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;

{
  /* <div className="max-w-7xl mx-auto py-10 md:py-24 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10 px-4 items-center align-middle">
        <div className="relative">
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/q7uPfGn__Jk?si=v0cemaXCn_BWaT3i"
            thumbnailSrc={aboutDhaka.src} // Use .src to get the resolved path
            thumbnailAlt="Turag Waterfront Resort"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/q7uPfGn__Jk?si=v0cemaXCn_BWaT3i"
            thumbnailSrc={aboutDhaka.src}
            thumbnailAlt="Turag Waterfront Resort"
          />
        </div>
        <div className="text-headingColor">
          <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4">
            Dhaka Venue
          </h1>
          <p className="text-[15px] text-[#333334] mb-6">
            Turag Waterfront Resort in Gazipur Dhaka, located 18KM from Gazipur
            Bypass, Dhaka, offers a peaceful retreat by the Turag River on 36
            bighas of land, near Bhawal National Park. Surrounded by lush
            greenery and serene river views, it's the perfect escape from city
            life. The resort features cozy wooden cottages, an open-air dining
            area, a large swimming pool, indoor games, and a kids' play zone.
            Guests can enjoy boating, fishing, and a relaxing atmosphere.
            Founded by Md. Humayun Kabir and Shahin Alambir, the resort
            preserves the traditional riverside lifestyle while providing an
            eco-friendly and tranquil environment for families, corporate
            retreats, and romantic getaways.
          </p>
          <Link
            href="/dhaka-venue"
            className="mb-6 flex gap-3 items-center rounded-sm bg-primary px-12 py-3 text-[14px] md:text-[16px] font-medium text-white shadow-sm hover:bg-[#f7c05c] focus:ring-3 focus:outline-hidden sm:w-auto uppercase max-w-max"
          >
            Dhaka Venue <MoveRight />
          </Link>
        </div>
      </div> */
}
