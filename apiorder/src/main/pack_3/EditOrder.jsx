import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditOrder() {
  
    const navigate = useNavigate();
    const { id } = useParams();

    const [order, setOrder] = useState({
        supplier: '',
        product: '',
        quantity:''
    });

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadOrder();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:9090/order/updateOrder/${id}`, order);
            alert('Order updated successfully !!');
            navigate('/order');
        } catch (error) {
            console.error('There was an error updating the Order!', error);
            alert(`There was an error updating the Order! ${error.response ? error.response.data : error.message}`);
        }
    };

    const loadOrder = async () => {
        try {
            const result = await axios.get(`http://localhost:9090/order/getOrderById/${id}`);
            setOrder(result.data);
        } catch (error) {
            console.error('There was an error loading the Order!', error);
        }
    };

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center'>Edit Order</h2>
                    <form onSubmit={handleSubmit}>
        
                        <div className='form-group'>
                            <label htmlFor='supplier'>Supplier </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add Supplier Id'
                                name='supplier'
                                value={order.supplier.id}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='product'>Product </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add Product id'
                                name='product'
                                value={order.product.id}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='quantity'>Quantity</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add quantity'
                                name='quantity'
                                value={order.quantity}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className='d-flex justify-content-between mt-4'>
                            <button className='btn btn-outline-danger' type='submit'>Save</button>
                            <button className='btn btn-secondary' type='button' onClick={() => navigate('/order')}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <aside>
                <h2 className='text-center'>Orders</h2>
            </aside>
        </div>
    );
}
