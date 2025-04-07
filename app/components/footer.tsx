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
        <div className='flex justify-evenly px-12 py-4 bg-black text-white text-center items-center flex-col gap-4'>
            <div className=' font-medium'>&copy; Coup de&apos;Pod 2025</div>
            <p className='text-slate-300 text-xs'>Although this organization has members who are University of Virginia students and may have University employees associated or engaged in its activities and affairs, the organization is not a part of or an agency of the University. It is a separate and independent organization, which is responsible for and manages its own activities and affairs. The University does not direct, supervise or control the organization and is not responsible for the organization’s contracts, acts or omissions.</p>
            {/* <div><NavbarSocials></NavbarSocials></div> */}
        </div>
    </footer>
  )
}
