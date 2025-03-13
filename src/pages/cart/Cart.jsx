import React, { useState } from 'react';
import { useCart } from '@/context/cartContext';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CartItem from './CartItem';
import { Checkbox } from '@/components/ui/checkbox';

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { addToCart, removeFromCart, clearCart, getCartTotal, cartItems = [] } = useCart(); // Ensure cartItems is always an array

  console.log("Cart Items", cartItems);

  const handleSelectItem = (itemId) => {
    setSelectedItems((prev) => 
      prev.includes(itemId) 
        ? prev.filter((id) => id !== itemId)  // Remove if selected
        : [...prev, itemId]  // Add if not selected
    );
  };
  // Calculate the total price
  const totalPrice=cartItems.filter((item)=>selectedItems.includes(item.id)).reduce((acc,item)=>acc+item.price*item.quantity,0)


  const handleSelectAll = (checked) => {
    setSelectedItems(checked ? cartItems.map((item) => item.id) : []);
  };

  return (
    <div className="flex flex-col pb-4">
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
      <h1 className=' text-center font-prata font-semibold py-10'>Your Cart</h1>

      <div className='flex flex-col  justify-center'>
        {cartItems.length === 0 ? (
          <div>Cart is Empty</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 gap-4 md:gap-10">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} isSelected={selectedItems.includes(item.id)} onSelect={handleSelectItem} />
            ))}
            <Card>
              <CardContent className="flex justify-around items-center py-10">
             
              <div className="flex items-center gap-2  ">
                <Checkbox 
                  checked={selectedItems.length === cartItems.length}
                  onCheckedChange={handleSelectAll} 
                  className=" border-2 border-gray-600"
                />
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Select All
                </label>
              </div>
              <div className=' flex flex-col gap-7'>
              <p className=" font-semibold  min-w-[200px] text-gray-600 font-inter">Total Price:  {totalPrice.toLocaleString()}</p>

              <Button className=" bg-amber-500 ">Checkout</Button>
              </div>
            
            </CardContent>
            </Card>

           
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Cart;
