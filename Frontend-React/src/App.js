// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                {/* <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<HomePage />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
