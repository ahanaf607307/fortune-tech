import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TotalSection from './components/TotalSection'
import WhySuppliers from './components/WhySuppliers'
import Exclusive from './components/Exclusive'

function App() {

  return (
    <div className='font-roboto flex flex-col gap-y-10 pb-32'>
      <Navbar/>
      <Banner/>
      <TotalSection/>
      <WhySuppliers/>
      <Exclusive/>
    </div>
  )
}

export default App
