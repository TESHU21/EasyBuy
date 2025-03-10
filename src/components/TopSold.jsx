import React from 'react'
import { products } from '@/assets/hero/assets'
import ProductItem from '@/pages/products/components/ProductItem'

const TopSold = () => {
  return (
    <div>
        <h1 className='font-prata text-center py-6 font-semibold text-orange-400'>Top Rated Jewllery</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10'>
            {products.map((product)=>(
                <ProductItem key={product.id} products={product} />
            ))}
            </div>
    </div>
  )
}

export default TopSold