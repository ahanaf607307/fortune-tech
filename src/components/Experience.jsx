import React from "react";
import c1 from "../assets/e1.png";
import c2 from "../assets/e2.png";
import c3 from "../assets/e3.png";
import { FaCirclePlay } from "react-icons/fa6";

const Experience = () => {
  return (
    <div className="container mx-auto pb-16 px-4">
      <h1 className="text-center text-[#5a1515] font-semibold text-3xl md:text-4xl lg:text-5xl my-10">
        Experiences suppliers love to talk about
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-md border border-gray-300 p-4 relative flex flex-col justify-between">
          <div className="relative w-full h-52 md:h-56 lg:h-60  rounded-lg">
            <img
              src={c1}
              alt="Amit and Rajat Jain"
              className="w-full h-full object-cover rounded-lg"
            />
            <FaCirclePlay className="absolute  left-6 -bottom-6  md:-bottom-10 md:left-6 lg:-bottom-12 lg:left-8 text-4xl  md:text-6xl lg:text-7xl bg-amber-500 rounded-full p-2 text-[#5a1515]" />
          </div>

          <div className="pt-16">
            <h2 className="text-xl  md:text-3xl font-bold mb-2 text-[#5a1515]">
              Amit and Rajat Jain
            </h2>
            <h3 className="text-lg  text-gray-700 mb-4">
              Smartees, Tiruppur
            </h3>
            <p className="text-sm  md:text-lg text-gray-600">
              Our business has grown beyond our imagination, getting up to
              10,000 orders consistently during sale days. We are now
              constantly bringing new products thanks to Meesho's insights.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-md border border-gray-300 p-4 relative flex flex-col justify-between">
          <div className="relative w-full h-52 md:h-56 lg:h-60  rounded-lg">
            <img
              src={c2}
              alt="Suman"
              className="w-full h-full object-cover rounded-lg"
            />
            <FaCirclePlay className="absolute  left-6 -bottom-6  md:-bottom-10 md:left-6 lg:-bottom-12 lg:left-8 text-4xl  md:text-6xl lg:text-7xl bg-amber-500 rounded-full p-2 text-[#5a1515]" />
          </div>

          <div className="pt-16">
            <h2 className="text-xl md:text-3xl font-bold mb-2 text-[#5a1515]">
              Suman
            </h2>
            <h3 className="text-lg  text-gray-700 mb-4">
              Keshav Fashion, Hisar
            </h3>
            <p className="text-sm md:text-lg text-gray-600">
              Our business has grown beyond our imagination, getting up to
              10,000 orders consistently during sale days. We are now
              constantly bringing new products thanks to Meesho's insights.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-md border border-gray-300 p-4 relative flex flex-col justify-between">
          <div className="relative w-full h-52 md:h-56 lg:h-60 rounded-lg">
            <img
              src={c3}
              alt="Mohit Rathi"
              className="w-full h-full object-cover rounded-lg"
            />
            <FaCirclePlay className="absolute  left-6 -bottom-6  md:-bottom-10 md:left-6 lg:-bottom-12 lg:left-8 text-4xl md:text-6xl lg:text-7xl bg-amber-500 rounded-full p-2 text-[#5a1515]" />
          </div>

          <div className="pt-16">
            <h2 className="text-xl  md:text-3xl font-bold mb-2 text-[#5a1515]">
              Mohit Rathi
            </h2>
            <h3 className="text-lg  text-gray-700 mb-4">
              Meira Jewellery, Ahmedabad
            </h3>
            <p className="text-sm  md:text-lg text-gray-600">
              Our business has grown beyond our imagination, getting up to
              10,000 orders consistently during sale days. We are now
              constantly bringing new products thanks to Meesho's insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
