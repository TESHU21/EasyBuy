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
import { useCart } from '@/context/cartContext'
import { MdClear } from "react-icons/md";





const CartItem = ({item,isSelected,onSelect}) => {
  const {clearCart,removeFromCart,addToCart,removeCartItem}=useCart()
  return (
    <Card role="listitem">
      <CardContent>
    <div className=' relative' >
        <Checkbox   id={`select-item-${item.id}`} checked={isSelected} onCheckedChange={()=>onSelect(item.id)} className=" border-2 border-gray-600"/>
        <label htmlFor={`select-item-${item.id}`} className="sr-only"> Select {item.name}</label>
        <button onClick={()=>removeCartItem(item)} className=' absolute right-0 top-0 hover:text-red-500 cursor-pointer'><MdClear size={24}/></button>

        <div className="flex  justify-between relative">
            <img src={item.image} alt= {`Image of ${item}`} className='w-32 h-32  object-cover  flex-1' />
            <div className=' flex flex-col gap-2 px-4 flex-1'>
                <p className=" text-gray-400">{item.name}</p>
                <p>Price:{item.price} <span>Qty:{item.quantity}</span></p>
                <p>Sub_Total:{item.price*item.quantity}</p>
                <div className=' flex items-center gap-6'>
                <button onClick={()=>removeFromCart(item)}   aria-label={`Remove ${item.name} from cart`}
                ><FiMinus size={24}/></button>
                        <span>{item.quantity}</span>
                 <button onClick={()=>addToCart(item)}   aria-label={`Decrement quantity of ${item.name}`}
                 ><HiPlusSmall size={24}/></button> 

                </div>


            </div>

       </div>

    </div>
    </CardContent>
    </Card>
  )
}

export default CartItem