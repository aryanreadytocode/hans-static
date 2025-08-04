'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function ZoomImageModel({ images = [], initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images.length) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <button
        className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white hover:text-black transition"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      <button
        className="absolute left-4 text-white p-2 rounded-full hover:bg-white hover:text-black transition"
        onClick={prevImage}
      >
        <ChevronLeft size={28} />
      </button>

      <div className="relative group w-[80vw] max-w-4xl h-[80vh] overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <button
        className="absolute right-4 text-white p-2 rounded-full hover:bg-white hover:text-black transition"
        onClick={nextImage}
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
