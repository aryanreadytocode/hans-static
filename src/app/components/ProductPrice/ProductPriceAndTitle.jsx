import discount from "../../utils/Utils";
import textLabel from "../../labels.js";
import ProductImage from "../ProductImage/ProductImage";
import { imageData } from "@/app/products/Data";
export default function ProductPriceAndTitle(props) {
  console.log("Image Data: ", imageData);
  const { name, price, volume, mrp } = props.productData;

  return (
      <div className="p-5 bg-white flex w-full h-screen">
      <div className="flex">
        <div className="flex-2/5">
          <ProductImage imagArr = {imageData}/>
        </div>

        <div className="flex-3/5 ms-5">
          <h1 className="text-sm md:text-lg lg:text-3xl font-bold">{name}</h1>
            <div>
                <div className="text-sm md:text-md lg:text-lg text-green-600 mt-2">Special Offer</div>
                <div className="flex gap-4 items-centre">
            <h1 className="text-2xl color-red">{discount(mrp, price)}%</h1>
            <div className="text-xl font-semi-bold">
              {textLabel.dashboard.rupeeSign}
              {price}
            </div>
            <div className="text-xl font-semi-bold mb-4 line-through">
              {textLabel.dashboard.rupeeSign}
              {mrp}
            </div>
            <h1>{volume}</h1>
          </div>
            </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
