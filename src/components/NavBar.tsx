import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

const NavBar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
        {/* Mobile Menu */}
        <div className='h-full flex items-center justify-between md:hidden'>
            <Link href="/">
                <div className='text-2xl tracking-wide'>LAMA</div></Link>
            <Menu/>
        </div>

        {/* Bigger Screens */}
        <div className='hidden md:flex justify-between items-center h-full gap-8'>
            {/* Left */}
            <div className='w-1/3'>
                <Link href="/">
                    <Image src="/logo.png" width={24} height={24} alt='' />
                    <div className='text-2xl tracking-wide'>LAMA</div>                
                </Link>
                
            </div>

            {/* Right */}
            <div className='w-2/3 flex items-center justify-between gap-8'>
                <SearchBar/>
                <NavIcons/>
            </div>
        </div>


    </div>
  )
}

export default NavBar