import React from 'react'
import Link from 'next/link'

type Product = {
  image?: string,
  imageClassname?: string,
  title?: string,
  titleClassname?: string,
  description?: string,
  descriptionClassname?: string,
  Card?: string,
  link?: string,
  LinkClassname?: string,
  LinkNavigate?: string,
  image2?: string,
  image2Classname?: string;
}

const Card = ({ image, imageClassname, title, titleClassname, description, descriptionClassname, Card, LinkClassname, LinkNavigate = '/', link, image2, image2Classname }: Product) => {
  return (
    <div className='flex items-center text-center'>
      <div className={`${Card}`}>
        <img src={image} alt="" className={`${imageClassname}`} />
        <h1 className={`${titleClassname} whitespace-pre-line`}> {title} </h1>
        <p className={`${descriptionClassname} whitespace-pre-line`}> {description} </p>
        <img src={image2} alt="" className={`${image2Classname}`} />
        <Link href={LinkNavigate} className={`${LinkClassname}`}>{link}</Link>
      </div>
    </div>
  )
}

export default Card
