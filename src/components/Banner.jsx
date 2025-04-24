import React from "react";

import bannerImage from '../assets/bannerImage.png'

const Banner = () => {
  return (
   <div className=" bg-[#fde8de]">

<div className="grid grid-cols-12 items-center ">
      {/* left */}
      <div className="border border-yellow-200 flex flex-col justify-start items-start col-span-6">
  <h1 className="text-5xl font-extrabold leading-16">
    Sell online to 14 Cr+ customers at <span className="text-[#5f1727]">0% Commission</span>
  </h1>
  <p className="text-xl font-medium leading-12">
    Become a Care Me seller and grow your business across Bangladesh <br />
    <span className='bg-[#5a1515] border-2 px-3 py-2 border-[#5a1515] font-semibold rounded-lg text-white'>New!</span> Don’t
    have a GSTIN? You can still sell on Meesho. Know more
  </p>
</div>

      {/* right */}
      <div className="bg-[#5f1727] col-span-6 rounded-tl-full ">
        <div >
            <img className="  " src={bannerImage} alt="" />
        </div>
        
      </div>
    </div>
   </div>
  );
};

export default Banner;
