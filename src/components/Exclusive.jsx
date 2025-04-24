import { AiFillSound } from "react-icons/ai";
import { FaRegMoneyBill1 } from "react-icons/fa6";

const RewardsSection = () => {
  return (
    <div className="bg-[#5169f513] my-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-5">
          {/* Left Text */}
          <div>
            <h1 className="text-2xl  md:text-4xl lg:text-5xl font-bold text-[#691b1b]">
              Exclusive Supplier+ Rewards for the first 30 days
            </h1>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch w-full">
            {/* Card 1 */}
            <div className="flex-1 flex flex-col bg-white border border-gray-200 p-6 md:p-8 rounded-lg shadow-sm w-full lg:relative lg:-top-20">
              <AiFillSound className="text-4xl text-[#691b1b] -rotate-45 mb-2" />
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Free catalog visibility of ₹600
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
                Run advertisements for your catalogs to increase the visibility
                of your products and get more orders. Currently, not available
                for sellers who don't have a Regular GSTIN.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex-1 flex flex-col bg-white border border-gray-200 p-6 md:p-8 rounded-lg shadow-sm w-full lg:relative lg:top-20">
              <FaRegMoneyBill1 className="text-4xl text-[#691b1b] mb-2" />
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                Free catalog visibility of ₹600
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
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

export default RewardsSection;
