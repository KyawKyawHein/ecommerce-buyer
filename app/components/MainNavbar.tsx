"use client";
import { useCartStore } from "@/store/cart.store";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import UserAuth from "./UserAuth";

const MainNavbar = () => {
  const { push } = useRouter();
  const { storeProduct } = useCartStore();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 768) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`bg-black z-50 text-white p-5 flex justify-between items-center w-full z-50 ${
        sticky && "sticky top-0"
      }`}
    >
      <form action="" className="bg-white p-0 relative rounded-xl">
        <input
          type="text"
          placeholder="Enter your keyword"
          className="py-4 text-xs px-5 text-black"
        />
        <button className="p-2 text-white bg-black absolute right-[3px] top-[6px] rounded">
          <Search size={20} />
        </button>
      </form>
      <h2 className="font-extrabold text-2xl">StyleX</h2>
      <div className="flex gap-5 items-center">
        {/* <Register /> */}
        <UserAuth/>

        <div className="w-10 h-10 cursor-pointer transition-all hover:bg-gray-700 rounded-full flex justify-center items-center">
          <Heart />
        </div>
        <div onClick={() => push("/cart")} className="relative cursor-pointer">
          <span className="bg-red-500 rounded-full px-1 absolute right-[-10px] top-[-10px]">
            {storeProduct.length}
          </span>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
