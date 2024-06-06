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

interface TrendingProps {
  products: IProduct[] | undefined;
  title: string;
}
const Trending = ({ products, title }: TrendingProps) => {
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
    <div className="md:flex md:my-20 overflow-hidden">
      <div className="md:px-20 md:pt-5 relative">
        <h2 className="font-extrabold my-2 md:my-6 md:mt-16 text-2xl uppercase">
          {title}
        </h2>
        <button className="bg-black text-white md:px-5 py-3">SHOP ALL</button>
      </div>
      <Carousel
      opts={{ 
        align: 'center',
        loop : true,
       }}
      className="relative px-2">
        <div className="absolute top-[-200px] left-[-200px]">
          <CarouselPrevious className="font-3xl" />
          <CarouselNext />
        </div>
        <CarouselContent>
          {products?.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
              <div key={product.id} className="w-full border">
                <Image src={product.image} width={300} height={150} className="rounded" alt="" />
                <div className="p-2">
                  <h4 className="font-semibold">
                    {product.name.length > 30
                      ? product.name.slice(0, 30) + "..."
                      : product.name}
                  </h4>
                  <p className="mt-3">${product.price}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Trending;
