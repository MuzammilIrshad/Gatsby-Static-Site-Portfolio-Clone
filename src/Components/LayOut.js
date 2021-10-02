import React from 'react'
import Footer from './Footer'
import Navbar from './Nav'

export default function LayOut({children}) {
    return (
        <>
          <Navbar/>
          {children}
          <Footer/>  
        </>
    )
}
