
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AllIn from './Components/All/AllIn';

import About1 from './Components/All/About1';
import Tro from './Components/All/Tro';




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AllIn />,
      
    },
    {
      path:"/about",
      element:<About1/>
    },
    {
      path:"/about",
      element:<About1/>
    },
    
        {
          path: "/trophy",
          element: <Tro/>
        }
    
  ]);
  return (
    <>
     <RouterProvider router={router} />
    
    </>
  )
}

export default App
