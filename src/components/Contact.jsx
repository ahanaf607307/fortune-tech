import React from "react";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className=" bg-[#5169f513] mb-24 py-24">
      <div className="grid grid-cols-12 container mx-auto items-center ">
        {/* left */}
        <div className=" flex flex-col justify-start items-start col-span-6">
          <h1 className="text-5xl font-extrabold leading-16 text-[#691b1b] ">
            Care Me Supplier Support Available 24/7
          </h1>
        </div>

        {/* right */}
        <div className=" col-span-6">
          <p className="text-2xl pr-28 text-gray-500 ">
            Meesho supplier support is available to solve all your doubts and
            issues before and after you start your online selling business.
          </p>
          <div className="flex items-center mt-10 gap-x-5">
            <div className="py-3 bg-[#691b1b]   rounded-lg px-6">
              <CiMail className=" text-white text-3xl" />
            </div>
            <div>
              <p className="text-2xl  text-[#691b1b]">
                You can reach out to
              </p>
              <p className="text-2xl  text-gray-500 ">
                support@caremebd.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
