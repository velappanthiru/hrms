// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <>
      {
        theme === "light" ?
        <div className="menu-items cursor-pointer" onClick={() => setTheme('dark')}>
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </div>
        </div> :
        <div className="menu-items cursor-pointer" onClick={() => setTheme('light')}>
          <div className="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V3M12 21V22M22 12H21M3 12H2M19.07 4.93L18.678 5.323M5.322 18.678L4.929 19.071M19.07 19.07L18.678 18.677M5.322 5.322L4.929 4.929M6.341 10C5.88777 11.2831 5.88415 12.6821 6.33073 13.9675C6.77732 15.2529 7.64758 16.3484 8.79871 17.074C9.94984 17.7997 11.3135 18.1125 12.6658 17.9612C14.0181 17.8098 15.2788 17.2033 16.2411 16.2411C17.2033 15.2788 17.8098 14.0181 17.9612 12.6658C18.1125 11.3135 17.7997 9.94984 17.074 8.79871C16.3484 7.64758 15.2529 6.77732 13.9675 6.33073C12.6821 5.88415 11.2831 5.88777 10 6.341" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      }
    </>
  )
};
