import React from 'react'
import {useCart} from '@/context/cartContext'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const Cart = () => {
    const {addToCart,removeFromCart,clearCart,getCartTotal,cartItems} = useCart()
  return (
    <div className="flex flex-col">
      <Breadcrumb className="flex justify-center">
         <BreadcrumbList>
           <BreadcrumbItem>
             <BreadcrumbLink href="/">Home</BreadcrumbLink>
           </BreadcrumbItem>
           <BreadcrumbSeparator />
           <BreadcrumbItem>
             <BreadcrumbPage>Cart</BreadcrumbPage>
           </BreadcrumbItem>
         </BreadcrumbList>
       </Breadcrumb>
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