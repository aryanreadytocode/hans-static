'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="text-center animate-fade-in">
        <h1 className="text-[6rem] font-extrabold text-blue-600 animate-bounce">404</h1>
        <p className="text-xl text-gray-700">Oops! The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
