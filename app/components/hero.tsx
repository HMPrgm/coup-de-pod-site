import React from 'react'

export default function Hero({title, text}:{title:string, text:string}) {
    return(
      <div className='flex flex-col items-center min-h-screen justify-center gap-12 text-center'>
        <h1 className='text-8xl font-title'>{title}</h1>
        <h2 className='text-3xl'>{text}</h2>
      </div>
    )
  }