import React from 'react'
import Nav from '../Nav/Nav'

import Videos from './Videos'
import Foot from '../Footer/Foot'
import Home from './Home'
import Journey from './Journey'

const AllIn = () => {
  return (
    <>
        <Nav/>
        <Home/>
        <Videos/>
        <Journey/>
        <Foot/>
    </>
  )
}

export default AllIn