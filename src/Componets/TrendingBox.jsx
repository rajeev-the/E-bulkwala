import React from 'react'
import pendrive from '../assets/pendrive.png'
import { Bounce } from 'react-toastify'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const TrendingBox = ({img}) => {

  const handleclick =()=>{

toast.success('Product added to cart!', {
position: "top-center",
autoClose: 1200,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  }

  return (
  <div to='/products'>
    <div className="relative w-[180px] sm:w-[320px] md:w-[368px] h-[260px] sm:h-[290px] md:h-[321px] bg-[#112430] rounded-[10px] p-4 flex flex-col items-center justify-between">
    {/* Earbuds Image */}
    <img
      src={img} // Replace with the actual image path
      alt="Wireless Earbuds"
      className="w-[180px] sm:w-[225px] md:w-[225.9px] object-contain mt-4"
    />

    {/* Add to Cart Button */}
    <button onClick={handleclick} className="bg-[#F4CE3D] text-[#112430] font-['Reddit_Mono'] font-extrabold text-[20px] md:text-[24px] rounded-[14px] w-[140px] sm:w-[160px] md:w-[184.85px] h-[45px] md:h-[50px]">
      Add To Cart
    </button>
  </div>
  </div>
  )
}

export default TrendingBox