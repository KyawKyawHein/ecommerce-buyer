import { IRecommendProps, Recommend } from "@/types/recommend.types"
import { httpService } from "./httpService"

export const recommends = async(params:IRecommendProps)=>{
    const res = await httpService.get<Recommend[]>('/recommends',{params})
    return res.data
}