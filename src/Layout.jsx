import React from 'react'
import Nav from './Components/Nav/Nav'
import { Outlet } from 'react-router-dom'
import Foot from './Components/Footer/Foot'

const Layout = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
        <Foot/>
    </>
  )
}

export default Layout