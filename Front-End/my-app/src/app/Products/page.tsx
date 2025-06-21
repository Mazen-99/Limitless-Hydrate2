'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Table from '../components/Table'
import Card from '../components/Card'

const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:1337/api/products?populate=*')
      .then(res => res.json())
      .then(data => {
        setProducts(data.data)
      })
  }, [])

  const product1: any = products[0]
  const product2: any = products[1]

  return (
    <div>
      <Navbar />
      <div>

        {/* First Section {Hero} */}
        <div className='w-full lg:w-[900px] lg:h-95 h-50 bg-white mx-auto mt-[70px] lg:mt-[90px] lg:rounded-lg'>
          <div className='grid grid-cols-12'>
            <h1 className='col-span-6 md:text-3xl text-xl w-[275px] font-bold lg:ml-10 ml-1 lg:mt-40 mt-19'>
              Discover Your <br /> Hydration Upgrade
            </h1>
            <img src="./HeroProducts.png" alt="Photo" className='col-span-6 lg:h-82 h-42 mx-auto md:mt-5 mt-1 md:ml-5 lg:ml-[-20px]' />
          </div>
        </div>

        {/* Second Section {Cards} */}
        <div className='w-full lg:w-[900px] mt-5 lg:mb-5 mx-auto lg:rounded-lg sm:overflow-x-scroll lg:overflow-hidden'>
          <div className='flex lg:mb-15'>
            {product1 && (
              <Card
                key={product1.id}
                Card='w-[440px] lg:h-118 h-95 bg-white lg:rounded-lg mr-5'
                image={`http://localhost:1337${product1.image?.url}`}
                imageClassname='lg:h-80 h-50 mx-auto'
                title={product1.title}
                titleClassname='text-2xl font-semibold'
                description={product1.description}
                descriptionClassname='text-md leading-tight text-black my-1 mb-4'
                link='Learn More'
                LinkClassname='bg-black text-lg text-white font-semibold py-2 px-3 rounded-full'
                LinkNavigate='/TheProduct'
              />
            )}

            {product2 && (
              <Card
                key={product2.id}
                Card='w-[440px] lg:h-118 h-95 bg-white lg:rounded-lg mr-5'
                image={`http://localhost:1337${product2.image?.url}`}
                imageClassname='lg:h-80 h-50 mx-auto'
                title={product2.title}
                titleClassname='text-2xl font-semibold'
                description={product2.description}
                descriptionClassname='text-md leading-tight text-black my-1 mb-4'
                link='Learn More'
                LinkClassname='bg-black text-lg text-white font-semibold py-2 px-3 rounded-full'
                LinkNavigate='/TheProduct'
              />
            )}
          </div>

          <div className='flex'>
            {product1 && (
              <Card
                key={product1.id}
                Card='w-[440px] lg:h-118 h-95 bg-white lg:rounded-lg mr-5'
                image={`http://localhost:1337${product1.image?.url}`}
                imageClassname='lg:h-80 h-50 mx-auto'
                title={product1.title}
                titleClassname='text-2xl font-semibold'
                description={product1.description}
                descriptionClassname='text-md leading-tight text-black my-1 mb-4'
                link='Learn More'
                LinkClassname='bg-black text-lg text-white font-semibold py-2 px-3 rounded-full'
                LinkNavigate='/TheProduct'
              />
            )}

            {product2 && (
              <Card
                key={product2.id}
                Card='w-[440px] lg:h-118 h-95 bg-white lg:rounded-lg mr-5'
                image={`http://localhost:1337${product2.image?.url}`}
                imageClassname='lg:h-80 h-50 mx-auto'
                title={product2.title}
                titleClassname='text-2xl font-semibold'
                description={product2.description}
                descriptionClassname='text-md leading-tight text-black my-1 mb-4'
                link='Learn More'
                LinkClassname='bg-black text-lg text-white font-semibold py-2 px-3 rounded-full'
                LinkNavigate='/TheProduct'
              />
            )}
          </div>

        </div>
      </div>
      <Table />
      <Footer />
    </div>
  )
}

export default ProductsPage
