import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import Card from '../components/Card'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* The First Scection */}
      <div className='pt-[70px] lg:pt-[90px]'>
        <div className='w-screen h-110 lg:w-[900px] bg-white mx-auto lg:rounded-lg'>
          <img src="./Hero1.jpg" alt="BackGround"
            className='w-screen lg:w-[900px] h-110 object-cover object-[center_51%] z-0 lg:rounded-lg select-none' draggable="false" />
          <div className='mt-[-15rem] ml-7 z-2 text-white'>
            <h1 className='font-bold text-3xl mb-2'>Water+</h1>
            <p className='text-sm font-light leading-none mb-7'>
              Limitless Hydrate redefines hydration with <br />
              advanced electrolytes and clean <br />
              ingredients. Designed for performance, <br />
              recovery, and everyday wellness, our <br />
              formulas keep you at your best—no <br />
              matter your lifestyle.
            </p>
            <Link href='/Products' className='bg-white text-lg text-black font-semibold py-2 px-3 rounded-full'>Learn More</Link>
          </div>
        </div>

        {/* The Second Section */}
        <div className='w-full lg:w-[900px] h-max mx-auto mt-5 grid grid-cols-2 lg:grid-cols-2'>
          <div className='w-auto lg:w-[450px] h-100 lg:h-120 bg-[#F4C448] lg:rounded-tl-lg flex flex-col items-center justify-center text-center'>
            <img src="./WhiteLogo.png" alt="" className='h-20 mb-5' draggable="false" />
            <p className='text-white text-sm leading-none mb-10'>Fuel your body with essential electrolytes, <br />
              vitamins, and great taste. Whether you're <br />
              working out or on the go, Limitless Hydrate <br />
              keeps you refreshed, replenished, and <br />
              energized.</p>
            <img src="./IconsYellow.png" alt="" className='w-[400px] select-none' draggable="false" />
          </div>

          <div className='w-full lg:w-[450px] h-100 lg:h-120 lg:mt-0'>
            <img src="./Hero1.jpg" alt="" className='h-full w-full object-cover inset-0 lg:rounded-tr-lg select-none' draggable="false" />
          </div>

          <div className='w-auto lg:w-[450px] h-120 lg:h-120 flex flex-col items-center justify-center text-center'>
            <img src="./Hero2.jpg" alt="" className='w-full h-full object-cover object-[center_100%] rounded-bl-lg' />
          </div>

          <div className='w-auto lg:w-[450px] h-120 lg:h-120 bg-[#2D6AAE] lg:rounded-br-lg mb-5 lg:mt-0 flex flex-col items-center justify-center text-center'>
            <h1 className='text-white font-bold text-4xl leading-none mb-5'>Stay hydrated, <br /> feel elevated</h1>
            <p className='text-white text-sm leading-none mb-10'>
              with a refreshing blend of electrolytes, <br />
              vitamins, and great taste—designed to <br />
              keep you energized and balanced <br />
              throughout your day.</p>
            <img src="./iconsSquare.png" alt="" className='w-[250px]' draggable="false" />
          </div>

          {/* Third Section */}

          <div className='w-screen lg:w-[900px] mx-auto'>
            <h1 className='text-[#0D1B2A] text-3xl text-center font-bold mb-3'>Choose Your Refreshment</h1>
            <p className='text-[#0D1B2A] text-sm text-center leading-none'>
              Refreshing flavors and essential nutrients tailored <br />
              to keep you energized and hydrated.
            </p>

            {/* The Cards */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>

              <Card
                Card='bg-gradient-to-t from-[#DF5984] to-[#A63591] w-full py-4 lg:rounded-lg text-center'
                image='./WhiteLogo.png'
                imageClassname='h-10 mx-auto mb-2'
                title='Glow'
                titleClassname='text-white text-2xl font-semibold mb-2'
                description={'Electrolyte drink mix for' + '\n' + 'Hair, Skin & Nails Health'}
                descriptionClassname='text-white text-sm leading-none mb-2'
                image2='./Product1.png'
                image2Classname='mb-3 mx-auto'
                link='Learn More'
                LinkNavigate='/'
                LinkClassname='bg-white text-[#DA5685] text-lg font-semibold py-2 px-3 rounded-full'
              />

              <Card
                Card='bg-gradient-to-t from-[#F6CA45] to-[#E09362] w-full py-4 lg:rounded-lg text-center'
                image='./WhiteLogo.png'
                imageClassname='h-10 mx-auto mb-2'
                title='Charge'
                titleClassname='text-white text-2xl font-semibold mb-2'
                description='Essential electrolyte drink mix'
                descriptionClassname='text-white text-sm leading-none mb-2'
                image2='./Product3.png'
                image2Classname='mb-3 lg:w-43 w-50 mx-auto'
                link='Learn More'
                LinkNavigate='/'
                LinkClassname='bg-white text-[#F6CA45] text-lg font-semibold py-2 px-3 rounded-full'
              />

              <Card
                Card='bg-gradient-to-t from-[#56B5CD] to-[#2D6AAE] w-full py-4 lg:rounded-lg text-center'
                image='./WhiteLogo.png'
                imageClassname='h-10 mx-auto mb-2'
                title='Original'
                titleClassname='text-white text-2xl font-semibold mb-2'
                description='Essential electrolyte drink mix'
                descriptionClassname='text-white text-sm leading-none mb-2'
                image2='./Product2.png'
                image2Classname='mb-3 h-57 mx-auto'
                link='Learn More'
                LinkNavigate='/TheProduct'
                LinkClassname='bg-white text-[#56B5CD] text-lg font-semibold py-2 px-3 rounded-full'
              />

              <Card
                Card='bg-gradient-to-t from-[#B1CD81] to-[#C5494A] w-full py-2 lg:rounded-lg text-center'
                image='./WhiteLogo.png'
                imageClassname='h-10 mx-auto mb-2'
                title='Kids'
                titleClassname='text-white text-2xl font-semibold mb-2'
                description={'Essential electrolyte drink mix' + '\n' + 'for kids'}
                descriptionClassname='text-white text-sm leading-none mb-2'
                image2='./Product4.png'
                image2Classname='mb-3 lg:w-38 w-50 mx-auto'
                link='Learn More'
                LinkNavigate='/'
                LinkClassname='bg-white text-[#B4BF7B] text-lg font-semibold py-2 px-3 rounded-full'
              />
            </div>


            {/* Fourth Section */}

            <div className='w-full lg:w-[900px] mx-auto mt-5 mb-5'>
              <h1 className='text-[#0D1B2A] text-3xl text-center font-bold mb-3'>Connect & Hydrate</h1>
              <p className='text-[#0D1B2A] text-sm text-center leading-none'>Get Water+ tips, inspiring stories, and exclusive moments! <br />
                Follow us on Instagram <b>@limitlesshydrate.</b></p>
            </div>

            {/* Cards 2 */}
            <div className='mt-5 mb-5 grid grid-cols-2 lg:grid-cols-5 gap-1'>
              <img src="./Card1.jpg" alt="" className='w-50 h-50 mr-3 rounded-lg object-cover mt-2' />
              <img src="./Card2.jpg" alt="" className='w-50 h-50 mr-3 rounded-lg mt-2 object-cover object-[center_68%]' />
              <img src="./Card3.jpg" alt="" className='w-50 h-50 mr-3 rounded-lg object-cover mt-2' />
              <img src="./Card1.jpg" alt="" className='w-50 h-50 mr-3 rounded-lg object-cover mt-2' />
              <img src="./Card1.jpg" alt="" className='w-50 h-50 mr-3 rounded-lg object-cover mt-2' />
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home