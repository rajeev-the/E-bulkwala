import React from 'react'
import pendrive from '../assets/pendrive.png'

const TrendingBox = ({img}) => {
  return (
    <div className="relative w-[180px] sm:w-[320px] md:w-[368px] h-[260px] sm:h-[290px] md:h-[321px] bg-[#112430] rounded-[10px] p-4 flex flex-col items-center justify-between">
    {/* Earbuds Image */}
    <img
      src={img} // Replace with the actual image path
      alt="Wireless Earbuds"
      className="w-[180px] sm:w-[225px] md:w-[225.9px] object-contain mt-4"
    />

    {/* Add to Cart Button */}
    <button className="bg-[#F4CE3D] text-[#112430] font-['Reddit_Mono'] font-extrabold text-[20px] md:text-[24px] rounded-[14px] w-[140px] sm:w-[160px] md:w-[184.85px] h-[45px] md:h-[50px]">
      Add To Cart
    </button>
  </div>
  )
}

export default TrendingBox