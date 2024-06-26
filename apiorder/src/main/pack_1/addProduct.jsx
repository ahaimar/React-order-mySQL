import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    productName: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9090/product/addProduct', product);
      alert('Product added successfully!!');
      // Optionally reset the form
      setProduct({
        productName: '',
        price: '',
        description: ''
      });
      navigate('/product');
    } catch (error) {
      console.error('There was an error adding the product!', error);
    }
  };

  return (
    <div className="container">
      <div className='row mt-5'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center'>New Product</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='productName'>Product Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Add Product name'
                name='productName'
                value={product.productName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='price'>Add Price</label>
              <input
                type='number'
                className='form-control'
                placeholder='Price'
                name='price'
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='description'>description</label>
              <input
                type='text'
                className='form-control'
                placeholder='Add description'
                name='description'
                value={product.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className='d-flex justify-content-between mt-4'>
              <button className='btn btn-outline-primary' type='submit'>Save</button>
              <button
                className='btn btn-outline-danger'
                type='button'
                onClick={() => setProduct({
                  productName: '',
                  price: '',
                  description: ''
                })}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <aside>
        <h2 className='text-center'>The Products</h2>
      </aside>
    </div>
  );
}
