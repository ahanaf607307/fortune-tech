import React from "react";

import bannerImage from "../assets/bannerImage.png";

const Banner = () => {
  return (
    <>
   
   <div className="bg-[#fde8de] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center">
     {/* left */}
        <div className="flex flex-col  p-8 md:pl-12 lg:pl-20 xl:pl-44 col-span-1 md:col-span-6 space-y-6 container mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-extrabold ">
            Sell online to 14 Cr+ customers at <span className="text-[#5f1727]">0% Commission</span>
          </h1>
          <div className="text-base md:text-lg lg:text-xl font-medium">
            <p className="mb-4">Become a Care Me seller and grow your business across Bangladesh</p>
            <p>
              <span className="inline-block bg-[#5a1515] border-2 px-3 py-1 border-[#5a1515] font-semibold rounded-lg text-white mr-2">
                New!
              </span>
              Don&apos;t have a GSTIN? You can still sell on Meesho.{" "}
              <a href="#" className=" text-[#5f1727] hover:text-[#7a2a3a]">
                Know more
              </a>
            </p>
          </div>
        </div>

   {/* right */}
        <div className="bg-[#5f1727] col-span-1 md:col-span-6 rounded-tl-full h-full relative">
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            <img
              src={bannerImage}
              alt="Banner illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Banner;
