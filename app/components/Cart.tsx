"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { addQuantityCartProduct, removeQuantityCartProduct } from "@/lib/utils";
import { useCartStore } from "@/store/cart.store";
import { Trash, Trash2, Truck, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const { addToCartStatus,setAddToCartStatus, storeProduct, setStoreProduct } = useCartStore();
  const [agreeStatus, setAgreeStatus] = useState<boolean>(false);
  const {push} = useRouter()

  const addQuantity = (id: number) => {
    setStoreProduct(addQuantityCartProduct(storeProduct,id));
  };
  const removeQuantity = (id: number) => {
    setStoreProduct(removeQuantityCartProduct(storeProduct,id));
  };
  const handleClose = ()=>{
    setAddToCartStatus(false)
  }
  const removeProductFromCart = (id:number)=>{
    setStoreProduct(removeProductFromCart(storeProduct,id));
  }

  return (
    <div className="fixed left-[350px] top-[40px] w-[1000px] border p-5 rounded bg-white flex flex-col justify-center z-50">
      <X onClick={handleClose} className="absolute right-[-30px] top-[-20px] text-red-500 font-bold cursor-pointer"/>
      <div className="header flex items-center gap-6">
        <p className="text-xl font-bold">Your Order</p>
        <p className="text-uppercase">
          There are {storeProduct.length} item
          {storeProduct.length > 1 && "s"} in your cart
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-4 mb-5">
        {/* left side  */}
        <div className="col-span-2">
          <div className="h-[200px] scrollbar-custom overflow-y-scroll">
            {storeProduct.map((product) => (
              <div className="relative flex gap-5 items-center mx-5 border p-2 rounded" key={product.id}>
                <Trash2 onClick={()=>removeProductFromCart(product.id)} className="bg-gray-200 cursor-pointer px-1 rounded-full absolute top-[50%] left-[-11px] z-50" size={25}/>
                <div className="relative w-32 h-32">
                  <Image src={product.image} fill alt="product-image" />
                </div>
                <div className="flex justify-between px-4 w-full items-center gap-10">
                  <div className="text-xs">
                    <p className="font-bold mb-2">{product.name}</p>
                    <p className="">blue / {product.selectedSize}</p>
                  </div>
                  <p className="font-bold text-xs">${product.price}</p>
                  <div className="flex gap-1 items-center">
                    <button
                      onClick={() => addQuantity(product.id)}
                      className="transition-all px-2 rounded-full hover:bg-gray-200"
                    >
                      +
                    </button>
                    <div className="w-10 flex justify-center">
                      {product.quantity}
                    </div>
                    <button
                      disabled={product.quantity <= 1}
                      onClick={() => removeQuantity(product.id)}
                      className="transition-all px-2 rounded-full hover:bg-gray-200"
                    >
                      -
                    </button>
                  </div>
                  <p className="font-bold">${product.price * product.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <h4 className="font-bold">FREE SHIPPING FOR ANY ORDERS ABOVE <span className="text-green-600">$155.60</span></h4>
            <p className="flex gap-3 items-center text-xs my-2 mb-3 text-green-600 font-bold">CONGRATULATIONS! YOU'VE GOT FREE SHIPPING! <span className=""><Truck size={17}/></span>
            </p>
            <Progress value={33} className="text-blue-500" />
          </div>
        </div>
        {/* right side  */}
        <div className="col-span-1">
          <div className="flex justify-between items-center font-bold">
            <h1 className="text-uppercase">Total :</h1>
            <h1 className="text-xl">{storeProduct.reduce((accu,currentValue)=>accu+(currentValue.price*currentValue.quantity),0)}</h1>
          </div>
          <hr />
          <div className="mt-3 flex flex-col">
            <button onClick={()=>push('/cart')} className="px-5 py-4 tracking-wider bg-gray-200 rounded my-3 text-xs hover:text-white hover:bg-black transition-all duration-500">
              VIEW CART
            </button>
            <button onClick={()=>setAddToCartStatus(false)} className="px-5 py-4 tracking-wider bg-gray-200 rounded mb-3 text-xs hover:text-white hover:bg-black transition-all duration-500">
              CONTINUE SHOPPING
            </button>
          </div>
          <div className="">
            <div className="flex gap-3 items-center my-4">
              <Checkbox
                checked={agreeStatus}
                onClick={() => setAgreeStatus((prev) => !prev)}
              />
              <p className="text-gray-500 font-light">
                I agree with the <span className="font-bold">Terms</span> &{" "}
                <span className="font-bold">conditions</span>
              </p>
            </div>
            <button
              disabled={!agreeStatus}
              className={`px-5 py-4 w-full tracking-widest rounded mb-3 text-xs text-white font-medium transition-all duration-500 ${
                agreeStatus ? "bg-black hover:bg-orange-500" : "bg-gray-500 "
              }`}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Cart;
