import labels from "./labels.js";
import ProductTile from "../components/ProductViewTile/ProductTile.jsx";
import Heading from "../components/Heading.jsx";
import HyperLink from "../components/HyperLink.jsx";
import React from 'react';
import { ProductData, categories } from "./Data.js";

export default function products() {
  return (
    <div>
      {categories.map((data) => (
        <React.Fragment key={data.catId}>
          <div className="bg-white shadow-lg space-y-2 p-4 mb-2">
            <div className="flex space-x-2 items-end">
              <Heading data={`${data.catName} | ${data.offerText}`} />
              <HyperLink data={labels.seeALL} link="/" />
            </div>
            <div
              className="flex overflow-x-auto space-x-3"
              style={{ scrollbarWidth: "thin", paddingBottom: "8px", scrollbarColor: "#ffffffff #ffffffff" }}
            >
              {ProductData
                .filter((product) => product.catId === data.catId)
                .map((product) => (
                  <div
                    key={product.id}
                    style={{
                      minWidth: "35px",
                      maxWidth: "220px",
                      flex: "0 0 auto",
                    }}
                  >
                    <ProductTile product={product} />
                  </div>
                ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );

}
