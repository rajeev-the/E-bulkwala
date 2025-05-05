import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Layout';

const App = () => {
  return (
  <>
  
  <Routes>

  
  <Route path='/' element={<Layout/>} >        
  <Route index  path='/' element={<Home/>} />
  </Route>
    


  </Routes>
   
  
   
  
  </>
  )
}

export default App