"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ProductImages = () => {

    const images = [
        {
            id:1,
            url:"https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },
        {
            id:2,
            url:"https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },
        {
            id:3,
            url:"https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },
        {
            id:4,
            url:"https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        }
    ]


    const [index, setIndex] = useState(0);
  return (
    <div className=''>
        <div className='h-[500px] relative'>
            <Image
                src={images[index].url}
                alt=''
                fill
                sizes='50vw'
                className='object-cover rounded-md'
            />

        </div>

        <div className='flex justify-between gap-4'>
            {
                images.map((img,i)=>(

                    <div
                        key={img.id}
                        className='w-1/4 h-32 relative gap-4 mt-8'
                        onClick={()=>setIndex(i)}
                    >
                            
                        
                        <Image
                            src={img.url}
                            alt=''
                            fill
                            sizes='30vw'
                            className='object-cover rounded-md cursor-pointer'
                        />

                        
                    
                </div>

                ))
            }
           
        </div>
        
    </div>
  )
}

export default ProductImages