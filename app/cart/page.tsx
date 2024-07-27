"use client";
import React from "react";
import CartLeft from "./components/CartLeft";
import CartRight from "./components/CartRight";
import { useCartStore } from "@/store/cart.store";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Cart = () => {
  const {push} = useRouter()
  const { storeProduct } = useCartStore();
  
  return (
    <div className="w-[1200px] m-auto">
      <h1 className="text-3xl font-extrabold text-center tracking-wider mt-16">
        Your Shopping Cart
      </h1>
      <div>
        {storeProduct.length <1 ? (
          <div className="mt-10">
            <h1 className="font-bold mb-8 text-2xl tracking-wider">Your Cart is Currently Empty.</h1>
            <p className="mb-5">
              Before proceeding to checkout you must add some products to your
              shopping cart.<br/>You will find a lot of interesting products on our
              "Shop" page.
            </p>
            <Button onClick={()=>push('/')} variant={"default"} className="text-xs">CONTINUE SHOPPING</Button>
          </div>
        ) : (
          <div className="mt-10 flex gap-10">
            <CartLeft />
            <CartRight />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
