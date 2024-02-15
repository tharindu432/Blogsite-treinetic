import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

import { createBrowserRouter,RouterProvider }  from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Blogs from './pages/Blogs.js';
import Contact from './pages/Contact.js';



const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/blogs",
        element:<Blogs/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/blog/:id",
        element:<BlogPost/>,
      },
      
      
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
