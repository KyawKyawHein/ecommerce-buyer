"use client";
import { useCartStore } from "@/store/cart.store";
import { IProduct } from "@/types/product.types";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const QuickAddBtn = ({ product }: { product: IProduct }) => {
  const [quickAddStatus, setQuickAddStatus] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>();  
  const { storeProduct,addToCartStatus,setAddToCartStatus, setStoreProduct } = useCartStore();

  const closeBtn = () => {
    setSelectedSize("");
    const updateProduct = storeProduct.filter((pro) => pro.id != product.id);
    setStoreProduct(updateProduct);
    setQuickAddStatus(true);
  };
  const sizeSelect = (size: string) => {
    setSelectedSize(size);
    const productExist = storeProduct.some((pro) => pro.id == product.id);
    if (productExist) {
      const updateProduct = storeProduct.map((pro) => {
        pro.id === product.id ? { ...pro,quantity:1, selectedSize: size } : pro;
      });
      console.log(product.products.filter(p=>p.size==selectedSize));
      
      setStoreProduct(updateProduct);
    } else {
      setStoreProduct([...storeProduct, { ...product,quantity:1, selectedSize: size }]);
    }
  };
  const addToCartDisabled = !selectedSize;
  // useEffect(()=>{
  //   const productExist = storeProduct.some((pro)=>pro.id == product.id&& pro.selectedSize == selectedSize);
  //   if(!productExist){
  //     setSelectedSize('')
  //   }
  // },[storeProduct])
  return (
    <div>
      {quickAddStatus ? (
        <button
          onClick={() => setQuickAddStatus(!quickAddStatus)}
          className="group-hover:block translate-y-20 group-hover:translate-y-0 bg-black text-white hover:bg-orange-500 hover:text-white transition-all w-[90%] m-auto absolute ml-3 p-2 rounded-md bottom-3 z-30 duration-500 text-sm font-medium"
        >
          QUICK ADD
        </button>
      ) : (
        <div className="group-hover:block bg-black text-white transition-all w-[90%] m-auto absolute ml-3 p-2 rounded-md bottom-3 z-30 duration-500 text-sm font-medium">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-xs">SELECT SIZE</h3>
            <X onClick={closeBtn} className="cursor-pointer" size={15} />
          </div>
          <div className="flex gap-3 my-3">
            {product?.size?.map((s) => (
              <div
                onClick={() => sizeSelect(s)}
                className={`w-10 h-10 flex justify-center items-center border border-gray-500 hover:border-white transition-all duration-200 cursor-pointer rounded ${
                  selectedSize == s
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
                key={s}
              >
                {s}
              </div>
            ))}
          </div>
          <button
            disabled={addToCartDisabled}
            className={`bg-white text-black w-full p-1 py-2 rounded transition-all ${
              !selectedSize && "select-none bg-gray-400"
            }`}
            onClick={()=>setAddToCartStatus(true)}
          >
            Add To Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default QuickAddBtn;
