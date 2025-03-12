"use client";
import Image from "next/image";
import turagLogo from "../../assets/turag.png";
import { Mail, MapPinned, Phone } from "lucide-react";
import Social from "./Contact/Social";
import dhakaLogo from "@/assets/dhakaFooter.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Footer = () => {
  const pathname = usePathname();
  const logoSrc = pathname === "/dhaka-venue" ? dhakaLogo : turagLogo;
  return (
    <div className="bg-[#0E1317]">
      <div className="max-w-7xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Image
              src={logoSrc}
              alt="turag waterfront resort logo"
              width={180}
              height={120}
            />
            <p className="text-[15px] text-[#cccccc] mt-5 max-w-[300px]">
              Ensuring world class Eco Lifestyle & hospitality service since
              2009.
            </p>
          </div>
          <div>
            <h2 className="text-white text-[20px] font-medium">Information</h2>
            <ul className="text-[15px] text-[#cccccc] mt-5 space-y-2">
              <li className="flex items-center gap-2">
                <MapPinned className="text-primary" /> Mouchak-Fulbaria Road
                Chabagan Bazar, Kaliakoir, Gazipur
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-primary" />{" "}
                <a
                  href="mailto:turagwaterfrontresort5541@gmail.com"
                  className="hover:text-primary transition-all"
                >
                  turagwaterfrontresort5541@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-primary" />{" "}
                <a
                  href="tel:+8801730863933"
                  className="hover:text-primary transition-all"
                >
                  +8801730863933
                </a>{" "}
                <a
                  href="tel:+8801730863934"
                  className="hover:text-primary transition-all"
                >
                  +8801730863934
                </a>
              </li>
            </ul>
          </div>
          <div className="md:justify-self-end md:text-right">
            <h2 className="text-white text-[20px] font-medium">Quick Links</h2>
            <ul className="flex flex-col text-[15px] mt-5 space-y-2">
              <Link href="/" className="text-[#cccccc] hover:text-primary transition-all">
                Home
              </Link>
              <Link href="/about" className="text-[#cccccc] hover:text-primary transition-all">
                About
              </Link>
              <Link href="/activities" className="text-[#cccccc] hover:text-primary transition-all">
                Activities
              </Link>
              <Link href="/dhaka-venue" className="text-[#cccccc] hover:text-primary transition-all">
                Dhaka venue{" "}
              </Link>
              <Link href="/gazipur-venue" className="text-[#cccccc] hover:text-primary transition-all">
                Gazipur Venue
              </Link>
              <Link href="/gallery" className="text-[#cccccc] hover:text-primary transition-all">
                Gallery
              </Link>
              <Link href="/blogs" className="text-[#cccccc] hover:text-primary transition-all">
                Blogs
              </Link>
            </ul>
          </div>
        </div>
        <div>
          <hr className="border-[1px] border-[#333333] mt-10 mb-5" />
          <div className="grid md:grid-cols-2 justify-center md:justify-between items-center ">
            <p className="text-[15px] text-[#cccccc] order-2 md:order-2">
              © 2025 Turag Waterfront Resort. All rights reserved.
            </p>
            <div className="md:justify-self-end order-1 md:order-2 mb-6 md:mb-0">
              <Social color="#cccccc" />
            </div>
          </div>
          <h4 className="text-[14px] text-[#ccc] mt-4 text-left">
              Developed by <Link target="_blank" className="text-primary" href="https://ashrafulislam.vercel.app/">Ashraful Islam</Link>
            </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
