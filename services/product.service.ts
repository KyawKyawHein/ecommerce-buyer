import { IProduct, IProductsProps, ProductsResponse } from "@/types/product.types";
import { httpService } from "./httpService"

export const getProducts = async(page?:number,category?:string) => {
    const res = await httpService.get<ProductsResponse>(`/products?${page?`page=${page}&`:''}${category?`category=${category}`:''}`)
    return res.data;
}

export const getProductById = async(slug:string)=>{
    const res = await httpService.get<IProduct>(`/products/${slug}`);
    return res.data;
}