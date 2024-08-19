import React from 'react'

function Hero() {
  return(
    <div className='flex flex-col items-center min-h-screen justify-center gap-12'>
      <h1 className='text-8xl font-josefin-sans'>Title Line</h1>
      <h2 className='text-3'>Mission Statement</h2>
    </div>
  )
}

export default function Page() {
  return (
    <div>
      <Hero></Hero>
    </div>
  )
}
