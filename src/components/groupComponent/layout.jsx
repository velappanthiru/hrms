import React, { useEffect, useState } from 'react'
import Header from './header';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';


const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const width = useWindowSize();

  const sidebarStatus = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  useEffect(() => {
    width > 1200 ? setIsSidebarOpen(true) : setIsSidebarOpen(false);
  }, [width])

  return (
    <>
      {
        <Sidebar isShowing={isSidebarOpen} />
      }
      <main className={`main-wrapper ${isSidebarOpen && 'side-menu__is_open'}`}>
        <Header setSideBar={sidebarStatus} />
        <Outlet />
      </main>
    </>
  )
}

export default Layout;
