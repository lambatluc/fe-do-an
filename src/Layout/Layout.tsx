import React, { ReactNode } from 'react'
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
interface LayoutProps {
    children: ReactNode;
  }
const Layout = ({children}: LayoutProps) => {
  return (
    <>
        <div className='bg-main text-white'>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    </>
  )
}

export default Layout;
