// src/axios.js
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create the Axios instance with the base URL
const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000', // or your Django API base URL
});

// Add a response interceptor to handle token expiration
instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // Remove the token from localStorage (or wherever it's stored)
            localStorage.removeItem('token');

            // Redirect to login page
            window.location.href = '/login'; // Using window.location for simplicity
        }
        return Promise.reject(error);
    }
);

export default instance;
