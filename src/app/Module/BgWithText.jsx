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
        <p>In this peaceful and tranquil environment, you can have the glimpse of wildlife, firefly processions at night and according to the rules of the resort, during moonlight no light is lit in outside. It is one of the best holiday destination to enjoy the full moon and rain in the rainy season; also to breathe in the fresh air.
        </p>
      </div>
    </div>
  );
};

export default BgWithText;
