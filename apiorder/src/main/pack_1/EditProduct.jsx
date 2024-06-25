import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EdittProduct() {


    const navigate = useNavigate();
    const { id } = useParams();

    const [product, setProduct] = useState({
        id: '',
        productName: '',
        price: '',
        description: ''
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadproduct();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:9090/product/upDataProduct/${id}`, product);
            alert('Product updated successfully !!');
            navigate('/product');   
        } catch (error) {
            console.error('There was an error updating the Product!', error);
            alert(`There was an error updating the Product! ${error.response ? error.response.data : error.messprice}`);
        }
    };

    const loadproduct = async () => {
        try {
            const result = await axios.get(`http://localhost:9090/product/getProduct/${id}`);
            setProduct(result.data);
        } catch (error) {
            console.error('There was an error loading the Product!', error);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center'>Edit Product</h2>
                    <form onSubmit={handleSubmit}>
        
                        <div className='form-group'>
                            <label htmlFor='productName'>Product Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add First Name'
                                name='productName'
                                value={product.productName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='description'>description</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add Last Name'
                                name='description'
                                value={product.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='price'>Price</label>
                            <input
                                type='number'
                                className='form-control'
                                placeholder='Add price'
                                name='price'
                                value={product.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='d-flex justify-content-between mt-4'>
                            <button className='btn btn-outline-danger' type='submit'>Save</button>
                            <button className='btn btn-secondary' type='button' onClick={() => navigate('/product')}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <aside>
                <h2 className='text-center'>Products</h2>
            </aside>
        </div>
    );
}
