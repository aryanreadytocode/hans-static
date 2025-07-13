'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-brandGreen text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-tight hover:text-gray-200">
          MyWebsite
        </Link>

        {/* Nav links */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/about" className="hover:text-gray-200">About</Link>
          <Link href="/products" className="hover:text-gray-200">Products</Link>
          <Link href="/contactUs" className="hover:text-gray-200">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
