import React, { useState } from 'react';
import axios from 'axios';


export default function Jam() {

    
  const [id, setId] = useState('');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
      e.preventDefault(); // Prevent the form from submitting and reloading the page
      setError(''); // Clear previous errors
      console.log(`Searching for product with ID: ${id}`);

      try {
          const response = await axios.get(`http://localhost:9090/product/getProduct/${id}`);
          console.log('Response:', response);
          setProduct(response.data);
          setError('');
      } catch (err) {
          console.error('Error occurred:', err);
          setProduct(null);
          if (err.response && err.response.status === 404) {
              setError('product not found.');
          }else {
              setError('An error occurred. Please try again.');
          }
      }
  };

  return (
      <div className="container">
          <div className="jumbotron">
              <h1>Search Product</h1>
              <form className="d-flex" role="search" onSubmit={handleSearch}>
                  <input 
                      className="form-control me-2"
                      type="text" 
                      value={id} 
                      onChange={(e) => setId(e.target.value)} 
                      placeholder="Enter product ID" 
                  />
                  <button className="btn btn-outline-info" type="submit">Search</button>
              </form>
              <div className='container m-2 p-3'>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {product && (
                    <div>
                        <h2>Product Details</h2>
                        <p><h5>ID: </h5>{product.id}</p>
                        <p><h5>Product Name: </h5>{product.productName} </p>
                        <p><h5>Price :</h5> :{product.price}</p>
                        <p><h5>Description</h5>: {product.description}</p>
                    </div>
                )}
              </div>
          </div>
      </div>
  );
}
