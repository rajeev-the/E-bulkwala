import React,{useState,useEffect} from 'react'
import AdminNavbar from '../Componets/AdminNavbar'
import { FiEdit } from "react-icons/fi";
import ProductCard from '../Componets/ProductCard ';
import axios from 'axios';



const Update = () => {
      const[value,setValue] = useState("")
      const [isProducts, setIsProducts] = useState([]);
    const[issubCatogry,setIssubCatogry] = useState([])
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
         
        }
      };
  
      fetchCategoryData();
  
  
    },[])

    useEffect(()=>{
      const fetchprocutsData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/api/prodcuts/getbysub/${value}`);
          
          const data = response.data;
          setIsProducts(data);
         
        
        
      
          
        } catch (error) {
          console.error('Error fetching category data:', error);
          setIsProducts([]);
        } finally {
         
        }
      };
  
      fetchprocutsData();
  
  
    },[setValue,value])

 
 
    const [categories, setCategories] = useState([
            "Audio Products",
            "Gaming Products"
          ]);
      const [isOpen, setIsOpen] = useState(false);
  return (
  <>
  <AdminNavbar/>
  <div className='w-full h-full'>
     


      <section className='p-6'>
        
           <h2 className="text-2xl font-bold mb-4">Update Category</h2>

         {categories.length > 0 && (
      <ul className="mt-4 flex gap-3 flex-wrap">
  {categories.map((cat, index) => (
  <button
  key={index}
  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-sm font-medium flex items-center gap-2"
  onClick={()=> setIsOpen(true)}
>
  {cat}
  <FiEdit className="text-blue-600" />
</button>

  ))}
</ul>

      )}
      </section>

            <section className='m-5'>
         <h2 className="text-2xl font-bold mb-4">Update Prodcuts</h2>
 <div>
      <label className="mr-2 text-sm font-medium text-gray-700">Filter by Category:</label>
      <select 
       value={value}
  onChange={(e) => {
    const selectedId = e.target.value;
    setValue(selectedId)
  

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
    <br />
     <select
              name="subcategory"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            >
              <option value="">Select Subcategory</option>
              {issubCatogry.map((sub) => (
                <option key={sub._id} value={sub._id}>{sub.name}</option>
              ))}
            </select>
       


<div className='flex  mt-10  gap-2 flex-wrap'>
  {isProducts.length > 0 ? (
    isProducts.map((product) => (
      <div key={product._id} onClick={()=> setIsOpen(true)} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <ProductCard   title={product.heading} src={product.img_url[0]} />
      </div>
    ))
  ) : (
    <p className="text-gray-500">No products found for this category.</p>
  )}  


</div>

      


      </section>

  </div>
  {isOpen && (
  <div className="fixed inset-0 backdrop-blur bg-white/30 bg-opacity-50 flex items-center justify-center z-50">
    <div className="relative bg-white rounded-xl shadow-lg p-8 w-96">

      {/* Close button in top right */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-4xl font-bold"
      >
        &times;
      </button>

      <h2 className="text-xl font-semibold mb-4">Details of the Prodcuts </h2>
      <p>Update the products </p>
      <button className=" mt-10 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-sm font-medium flex items-center gap-2">Submit </button>


    </div>
  </div>
)}

  </>
  )
}

export default Update