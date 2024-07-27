"use client";
import Image from "next/image";
import CarouselSlide from "./components/CarouselSlide";
import CategoryLayout from "./components/CategoryLayout";
import { useGetProducts } from "@/queries/product.api";
import Trending from "./components/Trending";
import Faq from "./components/Faq";
import Recommend from "./components/Recommend";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { useCartStore } from "@/store/cart.store";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";

export default function Home() {
  const { data: menProducts, isLoading: menProductsLoading } = useGetProducts(
    undefined,
    "men"
  );
  const { data: womenProducts, isLoading: womenProductsLoading } =
    useGetProducts(undefined, "women");
    const { addToCartStatus,setAddToCartStatus } = useCartStore();
  useEffect(()=>{
    setAddToCartStatus(false)
  },[])
  return (
    <div className="">
      {/* {menProductsLoading || womenProductsLoading ? (
        <h1>Loading</h1>
      ) : ( */}
      <>
        <CarouselSlide />
        <CategoryLayout />
        <Trending products={menProducts} title="MEN'S TRENDING" />
        <Trending products={womenProducts} title="WOMEN'S TRENDING" />
        <Faq />
        {/* <Company/> */}
        <Recommend />
        <Products />
        <Footer />
        {addToCartStatus && (
          <Cart/>
        )}
      </>
    </div>
  );
}
