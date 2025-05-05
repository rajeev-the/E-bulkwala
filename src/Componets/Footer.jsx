import React from 'react'
import google_pay from '../assets/google_pay.png'
import mastercard from '../assets/logo_mastercard.png'
import visa from '../assets/logo_visa.png'

const Footer = () => {
  return (
    <footer style={{ fontFamily: "'Reddit Mono', monospace" }} className="bg-[#0D1C25] text-white py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm ">
      {/* Company Info */}
      <div>
        <h2 className="text-2xl font-bold">BULKWALA</h2>
        <p className="mt-4">
          The best quality electronics accessories provider for the whole world.
        </p>
        <div className="flex gap-3 mt-4 text-lg">
          <i className="fab fa-google"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>

      {/* Store Links */}
      <div>
        <h3 className="font-semibold mb-2 text-lg">Store</h3>
        <ul className="space-y-1">
          <li>Hot Accessories</li>
          <li>Audio & Headphones</li>
          <li>Mobile Accessories</li>
          <li>Wholesale</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      {/* Visit Us */}
      <div>
        <h3 className="font-semibold mb-2 text-lg">Visit Us</h3>
        <ul className="space-y-1">
          <li>New Delhi - 110001</li>
          <li>Street name, Block</li>
          <li>Office Floor 3, Text Info</li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h3 className="font-semibold mb-2 text-lg">Contact Us</h3>
        <ul className="space-y-1">
          <li>Email: support@bulkwala.com</li>
          <li>Phone: +91-XXXXXXXXXX</li>
          <li>Contact Form</li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-[100px]   flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4 text-xs">
      <p>Copyright © 2024 Electroshop</p>
      <div className="flex gap-2 mt-2 md:mt-0">
        <img src={visa} alt="Visa" className="h-12" />
        <img src={mastercard} alt="MasterCard" className="h-12" />
        <img src={google_pay} alt="Google Pay" className="h-12" />
        {/* Add more icons as needed */}
      </div>
    </div>
  </footer>
  )
}

export default Footer