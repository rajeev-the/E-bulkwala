import React from "react";
import { FaPlay } from "react-icons/fa";

const PromoCard = ({ image, title, subtitle, buttonText }) => {
  return (
    <div className="relative  w-[368px] h-[321px]  bg-[#112430] rounded-[15px] overflow-hidden p-6">
      {/* Title */}
      <h2 className="text-white font-mono font-extrabold text-[32px] flex  flex-col leading-[42px]">
        {title}&nbsp; <span className="">ACCESSORIES</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-2 text-white font-mono font-light text-[22px] leading-[29px]">
        {subtitle}
      </p>

      {/* Button */}
      <div className="absolute bottom-6 left-6">
        <div className="flex items-center gap-2">
          <FaPlay className="text-gray-300 rotate-90" size={12} />
          <span className="text-white font-mono font-bold text-[20px] leading-[26px]">
            {buttonText}
          </span>
        </div>
        <div className="mt-1 h-[3px] w-[130px] bg-[#FDC305] rounded-[10px]" />
      </div>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute right-0 bottom-0 w-[220px] object-contain"
      />
    </div>
  );
};

export default PromoCard;
