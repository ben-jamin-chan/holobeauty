import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/product/pp-1.avif";
import Img2 from "../../assets/product/pp-2.webp";
import Img3 from "../../assets/product/pp-3.webp";
import Img4 from "../../assets/product/pp-4.avif";
import Img5 from "../../assets/product/pp-5.avif";
import Img6 from "../../assets/product/pp-6.avif";
import Img7 from "../../assets/product/pp-1.avif";

// FIXME: ADD IN PRODUCTS BRAND
// Combined Products Data
export const products = [
  {
    id: 1,
    img: Img1,
    title: "The Rich Cream",
    brand: "Agustinus Bader",
    category: "Skincare, skin care",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Gentle Rinse Toner",
    brand: "SkinPharm",
    category: "Skincare, skin care",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Fresh Cream Moisturizer",
    brand: "La Mer",
    category: "Skincare, skin care",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    brand: "L'occitane",
    title: "Face Cream",
    category: "Skincare, skin care",
    price: "220",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Advanced Night Repair Eye Cream",
    brand: "Estee Lauder",
    category: "Skincare, skin care",
    price: "520",
    aosDelay: "0",
  },
  {
    id: 6,
    img: Img6,
    title: "Double Wear",
    brand: "Estee Lauder",
    category: "Make up, makeup",
    price: "620",
    aosDelay: "200",
  },
  {
    id: 7,
    img: Img7,
    title: "Rich Cream Moisturizer",
    brand: "Agustinus Bader",
    category: "Skincare, skin care",
    price: "720",
    aosDelay: "400",
  },
  {
    id: 8,
    img: Img5,
    title: "Advanced Face Cream Moisturizer",
    brand: "Estee Lauder",
    category: "Skincare, skin care",
    price: "880",
    aosDelay: "600",
  },
  {
    id: 8,
    img: "https://m.clinique.com.my/media/export/cms/products/1200x1500/cl_sku_6MNY13_1200x1500_0.png",
    title: "Makeup SPF 15",
    brand: "Clinique",
    category: "Make up, makeup",
    price: "8888",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div className="min-h-[550px]">
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
