import React from "react";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="bg-[#5169f513] py-16 md:py-24 px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 container mx-auto gap-8 items-center">
        {/* Left side */}
        <div className="md:col-span-6">
          <h1 className="text-2xl  md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#691b1b] mb-6 md:mb-0">
            Care Me Supplier Support Available 24/7
          </h1>
        </div>

        {/* Right side */}
        <div className="md:col-span-6">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-10 md:pr-20">
            Meesho supplier support is available to solve all your doubts and
            issues before and after you start your online selling business.
          </p>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#691b1b] rounded-lg">
              <CiMail className="text-white text-2xl sm:text-3xl" />
            </div>
            <div>
              <p className="text-lg md:text-xl text-[#691b1b] font-medium">
                You can reach out to
              </p>
              <p className="text-base md:text-lg text-gray-500">
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
