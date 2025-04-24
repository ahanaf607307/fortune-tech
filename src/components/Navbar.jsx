import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-8 container mx-auto'>
            {/* logo */}
            <div>
                <h1 className='text-4xl font-bold text-[#5a1515]'>Care Me</h1>
            </div>
            {/* route */}
            <div>
                <ul className='flex justify-between font-medium items-center gap-x-10 text-xl'>
                    <li>Sell Online</li>
                    <li>How it works</li>
                    <li>Pricing & Commission </li>
                    <li>Shipping & Returns</li>
                </ul>
            </div>
            {/* login button  */}
             <div className='flex justify-between items-center gap-x-5'>
                <button className='border-2 px-8 py-1 rounded-lg text-[#5a1515] font-bold  border-[#5a1515]'>Login</button>
                <button className='bg-[#5a1515] px-4 py-1 border-2 border-[#5a1515]  font-semibold rounded-lg text-white'>Start Selling</button>
             </div>
        </div>
    );
};

export default Navbar;