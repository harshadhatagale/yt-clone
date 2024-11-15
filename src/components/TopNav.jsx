"use client"

import React, { useState } from 'react'
import logo from "../../public/logo1.png"
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from "next/font/google"
import { MdOutlineVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { Menu } from 'lucide-react'

const roboto = Roboto({
    subsets: ["latin"],
    weight: ['100', '300', '400', '500', '700', '900']
})

export default function TopNav() {
    const [searchValue, setSearchValue] = useState("")

    const searchTextHandler = (target) => {
        setSearchValue(target.value)
    }
    return (
        <nav className='lg:px-4 px-4 dark:bg-black dark:text-white py-1 w-full hi-16 flex justify-between items-center'>
            <div className='flex justify-center items-center space-x-3'>
                <Menu size={35} className='hover:bg-gray-200 hidden lg:block dark:hover:bg-zinc-800 cursor-pointer rounded-full' />
                <Link className='flex justify-center h-full items-center' href={''}>
                    <Image src={logo} alt='logo' width={50} height={50} />
                    <p className={`${roboto.className} font-semibold text-xl tracking-wide`}>Youtube <sup className='font-normal'>In</sup></p>
                </Link>
            </div>
            <div className='search_bar lg:block hidden outline outline-[0.5px] border-[1px] border-zinc-600 outline-gray-200 dark:outline-zinc-800 w-96 h-10 rounded-3xl'>
                <div className='flex w-full h-full justify-center items-center bg-transparent'>
                    <button title='Search' className='w-[15%] flex justify-center border-[1px] border-zinc-600 items-center dark:bg-zinc-800 bg-gray-200 h-full rounded-tl-3xl rounded-bl-3xl'><CiSearch size={20}/></button>
                    <input type="search" className={`w-[70%] h-full outline-none focus:border-blue-600 dark:bg-zinc-800 border-[1px] border-zinc-600 bg-transparent bg-white px-3 text-base ${roboto.className}`} value={searchValue} placeholder="Search" onChange={searchTextHandler} />
                    <button title='Search' className='w-[15%] flex justify-center border-[1px] border-zinc-600 items-center dark:bg-zinc-800 bg-gray-200 h-full rounded-tr-3xl rounded-br-3xl'><CiSearch size={20}/></button>
                </div>
            </div>
            <Link href={'/'} className='lg:hidden'><CiSearch size={20}/></Link>
            <div className='justify-center items-center space-x-7 hidden lg:flex'>
                <Link href={"/"} title='Create'><MdOutlineVideoCall size={30} /></Link>
                <Link href={"/"} title='Notifications'><FaRegBell size={20} /></Link>
                <Link href={"/"} title='Account'><RiAccountCircleLine size={25} /></Link>
            </div>
        </nav>
    )
}
