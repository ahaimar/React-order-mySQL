import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditUser() {
    const [user, setUser] = useState({
        cin: '',
        ferstName: '',
        lastName: '',
        password: '',
        address: '',
        email: '',
        phone: ''
    });

    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = !!id;

    useEffect(() => {
        if (isEdit) {
            // Fetch the user details for editing
            axios.get(`http://localhost:9090/user/${id}`)
                .then(response => setUser(response.data))
                .catch(error => console.error('There was an error fetching the user!', error));
        }
    }, [id, isEdit]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                await axios.put(`http://localhost:9090/user/updateUser/${id}`, user);
                alert('User updated successfully');
            } else {
                await axios.post('http://localhost:9090/user/addUser', user);
                alert('User added successfully');
            }
            // Optionally reset the form or navigate away
            setUser({
                cin: '',
                ferstName: '',
                lastName: '',
                password: '',
                address: '',
                email: '',
                phone: ''
            });
            navigate('/');
        } catch (error) {
            console.error('There was an error!', error);
            alert('Failed to save user. Please try again.');
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center mb-4'>{isEdit ? 'Edit User' : 'New Customer'}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group mb-3'>
                            <label htmlFor='cin'>Cin</label>
                            <input
                                type='text'
                                className='form-control'
                                id='cin'
                                placeholder='Add Cin'
                                name='cin'
                                value={user.cin}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='firstName'>First Name</label>
                            <input
                                type='text'
                                className='form-control'
                                id='firstName'
                                placeholder='Add First Name'
                                name='firstName'
                                value={user.ferstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='lastName'>Last Name</label>
                            <input
                                type='text'
                                className='form-control'
                                id='lastName'
                                placeholder='Add Last Name'
                                name='lastName'
                                value={user.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                id='password'
                                placeholder='Add Password'
                                name='password'
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='address'>Address</label>
                            <input
                                type='text'
                                className='form-control'
                                id='address'
                                placeholder='Add Address'
                                name='address'
                                value={user.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                className='form-control'
                                id='email'
                                placeholder='Add Email'
                                name='email'
                                value={user.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='phone'>Phone</label>
                            <input
                                type='text'
                                className='form-control'
                                id='phone'
                                placeholder='Add Phone'
                                name='phone'
                                value={user.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <button className='btn btn-outline-success mx-2' type='submit'>{isEdit ? 'Update' : 'Save'}</button>
                        <button className='btn btn-secondary' type='button' onClick={() => {
                            setUser({
                                cin: '',
                                firstName: '',
                                lastName: '',
                                password: '',
                                address: '',
                                email: '',
                                phone: ''
                            });
                            navigate('/');
                        }}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
