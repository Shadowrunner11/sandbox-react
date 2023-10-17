import { PropsWithChildren, createContext, useRef } from "react"

export const productDetail = createContext<{productId?: number | string}>({})

export const ProductDetail  = ({ children }: PropsWithChildren)=>{
  const productDetailRef = useRef<{productId?: number | string}>({})

  return <productDetail.Provider value={productDetailRef.current}>
     {children}
  </productDetail.Provider>
}


