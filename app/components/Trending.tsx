"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { IProduct } from "@/types/product.types";
import { Heart, Images } from "lucide-react";
import QuickViewDialog from "./QuickViewDialog";
import { useEffect, useState } from "react";
import WishlistBtn from "./WishlistBtn";
import QuickAddBtn from "./QuickAddBtn";
import { useCartStore } from "@/store/cart.store";
import ProductCard from "./ProductCard";

interface TrendingProps {
  products: IProduct[] | undefined;
  title: string;
}
const Trending = ({ products, title }: TrendingProps) => {
  const { storeProduct, setStoreProduct, productColors, setProductColors } =
    useCartStore();
  return (
    <div className="md:grid md:grid-cols-4 md:my-20 overflow-hidden relative pr-2">
      <div className="md:pt-5 md:col-span-1 flex flex-col items-center">
        <h2 className="font-extrabold my-2 md:my-6 md:mt-16 text-2xl uppercase">
          {title}
        </h2>
        <button className="bg-black text-white md:px-5 py-3">SHOP ALL</button>
      </div>
      <div className="md:col-span-3">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <div className="absolute top-[50px] z-40 left-[-200px]">
            <CarouselPrevious className="font-3xl" />
            <CarouselNext className="font-3xl" />
          </div>
          <CarouselContent>
            {products?.map((product, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/4"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Trending;
