import { IProduct } from "@/types/product.types"
import { create } from "zustand"

export interface IStoreProduct extends IProduct{
    selectedSize : string;
    quantity : number;
    // selectedColor : string;
}

interface ICart {
    storeProduct : IStoreProduct[];
    addToCartStatus : boolean;
}

interface ICartStore extends ICart {
    setStoreProduct : (storeProduct:IStoreProduct[])=>void;
    setAddToCartStatus : (addToCartStatus:boolean)=>void;
}

export const useCartStore = create<ICartStore>((set)=>({
    storeProduct : [],
    addToCartStatus : false,
    setStoreProduct :(storeProduct:IStoreProduct[])=>set({storeProduct}),
    setAddToCartStatus : (addToCartStatus:boolean)=>set({addToCartStatus}),
}))