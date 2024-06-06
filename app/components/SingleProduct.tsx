import { IProduct } from "@/types/product.types";
import Image from "next/image";

interface SingleProductProps extends IProduct {
  listView: boolean;
  viewTwo: boolean;
  viewThree: boolean;
}
const SingleProduct = ({
  image,
  name,
  price,
  description,
  listView = false,
  viewThree = false,
  viewTwo = false,
}: SingleProductProps) => {
  return (
    <div
      className={`product-item border px-2 rounded ${
        listView && "flex gap-10 p-2"
      }`}
    >
      <div className="relative flex items-center justify-center">
        <div className={`relative ${viewThree ? "w-full h-[320px]" :  viewTwo ? "h-[320px] w-[330px]" :"w-[200px] h-[200px]"}`}>
          <Image
            src={image}
            fill
            alt=""
          />
        </div>
        <button
          className={`quick-add-btn z-0 absolute left-0 right-0 bg-black  text-white w-full m-auto p-3 rounded hover:bg-orange-500 ${
            viewThree || viewTwo
              ? "md:bottom-[-50px]"
              : "md:bottom-[30px] hidden"
          }`}
        >
          Quick Add
        </button>
      </div>
      <div className="z-20 relative p-3 bg-white">
        <h4 className="my-3 font-bold">{name}</h4>
        <p className="">${price}</p>
        {listView && <p className="my-5">{description}</p>}
      </div>
    </div>
  );
};

export default SingleProduct;
