"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import CartModel from './CartModel';

const NavIcons = () => {

  const router = useRouter()

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedIn = false;

  const handleProfile = () =>{
    if(!isLoggedIn){
      router.push('/login')
    }
    setIsProfileOpen((prev)=>!prev)

  }

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>

      <Image src='/profile.png' alt='' height={22} width={22} className='cursor-pointer' onClick={handleProfile}></Image>
      {
        isProfileOpen &&(
          <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-20'>
            <Link href='/'>Profile</Link>
            <div className='mt-2 cursor-pointer'>LogOut</div>
          </div>
        )
      }

      <Image src='/notification.png' alt='' height={22} width={22} className='cursor-pointer '></Image>
      <div className='cursor-pointer relative'>
        <Image src='/cart.png' alt='' height={22} width={22} className='cursor-pointer' onClick={() => setIsCartOpen((prev)=>!prev)}></Image>
        <div className='absolute -top-4 -right-4 w-6 h-6 bg-[#f35c7a] rounded-full text-white flex justify-center items-center'> 2
 
        </div>  
      </div>
      {isCartOpen && <CartModel/>}
    </div>
  )
}

export default NavIcons