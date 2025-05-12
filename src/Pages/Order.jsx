import React from 'react'
import OrderCart from '../Componets/OrderCart'

const Order = () => {
  return (
  <div className='w-full h-full p-10'>
              <h1 className='  text-start  text-3xl mt-2 font-semibold'>Order </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                
               <OrderCart/>
                   </div>


                   <h2 className='text-center  text-3xl'> ON Development </h2>

  </div>
  )
}

export default Order