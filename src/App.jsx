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

function App() {

  return (
    <div className='font-roboto flex flex-col gap-y-10 '>
      <Navbar/>
      <Banner/>
      <TotalSection/>
      <WhySuppliers/>
      <Exclusive/>
      <Experience/>
      <Footer/>
    </div>
  )
}

export default App
