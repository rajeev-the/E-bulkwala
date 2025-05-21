import React,{useState} from 'react'
import AdminNavbar from '../Componets/AdminNavbar'

const Admin = () => {
     const [category, setCategory] = useState("");
     const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });


  const handleChange =(e)=>{
      const {name,value} = e.target;
       
      setProduct((prev)=>({
        ...prev,
        [name]:value

      }))

  }


      const [categories, setCategories] = useState([
        "Audio Products",
        "Gaming Products"
      ]);
  return (
   <>
   <AdminNavbar/>
   <div className='w-full h-full'>

    <section className='p-6'>
      
      <h2 className="text-2xl font-bold mb-4">Create a Category</h2>

      <form  className="flex items-start  w-[30%] space-x-2">
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category name"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Display created categories */}
      {categories.length > 0 && (
      <ul className="mt-4 flex gap-3 flex-wrap">
  {categories.map((cat, index) => (
    <li
      key={index}
      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-sm font-medium"
    >
      {cat}
    </li>
  ))}
</ul>

      )}

    </section>


    <section className='p-6'>
 
      <h2 className="text-2xl font-bold mb-4">Create a Product</h2>
      <form  className="flex flex-col items-start    w-[30%] space-y-5">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border border-gray-300 px-3 py-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Display Products */}
      {/* {productList.length > 0 && (
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold">Created Products:</h3>
          {productList.map((p, index) => (
            <div
              key={index}
              className="border p-4 rounded-md shadow-md bg-white"
            >
              <h4 className="text-lg font-bold">{p.name}</h4>
              <p><strong>Price:</strong> ${p.price}</p>
              <p><strong>Category:</strong> {p.category}</p>
              <p><strong>Description:</strong> {p.description}</p>
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="mt-2 w-32 h-32 object-cover rounded"
                />
              )}
            </div>
          ))}
        </div>
      )} */}
    </section>


   </div>
   
   </>
  )
}

export default Admin