import React from 'react'

const MainBox = ({ image, title }) => {
  return (
<div className="relative w-[160px] sm:w-[220px] md:w-[280px] h-[300px] sm:h-[350px] md:h-[407px] rounded-lg overflow-hidden">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
    <h2 className="text-white font-extrabold text-[15px] sm:text-[16px] md:text-[17px] leading-[20px] font-mono tracking-wider">
      {title}
    </h2>
    <div className="mt-1 h-[3px] w-[100px] sm:w-[120px] md:w-[156px] bg-[#FDC305] rounded-[10px] mx-auto" />
  </div>
</div>

  )
}

export default MainBox