'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'

const Community = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:1337/api/products?populate=*')
      .then(res => res.json())
      .then(data => {
        setProducts(data.data)
      })
  }, [])

  const product1: any = products[2]
  const product2: any = products[3]
  const product3: any = products[4]
  const product4: any = products[5]
  const product5: any = products[6]
  const product6: any = products[7]
  const product7: any = products[8]
  const product8: any = products[9]
  const product9: any = products[10]
  const product10: any = products[11]
  const product11: any = products[12]
  const product12: any = products[13]


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

        <div className='w-full lg:w-[915px] mx-auto mb-25'>
          <div className='py-10'>
            <h1 className='text-3xl font-bold text-center text-[#0D1B2A] pb-5 '>Your Weekly Hydration Guide</h1>
            <p className='text-md text-center text-[#0D1B2A]'>Tailored hydration tips for your lifestyle.</p>
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 sm:gap-y-0 lg:gap-0'>
            {product1 && (
              <Card
                key={product1.id}
                Card='w-[225px] h-107 bg-white pb-5 mr-4 rounded-lg'
                image={`http://localhost:1337${product1.image?.url}`}
                imageClassname='w-full h-50 object-cover object-[center_10%] rounded-tl-lg rounded-tr-lg'
                title={product1.title}
                titleClassname='text-xl font-bold text-left pt-5 pl-5'
                description={product1.description}
                descriptionClassname='text-sm text-left pt-2 pl-5 mb-4'
                link='Read Tip'
                LinkNavigate='/ReadPage'
                LinkClassname='mr-25 bg-black text-lg text-white px-3 py-2 rounded-full font-semibold hover:bg-white hover:border-2 hover:border-black  hover:text-black transation-all duration-200'
              />
            )}

            {product2 && (
              <Card
                key={product2.id}
                Card='w-[225px] h-107 bg-white pb-5 mr-4 rounded-lg'
                image={`http://localhost:1337${product2.image?.url}`}
                imageClassname='w-full h-50 object-cover object-[center_10%] rounded-tl-lg rounded-tr-lg'
                title={product2.title}
                titleClassname='text-xl font-bold text-left pt-5 pl-5'
                description={product2.description}
                descriptionClassname='text-sm text-left pt-2 pl-5 mb-4'
                link='Read Tip'
                LinkNavigate='/ReadPage'
                LinkClassname='mr-25 bg-black text-lg text-white px-3 py-2 rounded-full font-semibold hover:bg-white hover:border-2 hover:border-black  hover:text-black transation-all duration-200'
              />
            )}

            {product3 && (
              <Card
                key={product3.id}
                Card='w-[225px] h-107 bg-white pb-5 mr-4 rounded-lg'
                image={`http://localhost:1337${product3.image?.url}`}
                imageClassname='w-full h-50 object-cover object-[center_10%] rounded-tl-lg rounded-tr-lg'
                title={product3.title}
                titleClassname='text-xl font-bold text-left pt-5 pl-5'
                description={product3.description}
                descriptionClassname='text-sm text-left pt-2 pl-5 mb-9'
                link='Read Tip'
                LinkNavigate='/ReadPage'
                LinkClassname='mr-25 bg-black text-lg text-white px-3 py-2 rounded-full font-semibold hover:bg-white hover:border-2 hover:border-black  hover:text-black transation-all duration-200'
              />
            )}

            {product4 && (
              <Card
                key={product4.id}
                Card='w-[225px] h-107 bg-white pb-5 mr-4 rounded-lg'
                image={`http://localhost:1337${product4.image?.url}`}
                imageClassname='w-full h-50 object-cover object-[center_100%] rounded-tl-lg rounded-tr-lg'
                title={product4.title}
                titleClassname='text-xl font-bold text-left pt-5 pl-5'
                description={product4.description}
                descriptionClassname='text-sm text-left pt-2 pl-5 mb-9'
                link='Read Tip'
                LinkNavigate='/ReadPage'
                LinkClassname='mr-25 bg-black text-lg text-white px-3 py-2 rounded-full font-semibold hover:bg-white hover:border-2 hover:border-black  hover:text-black transation-all duration-200'
              />
            )}
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
            {product5 && (
              <Card
                key={product5.id}
                Card='w-[225px] h-90 bg-white rounded-lg '
                image={`http://localhost:1337${product5.image?.url}`}
                imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
                title={product5.title}
                titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-3'
                link='Read article'
                LinkNavigate='/ReadPage'
                LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold hover:bg-white hover:border-2 hover:border-black  hover:text-black transation-all duration-200'
              />
            )}

            {product6 && (
              <Card
                key={product6.id}
                Card='w-[225px] h-90 bg-white rounded-lg '
                image={`http://localhost:1337${product6.image?.url}`}
                imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
                title={product6.title}
                titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
                link='Read article'
                LinkNavigate='/ReadPage'
                LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold hover:bg-white hover:border-2 hover:border-black  hover:text-black transation-all duration-200'
              />
            )}

            {product7 && (
              <Card
                key={product7.id}
                Card='w-[225px] h-90 bg-white rounded-lg '
                image={`http://localhost:1337${product7.image?.url}`}
                imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
                title={product7.title}
                titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
                link='Read article'
                LinkNavigate='/ReadPage'
                LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold hover:bg-white hover:border-2 hover:border-black  hover:text-black transation-all duration-200'
              />
            )}

            {product8 && (
              <Card
                key={product8.id}
                Card='w-[225px] h-90 bg-white rounded-lg '
                image={`http://localhost:1337${product8.image?.url}`}
                imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
                title={product8.title}
                titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
                link='Read article'
                LinkNavigate='/ReadPage'
                LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold hover:bg-white hover:border-2 hover:border-black  hover:text-black transation-all duration-200'
              />
            )}
          </div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            {product9 && (
              <Card
                key={product9.id}
                Card='w-[225px] h-90 bg-white rounded-lg '
                image={`http://localhost:1337${product9.image?.url}`}
                imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
                title={product9.title}
                titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
                link='Read article'
                LinkNavigate='/ReadPage'
                LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold hover:bg-white hover:border-2 hover:border-black  hover:text-black transation-all duration-200'
              />
            )}

            {product10 && (
              <Card
                key={product5.id}
                Card='w-[225px] h-90 bg-white rounded-lg '
                image={`http://localhost:1337${product10.image?.url}`}
                imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
                title={product10.title}
                titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
                link='Read article'
                LinkNavigate='/ReadPage'
                LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold hover:bg-white hover:border-2 hover:border-black  hover:text-black transation-all duration-200'
              />
            )}

            {product11 && (
              <Card
                key={product11.id}
                Card='w-[225px] h-90 bg-white rounded-lg '
                image={`http://localhost:1337${product11.image?.url}`}
                imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
                title={product11.title}
                titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
                link='Read article'
                LinkNavigate='/ReadPage'
                LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold hover:bg-white hover:border-2 hover:border-black  hover:text-black transation-all duration-200'
              />
            )}

            {product12 && (
              <Card
                key={product12.id}
                Card='w-[225px] h-90 bg-white rounded-lg '
                image={`http://localhost:1337${product12.image?.url}`}
                imageClassname='w-full h-50 object-cover rounded-tl-lg rounded-tr-lg'
                title={product12.title}
                titleClassname='text-lg font-bold text-left pt-5 pl-5 mb-10'
                link='Read article'
                LinkNavigate='/ReadPage'
                LinkClassname='bg-black text-lg text-white mr-16 px-3 py-2 rounded-full font-semibold hover:bg-white hover:border-2 hover:border-black  hover:text-black transation-all duration-200'
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Community