import Image from 'next/image';
import React from 'react'

const CartModel = () => {
  const cartItems = true;
  return (
    <div className='absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex-col gap-6 z-20'>
      CartModel
      {
        !cartItems ? (
          <div> Cart is Empty</div>
        ):(
          <div className=''> 
            <Image
            src='https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            height={72}
            width={96}
            className=''/>
            <div className=''>

            </div>
          </div>
        )
      }
      
      </div>
  )
}

export default CartModel