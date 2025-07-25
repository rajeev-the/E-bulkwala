import React from 'react';
import coverphone from '../assets/image.png'; // Import your image here


const ProductCard = ({title,src}) => {
  return (
    <div className="  flex flex-col w-[193.33px] h-[225px] ">
      {/* Rectangle background */}
      <div className="  w-[193.33px] h-[194.33px] bg-[#F0F0F0] rounded-[6px] flex justify-center items-center">
        <img
          src={src ?src : coverphone} // Replace with actual image path
          alt="Polycarbonate Black Phone Flip Cover"
          className="w-[126.44px] h-[126.44px] shadow-[0px_4px_4px_5px_rgba(255,255,255,0.25)]"
        />
      </div>
       <div className=' w-full h-full flex justify-center items-center'>
        <h2 className='  font-bold text-[16px] leading-[21px]  text-black text-center '>{title? title?.slice(0,20):"Mobile Back Cover" }...  </h2>

       </div>
      {/* Product Title */}
     
    </div>
  );
};

export default ProductCard;
