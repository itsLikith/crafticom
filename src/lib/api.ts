import axios from 'axios';

// Create an axios instance with the local API route (which gets proxied to backend)
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  withCredentials: true,
});

export default api;

// Helper function to get the API base URL
export const getApiBaseUrl = () => {
  return (
    process.env.NEXT_PUBLIC_BACKEND_API_URL ||
    'https://auth-theta-lake.vercel.app/api'
  );
};
