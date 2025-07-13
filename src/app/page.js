import products from "./data/products";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard - All Product</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link href={`/product/${p.id}`}>{p.name}- ₹{p.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}