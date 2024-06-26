// import Image from "next/image";
// import Link from "next/link";
// import {Carousel} from "flowbite-react";
// import "./carouselSlide.css";
// const CarouselSlide = () => {
//   return (
//     <div className="h-screen">
//       <Carousel className="h-screen">
//         <div className="relative h-screen">
//           <Image src={'/carousel1.webp'} alt="carousel" fill className="h-screen" />
//           <div className="absolute scale-up-center top-[30%] left-[60px] font-extrabold text-white">
//             <p className="uppercase mb-6 text-1xl">authum collection</p>
//             <h4 className="uppercase text-2xl text-5xl my-3 font-semibold">
//               find your
//             </h4>
//             <h2 className="uppercase text-3xl text-8xl">perfect</h2>
//             <p className="my-5 font-extrabold">
//               Uncomprosing in style, quality and performance
//             </p>
//             <Link
//               href={"/products"}
//               className="my-5 uppercase px-10 py-4 bg-white text-black"
//             >
//               Shop Now
//             </Link>
//           </div>
//         </div>
//         <div className="relative h-screen">
//           <Image src={'/carousel2.webp'} alt="carousel2" fill />
//           <div className="absolute scale-up-center top-[30%] left-[60px] font-extrabold text-white">
//             <p className="uppercase mb-6 text-1xl">shirt collection</p>
//             <h4 className="uppercase text-2xl text-5xl my-3 font-semibold">
//               fashion
//             </h4>
//             <h2 className="uppercase text-3xl text-8xl">trending</h2>
//             <p className="my-5 font-extrabold">
//               Uncomprosing in style, quality and performance
//             </p>
//             <Link
//               href={"/products"}
//               className="my-5 uppercase px-10 py-4 bg-white text-black"
//             >
//               Shop Now
//             </Link>
//           </div>
//         </div>
//         <div className="relative h-screen">
//           <Image src={'/carousel3.webp'} alt="carousel3" fill className="h-screen" />
//           <div className="absolute scale-up-center top-[30%] left-[60px] font-extrabold text-white">
//             <p className="uppercase mb-6 text-1xl">Women trending</p>
//             <h4 className="uppercase text-2xl text-5xl my-3 font-semibold">
//               wearing
//             </h4>
//             <h2 className="uppercase text-3xl text-8xl">minimalist</h2>
//             <p className="my-5 font-extrabold">
//               Uncomprosing in style, quality and performance
//             </p>
//             <Link
//               href={"/products"}
//               className="my-5 uppercase px-10 py-4 bg-white text-black"
//             >
//               Shop Now
//             </Link>
//           </div>
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default CarouselSlide;

"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

const CarouselSlide = () => {
  return (
    <div className="h-screen">
      <Carousel>
        <div className="relative h-screen">
          <Image
            src={"/carousel1.webp"}
            alt="carousel"
            fill
            className="h-screen"
          />
          <div className="absolute scale-up-center top-[30%] left-[60px] font-extrabold text-white">
            <p className="uppercase mb-6 text-1xl">authum collection</p>
            <h4 className="uppercase text-2xl text-5xl my-3 font-semibold">
              find your
            </h4>
            <h2 className="uppercase text-3xl text-8xl">perfect</h2>
            <p className="my-5 font-extrabold">
              Uncomprosing in style, quality and performance
            </p>
            <Link
              href={"/products"}
              className="my-5 uppercase px-10 py-4 bg-white text-black"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative h-screen">
          <Image src={"/carousel2.webp"} alt="carousel2" fill />
          <div className="absolute scale-up-center top-[30%] left-[60px] font-extrabold text-white">
            <p className="uppercase mb-6 text-1xl">shirt collection</p>
            <h4 className="uppercase text-2xl text-5xl my-3 font-semibold">
              fashion
            </h4>
            <h2 className="uppercase text-3xl text-8xl">trending</h2>
            <p className="my-5 font-extrabold">
              Uncomprosing in style, quality and performance
            </p>
            <Link
              href={"/products"}
              className="my-5 uppercase px-10 py-4 bg-white text-black"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative h-screen">
          <Image
            src={"/carousel3.webp"}
            alt="carousel3"
            fill
            className="h-screen"
          />
          <div className="absolute scale-up-center top-[30%] left-[60px] font-extrabold text-white">
            <p className="uppercase mb-6 text-1xl">Women trending</p>
            <h4 className="uppercase text-2xl text-5xl my-3 font-semibold">
              wearing
            </h4>
            <h2 className="uppercase text-3xl text-8xl">minimalist</h2>
            <p className="my-5 font-extrabold">
              Uncomprosing in style, quality and performance
            </p>
            <Link
              href={"/products"}
              className="my-5 uppercase px-10 py-4 bg-white text-black"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
