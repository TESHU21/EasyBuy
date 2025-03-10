import React,{useState} from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from '@/components/ui/button'
  import ProductDetail from './ProductDetail'

  

const ProductItem = ({products}) => {
    const [open, setOpen] = useState(false)
  return (
    <div className='w-full'>
    <Card>
  <CardHeader>
    <CardTitle className="font-prata text-[14px] font-bold text-center">{products.name}</CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent>
    <img src={products.image} alt={products.name} className='w-full h-64 object-cover' />   
    <p className='font-inter p-4'>${products.price}</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button  onClick={()=>setOpen(true)} className='bg-gray-200 text-red-500 p-4 rounded-md'>Quick View</Button>
    <Button className='bg-violet-500 text-white p-4 rounded-md'>Add to Cart</Button>
  </CardFooter>
</Card>
<ProductDetail products={products}  open={open} setOpen={setOpen}/>
</div>

  )
}

export default ProductItem