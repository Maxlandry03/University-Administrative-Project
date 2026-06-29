import axios from 'axios';

// Create an Axios instance with the correct base URL and settings
const apiClient = axios.create({
<<<<<<< HEAD
   baseURL: import.meta.env.VITE_API_URL,// The base URL for all API requests
    withCredentials: true, // This is crucial for sending cookies with requests
=======
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
>>>>>>> d0a26439 (use env variable for API base URL)
    headers: {
        'Accept': 'application/json',
    }
});

// Now, when you make a login request, you only need the relative path.
// This function can handle different login payloads.
export const login = (payload) => {
    return apiClient.post('/login', payload);
};

// You can add other API functions here as well
export const register = (name, email, password, password_confirmation) => {
    return apiClient.post('/register', { name, email, password, password_confirmation });
};

export const logout = () => {
    return apiClient.post('/logout');
};

export default apiClient;
