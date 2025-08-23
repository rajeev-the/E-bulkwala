import React from 'react'
import ProductListCard from '../Componets/ProductListCard '
import {useParams} from 'react-router-dom'
import {fetchProductsByTag} from "../Service/prodcutsList"
import { useEffect,useState } from 'react'
import Loading from '../Componets/Loading'

const ProdcutsSerach = () => {
     const {tag} = useParams();

     const slugToNormal = (slug) => {
  return slug
    .replace(/-/g, ' ')               // Replace hyphens with spaces
    .replace(/\s+/g, ' ')             // Remove extra spaces if any
    .replace(/(^\w|\s\w)/g, (match) => match.toUpperCase()); // Capitalize each word
};

    
       const [fetchProducts, setFetchProducts] = useState([])
       const [isLoading, setLoading] = useState(true);
       console.log(tag);
    
    
       // You can use the id to fetch specific products if needed]
    useEffect(() => {
       const fetchProducts = async () => {
          try {
             const response = await fetchProductsByTag(tag);
             setFetchProducts(response.data?.products || []);
          } catch (error) {
             console.error('Error fetching products:', error);
          }
          finally{
             setLoading(false);
          }
       }; 
       fetchProducts();
    }, [tag]);
    
    


  return (
    <div className='w-full h-full sm:p-8 p-4 '>
   
           <h1 className='  text-start  sm:text-3xl text-xl  font-semibold'>{slugToNormal(tag)}</h1>
   <div className='flex justify-center items-center'> 
      {isLoading ? (
       <div className="w-full flex justify-center items-center py-6 min-h-[100px]">
         <Loading size={32} color="#3b82f6" />
       </div>
     ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[30px] sm:gap-x-[100px] '>
            {
                fetchProducts.map((product) => (
                   <ProductListCard key={product._id} img={product.img_url[0]} title={product.heading} price={product.price} />
                ))
            }
         
            
          </div>
     )}
   
          </div>
   
   
   
       </div>
  )
}

export default ProdcutsSerach