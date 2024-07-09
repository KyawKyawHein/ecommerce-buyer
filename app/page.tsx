"use client";
import Image from "next/image";
import CarouselSlide from "./components/CarouselSlide";
import CategoryLayout from "./components/CategoryLayout";
import { useGetProducts } from "@/queries/product.api";
import Trending from "./components/Trending";
import Faq from "./components/Faq";
import Company from "./components/Company";
import Recommend from "./components/Recommend";
import Products from "./components/Products";
import Footer from "./components/Footer";

export default function Home() {
  const { data: menProducts, isLoading: menProductsLoading } = useGetProducts(undefined,'men');
  const {data:womenProducts,isLoading:womenProductsLoading} = useGetProducts(undefined,'women')
  
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
          <Faq/>
          {/* <Company/> */}
          <Recommend/>
          <Products/>
          <Footer/>
        </>
    </div>
  );
}
