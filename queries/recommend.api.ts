import { recommends } from "@/services/recommend.service";
import { IRecommendProps } from "@/types/recommend.types";
import { useQuery } from "react-query";

export const useRecommends = (params:IRecommendProps)=>{
    return useQuery({
        queryKey : ['get', 'recommends'],
        queryFn : async()=>{
            let result = await recommends(params)
            return result;
        }
    })
}