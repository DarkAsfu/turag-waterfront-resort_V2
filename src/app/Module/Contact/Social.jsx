"use client";
import useSocial from "@/hooks/useSocial";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaPinterestP, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Social = ({ color, backgroundColor }) => {
  const { social } = useSocial();

  return (
    <div>
      <ul>
        <li className="flex flex-wrap items-center xl:gap-2 2xl:gap-4">
          <a
            style={{ color, backgroundColor }}
            className="hover:bg-primary transition-all border border-[#cccccc] hover:border-primary p-1.5 rounded-full"
            target="_blank"
            href={social?.facebook}
          >
            <Facebook size={18} />
          </a>
          <a
            style={{ color, backgroundColor }}
            className="hover:bg-primary transition-all border border-[#cccccc] hover:border-primary p-1.5 rounded-full"
            href={social?.instagram}
            target="_blank"
          >
            <Instagram size={18} />
          </a>
          <a
            style={{ color, backgroundColor }}
            className="hover:bg-primary transition-all border border-[#cccccc] hover:border-primary p-1.5 rounded-full"
            href={social?.youtube}
            target="_blank"
          >
            <Youtube size={18} />
          </a>
          <a
            style={{ color, backgroundColor }}
            className="hover:bg-primary transition-all border border-[#cccccc] hover:border-primary p-1.5 rounded-full"
            href={social?.linkedin}
            target="_blank"
          >
            <Linkedin size={18} />
          </a>
          <a
            style={{ color, backgroundColor }}
            className="hover:bg-primary transition-all border border-[#cccccc] hover:border-primary p-1.5 rounded-full"
            href={social?.twitter}
            target="_blank"
          >
            <FaXTwitter className="text-[18px]" />
          </a>
          <a
            style={{ color, backgroundColor }}
            className="hover:bg-primary transition-all border border-[#cccccc] hover:border-primary p-1.5 rounded-full"
            href={social?.pinterest}
            target="_blank"
          >
            <FaPinterestP className="text-[18px]" />
          </a>
          <a
            style={{ color, backgroundColor }}
            className="hover:bg-primary transition-all border border-[#cccccc] hover:border-primary p-1.5 rounded-full"
            href={social?.tiktok}
            target="_blank"
          >
            <FaTiktok className="text-[18px]" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
