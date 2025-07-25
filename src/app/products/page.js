import labels from "./labels.js";
import ProductTile from "../components/ProductViewTile/ProductTile.jsx";
import Heading from "../components/Heading.jsx";
import HyperLink from "../components/HyperLink.jsx";
import { productData } from "./productData.js";
import { categories } from "./categories.js";
import React from 'react';

export default function products() {
  return categories.map((data) => (
  <React.Fragment key={data.catId}>
    <div className="bg-white shadow-lg space-y-2 p-2 my-2 mx-10">
      <div className="flex space-x-2 items-end">
        <Heading data={`${data.catName} | ${data.offerText}`} />
        <HyperLink data={labels.seeALL} link="/" />
      </div>
      <div className="flex overflow-x-auto space-x-3">
        {productData
          .filter((product) => product.catId === data.catId)
          .map((product) => (
            <ProductTile key={product.id} product={product}/>
          ))}
      </div>
    </div>
  </React.Fragment>
));

}
