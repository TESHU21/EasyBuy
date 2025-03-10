import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './nav/Nav'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className=' flex flex-col min-h-screen'>
        <Nav />
        <main className='flex-grow mt-10'>
        <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout