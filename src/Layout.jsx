import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Componets/Navbar'


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
        fotter

        {/* Login Modal */}
     
    </div>
    

    </>
  )
}

export default Layout