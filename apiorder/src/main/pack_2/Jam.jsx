import React, { useState } from 'react';
import axios from 'axios';


export default function Jam() {
  const [id, setId] = useState('');
  const [supplier, setSupplier] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
      e.preventDefault(); // Prevent the form from submitting and reloading the page
      setError(''); // Clear previous errors
      console.log(`Searching for supplier with ID: ${id}`);

      try {
          const response = await axios.get(`http://localhost:9090/supplier/getSupplierById/${id}`);
          console.log('Response:', response);
          setSupplier(response.data);
          setError('');
      } catch (err) {
          console.error('Error occurred:', err);
          setSupplier(null);
          if (err.response && err.response.status === 404) {
              setError('supplier not found.');
          }else {
              setError('An error occurred. Please try again.');
          }
      }
  };

  return (
      <div className="container">
          <div className="jumbotron">
              <h1>Search Supplier</h1>
              <form className="d-flex" role="search" onSubmit={handleSearch}>
                  <input 
                      className="form-control me-2"
                      type="text" 
                      value={id} 
                      onChange={(e) => setId(e.target.value)} 
                      placeholder="Enter supplier ID" 
                  />
                  <button className="btn btn-outline-info" type="submit">Search</button>
              </form>
              <div className='container m-2 p-3'>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {supplier && (
                    <div>
                        <h2>Supplier Details</h2>
                        <p><h5>ID :</h5>{supplier.id}</p>
                        <p><h5>Supplier Name :</h5>{supplier.supplierName} </p>
                        <p><h5>Phone :</h5>{supplier.supplierPhone}</p>
                        <p><h5>Email :</h5>{supplier.supplierEmail}</p>
                    </div>
                )}
              </div>
          </div>
      </div>
  );
}
