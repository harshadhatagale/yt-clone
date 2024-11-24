"use client"

import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { House } from 'lucide-react'
import { MdOutlineSubscriptions } from "react-icons/md";
import Link from 'next/link'
export default function BottomSideNav({ isOpen }) {
  return (
    <div className={`hidden transition-transform lg:w-52 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} items-center justify-around lg:justify-normal fixed bottom-0 lg:top-16 lg:left-0 flex lg:flex-col lg:h-full px-4 shadow-lg`}>
      <div className='w-full flex lg:flex-col'>
        <Link href={"/"} className='lg:hover:bg-zinc-800 shadow-md py-2 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm text-white space-x-4'><House color='white' size={18} /><span className='text-sm font-semibold'>Home</span></Link>
        <Link href={"/"} className='lg:hover:bg-zinc-800 shadow-md py-2 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm text-white space-x-4'><SiYoutubeshorts color='white' size={18} /><span className='text-sm font-semibold'>Shorts</span></Link>
        <Link href={"/"} className='lg:hover:bg-zinc-800 shadow-md py-2 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm text-white space-x-4'><MdOutlineSubscriptions color='white' size={18} /><span className='tracking-tighter text-sm font-semibold'>Subscriptions</span></Link>
      </div>
    </div>
  )
}
