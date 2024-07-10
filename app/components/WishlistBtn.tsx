"use client";
import { IProduct } from "@/types/product.types";
import { Heart, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import {useWishlistStore} from "@/store/wishlist.store";

const WishlistBtn = ({ product }: { product: IProduct }) => {
  const {wishlist,setWishlist} = useWishlistStore();
  const {push} = useRouter();
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);
  const goToWishlistPage = (id)=>{
    toast.dismiss(id);
    push('/wishlist');
  }
  const addWishlist = (product: IProduct) => {
    let updateWishlist = [...wishlist];
    if (!updateWishlist.find((item: IProduct) => item.id === product.id)) {
      updateWishlist.push(product);
      const id =toast(undefined, {
        className : "p-0 mx-0 w-full",
        duration:5000,
        action: (
          <div className="w-full">
            <div className="w-full p-1 py-2 mb-1 rounded flex justify-between items-center">
              <div className="text-md font-extrabold text-orange-500">This item has been added to your wishlist</div>
              <X size={15} onClick={()=>toast.dismiss(id)} className="text-orange-500 cursor-pointer" />
            </div>
            <div className="flex gap-3 px-2 justify-between items-center w-full">
              <div className="flex gap-5 items-center">
                <div className="relative w-16 h-16">
                  <Image src={product.image} fill alt="image" />
                </div>
                <p className="text-lg">{product.name}</p>
              </div>
              <button onClick={()=>goToWishlistPage(id)} className="bg-gray-200 p-2 rounded">
                Go to wishlist
              </button>
            </div>
          </div>
        ),
      });
    } else {
      updateWishlist = wishlist.filter(
        (item: IProduct) => item.id != product.id
      );
    }
    localStorage.setItem("wishlist", JSON.stringify(updateWishlist));
    setWishlist(updateWishlist);
  };
  const isInWishList = wishlist.some((item) => item.id == product.id);

  return (
    <div>
      <button
        onClick={() => addWishlist(product)}
        className={`p-2 flex justify-center items-center rounded-full ${
          isInWishList ? "bg-black" : "bg-gray-200"
        }`}
      >
        <Heart fill={`${isInWishList ? "red" : "black"}`} size={20} />
      </button>
    </div>
  );
};

export default WishlistBtn;
