import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-3">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
