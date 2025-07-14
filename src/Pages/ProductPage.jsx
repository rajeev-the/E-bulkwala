import React from 'react'
import ProductListCard from "../Componets/ProductListCard "
import watchphoto from "../assets/watchphoto.png"

const ProductPage = () => {
  return (
  <>
  <div className="min-h-screen bg-white p-4">
    <div className="flex flex-col gap-4 lg:flex-row">
      
      {/* Mobile: Horizontal Scroll Categories */}
      <div className="lg:hidden">
        <div className="flex gap-4 overflow-x-auto pb-3">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-24 w-24 flex-shrink-0 rounded-xl border-2 border-red-200 bg-red-600 p-2 transition-all hover:border-red-300"
            >
              <span className="text-sm font-medium text-red-900">Category {i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Vertical Scroll Categories */}
      <div className="hidden lg:flex lg:w-[12%] max-h-[80vh]     scrollbar-none [&::-webkit-scrollbar]:hidden overflow-y-auto lg:flex-col lg:gap-4 pr-2">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl border-2 border-red-200 bg-red-100 p-3 transition-all hover:border-red-300"
          >
            <span className="text-red-900">Category {i + 1}</span>
          </div>
        ))}
      </div>

      {/* Sticky Product Grid */}
     <div className="flex-1 sticky top-0 bg-white shadow-lg rounded-xl">
  {/* Filters & Sort */}
  <div className="flex flex-wrap justify-between items-center p-4 border-b gap-4">
    {/* Filter Dropdown */}
    <div>
      <label className="mr-2 text-sm font-medium text-gray-700">Filter by:</label>
      <select className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option value="">All</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
      </select>
    </div>

    {/* Sort Dropdown */}
    <div>
      <label className="mr-2 text-sm font-medium text-gray-700">Sort by:</label>
      <select className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option value="latest">Latest</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="popular">Most Popular</option>
      </select>
    </div>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
    {[...Array(8)].map((_, i) => (
      <ProductListCard
        key={i}
        img={watchphoto}
        className="border-2 border-red-100 hover:shadow-red-100"
      />
    ))}
  </div>
</div>

    </div>
  </div>
</>

  )
}

export default ProductPage