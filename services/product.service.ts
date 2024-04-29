import { IProductsProps, ProductsResponse } from "@/types/product.types";
import { httpService } from "./httpService"

export const products = async(params:IProductsProps) => {
    const res = await httpService.get<ProductsResponse>(`/products`,{params})
    return res.data;
}
