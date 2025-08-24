"use client"

import Image from "next/image";
import bleaching from "../../public/bleaching.png";
import textLabel from "../../labels.js";
import Link from "next/link";

export default function ProductTile({product}) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="w-full flex flex-col justify-between bg-white">
        <Image
          className="w-full h-35 sm:h-64 md:h-80 object-cover"
          src={bleaching}
          alt="Product"
        />
        <div className="flex flex-col items-center justify-center p-2 text-center">
          <h2 className="text-xs sm:text-sm, md:text-md lg:text-lg truncate">{product.name}</h2>
          <h4 className="text-xs sm:text-sm, md:text-md lg:text-lg">{`${textLabel.dashboard.rupeeSign} ${product.price}`}</h4>
        </div>
      </div>
    </Link>
  );
}
