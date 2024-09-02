import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React from 'react'

const ListPage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 2xl:px-64 relative'>
      {/* Campaign */}
      <div className='hidden bg-pink-50 p-4 sm:flex justify-between h-64'>
        <div className='w-2/3 flex flex-col gap-8 justify-center items-center'>
          <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Grab up 50% off on
            <br /> Selected Products</h1>
          <button className='rounded-3xl bg-pink-300 text-white w-max py-3 px-5 text-sm'>Buy Now</button>

        </div>
        <div className='w-1/3 relative' >
          <Image src="/woman.png" alt='' fill className='object-contain'></Image>

        </div>
      </div>
      {/* Filter */}
      <Filter/>
      {/* Products */}
      <h1>Shoes For You</h1>
      <ProductList />
    </div>
  )
}

export default ListPage