import React ,{useState} from 'react'
import { NavLink,Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { heroImages } from '@/assets/hero/assets';
const Nav = () => {
    const [visible, setVisible] = useState(false);
    const handleCloseMenu = () => {
        setVisible(false);
    };
  return (
    <nav className='flex  justify-around  md:items-center py-4 px-6   font-medium bg-white'>
        {/* Logo */}
        <div>
            <img src={heroImages.easybuy} alt="LOGO" className='w-full h-32' />
        </div>
        {/* Desktop Menu */}
        <ul className=' hidden md:flex gap-12 justify-center   '>
            <li>
                <NavLink className={({isActive })=>isActive?"relative after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-gray-700 after:bottom-0  lg:after:left-0":""} to='/'>Home</NavLink>

            </li>
            <li>
                <NavLink className={({isActive })=>isActive?"relative after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-gray-700 after:bottom-0  lg:after:left-0":""} to='/shop'>Shop</NavLink>
            </li>
            <li>
                <NavLink className={({isActive })=>isActive?"relative after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-gray-700 after:bottom-0  lg:after:left-0":""} to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink className={({isActive })=>isActive?"relative after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-gray-700 after:bottom-0  lg:after:left-0":""} to='/contact'>Contact</NavLink>
            </li>
            
               
        </ul>
        {/* Icons */}
        <div className='hidden md:flex items-center gap-4'>
            <NavLink to="/"><FaCartShopping /></NavLink>
        </div>
        {/* HamBurger for Mobile */}
        <div className='flex justify-around items-center md:hidden gap-4 w-full'>
        <button  onClick={()=>setVisible(!visible)} className=' '><GiHamburgerMenu size={24} /></button>
        <NavLink to="/"><FaCartShopping/></NavLink>
        </div>
           
        
        <ul className={visible? "fixed  md:hidden left-0.5 top-2 w-[40%] py-4 flex flex-col gap-3 border  bg-white z-50 ease-in-out duration-500 shadow-md pl-4":"ease-in-out w-[60%] duration-500 fixed top-0 left-[-100%]"} >
        
            <Link to='/'> <img src={heroImages.easybuy} alt="LOGO" className=' relative md:hidden' /></Link>
            <button onClick={handleCloseMenu} className=' absolute top-1 right-1 hover:text-red-500 '><IoMdClose size={24} className=' text-red-800' /></button>

            <li>
                <NavLink className={({isActive })=>isActive?"relative after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-gray-700 after:bottom-0  after:left-0":""} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive })=>isActive?"relative after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-gray-700 after:bottom-0  lg:after:left-0":""} to='/shop'>Shop</NavLink>
            </li>
            <li>
                <NavLink className={({isActive })=>isActive?"relative after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-gray-700 after:bottom-0  after:left-0":""} to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink className={({isActive })=>isActive?"relative after:content-[''] after:absolute after:w-[40px] after:h-[2px] after:bg-gray-700 after:bottom-0  after:left-0":""} to='/contact'>Contact</NavLink>
            </li>
        </ul>
       
        

    </nav>
  )
}

export default Nav