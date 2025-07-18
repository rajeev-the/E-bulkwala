import React from 'react'
import { Link } from 'react-router-dom'


const ProductListCard  = ({img , handleclick,id}) => {
  return (
     <Link to={'/products'}  className="bg-white rounded-xl p-4 transition-all duration-300  shadow-xl cursor-pointer max-w-[360px]">
      <div className="flex gap-4">
        {/* Image Section */}
        <div className="relative flex-[40%]">
          <img
            src={img} // Replace with your image path
            alt="OnePlus Buds 3"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Discount Badge */}
          <div className="absolute top-2 right-2 bg-[#FDC305] text-[#112430] px-2 py-1 rounded-full text-xs font-bold">
            ₹1000 OFF
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-[60%] space-y-2">
          {/* Rating Section */}
          <div className="flex items-center gap-2">
            <div className="text-[#FDC305] flex items-center">
              ★★★★☆
              <span className="text-sm ml-1">4.6</span>
            </div>
    
          </div>

          {/* Product Title */}
          <h3 className="font-bold text-[#112430]">OnePlus Buds 3 With Upto 49dB ANC</h3>

          {/* Pricing Section */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#112430]">₹5,499</span>
              <span className="text-gray-500 line-through">₹6,499</span>
            </div>
          </div>

          {/* CTA Button */}
          <button  onClick={()=>handleclick(id)} className="w-full bg-[#112430] text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductListCard 