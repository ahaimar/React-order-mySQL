import axios from 'axios';
import React, { useState } from 'react'

export default function Searsh() {
  
    const [id, setId] = useState('');
    const [order, setOrder] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the form from submitting and reloading the page
        setError(''); // Clear previous errors
        console.log(`Searching for order with ID: ${id}`);

        try {
            const response = await axios.get(`http://localhost:9090/order/getOrderById/${id}`);
            console.log('Response:', response);
            setOrder(response.data);
            setError('');
        } catch (err) {
            console.error('Error occurred:', err);
            setOrder(null);
            if (err.response && err.response.status === 404) {
                setError('order not found.');
            }else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <h4>Search order</h4>
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                    <input 
                        className="form-control me-2"
                        type="text" 
                        value={id} 
                        onChange={(e) => setId(e.target.value)} 
                        placeholder="Enter order ID" 
                    />
                    <button className="btn btn-outline-info" type="submit">Search</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {order && (
                    <div>
                        <h4>Order Details</h4>
                        <p><i className='info'> ID : </i>{order.id}</p>
                        <p><i>Date Order : </i>{order.eventDateTime}</p>
                        <p><i>Customer First Name : </i>{order.customer.firstName}</p>
                        <p><i>Customer Last Name : </i>{order.customer.lastName}</p>
                        <p><i>Supplier Name : </i>{order.supplier.supplierName}</p>
                        <p><i>Supplier Email : </i>{order.supplier.supplierEmail}</p>
                        <p><i>Product Name : </i>{order.product.productName}</p>
                        <p><i>Product Price : </i>{order.product.price}</p>
                        <p><i>Quantity : </i>{order.quantity}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
