import React from 'react';

const TotalSection = () => {
    return (
        <div className='container mx-auto'>
             {/* Stats Section home page */}
      <section className=" py-12  md:px-5 bg-white">
        <div className="grid md:grid-cols-2  xl:grid-cols-4 gap-4 ">
          <div className="px-4 py-6 bg-[#f3f3f3e7] flex flex-col text-start rounded-md">
            <h3 className="text-2xl md:text-4xl font-bold text-[#5a1515]">11 Lakh+</h3>
            <p className="mt-5 text-gray-500 text-xl md:text-2xl font-bold">Trust Care Me to sell online</p>
          </div>
          <div className="px-4 py-6 bg-[#f3f3f3e7] flex flex-col text-start rounded-md">
            <h3 className="text-2xl md:text-4xl font-bold text-[#5a1515]">14 Crore+</h3>
            <p className="mt-5 text-gray-500 text-xl md:text-2xl font-bold">Customers buying across Bangladesh</p>
          </div>
          <div className="px-4 py-6 bg-[#f3f3f3e7] flex flex-col text-start rounded-md">
            <h3 className="text-2xl md:text-4xl font-bold text-[#5a1515]">19000+</h3>
            <p className="mt-5 text-gray-500 text-xl md:text-2xl font-bold">Pincode Supported for delivery</p>
          </div>
          <div className="px-4 py-6 bg-[#f3f3f3e7] flex flex-col text-start rounded-md">
            <h3 className="text-2xl md:text-4xl font-bold text-[#5a1515]">700+</h3>
            <p className="mt-5 text-gray-500 text-xl md:text-2xl font-bold pr-10">Categories to sell online</p>
          </div>
        </div>
      </section>
        </div>
    );
};

export default TotalSection;