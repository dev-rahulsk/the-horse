import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
const MasterLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default MasterLayout
