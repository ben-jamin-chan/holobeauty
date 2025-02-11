import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import Img1 from "../../assets/product/pp-1.avif"
import Img2 from "../../assets/product/pp-2.webp"
import Img3 from "../../assets/product/pp-3.webp"
import Img4 from "../../assets/product/pp-4.avif"
import Img5 from "../../assets/product/pp-5.avif"
import Img6 from "../../assets/product/pp-6.avif"
import Img7 from "../../assets/product/pp-1.avif"

export const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Agustinus Bader",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "SkinPharm",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "La Mer",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "L'occitane",
        price: "220",
        aosDelay: "600",
    },
]

const ProductsDataTwo = [
    {
        id: 1,
        img: Img5,
        title: "Estee Lauder - Advanced Night Repair Eye Cream",
        price: "120",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img6,
        title: "Estee Lauder - Double Wear",
        price: "420",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img7,
        title: "Agustinus Bader",
        price: "320",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img5,
        title: "Estee Lauder",
        price: "220",
        aosDelay: "600",
    },
]

const Products = () => {
  return (
    <div className='min-h-[550px]'>
      <div className="container">
        {/* Header section */}
            <Heading
            title="Our Products"
            subtitle={"Explore Our Products"}
            />
        {/* Body section */}
        <ProductCard 
        data={ProductsData}
        />
         <ProductCard
        data={ProductsDataTwo}
        />
      </div>
    </div>
  )
}



export default Products
