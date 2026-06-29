const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '${import.meta.env.VITE_API_URL}/api',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
    }
});