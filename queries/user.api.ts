import { getUser } from "@/services/user.service"
import { useQuery } from "react-query"

export const useGetUser = ()=>{
    return useQuery({
        queryKey : ['get','user'],
        queryFn : async()=>{
            let result = await getUser();
            return result;
        },
        enabled : !!localStorage.getItem("styleX_token"),
        retry : false
    })
}