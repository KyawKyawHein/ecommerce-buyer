"use client";
import Image from "next/image";
import React from "react";
import QuickAddBtn from "./QuickAddBtn";
import WishlistBtn from "./WishlistBtn";
import QuickViewDialog from "./QuickViewDialog";
import { IProduct } from "@/types/product.types";
import { useCartStore } from "@/store/cart.store";

const ProductCard = ({
  product,
  viewTwo,
  viewThree = true,
  listView,
}: {
  product: IProduct;
  viewTwo?: boolean;
  viewThree?: boolean;
  listView?: boolean;
}) => {
  const { productColors, setProductColors } = useCartStore();
  const addColor = (id: number, color: string) => {
    const updateColor = productColors.filter(
      (colorArr) => colorArr.productId != id
    );
    setProductColors([
      ...updateColor,
      {
        productId: id,
        color,
      },
    ]);
  };
  console.log(product);

  return (
    <div className={`relative group ${listView && "flex gap-5 my-5"}`}>
      <div
        className={`relative overflow-hidden h-[250px] ${
          listView && "w-[300px]"
        }`}
      >
        <Image
          src={product.image}
          fill
          // width={350}
          // height={150}
          className="rounded"
          alt=""
        />
        <QuickAddBtn product={product} />
        <div className="translate-x-20 group-hover:translate-x-0 absolute right-2 top-3 transition-all duration-500 flex flex-col gap-3">
          <WishlistBtn product={product} />
          <QuickViewDialog slug={product.slug} />
        </div>
      </div>
      <div className={`p-2 ${listView && 'flex flex-col justify-between'}`}>
        <div>
          <h4 className="font-semibold">
            {product.name?.length > 30
              ? product.name.slice(0, 30) + "..."
              : product.name}
          </h4>
          <p className="mt-3 font-semibold">${product.price}</p>
        </div>
        <div className="overflow-hidden mt-2">
          <p className="text-gray-500 text-xs mt-3 font-semibold inset-0 group-hover:-translate-y-6 transition-all duration-500">
            Available in {product.products[0].availableColor.length}{" "}
            {product.products[0].availableColor.length > 1 ? "colors" : "color"}
          </p>
          <div className="flex gap-3 inset-0 translate-y-16 group-hover:-translate-y-6 transition-all duration-500">
            {product.products[0].availableColor.map((color, index) => {
              const isSelected = productColors.some(
                (colorArr) => colorArr.productId == product.id
              );
              const borderClass =
                isSelected &&
                productColors.some(
                  (colorArr) =>
                    colorArr.productId == product.id &&
                    colorArr.color == color.color
                )
                  ? "border-2 border-blue-900"
                  : index == 0 && !isSelected && "border-2 border-blue-900";
              return (
                <div
                  onClick={() => addColor(product.id, color.color)}
                  className={`w-6 h-6 rounded-full ${borderClass}`}
                  style={{ background: color.color }}
                  key={color.color}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
