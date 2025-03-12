import Image from "next/image";
import about from "../../assets/about1.jpg";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 md:py-24 grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-10 px-4 items-center align-middle">
      <div className="text-headingColor">
        <h1 className="text-[28px] lg:text-[36px] xl:text-[45px] font-semibold mb-4">
          Welcome to Turag Waterfront Resort
        </h1>
        <p className="text-[15px] text-[#333334] mb-6">
          Turag Waterfront Resort in Gazipur Dhaka, located 18KM from Gazipur
          Bypass, Dhaka, offers a peaceful retreat by the Turag River on 36
          bighas of land, near Bhawal National Park. Surrounded by lush greenery
          and serene river views, it’s the perfect escape from city life. The
          resort features cozy wooden cottages, an open-air dining area, a large
          swimming pool, indoor games, and a kids' play zone. Guests can enjoy
          boating, fishing, and a relaxing atmosphere. Founded by Md. Humayun
          Kabir and Shahin Alambir, the resort preserves the traditional
          riverside lifestyle while providing an eco-friendly and tranquil
          environment for families, corporate retreats, and romantic getaways.
        </p>
        <Link
          href="/about"
          className="mb-6 flex gap-3 items-center rounded-sm bg-primary px-12 py-3 text-[14px] md:text-[16px] font-medium text-white shadow-sm hover:bg-[#f7c05c] focus:ring-3 focus:outline-hidden sm:w-auto uppercase max-w-max"
        >
          Read More <MoveRight />
        </Link>
      </div>
      <div className="relative">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/wMzVIOCFhm0?si=bw1rQFXYz6yjt6US"
          thumbnailSrc={about.src} // Use .src to get the resolved path
          thumbnailAlt="Turag Waterfront Resort"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc={about.src}
          thumbnailAlt="Turag Waterfront Resort"
        />
      </div>
    </div>
  );
};

export default About;
