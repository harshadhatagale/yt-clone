"use client"

import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { House } from 'lucide-react'
import { MdOutlineSubscriptions } from "react-icons/md";
import Link from 'next/link'
import { LuHistory } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
export default function BottomSideNav({ isOpen }) {
  return (
    <div className={`hidden lg:block transition-transform lg:w-52 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} items-center justify-around lg:justify-normal fixed bottom-0 lg:top-16 lg:left-0 flex lg:flex-col lg:h-full px-4 shadow-lg`}>
      <div className='w-full flex lg:flex-col py-1'>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><House size={18}  className='text-black dark:white'/><span className='text-sm font-semibold'>Home</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><SiYoutubeshorts size={18}  className='text-black dark:white'/><span className='text-sm font-semibold'>Shorts</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><MdOutlineSubscriptions size={18}  className='text-black dark:white'/><span className='tracking-tighter text-sm font-semibold'>Subscriptions</span></Link>
      </div>
      <div>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><span className='text-sm font-semibold'>You</span><FaChevronRight className='text-black dark:white' size={10} /></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><LuHistory size={18}  className='text-black dark:white'/><span className='text-sm font-semibold'>History</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><House size={18}  className='text-black dark:white'/><span className='text-sm font-semibold'>Playlist</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><House size={18}  className='text-black dark:white'/><span className='text-sm font-semibold'>Playlist</span></Link>
      </div>
    </div>
  )
}
