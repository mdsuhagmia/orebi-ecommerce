import React from 'react'
import Menu from '../Menu'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'

const RootLayout = () => {
  return (
    <>
     <Menu/>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default RootLayout