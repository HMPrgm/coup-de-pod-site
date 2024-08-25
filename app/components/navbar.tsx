'use client'
import React, { useState } from 'react'
import Link from 'next/link';

function NavbarLink() {
  return (
    <>
      <Link href="/podcast" className="navbar-link">
        Podcast
      </Link>
      <Link href="/about" className="navbar-link">
        About Us
      </Link>
    </>
  )
}
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

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b-2 fixed w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex justify-between py-4 items-center">

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="grid sm:grid-cols-3 items-center justify-items-center text-center w-screen">
            <div className="flex-shrink-0 hidden sm:block">
              <NavbarSocials></NavbarSocials>
            </div>
            <div className="flex-shrink-0">
              <Link href="/" className="text-black font-bold text-3xl lg:text-5xl font-title">
                Coup de'Pod
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavbarLink></NavbarLink>

              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">

          <NavbarLink></NavbarLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;