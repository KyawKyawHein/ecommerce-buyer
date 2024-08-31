import { login } from "@/services/auth.service";
import { ILogin } from "@/types/auth.types";
import { useMutation } from "react-query";

export const useLogin = () => {
    return useMutation({
        mutationFn: async (payload: ILogin) => {
                let result = await login(payload);
                return result;
        }
    })
}