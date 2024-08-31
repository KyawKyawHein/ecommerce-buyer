import { AxiosError } from "axios";
import { httpService } from "./httpService"

export const getUser = async () => {
    try {
        const token = localStorage.getItem('styleX_token');

        if (!token) {
            throw new Error("No authentication token found.");
        }

        const res = await httpService.get('/user', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        return res.data;

    } catch (error) {
        if (error instanceof AxiosError) {
            // Handle Axios-specific errors
            console.error("Error fetching user:", error.response?.data || error.message);
        } else {
            // Handle general errors
            console.error("Error fetching user:", error.message);
        }

        throw error; // Re-throw the error to be handled by the calling function or component
    }

}