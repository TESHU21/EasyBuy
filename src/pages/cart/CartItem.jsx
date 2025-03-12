import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { FiMinus } from 'react-icons/fi'
import { HiPlusSmall } from 'react-icons/hi2'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"




const CartItem = ({item}) => {
  return (
    <Card>
      <CardContent>
    <div >
        <Checkbox className=" border-2 border-gray-600"/>
        <div className="flex">
            <img src={item.image} alt="Product Image" className='w-full h-32  object-cover  flex-1' />
            <div className=' flex flex-col gap-2 px-4 flex-1'>
                <p className=" text-gray-400">{item.name}</p>
                <p>Price:{item.price} <span>Qty:{item.quantity}</span></p>
                <p>Sub_Total:{item.price*item.quantity}</p>
                <div className=' flex items-center gap-6'>
                <button onClick={()=>setQuantity(quantity-1)}><FiMinus size={24}/></button>
                        <span>{item.quantity}</span>
                     <button onClick={()=>setQuantity(quantity+1)}><HiPlusSmall size={24}/></button>

                </div>

            </div>
        </div>



    </div>
    </CardContent>
    </Card>
  )
}

export default CartItem