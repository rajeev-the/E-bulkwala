import React from 'react'
import deliveryhome from '../assets/deliveryhome.png'
import bannerhome from '../assets/bannerhome.png'
import Earphone from '../assets/Earphone.png'

const PromotionalBanner  = () => {
  return (
    <div className="flex flex-col    lg:flex-row gap-4 w-full max-w-[1240px] mx-auto my-10 ">
    {/* Left Section */}
    <div className="relative bg-[#22262F] rounded-md w-full lg:w-[736px] h-[600px] flex flex-col justify-between p-6">
      {/* Image */}
      <img
        src={deliveryhome} // replace with actual path e.g. /images/757fe674-88d3-4a17-9882-fab58685daf5.png
        alt="Delivery"
        className="w-[703px] h-[382px] object-contain mx-auto mt-8"
      />

      {/* Text and Button */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-white font-['Reddit_Mono'] font-extrabold text-[40px] leading-[52px]">
          Bulk Order<br />Available
        </div>
        <button className="bg-white text-[#22262F] font-['Reddit_Mono'] font-extrabold text-[32px] sm:px-6  sm:py-4 rounded-xl">
          SHOP NOW
        </button>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex flex-col gap-4 w-full lg:w-[480px]">
      {/* Top Right - Earbuds */}
      <div className="relative bg-[#112430] rounded-md w-full h-[290px] p-4">
        <div className="absolute top-[170px] left-[24px] text-white font-['Reddit_Mono'] font-bold text-[24px] leading-[31px]">
          Ensure Best<br />Quality Products
        </div>
        <img
          src={Earphone} // replace with R.png path
          alt="Earbuds"
          className="absolute top-[60px] right-4   sm:w-[200px]  w-[160px]  object-contain"
        />
      </div>

      {/* Bottom Right - Trustworthy Section */}
      <div
        className="w-full h-[290px] rounded-md bg-cover bg-center relative"
        style={{ backgroundImage: `url('${bannerhome}')` }} // replace with Gemini image
      >
        <div className="absolute bottom-8 left-5 text-white font-['Reddit_Mono'] font-bold text-[24px] leading-[31px]">
          TrustWorthy<br />Shop by Our Client
        </div>
      </div>
    </div>
  </div>
  )
}

export default PromotionalBanner 