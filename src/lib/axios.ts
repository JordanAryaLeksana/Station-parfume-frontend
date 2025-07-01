import axios from "axios";


const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})

axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = token ? `Bearer ${token}` : "";
        }
        return config;
    }
)

export default axiosClient;