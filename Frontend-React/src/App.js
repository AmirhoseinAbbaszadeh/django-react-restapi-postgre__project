// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import Orders from './Orders';

function App() {
    return (
            <Router>
                <Routes>
                <Route path="/" element={<LoginPage />} />       {/* Root URL shows LoginPage */}
                <Route path="/login" element={<LoginPage />} />   {/* Alternative login path */}
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} />     {/* Home page URL */}
                <Route path="/orders" element={<Orders />} />
                </Routes>
            </Router>
    );
}

export default App;
