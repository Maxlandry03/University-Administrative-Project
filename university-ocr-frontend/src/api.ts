import axios from 'axios';

// Create a dedicated Axios instance for your API
const apiClient = axios.create({
  baseURL: '${import.meta.env.VITE_API_URL}', // Your Laravel backend URL
  withCredentials: true, // This is CRITICAL for sending cookies
});

/**
 * Performs the complete login flow for a Sanctum SPA.
 * 1. Fetches the CSRF cookie.
 * 2. Sends the login request.
 * @param credentials - The user's email and password.
 */
export const login = async (credentials: { email: string; password: string }) => {
  // 1. First, get the CSRF cookie from Sanctum. This is essential.
  await apiClient.get('/sanctum/csrf-cookie');
  
  // 2. Now, you can make the login request.
  return apiClient.post('/api/login', credentials);
};

/**
 * Fetches the currently authenticated user.
 * This will work automatically if the user is logged in.
 */
export const getAuthenticatedUser = () => {
  return apiClient.get('/api/user');
};

/**
 * Fetches the list of all users.
 * This is a protected route and will only succeed if the user is logged in.
 */
export const getUsers = () => {
  return apiClient.get('/api/users');
};

/**
 * Creates a new user.
 * @param userData - The data for the new user.
 */
export const createUser = (userData: any) => {
  return apiClient.post('/api/users', userData);
};

/**
 * Deletes a user by their email.
 * @param email - The email of the user to delete.
 */
export const deleteUser = (email: string) => {
  return apiClient.delete(`/api/users/${email}`);
};

export default apiClient;
