import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { House } from 'lucide-react'
import { MdOutlineSubscriptions } from "react-icons/md";
import Link from 'next/link'
import { Menu } from 'lucide-react';
export default function BottomSideNav() {
  return (
    <div className='w-full h-16 items-center justify-around lg:justify-normal fixed bottom-0 lg:top-16 lg:left-0 flex lg:flex-col lg:h-full lg:w-14 px-1'>
        <Link href={"/"} className='lg:hover:bg-zinc-400 shadow-md py-3 flex justify-center items-center rounded-md px-2 flex-col text-sm text-white'><House color='white' size={18}/><span>Home</span></Link>
        <Link href={"/"} className='lg:hover:bg-zinc-400 shadow-md py-3 flex justify-center items-center rounded-md px-2 flex-col text-sm text-white'><SiYoutubeshorts color='white' size={18}/><span>Shorts</span></Link>
        <Link href={"/"} className='lg:hover:bg-zinc-400 shadow-md py-3 flex justify-center items-center rounded-md px-2 flex-col text-sm text-white'><MdOutlineSubscriptions color='white' size={18}/><span className='tracking-tighter text-base'>Subscriptions</span></Link>
    </div>
  )
}
