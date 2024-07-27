"use client"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCartStore } from "@/store/cart.store";
import { useRouter } from "next/navigation";
import React from "react";

const CartRight = () => {
  const {push} = useRouter()
  const { storeProduct, setStoreProduct } = useCartStore();
  return (
    <div className="w-[600px]">
      <div className="border">
        <h3 className="text-xs font-bold p-4">
          There are {storeProduct.length} items in your cart.
        </h3>
        <div className="bg-gray-100 p-3">
          <div className="flex justify-between items-center font-bold mb-3">
            <h1 className="text-uppercase">Total :</h1>
            <h1 className="text-xl">
              {storeProduct.reduce(
                (accu, currentValue) =>
                  accu + currentValue.price * currentValue.quantity,
                0
              )}
            </h1>
          </div>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-uppercase font-bold">Shipping :</h1>
            <h1 className="text-xs">Shipping & taxes calculated at checkout</h1>
          </div>
          <div className="flex flex-col mb-8">
            {storeProduct.reduce(
              (accu, currentValue) =>
                accu + currentValue.price * currentValue.quantity,
              0
            ) <= 1500 ? (
              <p className="font-bold text-xs">SPEND 1500 FOR FREE SHIPPING</p>
            ) : (
              <p className="font-bold text-xs">YOU GOT FREE SHIPPING</p>
            )}
          </div>
          <div className="">
            <p className="font-bold text-xs mb-2">
              ADD A NOTE TO YOUR ORDER :{" "}
            </p>
            <Textarea placeholder="ADD YOUR NOTE HERE" rows={10} />
          </div>
        </div>
      </div>
      <div className="btn-group flex gap-3 justify-between items-center my-3">
        <Button className="text-white w-full animated duration-300 text-xs hover:bg-blue-500">PROCEED TO CHECKOUT</Button>
        <Button onClick={()=>push('/')} className="w-full text-black bg-gray-100 text-xs" variant={"secondary"}>CONTINUE SHOPPING</Button>
      </div>
    </div>
  );
};

export default CartRight;
