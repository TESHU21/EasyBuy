import React from 'react'
import { usePayment } from '@/context/paymentContext'
import { useCart } from '@/context/cartContext'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const OrderItem = ({item}) => {
 const {cartItems,getCartTotal}=useCart()
 console.log("Cart Items from Orrdet Item ",cartItems)
 const total=getCartTotal()
 const formattedTotal = total.toLocaleString()

  return (
    <div className=' flex  justify-center mb-4 '>
        <Card > 
        <CardContent >
        <div className=" min-w-96 mx-auto px-6  bg-white rounded-lg ">
      <h2 className="text-xl text-center  font-mono font-semibold mb-4">Order Summary</h2>
      {cartItems.map((item)=>(   
        <div key={item.id}>
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Product</span>
          <span className="text-gray-600">Price</span>
        </div>
        <div className="flex gap-6 justify-between">
          <span>{item.name} X {item.quantity}</span>
          <span>ETB {(item.price).toLocaleString()}</span>
        </div>
      </div>
      <div className="flex justify-between border-b pb-4 mb-4">
        <span className="text-gray-600">Shipping</span>
        <span className="text-gray-600">Free shipping</span>
      </div>
      
      </div>))}
      <div className="flex justify-between text-lg font-semibold mb-6">
        <span>Total</span>
        <span className="text-purple-600">ETB {formattedTotal}</span>
      </div>
   

      <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
        PLACE ORDER
      </button>
    </div>

        </CardContent>
        </Card>
    </div>
  )
}

export default OrderItem