import React from 'react';
import {  TbSquareLetterFFilled, TbSquareLetterIFilled, TbSquareLetterYFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div>
             <footer className="px-4 py-12 md:px-8 lg:px-16 bg-[#5f1727]">
        <div className=" container mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-white/90 text-5xl">Care Me</h3>
            <p className='text-2xl text-white/90 my-8 pr-28 font-light leading-9'>Sell your products to crores
of customers on Meesho at
0% commission</p>
<button className='bg-[#ff9c3f] px-7 py-2 border-2 cursor-pointer border-[#5a1515]  font-semibold rounded-lg text-white'>Start Selling</button>
          </div>
          <div>
            <h3 className="font-semibold text-white text-4xl">Sell on Care Me</h3>
            <ul className="mt-4 space-y-5 text-white/90 text-2xl  ">
              <li>
              Sell Online
              </li>
              <li>
              Pricing & Commission
              </li>
              <li>
              How it works
              </li>
              <li>
              Shipping & Returns

              </li>
              <li>
              Grow Your Business

              </li>
              <li>
              Learning Hub

              </li>
            </ul>
          </div>
          <div>
          <h2 className="font-semibold text-white text-4xl">Sell on Care Me</h2>
           <h2 className=' text-white/90 text-3xl mt-10'>support@caremebd.com</h2>
           <div className='flex gap-x-2 mt-7'>
           <TbSquareLetterFFilled className='text-5xl text-white'/>
           <TbSquareLetterIFilled className='text-5xl text-white'/>
           <TbSquareLetterYFilled className='text-5xl text-white'/>
           </div>
          </div>
         
        </div>
        <div className='h-[1px] bg-white w-full my-16'></div>
        <div className="mt-12 text-center text-white text-2xl">© 2015 Care Me. All Rights Reserved.</div>
      </footer>
    </div>
    )
};

export default Footer;