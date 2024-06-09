import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navgate = useNavigate()

    const [user, setUser] = useState({
        cin: '',
        ferstName: '',
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
            await axios.post('http://localhost:9090/user/addUser', user);
            alert('User added successfully');
            // Optionally reset the form
            setUser({
                cin: '',
                ferstName: '',
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
                            <label htmlFor='cin'>Cin</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add Cin'
                                name='cin'
                                value={user.cin}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='ferstName'>First Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add First Name'
                                name='ferstName'
                                value={user.ferstName}
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
                        <button className='btn btn-outline-danger mx-2' type='submit'>Save</button>
                        <button className='btn btn-secondary' type='button' onClick={() => setUser({
                            cin: '',
                            ferstName: '',
                            lastName: '',
                            password: '',
                            address: '',
                            email: '',
                            phone: ''
                        })}>Cancel</button>
                    </form>
                </div>
            </div>
            <aside>
                <h2 className='text-center'>Customers</h2>
            </aside>
            
        </div>
    );
}