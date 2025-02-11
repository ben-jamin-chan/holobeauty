import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import CategoryTwo from './components/Category/CategoryTwo'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import headphone from "./assets/hero/headphone.png"
import Products from './components/Products/Products.jsx'
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png"
import Blogs from './components/Blogs/Blogs'
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Signup from "./components/Signup/Signup.jsx"
import { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import lipstick from "./assets/hero/tf-lipstick.png"
import lamer from "./assets/category/la-mer-1.webp"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import { CartProvider } from './Context/CartContext.jsx'
import Cart from './components/Cart/Cart.jsx'
import Searchresult from './components/Search/Searchresult.jsx'

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: lipstick,
  title2: "Tom Ford",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, id.",
  bgColor: "#f42c37"
}

const BannerDataTwo = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: lamer,
  title2: "La Mer",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, id.",
  bgColor: "#2dcc6f"
}

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

useEffect(() => {
    AOS.init({
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      })
      AOS.refresh()
  }, [])

  return (
    <CartProvider>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <BrowserRouter>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Routes>
        <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Searchresult />} />
      </Routes>
      <Footer />
      <Signup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      </BrowserRouter>
    </div>
    </CartProvider>
  )
}

const Home = () => {
  return (
  <>
      <Hero />
      <Category />
      <CategoryTwo />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerDataTwo} />
      <Blogs />
      <Partners />
  </>
  )
}

export default App

// Currently, all your components (Hero, Category, etc.) are being rendered on every page because they're outside the Routes. To show different pages with their own unique content, you need to move these components into their respective page components. 

