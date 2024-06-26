import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function addSupplier() {

    //--   /supplier/addSupplier

    let navgate = useNavigate()

    const [supplier, setSupplier] = useState({
        id: '',
        supplierName: '',
        supplierPhone: '',
        supplierEmail: ''
    });

    const handleChange = (e) => {
        setSupplier({ ...supplier, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:9090/supplier/addSupplier', supplier);
            alert('supplier added successfully');
            // Optionally reset the form
            setSupplier({
                id: '',
                supplierName: '',
                supplierPhone: '',
                supplierEmail: ''
            });
        } catch (error) {
            console.error('There was an error adding the supplier!', error);
        }
        navgate('/supplier')
    };

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center'>New Supplier !!</h2>
                    <form onSubmit={handleSubmit}>
                        
                        <div className='form-group'>
                            <label htmlFor='supplierName'>Supplier Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add First Name'
                                name='supplierName'
                                value={supplier.supplierName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='supplierPhone'>Supplier phone</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Add Phone'
                                name='supplierPhone'
                                value={supplier.supplierPhone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='supplierEmail'>Supplier Email</label>
                            <input
                                type='email'
                                className='form-control'
                                placeholder='Add Email'
                                name='supplierEmail'
                                value={supplier.supplierEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='d-flex justify-content-between mt-4'>
                            <button className='btn btn-outline-primary' type='submit'>Save</button>
                            <button className='btn btn-outline-danger' type='button' onClick={() => setSupplier({
                                
                                supplierName: '',
                                supplierPhone: '',
                                supplierEmail: ''
                            })}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            <aside>
                <h2 className='text-center'>the Supplier</h2>
            </aside>
            
        </div>
    );
}
