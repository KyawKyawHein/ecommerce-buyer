import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const Company = () => {
  return (
    <div className="flex justify-center my-8">
      <Carousel className="w-[1100px] px-2">
        <CarouselContent>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <Image
              src={"/company/com2.webp"}
              width={150}
              height={130}
              className="rounded"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <Image
              src={"/company/com2.webp"}
              width={150}
              height={130}
              className="rounded"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <Image
              src={"/company/com3.webp"}
              width={150}
              height={130}
              className="rounded"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <Image
              src={"/company/com4.webp"}
              width={150}
              height={130}
              className="rounded"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <Image
              src={"/company/com5.webp"}
              width={150}
              height={130}
              className="rounded"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <Image
              src={"/company/com6.webp"}
              width={150}
              height={130}
              className="rounded"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <Image
              src={"/company/com7.webp"}
              width={150}
              height={130}
              className="rounded"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <Image
              src={"/company/com8.webp"}
              width={150}
              height={130}
              className="rounded"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <Image
              src={"/company/com9.webp"}
              width={150}
              height={130}
              className="rounded"
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="md:basis-1/4 lg:basis-1/6">
            <Image
              src={"/company/com10.webp"}
              width={150}
              height={130}
              className="rounded"
              alt=""
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Company;
