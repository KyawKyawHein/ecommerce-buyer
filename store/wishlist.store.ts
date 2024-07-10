import {create} from "zustand";
import {IProduct} from "@/types/product.types";

interface IWishlistStore {
    wishlist : IProduct[];
}
interface IWishlist extends IWishlistStore {
    setWishlist : (wishlist:IProduct[])=>void;
}

export const useWishlistStore = create<IWishlist>((set)=>({
    wishlist : [],
    setWishlist : (wishlist:IProduct[])=>set({wishlist})
}))