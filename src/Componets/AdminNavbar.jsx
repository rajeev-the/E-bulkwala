import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
      <nav className="bg-blue-600 text-white px-4 py-3 shadow-md">
      <ul className="flex space-x-6 text-lg font-medium">
        <li>
          <Link to="/admin" className="hover:text-yellow-300 transition">
            Products
          </Link>
        </li>
        <li>
          <Link to="/admin/update" className="hover:text-yellow-300 transition">
            Update
          </Link>
        </li>
        <li>
          <Link to="/admin/order" className="hover:text-yellow-300 transition">
            Order
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default AdminNavbar 