import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navgate = useNavigate()

    const [user, setUser] = useState({
        id: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:9090/customer/addCustomer', user);
            alert('User added successfully');
            // Optionally reset the form
            setUser({
                cin: '',
                firstName: '',
                lastName: '',
                password: '',
                address: '',
                email: '',
                phone: ''
            });
        } catch (error) {
            console.error('There was an error adding the user!', error);
        }
        navgate('/main')
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center'>New Customer</h2>
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
                            <label htmlFor='age'>Age</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add age'
                                name='age'
                                value={user.age}
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
                        <div className='d-flex justify-content-between mt-4'>
                            <button className='btn btn-outline-primary' type='submit'>Save</button>
                            <button className='btn btn-outline-danger' type='button' onClick={() => setUser({
                                
                                firstName: '',
                                lastName: '',
                                password: '',
                                address: '',
                                email: '',
                                phone: ''
                            })}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <aside>
                <h2 className='text-center'>the Customers</h2>
            </aside>
            
        </div>
    );
}