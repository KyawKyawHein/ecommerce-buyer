"use client";
import Image from "next/image";
import CarouselSlide from "./components/CarouselSlide";
import CategoryLayout from "./components/CategoryLayout";
import { useProducts } from "@/queries/product.api";
import Trending from "./components/Trending";

export default function Home() {
  const { data: menProducts, isLoading: productsLoading } = useProducts({
    gender: "men",
  });
  console.log(menProducts);

  return (
    <div className="">
      {productsLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <CarouselSlide />
          <CategoryLayout />
          <Trending products={menProducts?.data} title="MEN'S TRENDING" />
        </>
      )}
    </div>
  );
}
