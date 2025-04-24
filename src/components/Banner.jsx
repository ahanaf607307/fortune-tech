import React from "react";
import bannerImageBg from '../assets/banner-image-bg.png'
import bannerImage from '../assets/banner-image.png'

const Banner = () => {
  return (
   <div className=" bg-[#fde8de]">

<div className="grid grid-cols-12  ">
      {/* left */}
      <div className="border border-yellow-200 col-span-6 py-32 ">
        <h1 className="text-5xl font-bold ">
          Sell online to 14 Cr+ customers at 0% Commission
        </h1>
        <p className="text-xl font-medium">
          Become a Care Me seller and grow your business across Bangladesh Don’t
          have a GSTIN? You can still sell on Meesho. Know more
        </p>
      </div>
      {/* right */}
      <div className="bg-red-800 col-span-6 rounded-tl-full py-32">
        <div >
            {/* <img className="  " src={bannerImage} alt="" /> */}
        </div>
        
      </div>
    </div>
   </div>
  );
};

export default Banner;
