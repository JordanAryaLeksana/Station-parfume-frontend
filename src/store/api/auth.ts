
import { RegisterData } from "@/Interface/IAuth";
import axiosClient from "@/lib/axios";

export const AuthService = {
    register: async (data: {
        name: RegisterData["name"];
        email: RegisterData["email"];
        password: RegisterData["password"];
    }) => {
        const reponse = await axiosClient.post("/auth/register", data);
        return reponse.data;
    },
    login: async (data: {
        email: RegisterData["email"];
        password: RegisterData["password"];
    }) => {
        const reponse = await axiosClient.post("/auth/login", data);
        return reponse.data;
    },
    googleLogin: async (token: string) => {
        window.location.href = `${process.env.API_URL_DEV}/auth/google/callback?token=${token}`;
    },
    loginAdmin: async (data: {
        name: RegisterData["name"];
        email: RegisterData["email"];
        password: RegisterData["password"]; 
    }) => {
        const reponse = await axiosClient.post("/auth/admin/login", data);
        return reponse.data;
    },
    logout: async () => {
        const response = await axiosClient.post("/auth/logout");
        return response.data;
    },
    refresh: async () => {
        const response = await axiosClient.post("/auth/refresh");
        return response.data;
    }
}

