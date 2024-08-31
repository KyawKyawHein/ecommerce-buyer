"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCartStore } from "@/store/cart.store";
import { ChevronLeft, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import regions from "@/lib/json/regions";
import cities from "@/lib/json/cities";
import { DialogOverlay } from "@/components/ui/dialog";
import { useLocationStore } from "@/store/location.store";
import { ICity, IRegion } from "@/types/location.types";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const CartRight = () => {
  const { push } = useRouter();
  const { storeProduct, setStoreProduct } = useCartStore();
  const {
    region,
    setRegion,
    city,
    setCity,
    citiesByRegion,
    setCitiesByRegion,
  } = useLocationStore();
  const [changeLocationStatus, setChangeLocationStatus] = useState(false);
  const dropdownRef = useRef(null);
  const totalPrice = useMemo(() => {
    return storeProduct.reduce(
      (accu, currentValue) => accu + currentValue.price * currentValue.quantity,
      0
    );
  }, [storeProduct]);
  const changeStatus = (e) => {
    e.stopPropagation();
    setChangeLocationStatus(!changeLocationStatus);
  };
  const setSelectRegion = (region: IRegion) => {
    setRegion(region);
  };
  const setSelectCity = (city: ICity) => {
    setCity(city);
    setChangeLocationStatus(false);
  };
  const backToRegionDiv = () => {
    setRegion(null);
    setCity(null);
  };
  useEffect(() => {
    const handleClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setChangeLocationStatus(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [changeLocationStatus]);
  useEffect(() => {
    if (region) {
      const filteredCities = cities.filter(
        (city) => city.region_id == region.id
      );
      setCitiesByRegion(filteredCities);
    }
  }, [region]);

  return (
    <div className="w-[600px]">
      <div className="border">
        <h3 className="text-xs font-bold p-4">
          There are {storeProduct.length} items in your cart.
        </h3>
        <div className="bg-gray-100 p-3">
          <div className="flex justify-between items-center font-bold mb-3">
            <h1 className="text-uppercase">Total :</h1>
            <h1 className="text-xl">{totalPrice}</h1>
          </div>
          <div className="flex-col justify-between items-center mb-8">
            <div className="flex justify-between items-center">
              <h1 className="text-uppercase font-bold">Shipping :</h1>
              <div>
                {region && city ? (
                  <div className="flex gap-2 items-center font-bold">
                    <p
                      className={cn(
                        "text-uppercase ",
                        totalPrice > 30000 && "line-through"
                      )}
                    >
                      {totalPrice<30000 && "+"}{city.delivery_cost} MMK
                    </p>
                    {totalPrice > 30000 && <p className="">0 MMK</p>}
                  </div>
                ) : (
                  <p className="text-xs">
                    Shipping & taxes calculated at checkout
                  </p>
                )}
              </div>
            </div>
            <div className="mt-2 flex justify-between items-center text-sm relative">
              <div className="flex gap-3 items-center">
                <MapPin size={18} />
                {region ? `${region.name} ` : "Choose Location"}{" "}
                {city && `, ${city.name}`}
              </div>
              <p
                className="text-blue-500 cursor-pointer"
                onClick={changeStatus}
              >
                Change
              </p>
              <div
                ref={dropdownRef}
                className={`${
                  changeLocationStatus
                    ? "h-[280px] px-2 py-1 border rounded shadow"
                    : "h-0"
                } transition-all duration-500 overflow-hidden z-50 absolute top-[22px] w-full flex gap-2 flex-wrap bg-white`}
                onClick={(e) => e.stopPropagation()}
              >
                {!region &&
                  regions.map((region) => (
                    <div
                      key={region.id}
                      onClick={() => setSelectRegion(region)}
                      className="border p-1 flex justify-center items-center rounded bg-gray-200 cursor-pointer"
                    >
                      {region.name}
                    </div>
                  ))}
                {citiesByRegion.length > 0 && region && (
                  <div className="h-full w-full">
                    <div className="mb-1 flex gap-3 items-center">
                      <ChevronLeft onClick={backToRegionDiv} className="p-1" />
                      {region?.name}
                    </div>
                    <div
                      className={
                        "pb-4 grid grid-cols-2 p-1 gap-2 overflow-y-auto max-h-[260px] w-full"
                      }
                    >
                      {citiesByRegion.map((city) => (
                        <div
                          key={city.id}
                          onClick={() => setSelectCity(city)}
                          className="border p-1 flex justify-center items-center rounded bg-gray-200 cursor-pointer"
                        >
                          {city.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-8">
            {totalPrice < 30000 ? (
              <p className="font-bold text-xs mb-2">
                SPEND {30000 - totalPrice} MMK FOR FREE SHIPPING
              </p>
            ) : (
              <p className="font-bold text-xs mb-2">YOU GOT FREE SHIPPING</p>
            )}
            <Progress
              value={(totalPrice / 30000) * 100}
              className={`bg-white border ${
                (totalPrice / 30000) * 100 < 100
                  ? "bg-orange-500"
                  : "bg-green-500"
              }`}
            />
            <p className="mt-2 text-xs">Free shipping for any order above <span className="text-green-500">30000 MMK</span></p>
          </div>
          <div className="">
            <p className="font-bold text-xs mb-2">
              ADD A NOTE TO YOUR ORDER :{" "}
            </p>
            <Textarea placeholder="ADD YOUR NOTE HERE" rows={10} />
          </div>
        </div>
      </div>
      <div className="btn-group flex gap-3 justify-between items-center my-3">
        <Button className="text-white w-full animated duration-300 text-xs hover:bg-blue-500">
          PROCEED TO CHECKOUT
        </Button>
        <Button
          onClick={() => push("/")}
          className="w-full text-black bg-gray-100 text-xs"
          variant={"secondary"}
        >
          CONTINUE SHOPPING
        </Button>
      </div>
    </div>
  );
};

export default CartRight;
