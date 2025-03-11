import React from 'react'
import {useCart} from '@/context/cartContext'
import { Button } from '@/components/ui/button'


const Cart = () => {
    const {addToCart,removeFromCart,clearCart,getCartTotal,cartItems} = useCart()
  return (
    <div className='p-2'>
        <h1>Shoping Cart</h1>
        <div>
           
            {cartItems.length===0? (
              <div>Cart is Empty</div>
            ):(
              cartItems.map((item)=>(
                <div key={item.id} className=' flex justify-center '>
                  <p>{item.name} -  ETB {item.price} X {item.quantity}</p>
                  <Button onClick={()=>removeFromCart(item)}>Remove</Button>

                </div>
              )
              )

            )
            }
        </div>




    </div>
  )
}

export default Cart