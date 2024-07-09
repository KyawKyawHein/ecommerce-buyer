    import { getProducts } from "@/services/product.service"
    import { useQuery } from "react-query"

    export const useGetProducts = (page?:number,category?:string) => {
        return useQuery({
            queryKey: ['get', 'products',page,category],
            queryFn:async()=>{
                let products = await getProducts(page,category);
                return products;
            },
            // keepPreviousData: true
        })
    }