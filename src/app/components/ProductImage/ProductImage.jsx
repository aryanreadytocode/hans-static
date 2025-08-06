"use client";
import { useState } from "react";
import ZoomImage from "../ZoomImageModel/ZoomImageModel";
import Image from "next/image";
import slider1 from "../../public/bathroomcleaning.png";
import slider2 from "../../public/slider2.png";
import slider3 from "../../public/slider3.png";
import slider4 from "../../public/slider4.png";

export default function ProductImage(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const imagArr = [slider1, slider2, slider3, slider4];
  return (
    <div className="grid grid-cols-2 gap-2">
      {
        imagArr && imagArr.map((img, index) => (
          <Image
            className="h-28 sm:h-28 md:h-30 lg:h-40 xl:h-50 w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg h-auto cursor-pointer border hover:scale-105 transition"
            key={index}
            src={img}
            alt={img}
            onClick={() => handleClick(index)}
          />
        ))
      }
      {
        isModalOpen && (
          <ZoomImage
            images={imagArr}
            initialIndex={selectedIndex}
            onClose={() => setIsModalOpen(false)}
          />
        )}
    </div>
  );

  function handleClick(index) {
    setSelectedIndex(index);
    setIsModalOpen(true);
  }
}
