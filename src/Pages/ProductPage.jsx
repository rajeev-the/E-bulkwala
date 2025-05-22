import React from 'react'
import ProductListCard from "../Componets/ProductListCard "
import watchphoto from "../assets/watchphoto.png"

const ProductPage = () => {
  return (
    <>
   <div className="min-h-screen bg-white p-4">
  {/* Mobile Header */}


  <div className="flex flex-col gap-4 lg:flex-row">
    {/* Horizontal Scrollable Categories (Mobile) */}
    <div className="lg:hidden">
      <div className="flex gap-4 overflow-x-auto pb-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-24 w-24 flex-shrink-0 rounded-xl border-2 border-red-200 bg-red-100 p-2 transition-all hover:border-red-300"
          >
            <span className="text-sm font-medium text-red-900">Category {i+1}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Vertical Categories (Desktop) */}
    <div className="hidden lg:flex lg:w- w-[12%]  lg:h-[12%]   lg:flex-col lg:gap-6">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="aspect-square rounded-xl border-2 border-red-200 bg-red-100 p-3 transition-all hover:border-red-300"
        >
          <span className="text-red-900">Category {i+1}</span>
        </div>
      ))}
    </div>

    {/* Main Products Grid */}
    <div className="flex-1 rounded-xl  bg-white shadow-lg">
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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