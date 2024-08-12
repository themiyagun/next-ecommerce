"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const Menu = () => {

    const[open, setOpen] = useState(false)
  return (
    <div className=''>
        <Image src="/menu.png" alt='' height={28} width={28} className='cursor-pointer' onClick={()=>{setOpen((prev) => !prev)}}></Image>
        {
            open && (
                <div className='bg-black text-white flex flex-col items-center justify-center gap-8 left-0 top-20 absolute w-full h-[calc(100vh-80px)] text-xl z-10'>
                    <Link href="/">HomePage</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Logout</Link>
                    <Link href="/">Cart(1)</Link>
                </div>
            )
        }
    </div>
  )
} 

export default Menu