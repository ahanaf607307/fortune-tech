import React from "react";
import { AiFillSound } from "react-icons/ai";
import { FaRegMoneyBill1 } from "react-icons/fa6";

const Exclusive = () => {
  return (
    <div className="bg-[#5169f513] my-20">
      <div className="container mx-auto  ">
        <section className="grid grid-cols-12 items-center py-6">
          {/* left */}
          <div className="col-span-6">
            <h1 className="text-5xl font-bold text-[#691b1b]">
              Exclusive Supplier+ Rewards for the first 30 days
            </h1>
          </div>
          {/* right */}
          <div className="col-span-6 flex gap-10 ">
            {/* card 1 */}
            <div className="flex flex-col bg-white border border-gray-200 p-8 text-start gap-y-4 w-96 relative -top-20 rounded-lg">
              <AiFillSound className="text-4xl text-[#691b1b] -rotate-45" />
              <h1 className="text-3xl font-semibold">
                Free catalog visibility of ₹600
              </h1>
              <p className="text-xl leading-8 text-gray-500">
                Run advertisements for your catalogs to increase the visibility
                of your products and get more orders. Currently, not available
                for sellers who don't have a Regular GSTIN.
              </p>
            </div>

            {/* card2 */}
            <div className="flex flex-col bg-white border border-gray-200 p-8 text-start gap-y-4 w-96 relative top-20 rounded-lg">
              <FaRegMoneyBill1  className="text-4xl text-[#691b1b] " />
              <h1 className="text-3xl font-semibold">
              Free catalog visibility
              of ₹600
              </h1>
              <p className="text-xl leading-8 text-gray-500">
                Run advertisements for your catalogs to increase the visibility
                of your products and get more orders. Currently, not available
                for sellers who don't have a Regular GSTIN.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Exclusive;
