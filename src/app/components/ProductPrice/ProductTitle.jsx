
import { imageData } from "@/app/products/Data";
import ProductPrice from "./ProductPrice";
export default function ProductTitle(props) {
  console.log("Image Data: ", imageData);
  const { name } = props.productData;

  return (
    <div className="bg-white w-full">
      <h1 className="text-sm md:text-md lg:text-lg font-semibold">{name}</h1>
    </div>
  );
}
