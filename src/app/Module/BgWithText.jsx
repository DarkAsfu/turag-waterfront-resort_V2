import React from "react";
import topview from "../../assets/topview.jpg"; // Ensure the image is inside src/assets/

const BgWithText = () => {
  return (
    <div
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(https://i.ibb.co.com/XkM8ZKpj/edited.jpg)` }} // Use imported image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000] opacity-70"></div>

      {/* Content */}
      <div className="relative text-[#f8f9fa] max-w-4xl mx-auto md:leading-10 tracking-wide text-center z-10 text-[16px] md:text-[24px] px-4">
        <p>Turag Waterfront Resort is the best resort in Gazipur Dhaka, offering a peaceful place by the Turag River. It is the perfect place to relax and enjoy nature away from the busy city. Our cozy river-view wooden cottages let you wake up to fresh air and the sound of flowing water. Stay close to nature while enjoying modern comforts. 
        </p>
      </div>
    </div>
  );
};

export default BgWithText;
