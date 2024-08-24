import { IProduct } from "@/types/product.types"
import { create } from "zustand"

export interface IStoreProduct extends IProduct{
    selectedSize : string;
    quantity : number;
}
export interface IProductColors {
    productId : number;
    color : string;
}

interface ICart {
    storeProduct : IStoreProduct[];
    addToCartStatus : boolean;
    productColors : IProductColors[];
    region : string | null;
    city : string | null;
}

interface ICartStore extends ICart {
    setStoreProduct : (storeProduct:IStoreProduct[])=>void;
    setAddToCartStatus : (addToCartStatus:boolean)=>void;
    setProductColors : (productColors:IProductColors[])=>void;
    setRegion : (region:string|null)=>void;
    setCity : (city:string|null)=>void;
}

export const useCartStore = create<ICartStore>((set)=>({
    storeProduct : [],
    addToCartStatus : false,
    productColors : [],
    region : null,
    city : null,
    setProductColors : (productColors:IProductColors[])=>set({productColors}),
    setStoreProduct :(storeProduct:IStoreProduct[])=>set({storeProduct}),
    setAddToCartStatus : (addToCartStatus:boolean)=>set({addToCartStatus}),
    setRegion : (region:string|null)=>set({region}),
    setCity : (city:string|null)=>set({city})
}))