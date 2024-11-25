"use client"

import React, { useState } from 'react'
import TopNav from '../TopNav'
import BottomSideNav from '../BottomSideNav'
import SideBar from './SideBar'
export default function Top_Bottom() {
  const [isSideNavOpen, setSideNavOpen] = useState(false)

  const toggleNav = () => {
    setSideNavOpen((prev) => !prev)
  }
  return (
    <div className='select-none z-40'>
      <TopNav onMenuClick={toggleNav} />
      <BottomSideNav isOpen={isSideNavOpen} />
      <SideBar isOpen={isSideNavOpen} />
    </div>
  )
}
