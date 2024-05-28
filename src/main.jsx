import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Admin from './pages/Admin'
import ProductDetail from './pages/ProductDetail'
import Header from './components/Header'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: '/admin',
    element: (
      <>
        <Header />
        <Admin />
      </>
    ),
  },
  {
    path: '/product-detail/:id',
    element: (
      <>
        <Header />
        <ProductDetail />
      </>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
