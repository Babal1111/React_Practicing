import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'

import About from './components/About.jsx';
import Contacts from './components/Contacts.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element:<Layout></Layout>,
    children:[
      {
        path: '',
        element:<Home />

      },
      {
        path: 'about',
        element:<About />

      },
      {
        path: 'contacts',
        element:<Contacts></Contacts>

      },
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <App/>
  </StrictMode>,
)
