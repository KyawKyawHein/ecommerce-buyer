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
import { QuickViewDialog } from "./QuickViewDialog";

interface TrendingProps {
  products: IProduct[] | undefined;
  title: string;
}
const Trending = ({ products, title }: TrendingProps) => {
  console.log(products);

  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };
  // let slider;
  // const goToPrev = () => {
  //   slider.slickPrev();
  // };
  // const goToNext = () => {
  //   slider.slickNext();
  // };

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
          <div className="absolute top-[50px] z-50 left-[-200px]">
            <CarouselPrevious className="font-3xl" />
            <CarouselNext className="font-3xl" />
          </div>
          <CarouselContent>
            {products?.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 relative group">
                <div key={product.id} className="">
                  <div className="w-full h-[250px] relative overflow-hidden ">
                    <Image
                      src={product.image}
                      fill
                      // width={350}
                      // height={150}
                      className="absolute rounded z-0"
                      alt=""
                    />
                    <button className="group-hover:block translate-y-20 group-hover:translate-y-0 transition-all bg-black text-white w-[90%] m-auto absolute ml-3 p-2 rounded-md bottom-3 z-30 duration-500 text-sm font-semibold">QUICK ADD</button>
                    <div className="translate-x-20 group-hover:translate-x-0 absolute right-2 top-3 transition-all duration-500 flex flex-col gap-3">
                      <button className="bg-gray-200 p-2 flex justify-center items-center rounded-full"><Heart size={20}/></button>
                      {/* <button className="bg-gray-200 p-2 flex justify-center items-center rounded-full"><Images size={20}/></button> */}
                      <QuickViewDialog slug={product.slug}/>
                    </div>
                  </div>
                  <div className="p-2">
                    <h4 className="font-semibold">
                      {product.name.length > 30
                        ? product.name.slice(0, 30) + "..."
                        : product.name}
                    </h4>
                    <p className="mt-3 font-semibold">${product.price}</p>
                    <div className="overflow-hidden mt-2">
                      <p className="text-gray-500 text-xs mt-3 font-semibold inset-0 group-hover:-translate-y-6 transition-all duration-500">
                        Available in {product.products[0].availableColor.length}{" "}
                        {product.products[0].availableColor.length > 1
                          ? "colors"
                          : "color"}
                      </p>
                      <div className="flex gap-3 inset-0 translate-y-16 group-hover:-translate-y-6 transition-all duration-500">
                        {product.products[0].availableColor.map((color) => (
                          <div
                            className={`p-3 rounded-full`}
                            style={{ background: color.color }}
                            key={color.color}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Trending;
