const apiClient = axios.create({
    baseURL: 'https://university-administrative-project.onrender.com/api',
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
    }
});