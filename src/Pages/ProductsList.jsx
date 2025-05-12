import React from 'react'
import watchphoto from '../assets/watchphoto.png'
import ProductListCard from '../Componets/ProductListCard '


const ProductsList = () => {
  return (
    <div className='w-full h-full p-8  sm:ml-5'>

        <h1 className='  text-start  text-3xl  font-semibold'>Prodcuts Audio </h1>

       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
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
  )
}

export default ProductsList