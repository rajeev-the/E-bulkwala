import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../Componets/AdminNavbar";

const steps = [
  "Heading",
  "Image URLs",
  "Video URLs",
  "Price",
  "Stock",
  "Details",
  "Tags",
  "Subcategory",
  "Review & Submit",
];

const Admin = () => {
    const[value,setValue] = useState(0)
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
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    heading: "",
    img_url: [""],
    video_url: [""],
    price: "",
    stock: "",
    details: [{ text: [""], image_url: [""] }],
    tags: [""],
    subcategory: ""
  });





  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData({ ...formData, [field]: updated });
  };

  const handleDetailChange = (dIndex, type, iIndex, value) => {
    const updatedDetails = [...formData.details];
    updatedDetails[dIndex][type][iIndex] = value;
    setFormData({ ...formData, details: updatedDetails });
  };

  const addArrayField = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const addDetailItem = (type, dIndex) => {
    const updated = [...formData.details];
    updated[dIndex][type].push("");
    setFormData({ ...formData, details: updated });
  };

  const addDetailBlock = () => {
    setFormData({ ...formData, details: [...formData.details, { text: [""], image_url: [""] }] });
  };

  const next = () => setCurrentStep((prev) => prev + 1);
  const back = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/product/create", formData);
      alert("Product Created!");
      setFormData({
        heading: "",
        img_url: [""],
        video_url: [""],
        price: "",
        stock: "",
        details: [{ text: [""], image_url: [""] }],
        tags: [""],
        subcategory: ""
      });
      setCurrentStep(0);
    } catch (err) {
      alert("Failed to create product");
      console.error(err);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="max-w-2xl mx-auto p-6 space-y-4 font-sans">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Step {currentStep + 1}: {steps[currentStep]}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Step Fields */}
          {currentStep === 0 && (
            <input
              type="text"
              name="heading"
              placeholder="Enter product heading"
              value={formData.heading}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            />
          )}

          {currentStep === 1 && (
            <div>
              {formData.img_url.map((url, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Image URL ${i + 1}`}
                  value={url}
                  onChange={(e) => handleArrayChange("img_url", i, e.target.value)}
                  className="w-full mb-2 border px-4 py-2 rounded"
                />
              ))}
              <button type="button" onClick={() => addArrayField("img_url")} className="text-blue-500 text-sm">
                + Add Image
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              {formData.video_url.map((url, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Video URL ${i + 1}`}
                  value={url}
                  onChange={(e) => handleArrayChange("video_url", i, e.target.value)}
                  className="w-full mb-2 border px-4 py-2 rounded"
                />
              ))}
              <button type="button" onClick={() => addArrayField("video_url")} className="text-blue-500 text-sm">
                + Add Video
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            />
          )}

          {currentStep === 4 && (
            <input
              type="number"
              name="stock"
              placeholder="Enter stock quantity"
              value={formData.stock}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            />
          )}

          {currentStep === 5 && (
            <div className="space-y-4">
              {formData.details.map((block, dIndex) => (
                <div key={dIndex} className="p-3 border rounded bg-gray-50">
                  <h4 className="font-semibold mb-2">Detail Block {dIndex + 1}</h4>

                  {block.text.map((txt, i) => (
                    <input
                      key={i}
                      type="text"
                      placeholder={`Text ${i + 1}`}
                      value={txt}
                      onChange={(e) => handleDetailChange(dIndex, "text", i, e.target.value)}
                      className="w-full mb-2 border px-4 py-2 rounded"
                    />
                  ))}
                  <button onClick={() => addDetailItem("text", dIndex)} type="button" className="text-blue-500 text-xs">
                    + Add Text
                  </button>

                  {block.image_url.map((img, i) => (
                    <input
                      key={i}
                      type="text"
                      placeholder={`Image URL ${i + 1}`}
                      value={img}
                      onChange={(e) => handleDetailChange(dIndex, "image_url", i, e.target.value)}
                      className="w-full mb-2 border px-4 py-2 rounded"
                    />
                  ))}
                  <button onClick={() => addDetailItem("image_url", dIndex)} type="button" className="text-blue-500 text-xs">
                    + Add Image
                  </button>
                </div>
              ))}
             
            </div>
          )}

          {currentStep === 6 && (
            <div>
              {formData.tags.map((tag, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={`Tag ${i + 1}`}
                  value={tag}
                  onChange={(e) => handleArrayChange("tags", i, e.target.value)}
                  className="w-full mb-2 border px-4 py-2 rounded"
                />
              ))}
              <button type="button" onClick={() => addArrayField("tags")} className="text-blue-500 text-sm">
                + Add Tag
              </button>
            </div>
          )}

          {currentStep === 7 && (

            <>  <div>
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
    
     <select
              name="subcategory"
              value={formData.subcategory}
              onChange={handleInputChange}
              className="w-full border px-4 py-2 rounded"
            >
              <option value="">Select Subcategory</option>
              {issubCatogry.map((sub) => (
                <option key={sub._id} value={sub._id}>{sub.name}</option>
              ))}
            </select>
       </>

           
          )}

      {currentStep === 8 && (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold mb-3">📋 Review Product Details</h3>

    <div className="bg-white shadow-sm p-4 rounded space-y-4 border">

      {/* Heading, Price, Stock */}
      <p><strong>📝 Heading:</strong> {formData.heading}</p>
      <p><strong>💰 Price:</strong> ₹{formData.price}</p>
      <p><strong>📦 Stock:</strong> {formData.stock}</p>

      {/* Image Preview */}
      <div>
        <strong>🖼️ Image Preview:</strong>
        <div className="flex flex-wrap gap-3 mt-2">
          {formData.img_url.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Product ${i}`}
              className="w-28 h-28 object-cover border rounded"
              onError={(e) => (e.target.style.display = "none")}
            />
          ))}
        </div>
      </div>

      {/* Video URLs */}
      {formData.video_url.length > 0 && (
        <div>
          <strong>🎥 Video Links:</strong>
          <ul className="list-disc list-inside ml-4">
            {formData.video_url.map((vid, i) => (
              <li key={i}><a href={vid} className="text-blue-600 underline" target="_blank" rel="noreferrer">{vid}</a></li>
            ))}
          </ul>
        </div>
      )}

      {/* Details with Preview */}
      <div>
        <strong>📄 Details:</strong>
        {formData.details.map((d, idx) => (
          <div key={idx} className="ml-4 mb-4 border rounded p-2 bg-gray-50">
            <p className="font-medium text-sm mb-1">Detail Block #{idx + 1}</p>

            {d.text.length > 0 && (
              <ul className="list-disc list-inside ml-4 mb-2">
                {d.text.map((t, i) => <li key={i}>Text: {t}</li>)}
              </ul>
            )}

            {d.image_url.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {d.image_url.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Detail ${idx + 1} Img ${i + 1}`}
                    className="w-24 h-24 object-cover border rounded"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tags */}
      <div>
        <strong>🏷️ Tags:</strong>
        <div className="flex flex-wrap gap-2 mt-1">
          {formData.tags.map((tag, i) => (
            <span key={i} className="bg-gray-200 text-sm px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>

      {/* Subcategory */}
      <p><strong>📁 Subcategory:</strong> {formData.subcategory || "Not selected"}</p>
    </div>

    <button
      type="submit"
      className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
    >
      ✅ Submit Product
    </button>
  </div>
)}




          {/* Navigation */}
          <div className="flex justify-between mt-4">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={back}
                className="text-gray-600 bg-gray-200 px-4 py-2 rounded"
              >
                ⬅️ Back
              </button>
            )}
            {currentStep < steps.length - 1 && (
              <button
                type="button"
                onClick={next}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Next ➡️
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Admin;
