import discount from "../../utils/Utils";
import textLabel from "../../labels.js";

export default function ProductPrice(props) {
    const { price, volume, mrp } = props.productData;
    return (
        <div>
        <div className="text-xs md:text-md lg:text-lg text-green-600">Special Offer</div>
        <div className="flex gap-4 items-center">
          <div className="text-sm md:text-lg lg:text-4xl">
            {textLabel.dashboard.rupeeSign}
            {price}
          </div>
          <div className="text-xs md:text-md lg:text-lg text-green-600">
            {textLabel.dashboard.rupeeSign}
            {mrp}
          </div>
          <h1 className="text-sm md:text-md lg:text-lg text-red-500">{discount(mrp, price)}% off</h1>

          <div className="text-sm md:text-md lg:text-lg">{volume}</div>
        </div>
      </div>
    );
}