import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { House } from 'lucide-react'
import { MdOutlineSubscriptions } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import Link from 'next/link'
export default function SideBar({isOpen}) {
    return (
        <div className={`fixed w-full lg:flex-col justify-around lg:justify-start items-center flex h-16 bottom-0 lg:w-16 lg:h-full lg:left-0 lg:top-16 transition-transform transform bg-black ${isOpen? "-translate-x-full": "translate-x-0"}`}>
            <div title='Home' className='w-full h-16 rounded-md py-2 space-y-2 hover:bg-zinc-800 flex justify-center items-center flex-col cursor-pointer'><House color='white' size={20} /><span className='text-[10px] font-bold tracking-tighter text-white'>Home</span></div>
            <div title='Shorts' className='w-full h-16 rounded-md py-2 space-y-2 hover:bg-zinc-800 flex justify-center items-center flex-col cursor-pointer'><SiYoutubeshorts color='white' size={20} /><span className='text-[10px] font-bold tracking-tighter text-white'>Shorts</span></div>
            <div title='Subscriptions' className='w-full h-16 rounded-md py-2 space-y-2 hover:bg-zinc-800 flex justify-center items-center flex-col cursor-pointer'><MdOutlineSubscriptions color='white' size={20} /><span className='text-[10px] font-bold text-white'>Subscriptions</span></div>
            <div title='Subscriptions' className='w-full h-16 rounded-md py-2 space-y-2 hover:bg-zinc-800 flex justify-center items-center flex-col cursor-pointer'><RiAccountCircleLine color='white' size={20} /><span className='text-[10px] font-bold text-white'>You</span></div>
        </div>
    )
}
