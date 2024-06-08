import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Foot from './Components/Footer/Foot'
import Home from './Components/All/Home'
import About from './Components/All/About'
import Trophy from './Components/All/Trophy'
const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/trophy' element={<Trophy />} />
            </Routes>
            <Foot />
        </BrowserRouter>
    )
}

export default App