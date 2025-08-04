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

  const imagArr  = [slider1, slider2, slider3, slider4];
  return (
    <div className="grid grid-cols-2 gap-4 h-50" onClick={handleClick}>
      {imagArr &&
        imagArr.map((img, index) => (
          <Image
            className="cursor-pointer border hover:scale-105 transition"
            key={index}
            src={img}
            alt={img}
          />
        ))}
      {isModalOpen && (
        <ZoomImage
          images={productImages}
          initialIndex={selectedIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );

  function handleClick(e) {
    setSelectedIndex(index);
    setIsModalOpen(true);
  }
}
