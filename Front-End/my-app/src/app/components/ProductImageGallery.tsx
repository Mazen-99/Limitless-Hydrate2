'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const ProductImageGallery = () => {
  const images = [
    './ProductFrontView.png',
    './ProductBackView.png',
    './ProductSideView.png',
  ]

  const [mainImage, setMainImage] = useState(images[0])
  const [activeIndex, setActiveIndex] = useState(0)
  const [transform, setTransform] = useState('translate(0px, 0px) scale(1)')
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length
      setMainImage(images[nextIndex])
      setActiveIndex(nextIndex)
    }, 2500)

    return () => clearInterval(interval)
  }, [activeIndex, paused])

  const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => { left: any; top: any; width: any; height: any } }; clientX: number; clientY: number }) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width - 0.5) * 200
    const y = ((e.clientY - top) / height - 0.5) * 200
    setTransform(`translate(${-x}px, ${-y}px) scale(2.5)`)
  }

  const handleMouseLeave = () => {
    setTransform('translate(0px, 0px) scale(1)')
  }

  const handleImageClick = (img: React.SetStateAction<string>, index: React.SetStateAction<number>) => {
    setMainImage(img)
    setActiveIndex(index)
    setPaused(true)
    setTimeout(() => setPaused(false), 10000)
  }

  return (
    <div className="grid grid-cols-3">
      <div className="w-max">
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-20 h-20 bg-white mb-10 mt-10 flex justify-center items-center rounded-lg cursor-pointer hover:shadow-lg ${activeIndex === index ? 'ring-2 ring-blue-400' : ''
              }`}
            onClick={() => handleImageClick(img, index)}
          >
            <img src={img} alt={`Product view ${index}`} className="w-15" />
          </div>
        ))}
      </div>

      <div
        className="lg:w-98 lg:h-120 w-80 h-100 bg-white rounded-lg lg:ml-[-200px] ml-[-50px] flex justify-center items-center overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
        <img
          src={mainImage}
          alt="Main Product"
          className="w-70 duration-150 "
          style={{ transform }} />
      </div>

      <div className='lg:w-98 h-120 bg-white rounded-lg lg:ml-[-93px] w-screen lg:mt-0 mt-5 lg:col-span-1 lg:row-auto row-start-2'>
        <div className='mt-5 ml-5'>
          <h1 className='text-2xl font-bold mb-1'>Limitless Hydrate Original</h1>
          <p className='text-[#306FC7] text-sm font-semibold mb-5'>More than hydration. It’s Water+</p>
          <img src="./Icons0.png" alt="" className='w-80 mb-3 select-none' draggable="false" />
          <h1 className='text-xl font-semibold'>Description</h1>
          <p className='text-[12px] leading-snug mb-3'>is a scientifically formulated electrolyte drink mix designed for rapid hydration. Powered by WHO-advised formula, it delivers 2,389 mg of essential electrolytes to restore balance and boost performance. Its blue raspberry flavor offers a refreshing taste, while xylitol provides a mild sweetness without added sugars. This gluten- and lactose-free formula supports optimal hydration, making it perfect for active lifestyles, workouts, and recovery.</p>
          <div className='flex'>
            <div className='flex flex-col'>
              <h1 className='text-lg font-semibold mb-3'>Flavour</h1>
              <img src="./Icon2.png" alt="" className='w-20 select-none' draggable="false" />
            </div>
            <div className='flex flex-col ml-15 mb-3'>
              <h1 className='text-lg font-semibold mb-3'>Size</h1>
              <img src="./Icons3.png" alt="" className='w-35 select-none' draggable="false" />
            </div>
          </div>
          <h1 className='text-lg font-semibold mb-3'>Available on</h1>
          <div className='flex'>
            <Link target="_blank" rel="noopener noreferrer" href='https://www.noon.com/egypt-en/limitless-hydrate-original-blue-rasberry-6-stick-pack/Z0A1E94E8461B9FDAD33EZ/p/?o=z0a1e94e8461b9fdad33ez-1&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA2hHEh5_Awm9s9fZW5dxC2Pd3pTDg2LEIh5KxAFfPa8ScPBeFq5buxoCJXgQAvD_BwE&utm_campaign=C1000151355N_eg_en_web_searchxxexactandphrasexxbrandpurexx08082022_noon_web_c1000088l_acquisition_sembranded_&utm_medium=cpc&utm_source=C1000088L'>
              <img src="./NoonIcon.png" alt="" className='w-20 mr-10 hover:brightness-40 transition duration-500' />
            </Link>

            <Link target="_blank" rel="noopener noreferrer" href='https://ifit-eg.com/?s=Limitless+Hydrate&post_type=product'>
              <img src="./AmazonIcon.png" alt="" className='w-20 hover:brightness-40 transition duration-500' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductImageGallery