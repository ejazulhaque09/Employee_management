import './App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'

function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <HomePage></HomePage>
    },
    {
      path:'/addemployee',
      element:<FormPage></FormPage>
    }
  ])

  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
