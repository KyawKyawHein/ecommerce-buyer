"use client"
import React from "react";
import Slider from "react-slick";
// import "./trending.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { IProduct } from "@/types/product.types";

interface TrendingProps {
  products: IProduct[] | undefined;
  title: string;
}
const Trending = ({ products, title }: TrendingProps) => {
  console.log(products);
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  // let slider;
  // const goToPrev = () => {
  //   slider.slickPrev();
  // };
  // const goToNext = () => {
  //   slider.slickNext();
  // };

  return (
    <div className="md:flex md:my-20 overflow-hidden">
      {/* <div className="md:px-20 md:mt-10 w-full bg-white relative">
        <div className="flex gap-3">
          <button
            className="custom-arrow border rounded rounded-full p-3 prev"
            // onClick={goToPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="custom-arrow border rounded rounded-full p-3 next"
            // onClick={goToNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <h2 className="font-extrabold my-2 md:my-6 text-2xl uppercase">
          {title}
        </h2>
        <button className="bg-black text-white md:px-5 py-3">SHOP ALL</button>
      </div> */}
      <div className="">
      <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
      </div>
    </div>
  );
};

export default Trending;
