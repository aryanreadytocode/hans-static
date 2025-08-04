import ProductImage from "@/app/components/ProductImage/ProductImage";
import ProductPriceAndTitle from "@/app/components/ProductPrice/ProductPriceAndTitle";
import { ProductData, imageData } from "../Data";

export default async function ProductDetails(props) {
  const {params} = await props;
  const productId = parseInt(params.product);
  console.log("Product ID: ", productId);
  const product = ProductData.find((item) => item.id === productId);
  console.log("Product: ", product);
  return (
    <div>
      <div className="flex flex-wrap">
        {/* <ProductImage className="basics-1/2" imagArr={imageData} /> */}
        <ProductPriceAndTitle className="basics-1/2" productData={product} />
      </div>
    </div>
  );
}
