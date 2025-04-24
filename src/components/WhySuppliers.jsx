import React from "react";
import { FaHandHoldingWater, FaHandshake, FaLevelUpAlt } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const WhySuppliers = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-y-10 lg:justify-between  lg:gap-y-0 p-5 items-center">
      {/* left */}
      <div className=" lg:pr-20 w-full flex flex-col justify-center text-center lg:text-start ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5f1727]">
          Why Suppliers Love Care Me
        </h1>
        <p className="text-xl lg:text-2xl font-semibold text-justify  text-gray-500 mt-4">
          All the benefits that come with selling on Care Me are designed to
          help you sell more, and make it easier to grow your business.
        </p>
      </div>
      {/* right */}
      <div className="border border-gray-300 rounded-sm w-full p-5 md:p-10">
        <div className="flex items-center py-5 gap-x-7">
          <div>
            <FaHandHoldingWater className="text-3xl md:text-4xl lg:text-5xl text-[#5f1727]" />
          </div>
          <div>
            <h1 className="font-semibold text-xl lg:text-3xl">
              0% Commission Fee
            </h1>
            <p className="text-sm md:text-xl text-gray-700">
              Suppliers selling on Meesho keep 100% of their profit by not
              paying any commission
            </p>
          </div>
        </div>
        <div className="h-[1px] bg-gray-300 w-full"></div>
        {/* 2 */}
        <div className="flex items-center py-5 gap-x-7">
          <div>
            <RiMoneyDollarCircleFill className="text-3xl md:text-4xl lg:text-5xl text-[#5f1727]" />
          </div>
          <div>
            <h1 className="font-semibold text-xl lg:text-3xl">0 Penalty Charges</h1>
            <p className="text-sm md:text-xl text-gray-700">
              Suppliers selling on Meesho keep 100% of their profit by not
              paying any commission
            </p>
          </div>
        </div>
        <div className="h-[1px] bg-gray-300 w-full"></div>
        {/* 3 */}
        <div className="flex items-center py-5 gap-x-7">
          <div>
            <FaLevelUpAlt className="text-3xl md:text-4xl lg:text-5xl text-[#5f1727]" />
          </div>
          <div>
            <h1 className="font-semibold text-xl lg:text-3xl">
              Growth for Every Supplier
            </h1>
            <p className="text-sm md:text-xl text-gray-700">
              From small to large and unbranded to branded, and now open for
              Sellers who don't have a Regular GSTIN too, Meesho fuels growth
              for all suppliers.
            </p>
          </div>
        </div>
        <div className="h-[1px] bg-gray-300 w-full"></div>
        {/* 4 */}
        <div className="flex items-center py-5 gap-x-7">
          <div>
            <FaHandshake className="text-3xl md:text-4xl lg:text-5xl text-[#5f1727]" />
          </div>
          <div>
            <h1 className="font-semibold text-xl lg:text-3xl">Ease of Doing Business</h1>
            <ul className="mt-2">
              <li className="flex gap-x-2">
                <LuArrowUpRight className="text-xl text-gray-800 " />
                Easy Product Listing
              </li>
              <li className="flex gap-x-2">
                <LuArrowUpRight className="text-xl text-gray-800 " />
                Lowest Cost Shipping
              </li>
              <li className="flex gap-x-2">
                <LuArrowUpRight className="text-xl text-gray-800 " />
                7-Day Payment Cycle from the delivery date
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[1px] bg-gray-300 w-full"></div>
      </div>
    </div>
  );
};

export default WhySuppliers;
