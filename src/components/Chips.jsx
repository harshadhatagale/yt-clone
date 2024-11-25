"use client"
import React from 'react'
import Link from 'next/link'
import { useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlineExplore } from "react-icons/md";
export default function Chips() {
    const scrollContainerRef = useRef(null);
    const scrollPrev = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -200, // Adjust scroll distance as needed
                behavior: "smooth",
            });
        }
    };

    // Scroll to the next item
    const scrollNext = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 200, // Adjust scroll distance as needed
                behavior: "smooth",
            });
        }
    };

    const filters = [
        "All",
        "Gaming",
        "Music",
        "Live",
        "Comedy",
        "News",
        "Sports",
        "Movies",
        "Technology",
        "Podcasts",
        "All",
        "Gaming",
        "Music",
        "Live",
        "Comedy",
        "News",
        "Sports",
        "Movies",
        "Technology",
        "Podcasts",
        "All",
        "Gaming",
        "Music",
        "Live",
        "Comedy",
        "News",
        "Sports",
        "Movies",
        "Technology",
        "Podcasts"
    ];
    const chipsData = ['All', 'Music', 'DSA', 'DevOps', 'T-Series', 'ReactJs', "React Native", 'NextJs', "Arijit Singh", "C++", "Latest Songs", "Hindi Songs", "Online Games"]
    return (
        <div className='lg:ml-16'>
            <div className="relative z-20 w-full flex justify-center">
                {/* Previous Button */}
                <button
                    onClick={scrollPrev}
                    className="absolute hidden lg:block left-0 top-1/2 -translate-y-1/2 z-10 dark:text-white p-2 rounded-full hover:bg-zinc-800 shadow-md"
                >
                    <FaAngleLeft />
                </button>
                <div
                    ref={scrollContainerRef}
                    className="flex p-3 w-90% lg:w-[94%] space-x-3 justify-start items-center overflow-x-auto lg:overflow-x-hidden lg:snap-x lg:snap-mandatory rounded-lg"
                >
                    <div className='text-white text-base hover:dark:bg-white hover:dark:text-black flex dark:bg-zinc-800 font-semibold dark:text-white cursor-pointer rounded-md shadow-md p-[2px] bg-black hover:bg-gray-200'>
                        <MdOutlineExplore color='white' size={25} />
                    </div>
                    {chipsData.map((filter, index) => (
                        <Link
                            href={`?filter=${filter}`}
                            key={index}
                            className="text-white text-base hover:dark:bg-white hover:dark:text-black flex text-nowrap dark:bg-zinc-800 font-semibold dark:text-white cursor-pointer px-3 rounded-md shadow-md py-[2px] bg-black snap-start flex-shrink-0 hover:bg-gray-200"
                        >
                            {filter}
                        </Link>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={scrollNext}
                    className="absolute hidden lg:block right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-md dark:text-white hover:bg-zinc-800"
                >
                    <FaAngleRight />
                </button>
            </div>
        </div>
    )
}
