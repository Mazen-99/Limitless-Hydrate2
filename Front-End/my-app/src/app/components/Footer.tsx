import React from 'react'
import { FaFacebookF } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { IoLogoYoutube } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-screen h-150 lg:h-100 lg:w-[900px] bg-white mx-auto mt-5 lg:rounded-lg'>
      <footer className='grid grid-cols-12 grid-rows-2 gap-2'>
        {/* Logo & Input */}
        <div className='row-start-1 col-span-6 mx-auto lg:col-span-4 w-[200px] lg:w-[400px] h-100 ml-5 mt-10 lg:mt-5'>
          <img src="./logo2.png" alt="Logo" className='lg:mb-8 mb-5 lg:h-[55px] h-10 select-none' draggable="false" />
          <h1 className='font-bold lg:text-[20px] text-[17px]'>Stay Hydrated, Stay Updated!</h1>
          <p className='text-[13px] font-small'>Get hydration tips & product updates!</p>
          <div className='flex'>
            <input type="email" placeholder='Enter your email to stay refreshed!' className='outline-none border-b-1 lg:mt-4 border-black w-43 lg:w-[274px] pb-2 placeholder:text-gray-400 placeholder:lg:text-[12px] placeholder:text-[9px]' />
            <button className='lg:text-auto text-[15px] lg:ml-[-34px] ml-[-33px] lg:mt-2'>Send</button>
          </div>
        </div>

        <div className='row-start-1 col-span-6 lg:col-span-2 lg:mt-5 lg:ml-3 ml-20 mt-4 w-38 lg:w-[183px]'>
          <h1 className='font-light mb-10 text-[13px]'>Our Products</h1>
          <p className='font-bold mb-9 text-[13px]'>Limitless Hydrate Original</p>
          <p className='font-bold mb-9 text-[13px]'>Limitless Hydrate Glow</p>
          <p className='font-bold text-[13px]'>Limitless Hydrate Kids</p>
        </div>

        <div className='row-start-2 col-span-6 lg:row-start-1 lg:col-span-2 lg:mt-5 lg:ml-10 ml-5 mt-[-180px] lg:w-[183px]'>
          <h1 className='font-light mb-10 text-[13px]'>Need Help?</h1>
          <p className='font-bold mb-9 text-[13px]'>FAQs</p>
          <p className='font-bold mb-9 text-[13px]'>Articles</p>
          <p className='font-bold text-[13px]'>Lifestyle & Wellness</p>
        </div>

        <div className='row-start-2 col-span-6 lg:row-start-1 lg:col-span-2 lg:mt-5 lg:ml-10 ml-5 mt-[-180px] lg:w-[183px]'>
          <h1 className='font-light mb-10 text-[13px]'>About</h1>
          <p className='font-bold mb-9 text-[13px]'>Who we are</p>
          <p className='font-bold mb-9 text-[13px]'>Our Philosophy</p>
          <p className='font-bold text-[13px]'>Quality Assurance</p>
        </div>

        <div className='row-start-2 col-span-6 lg:row-start-1 lg:col-span-2 lg:mt-5 lg:ml-4 mt-[-180px] lg:w-[183px]'>
          <h1 className='font-light mb-10 text-[13px]'>Community</h1>
          <p className='font-bold mb-9 text-[13px]'>Our Ambassador</p>
          <p className='font-bold mb-9 text-[13px]'>Water+ Community</p>
          <div className='flex'>
            <FaInstagram className='mr-2' />
            <FaFacebookF className='mr-2' />
            <IoLogoYoutube className='mr-2' />
            <FaXTwitter />
          </div>
        </div>

        <div className='row-start-3 col-span-12 mt-[-380px] lg:mt-[-600px] mx-auto'>
          <hr className='w-[305px] ml-5 lg:mx-auto lg:w-[857px] text-[#E8E8E8] mb-10' />
          <p className='lg:text-[13px] text-[12px] ml-5 lg:mx-auto'>© 2024 Limitless Hydrate. All rights reserved.</p>
          <div className='lg:flex lg:w-47 lg:ml-[680px] w-max ml-67 mt-[-33px] lg:mt-[-20px] text-[12px]'>
            <p className='lg:mr-5 mb-2'>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer