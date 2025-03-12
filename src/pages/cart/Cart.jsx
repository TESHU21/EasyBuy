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
import CartItem from './CartItem'


const Cart = () => {
    const {addToCart,removeFromCart,clearCart,getCartTotal,cartItems} = useCart()
    console.log("Cart Items",cartItems)
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
              <div className=" grid grid-cols-1 md:grid-cols-3">
                {cartItems.map((item)=><div key={item.id}><CartItem item={item}/></div>
                )}

              </div>
              
              )

            
            }
        </div>




    </div>
  )
}

export default Cart