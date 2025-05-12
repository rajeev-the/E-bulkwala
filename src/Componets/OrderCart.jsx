import React from 'react'
import watchphoto from '../assets/watchphoto.png'

const OrderCart = ({ image, title = "Jacket black with leather", selectedSize = "L" }) => {
  const sizes = ["M", "L", "X"];

  return (
    <div className="flex items-center justify-between bg-white rounded-3xl p-4 shadow-lg w-full max-w-3xl">
      {/* Image */}
      <img src={watchphoto} alt="Product" className="w-20 h-20 rounded-xl object-cover" />

      {/* Info */}
      <div className="flex flex-col justify-center ml-4 flex-grow">
        <h2 className="text-[#112430] font-semibold text-lg">{title}</h2>
        {/* Sizes */}
        <div className="flex gap-2 mt-2">
          {sizes.map((size) => (
            <div
              key={size}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold ${
                selectedSize === size
                  ? 'bg-[#FDC305] text-white'
                  : 'bg-[#112430] text-white'
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Progress Line */}
      <div className="flex items-center ml-6 flex-grow max-w-sm">
        {/* Start Marker */}
    
        {/* Progress Bar */}
      

      
      </div>

    
    </div>
  );
};

export default OrderCart;