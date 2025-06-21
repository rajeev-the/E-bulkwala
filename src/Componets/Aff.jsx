import React from 'react'
import banner from "../assets/20250621_1340_Affiliate Marketing Icons_remix_01jy8rje97f9wr74pxqfc8abz7.png"
import {
  FaDollarSign,
  FaBullhorn,
  FaShoppingCart,
  FaNetworkWired,
  FaUserCircle,
} from 'react-icons/fa'

const Aff = () => {



  return (
    
   <div className="relative mb-[50px] h-[350px] bg-[#076bcb] flex items-center justify-between px-8 rounded-xl shadow-md overflow-hidden">
      {/* Background icons */}
      
      {/* Left Section: Text */}
      <div className="flex flex-col gap-4 max-w-xl z-10">
        <h1 className="text-4xl font-bold text-white">
           EARN WHILE <br /> YOU SHARE!
        </h1>
         <p className="text-gray-200 text-base">
          Join our Affiliate Program &amp; Make Money Promoting Products You Love.
        </p>
         <button className="bg-yellow-400 text-[#0D1C25] font-semibold px-4 py-2 rounded w-max shadow">
          START EARNING NOW
        </button>
      </div>

      {/* Right Section: Image */}
      <img
        src={banner}
        alt="Tech Bundle"
        className="h-full object-contain z-10 drop-shadow-xl"
      />
    </div>
  )
}

export default Aff