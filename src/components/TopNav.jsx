"use client"

import React, { useState } from 'react'
import logo from "../../public/logo1.png"
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from "next/font/google"
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Menu } from 'lucide-react'
import { MdKeyboardVoice } from "react-icons/md";
const roboto = Roboto({
    subsets: ["latin"],
    weight: ['100', '300', '400', '500', '700', '900']
})

export default function TopNav({ onMenuClick }) {
    const [searchValue, setSearchValue] = useState("")

    const searchTextHandler = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <nav className='lg:px-3 px-3 dark:bg-black dark:text-white w-full h-16 flex justify-between items-center'>
            <div className='flex justify-center items-center space-x-3'>
                <Menu size={35} onClick={onMenuClick} className='dark:text-white text-black mx-2 hover:bg-gray-200 hidden lg:block p-1 dark:hover:bg-zinc-700 cursor-pointer rounded-full' />
                <Link className='flex justify-center h-full items-center' href={'/'}>
                    <Image src={logo} alt='logo' width={50} height={50} />
                    <p className={`${roboto.className} font-semibold text-xl tracking-tight`}>Youtube <sup className='font-normal'>In</sup></p>
                </Link>
            </div>
            <div className='flex space-x-5'>
                <div className='search_bar lg:block hidden outline outline-[0.5px] border-[0.1px] border-zinc-500 outline-gray-200 dark:outline-zinc-800 w-96 h-10 rounded-3xl'>
                    <div className='flex w-full h-full justify-center items-center bg-transparent'>
                        <input type="search" className={`w-[85%] h-full outline-none focus:border-blue-600 dark:bg-black border-[0.1px] border-zinc-500 bg-transparent bg-white px-5 text-base rounded-tl-3xl rounded-bl-3xl ${roboto.className}`} value={searchValue} placeholder="Search" onChange={searchTextHandler} />
                        <button title='Search' className='w-[15%] flex justify-center border-[0.1px] border-zinc-500 items-center dark:bg-zinc-900 bg-gray-200 h-full rounded-tr-3xl rounded-br-3xl'><CiSearch size={24} /></button>
                    </div>
                </div>
                <Link href={"/"} className='h-10 hidden lg:flex w-10 hover:dark:bg-zinc-700 dark:text-white rounded-full justify-center items-center dark:bg-zinc-900'>
                    <MdKeyboardVoice size={24} />
                </Link>
            </div>
            <Link href={'/'} className='lg:hidden mx-3'><CiSearch size={20} /></Link>
            <div className='justify-center items-center space-x-7 hidden lg:flex'>
                <Link href={"/"} title='Create'><MdOutlineVideoCall size={30} /></Link>
                <Link href={"/"} title='Notifications'><FaRegBell size={20} /></Link>
                <Link href={"/"} title='Account'><RiAccountCircleLine size={25} /></Link>
            </div>
        </nav>
    )
}
