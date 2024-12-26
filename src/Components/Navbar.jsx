import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-center items-center space-x-80 border-b-2'>
        <span className='flex gap-2 p-4' >
        <FaYoutube color='red' size={30} />
       <h2 className='font-bold tracking-tighter text-xl'>YouTube</h2>
        </span >
        <span >
        <input className='border-2 border-grey-200 text-center' size={40}  type="text" placeholder='Search' />
        </span>
        <span>
          <FaBell color='grey' />
        </span>
    </div>
  )
}

export default Navbar