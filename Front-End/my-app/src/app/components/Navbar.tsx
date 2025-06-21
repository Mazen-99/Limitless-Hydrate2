'use client'
import React from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from "react-icons/hi"
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {

  const pathname = usePathname();
  const [IsActive, setIsActive] = useState(false);

  return (
    <div className='fixed top-0 left-0 lg:left-[-7px] justify-center w-screen'>
      <nav className='sm:w-full lg:w-[900px] h-[50px] lg:my-5 mb-5 z-10 flex justify-between items-center bg-white mx-auto lg:rounded-lg shadow-md'>
        <div className='hidden lg:block px-8 space-x-6'>
          <Link href='/Products' className={pathname === '/Products' ? 'text-[#306FC7] font-medium border-b-2 pb-1 border-[#306FC7]' : 'text-black hover:text-[#306FC7] font-medium transation-all duration-200 ease-in'}>Products</Link>
          <Link href='/AboutUs' className={pathname === '/AboutUs' ? 'text-[#306FC7] font-medium border-b-2 pb-1 border-[#306FC7]' : 'text-black hover:text-[#306FC7] font-medium transation-all duration-200 ease-in'}>About Us</Link>
          <Link href='/Community' className={pathname === '/Community' ? 'text-[#306FC7] font-medium border-b-2 pb-1 border-[#306FC7]' : 'text-black hover:text-[#306FC7] font-medium transation-all duration-200 ease-in'}>Community</Link>
        </div>
        <div className='ml-[20px] lg:mr-22 '>
          <Link href='/'><img src="./logo.png" alt="Logo" className='h-8 select-none' draggable="false" /></Link>
        </div>
        <div>
          <button className='hidden lg:block w-[130px] h-[50px] text-white font-bold py-[10px] px-[10px] rounded-lg rounded-tl-none rounded-bl-none bg-black hover:bg-[#306FC7] hover:border-[#306FC7] transation-all duration-200 focus:outline-none ease-in'>
            Buy Now
          </button>
        </div>
        <div className='lg:hidden mr-[20px]'>
          {IsActive ? (
            <HiX className='text-3xl' onClick={() => setIsActive(false)} />
          ) : (
            <HiMenu className='text-3xl' onClick={() => setIsActive(true)} />
          )}
        </div>

        {IsActive && (
          <div className='absolute top-[50px] left-0 w-full bg-white flex flex-col items-start px-6 py-4 gap-4 shadow-md lg:hidden z-10'>
            <Link href='/Products' onClick={() => setIsActive(false)} className={pathname === '/Products' ? 'text-[#306FC7] font-medium' : 'text-black hover:text-[#306FC7]'}>Products</Link>
            <Link href='/AboutUs' onClick={() => setIsActive(false)} className={pathname === '/AboutUs' ? 'text-[#306FC7] font-medium' : 'text-black hover:text-[#306FC7]'}>About Us</Link>
            <Link href='/Community' onClick={() => setIsActive(false)} className={pathname === '/Community' ? 'text-[#306FC7] font-medium' : 'text-black hover:text-[#306FC7]'}>Community</Link>
            <button className='w-full h-[40px] text-white font-bold py-[10px] px-[10px] rounded-lg bg-black hover:bg-[#306FC7] focus:outline-none '>
              Buy Now</button>
          </div>
        )}
      </nav>
    </div>
  )
}
export default Navbar