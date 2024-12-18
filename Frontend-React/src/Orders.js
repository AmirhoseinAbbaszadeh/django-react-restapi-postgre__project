// src/pages/Order.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from './axios';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [newOrder, setNewOrder] = useState({
        customer_id: '',
        product_id: '',
        quantity: 1,
        status: ''
    });
    const navigate = useNavigate();

    // Fetch orders and products when component mounts
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/orders/');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('/products/');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchOrders();
        fetchProducts();
    }, []);

    // Handle changes in form inputs
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value,
        }));
    };

    // Handle form submission to add a new order
    const handleAddOrder = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/orders/', newOrder);
            setOrders((prevOrders) => [...prevOrders, response.data]); // Add new order to the list
            setNewOrder({ product_id: '', quantity: 1, status: '' }); // Reset the form
        } catch (error) {
            console.error('Error adding order:', error);
            if (error.response && error.response.status === 401) {
                navigate('/login');
            }
        }
    };

    // Handle delete order
    const handleDeleteOrder = async (orderId) => {
        try {
            await axios.delete(`/orders/${orderId}/`);
            setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
        } catch (error) {
            console.error('Error deleting order:', error);
            if (error.response && error.response.status === 401) {
                navigate('/login');
            }
        }
    };

    return (
        <div>
            <h2>Your Orders</h2>

            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        <p>Order ID: {order.id}</p>
                        <p>Product ID: {order.product_id}</p>
                        <p>Customer ID: {order.customer_id}</p>
                        <p>Quantity: {order.quantity}</p>
                        <p>Status: {order.status}</p>
                        {/* Delete button */}
                        <button onClick={() => handleDeleteOrder(order.id)}>Delete Order</button>
                    </li>
                ))}
            </ul>

            <h3>Add New Order</h3>
            <form onSubmit={handleAddOrder}>
                <label>
                    Product:
                    <select
                        name="product_id"
                        value={newOrder.product_id}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select a product</option>
                        {products.map((product) => (
                            <option key={product.id} value={product.id}>
                                {product.name}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Quantity:
                    <input
                        type="number"
                        name="quantity"
                        value={newOrder.quantity}
                        onChange={handleInputChange}
                        min="1"
                        required
                    />
                </label>

                <label>
                    Status:
                    <select
                        name="status"
                        value={newOrder.status}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Select status</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                </label>

                <button type="submit">Add Order</button>
            </form>

            <button onClick={() => navigate('/home')}>Go to Products Page</button>
        </div>
    );
};

export default Order;
