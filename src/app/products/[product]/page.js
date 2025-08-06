import ProductImage from "@/app/components/ProductImage/ProductImage";
import ProductPriceAndTitle from "@/app/components/ProductPrice/ProductPriceAndTitle";
import { ProductData, imageData, categories } from "../Data";
import ProductFeatures from "@/app/components/Features/ProductFeatures";
import ProductDescription from "@/app/components/Description/ProductDescription";
import ProductApply from "@/app/components/HowToUse/ProductApply";

export default async function ProductDetails(props) {
  const { params } = await props;
  const productId = parseInt(params.product);
  console.log("Product ID: ", productId);
  const product = ProductData.find((item) => item.id === productId);
  console.log("Product: ", product);
  return (
    <div className="p-5 bg-white h-full flex flex-col">
      <div className="flex">
        <div className="w-2/5">
          <ProductImage imagArr={imageData} />
        </div>
        <div className="w-3/5 ps-10">
          <ProductPriceAndTitle productData={product} />
          {
            categories && categories.filter((item) => item.catId === product.catId).map((category) => (
              <ProductFeatures features={category.features} key={category.catId} />
            ))
          }
        </div>
      </div>

      {
        categories && categories.filter((item) => item.catId === product.catId).map((category) => (
          <div className="mt-5">
            <ProductDescription description={category.description} key={category.catId} />
            <ProductApply howToUse={category.howToUse} key={category.catId} />
          </div>

        ))
      }
    </div>
  );
}
