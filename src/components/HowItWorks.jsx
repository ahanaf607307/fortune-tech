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
    <div className="container mx-auto pb-16">
      <div>
        <h1 className="text-5xl pb-4 font-extrabold text-center leading-16 text-[#691b1b]">
          How it works
        </h1>
        <section className="grid grid-cols-5 gap-x-5 bg-[#5169f513] p-8">
          {/* card1 */}
          <div>
            <div className="flex items-center gap-x-8">
              <TbCircleNumber1Filled className="text-[#691b1b] text-9xl" />
              <hr className="w-full p-[0.5px] bg-[#691b1b]" />
            </div>
            <h2 className="text-3xl font-semibold mt-6 mb-3">Create Account</h2>
            <p className="text-xl">All you need is </p>
            <ul className="list-disc text-xl pl-10">
              <li>
                GSTIN (for GST sellers) or Enrolment ID / UIN (for non GST
                sellersI)
              </li>
              <li>Bank Account</li>
            </ul>
          </div>

          {/* card2 */}
          <div>
            <div className="flex items-center gap-x-8">
              <TbCircleNumber2Filled className="text-[#691b1b] text-9xl" />
              <hr className="w-full p-[0.5px] bg-[#691b1b]" />
            </div>

            <h2 className="text-3xl font-semibold mt-6 mb-3">List Products</h2>
            <p className="text-xl">
              List the products you want to sell in your supplier panel
            </p>
          </div>
          {/* card3 */}
          <div>
            <div className="flex items-center gap-x-8">
              <TbCircleNumber3Filled className="text-[#691b1b] text-9xl" />
              <hr className="w-full p-[0.5px] bg-[#691b1b]" />
            </div>

            <h2 className="text-3xl font-semibold mt-6 mb-3">Get Orders</h2>
            <p className="text-xl">
              Start getting orders from crores of Indians actively shopping on
              our platform.{" "}
            </p>
          </div>
          {/* card4 */}
          <div>
            <div className="flex items-center gap-x-8">
              <TbCircleNumber4Filled className="text-[#691b1b] text-9xl" />
              <hr className="w-full p-[0.5px] bg-[#691b1b]" />
            </div>
            <h2 className="text-2xl font-semibold mt-6 mb-3">Lowest Cost Shipping</h2>
            <p className="text-xl">
              Products are shipped to customers at lowest costs{" "}
            </p>
          </div>
          {/* card5 */}
          <div>
            <div className="">
              <TbCircleNumber5Filled className="text-[#691b1b]  text-9xl" />
              {/* <hr className="w-full p-[0.5px] hidden bg-[#ffffff]" /> */}
            </div>
            <h2 className="text-3xl font-semibold mt-6 mb-3">Receive Payments</h2>
            <p className="text-xl">
              Payments are deposited directly to your bank account following a 7
              day payment cycle from order delivery.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
