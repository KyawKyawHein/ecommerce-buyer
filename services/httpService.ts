import axios from "axios";

export const httpService = axios.create({
    baseURL: "http://167.172.77.190/api/",
});

httpService.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN_KEY');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

httpService.interceptors.response.use(response=>{
    return response;
},(error)=>{
    if(error.response && error.response.status == 401){
        localStorage.removeItem('ACCESS_TOKEN_KEY');
        window.location.reload();
        return error;
    }
    throw error;
})
