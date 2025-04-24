import React from 'react';
import { TbSquareLetterFFilled, TbSquareLetterIFilled, TbSquareLetterYFilled } from 'react-icons/tb';

const Footer = () => {
  return (
    <div>
      <footer className="px-4 py-12 md:px-8 lg:px-16 bg-[#5f1727]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Care Me section */}
          <div>
            <h3 className="font-semibold text-white/90 text-3xl  md:text-5xl">Care Me</h3>
            <p className="text-lg  md:text-2xl text-white/90 my-8 pr-10 md:pr-20 font-light leading-7 md:leading-9">
              Sell your products to crores of customers on Meesho at 0% commission
            </p>
            <button className="bg-[#ff9c3f] px-7 py-2 border-2 cursor-pointer border-[#5a1515] font-semibold rounded-lg text-white text-lg md:text-xl">
              Start Selling
            </button>
          </div>

          {/* Sell on Care Me links */}
          <div>
            <h3 className="font-semibold text-white text-3xl  md:text-4xl">Sell on Care Me</h3>
            <ul className="mt-4 space-y-4  text-white/90 text-lg  md:text-2xl">
              <li>Sell Online</li>
              <li>Pricing & Commission</li>
              <li>How it works</li>
              <li>Shipping & Returns</li>
              <li>Grow Your Business</li>
              <li>Learning Hub</li>
            </ul>
          </div>

          {/* Contact and Social Links */}
          <div>
            <h2 className="font-semibold text-white text-4xl md:text-4xl">Contact Us</h2>
            <h2 className="text-white/90 t text-xl lg:text-3xl mt-6">
              support@caremebd.com
            </h2>
            <div className="flex gap-x-4 mt-7">
              <TbSquareLetterFFilled className="text-4xl  md:text-6xl text-white" />
              <TbSquareLetterIFilled className="text-4xl  md:text-6xl text-white" />
              <TbSquareLetterYFilled className="text-4xl  md:text-6xl text-white" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white w-full my-12 "></div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-white text-xl  md:text-2xl">
          © 2015 Care Me. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
