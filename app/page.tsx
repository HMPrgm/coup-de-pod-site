import React from 'react'
import Image from 'next/image'
import Hero from './components/hero'
import Link from 'next/link'



export default function Page() {
  return (
    <div>
      <div className='flex flex-col items-center min-h-screen justify-center gap-12 text-center'>
        <h1 className='text-5xl font-title'>New Episodes Every Other Week!</h1>
        <h2 className='text-3xl'>A student-run podcast at UVA! We talk about anything and (almost) everything.</h2>
        <Link className=' border-2 px-6 py-3 bg-black rounded-xl text-white text-xl font-bold border-black hover:bg-white hover:text-black transition-all' target='_blank' href={'https://open.spotify.com/show/4ZiJcyjqtUC9G09zIqdcVY?si=618aad96fa944d13'}>Listen Now!
        </Link>
      </div>
    </div>
  )
}
