import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

export default function CustomerSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const fetchCustomers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:9090/customer/search/${id}`, {
        params: { search: searchTerm },
      });
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
      setError('Error fetching customers. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchCustomers();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
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
          <button className="btn btn-outline-info" type="submit">
            Search
          </button>
        </form>
        {loading ? (<p>Loading...</p>) : error ? (<p>{error}</p> ) : (<ul>

                {customers.map((customer) => (
                            <li key={customer.id}>
                              {customer.firstName} - {customer.lastName}
                              {customer.phone} - {customer.email}
                              {customer.address} - {customer.age} 
                              {customer.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
