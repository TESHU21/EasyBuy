import React from 'react'
import { heroImages } from '@/assets/hero/assets'
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate=useNavigate()
    return (
      <div className='flex flex-col md:flex-row gap-4 px-8  bg-gradient-to-r from-[#626a79]  to-[#f8f8f8]'> 
        <div className=' flex flex-col gap-4 flex-1 pt-36  px-20 space-y-2 justify-center md:justify-start'>
            <h1 className='text-4xl font-bold font-prata text-white leading-15  '> 
            Exquisite Craftsmanship,<br/> Timeless Elegance
           

            </h1>
            <p className=' text-white font-inter'>Discover the Art of Luxury in Every Sparkling Detail <br/> Own your elegance and let your beauty shine</p>
            <div className='flex gap-4 pt-10 md:pt-24 justify-center md:justify-start'>
                <Button className="py-6 px-4 bg-[#101828] " onClick={()=>navigate("/shop")}>Shop Now</Button>
                <Button className="py-6 px-4 bg-[#101828]" onClick={()=>navigate("/about")}>Learn More</Button>
                </div>

        </div>
        <div className='flex-1 px-2'>
            <img src={heroImages.Hero4} alt="Hero Images" className='w-full max-h-[600px] object-cover ' />
        </div>
       
      </div>
    );
  };
  
  export default Hero;
  
  