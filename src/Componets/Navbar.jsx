import { useState } from "react";
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineKeyboardVoice } from "react-icons/md";

const Navbar = () => {
  const productList = ["Sports", "Mobile Cover", "UV Glass", "Tab Tempered", "Mobile Parts", "Fashion", "Beauty",];
  const [menuOpen, setMenuOpen] = useState(false);
  const [getValue, setGetValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const input = e.target.value;
    setGetValue(input);

    if (input.length > 0) {
      const filtered = productList.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (item) => {
    setGetValue(item);
    setSuggestions([]);
  };

  return (
    <nav style={{ fontFamily: "'Reddit Mono', monospace" }}>
      {/* Top bar: Logo + Search + Right Icons */}
      <div className="w-full bg-white px-5 py-3 md:py-4 lg:px-[80px]">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="text-2xl font-bold">BULKWALA</div>
           <div className="hidden md:flex items-center border border-gray-300 gap-4 sm:gap-[150px] rounded-lg p-2 shadow-md w-[35%]">
            <div className="flex items-center gap-2 w-full">
              <RiSearch2Line size={20} />
              <input
                type="text"
                value={getValue}
                onChange={handleChange}
                placeholder="Search Your Products Here"
                className="flex-grow outline-none text-gray-600 placeholder:text-sm"
              />
               <MdOutlineKeyboardVoice size={20} />
            </div>
           
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <span className="text-sm font-semibold hidden md:block">Cart</span>
            </Link>

            {/* Account */}
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span className="text-sm font-semibold hidden md:block">Account</span>
            </div>

            {/* Hamburger Menu (mobile only) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden focus:outline-none"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar (shared container for mobile + desktop) */}
        <div className="relative w-full md:w-auto md:max-w-[500px]   mx-auto">
          {/* Desktop */}
         

          {/* Mobile */}
          <div className="flex md:hidden items-center border mt-2 border-gray-300 gap-2 rounded-lg p-2 shadow-md">
            <RiSearch2Line size={20} />
            <input
              type="text"
              value={getValue}
              onChange={handleChange}
              placeholder="Search Your Products Here"
              className="flex-grow outline-none text-gray-600 placeholder:text-sm"
            />
            <MdOutlineKeyboardVoice size={20} />
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <ul className="absolute  sm:right-[36px] bg-white border border-gray-300 mt-1 w-full max-h-40 overflow-auto z-50 rounded-lg shadow-md">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`bg-[#C9E0EF] w-full ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-[80px] text-sm font-semibold py-4 px-5 md:pl-[80px]">
          <Link to="/" className="py-1 md:py-0">Home</Link>
          <Link to="/products" className="py-1 md:py-0">Products</Link>
          <Link to="/order" className="py-1 md:py-0">Orders</Link>
          <li className="py-1 md:py-0">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
