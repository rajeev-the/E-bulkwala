import React, { useState , useEffect } from 'react'
import ProductListCard from "../Componets/ProductListCard "
import watchphoto from "../assets/watchphoto.png"
import axios from 'axios'
import Loading from '../Componets/Loading'
import { data } from 'react-router-dom'

const ProductPage = () => {

  const[issubCatogry,setIssubCatogry] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const[value,setValue] = useState(0)
     const [isCatogrydata, setIsCatogrydata] = useState([]);
    useEffect(()=>{
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get('https://bulk-backend-qlo4.onrender.com/api/category/all');
        
        const data = response.data;
      
      
     setIssubCatogry(data[0].subcategories)
        setIsCatogrydata(data);
        
      } catch (error) {
        console.error('Error fetching category data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryData();


  },[])


 console.log(issubCatogry)
    
  
  
  return (

   
  <>
  <div className="min-h-screen bg-white p-4">
    <div className="flex flex-col gap-4 lg:flex-row">
      
      {/* Mobile: Horizontal Scroll Categories */}
      <div className="lg:hidden">
        <div className="flex gap-4 overflow-x-auto pb-3">
          {isLoading ? (
    <div className="w-full flex justify-center items-center py-6 min-h-[100px]">
      <Loading size={32} color="#3b82f6" />
    </div>
  ) : ( issubCatogry.map((_, i) => (
            <div
              key={i}
              className="h-24 w-24 flex-shrink-0 rounded-xl border-2 border-[#C9E0EF]  p-2 transition-all "
            >
             <img src={_?.img_url} className='w-full h-full object-contain' alt="" />
            </div>
          )))}
        </div>
      </div>

      {/* Desktop: Vertical Scroll Categories */}
      <div className="hidden lg:flex lg:w-[12%] max-h-[100vh]     scrollbar-none [&::-webkit-scrollbar]:hidden overflow-y-auto lg:flex-col lg:gap-4 pr-2">

          {isLoading ? (
    <div className="w-full flex justify-center items-center py-6 min-h-[100px]">
      <Loading size={32} color="#3b82f6" />
    </div>
  ) : ( issubCatogry.map((_, i) => (
          <div
            key={i}
           className="min-h-[120px]  h-[400px] rounded-xl border-2 border-[#C9E0EF]   shadow-xl p-3 transition-all "

          >
            <img src={_?.img_url} className="w-full h-full object-contain" alt="subcatogory" />

          </div>
        )) )}
      </div>

      {/* Sticky Product Grid */}
     <div className="flex-1 sticky top-0 bg-white shadow-lg rounded-xl">
  {/* Filters & Sort */}
  <div className="flex flex-wrap justify-between items-center p-4 border-b gap-4">
    {/* Filter Dropdown */}
    <div>
      <label className="mr-2 text-sm font-medium text-gray-700">Filter by Category:</label>
      <select 
       value={value}
  onChange={(e) => {
    const selectedId = e.target.value;
    setValue(selectedId)
    console.log(selectedId)

    const selectedCategory = isCatogrydata.find(cat => cat._id === selectedId);
    if (selectedCategory) {
      setIssubCatogry(selectedCategory.subcategories);
    } else {
      setIssubCatogry([]);
    }
  }}
      
      className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option value="">All</option>
        {
          isCatogrydata.map((e,i)=>
            <option key={i} value={e._id}>{e.name}</option>
          )
               
        }
        
    
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