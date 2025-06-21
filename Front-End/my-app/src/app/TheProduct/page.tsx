import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductImageGallery from '../components/ProductImageGallery'

const page = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-[70px] lg:pt-[90px]'>

        <div className='w-full lg:w-[900px] h-100 mx-auto lg:mb-26 mb-150 lg:rounded-lg'>
          <ProductImageGallery />
        </div>

        <div className='w-full lg:w-[900px] h-max mx-auto bg-white rounded-lg mb-5'>
          <video src="./Video.mp4" className="w-full h-full object-cover rounded-lg" autoPlay loop muted playsInline />
        </div>

        <div className='w-full lg:w-[900px] h-max mx-auto rounded-lg mb-5'>
          <div className='mb-5'>
            <h1 className='font-bold text-3xl text-center text-[#0D1B2A] mb-2'>What’s inside?</h1>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

            <div className='w-full h-max bg-white rounded-lg'>
              <div className='mt-5 mb-5 ml-5 mr-5'>
                <h1 className='text-lg font-bold mb-2'>Ingredients & Key Benefits</h1>
                <p className='text-sm mb-3'>Limitless Hydrate Original is formulated with a scientifically <br /> balanced blend of electrolytes and natural ingredients to boost <br /> hydration, energy, and recovery. Here’s a breakdown of its key <br /> components and their benefits:</p>
                <hr className='text-[#EEEEEE] mb-3' />

                <h1 className='text-lg font-bold mb-2'>Electrolytes (Sodium, Potassium, Chloride)</h1>
                <p className='text-sm mb-3'>
                  <ul className="list-disc list-inside">
                    <li>Rapidly replenishes lost fluids</li>
                    <li>Prevents dehydration and muscle cramps</li>
                    <li>Supports nerve and muscle function</li>
                  </ul>
                </p>
                <hr className='text-[#EEEEEE] mb-3' />

                <h1 className='text-lg font-bold mb-2'>Xylitol (Natural Sweetener)</h1>
                <p className='text-sm mb-3'>
                  <ul className="list-disc list-inside">
                    <li>Enhances taste without added sugar</li>
                    <li>Supports oral health and prevents tooth decay</li>
                    <li>Lower glycemic index, making it a healthier alternative</li>
                  </ul>
                </p>
                <hr className='text-[#EEEEEE] mb-3' />

                <h1 className='text-lg font-bold mb-2'>Optimized Osmolality Formula</h1>
                <p className='text-sm mb-3'>
                  <ul className="list-disc list-inside">
                    <li>Ensures faster hydration absorption</li>
                    <li>Helps balance body fluids efficiently</li>
                    <li>Ideal for athletes, active individuals, and recovery</li>
                  </ul>
                </p>
                <hr className='text-[#EEEEEE] mb-3' />

                <h1 className='text-lg font-bold mb-2'>Blue Raspberry Flavor</h1>
                <p className='text-sm mb-3'>
                  <ul className="list-disc list-inside">
                    <li>Delicious, refreshing taste</li>
                    <li>No artificial sweeteners, preservatives, or artificial colors</li>
                    <li>Enjoyable hydration without the guilt</li>
                  </ul>
                </p>
                <hr className='text-[#EEEEEE] mb-3' />

                <h1 className='text-lg font-bold mb-2'>Why Choose Limitless Hydrate?</h1>
                <img src="./Icons4.png" alt="" draggable="false" className='h-17' />

              </div>
            </div>

            <div className='w-full h-max bg-white rounded-lg'>
              <div className='mt-10 mb-10 ml-10 mr-10'>
                <img src="./Image13.png" alt="" draggable="false" />
              </div>
            </div>

          </div>
        </div>

        <div className='w-full lg:w-[900px] h-max mx-auto rounded-lg '>
          <div className='mb-5'>
            <h1 className='font-bold text-3xl text-center text-[#0D1B2A] mb-2'>FAQs</h1>
          </div>
          <div className='bg-white w-full h-max rounded-lg'>
            <div className='flex justify-between items-center'>
              <h1 className='text-lg font-bold my-2 mx-5'>1. Who should use Limitless Hydrate Original?</h1>
              <h1 className='text-lg font-bold'>+</h1>
            </div>
            <hr className='text-[#EEEEEE] my-2 mx-5' />

            <div className='flex justify-between'>
              <h1 className='text-lg font-bold my-2 mx-5'>2. How do I use Limitless Hydrate Original?</h1>
              <h1 className='text-lg font-bold'>+</h1>
            </div>
            <hr className='text-[#EEEEEE] my-2 mx-5' />

            <div className='flex justify-between'>
              <h1 className='text-lg font-bold my-2 mx-5'>3. What are the key benefits of Limitless Hydrate Original?</h1>
              <h1 className='text-lg font-bold'>+</h1>
            </div>
            <hr className='text-[#EEEEEE] my-2 mx-5' />

            <div className='flex justify-between'>
              <h1 className='text-lg font-bold my-2 mx-5'>4. What does it taste like?</h1>
              <h1 className='text-lg font-bold'>+</h1>
            </div>
            <hr className='text-[#EEEEEE] my-2 mx-5' />

            <div className='flex justify-between'>
              <h1 className='text-lg font-bold my-2 mx-5'>5. Can I drink Limitless Hydrate Original every day?</h1>
              <h1 className='text-lg font-bold'>+</h1>
            </div>
            <hr className='text-[#EEEEEE] my-2 mx-5' />

            <div className='flex justify-between'>
              <h1 className='text-lg font-bold my-2 mx-5'>6. Is it suitable for people with dietary restrictions?</h1>
              <h1 className='text-lg font-bold'>+</h1>
            </div>
            <hr className='text-[#EEEEEE] my-2 mx-5' />

            <div className='flex justify-between'>
              <h1 className='text-lg font-bold my-2 mx-5'>7. Does it contain sugar?</h1>
              <h1 className='text-lg font-bold'>+</h1>
            </div>
            <hr className='text-[#EEEEEE] mb-2 my-2 mx-5' />

            <div className='flex justify-between'>
              <h1 className='text-lg font-bold my-2 mx-5'>8. Can I use it during workouts?</h1>
              <h1 className='text-lg font-bold'>+</h1>
            </div>
            <hr className='text-[#EEEEEE] mb-2 my-2 mx-5' />

            <div className='flex justify-between'>
              <h1 className='text-lg font-bold my-2 mx-5'>9. Where can I buy Limitless Hydrate Original?</h1>
              <h1 className='text-lg font-bold'>+</h1>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default page
