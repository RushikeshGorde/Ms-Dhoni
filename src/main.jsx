import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/All/Home'
import About from './Components/All/About'
import Trophy from './Components/All/Trophy'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
              <Route path='' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/trophy' element={<Trophy />}/>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>

)
