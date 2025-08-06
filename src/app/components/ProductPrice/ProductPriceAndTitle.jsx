import discount from "../../utils/Utils";
import textLabel from "../../labels.js";
import ProductImage from "../ProductImage/ProductImage";
import { imageData } from "@/app/products/Data";
export default function ProductPriceAndTitle(props) {
  console.log("Image Data: ", imageData);
  const { name, price, volume, mrp } = props.productData;

  return (
    <div className="bg-white w-full">
      <h1 className="text-sm md:text-lg lg:text-2xl font-semibold">{name}</h1>
      <div className="mt-2">
        <div className="text-sm md:text-md lg:text-lg text-green-600">Special Offer</div>
        <div className="flex gap-4 items-center">
          <div className="text-sm md:text-lg lg:text-4xl">
            {textLabel.dashboard.rupeeSign}
            {price}
          </div>
          <div className="text-sm md:text-md lg:text-lg line-through">
            {textLabel.dashboard.rupeeSign}
            {mrp}
          </div>
          <h1 className="text-sm md:text-md lg:text-lg text-red-500">{discount(mrp, price)}% off</h1>

          <div className="text-sm md:text-md lg:text-lg">{volume}</div>
        </div>
      </div>
    </div>
  );
}
