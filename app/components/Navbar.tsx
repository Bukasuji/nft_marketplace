"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';



export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex justify-between px-10 py-6'>
      <div className='py-4 cursor-pointer'>
        <Link href="/">
          <Image
            src="/images/logo.png"
            className=''
            width={150}
            height={60}
            alt="logo"
          />
        </Link>
      </div>
      
      {/* Navigation Links for Tablets and Desktops */}
      <div className='hidden md:flex text-[#7780A1] text-base font-semibold tracking-widest py-4'>
          <ul className="space-x-10 flex">
            <li className=''>
              <Link href="/available_nfts">Available Nfts</Link>
            </li>
            <li className=''>
              <Link href="/">Roadmap</Link>
            </li>
            <li className=''>
              <Link href="/">Discover</Link>
            </li>
            <li className=''>
              <Link href="/">Community</Link>
            </li>
          </ul>
      </div>

      <div className='hidden md:inline space-x-3 flex-end'>
        <button className='bg-transparent hover:bg-blue-500 text-[#7780A1] text-base font-semibold hover:text-white py-4 px-6 border border-[#262840] hover:border-transparent rounded-xl'>
                Contact
        </button>

        <button className='bg-gradient-to-br from-indigo-900 to-indigo-700 text-base font-semibold py-4 px-6 border border-[#262840] rounded-xl text-white shadow-[inset_4px_4px_4px_#FFFFFF1A]'>
                My account
        </button>
      </div>

      {/* Navigation links for  Mobile Screens */}
      <div className='lg:hidden z-10'>
        <div onClick={toggleMenu}>
          <Image
            src="/images/icon-hamburger.svg"
            className='md:hidden py-4'
            width={24}
            height={21}
            alt="hamburger icon"
          />
        </div>
        {isMenuOpen && (
          <div className="fixed top-0 right-0 h-full w-[70%] bg-white shadow-md overflow-y-auto bg-white bg-opacity-25 backdrop-blur-2xl text-white font-normal text-base">
            <div className='text-right text-xl p-6 cursor-pointer' onClick={toggleMenu}>
              X
            </div>
            <ul className="pl-8 pt-10">
              <li className='mb-5'>
                <Link href="/available_nfts">Available Nfts</Link>
              </li>
              <li className='mb-5'>
                <Link href="/">Roadmap</Link>
              </li>
              <li className='mb-5'>
                <Link href="/">Discover</Link>
              </li>
              <li>
                <Link href="/">Community</Link>
              </li>
            </ul>

            <div className='px-8 mt-8'>
                <button className='bg-transparent text-base font-normal py-4 w-full border border-white rounded-xl'>
                        Contact
                </button>

                <button className='bg-gradient-to-br from-indigo-900 to-indigo-700 text-base font-normal py-4 w-full mt-6 rounded-xl text-white shadow-[inset_4px_4px_4px_#FFFFFF1A]'>
                        My account
                </button>
            </div>
          </div>

          
        )}
      </div>
    </nav>
  );
}
