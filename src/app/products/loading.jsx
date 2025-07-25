// app/loading.jsx (for Next.js 13+ using the App Router)
import { Loader2 } from 'lucide-react'; // Optional: requires lucide-react package
import React from 'react';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <p className="text-gray-700 text-sm">Loading...</p>
      </div>
    </div>
  );
}
