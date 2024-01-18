import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../common/ScrollToTop'

const MasterLayout = () => {
  return (
    <>
      <div className="min-h-screen">
        <ScrollToTop />
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MasterLayout
