import Image from 'next/image';
import React from 'react'

const CartModel = () => {
  const cartItems = true;
  return (
    <div className='absolute w-max p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex-col gap-6 z-20'>
     
      {
        !cartItems ? (
          <div> Cart is Empty</div>
        ):(
          <>
          <h2 className='text-xl'>Shopping Cart</h2>
         
          <div className='flex flex-col gap-8'>
          {/* Item */}
          <div className='flex gap-4'> 
            <Image
            src='https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            height={72}
            width={96}
            className='object-cover rounded-md' />

            <div className='flex flex-col justify-between w-full'>
              {/* Top */}
                <div>
                {/* Title */}
                <div className=' flex items-center justify-between gap-8'>
                  <h3 className='font-semibold'>Product Name</h3>
                  <div className='p-1 bg-gray-50 rounded-sm'> $49</div>
                </div>
                  {/* Desc */}
                  <div className='text-sm text-gray-500'>
                    avilable
                  </div>

                  {/* Bottom */}
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-500'>Qty. 2</span>
                    <span className='text-blue-500'> Remove</span>

                  </div>
                </div>            

            </div>
          </div>
          {/* Bottom */}
          <div className=''>
            <div className='flex justify-between items-center font-semibold'>
              <span>Sub Total</span>
              <span>$49</span>
            </div>
            <p className='text-gray-500 text-sm mt-2 mb-4'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <div className='flex justify-between text-sm'>
              <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
              <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
            </div>
          </div>

          </div>
          </>
        )
      }
      
      </div>
  )
}

export default CartModel