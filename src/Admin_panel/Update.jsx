import React,{useState} from 'react'
import AdminNavbar from '../Componets/AdminNavbar'
import { FiEdit } from "react-icons/fi";
import ProductCard from '../Componets/ProductCard ';



const Update = () => {
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

<ul className="mt-4 flex gap-3 flex-wrap">
  <button

  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-sm font-medium flex items-center gap-2"
  onClick={()=> setIsOpen(true)}
>
Default 
 
</button>
  {categories.map((cat, index) => (
  <button
  key={index}
  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-sm font-medium flex items-center gap-2"
 
>
  {cat}
 
</button>

  ))}
</ul>

<div className='flex  mt-10  gap-2 flex-wrap'>
  <div  onClick={()=> setIsOpen(true)}>
<ProductCard/>
  </div>
    <div  onClick={()=> setIsOpen(true)}>
<ProductCard/>
  </div>
    <div  onClick={()=> setIsOpen(true)}>
<ProductCard/>
  </div>


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