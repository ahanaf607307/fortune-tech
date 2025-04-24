import React, { useState } from 'react';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { RiMenuUnfoldLine } from 'react-icons/ri';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='py-7 lg:py-10 px-4 md:px-8 container mx-auto'>
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <h1 className='text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-[#5a1515]'>Care Me</h1>

               
                <div className='lg:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <RiMenuUnfoldLine className="w-6 h-6 text-[#5a1515]" /> : <MdOutlineMenuOpen  className="w-6 h-6 text-[#5a1515]" />}
                    </button>
                </div>

                {/* Nav Links Desktop */}
                <ul className='hidden lg:flex justify-between font-medium items-center gap-x-10 lg:gap-x-5 xl:gap-x-10 text-lg lg:text-md xl:text-lg'>
                    <li>Sell Online</li>
                    <li>How it works</li>
                    <li>Pricing & Commission</li>
                    <li>Shipping & Returns</li>
                </ul>

                {/* Buttons Desktop */}
                <div className='hidden lg:flex justify-between items-center gap-x-4'>
                    <button className='border-2 px-6 py-1 lg:px-3 xl:px-6  rounded-lg text-[#5a1515] font-bold border-[#5a1515]'>Login</button>
                    <button className='bg-[#5a1515] px-4 py-1 lg:px-2  border-2 border-[#5a1515] font-semibold rounded-lg text-white'>Start Selling</button>
                </div>
            </div>

            {/* Mobile Menu system */}
            {isOpen && (
                <div className='lg:hidden mt-4 space-y-4'>
                    <ul className='flex flex-col gap-y-3 text-base items-center font-medium'>
                        <li>Sell Online</li>
                        <li>How it works</li>
                        <li>Pricing & Commission</li>
                        <li>Shipping & Returns</li>
                    </ul>
                    <div className='flex flex-col gap-y-3 mt-4'>
                        <button className='border-2 px-6 py-1 rounded-lg text-[#5a1515] font-bold border-[#5a1515]'>Login</button>
                        <button className='bg-[#5a1515] px-4 py-1 border-2 border-[#5a1515] font-semibold rounded-lg text-white'>Start Selling</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
