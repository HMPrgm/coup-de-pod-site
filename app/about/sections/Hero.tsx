import React from 'react'

export default function Hero() {
  return (
    <div className="bg-cover bg-center max-h-[30rem]" style={{
        backgroundImage: `url('/UVA.jpg')`,
        height: "972px"
      }}>
        <div className='bg-dark bg-opacity-80 w-full h-full flex text-center text-light justify-center items-center pt-24  px-2'>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-title mb-8 font-black italic max-w-[20em] leading-snug tracking-wider"  >To Broadcast Significant, Unconventional Student Thought at UVA</h1>
        </div>

      </div>
  )
}
