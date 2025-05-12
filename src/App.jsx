import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Layout';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import ProductListCard from './Componets/ProductListCard ';
import ProductsList from './Pages/ProductsList';
import ScrollToTop from './Componets/ScrollToTop';
import {ToastContainer} from 'react-toastify'
import { Bounce } from 'react-toastify';
import Order from './Pages/Order';



const App = () => {
  return (
  <>

  <ToastContainer
position="top-center"
autoClose={1900}

hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
  <ScrollToTop />

  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} /> {/* Default route for '/' */}
      <Route path='products' element={<Product />} />
      <Route path='cart' element={<Cart />} />
      <Route path='products-list' element={<ProductsList />} />
        <Route path='order' element={<Order />} />
    </Route>
  </Routes>
</>

  )
}

export default App