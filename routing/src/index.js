import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import {createBrowserRouter, Router} from 'react-router-dom'
import Course from './pages/Course';
import { RouterProvider } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home/>
    }, 
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/contact",
      element: <h1>contact</h1>
    },
    {
      path: "/services",
      element: <h1>services</h1>
    },
    {
      path: "/course",
      element: <Course/>
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
