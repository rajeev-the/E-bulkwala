import React from 'react'
import OrderCart from '../Componets/OrderCart'
import orderbag from '../assets/orderbag.png'
import ProductCard from '../Componets/ProductCard '

const Order = () => {
  return (
  <div className='w-full h-full p-10'>
     
     <div className='flex gap-2    items-center   '> 
        <img src={orderbag}  className='w-12 h-12  mb-5'   alt="" />
      
     </div>
      
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                
               <OrderCart/>
                   </div>


                   <section className="mt-5">
  <div>
    <h3 className="text-start font-bold text-2xl">Related Products</h3>

    <div className="mt-5 overflow-x-auto  scrollbar-none [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-4 w-max">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </div>
</section> 


                 

  </div>
  )
}

export default Order