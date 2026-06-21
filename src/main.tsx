import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import NewPost from './components/NewPost'
import RootLayout from './routes/RootLayout'

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    children: [
      { path: '/', 
        element: <App />,
      children: [{ path: '/create-post', element: <NewPost /> }]}
  ]
  }]);

  createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
