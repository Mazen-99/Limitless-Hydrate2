import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className='w-full h-max flex lg:w-[900px] bg-white mx-auto lg:rounded-lg lg:mt-[90px] mt-[70px]'>
          <div className='grid grid-cols-12'>
            <div className='col-span-6'>
              <img src="./AboutPhoto.png" alt="Photo" className='lg:h-120 h-120 md:ml-30 ml-[-22px] my-5' />
            </div>

            <div className='col-span-6 mt-7 mb-7 md:ml-0 ml-[-35px]'>
              <h1 className='text-[25px] font-bold mb-3'>Who we are?</h1>
              <p className='text-sm leading-snug md:mb-0 mb-10'>At Limitless Naturals, we innovate health and wellness with <br /> science-backed supplements. Limitless Hydrate restores essential <br /> electrolytes for optimal hydration, keeping you energized and at <br /> your best.</p>

              <h1 className='text-[25px] font-bold mb-3 mt-4'>Our Philosophy</h1>
              <p className='text-sm leading-snug md:mb-0 mb-10'>Hydration is essential for energy, focus, and overall well-being. <br /> Dehydration can impact performance, mood, and recovery, which <br /> is why we created Limitless Hydrate—a scientifically formulated <br /> solution to replenish electrolytes and keep you at your best. <br /> Designed for those who push their limits, it ensures optimal <br /> hydration, whether you're working out, recovering, or powering <br /> through your day. At Limitless Naturals, we believe in providing <br /> clean, effective hydration to help you perform and feel your best.</p>

              <h1 className='text-[25px] font-bold mb-3 mt-4 leading-none'>Sustainability & Quality <br /> Assurance</h1>
              <p className='text-sm leading-snug'>Limitless Hydrate is crafted with the highest standards in mind, <br /> powered by OFT and formulated based on WHO-advised guidelines <br /> for optimal hydration. We prioritize premium sourcing, ensuring <br /> clean, high-quality ingredients for maximum effectiveness. <br /> Committed to sustainability, we follow eco-friendly practices in <br /> production and packaging, delivering a product that’s both <br /> effective and responsible.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default AboutUs