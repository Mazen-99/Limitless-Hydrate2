import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

const Community = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-[70px] lg:pt-[90px]'>

        <div className='w-full lg:w-[900px] mx-auto lg:rounded-lg mb-2'>
          <div className='grid grid-cols-2 lg:grid-cols-4'>
            <Card
              Card='bg-[#DF5984] lg:w-[225px] w-full h-50 flex justify-center items-center text-center lg:rounded-tl-lg'
              title='Hydrate for Radiance'
              titleClassname='text-lg font-bold text-white'
            />
            <Card
              Card='lg:w-[225px] w-full h-50'
              image='./Hero2.jpg'
              imageClassname='w-full h-full object-cover object-[center_48%]'
            />
            <Card
              Card='bg-[#77AA4F] lg:w-[225px] w-full h-50 flex justify-center items-center text-center'
              title={'Fuel Their Play,' + '\n' + 'Keep Them' + '\n' + 'Hydrated'}
              titleClassname='text-lg font-bold text-white'
            />
            <Card
              Card='lg:w-[225px] w-full h-50 roun'
              image='./Hero3.jpg'
              imageClassname='w-full h-full object-cover object-[center_48%] lg:rounded-tr-lg'
            />
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 w-full'>
            <Card
              Card='lg:w-[225px] w-full h-50'
              image='./Hero4.jpg'
              imageClassname='w-full h-full object-cover object-[center_48%] lg:rounded-bl-lg'
            />
            <Card
              Card='bg-[#306FC7] lg:w-[225px] w-full h-50 flex justify-center items-center text-center'
              title={'Stay Balanced,' + '\n' + ' Stay Limitless'}
              titleClassname='text-lg font-bold text-white'
            />
            <Card
              Card='lg:w-[225px] w-full h-50'
              image='./Hero5.jpg'
              imageClassname='w-full h-full object-cover object-[center_48%]'
            />
            <Card
              Card='bg-[#F4C448] lg:w-[225px] w-full h-50 flex justify-center items-center text-center lg:rounded-br-lg'
              title={'Boost, ' + '\n' + 'Hydrate,' + '\n' + 'Perform'}
              titleClassname='text-lg font-bold text-white'
            />
          </div>

        </div>

        <div className='w-full lg:w-[900px] mx-auto mb-25'>
          <div className='py-10'>
            <h1 className='text-3xl font-bold text-center text-[#0D1B2A] pb-5 '>Your Weekly Hydration Guide</h1>
            <p className='text-md text-center text-[#0D1B2A]'>Tailored hydration tips for your lifestyle.</p>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 sm:gap-y-0 lg:gap-0'>
            <Card
              Card='w-[225px] h-max bg-white pb-5 mr-4 rounded-lg'
              image='./HeroReadPage.jpg'
              imageClassname='w-full h-50 object-cover object-[center_10%] rounded-tl-lg rounded-tr-lg'
              title={'Start Your Day' + '\n' + 'Right'}
              titleClassname='text-xl font-bold text-left pt-5 pl-5'
              description={'Kickstart your metabolism and' + '\n' + 'energy levels with the first sip of' + '\n' + 'the day.'}
              descriptionClassname='text-sm text-left pt-2 pl-5 mb-4'
              link='Read Tip'
              LinkNavigate='/ReadPage'
              LinkClassname='mr-25 bg-black text-lg text-white px-3 py-2 rounded-full font-semibold'
            />
            <Card
              Card='w-[225px] h-max bg-white pb-5 mr-4 rounded-lg'
              image='./Image1.jpg'
              imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
              title={'Why You Still Need' + '\n' + 'Electrolytes'}
              titleClassname='text-xl font-bold text-left pt-5 pl-5'
              description={'Cold weather can dehydrate you' + '\n' + '—stay ahead with smart' + '\n' + 'hydration.'}
              descriptionClassname='text-sm text-left pt-2 pl-5 mb-4'
              link='Read Tip'
              LinkNavigate='/Community'
              LinkClassname='mr-25 bg-black text-lg text-white px-3 py-2 rounded-full font-semibold'
            />
            <Card
              Card='w-[225px] h-max bg-white pb-5 mr-4 rounded-lg'
              image='./Image2.jpg'
              imageClassname='w-full h-50 object-cover object-[center_10%] rounded-tl-lg rounded-tr-lg'
              title={'Stay Energized as' + '\n' + 'Temperatures Drop'}
              titleClassname='text-xl font-bold text-left pt-5 pl-5'
              description={'Hydration plays a key role in' + '\n' + 'seasonal immunity and energy' + '\n' + 'levels.'}
              descriptionClassname='text-sm text-left pt-2 pl-5 pb-9'
              link='Read Tip'
              LinkNavigate='/Community'
              LinkClassname='mr-25 bg-black text-lg text-white px-3 py-2 rounded-full font-semibold'
            />
            <Card
              Card='w-[225px] h-max bg-white pb-5 mr-4 rounded-lg'
              image='./Image3.jpg'
              imageClassname='w-full h-50 object-cover object-[center_110%] rounded-tl-lg rounded-tr-lg'
              title={'How It Affects' + '\n' + 'Your Performance'}
              titleClassname='text-xl font-bold text-left pt-5 pl-5'
              description={'The key to endurance, muscle' + '\n' + 'recovery, and peak performance.' + '\n' + ''}
              descriptionClassname='text-sm text-left pt-2 pl-5 pb-9'
              link='Read Tip'
              LinkNavigate='/Community'
              LinkClassname='mr-25 bg-black text-lg text-white px-3 py-2 rounded-full font-semibold'
            />
          </div>
        </div>

        <div className='w-full lg:w-[900px] mx-auto mb-25'>
          <h1 className='text-3xl font-bold text-center text-[#0D1B2A] pb-5 '>Hydration Through the Seasons</h1>
          <p className='text-md text-center text-[#0D1B2A] pb-10'>Optimize hydration based on the season.</p>
          <div className='w-full lg:w-[900px] h-max'>
            <div className='flex'>
              <div className='w-[450px] h-[450px] bg-white flex flex-col justify-center items-center text-center rounded-tl-lg'>
                <h1 className='text-3xl font-bold'>Summer Hydration</h1>
                <p className='text-[16px] font-bold pb-4'>Extra Electrolytes for Heat & Sweat</p>
                <p className='text-sm'>Hot weather increases sweat loss, leading <br /> to faster dehydration. Replenishing <br /> electrolytes helps maintain energy, <br /> prevent muscle cramps, and keep you <br /> cool. Stay ahead of the heat with proper <br /> hydration and balanced minerals.</p>
              </div>
              <div className='w-[450px] h-[450px]'>
                <img src="./Image4.jpg" alt="Image4" className='w-full h-full object-cover object-[center_48%] rounded-tr-lg' />
              </div>
            </div>

            <div className='flex'>
              <div className='w-[450px] h-[450px]'>
                <img src="./Image5.jpg" alt="Image5" className='w-full h-full object-cover object-[center_48%]' />
              </div>
              <div className='w-[450px] h-[450px] bg-white flex flex-col justify-center items-center text-center'>
                <h1 className='text-3xl font-bold'>Winter Hydration</h1>
                <p className='text-[16px] font-bold pb-4'>Hydrate Even When You Don’t Feel Thirsty</p>
                <p className='text-sm'>Cold temperatures can reduce thirst <br /> signals, making dehydration more <br /> common than you think. Drinking enough <br /> fluids supports circulation, skin health, <br /> and immune function during colder  <br /> months. Keep sipping, even when it's <br /> chilly! </p>
              </div>
            </div>

            <div className='flex'>
              <div className='w-[450px] h-[450px] bg-white flex flex-col justify-center items-center text-center rounded-bl-lg'>
                <h1 className='text-3xl font-bold'>Spring/Fall Hydration</h1>
                <p className='text-[16px] font-bold pb-4'>Balancing Hydration with Changing Climates</p>
                <p className='text-sm'>As temperatures fluctuate, your body's <br /> hydration needs shift. Seasonal <br /> transitions can affect energy levels, <br /> digestion, and overall wellness. Stay <br /> hydrated with electrolyte-rich drinks to <br /> keep your body in sync with the changing <br /> weather.</p>
              </div>
              <div className='w-[450px] h-[450px]'>
                <img src="Image6.jpg" alt="Image6" className='w-full h-full object-cover object-[center_48%] rounded-br-lg' />
              </div>
            </div>

          </div>
        </div>

        <div className='w-full lg:w-[900px] mx-auto mb-25'>
          <div className='pb-10'>
            <h1 className='text-[#0D1B2A] text-3xl font-bold text-center pb-5'>Hydration Science &Wellness Insights</h1>
            <p className='text-[#0D1B2A] text-md text-center'>Expert-backed knowledge to help you stay <br /> optimally hydrated</p>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 mb-5'>
            <Card
              Card='w-[225px] h-90 bg-white rounded-lg '
              image='./Image7.jpg'
              imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
              title={'5 Reasons Why' + '\n' + 'Electrolytes Matter' + '\n' + 'More Than You Think'}
              titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-3'
              link='Read article'
              LinkNavigate='/ReadPage'
              LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold'
            />

            <Card
              Card='w-[225px] h-90 bg-white rounded-lg '
              image='./Image6.jpg'
              imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
              title={'The science behind' + '\n' + 'hydration'}
              titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
              link='Read article'
              LinkNavigate='/Communtiy'
              LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold'
            />

            <Card
              Card='w-[225px] h-90 bg-white rounded-lg '
              image='./Image8.jpg'
              imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
              title={'Debunking common' + '\n' + 'hydration myths'}
              titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
              link='Read article'
              LinkNavigate='/Communtiy'
              LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold'
            />

            <Card
              Card='w-[225px] h-90 bg-white rounded-lg '
              image='./Image9.jpg'
              imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
              title={'Hydration’s role' + '\n' + 'in performance'}
              titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
              link='Read article'
              LinkNavigate='/Communtiy'
              LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold'
            />
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            <Card
              Card='w-[225px] h-90 bg-white rounded-lg'
              image='./image11.jpg'
              imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
              title={'Why electrolytes' + '\n' + 'matter'}
              titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
              link='Read article'
              LinkNavigate='/Community'
              LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold'
            />

            <Card
              Card='w-[225px] h-90 bg-white rounded-lg'
              image='./image10.jpg'
              imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
              title={'Hydration and' + '\n' + 'immune health'}
              titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
              link='Read article'
              LinkNavigate='/Community'
              LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold'
            />

            <Card
              Card='w-[225px] h-90 bg-white rounded-lg'
              image='./image12.png'
              imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
              title={'Hydration and' + '\n' + 'immune health'}
              titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
              link='Read article'
              LinkNavigate='/Community'
              LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold'
            />

            <Card
              Card='w-[225px] h-90 bg-white rounded-lg'
              image='./HeroReadPage.jpg'
              imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
              title={'How much water' + '\n' + 'you really need'}
              titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
              link='Read article'
              LinkNavigate='/ReadPage'
              LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Community