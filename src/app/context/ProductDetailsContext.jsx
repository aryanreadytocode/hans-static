'use client'

import { createContext, useContext, useState } from "react"

const ProductDetailsContext = createContext(null)

export function ProductProvider({ children}) {
  const [productDetails, setProductDetails] = useState(null)

  return (
    <ProductDetailsContext.Provider value={{ productDetails, setProductDetails }}>
      {children}
    </ProductDetailsContext.Provider>
  )
}

export function useProductDetails() {
  return useContext(ProductDetailsContext);
}