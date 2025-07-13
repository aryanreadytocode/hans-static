'use client';

import products from "@/app/data/products";

export default function ProductDetails({params}) {
    console.log(params); 
  return (
    <div style={{ margin: "20px" }}>
      <h1>Product Details:</h1>
      <p>
        {
            products.filter(p=> p.id == id).map(p => p.name)
        }
      </p>
    </div>
  );
}
