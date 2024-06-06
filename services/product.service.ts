import { IProductsProps, ProductsResponse } from "@/types/product.types";
import { httpService } from "./httpService"

export const getProducts = async() => {
    const res = await httpService.get<ProductsResponse>(`/products`)
    return res.data;
}
