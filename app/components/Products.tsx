"use client";
import { motion } from "framer-motion";
import { Grip, GripHorizontal, GripVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { useGetProducts } from "@/queries/product.api";
import SingleProduct from "./SingleProduct";
import { IProduct } from "@/types/product.types";
import ProductCard from "./ProductCard";
const Products = () => {
  const [viewThree, setViewThree] = useState<boolean>(true);
  const [viewTwo, setViewTwo] = useState<boolean>(false);
  const [listView, setListView] = useState<boolean>(false);
  const [showProducts, setShowProducts] = useState<IProduct[]>([]);
  const [pageCount, setPageCount] = useState(1);
  const { data: products, isLoading: productsLoading } =
    useGetProducts(pageCount);
  const loadMoreProduct = () => {
    setPageCount(pageCount + 1);
  };
  useEffect(() => {
    if (products?.data) {
      setShowProducts(() => [...showProducts, ...products?.data]);
    }
  }, [products]);
  console.log(showProducts);

  const changeLayout = (layout: string) => {
    switch (layout) {
      case "viewThree":
        setViewThree(true);
        setViewTwo(false);
        setListView(false);
        break;
      case "viewTwo":
        setViewThree(false);
        setViewTwo(true);
        setListView(false);
        break;
      case "listView":
        setViewThree(false);
        setViewTwo(false);
        setListView(true);
        break;
      default:
        break;
    }
  };
  return (
    <>
      {/* {productsLoading ? (
        <h1>Loading</h1>
      ) : ( */}
        <div className="flex justify-center my-10">
          <div className="w-full md:w-[1400px]">
            <div className="w-full">
              <div className="text-center">
                <h2 className="font-extrabold text-3xl">SHOP THE LOOK</h2>
                <p className="text-sm text-gray-400 my-4">
                  Our latest endeavour features designs from around the world
                  with materials so comfortable you
                  <br />
                  won&apos;t want to wear anything else every again.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="">Sort by Featured</div>
                <div className=" mb-3 flex gap-3 justify-end">
                  <button
                    className={`p-3 ${
                      viewThree
                        ? "rounded bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => changeLayout("viewThree")}
                  >
                    <Grip />
                  </button>
                  <button
                    className={`p-3 ${
                      viewTwo
                        ? "rounded bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => changeLayout("viewTwo")}
                  >
                    <GripVertical />
                  </button>
                  <button
                    className={`p-3 ${
                      listView
                        ? "rounded bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => changeLayout("listView")}
                  >
                    <GripHorizontal />
                  </button>
                </div>
              </div>
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`${viewThree && "md:grid grid-cols-4"} ${
                  viewTwo && "md:grid grid-cols-2"
                } ${listView && "block"} md:gap-4`}
              >
                {showProducts?.map((product) => (
                  // <SingleProduct
                  //   key={product.id}
                  //   {...product}
                  //   viewThree={viewThree}
                  //   viewTwo={viewTwo}
                  //   listView={listView}
                  // />
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewTwo={viewTwo}
                    viewThree={viewThree}
                    listView={listView}
                  />
                ))}
              </motion.div>
              <div className="text-center">
                <p className="my-3 ">
                  Showing <b>{products?.meta.to}</b> of{" "}
                  <b>{products?.meta.total}</b> products
                </p>
                {products?.meta.to != products?.meta.total && (
                  <button
                    onClick={loadMoreProduct}
                    className="font-extrabold bg-gray-200 md:px-10 md:py-3 rounded hover:bg-black hover:text-white"
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default Products;
