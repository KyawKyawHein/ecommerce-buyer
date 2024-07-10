"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGetProductById } from "@/queries/product.api";
import { Images, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const QuickViewDialog=({ slug }: { slug: string })=> {
  const { data: product, isLoading } = useGetProductById(slug);
  const [selectedColor,setSelectedColor] = useState<string>()
  const [selectedSize,setSelectedSize] = useState<string>()
  const [quantity,setQuantity] = useState<number>(1)
  useEffect(()=>{
    setSelectedColor(product?.products[0].availableColor[0].color)
    setSelectedSize(product?.products[0].size)
  },[product])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-gray-200 p-2 flex justify-center items-center rounded-full"
        >
          <Images size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <div className="grid grid-cols-5 gap-20 w-full">
          <div className="relative col-span-2 w-[300px] h-[400px]">
            <Image fill src={product?.image} alt={"product image"} />
          </div>
          <div className="col-span-3">
            <h3 className="text-2xl font-extrabold mb-4">{product?.name}</h3>
            <p className="text-2xl font-bold mb-4">${product?.price}</p>
            <div className="text-sm mb-4">
              Category : {" "}
              <span className="text-red-500">{product?.category.name}</span>
            </div>
            <div className="mb-8 font-bold">
              <p className="mb-1 text-sm">COLOR : <span style={{ color:selectedColor }}>{selectedColor}</span></p>
              <div className="flex gap-3 ">
                {product?.products[0].availableColor.map((color) => (
                  <div
                    className={` rounded-full transition-all w-8 h-8 ${selectedColor == color.color && `border-4 p-3`}`}
                    key={color.color}
                    onClick={()=>setSelectedColor(color.color)}
                    style={{ backgroundColor: color.color }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mb-8 font-bold">
              <p className="mb-1 text-sm">Size : <span>{selectedSize}</span></p>
              <div className="flex gap-5 ">
                {product?.products.map((product) => (
                  <div
                    className={`p-3 rounded cursor-pointer transition-all border w-12 h-12 flex justify-center items-center ${selectedSize == product.size && `border-4`}`}
                    key={product.size}
                    onClick={()=>setSelectedSize(product.size)}
                  >{product.size}</div>
                ))}
              </div>
            </div>
            <div className="mb-8 font-bold w-full">
              <p className="mb-1 text-sm">Quantity : </p>
              <div className="flex justify-between gap-3 w-full">
                <div className="flex gap-8 items-center border p-3">
                    <Plus size={15} onClick={()=>setQuantity(prev=>prev+1)}/>
                    <span className="select-none">{quantity}</span>
                    <Minus size={15} onClick={()=>setQuantity((prev)=>prev>1?prev-1:prev)}/>
                </div>
                <button className="text-bold bg-gray-200 w-full">Add to Bag</button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
export default QuickViewDialog;