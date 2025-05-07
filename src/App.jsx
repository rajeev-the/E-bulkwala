import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Layout';
import Product from './Pages/Product';

const App = () => {
  return (
  <>
  
  <Routes>

  
  <Route path='/' element={<Layout/>} >        
  <Route index  path='/' element={<Home/>} />
  <Route index  path='/products' element={<Product/>} />
  </Route>
    


  </Routes>
   
  
   
  
  </>
  )
}

export default App