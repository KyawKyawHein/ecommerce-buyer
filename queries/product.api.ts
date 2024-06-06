import { getProducts } from "@/services/product.service"
import { useQuery } from "react-query"

export const useGetProducts = () => {
    return useQuery({
        queryKey: ['get', 'products'],
        queryFn:getProducts,
        keepPreviousData: true
    })
}