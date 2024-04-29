import { products } from "@/services/product.service"
import { IProductsProps } from "@/types/product.types"
import { useQuery } from "react-query"

export const useProducts = (params:IProductsProps) => {
    return useQuery({
        queryKey: ['get', 'products', params],
        queryFn: async () => {
            let result = await products(params)
            return result
        }
    })
}