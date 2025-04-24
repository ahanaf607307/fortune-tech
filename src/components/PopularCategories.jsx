import React from 'react';

const PopularCategories = () => {
    return (
        <div className='pb-16  mb-6 lg:mb-28 mt-1 lg:mt-10 container mx-auto p-5  xl:p-5'>
            <h1 className='font-bold text-[#5f1727] text-3xl md:text-4xl lg:text-5xl'>Popular Categories to Sell Online</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 '>
                <p className='text-xl md:text-2xl text-gray-500  '>Sell Sarees Online</p>
                <p className='text-xl md:text-2xl text-gray-500  '>Sell Tshirts Online</p>
                <p className='text-xl md:text-2xl text-gray-500  '>Sell Watches Online</p>
                <p className='text-xl md:text-2xl text-gray-500  '>Sell Clothes Online
                </p>
                <p className='text-xl md:text-2xl text-gray-500  '>Sell Jewellery Online</p>
                <p className='text-xl md:text-2xl text-gray-500  '>Sell Shirts Online</p>
                <p className='text-xl md:text-2xl text-gray-500  '>Sell Electronics Online</p>
                <p className='text-xl md:text-2xl text-gray-500  '>Sell Socks Online</p>
            </div>
        </div>
    );
};

export default PopularCategories;