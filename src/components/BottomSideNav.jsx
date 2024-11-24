"use client"

import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { House } from 'lucide-react'
import { MdOutlineSubscriptions } from "react-icons/md";
import Link from 'next/link'
import { LuHistory } from "react-icons/lu";
import { FaChevronRight } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaFire } from "react-icons/fa6";
import { RiShoppingBag4Line } from "react-icons/ri";
import { LuMusic4 } from "react-icons/lu";
import { SiYoutubegaming } from "react-icons/si";
import { LuRadio } from "react-icons/lu";
import { PiFilmSlate } from "react-icons/pi";
import { GrTrophy } from "react-icons/gr";
import { GoLightBulb } from "react-icons/go";
import { MdPodcasts } from "react-icons/md";
import { TbHanger } from "react-icons/tb";
export default function BottomSideNav({ isOpen }) {
  return (
    <div className={`hidden h-auto shadow-md pb-16 lg:block transition-transform overflow-y-auto scrollbar lg:w-60 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} items-center justify-around lg:justify-normal fixed bottom-0 lg:top-16 lg:left-0 flex lg:flex-col lg:h-full px-4 shadow-lg`}>
      <div className='w-full flex lg:flex-col py-1'>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><House size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Home</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><SiYoutubeshorts size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Shorts</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><MdOutlineSubscriptions size={18} className='text-black dark:text-white' /><span className='tracking-tighter text-sm font-semibold'>Subscriptions</span></Link>
      </div>
      <div className="bg-zinc-900 w-full h-[1px] my-3" />
      <div>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><span className='text-sm font-semibold'>You</span><FaChevronRight className='text-black dark:text-white' size={10} /></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><LuHistory size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>History</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><MdPlaylistPlay size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Playlist</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><BiSolidVideos size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Your Videos</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><MdOutlineWatchLater size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Watch Later</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><AiOutlineLike size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Liked Videos</span></Link>
      </div>
      <div className="bg-zinc-900 w-full h-[1px] my-3" />
      <div>
        <p href={"/"} className=' text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><span className='text-sm font-semibold'>Explore</span></p>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><FaFire size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Trending</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><RiShoppingBag4Line size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Shopping</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><LuMusic4 size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Music</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><PiFilmSlate size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Films</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><LuRadio size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Live</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><SiYoutubegaming size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Gaming</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><MdOutlineWatchLater size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>News</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><GrTrophy size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Sports</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><GoLightBulb size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Cources</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><TbHanger size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Fashion & Beauty</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><LuHistory size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>History</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><MdPlaylistPlay size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Playlist</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><BiSolidVideos size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Your Videos</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><MdOutlineWatchLater size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Watch Later</span></Link>
        <Link href={"/"} className='dark:hover:bg-zinc-800 hover:bg-gray-200 text-black py-3 flex flex-col lg:flex-row justify-start items-center rounded-md px-2 w-full text-sm dark:text-white space-x-4'><MdPodcasts size={18} className='text-black dark:text-white' /><span className='text-sm font-semibold'>Podcasts</span></Link>
      </div>
    </div>
  )
}
