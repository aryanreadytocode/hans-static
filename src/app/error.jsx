'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50 px-4">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-red-600">Something went wrong!</h2>
        <p className="mt-2 text-gray-700">{error.message || 'An unexpected error occurred.'}</p>
        <button
          onClick={() => reset()}
          className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
