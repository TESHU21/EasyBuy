import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLinkedinIn, FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { heroImages } from '@/assets/hero/assets';

const Footer = () => {
  return (
    <footer className="bg-[#101828] text-white pt-12  ">
    
       {/* 1. Logo Section */}
       <div className="flex flex-col items-center md:items-start  px-6 md:px-16">
          <img src={heroImages.easybuy} alt="Easy Buy eCommerce Platform Logo" className="h-32 w-auto font-prata" />
        </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-16 pb-6">
       

        {/* 2. Pages Navigation */}
        <div className=' '>
          <h1 className="font-prata text-xl mb-3">Pages</h1>
          <ul className="text-gray-400 space-y-2 px-2">
              <li>
                  <NavLink className={({isActive })=>isActive?"relative after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-gray-700 after:bottom-0  after:left-0":""} to='/'>Home</NavLink>
               </li>
                <li>
                 <NavLink className={({isActive })=>isActive?"relative after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-gray-700 after:bottom-0  after:left-0":""} to='/about'>About</NavLink>
                  </li>
                     <li>
                      <NavLink className={({isActive })=>isActive?"relative after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-gray-700 after:bottom-0  after:left-0":""} to='/contact'>Contact</NavLink>
                    </li>
            </ul>
        </div>

       
        <div>
          <h1 className="font-prata text-xl mb-3">Support</h1>
          <ul className="text-gray-400 space-y-2 mb-5 px-2">
            <li className="hover:text-white transition">FAQ</li>
            <li className="hover:text-white transition">Guides</li>
            <li className="hover:text-white transition">Help Center</li>
          </ul>

         
        </div>
        <div>
        <h1 className="font-prata text-xl mb-3 px-2">Legal</h1>
          <ul className="text-gray-400 space-y-2 px-4">
            <li className="hover:text-white transition">Privacy Policy</li>
            <li className="hover:text-white transition">Terms of Service</li>
            <li className="hover:text-white transition">Refund Policy</li>
          </ul>
        </div>
        <div>
          <h1 className="font-prata text-xl mb-3">Follow Us</h1>
          <p className="text-gray-400 text-sm mb-4 px-2">
            Stay updated with our latest news.
          </p>
          <div className="flex space-x-4 items-center px-2">
            <a href="https://www.linkedin.com/company/easybuy" target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-80 transition"><FaLinkedinIn size={24} /></a>
            <a href="https://youtube.com/c/easybuy" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:opacity-80 transition"><FaYoutube size={24} /></a>
            <a href="https://t.me/easybuy" target="_blank" rel="noopener noreferrer" className="text-[#0088CC] hover:opacity-80 transition"><FaTelegramPlane size={24} /></a>
            <a href="https://instagram.com/easybuy" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:opacity-80 transition"><FaSquareInstagram size={24} /></a>
          </div>
        </div>
      </div>
      {/* Line */}
      <hr  className='  border-[1.5px]  border-gray-500' />
      <div className='flex items-center  justify-center text-gray-400  md:gap-20 my-4'>
        <p>
          &copy; 2025 All rights reserved.
        </p>
        <p>@EasyBuy</p>
      </div>
    </footer>
  );
};

export default Footer;
