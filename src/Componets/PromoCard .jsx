import React from "react";
import { FaPlay } from "react-icons/fa";

const PromoCard = ({ image, title, subtitle, buttonText }) => {
  return (
    <div className="relative w-[180px] sm:w-[320px] md:w-[368px] h-[260px] sm:h-[290px] md:h-[321px] bg-[#112430] rounded-[15px] overflow-hidden p-4 sm:p-5 md:p-6">
    {/* Title */}
    <h2 className="text-white font-mono font-extrabold text-[24px] sm:text-[28px] md:text-[32px] flex flex-col leading-[32px] sm:leading-[38px] md:leading-[42px]">
      {title}&nbsp;<span>ACCESSORIES</span>
    </h2>

    {/* Subtitle */}
    <p className="mt-2 text-white font-mono font-light text-[16px] sm:text-[18px] md:text-[22px] leading-[24px] sm:leading-[26px] md:leading-[29px]">
      {subtitle}
    </p>

    {/* Button */}
    <div className="absolute bottom-6 left-6">
      <div className="flex items-center gap-2">
        <FaPlay className="text-gray-300 rotate-90" size={10}   />
        <span className="text-white font-mono font-bold text-[12px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px]">
          {buttonText}
        </span>
      </div>
      <div className="mt-1 h-[3px] w-[70px] sm:w-[100px] md:w-[120px] bg-[#FDC305] rounded-[10px]" />
    </div>

    {/* Image */}
    <img
      src={image}
      alt={title}
      className="absolute right-0 bottom-0 w-[90px] sm:w-[180px] md:w-[220px] object-contain"
    />
  </div>
  );
};

export default PromoCard;
