import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const OrderItem = ({item}) => {
    const total=item?.price*item?.quantity
  return (
    <div>
        <Card>
        <CardContent>
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg ">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Product</span>
          <span className="text-gray-600">Total</span>
        </div>
        <div className="flex justify-between">
          <span>Lorem ipsum fashion female coat X 3</span>
          <span>€99.90</span>
        </div>
      </div>
      <div className="flex justify-between border-b pb-4 mb-4">
        <span className="text-gray-600">Shipping</span>
        <span className="text-gray-600">Free shipping</span>
      </div>
      <div className="flex justify-between text-lg font-semibold mb-6">
        <span>Total</span>
        <span className="text-purple-600">ETB {total}</span>
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