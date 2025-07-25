"use client"

import Image from "next/image";
import bleaching from "../../public/bleaching.png";
import textLabel from "../../labels.js";
import Link from "next/link";
import {useProductDetails } from "@/app/context/ProductDetailsContext";

export default function ProductTile({product}) {
  const { setProductDetails } = useProductDetails();
  return (
    <Link href={`/products/${product.id}`}>
      <div className="w-64 flex flex-col justify-between bg-white">
        <Image
          className="w-64 h-80 object-cover"
          src={bleaching}
          alt="Product"
        />
        <div className="flex flex-col items-center justify-center p-2">
          <h2 className="text-md">{product.name}</h2>
          <h4 className="text-md">{`${textLabel.dashboard.rupeeSign} ${product.price}`}</h4>
        </div>
      </div>
    </Link>
  );
}
