import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import { About, Dashboard, ErrorPage, Home, ProductDetail } from './pages'
import AddProduct from './pages/admin/product/AddProduct'
import EditProduct from './pages/admin/product/EditProduct'
import Login from './pages/Login'
import Register from './pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/product-detail/:id',
        element: <ProductDetail />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/add-product',
        element: <AddProduct />,
      },
      {
        path: '/dashboard/edit-product/:id',
        element: <EditProduct />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
])

export default router
