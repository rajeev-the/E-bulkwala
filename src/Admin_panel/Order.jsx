import React from 'react'
import AdminNavbar from '../Componets/AdminNavbar'
import OrderDetailsCard from './OrderDetailsCard'

const Order = () => {
  return (
    <>
   <AdminNavbar/>
<section  className='m-5'>
       <h2 className="text-2xl font-bold mb-4">Order Details</h2>
                 
       <div className='flex m-10  gap-[100px]   justify-start   items-center  flex-wrap'>

        <OrderDetailsCard/>
          <OrderDetailsCard/>
            <OrderDetailsCard/>


       </div>


</section>
    
    </>
    
  )
}

export default Order