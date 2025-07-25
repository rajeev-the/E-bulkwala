



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from "../Componets/AdminNavbar";
import {
  fetchTrendingProducts,
  fetchTopProducts,
  addTrendingProduct,
  removeTrendingProduct,
  addTopProduct,
  removeTopProduct
} from '../Service/generalDataService';

const Generaldata = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [trendingIds, setTrendingIds] = useState([]);
  const [topIds, setTopIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAll = async () => {
      try {
        const [all, trending, top] = await Promise.all([
          axios.get('http://localhost:8080/api/prodcuts/getall'), // 👈 your endpoint to fetch all products
          fetchTrendingProducts(),
            fetchTopProducts(),
        ]);

        setAllProducts(all.data.products);
  
  
    const trendingList = trending?.data?.trending_prodcuts || [];
    const topList = top?.data?.top_prodcuts || [];
  


    setTrendingIds(trendingList.map(p => p._id));
    setTopIds(topList.map(p => p._id));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadAll();
  }, []);

   
 const toggleTrending = async (id) => {
  try {
    if (trendingIds.includes(id)) {
      await removeTrendingProduct(id);
      setTrendingIds(prev => prev.filter(pid => pid !== id));
    } else {
      await addTrendingProduct(id);
      setTrendingIds(prev => [...prev, id]);
    }
  } catch (err) {
    if (
      err.response?.status === 400 &&
      err.response?.data?.message === 'Product already in trending list'
    ) {
      // Silently ignore or show toast
      console.warn('Product is already in trending list');
    } else {
      console.error('Trending toggle failed:', err);
    }
  }
};

  const toggleTop = async (id) => {
    
    try {
      if (topIds.includes(id)) {
        await removeTopProduct(id);
        setTopIds(prev => prev.filter(pid => pid !== id));
      } else {
        await addTopProduct(id);
        setTopIds(prev => [...prev, id]);
      }
    } catch (err) {
      console.error('Top toggle failed:', err);
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <>
    <AdminNavbar />
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Manage Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {allProducts.map(product => (
          <div key={product._id} className="border p-4 rounded shadow">
            <img
              src={product.img_url[0]}
              alt={product.heading}
              className="h-40 object-cover w-full rounded mb-3"
            />
            <h3 className="text-lg font-semibold">{product.heading}</h3>
            <p className="text-gray-700">₹{product.price}</p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => toggleTrending(product._id)}
                className={`px-3 py-1 text-sm rounded ${
                  trendingIds.includes(product._id)
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 hover:bg-blue-200'
                }`}
              >
                {trendingIds.includes(product._id) ? 'Remove from Trending' : 'Add to Trending'}
              </button>

              <button
                onClick={() => toggleTop(product._id)}
                className={`px-3 py-1 text-sm rounded ${
                  topIds.includes(product._id)
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-200 hover:bg-green-200'
                }`}
              >
                {topIds.includes(product._id) ? 'Remove from Top' : 'Add to Top'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Generaldata;
