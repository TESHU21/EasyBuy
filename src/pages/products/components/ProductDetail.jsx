import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiPlusSmall } from "react-icons/hi2";
import { FiMinus } from "react-icons/fi";
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cartContext';
import { toast } from 'sonner';

const ProductDetail = ({ products, open, setOpen }) => {
  const { addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(products.quantity || 1);

  const handleQuantityChange = (type) => {
    const newQuantity = type === 'increment'
      ? quantity + 1
      : Math.max(1, quantity - 1);

    setQuantity(newQuantity);
    addToCart({ ...products, quantity: newQuantity });
  };

  const handleAddToCart = () => {
    addToCart({ ...products, quantity });
    toast.success("Items Added to Cart", { duration: 1500 });
  };

  const subTotal = (products.price * quantity || 0).toLocaleString();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button></button>
      </DialogTrigger>
      <DialogContent className="min-w-[400px] md:min-w-[800px]">
        <DialogHeader>
          <DialogTitle className="font-prata text-center">Product Detail</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
          <img src={products.image} alt={`Image of ${products.name}`} className="w-full h-64 object-cover" />
          <div className="flex flex-col">
            <h1 className="font-prata text-[24px] font-bold pb-2">{products.name}</h1>
            <p><span className="font-semibold font-inter">Description:</span><br />{products.description}</p>
            <p className="font-inter pt-2"><span className="font-semibold">Price:</span> ETB {products.price}</p>
            <div className="flex gap-4 items-center pt-2">
              <span className="font-semibold">Quantity:</span>
              <button onClick={() => handleQuantityChange('decrement')} aria-label={`Decrement the quantity of ${products.name}`}><FiMinus size={24} /></button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantityChange('increment')} aria-label={`Increment the quantity of ${products.name}`}><HiPlusSmall size={24} /></button>
            </div>
            <div className="flex justify-between items-center pt-2">
              <h1><span className="font-semibold">SubTotal: ETB</span> {subTotal}</h1>
              <button onClick={handleAddToCart} className="bg-violet-500 text-white p-2 rounded-md" aria-label={`Add Image ${products.name} to cart`}>Add to Cart</button>
            </div>
            <div className="flex gap-4 pt-20">
              <Button onClick={() => setOpen(false)} className="bg-gray-200 text-red-500 py-6 px-8 rounded-md" aria-lable={`Close Details of ${products.name}`}>Close</Button>
              <Button className="bg-orange-300 text-white p-6 rounded-md" aria-label="Proceed to Checkout">Check Out</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
