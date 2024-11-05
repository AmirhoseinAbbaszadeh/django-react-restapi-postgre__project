import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// src/pages/HomePage.js


const HomePage = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    // Fetch products from API when the component loads
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/home/products/');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleLogout = () => {
        // Clear the token on logout and redirect to login page
        localStorage.removeItem('accessToken');
        navigate('/login');
    };

    const handleNavigateToOrders = () => {
        navigate('/orders'); // Navigate to Orders page
    };

    return (
        <div>
            <header style={{textAlign: 'center'}}>
                <h1>Welcome to Our E-commerce Platform!</h1>
                <button style={{text: 'left'}} onClick={handleLogout}>Logout</button>
                <button onClick={handleNavigateToOrders}>Go to Orders</button>

            </header>
            <section>
                <h2>Our Products</h2>
                <div className="product-list">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="product-item">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No products available.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default HomePage;
