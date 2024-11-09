import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import FormPage from './pages/FormPage.jsx'
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>
  },
  {
    path: '/addemployee',
    element: <FormPage></FormPage>
  },
]
);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}></RouterProvider>
)
