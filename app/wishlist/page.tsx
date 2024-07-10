"use client";
import { IProduct } from "@/types/product.types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import WishlistBtn from "../components/WishlistBtn";
import QuickViewDialog from "../components/QuickViewDialog";
import { useWishlistStore } from "../../store/wishlist.store";

const Wishlist = () => {
    const {wishlist,setWishlist } = useWishlistStore()
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(items);
  }, []);
  return (
    <div className="w-[1200px] m-auto">
      <h1 className="text-3xl font-extrabold text-center tracking-wider mt-16">
        Page Wishlist
      </h1>
      <div className="grid grid-cols-3 gap-8 mt-8">
        {wishlist.map((product, index) => (
          <div key={index} className="md:basis-1/3 lg:basis-1/4 relative group">
            <div className="w-full h-[250px] relative overflow-hidden ">
              <Image
                src={product.image}
                fill
                // width={350}
                // height={150}
                className="absolute rounded z-0"
                alt=""
              />
              <div className="translate-x-20 group-hover:translate-x-0 absolute right-2 top-3 transition-all duration-500 flex flex-col gap-3">
                <WishlistBtn product={product} />
                <QuickViewDialog slug={product.slug} />
              </div>
            </div>
            <div className="p-2">
              <h4 className="font-semibold">
                {product.name.length > 30
                  ? product.name.slice(0, 30) + "..."
                  : product.name}
              </h4>
              <p className="mt-3 font-semibold">${product.price}</p>
              <div className="overflow-hidden mt-2">
                <p className="text-gray-500 text-xs mt-3 font-semibold inset-0 group-hover:-translate-y-6 transition-all duration-500">
                  Available in {product.products[0].availableColor.length}{" "}
                  {product.products[0].availableColor.length > 1
                    ? "colors"
                    : "color"}
                </p>
                <div className="flex gap-3 inset-0 translate-y-16 group-hover:-translate-y-6 transition-all duration-500">
                  {product.products[0].availableColor.map((color) => (
                    <div
                      className={`p-3 rounded-full`}
                      style={{ background: color.color }}
                      key={color.color}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
