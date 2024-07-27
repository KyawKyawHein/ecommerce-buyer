import { IStoreProduct, useCartStore } from "@/store/cart.store";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const addQuantityCartProduct = (storeProduct:IStoreProduct[],id: number) => {
  const updateProduct = storeProduct.map((product) => {
    if (product.id == id) {
      return { ...product, quantity: product.quantity + 1 };
    }else{
      return {...product};
    }
  });
  return updateProduct
};
export const removeQuantityCartProduct = (storeProduct:IStoreProduct[],id: number) => {
  const updateProduct = storeProduct.map((product) => {
    if (product.id == id) {
      return { ...product, quantity: product.quantity - 1 };
    }else{
      return {...product}
    }
  });
  return updateProduct
};

export const removeProductFromCart = (storeProduct:IStoreProduct[],id:number)=>{
  const updateProduct = storeProduct.filter(product=>product.id != id);
  return updateProduct;
}