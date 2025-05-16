import React from 'react'
import ProductListCard from "../Componets/ProductListCard "
import watchphoto from "../assets/watchphoto.png"

const ProductPage = () => {
  return (
    <>
     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="mx-2 flex max-w-8xl flex-col gap-6 lg:flex-row">
        {/* Sidebar Cards Section */}
        <div className="flex w-full flex-col gap-6 lg:w-[12%]  lg:h-[12%]  ">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="aspect-square w-full rounded-2xl border border-gray-200 bg-gray-100 transition-all hover:shadow-md"
            />
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 rounded-2xl border-2 border-gray-200 bg-white shadow-xl">
    
            
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6  p-5'>
        <ProductListCard  img={watchphoto}/>
           <ProductListCard  img={watchphoto}/>
              <ProductListCard  img={watchphoto}/>
                 <ProductListCard  img={watchphoto}/>
                    <ProductListCard  img={watchphoto}/>
                       <ProductListCard  img={watchphoto}/>
                          <ProductListCard  img={watchphoto}/>
                             <ProductListCard  img={watchphoto}/>

       </div>
        
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductPage