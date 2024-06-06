"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useRecommends } from "@/queries/recommend.api";
import Image from "next/image";
import React, { useState } from "react";

const Recommend = () => {
  const { data: recommends, isLoading } = useRecommends({ shopId: 611 });
  const [selectIndex, setSelectIndex] = useState(0);
  const [subtract,setSubtract]= useState(0);
  const nextRecommend = ()=>{
    selectIndex == recommends?.length-1 ? setSelectIndex(0) : setSelectIndex(selectIndex+1)
  }
  const prevRecommend = ()=>{
    if(selectIndex>=1){
      setSelectIndex(selectIndex-1);
      setSubtract(0)
    }else{
      setSelectIndex((recommends?.length-1)-subtract);
      subtract ==recommends?.length-1 ? setSubtract(0) :setSubtract(subtract+1)
    }
  }
  
  return (
    <div className="flex justify-center bg-gray-200">
      {!isLoading && recommends?.length > 0 && (
        <div className="w-full md:w-[1000px] h-screen flex flex-col items-center justify-center">
          <Image src={"/quote.png"} alt="quote" width={50} height={50} />
          <h2 className="uppercase tracking-widest my-10 text-gray-500">
            Watch customer say about us
          </h2>
          <h1 className="h-28 text-center">{recommends[selectIndex].text}</h1>
          <Carousel 
          opts={{ 
            align: 'center',
            loop : true,
           }}
           className="w-[500px] px-2">
            <CarouselContent>
              {recommends?.map((recommend, index) => (
                <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/5 transition-all">
                  <Image
                    src={recommend.user_img}
                    alt="user"
                    width={80}
                    height={80}
                    className={cn("rounded-full",selectIndex==index ? 'scale-90':'scale-75 opacity-40')}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div onClick={prevRecommend}>
              <CarouselPrevious  />
            </div>
            <div onClick={nextRecommend}>
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Recommend;
