'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo1.png'


export default function Header() {
  return (
    <header className="bg-sky-600 text-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-tight hover:text-gray-200">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20">
            <Image
              src={logo}
              alt="Hans logo"
              fill
              className="object-contain ml-5 sm:ml-5 md:ml-8 lg:ml-10"
            />
          </div>
        </Link>

        {/* Nav links */}
        <nav className="space-x-2 md:space-x-6 md:flex mr-5 sm:mr-5 md:mr-8 lg:mr-10 text-sm md:text-base">
          <Link href="/" className="hover:text-gray-200 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">Home</Link>
          <Link href="/products" className="hover:text-gray-200 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">Products</Link>
          <Link href="/about" className="hover:text-gray-200 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">About</Link>
          <Link href="/contact" className="hover:text-gray-200 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
