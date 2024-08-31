import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>  {/*  scrolbar hide kranna ba tailwind walin e nisa scrollbar-hide class eka global.css eke define karala call krnwa*/}   
        <div className=' flex gap-4 md:gap-8'>
            <Link href="/list?cat=test" className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='w-full relative bg-slate-100 h-96'>
                    <Image 
                        src='https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' 
                        alt=''
                        fill 
                        sizes='20vw'
                    ></Image>
                </div>
                <h1 className='mt-8 font-light text-clip tracking-wide'> Category Name</h1>
            
            </Link>
            <Link href="/list?cat=test" className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='w-full relative bg-slate-100 h-96'>
                    <Image 
                        src='https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' 
                        alt=''
                        fill 
                        sizes='20vw'
                    ></Image>
                </div>
                <h1 className='mt-8 font-light text-clip tracking-wide'> Category Name</h1>
            
            </Link>
            <Link href="/list?cat=test" className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='w-full relative bg-slate-100 h-96'>
                    <Image 
                        src='https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' 
                        alt=''
                        fill 
                        sizes='20vw'
                    ></Image>
                </div>
                <h1 className='mt-8 font-light text-clip tracking-wide'> Category Name</h1>
            
            </Link>
            <Link href="/list?cat=test" className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='w-full relative bg-slate-100 h-96'>
                    <Image 
                        src='https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' 
                        alt=''
                        fill 
                        sizes='20vw'
                    ></Image>
                </div>
                <h1 className='mt-8 font-light text-clip tracking-wide'> Category Name</h1>
            
            </Link>
            <Link href="/list?cat=test" className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='w-full relative bg-slate-100 h-96'>
                    <Image 
                        src='https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' 
                        alt=''
                        fill 
                        sizes='20vw'
                    ></Image>
                </div>
                <h1 className='mt-8 font-light text-clip tracking-wide'> Category Name</h1>
            
            </Link>
            <Link href="/list?cat=test" className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='w-full relative bg-slate-100 h-96'>
                    <Image 
                        src='https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' 
                        alt=''
                        fill 
                        sizes='20vw'
                    ></Image>
                </div>
                <h1 className='mt-8 font-light text-clip tracking-wide'> Category Name</h1>
            
            </Link>
            <Link href="/list?cat=test" className=' flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                <div className='w-full relative bg-slate-100 h-96'>
                    <Image 
                        src='https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' 
                        alt=''
                        fill 
                        sizes='20vw'
                    ></Image>
                </div>
                <h1 className='mt-8 font-light text-clip tracking-wide'> Category Name</h1>
            
            </Link>
           

        </div>

    </div>
  )
}

export default CategoryList