'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo1.png'


export default function Header() {
  return (
    <header className="bg-sky-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-tight hover:text-gray-200">
        <Image className='ml-10' src={logo}  alt='Hans logo' width={100} height={100}/>
        </Link>

        {/* Nav links */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/mission" className="hover:text-gray-200">Mission</Link>
          <Link href="/products" className="hover:text-gray-200">Products</Link>
          <Link href="/products" className="hover:text-gray-200">Home Cleaning Tips</Link>
          <Link href="/about" className="hover:text-gray-200">About</Link>
          <Link href="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
