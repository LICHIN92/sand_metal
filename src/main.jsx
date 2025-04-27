import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Carousell from './components/Carousels/Carousell.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Mainpage from './Mainpage.jsx'
import About from './pages/about/About.jsx';
import Bokking from './pages/Booking/Bokking.jsx';
import Material from './pages/meterial/Material.jsx';
import Contact from './pages/contact/Contact.jsx';

const router = createBrowserRouter([
  {
   
    element: <Mainpage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/booking',
        element:<Bokking/>
      },
      {
        path:'material',
        element:<Material/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Carousell /> */}
    <RouterProvider router={router} />

  </StrictMode>,
)
