import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import User from './components/User/User.jsx';
import UserDetail from './components/user-detail/UserDetail.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'users',
        element:<Users></Users>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'users/user/:userId',
        element: <UserDetail></UserDetail>,
        loader: ({params}) => fetch (`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      }

  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
