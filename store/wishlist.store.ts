import {create} from "zustand";
import {IProduct} from "@/types/product.types";

interface IWishlist {
    wishlist : IProduct[];
}
interface IWishlistStore extends IWishlist {
    setWishlist : (wishlist:IProduct[])=>void;
}

export const useWishlistStore = create<IWishlistStore>((set)=>({
    wishlist : [],
    setWishlist : (wishlist:IProduct[])=>set({wishlist})
}))