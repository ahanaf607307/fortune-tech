import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TotalSection from './components/TotalSection'
import WhySuppliers from './components/WhySuppliers'
import Exclusive from './components/Exclusive'
import Experience from './components/Experience'
import Footer from './components/Footer'
import PopularCategories from './components/PopularCategories'
import Contact from './components/Contact'
import HowItWorks from './components/HowItWorks'

function App() {

  return (
    <div className='font-roboto  '>
      <Navbar/>
      <Banner/>
      <TotalSection/>
      <WhySuppliers/>
      <Exclusive/>
      <Experience/>
      <HowItWorks/>
      <PopularCategories/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
