import React from 'react';

const PopularCategories = () => {
    return (
        <div className='pb-16 container mx-auto'>
            <h1 className='font-bold text-[#5f1727] text-5xl'>Popular Categories to Sell Online</h1>
            <div className='grid grid-cols-4 gap-5 mt-10'>
                <p className='text-2xl text-gray-500  '>Sell Sarees Online</p>
                <p className='text-2xl text-gray-500  '>Sell Tshirts Online</p>
                <p className='text-2xl text-gray-500  '>Sell Watches Online</p>
                <p className='text-2xl text-gray-500  '>Sell Clothes Online
                </p>
                <p className='text-2xl text-gray-500  '>Sell Jewellery Online</p>
                <p className='text-2xl text-gray-500  '>Sell Shirts Online</p>
                <p className='text-2xl text-gray-500  '>Sell Electronics Online</p>
                <p className='text-2xl text-gray-500  '>Sell Socks Online</p>
            </div>
        </div>
    );
};

export default PopularCategories;