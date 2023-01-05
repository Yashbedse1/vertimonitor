import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import HomeLogo from "../assets/HomeLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-[80px] px-4 text-black'>
      <img className='w-[143px]' src={HomeLogo} alt='/' />
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-[#F11717]'><a href="https://www.dm-airtech.eu/">Home</a></li>
        <li className='p-4 hover:text-[#F11717]'><a href="https://www.dm-airtech.eu/">Customer Input</a></li>
        <li className='p-4 hover:text-[#F11717]'><a href="https://www.dm-airtech.eu/">Live Status</a></li>
        <li className='p-4 hover:text-[#F11717]'><a href="https://www.dm-airtech.eu/">About Us</a></li>
        <li className='p-4 hover:text-[#F11717]'><a href="https://www.dm-airtech.eu/">Contact us</a></li>
        <li className='p-4 hover:text-[#F11717]'><a href="https://www.dm-airtech.eu/">Log in</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <img className='w-[143px]' src={HomeLogo} alt='/' />
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Customer Input</li>
          <li className='p-4 border-b border-gray-600'>Live Status</li>
          <li className='p-4 border-b border-gray-600'>About Us</li>
          <li className='p-4 border-b border-gray-600'>Contact Us</li>
          <li className='p-4'>Log in</li>

      </ul>
    </div>
  );
};

export default Navbar;