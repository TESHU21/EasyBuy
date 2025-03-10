import React from 'react'
import Hero from '@/components/Hero'
import TopSold from '@/components/TopSold'

const Home = () => {
  return (
    <div className=' flex flex-col gap-4'>
      <Hero />
      <TopSold />
    </div>
  )
}

export default Home