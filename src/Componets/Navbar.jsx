import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineKeyboardVoice } from "react-icons/md";

const Navbar = () => {
  return (
    <nav   style={{
      fontFamily: "'Reddit Mono', monospace",
    }} className=" ">

      <div className='flex items-center justify-between   bg-white  px-5  py-1  pt-[20px]     pl-[80px] *'>
    <div className="text-2xl pt-[10px] font-bold">BULKWALA</div>

    <div className="flex items-center border border-gray-300  gap-[180px]  rounded-lg p-2 shadow-md">
        <div className='flex items-center justify-center'>
      <div className="px-1    ">
      <RiSearch2Line size={25} />
      </div>
      <input
        type="text"
        placeholder="Search You Products Here"
        className="flex-grow outline-none text-gray-600  placeholder:text-sm "
      />
      </div>
      <div className="px-2">
      <MdOutlineKeyboardVoice size={25} />
      </div>


   
    </div>
    <div className="flex items-center space-x-4">
      <div className="relative  flex items-center  justify-center space-x-2">
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
       
        <span className='  text-sm     font-semibold  '>Cart</span>
      </div>



      <div className='  flex items-center  justify-center space-x-2'>
        <svg
          className="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          ></path>
        </svg>
            <span  className='text-sm font-semibold' >Account</span>


      </div>
    </div>
    </div>

    <div> 
       <ul className="flex space-x-[80px]  mt-4  py-5    text-sm    font-semibold  pl-[80px] bg-[#C9E0EF] ">
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>    
    </div>

  </nav>
  )
}

export default Navbar