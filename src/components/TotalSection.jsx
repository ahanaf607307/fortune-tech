import React from 'react';

const TotalSection = () => {
    return (
        <div className='container mx-auto'>
             {/* Stats Section home page */}
      <section className=" py-12   bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 space-x-4 ">
          <div className="px-4 py-6 bg-[#faf3f2] flex flex-col text-start rounded-md">
            <h3 className="text-2xl md:text-5xl font-bold text-[#5a1515]">11 Lakh+</h3>
            <p className="mt-5 text-gray-600 text-3xl font-bold">Trust Care Me to sell online</p>
          </div>
          <div className="px-4 py-6 bg-[#faf3f2] flex flex-col text-start rounded-md">
            <h3 className="text-2xl md:text-5xl font-bold text-[#5a1515]">14 Crore+</h3>
            <p className="mt-5 text-gray-600 text-3xl font-bold">Customers buying across Bangladesh</p>
          </div>
          <div className="px-4 py-6 bg-[#faf3f2] flex flex-col text-start rounded-md">
            <h3 className="text-2xl md:text-5xl font-bold text-[#5a1515]">19000+</h3>
            <p className="mt-5 text-gray-600 text-3xl font-bold">Pincode Supported for delivery</p>
          </div>
          <div className="px-4 py-6 bg-[#faf3f2] flex flex-col text-start rounded-md">
            <h3 className="text-2xl md:text-5xl font-bold text-[#5a1515]">700+</h3>
            <p className="mt-5 text-gray-600 text-3xl font-bold">Categories to sell online</p>
          </div>
        </div>
      </section>
        </div>
    );
};

export default TotalSection;