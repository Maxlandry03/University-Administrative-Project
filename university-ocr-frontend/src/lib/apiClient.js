import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://university-administrative-project.onrender.com/api',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
    }
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;