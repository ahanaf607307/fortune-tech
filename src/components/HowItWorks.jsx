import React from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
} from "react-icons/tb";

const HowItWorks = () => {
  return (
    <div className="container mx-auto pb-16 px-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl pb-10 font-extrabold text-center leading-16 text-[#691b1b]">
        How it works
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 bg-[#5169f513] p-6 rounded-lg">
        {/* Reusable Card Component (No map used) */}
        {/* Card 1 */}
        <div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <TbCircleNumber1Filled className="text-[#691b1b] text-6xl md:text-7xl lg:text-9xl" />
            <hr className="sm:w-full sm:h-[2px] w-[2px] h-full bg-[#691b1b]" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-3">
            Create Account
          </h2>
          <p className="text-base md:text-lg lg:text-xl">All you need is</p>
          <ul className="list-disc text-base md:text-lg lg:text-xl pl-5 md:pl-8">
            <li>
              GSTIN (for GST sellers) or Enrolment ID / UIN (for non GST sellers)
            </li>
            <li>Bank Account</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <TbCircleNumber2Filled className="text-[#691b1b] text-6xl md:text-7xl lg:text-9xl" />
            <hr className="sm:w-full sm:h-[2px] w-[2px] h-full bg-[#691b1b]" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-3">
            List Products
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            List the products you want to sell in your supplier panel
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <TbCircleNumber3Filled className="text-[#691b1b] text-6xl md:text-7xl lg:text-9xl" />
            <hr className="sm:w-full sm:h-[2px] w-[2px] h-full bg-[#691b1b]" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-3">
            Get Orders
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            Start getting orders from crores of Indians actively shopping on our platform.
          </p>
        </div>

        {/* Card 4 */}
        <div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <TbCircleNumber4Filled className="text-[#691b1b] text-6xl md:text-7xl lg:text-9xl" />
            <hr className="sm:w-full sm:h-[2px] w-[2px] h-full bg-[#691b1b]" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-3">
            Lowest Cost Shipping
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            Products are shipped to customers at lowest costs
          </p>
        </div>

        {/* Card 5 */}
        <div>
          <div className="flex items-center justify-center sm:justify-start">
            <TbCircleNumber5Filled className="text-[#691b1b] text-6xl md:text-7xl lg:text-9xl" />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-3">
            Receive Payments
          </h2>
          <p className="text-base md:text-lg lg:text-xl">
            Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
