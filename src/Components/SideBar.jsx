import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
const SideBar = () => {
  return (
    <div className='grid gap-10 mt-4 border-r-2 border-grey-200 w-48'>
        <span className='flex items-center gap-5'>
            <IoHome color='grey' />
            <button>Home</button>
        </span>
        <span className='flex items-center gap-5'>
            <MdExplore color='grey'/>
            <button>Explore</button>
        </span>
        <span className='flex items-center gap-5'>
           <MdSubscriptions color='grey'/>
           <button>Subscription</button>
        </span>
        <span className='flex items-center gap-5'>
          <MdOutlineVideoLibrary color='grey' />
          <button className='text-grey-100'>Library</button>
        </span>
        <span className='flex items-center gap-5 '>
         <FaHistory color='grey' />
         <button>History</button>
        </span>
       <span className='flex items-center gap-5'>
        <MdWatchLater color='grey' />
        <button>Watch Later</button>
       </span>
       <span className='flex items-center gap-5'>
        <AiFillLike color='grey' />
        <button>Liked Videos</button>
       </span>
    </div>
  )
}

export default SideBar