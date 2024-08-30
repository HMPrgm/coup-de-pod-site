import React from 'react'
import Image from 'next/image'
export default function Explainer({picture, picAlt, title, paragraph, swap}:{picture:string, picAlt:string, title:string, paragraph:string, swap:boolean}){
    return (
      <div className='grid grid-cols-2 gap-4 m-10 justify-items-center '>
        <div className={swap?'order-last':''}>
          <Image className='rounded-xl border-black border-2'
            src={picture}
            alt={picAlt}
            width={600}
            height={600}
          />
        </div>
        <div>
          <h2 className='text-5xl font-bold pb-4 font-title text-black'>{title}</h2>
          <p className='text-xl text-dark-2'>{paragraph}</p>
        </div>
      </div>
    )
  }
