import React, {useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export default function addProduct() {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    let navGate = useNavigate()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [product, setProduct] = useState({

        titleProduct: '',
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
            alert('User added successfully');
            // Optionally reset the form
            setProduct({
                titleProduct: '',
                price: '',
                description: ''
            });
        } catch (error) {
            console.error('There was an error adding the user!', error);
        }
        navGate('/product')
    };

  return (
    <div>
        <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center'>New Customer</h2>
                    <form onSubmit={handleSubmit}>
                        
                        <div className='form-group'>
                            <label htmlFor='firstName'>Product Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add Product name'
                                name='firstName'
                                value={product.titleProduct}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>add Price</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Price'
                                name='lastName'
                                value={product.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>description</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Add description'
                                name='password'
                                value={product.description}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className='container row justify-content-center m-1'>
                            <button className='btn btn-outline-primary' type='submit'>Save</button>
                            <button className='btn btn-outline-danger' type='button' onClick={() => setProduct({
                                
                                titleProduct: '',
                                price: '',
                                description: ''
                            })}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <aside>
                <h2 className='text-center'>the Products .</h2>
            </aside>


    </div>
  )
}
