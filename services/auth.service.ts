import { ILogin, ILoginRes } from "@/types/auth.types";
import { httpService } from "./httpService"

export const login = async(payload:ILogin)=>{
    const res = await httpService.post<ILoginRes>('/login',payload)
    return res.data;
}