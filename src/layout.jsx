import { Outlet } from 'react-router'
import Navbar from './navbar'

const Layout = () => {
  return (
    <>
        <Navbar/>
        <div className="container mx-auto px-4">
            <Outlet/>
        </div>
    </>
  )
}

export default Layout