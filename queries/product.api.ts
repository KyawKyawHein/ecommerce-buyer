    import { getProductById, getProducts } from "@/services/product.service"
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
    
    export const useGetProductById = (slug:string)=>{
        return useQuery({
            queryKey : ['get',slug],
            queryFn : async()=>{
                let product = getProductById(slug);
                return product;
            }
        })
    }