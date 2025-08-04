import { categories } from "@/app/products/categories";

export default function ProductDescription({description}) {
console.log("Description: ", description);
  return (
    <div>
      <h1>Description</h1>
      {
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          {description}
        </p>
      }
    </div>
  );
}
