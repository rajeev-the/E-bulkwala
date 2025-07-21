import React,{useState} from 'react'
import { FaStar, FaShoppingBag, FaHeart, FaMinus, FaPlus } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import watchphoto from '../assets/watchphoto.png'
import PricingTiers from '../Componets/PricingTiers';

const Product = () => {
    const [quantity, setQuantity] = useState(5);
  return (
   <>

<div className="w-full max-w-[1240px] mx-auto bg-white  p-2 md:p-6 flex flex-col lg:flex-row justify-between items-start   relative">
  {/* Left Side - Image Carousel */}
  <div className="bg-[#112430] w-full lg:w-[402px] h-[400px] lg:h-[576px] rounded-[10px] flex flex-col items-center justify-center relative mb-6 lg:mb-0">
    <img
      src={watchphoto}
      alt="Smartwatch"
      className="w-[80%] h-[80%] object-contain"
    />
    
    <div className="absolute bottom-5 flex gap-2">
   
      <div className="w-4 h-3 rounded bg-black" />
      <div className="w-4 h-3 rounded bg-black" />
    </div>


  </div>

  {/* Right Side - Product Info */}
  <div className="w-full lg:w-[650px] px-2 md:px-6">
   
   
      <span className="font-normal text-[14px] md:text-[18px] block mt-1">
          Noise{" "} Icon 2 1.8'' Display with Bluetooth Calling, Women's Edition, AI Voice Assistant Smartwatch (Pink Strap, Regular)
      </span>


    <div className="flex flex-col md:flex-col justify-start items-start  ">
      <div>
        <p className="text-[60px] md:text-[60px] font-['ABeeZee'] ">$8</p>
        <div className="flex items-center space-x-1 mt-1 mb-4 md:mb-6">
          {[...Array(3)].map((_, i) => (
            <FaStar key={i} className="text-[#FDC305] text-xl" />
          ))}
        </div>
      </div>

   
    
   
    </div>

    {/* Buttons */}
    <div className="flex gap-4 md:gap-6 my-6">
      <button className="bg-[#112430] w-[140px] md:w-[180px] h-[60px] md:h-[70px] rounded-[28px] md:rounded-[34px] flex items-center justify-center">
        <FaShoppingBag className="text-white text-[24px] md:text-[30px]" />
      </button>
      <button className="bg-[#112430] w-[140px] md:w-[180px] h-[60px] md:h-[70px] rounded-[28px] flex items-center justify-center">
        <FaHeart className="text-white text-[24px] md:text-[30px]" />
      </button>
    </div>

    {/* Product Details */}
    <div className="mb-6">
      <h3 className="text-[15px] md:text-[25px] font-bold font-['Reddit Mono'] mb-2">Product Details:</h3>
      <p className="text-[12px] md:text-[18px]  leading-[24px]">
        material : aluminum <br />
        Quality : premium <br />
        Manufacture : India  <br />
        Quality : premium <br />
        Manufacture : India
      </p>
    </div>
  </div>

  {/* WhatsApp Icon */}
  <a
    href="https://wa.me"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden lg:block absolute bottom-7 right-5"
  >
    <FaWhatsapp className="text-[50px] md:text-[60px] text-green-500" />
  </a>
</div>


   
   </>
  )
}

export default Product