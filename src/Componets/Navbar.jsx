import React,{useState} from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav style={{ fontFamily: "'Reddit Mono', monospace" }}>
      <div className="flex flex-wrap items-center justify-between bg-white px-5 py-3 md:py-4 lg:px-[80px]">
        {/* Logo */}
        <div className="text-2xl  mt-4  font-bold">BULKWALA</div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-gray-300 gap-4  sm:gap-[150px] rounded-lg p-2 shadow-md w-full md:w-auto md:max-w-[500px] mt-4 md:mt-0">

           
        <div className='flex items-center  gap-2'>
        <RiSearch2Line size={20} />
          <input
            type="text"
            placeholder="Search Your Products Here"
            className="flex-grow outline-none text-gray-600 placeholder:text-sm"
          />


        </div>
        
          <MdOutlineKeyboardVoice size={20} />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {/* Cart */}
          <div className="flex items-center space-x-2">
      

          <svg className="w-6 h-6 text-gray-600 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
  ></path>
</svg>



          
            <span className="text-sm font-semibold hidden md:block">Cart</span>
          </div>

          {/* Account */}
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-gray-600 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
            <span className="text-sm font-semibold hidden md:block" >Account</span>
          </div>

          {/* Hamburger menu (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Search */}
        <div className="w-full md:hidden mt-4">
          <div className="flex items-center border border-gray-300 gap-2 rounded-lg p-2 shadow-md">
            <RiSearch2Line size={20} />
            <input
              type="text"
              placeholder="Search Your Products Here"
              className="flex-grow outline-none text-gray-600 placeholder:text-sm"
            />
            <MdOutlineKeyboardVoice size={20} />
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`bg-[#C9E0EF] w-full ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-[80px] text-sm font-semibold py-4 px-5 md:pl-[80px]">
          <Link to={'/'} className="py-1 md:py-0">Home</Link>
          <li className="py-1 md:py-0">Products</li>
          <li className="py-1 md:py-0">About Us</li>
          <li className="py-1 md:py-0">Contact Us</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar