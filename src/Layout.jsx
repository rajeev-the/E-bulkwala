import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Componets/Navbar'
import Footer from './Componets/Footer'


const Layout = () => {
  return (
    <>
    
    <div className=" h-full w-full  ">
     <Navbar/>
      <div style={  {
        fontFamily: "'Reddit Mono', monospace",
      }} 
      
       >
        <Outlet  /> {/* This renders the current page */}
      </div>
  

        {/* Login Modal */}

        <Footer/>
     
    </div>
    

    </>
  )
}

export default Layout