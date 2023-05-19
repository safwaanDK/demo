'use client';
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag} from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdHelp, MdFavorite } from 'react-icons/md'
import { FaBook } from 'react-icons/fa';
const Navbar = () => {
  const [nav, setNav] = useState(false)  
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <FaBook className=' fill-blue-800 m-2 ml-1' size={48} />
            <a><h3 className='font-bold'>Category</h3></a>
            
        </div>
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            
            <input className='bg-transparent p-2 focus:outline-none w-full' type='text' placeholder='Search Courses'/>
            <AiOutlineSearch size={25}/>
        </div>
        <a href='/'><h3 className='font-bold'>Home</h3></a>  
        <a><h3 className='font-bold'>Courses</h3></a>
        <a><h3 className='font-bold'>Colleges</h3></a>
        <a><h3 className='font-bold'>Contact Us</h3></a>
        <button className='bg-black text-white hidden md:flex items-center p-2 rounded-s-full rounded-e-full'>
           <BsFillCartFill size={30} className='center'/>
        </button>
        <button className='bg-slate-300 text-black  hidden md:flex items-center p-3 rounded-s-full rounded-e-full font-bold'>
            Log in
        </button>
        <button className='bg-blue-800 text-white hidden md:flex items-center p-3 rounded-s-full rounded-e-full font-bold'>
            Sign Up
        </button>
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>

        </div>  : '' }   
        {/* Side drawer menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>
            Best<span className='font-bold'>Eats</span>
            </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex'>
                        <TbTruckDelivery size={25} className='mr-4'/> Orders
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdFavorite size={25} className='mr-4'/> Favorites
                    </li>
                    <li className='text-xl py-4 flex'>
                        <FaWallet size={25} className='mr-4'/> Wallet
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdHelp size={25} className='mr-4'/> Help
                    </li>
                    <li className='text-xl py-4 flex'>
                        <AiFillTag size={25} className='mr-4'/> Promotions
                    </li>
                    <li className='text-xl py-4 flex'>
                        <BsFillSaveFill size={25} className='mr-4'/> Best One
                    </li>
                    <li className='text-xl py-4 flex'>
                        <FaUserFriends size={25} className='mr-4'/> Invite Friends
                    </li>
                </ul>
            </nav>
        </div>     
    </div>
  )
}

export default Navbar
