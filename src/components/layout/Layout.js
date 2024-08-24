import React from 'react'
import Navbar from './Header'


const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div>{children}</div>
   </>
  )
}

export default Layout;
