import React,{useState} from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from '@/components/ui/input'
  import { HiPlusSmall } from "react-icons/hi2";
  import { FiMinus } from "react-icons/fi";
import { Button } from '@/components/ui/button';

  

const ProductDetail = ({products,open,setOpen}) => {
    const [quantity,setQuantity] = useState(1)
    const handleChange = (e) =>{

        let value = e.target.value
        if(value === ""){
            setQuantity("")
            return
        }
        value = Math.max(1, Number(value)); // Ensure at least 1
        setQuantity(value);
       
    }
    const subTotal = (products.price *(quantity) || 0).toLocaleString()
  return (
    <Dialog open={open} onOpenChange={setOpen} className=''>
     <DialogTrigger asChild> 
        <button></button>
     </DialogTrigger>
    <DialogContent className=" min-w-[400px] md:min-w-[800px]"> 
        <DialogHeader>
            <DialogTitle className=" font-prata text-center">Product Detail</DialogTitle>
            </DialogHeader>
        <div className='flex flex-col md:flex-row justify-between items-center gap-20'>
            <img src={products.image} alt={products.name} className='w-full h-64 object-cover' />
            {/* Left wings */}
            <div className='flex flex-col '>
                <h1 className='font-prata text-[24px] font-bold pb-2 '>{products.name}</h1>
              
                <p> <span className=' font-semibold font-inter '>Description:</span><br/>{products.description}</p>
                <p className='font-inter pt-2 '> <span className='font-semibold'>Price:</span>  ETB {products.price}</p>
                <div className='flex gap-4'>
                    <div className='flex gap-4 items-center pt-2'>
                        <span className=' font-semibold'>Quantity :</span>
                        <button onClick={()=>setQuantity(quantity-1)}><FiMinus size={24}/></button>
                        {/* <span>{quantity}</span> */}
                        <Input type="text"  value={quantity} onChange={handleChange} className=' w-16 text-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 '/>
                        <button onClick={()=>setQuantity(quantity+1)}><HiPlusSmall size={24}/></button>
                    </div>
                    </div>

                <div className='flex justify-between items-center pt-2'><h1> <span className=' font-semibold'>SubTotal : ETB </span>{subTotal}</h1>
                <button className='bg-violet-500 text-white p-2 rounded-md'>Add to Cart</button>  
                     


                </div>
                <div className='flex gap-4 pt-20'>
                 <Button onClick={()=>setOpen(false)} className='bg-gray-200 text-red-500 py-6 px-8 rounded-md '>Close</Button>
                <Button className=' bg-orange-300 text-white p-6 rounded-md'>Chek Out</Button>
               
                </div>
                
                </div>
            
        </div>
        
        
        
    </DialogContent>
  </Dialog>

  )
}

export default ProductDetail