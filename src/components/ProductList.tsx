import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href='#' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
              <Image
                src='https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500'
               />
              <Image
                src='https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md'
               />

            </div>

            <div className='flex justify-between'>
              <span className='font-medium'>Product Name</span>
              <span className='font-semibold'>$49</span>

            </div>
            <div className='text-sm text-gray-500'>
              Product Description
            </div>
            <button className='w-max rounded-2xl ring-1 ring-pink-300 text-pink-400 py-2 px-4 text-xs hover:bg-pink-300 hover:text-white'> Add to Cart </button>
        
        </Link>
        <Link href='#' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
              <Image
                src='https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500'
               />
              <Image
                src='https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md'
               />

            </div>

            <div className='flex justify-between'>
              <span className='font-medium'>Product Name</span>
              <span className='font-semibold'>$49</span>

            </div>
            <div className='text-sm text-gray-500'>
              Product Description
            </div>
            <button className='w-max rounded-2xl ring-1 ring-pink-300 text-pink-400 py-2 px-4 text-xs hover:bg-pink-300 hover:text-white'> Add to Cart </button>
        
        </Link>
        <Link href='#' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
              <Image
                src='https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500'
               />
              <Image
                src='https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md'
               />

            </div>

            <div className='flex justify-between'>
              <span className='font-medium'>Product Name</span>
              <span className='font-semibold'>$49</span>

            </div>
            <div className='text-sm text-gray-500'>
              Product Description
            </div>
            <button className='w-max rounded-2xl ring-1 ring-pink-300 text-pink-400 py-2 px-4 text-xs hover:bg-pink-300 hover:text-white'> Add to Cart </button>
        
        </Link>
        <Link href='#' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
              <Image
                src='https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500'
               />
              <Image
                src='https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
                alt=''
                fill
                sizes='25vw'
                className='absolute object-cover rounded-md'
               />

            </div>

            <div className='flex justify-between'>
              <span className='font-medium'>Product Name</span>
              <span className='font-semibold'>$49</span>

            </div>
            <div className='text-sm text-gray-500'>
              Product Description
            </div>
            <button className='w-max rounded-2xl ring-1 ring-pink-300 text-pink-400 py-2 px-4 text-xs hover:bg-pink-300 hover:text-white'> Add to Cart </button>
        
        </Link>

    </div>
  )
}

export default ProductList