import Link from 'next/link'
import React from 'react'

function NavbarSocials() {
    return (
      <>
        <Link href="https://open.spotify.com/show/4ZiJcyjqtUC9G09zIqdcVY?si=bf92cd9b12a5419c" target='_blank' className="navbar-link font-icons text-4xl">
          {/* Spotify */}M
        </Link>
        <Link href="https://podcasts.apple.com/us/podcast/coup-depod/id1713096283"  target='_blank' className="navbar-link font-icons text-4xl">
          {/* Apple Podcasts */}h
        </Link>
        <Link href="https://www.youtube.com/@Bipodisan" target='_blank' className="navbar-link font-icons text-4xl">
          {/* YouTube */}y
        </Link>
        <Link href="https://www.instagram.com/coupdepod/" target='_blank' className="navbar-link font-icons text-4xl">
          {/* Instagram */}c
        </Link>
      </>
    )
  }

export default function Footer() {
  return (
    <footer>
        <div className='flex justify-evenly px-12 py-4 bg-black text-white text-center items-center'>
            <div className='text-lg font-medium'>&copy; Coup de'Pod 2024</div>
            {/* <div><NavbarSocials></NavbarSocials></div> */}
        </div>
    </footer>
  )
}
