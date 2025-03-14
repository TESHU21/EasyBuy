import React,{useState,useEffect} from 'react'
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
  import { Input } from '@/components/ui/input'
  
const Shop = () => {
    const [filterdProducts,setFilterdProducts] = useState(products)
    const [searchValue,setSearchValue] = useState("")
   useEffect(()=>{
    const filtered= products.filter((product)=> product.name.toLowerCase().includes(searchValue.toLowerCase()))
    setFilterdProducts(filtered)

   },[searchValue])
  return (
    <div>
        <Breadcrumb className="flex justify-center"  aria-label="Breadcrumb">
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
<div className='flex flex-col items-center pt-10'>
<label htmlFor="search-products" className="sr-only">Search Products</label>

    <Input id="search-products" type='text' placeholder='Search Products' className='w-1/3 px-4 py-6' onChange={(e)=> setSearchValue(e.target.value)}/>  
    <section role='list' className='grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4 p-4'>
        {filterdProducts.map((product,index)=>(
            <ProductItem role="list-item" key={index} products={product} />
        ))}
       
    </section>

</div>

    </div>
  )
}

export default Shop