// src/axios.js

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000', // Adjust the baseURL if needed
});

// Intercept every request to add the authorization token
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default instance;


// src/axios.js
// import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'http://127.0.0.1:8000', // Replace with your backend URL
// });

// // Retrieve token from local storage or any other secure location
// const token = localStorage.getItem('accessToken');
// if (token) {
//     instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }

// export default instance;
