import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CustomerSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [customers, setCustomers] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:9090/customer/getCustomerById/{id}', {
        params: { search: searchTerm },
      });
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [searchTerm]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchCustomers();
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Customer Search</h1>
        <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              {customer.name} - {customer.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
