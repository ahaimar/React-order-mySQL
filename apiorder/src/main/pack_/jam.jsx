import React, { useState } from 'react';
import axios from 'axios';

export default function CustomerSearch() {
    const [id, setId] = useState('');
    const [customer, setCustomer] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent the form from submitting and reloading the page
        setError(''); // Clear previous errors
        console.log(`Searching for customer with ID: ${id}`);

        try {
            const response = await axios.get(`http://localhost:9090/customer/search/${id}`);
            console.log('Response:', response);
            setCustomer(response.data);
            setError('');
        } catch (err) {
            console.error('Error occurred:', err);
            setCustomer(null);
            if (err.response && err.response.status === 404) {
                setError('Customer not found.');
            }else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Search Customer</h1>
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                    <input 
                        className="form-control me-2"
                        type="text" 
                        value={id} 
                        onChange={(e) => setId(e.target.value)} 
                        placeholder="Enter customer ID" 
                    />
                    <button className="btn btn-outline-info" type="submit">Search</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {customer && (
                    <div>
                        <h2>Customer Details</h2>
                        <p>ID: {customer.id}</p>
                        <p>Name: {customer.firstName} {customer.lastName}</p>
                        <p>Phone: {customer.phone}</p>
                        <p>Email: {customer.email}</p>
                        <p>Address: {customer.address}</p>
                        <p>Age: {customer.age}</p>
                    </div>
                )}
            </div>
        </div>
    );
}