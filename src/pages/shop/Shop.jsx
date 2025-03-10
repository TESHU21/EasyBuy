import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import ProductItem from '../products/components/ProductItem'
  import { products } from "../../assets/hero/assets"
  
const Shop = () => {
  return (
    <div>
        <Breadcrumb className="flex justify-center">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Shop</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
<div>
    <div className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4 p-4'>
        {products.map((product,index)=>(
            <ProductItem key={index} products={product} />
        ))}
       
    </div>

</div>

    </div>
  )
}

export default Shop