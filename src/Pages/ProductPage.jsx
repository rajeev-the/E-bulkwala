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
              className="h-24 w-24 flex-shrink-0 rounded-xl border-2 border-red-200 bg-red-100 p-2 transition-all hover:border-red-300"
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