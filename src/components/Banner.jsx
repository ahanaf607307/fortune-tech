import React from "react";

import bannerImage from "../assets/bannerImage.png";

const Banner = () => {
  return (
    <>
      <div className="bg-[#fde8de] overflow-hidden mb-7">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          {/* left */}
          <div className="flex flex-col  p-8 md:pl-10  xl:pl-28 2xl:pl-52  col-span-1 md:col-span-6 space-y-6 container mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-4xl leading-tight font-extrabold ">
              Sell online to 14 Cr+ customers at{" "}
              <span className="text-[#5f1727]">0% Commission</span>
            </h1>
            <div className="text-base md:text-lg lg:text-lg">
              <p>Become a Care Me seller and grow your business across Bangladesh</p>
              <p><span className="bg-[#5f1727] text-white px-2 py-1 rounded-lg mr-2">New!</span>Don’t have a GSTIN? You can still sell on Meesho. <a href="#" className="text-[#5f1727]">Know more</a></p>
            </div>

            <div class="flex rounded-md shadow-sm">
              <input
                type="text"
                class="flex-1 block w-full min-w-0 rounded-none rounded-l-md border-0 py-1.5 px-5 text-gray-900 ring-1 ring-inset ring-[#5f1727] bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5f1727] sm:text-sm sm:leading-6"
                placeholder="Enter Your Mobile Number"
              />
              <button
                type="button"
                class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md bg-[#5f1727] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5f1727]  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5f1727]"
              >
                Start Selling
              </button>
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
