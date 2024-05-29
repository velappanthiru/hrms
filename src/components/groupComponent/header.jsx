import React, { useState } from 'react'
import { ThemeSwitcher } from '../baseComponent/themeSwiter';
import NotificationPopup from '../baseComponent/Notification';
import Avatar from '../baseComponent/ProfileAvatar';

const Header = ({ setSideBar }) => {

  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      // Request full-screen mode
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    } else {
      // Exit full-screen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    // Toggle the state
    setIsFullScreen(!isFullScreen);
  };

  return (
    <header className='main-header'>
      <nav>
        <div className="header-inner">
          <div className="hamburger-icon" onClick={()=>setSideBar()}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33334 9.33334H9.33334M26.6667 9.33334H14.6667M26.6667 22.6667H22.6667M5.33334 22.6667H17.3333M5.33334 16H26.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="menu-items-wrapper flex gap-x-6 items-center">
            <div className="menu-items cursor-pointer" onClick={toggleFullScreen}>
              <div className="icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 22C6.229 22 4.343 22 3.172 20.828C2 19.657 2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172C2.93104 3.41292 2.73257 3.69287 2.585 4M2 10C2 9.265 2 8.6 2.009 8M14 2C17.771 2 19.657 2 20.828 3.172C22 4.343 22 6.229 22 10M14 22C17.771 22 19.657 22 20.828 20.828C21.069 20.5871 21.2674 20.3071 21.415 20M22 14C22 14.736 22 15.4 21.991 16" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="hidden md:block">
              <NotificationPopup className={'svg-icon'}/>
            </div>
            <ThemeSwitcher />
            <Avatar sizeClass="h-8 w-8 text-base" radius="rounded-full" containerClassName="ring-2 ring-purple-500 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900"/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
