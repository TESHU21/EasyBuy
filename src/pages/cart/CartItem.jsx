import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { FiMinus } from 'react-icons/fi'
import { HiPlusSmall } from 'react-icons/hi2'


const CartItem = ({item}) => {
  return (
    <div>
        <Checkbox/>
        <div>
            <img src={item.image} alt="Product Image" />
            <div>
                <p>{item.name}</p>
                <p>Price:{item.price} <span>Quantity:{item.quantity}</span></p>
                <p>Sub Total:{item.price*item.quantity}</p>
                <div>
                <button onClick={()=>setQuantity(quantity-1)}><FiMinus size={24}/></button>
                        <span>{item.quantity}</span>
                        <button onClick={()=>setQuantity(quantity+1)}><HiPlusSmall size={24}/></button>

                </div>

            </div>
        </div>



    </div>
  )
}

export default CartItem