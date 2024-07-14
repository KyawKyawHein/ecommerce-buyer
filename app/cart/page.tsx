"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cart.store";
import Image from "next/image";
import { addQuantityCartProduct, removeQuantityCartProduct } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const Cart = () => {
  const { storeProduct, setStoreProduct } = useCartStore();
  const addQuantity = (id: number) => {
    setStoreProduct(addQuantityCartProduct(storeProduct, id));
  };
  const removeQuantity = (id: number) => {
    setStoreProduct(removeQuantityCartProduct(storeProduct, id));
  };
  return (
    <div className="w-[1200px] m-auto">
      <h1 className="text-3xl font-extrabold text-center tracking-wider mt-16">
        Your Shopping Cart
      </h1>
      <div className="mt-10 flex gap-10">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20px]"></TableHead>
              <TableHead className="">PRODUCT</TableHead>
              <TableHead>PRICE</TableHead>
              <TableHead>QTY</TableHead>
              <TableHead className="text-right">TOTAL</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {storeProduct.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="text-center">
                  <Trash2 size={17} />
                </TableCell>
                <TableCell className="font-medium flex gap-5">
                  <Image
                    src={product?.image}
                    width={80}
                    height={80}
                    alt="product-image"
                  />
                  <div className="text-xs flex flex-col gap-2 justify-center">
                    <p className="">{product.name}</p>
                    <p className="">COLOR : {product.selectedSize}</p>
                    <p className="">SIZE : {product.selectedSize}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-xs font-bold">${product.price}</p>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1 items-center">
                    <button
                      onClick={() => addQuantity(product.id)}
                      className="transition-all px-2 rounded-full hover:bg-gray-200"
                    >
                      +
                    </button>
                    <div className="w-10 flex justify-center">
                      {product.quantity}
                    </div>
                    <button
                      disabled={product.quantity <= 1}
                      onClick={() => removeQuantity(product.id)}
                      className="transition-all px-2 rounded-full hover:bg-gray-200"
                    >
                      -
                    </button>
                  </div>
                </TableCell>
                <TableCell className="text-right font-bold w-[200px]">
                  {product.price * product.quantity}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
                <h1 className="text-xs">
                  Shipping & taxes calculated at checkout
                </h1>
              </div>
              <div className="flex flex-col mb-8">
                {storeProduct.reduce(
                  (accu, currentValue) =>
                    accu + currentValue.price * currentValue.quantity,
                  0
                ) <= 1500 ? (
                  <p className="font-bold text-xs">
                    SPEND 1500 FOR FREE SHIPPING
                  </p>
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
          <button className="w-full border p-2 my-5 rounded bg-yellow-500 text-white">Paypal</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
