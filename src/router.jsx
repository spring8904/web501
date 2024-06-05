import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import {
  About,
  AddProduct,
  Dashboard,
  EditProduct,
  ErrorPage,
  Home,
  Login,
  PrivateRoute,
  ProductDetail,
  Register,
} from './pages'

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
        path: 'product-detail/:id',
        element: <ProductDetail />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'dashboard',
        element: <PrivateRoute />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'add-product',
            element: <AddProduct />,
          },
          {
            path: 'edit-product/:id',
            element: <EditProduct />,
          },
        ],
      },
      {
        path: 'login',
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
