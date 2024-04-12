
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AllIn from './Components/All/AllIn';
import Layout from './Layout';
// import About from './Components/All/About';
import Trophy from './Components/All/Trophy';
import Home2 from './Components/All/home2';




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AllIn />,
      
    },
    {
      path: "/about",
      element: <Home2/>
    },
    {
      path: "/",
      element:<Layout/>,
      children: [
        // {
        //   path: "/about",
        //   element: <About/>
        // },
        {
          path: "/trophy",
          element: <Trophy/>
        }
      ]
    }
  ]);
  return (
    <>
     <RouterProvider router={router} />
    
    </>
  )
}

export default App
