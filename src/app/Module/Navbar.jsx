"use client";
import { useState, useEffect } from "react";
import { ArrowRight, MenuIcon, X } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { usePathname } from "next/navigation";
import turag from "@/assets/turag.png";
import dhakaLogo from "@/assets/dhakaNav.png";
import dhakaLogo1 from "@/assets/dhakaFooter.png";
import resort1 from "@/assets/resort1.jpg";
import resort2 from "@/assets/resort2.png";
import resort3 from "@/assets/resort3.jpg";

import {
  DrawerContent,
  HeaderDrawer,
} from "@/components/core/drawer/vaul-header";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import Link from "next/link";
import Social from "./Contact/Social";
import { Button } from "@/components/ui/button";

const items = [
  {
    id: 1,
    classname: "bg-gradient-to-l from-red-400 to-orange-500",
    img: resort1,
  },
  {
    id: 2,
    classname: "bg-gradient-to-r from-blue-300 to-blue-800",
    img: resort2,
  },
  {
    id: 3,
    classname: "bg-gradient-to-tl from-amber-500 to-yellow-400",
    img: resort3,
  },
];

export default function Navbar() {
  const pathname = usePathname(); // Get the current pathname
  const [headerOpen, setHeaderOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Conditionally set the logo based on the pathname
  const logoSrc = pathname === "/dhaka-venue" ? dhakaLogo1 : turag;
  const logoSrc1 = pathname === "/dhaka-venue" ? dhakaLogo : turag;

  return (
    <div
      className={`sticky top-0 z-50 ${
        isScrolled ? "bg-white" : "bg-transparent border-b border-[#37393965]"
      } transition-colors duration-300 relative`}
    >
      <header
        className={`max-w-[94em] mx-auto grid grid-cols-2 md:grid-cols-3 items-center p-2 rounded-md ${
          isScrolled ? "backdrop-blur-md" : ""
        }`}
      >
        {/* <div className="hidden lg:block">
          <Social color={"#b89146"} backgroundColor={"white"} />
        </div> */}
        <HeaderDrawer
          open={headerOpen}
          setOpen={setHeaderOpen}
          drawerBtn={() => {
            return (
              <button className="bg-primary max-w-max justify-self-start  text-white p-2 rounded-md dark:bg-white dark:text-black">
                <MenuIcon />
              </button>
            );
          }}
        >
          <DrawerContent>
            {!isDesktop && (
              <div className="flex justify-center w-full absolute bottom-1 left-0 ">
                <div className="w-16 h-[0.30rem] flex-shrink-0 rounded-full bg-gray-600 my-4" />
              </div>
            )}
            <div className="max-w-[94em] xl:mx-auto gap-4 px-2">
              <div className="flex justify-between items-center align-middle border-b">
                {
                  <button
                    className="flex justify-start p-2 mb-2 rounded-md dark:bg-white dark:text-black bg-primary text-white"
                    onClick={() => setHeaderOpen(false)}
                  >
                    <X />
                  </button>
                }
                <a href={"/"}>
                  <Image
                    className="md:mx-auto text-2xl mb-2 mr-3"
                    src={logoSrc1} // Use the dynamic logo here too
                    alt="logo"
                    width={150}
                    height={120}
                  />
                </a>
              </div>
              <div className="flex justify-between pt-2 pb-4">
                <nav className="flex gap-8 w-[40%] md:w-[30%] lg:w-[20%]">
                  <ul className="text-[16px] space-y-3  font-semibold uppercase pr-8">
                    <li>
                      <a
                        href="/"
                        className="relative flex items-center gap-2 max-w-max after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="relative flex gap-2 items-center max-w-max after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/dhaka-venue">
                        <SparklesText
                          className="text-[16px] xl:text-2xl md:text-lg space-y-2 xl:space-y-4 font-semibold uppercase relative flex gap-2 items-center max-w-max after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                          text="Dhaka Venue"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/gazipur-venue"
                        className="relative flex gap-2 items-center max-w-max after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                      >
                        Gazipur Venue
                      </a>
                    </li>
                    <li>
                      <a
                        href="/activities"
                        className="relative flex items-center gap-2 max-w-max after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                      >
                        Activities
                      </a>
                    </li>
                    <li>
                      <a
                        href="/gallery"
                        className="relative flex items-center gap-2 max-w-max after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                      >
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blogs"
                        className="relative flex items-center gap-2 max-w-max after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="relative flex items-center gap-2 max-w-max after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="/book-now">
                        <ShinyButton>Book Now</ShinyButton>
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 py-4 w-[60%] md:w-[70%] lg:w-[80%] pr-5">
                  {items.map((item) => (
                    <figure
                      key={item.id}
                      className={`inline-block group w-full xl:h-52 relative rounded-md overflow-hidden`}
                    >
                      <div className="w-full h-full">
                        <Image
                          src={item.img}
                          alt={item.img}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
              <div>
                <Social />
              </div>
            </div>
          </DrawerContent>
        </HeaderDrawer>
        <a href="/" aria-label="Go to homepage" className="justify-self-end md:justify-self-center">
          <Image
            src={isScrolled ? logoSrc1 : logoSrc}
            alt="Logo"
            width={150}
            height={120}
          />
        </a>
        <div className="flex items-center justify-self-end gap-3">
          <div className="hidden xl:block">
            <Social color={"#b89146"} backgroundColor={"white"} />
          </div>
          <Link href="/book-now" className="hidden md:block group relative cursor-pointer p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
            <span className="translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block">
              Book Now
            </span>
            <div className="flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300">
              <span>Book Now</span>
              <ArrowRight size={18} />
            </div>
            <div className="absolute top-[40%] left-[12%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-primary  scale-[1] dark:group-hover:bg-[#e7cb6e] group-hover:bg-primary group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] "></div>
          </Link>
        </div>
      </header>
    </div>
  );
}
