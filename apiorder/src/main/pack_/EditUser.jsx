import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        
        firstName: '',
        lastName: '',
        password: '',
        address: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:9090/customer/updateCustomer/${id}`, user);
            alert('User updated successfully');
            navigate('/main');
        } catch (error) {
            console.error('There was an error updating the user!', error);
            alert('There was an error updating the user!', error);
        }
    };

    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:9090/customer/getCustomerById/${id}`);
            setUser(result.data);
        } catch (error) {
            console.error('There was an error loading the user!', error);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center'>Edit Customer</h2>
                    <form onSubmit={handleSubmit}>
                        
                        <div className='form-group'>
                            <label htmlFor='firstName'>First Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add First Name'
                                name='firstName'
                                value={user.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Last Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add Last Name'
                                name='lastName'
                                value={user.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Add Password'
                                name='password'
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='address'>Address</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add Address'
                                name='address'
                                value={user.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Add Email'
                                name='email'
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='phone'>Phone</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add Phone'
                                name='phone'
                                value={user.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='border mx-2'>
                            <button className='btn btn-outline-danger mx-4' type='submit'>Save</button>
                            <button className='btn btn-secondary' type='button' onClick={() => navigate('/main')}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <aside>
                <h2 className='text-center'>Customers</h2>
            </aside>
        </div>
    );
}
