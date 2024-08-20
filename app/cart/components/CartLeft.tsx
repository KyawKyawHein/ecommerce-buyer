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
import Image from "next/image";
import { useCartStore } from "@/store/cart.store";
import {
  addQuantityCartProduct,
  removeProductFromCart,
  removeQuantityCartProduct,
} from "@/lib/utils";

const CartLeft = () => {
  const { storeProduct, setStoreProduct, productColors } = useCartStore();
  console.log(storeProduct);

  const addQuantity = (id: number) => {
    setStoreProduct(addQuantityCartProduct(storeProduct, id));
  };
  const removeQuantity = (id: number) => {
    setStoreProduct(removeQuantityCartProduct(storeProduct, id));
  };
  const removeProduct = (id: number) => {
    setStoreProduct(removeProductFromCart(storeProduct, id));
  };
  return (
    <div className="h-[500px] overflow-y-auto relative w-full">
      <Table>
        <TableHeader className="bg-gray-100 sticky top-0 left-0 z-30">
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
                <Trash2
                  size={17}
                  className="cursor-pointer"
                  onClick={() => removeProduct(product.id)}
                />
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
                  <p className="">
                    COLOR :{" "}
                    {productColors.filter(
                      (colArr) => colArr.productId == product.id
                    ).length > 0
                      ? productColors.filter(
                          (colArr) => colArr.productId == product.id
                        )[0].color
                      : product.products[0].availableColor[0].color}
                  </p>
                  <p className="">SIZE : {product.selectedSize}</p>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-xs font-bold">${product.price}</p>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-between border rounded">
                  <button
                    onClick={() => addQuantity(product.id)}
                    className="transition-all px-2  hover:bg-gray-200"
                  >
                    +
                  </button>
                  <div className="w-10 flex justify-center bg-gray-100 rounded">
                    {product.quantity}
                  </div>
                  <button
                    disabled={product.quantity <= 1}
                    onClick={() => removeQuantity(product.id)}
                    className="transition-all px-2 hover:bg-gray-200"
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
    </div>
  );
};

export default CartLeft;
