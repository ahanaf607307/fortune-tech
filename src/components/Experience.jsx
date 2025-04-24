import React from "react";
import c1 from "../assets/e1.png";
import c2 from "../assets/e2.png";
import c3 from "../assets/e3.png";
import { FaCirclePlay } from "react-icons/fa6";

const Experience = () => {
  return (
    <div className="container mx-auto ">
      <h1 className="text-center text-[#5a1515] font-semibold text-5xl my-10">
        Experiences suppliers love to talk about
      </h1>
      <div className="grid grid-cols-3 items-center gap-3">
        {/* card1 */}
        <div className=" mx-auto  bg-white rounded-xl border border-gray-500 p-3">
          <div className=" h-48 w-full relative">
            <img
              src={c1}
              alt="Card image"
              fill
              className="object-cover rounded-lg"
              priority
            />
            <div>
              <FaCirclePlay className="text-7xl bg-amber-500 rounded-full p-2 text-[#5a1515] absolute -bottom-28 left-10" />
            </div>
          </div>

          <div className="pt-32 pb-8">
            <h2 className="text-3xl font-bold mb-2 text-[#5a1515]">
              Amit and Rajat Jain
            </h2>
            <h3 className="text-2xl  text-gray-700 my-5">Smartees, Tiruppur</h3>
            <p className="text-gray-600 text-xl ">
              Our business has grown beyond our imagination, getting upto 10,000
              orders consistently during sale days. We are now constantly
              bringing new products thanks to Meesho's insights.
            </p>
          </div>
        </div>
        {/* card1 end*/}
        {/* card2 */}
        <div className=" mx-auto  bg-white rounded-xl border border-gray-500 p-3">
          <div className=" h-48 w-full relative">
            <img
              src={c2}
              alt="Card image"
              fill
              className="object-cover rounded-lg"
              priority
            />
            <div>
              <FaCirclePlay className="text-7xl bg-amber-500 rounded-full p-2 text-[#5a1515] absolute -bottom-28 left-10" />
            </div>
          </div>

          <div className="pt-32 pb-8">
            <h2 className="text-3xl font-bold mb-2 text-[#5a1515]">Suman</h2>
            <h3 className="text-2xl  text-gray-700 my-5">
              Keshav Fashion, Hisar
            </h3>
            <p className="text-gray-600 text-xl ">
              Our business has grown beyond our imagination, getting upto 10,000
              orders consistently during sale days. We are now constantly
              bringing new products thanks to Meesho's insights.
            </p>
          </div>
        </div>
        {/* card2 end*/}
        {/* card3 */}
        <div className=" mx-auto  bg-white rounded-xl border border-gray-500 p-3">
          <div className=" h-48 w-full relative">
            <img
              src={c3}
              alt="Card image"
              fill
              className="object-cover rounded-lg"
              priority
            />
            <div>
              <FaCirclePlay className="text-7xl bg-amber-500 rounded-full p-2 text-[#5a1515] absolute -bottom-28 left-10" />
            </div>
          </div>

          <div className="pt-32 pb-8">
            <h2 className="text-3xl font-bold mb-2 text-[#5a1515]">
              Mohit Rathi
            </h2>
            <h3 className="text-2xl  text-gray-700 my-5">
              Meira Jewellery, Ahmedabad
            </h3>
            <p className="text-gray-600 text-xl ">
              Our business has grown beyond our imagination, getting upto 10,000
              orders consistently during sale days. We are now constantly
              bringing new products thanks to Meesho's insights.
            </p>
          </div>
        </div>
        {/* card3 end*/}
      </div>
    </div>
  );
};

export default Experience;
