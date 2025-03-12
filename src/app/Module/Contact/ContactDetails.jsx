import { Mail, MapPinned, Phone } from "lucide-react";
import Social from "./Social";

const ContactDetails = () => {
  return (
    <div className="">
      <h1 className="text-headingColor text-[30px] font-medium mb-6">
        Get In Touch
      </h1>
      <p className="text-[#333334] text-[15px]">
        Send Us Your Query. We Will Get Back You Within 24 Hours.
      </p>
      <div className="flex  gap-4 mt-10 ">
        <Phone className="text-primary" />
        <div className="w-full">
          <h5 className="text-[15px] text-[#666667]">Contact Number:</h5>
          <div className="flex flex-col md:flex-row justify-between gap-2 mt-2">
            <a
              href="tel:+8801730863933"
              className="text-[18px] text-[#0e1317] font-medium hover:text-primary transition-all"
            >
              +8801730863933
            </a>
            <a
              href="tel:+8801730863934"
              className="justify-self-end text-[18px] text-[#0e1317] font-medium hover:text-primary transition-all"
            >
              +8801730863934
            </a>
          </div>
        </div>
      </div>
      <div className="flex  gap-4 mt-10 ">
        <Mail className="text-primary" />
        <div className=" w-full">
          <h5 className="text-[15px] text-[#666667]">Email:</h5>
          <div className="flex justify-between gap-2 mt-2">
            <a
              href="mailto:turagwaterfrontresort5541@gmail.com"
              className="text-[18px] text-[#0e1317] font-medium hover:text-primary transition-all"
            >
              turagwaterfrontresort5541@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="flex  gap-4 mt-10 ">
        <MapPinned className="text-primary" />
        <div className=" w-full">
          <h5 className="text-[15px] text-[#666667]">Corporate Office:</h5>
          <div className="flex justify-between gap-2 mt-2">
            <a
              href="#"
              className="text-[18px] text-[#0e1317] font-medium hover:text-primary transition-all"
            >
              House-19, Road-5, Nikunja-1, Khilkhet, Dhaka-1229
            </a>
          </div>
        </div>
      </div>
      <div className="flex  gap-4 mt-10 ">
        <MapPinned className="text-primary" />
        <div className=" w-full">
          <h5 className="text-[15px] text-[#666667]">Corporate Office:</h5>
          <div className="flex justify-between gap-2 mt-2">
            <a
              href="#"
              className="text-[18px] text-[#0e1317] font-medium hover:text-primary transition-all"
            >
              Mouchak-Fulbaria Road Chabagan Bazar, Kaliakoir, Gazipur
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Social color="#3e4245" />
      </div>
    </div>
  );
};

export default ContactDetails;
